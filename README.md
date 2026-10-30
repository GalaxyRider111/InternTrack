# InternTrack

InternTrack is a personal internship and entry-level job tracker designed for university students.
It helps students organize job opportunities, evaluate CV match percentages, and track their application status across different industries.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| title | text | required, max 100 chars (e.g., Junior Frontend Intern at Google) |
| applied | boolean | toggled from the list, default false (marks if the student already applied / closed the offer) |
| demand | fixed values | `low`, `medium`, `high` (how sought-after this job type is) |
| category | relation | `IT`, `Legal`, `CNC & Engineering` (from week 10) |
| user | relation | the owner of the item / the logged-in student (from week 11) |
| company | text | extra field: the company offering the internship |
| workMode | fixed values | extra field: `remote`, `hybrid`, `on-site` |
| cvMatch | number | extra field: compatibility percentage with the student's CV (0-100) |
| deadline | text | extra field: time remaining to apply (e.g., 3 days left) |

Sample data used across all stages:
1. Junior Frontend Developer (Bitdefender), active, high
2. CNC Machine Operator Intern (Bosch), done, medium
3. Legal Assistant Intern (CMS Law), active, low

## How to run

```bash
cd frontend
npm install
npm run dev
```

Then open the address printed in the terminal (http://localhost:5173).

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Brainstorming project theme, defining data model, generating initial README structure, and suggesting HTML/CSS patterns |
| Antigravity (Claude / Gemini) | Implementing Stage 1 (mockup), Stage 2 data logic (internships.js), Stage 3 (Vite + React project in frontend/), Stage 4 (components rendered from data), and Stage 5 (local state, event handlers, theme switcher) |

Details per stage: see the `ai-log/` folder.

## Stage 2: data logic

Plain JavaScript, no DOM. `mockup/internships.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project

The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## Stage 4: components

The list is rendered from the data, through two components:
- `InternshipList` receives the whole array and renders one card per item
- `InternshipCard` receives a single item through props and displays it

## Stage 5: local state and events

The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

## Verification Checklist (Stage 1)

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](README.md) | read |
| S1-R2 | AI usage section | [README.md#ai-usage](README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [mockup/index.html](mockup/index.html) | open the page |
| S1-R5 | finished card looks different (line-through, muted color) | [mockup/style.css](mockup/style.css) | look at card #2 |
| S1-R6 | 2 columns on desktop, 1 under 700px | [mockup/style.css](mockup/style.css) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [mockup/style.css](mockup/style.css) | Tab key; dark mode |
| S1-R8 | commit "Stage 1" pushed | see commit history | git log |

## Verification Checklist (Stage 2)

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | [mockup/index.html](mockup/index.html) (script) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [mockup/internships.js#L8-L12](mockup/internships.js) | read |
| S2-R3 | list, count, search, add, toggle, delete | [mockup/internships.js#L18-L70](mockup/internships.js) | console output |
| S2-R4 | add rejects empty name and invalid tag | [mockup/internships.js#L88-L89](mockup/internships.js) | last 2 console lines |
| S2-R5 | original array unchanged after add | [mockup/internships.js#L84](mockup/internships.js) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](README.md), [ai-log/etapa-02.md](ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | see commit history | git log |

## Verification Checklist (Stage 3)

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L14-L24](frontend/src/App.jsx) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L1-L5](frontend/src/App.jsx) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](README.md), [ai-log/etapa-03.md](ai-log/etapa-03.md) | read |
| S3-R7 | commit "Stage 3" pushed | see commit history | git log |

## Verification Checklist (Stage 4)

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/GalaxyRider111/InternTrack/tree/29323a3ede774703ddc70c8c7cef3aa78c1016a2/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [InternshipCard.jsx#L5-L21](https://github.com/GalaxyRider111/InternTrack/blob/29323a3ede774703ddc70c8c7cef3aa78c1016a2/frontend/src/components/InternshipCard.jsx#L5-L21) | read |
| S4-R3 | map + key={id}, no console warnings | [InternshipList.jsx#L9-L15](https://github.com/GalaxyRider111/InternTrack/blob/29323a3ede774703ddc70c8c7cef3aa78c1016a2/frontend/src/components/InternshipList.jsx#L9-L15) | F12, Console |
| S4-R4 | message for empty list | [InternshipList.jsx#L5-L7](https://github.com/GalaxyRider111/InternTrack/blob/29323a3ede774703ddc70c8c7cef3aa78c1016a2/frontend/src/components/InternshipList.jsx#L5-L7) | set array to [] |
| S4-R5 | state changes the card look | [InternshipCard.jsx#L7](https://github.com/GalaxyRider111/InternTrack/blob/29323a3ede774703ddc70c8c7cef3aa78c1016a2/frontend/src/components/InternshipCard.jsx#L7) | toggle an `applied` flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](README.md), [ai-log/etapa-04.md](ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [29323a3](https://github.com/GalaxyRider111/InternTrack/commit/29323a3ede774703ddc70c8c7cef3aa78c1016a2) | commit history |

## Verification Checklist (Stage 5)

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | list kept in useState, in App | [App.jsx#L17](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/App.jsx#L17) | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L21-L25](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/App.jsx#L21-L25), [InternshipCard.jsx#L7-L13](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/components/InternshipCard.jsx#L7-L13) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L27-L29](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/App.jsx#L27-L29), [InternshipCard.jsx#L25-L31](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/components/InternshipCard.jsx#L25-L31) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx#L39](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/App.jsx#L39) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx#L21-L29](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/App.jsx#L21-L29) | read |
| S5-R6 | light / dark toggle: state + data-theme on html | [App.jsx#L32-L36](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/App.jsx#L32-L36), [App.css#L267-L300](https://github.com/GalaxyRider111/InternTrack/blob/8967c61dce4dabcceecf0f9f7e83ae24653fb67c/frontend/src/App.css#L267-L300) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md](README.md), [ai-log/etapa-05.md](ai-log/etapa-05.md) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [8967c61](https://github.com/GalaxyRider111/InternTrack/commit/8967c61dce4dabcceecf0f9f7e83ae24653fb67c) | commit history |