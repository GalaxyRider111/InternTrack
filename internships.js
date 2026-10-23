/* ============================================================
   internships.js — InternTrack · Stage 2: Data Logic
   Plain JavaScript, no DOM. Results printed in the console (F12).
   ============================================================ */

// --- Pasul 2: Initial data (the 3 test items from README) + allowed values ---

const internships = [
  { id: 1, title: "Junior Frontend Developer", applied: false, demand: "high", company: "Bitdefender", workMode: "hybrid", cvMatch: 88, deadline: "5 days left" },
  { id: 2, title: "CNC Machine Operator Intern", applied: true, demand: "medium", company: "Bosch", workMode: "on-site", cvMatch: 62, deadline: "Expired" },
  { id: 3, title: "Legal Assistant Intern", applied: false, demand: "low", company: "CMS Law", workMode: "on-site", cvMatch: 74, deadline: "12 days left" },
];

const DEMANDS = ["low", "medium", "high"];

// --- Pasul 3: List titles (map) ---

function listTitles(list) {
  return list.map((t) => t.title);
}

// --- Pasul 4: Count active / not-yet-applied (filter) ---

function countActive(list) {
  return list.filter((t) => !t.applied).length;
}

// --- Pasul 5: Search by title (filter + includes, case-insensitive) ---

function searchByTitle(list, text) {
  return list.filter((t) =>
    t.title.toLowerCase().includes(text.toLowerCase())
  );
}

// --- Pasul 6: Next unique id (reduce) + Add internship (immutable) ---

function nextId(list) {
  return list.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function addInternship(list, title, demand = "medium") {
  const titleClean = title ? title.trim() : "";
  if (!titleClean) {
    console.error("Titlul nu poate fi gol.");
    return list;
  }
  if (!DEMANDS.includes(demand)) {
    console.error("Cerere invalidă:", demand);
    return list;
  }
  const item = {
    id: nextId(list),
    title: titleClean,
    applied: false,
    demand: demand,
    company: "",
    workMode: "hybrid",
    cvMatch: 0,
    deadline: "",
  };
  return [...list, item];
}

// --- Pasul 7: Toggle applied state (map, immutable) + Delete (filter, immutable) ---

function toggleApplied(list, id) {
  return list.map((t) =>
    t.id === id ? { ...t, applied: !t.applied } : t
  );
}

function deleteInternship(list, id) {
  return list.filter((t) => t.id !== id);
}

// ============================================================
// Pasul 8: Manual tests — grouped by section
// ============================================================

console.log("--- Citire ---");
console.log("Titluri:", listTitles(internships).join(", "));
console.log("Active:", countActive(internships));
console.log("Căutare 'intern':", listTitles(searchByTitle(internships, "intern")).join(", "));

console.log("--- Adăugare ---");
let lista = addInternship(internships, "Data Science Intern", "high");
console.log("Lista nouă:", lista.length, "oportunități");
console.log("Originalul a rămas cu:", internships.length, "oportunități");

console.log("--- Modificare și ștergere ---");
lista = toggleApplied(lista, 1);
console.log("După bifarea id 1, active:", countActive(lista));
lista = deleteInternship(lista, 3);
console.log("După ștergerea id 3:", listTitles(lista).join(", "));

console.log("--- Validare ---");
addInternship(lista, "   ");
addInternship(lista, "Test", "urgent");
