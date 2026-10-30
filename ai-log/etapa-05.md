# AI Log — Stage 5: Local State and Events

## Tools used

| Tool | Used for |
| :--- | :--- |
| Gemini | Brainstorming project theme, data model, and initial mockups |
| Antigravity (Gemini / Claude) | Implementing local state in `App`, immutable toggle and delete handlers, controlled checkbox in `InternshipCard`, accessible delete button with `aria-label`, light/dark theme switcher in header, and browser verification |

---

## Relevant conversations

### Antigravity — Local state and immutable events

**Prompt 1:**
> Where should the state live for toggling and deleting items, and how do we ensure updates are immutable?

**Response summary:**
State lives in the top-most common ancestor that needs it — in this case `App`. Components further down the tree like `InternshipCard` cannot mutate data directly because props are read-only. `App` declares `const [internships, setInternships] = useState(INITIAL_INTERNSHIPS)` and passes handler functions down the hierarchy. Updates use the functional updater form `setInternships((prev) => ...)`: `map` creates a new array with a new object `{ ...item, applied: !item.applied }` for the toggled item, while `filter` returns a new array omitting the deleted item. Mutating methods like `push`, `splice`, or in-place assignment (`item.applied = !item.applied`) are avoided because React relies on reference changes to trigger re-renders.

---

**Prompt 2:**
> How should the checkbox and delete button in `InternshipCard` be structured for proper accessibility and to avoid common React event errors?

**Response summary:**
The checkbox must be a controlled component: `checked={internship.applied}` paired with `onChange={() => onToggle(internship.id)}`. Having `checked` without `onChange` makes the element read-only and triggers a React console warning. The checkbox and text are wrapped in a `<label className="item-main">` so clicking anywhere on the text toggles the state. For the delete button, the event handler is passed as an arrow function `onClick={() => onDelete(internship.id)}` rather than `onClick={onDelete(internship.id)}`, which would invoke the function during render and prematurely empty the list. An `aria-label={`Delete ${internship.title}`}` attribute ensures screen readers have full context for which item will be deleted.

---

**Prompt 3:**
> How is the light/dark theme toggle implemented cleanly using CSS variables and React state?

**Response summary:**
React holds the current theme in state (`const [theme, setTheme] = useState(initialTheme)`), initializing from `window.matchMedia("(prefers-color-scheme: dark)").matches`. In the click handler, `document.documentElement.dataset.theme = nextTheme` writes `data-theme="dark"` or `"light"` onto the `<html>` root element. In CSS, `@media (prefers-color-scheme: dark)` is scoped with `:root:not([data-theme="light"])` so explicit light choice takes precedence over system dark mode, and `:root[data-theme="dark"]` overrides colors when dark mode is explicitly toggled. This changes colors globally through CSS variables without duplicating styles across individual components.

---

## Tests performed

- **Initial render:** 3 cards displayed from initial state with proper badges, metadata, and status; Card 2 is checked with strikethrough; counter shows `3 opportunities, of which 2 active`.
- **Toggle interaction:** Clicking the checkbox or label toggles the item's `applied` property, updating visual strikethrough immediately and automatically adjusting the derived active counter in the header without lag.
- **Delete interaction:** Clicking Delete removes the target card; deleting all items successfully transitions to the empty state message (`No opportunities yet.`) and sets counter to `0 opportunities, of which 0 active`.
- **Theme toggle:** Clicking the header button toggles `data-theme` between `"dark"` and `"light"`, updates the button text (`Dark mode` / `Light mode`) and `aria-pressed`, and properly swaps all theme colors.
- **Console check:** Verified in browser DevTools that 0 errors and 0 warnings are present.

---

## What I learned in Stage 5

- How to manage component state with `useState` and apply functional immutable updates (`map`, `filter`).
- Why derived state (like the active count) should be computed directly during render instead of maintained in an independent state variable.
- How to structure controlled inputs in React with paired `checked` and `onChange` attributes.
- How to pass callback handlers through intermediate components via props (`onToggle`, `onDelete`).
- How to implement a robust theme switcher combining React state, `dataset.theme`, and CSS custom property overrides.
