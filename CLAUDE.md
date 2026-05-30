# portfolio

Personal portfolio website. The actual app lives in `my-portfolio/`.

## Stack
- React 18 + TypeScript
- Vite 6 (build/dev server)
- React Router 7 (client-side routing)
- Tailwind CSS 3
- Deployed on Vercel (SPA rewrites in `my-portfolio/vercel.json`)

## Commands
Run all from `my-portfolio/`:
- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

## Git rules
- NEVER add a Claude / AI co-author trailer to commits. Do not append
  `Co-Authored-By: Claude ...` or any `Co-Authored-By` line referencing an AI,
  and do not add "Generated with Claude Code" or similar footers to commit
  messages or PR descriptions.
- Commit messages must contain only the change description, nothing else.
- Do not push unless explicitly asked.
