// Un singur element din listă, primit prin props.
const DEMAND_LABELS = { low: "Low", medium: "Medium", high: "High" };
const WORK_MODE_LABELS = { remote: "Remote", hybrid: "Hybrid", "on-site": "On-site" };

export default function InternshipCard({ internship, onToggle, onDelete }) {
  return (
    <li className={internship.applied ? "item-card done" : "item-card"}>
      <div className="card-top">
        <div className="card-brand">
          <span className="brand-avatar">{internship.company.charAt(0)}</span>
          <span className="brand-name">{internship.company}</span>
        </div>
        <div className="card-badges">
          <span className={`badge badge-mode badge-mode-${internship.workMode}`}>
            {WORK_MODE_LABELS[internship.workMode]}
          </span>
          <span className={`badge badge-${internship.demand}`}>
            {DEMAND_LABELS[internship.demand]} demand
          </span>
        </div>
      </div>

      <label className="item-main">
        <input
          type="checkbox"
          checked={internship.applied}
          onChange={() => onToggle(internship.id)}
        />
        <div className="item-content">
          <h3>{internship.title}</h3>

          <div className="bento-match-meter">
            <div className="match-label-row">
              <span className="match-title">🎯 CV Match Score</span>
              <span className="match-score">{internship.cvMatch}%</span>
            </div>
            <div className="match-bar-track">
              <div
                className="match-bar-fill"
                style={{ width: `${Math.min(100, Math.max(0, internship.cvMatch))}%` }}
              />
            </div>
          </div>

          <p className="item-meta">
            {internship.company} &middot; {WORK_MODE_LABELS[internship.workMode]} &middot;{" "}
            CV match: {internship.cvMatch}% &middot; {internship.deadline}
          </p>
        </div>
      </label>

      <div className="card-actions">
        <span className={`status-tag ${internship.applied ? "status-applied" : "status-open"}`}>
          {internship.applied ? "✓ Applied" : `⏳ ${internship.deadline}`}
        </span>
        <button
          className="btn-danger"
          onClick={() => onDelete(internship.id)}
          aria-label={`Delete ${internship.title}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
