Lovable does not support directly importing an existing GitHub repository. The workaround is to copy the relevant source files from `prajaktaukirde/animated-portfolio-showcase` into this project.

Both projects use the same TanStack Start + Tailwind v4 + shadcn/ui template, so the migration is limited to the portfolio-specific content, styling, and one extra dependency.

## What will be copied / replaced

1. **Homepage content** — replace `src/routes/index.tsx` with the portfolio page from the repo.
2. **Root layout & metadata** — replace `src/routes/__root.tsx` with the repo version (adds portfolio title/description, OG tags, and Google Fonts).
3. **Global styles** — replace `src/styles.css` with the repo version (adds custom colors: peach, mint, sky, lavender, lemon, cream, ink; font families; sticker/blob/marquee animations).
4. **Favicon** — replace `public/favicon.ico` with the repo version.
5. **Dependencies** — add `motion` to `package.json` (the repo uses Framer Motion's `motion/react` API).

## Files that will NOT change

- `src/router.tsx`, `src/server.ts`, `src/start.ts`
- `src/components/ui/*` (same shadcn components)
- `src/lib/*`, `src/hooks/*` (same helpers)
- `tsconfig.json`, `vite.config.ts`, `components.json`, `eslint.config.js`

## Steps

1. Download the four files above from the `main` branch of `prajaktaukirde/animated-portfolio-showcase`.
2. Write them into the current project, overwriting the placeholder `index.tsx`, default `__root.tsx`, default `styles.css`, and existing `favicon.ico`.
3. Update `package.json` to add `"motion": "^12.42.2"`.
4. Run `bun install` to install the new dependency and update the lockfile.
5. Run `bun run build` to verify the project compiles.
6. Open the preview to confirm the portfolio renders correctly.

## Verification

- Build passes without TypeScript or Vite errors.
- Preview shows the animated portfolio with the custom cursor, hero grid, marquee, projects, skills, and contact sections.
- No placeholder content remains on `/`.

## Note on ongoing GitHub sync

If you also want two-way sync with GitHub in the future, that is a separate step done through the Lovable editor: **Plus (+) → GitHub → Connect project**. That would push future Lovable changes to a GitHub repo, but it is not a one-time import of an existing repo.