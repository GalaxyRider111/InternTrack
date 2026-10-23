# AI Log — Stage 1: Static Mockup

## Tools used

| Tool | Used for |
| :--- | :--- |
| Gemini | Brainstorming the project theme (InternTrack), structuring the data model, and generating the initial README format |
| Antigravity (Claude Sonnet) | Implementing index.html and style.css following the TW_Etapa1_Ghid.pdf guide; creating the ai-log structure |

---

## Relevant conversations

### Gemini — Brainstorming & Data model

**Prompt 1:**
> I'm a 3rd-year computer science student and I need to build a semester project for a Web Technologies course. The app should be a list-based tool I personally find useful. What are some ideas that would fit a simple CRUD tracker?

**Response summary:**
Gemini suggested several ideas: a reading tracker, a gym log, a budget planner, and an internship tracker. The internship tracker stood out because it combines multiple relevant fields (company, deadline, CV match %) and maps naturally to the required data model (title, boolean, fixed-value tag).

**Link:** *(conversation not shared — Gemini free tier)*

---

**Prompt 2:**
> For an internship tracker app called InternTrack, define a data model with: a required text field (title), a boolean (applied), a fixed-value field with 3 options (demand: low/medium/high), and extra fields for company, work mode, CV match %, and deadline. Format it as a markdown table.

**Response summary:**
Gemini returned the exact table structure now present in the README. It also suggested using `cvMatch` as a number (0–100) and `deadline` as a human-readable string like "3 days left". The field names and types were adopted without modification.

---

### Antigravity (Claude Sonnet) — HTML & CSS implementation

**Prompt 3:**
> Following the TW_Etapa1_Ghid.pdf guide, implement index.html and style.css for my InternTrack project. The page should have: a semantic header with app name, description and item counter; a main container split in two columns with CSS Grid (1fr 2fr); a left panel with an add-form (text input + select for demand + submit button); a right panel with a ul of 3 hardcoded li cards using sample data from the README; a footer. The done card should show line-through title and muted color. Add :hover on cards and button, :focus-visible for keyboard navigation, @media (max-width: 700px) for single column, and @media (prefers-color-scheme: dark) for a dark theme. Use CSS custom properties in :root.

**Response summary:**
Claude generated `index.html` with proper semantic structure (header, main.container, section.panel × 2, ul.item-list, li.item-card, footer) and `style.css` with all required CSS. The dark theme overrides only the CSS variables in `:root`. The `done` card (CNC Machine Operator Intern) uses `class="item-card done"` and has a strikethrough title. All three sample items from the README are present.

**Key learning:** The CSS `grid-template-columns: 1fr 2fr` creates a narrower form panel and a wider list panel. On narrow screens (`@media max-width: 700px`) this collapses to `1fr` for a single-column layout. The `prefers-color-scheme: dark` media query overrides only the custom properties, so all other rules automatically adapt through `var()`.

---

## What I learned in Stage 1

- How to structure a semantic HTML page with `header`, `main`, `section`, `ul/li`, `footer` without any JavaScript.
- How CSS Grid's `grid-template-columns` creates multi-column layouts and how `@media` collapses them on mobile.
- How CSS custom properties (`--variable-name`) in `:root` make theming trivial — only one block changes for dark mode.
- How `:focus-visible` adds a visible outline only for keyboard users (not mouse clicks), which is the modern accessibility standard.
- How to use Git to track versions: `git init` → `git add` → `git commit` → `git push`.
