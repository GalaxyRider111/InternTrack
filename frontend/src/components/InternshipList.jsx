import InternshipCard from "./InternshipCard.jsx";

// Primește lista și funcțiile și le transmite fiecărui card.
export default function InternshipList({ internships, onToggle, onDelete }) {
  if (internships.length === 0) {
    return <p className="empty">No opportunities yet.</p>;
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
