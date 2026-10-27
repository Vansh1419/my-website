# Spec

## Goal
A single-page personal portfolio that helps me get a Software Engineer / Forward Deployed Engineer job. It shows who I am, my skills, projects, experience, and how to contact me.

## Users
Recruiters (main), clients, other developers, general public.

## Features
Details per feature are in `docs/features/`.

1. **Site shell** – sticky nav, smooth scroll, dark/light toggle, footer → `features/FEATURE1.md`
2. **Hero + About** – name, tagline (SWE + FDE), short bio → `features/FEATURE2.md`
3. **Skills** – grouped list → `features/FEATURE3.md`
4. **Projects** – 4-6 cards with Notion / GitHub / Live links → `features/FEATURE4.md`
5. **Experience + Resume** – timeline and PDF download → `features/FEATURE5.md`
6. **Contact** – Formspree form + GitHub, LinkedIn, Email → `features/FEATURE6.md`
7. **Quality** – SEO, responsive, accessibility → `features/FEATURE7.md`

## Content rules
- All text (name, tagline, bio, projects, experience, skills, links) lives in data files, not inside components. Editing content must not need code changes.
- Until I give real content, use clearly marked placeholders (e.g. `[Your Name]`).

## Out of scope
- Multiple pages, own backend, database, blog engine, analytics, CMS, login.

## Acceptance criteria
- [ ] One page with sections in order: Hero, About, Skills, Projects, Experience, Contact
- [ ] Nav is sticky; each link smooth-scrolls to its section
- [ ] Theme toggle switches dark/light, default is dark, choice is remembered
- [ ] Projects: 4-6 cards; Notion / GitHub / Live buttons render only when a URL is set
- [ ] Resume PDF downloads from the Experience section
- [ ] Contact form posts to Formspree, shows success and error state
- [ ] GitHub, LinkedIn, Email links work
- [ ] Layout works from 320px phone width to desktop
- [ ] Keyboard navigation works; focus is visible; contrast is AA
- [ ] Page has title, description, Open Graph image, sitemap
- [ ] Deployed on Vercel
