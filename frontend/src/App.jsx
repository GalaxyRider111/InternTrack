const internships = [
  { id: 1, title: "Junior Frontend Developer", applied: false, demand: "high", company: "Bitdefender", workMode: "hybrid", cvMatch: 88, deadline: "5 days left" },
  { id: 2, title: "CNC Machine Operator Intern", applied: true, demand: "medium", company: "Bosch", workMode: "on-site", cvMatch: 62, deadline: "Expired" },
  { id: 3, title: "Legal Assistant Intern", applied: false, demand: "low", company: "CMS Law", workMode: "on-site", cvMatch: 74, deadline: "12 days left" },
];

export default function App() {
  const active = internships.filter((t) => !t.applied).length;

  return (
    <>
      <header className="app-header">
        <h1>InternTrack</h1>
        <p>Track internships and entry-level jobs. Find the right opportunity.</p>
        <p className="app-count">
          {internships.length} opportunities, of which {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>My opportunities</h2>
          {/* Temporar: date brute; componentele apar în Etapa 4 */}
          <pre>{JSON.stringify(internships, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}
