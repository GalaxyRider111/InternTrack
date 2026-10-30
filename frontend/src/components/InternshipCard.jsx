// Un singur element din listă, primit prin props.
const DEMAND_LABELS = { low: "Low", medium: "Medium", high: "High" };
const WORK_MODE_LABELS = { remote: "Remote", hybrid: "Hybrid", "on-site": "On-site" };

export default function InternshipCard({ internship }) {
  return (
    <li className={internship.applied ? "item-card done" : "item-card"}>
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
      <span className="status">{internship.applied ? "Done" : "Active"}</span>
    </li>
  );
}
