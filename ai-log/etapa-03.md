# AI Log — Stage 3: Project Initialization (Vite & React)

## Tools used

| Tool | Used for |
| :--- | :--- |
| Gemini | Brainstorming project theme, data model, and initial mockups |
| Antigravity (Claude) | Initializing the Vite + React project in `frontend/`, cleaning up demo files, porting styles to `App.css`, moving data to `App.jsx`, verifying build and dev server |

---

## Relevant conversations

### Antigravity (Claude) — Vite and React setup

**Prompt 1:**
> How should earlier stage files (Stage 1 and Stage 2) be archived when migrating to a Vite + React structure according to the Stage 3 guide, and how do we scaffold the frontend project?

**Response summary:**
Earlier files (`index.html`, `style.css`, and `internships.js`) are moved into a new `mockup/` folder at the repository root using `git mv`. This keeps Git history clean without interfering with the new build tool. Then, we create the Vite React project in `frontend/` using `npm create vite@latest frontend -- --template react`, followed by `npm install` inside the `frontend/` directory.

---

**Prompt 2:**
> Why are static styles copied to `App.css` and why should the initial data array be placed outside the `App` component function rather than inside it?

**Response summary:**
In React, any code inside the component function runs on every render / state update. Placing static initial data inside `App()` would recreate that array reference repeatedly on each render cycle. Placing `const internships = [...]` above `App()` ensures it is parsed and allocated once in module scope. Meanwhile, copying the Stage 1 CSS to `App.css` and updating `.container` to `grid-template-columns: 1fr;` ensures seamless visual continuity while accommodating the single data panel of Stage 3.

---

**Prompt 3:**
> What is the role of `package.json`, `npm run dev`, and `npm run build`, and why must `node_modules` and `dist` be in `.gitignore`?

**Response summary:**
`package.json` tracks project dependencies and scripts. `npm run dev` starts the Vite development server with Hot Module Replacement (HMR) for fast live-reloading. `npm run build` uses Rollup/Vite to bundle and minify JSX and CSS into production assets inside `dist/`. `node_modules/` contains thousands of third-party files that can always be reinstalled with `npm install`, and `dist/` contains ephemeral build artifacts; committing them would bloat the Git repository.

---

## What I learned in Stage 3

- How to scaffold a modern React project using Vite in a dedicated `frontend/` directory.
- How to manage project transitions cleanly by archiving earlier static mockups into `mockup/`.
- The essential syntax differences between HTML and JSX: `className` instead of `class`, closing all self-closing tags (`<input />`), using JavaScript expressions within `{ }`, and wrapping adjacent elements in React fragments `<>...</>`.
- How values calculated from data (e.g., active items count) update the UI dynamically via JSX expressions.
- How Vite compiles ES modules and JSX into a bundle with `npm run build`, and how `.gitignore` keeps repository size minimal.
