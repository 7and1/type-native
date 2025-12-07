# Repository Guidelines

## Project Structure & Module Organization
`src/app` hosts the Next.js 16 App Router: each `*-keyboard` folder renders its locale view while shared chrome stays in `layout.tsx` and `page.tsx`. Components, hooks, stores, helpers, and types live in `src/components`, `src/hooks`, `src/stores`, `src/lib`, and `src/types`. Layout data and long-form copy live under `src/data` + `src/content`, static assets stay in `public`, and `type-native-mvp/` preserves the legacy Vite prototype for experiments only.

## Build, Test, and Development Commands
- `npm run dev` – Next dev server with hot reload at `localhost:3000`.
- `npm run build` – Production bundle for Cloudflare Pages and Actions.
- `npm run start` – Serve the built app locally for regression checks.
- `npm run lint` – ESLint Core Web Vitals + TypeScript rules; resolve or justify each warning.
- `npm test` – Headless Vitest + Testing Library suite (required locally and in CI).
- `npm run test:watch` or `npm run test:coverage` – Watch mode or V8 coverage exports when investigating regressions.
- `cd type-native-mvp && npm install && npm run dev` – Optional flow when comparing against the archived MVP.

## Coding Style & Naming Conventions
Stay in TypeScript strict mode and use the `@/*` alias. Components use PascalCase filenames, hooks start with `use`, stores end with `Store`, and route-bound data files stay in kebab-case. Favor Tailwind CSS v4 utilities plus the `cn` helper, keep custom styles in `src/app/globals.css`, tag client components when needed, and format with two-space indentation.

## Testing Guidelines
Every change must pass `npm test`; keep specs named `*.test.tsx` near the relevant code. Assert user-visible behavior—rendering, modifier state, accessibility cues—rather than implementation details, and pair automation with a manual sweep covering at least one LTR keyboard, one RTL keyboard, and a CJK layout in light and dark themes whenever UI code changes.

## Commit & Pull Request Guidelines
Commits mirror history: concise, imperative, Title Case statements scoped to a single logical change. Pull requests outline user impact, list manual test notes, link issues, and attach screenshots or clips for UI or keyboard tweaks; rebase before opening to keep diffs focused.

## Security & Configuration Tips
Secrets like `OPENROUTER_API_KEY` belong in `.env.local` (see `AI_CHAT_SETUP.md`), require a dev-server restart, and must never be committed. Scrub placeholder data from new layouts, document config changes in PRs, and avoid shipping demo keys or sample text.
