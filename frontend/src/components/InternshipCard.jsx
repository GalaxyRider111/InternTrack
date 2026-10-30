// Un singur element din listă, primit prin props.
const DEMAND_LABELS = { low: "Low", medium: "Medium", high: "High" };
const WORK_MODE_LABELS = { remote: "Remote", hybrid: "Hybrid", "on-site": "On-site" };

export default function InternshipCard({ internship, onToggle, onDelete }) {
  return (
    <li className={internship.applied ? "item-card done" : "item-card"}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={internship.applied}
          onChange={() => onToggle(internship.id)}
        />
        <div>
          <h3>{internship.title}</h3>
          <span className={`badge badge-${internship.demand}`}>
            {DEMAND_LABELS[internship.demand]} demand
          </span>
          <p className="item-meta">
            {internship.company} &middot; {WORK_MODE_LABELS[internship.workMode]} &middot;{" "}
            CV match: {internship.cvMatch}% &middot; {internship.deadline}
          </p>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(internship.id)}
        aria-label={`Delete ${internship.title}`}
      >
        Delete
      </button>
    </li>
  );
}
