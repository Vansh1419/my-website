# Decisions

| Date | Decision | Why |
|------|----------|-----|
| 2026-10-27 | Goal is to get a job (Software Engineer / FDE) | Main purpose of the site; content is tuned for recruiters first |
| 2026-10-27 | Single page, no separate routes | My choice; simple, fast, easy to scan |
| 2026-10-27 | Next.js (App Router) | My choice of stack |
| 2026-10-27 | Dark / developer style, dark by default, with light toggle | Fits engineer profile; toggle for visitor comfort |
| 2026-10-27 | Hero positions me as SWE and FDE equally | I want both role types |
| 2026-10-27 | Contact via Formspree (no own backend) | My choice; least code. Free tier is 50 submissions/month |
| 2026-10-27 | Project cards link out to Notion (tech blogs), GitHub, Live | Blogs stay in Notion; no blog engine needed. Links optional per project |
| 2026-10-27 | 4-6 projects in a card grid | My choice |
| 2026-10-27 | Separate Skills section with grouped list | My choice |
| 2026-10-27 | Host on Vercel, free `vercel.app` domain first | Fast to ship; custom domain later |
| 2026-10-27 | SEO, mobile-first, accessibility included; analytics NOT included | What I picked in the interview |
| 2026-10-27 | Use placeholders for name, tagline, content | Real content not ready; all content lives in `src/data/` so it is easy to replace |
| 2026-10-27 | No photo in About; text bio only | My choice after seeing the first version |
| 2026-10-27 | Social image generated in code (`opengraph-image.tsx`), not a static PNG | Uses the name from `profile.ts`, so it never goes stale |
| 2026-10-27 | Site URL comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, localhost fallback | Used by sitemap, robots, canonical and Open Graph URLs; no manual setting needed |
| 2026-10-27 | Tests: Vitest + React Testing Library in `tests/`; `npm test` runs once (not watch mode) | Covers project link hiding and contact form logic; the Next.js docs recommend Vitest for sync components |
| 2026-10-27 | Bumped `@types/node` from 20 to 24 | Vitest 5 needs 22+; matches the Node 24 we run |
| 2026-10-27 | Filled site content from the resume; education shown as an entry in the Experience timeline; no phone number on the site | Resume is the source of truth. Phone kept off the public page to limit spam; it is still inside the downloadable PDF |
| 2026-10-27 | Deploy this site at hero-my-work.vercel.app; resume link is not edited | The resume (and its PDF copy on the site) already points there |
