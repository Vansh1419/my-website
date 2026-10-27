# Plan

Format: - [ ] step — files — how to test

Rules: one step at a time, run its check before the next, no abstractions for one-time code, touch nothing outside the step.

- [x] 1. Scaffold: `create-next-app` in this folder (TS, Tailwind, App Router, `src/`, ESLint); keep `docs/`, `CLAUDE.md`, `README.md` — `package.json`, `src/app/*`, `tsconfig.json` — `npm run dev` shows default page; `npm run build` passes
- [x] 2. Data files with placeholders (5 projects, mix of with/without links) — `src/data/{profile,skills,projects,experience,links}.ts` — `npx tsc --noEmit` passes
- [x] 3. Theme + shell (FEATURE1): dark default, no-flash theme script, ThemeToggle, sticky Nav with active link + mobile menu, Footer, smooth scroll (reduced-motion safe), focus ring, skip link — `layout.tsx`, `globals.css`, `components/{ThemeToggle,Nav,Footer}.tsx` — toggle persists on reload, nav sticks, links scroll, menu works at 320px
- [x] 4. Hero + About (FEATURE2) — `components/{Hero,About}.tsx`, `public/images/` — edit `profile.ts` name, page updates
- [x] 5. Skills (FEATURE3) — `components/Skills.tsx` — new category in data renders
- [x] 6. Projects (FEATURE4): 1/2/3-col grid, Notion / GitHub / Live buttons only if URL set, new-tab + `noopener noreferrer` — `components/Projects.tsx` — no-URL card has no buttons; full card has three
- [x] 7. Experience + Resume (FEATURE5): timeline newest first, download button — `components/Experience.tsx`, `public/resume.pdf` — button downloads file
- [x] 8. Contact (FEATURE6): Formspree form, validation, honeypot, disabled while sending, `aria-live` status, social links, `.env.example` — `components/Contact.tsx`, `.env.example` — bad input blocked; real submit reaches inbox (code done; real submit untested until Formspree ID is set)
- [x] 9. Assemble page: `<main id="main">`, sections in order Hero, About, Skills, Projects, Experience, Contact — `src/app/page.tsx` — scroll-through at 320px, tablet, desktop
- [x] 10. SEO + quality (FEATURE7): metadata, Open Graph / Twitter, generated social image, sitemap, robots, heading order, alt text, AA contrast, 44px targets — `layout.tsx`, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `data/site.ts` — Lighthouse A11y ≥ 90 and SEO ≥ 90 (dark + light) (Lighthouse 100/100/100/100 mobile + desktop, dark theme; axe 0 violations both themes)
- [x] 11. Tests: Vitest + React Testing Library for project-link hiding and contact validation; `npm test` script — `*.test.tsx`, `package.json` — `npm test` green (12 tests; checked they fail when the code is broken)
- [ ] 12. Deploy: git init, push to GitHub, import in Vercel, set `NEXT_PUBLIC_FORMSPREE_ID` — Vercel project — live URL works, form works, social preview renders
- [ ] 13. Docs wrap-up: tick this plan, log new decisions, replace template text in `README.md` with run + edit-content guide — `docs/PLAN.md`, `docs/DECISIONS.md`, `README.md` — docs match the code
