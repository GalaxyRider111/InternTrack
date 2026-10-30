import InternshipCard from "./InternshipCard.jsx";

// Întreaga listă, primită prin props; câte un card pentru fiecare element.
export default function InternshipList({ internships }) {
  if (internships.length === 0) {
    return <p className="empty">No opportunities yet.</p>;
  }

  return (
    <ul className="item-list">
      {internships.map((internship) => (
        <InternshipCard key={internship.id} internship={internship} />
      ))}
    </ul>
  );
}
