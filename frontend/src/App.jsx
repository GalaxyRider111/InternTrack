import { useState } from "react";
import InternshipList from "./components/InternshipList.jsx";

// Datele temei, aceleași ca în README (doar valoarea inițială)
const INITIAL_INTERNSHIPS = [
  { id: 1, title: "Junior Frontend Developer", applied: false, demand: "high", company: "Bitdefender", workMode: "hybrid", cvMatch: 88, deadline: "5 days left" },
  { id: 2, title: "CNC Machine Operator Intern", applied: true, demand: "medium", company: "Bosch", workMode: "on-site", cvMatch: 62, deadline: "Expired" },
  { id: 3, title: "Legal Assistant Intern", applied: false, demand: "low", company: "CMS Law", workMode: "on-site", cvMatch: 74, deadline: "12 days left" },
];

// Tema de pornire: cea a sistemului de operare
function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [internships, setInternships] = useState(INITIAL_INTERNSHIPS);
  const [theme, setTheme] = useState(initialTheme);

  // Actualizare imutabilă: listă nouă, obiect nou pentru elementul schimbat
  function handleToggle(id) {
    setInternships((prev) =>
      prev.map((t) => (t.id === id ? { ...t, applied: !t.applied } : t))
    );
  }

  function handleDelete(id) {
    setInternships((prev) => prev.filter((t) => t.id !== id));
  }

  // Comutarea temei: state-ul pentru buton, atributul data-theme pentru CSS
  function handleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  // Valoare derivată: se recalculează la fiecare randare
  const active = internships.filter((t) => !t.applied).length;
  const appliedCount = internships.length - active;

  return (
    <div className="page-wrapper">
      <header className="app-header">
        <div className="bento-header-grid">
          {/* Hero Bento Box */}
          <div className="bento-hero-card">
            <div className="bento-hero-header">
              <span className="neo-sticker">⚡ INTERN TRACKER</span>
              <button
                className="theme-toggle"
                onClick={handleTheme}
                aria-pressed={theme === "dark"}
              >
                {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
              </button>
            </div>
            <h1>InternTrack</h1>
            <p>Track internships and entry-level jobs. Find the right opportunity.</p>
            <p className="app-count">
              {internships.length} opportunities, of which {active} active
            </p>
          </div>

          {/* Bento Stat: Total */}
          <div className="bento-stat-card bento-stat-total">
            <span className="bento-stat-label">TOTAL POSITIONS</span>
            <span className="bento-stat-value">{internships.length}</span>
            <span className="bento-stat-pill">📋 Tracked</span>
          </div>

          {/* Bento Stat: Active */}
          <div className="bento-stat-card bento-stat-active">
            <span className="bento-stat-label">ACTIVE ROLES</span>
            <span className="bento-stat-value">{active}</span>
            <span className="bento-stat-pill">🔥 Open</span>
          </div>

          {/* Bento Stat: Applied */}
          <div className="bento-stat-card bento-stat-applied">
            <span className="bento-stat-label">APPLIED / CLOSED</span>
            <span className="bento-stat-value">{appliedCount}</span>
            <span className="bento-stat-pill">✅ Finished</span>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="panel">
          <div className="panel-header-bar">
            <div>
              <h2>My opportunities</h2>
              <span className="panel-subtitle">Review status, deadline, and CV match rating</span>
            </div>
            <div className="bento-badge-counter">
              {active} active &middot; {internships.length} total
            </div>
          </div>

          <InternshipList
            internships={internships}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web</footer>
    </div>
  );
}
