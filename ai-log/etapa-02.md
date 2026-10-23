# AI Log — Stage 2: Data Logic in JavaScript

## Tools used

| Tool | Used for |
| :--- | :--- |
| Gemini | Brainstorming the project theme (InternTrack) and data model (Stage 1) |
| Antigravity (Claude Opus) | Implementing `internships.js` following the TW_Etapa2_Ghid.pdf guide: array of objects, immutable functions (map, filter, reduce), validation, and manual console tests |

---

## Relevant conversations

### Antigravity (Claude Opus) — JavaScript data logic

**Prompt 1:**
> Following the TW_Etapa2_Ghid.pdf guide, create `internships.js` for the InternTrack project. The file must contain: a `const internships` array with the 3 test items from the README (each with an `id` field), a `const DEMANDS` array with the allowed values `["low", "medium", "high"]`, and 7 pure (immutable) functions: `listTitles` (map), `countActive` (filter), `searchByTitle` (filter + includes, case-insensitive), `nextId` (reduce), `addInternship` (validation + spread), `toggleApplied` (map + spread), `deleteInternship` (filter). Add manual tests at the bottom grouped by sections: Citire, Adăugare, Modificare și ștergere, Validare.

**Response summary:**
Claude generated the complete `internships.js` adapted to the InternTrack domain. Key naming decisions: file `internships.js` (not `taskuri.js`), array `internships`, constant `DEMANDS`, functions named in English to match the field names (`listTitles`, `countActive`, `toggleApplied`, etc.). The `addInternship` function validates with `trim()` and checks against the `DEMANDS` array before creating a new object with `nextId()`. All functions return new arrays/objects — no mutation.

---

**Prompt 2:**
> How does `nextId` work and why is it better than `lista.length + 1`?

**Response summary:**
`nextId` uses `reduce` to scan the entire array for the maximum `id` value, then adds 1. This avoids duplicates after deletions: if items `[1, 2, 3]` exist and id 2 is deleted, `list.length + 1` would return 3 (duplicate), but `reduce(max)` returns 4.

---

**Prompt 3:**
> Show me how immutability is preserved in the add, toggle, and delete functions.

**Response summary:**
- **Add:** `[...list, newItem]` — creates a new array that contains all original elements plus the new one.
- **Toggle:** `list.map(t => t.id === id ? { ...t, applied: !t.applied } : t)` — `map` creates a new array; the spread `{ ...t }` creates a shallow copy of the matched item with the `applied` field flipped.
- **Delete:** `list.filter(t => t.id !== id)` — `filter` creates a new array with only the elements that pass the test.

In all cases, the original `internships` array is never modified.

---

## What I learned in Stage 2

- How to represent application data as an array of objects with unique `id` fields.
- How `map`, `filter`, `find`, and `reduce` return new arrays/values without mutating the original — critical for React in Stage 5.
- How to validate inputs (empty strings after `trim()`, invalid enum values) before modifying data, returning the original list on failure.
- How to test data logic in the browser console (F12) by grouping `console.log` calls into named sections (`--- Citire ---`, `--- Validare ---`).
- The `internships.js` file is linked with `<script src="...">` just before `</body>`. It does **not** touch the DOM — the page looks exactly the same as Stage 1.
