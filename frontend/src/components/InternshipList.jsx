import InternshipCard from "./InternshipCard.jsx";

// Primește lista și funcțiile și le transmite fiecărui card.
export default function InternshipList({ internships, onToggle, onDelete }) {
  if (internships.length === 0) {
    return (
      <div className="empty-box">
        <div className="empty-icon">📭</div>
        <p className="empty">No opportunities yet.</p>
        <span className="empty-hint">Add or restore opportunities to track them here.</span>
      </div>
    );
  }

  return (
    <ul className="item-list">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          internship={internship}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
