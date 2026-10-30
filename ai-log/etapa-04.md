# AI Log — Stage 4: Components Rendered from Data

## Tools used

| Tool | Used for |
| :--- | :--- |
| Gemini | Brainstorming project theme, data model, and initial mockups |
| Antigravity (Claude) | Splitting the list into `InternshipList` and `InternshipCard` components, mapping the Stage 1 card markup to JSX driven by props, testing the empty list / state change / console warnings |

---

## Relevant conversations

### Antigravity (Claude) — React components and props

**Prompt 1:**
> How do I adapt the generic `TaskCard` / `TaskList` structure from the Stage 4 guide to the InternTrack data model (title, applied, demand, company, workMode, cvMatch, deadline)?

**Response summary:**
The components were named after the theme: `InternshipCard` (one item) and `InternshipList` (the whole list), each in its own file in `frontend/src/components/`. The prop passed from `App` is `internships`, and the card receives a single `internship`. The card reuses the exact markup and CSS classes from the Stage 1 mockup (`item-card`, `badge-high/medium/low`, `item-meta`, `status`), so the visual result is identical. The extra fields (company, work mode, CV match, deadline) are shown in the card under the title, in the `item-meta` line.

---

**Prompt 2:**
> Why keep values like `on-site` or `medium` in the data and translate them only when displaying them?

**Response summary:**
The data stores stable, machine-friendly values that are also used to build CSS class names (`badge-${demand}` → `badge-medium`). The text shown on screen is produced by small lookup objects (`DEMAND_LABELS`, `WORK_MODE_LABELS`). This separates the display labels from the data values: the labels can change (or be translated) without touching the data or the CSS, and every possible value of `demand` must have a matching CSS class, otherwise the badge has no color.

---

**Prompt 3:**
> Where does the `key` attribute go, why must it be the `id` and not the index, and how do I handle an empty list?

**Response summary:**
`key` is placed on the component returned directly from `map` — `<InternshipCard key={internship.id} ... />` — not on an element inside the card. React uses it to recognise items between renders; the index would change when an item is deleted (Stage 5) and lead to wrong updates, while the `id` is unique and stable. The empty list is handled first with an early return (`<p className="empty">No opportunities yet.</p>`), so the `<ul>` is only rendered when there are items.

---

## Tests performed

- 3 cards rendered from the array, identical to the mockup; console has no React warnings.
- Array temporarily set to `[]`: the message "No opportunities yet." appears and the header shows `0 opportunities, of which 0 active`.
- `applied` of item 1 temporarily set to `true`: the card immediately gets the `done` look (line-through, muted, status "Done") and the counter drops to 1 active, with no other code change.

---

## What I learned in Stage 4

- How to split the interface into components, one per file, in `src/components/`.
- How data flows from parent to child through props, and that props are read-only in the child.
- How to render a list from an array with `map` and why `key={id}` is required.
- How to use conditional rendering: the ternary for the card class / status text, and an early return for the empty list.
- How to read React warnings in the browser console (e.g. "Each child in a list should have a unique key prop").
