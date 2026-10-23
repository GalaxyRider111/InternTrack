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

Open `index.html` in a browser. No build step, no server.

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Brainstorming project theme, defining data model, generating Stage 1 README structure, and suggesting HTML/CSS patterns for the static mockup |
| Antigravity (Claude) | Implementing all Stage 1 files (index.html, style.css, ai-log) following the TW_Etapa1_Ghid.pdf requirements |

Details per stage: see the `ai-log/` folder.

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Verification Checklist (Stage 1)

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](README.md) | read |
| S1-R2 | AI usage section | [README.md#ai-usage](README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](index.html) | open the page |
| S1-R5 | finished card looks different (line-through, muted color) | [style.css](style.css) | look at card #2 |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](style.css) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css](style.css) | Tab key; dark mode |
| S1-R8 | commit "Stage 1" pushed | see commit history | git log |