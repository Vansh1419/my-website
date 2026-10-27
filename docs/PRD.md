# Product Requirements

## Problem
I need one place that shows recruiters, clients and developers who I am, what I built, and how to reach me. The goal is to **get a job** as a Software Engineer or Forward Deployed Engineer (FDE).

## Users
- Recruiters and hiring managers (main) – want a fast view of skills and experience
- Clients – want to see results and how to contact me
- Other developers – want to see real projects, code and technical blogs
- General public – friends, community

## Features
- [ ] Must have:
  - Single-page site (no separate pages), sections: Hero, About, Skills, Projects, Experience / Resume, Contact
  - Sticky nav with smooth scroll to each section
  - Dark / light theme toggle (dark is the default)
  - Hero positions me equally as Software Engineer and Forward Deployed Engineer
  - Skills section: grouped list (languages, frameworks, tools)
  - Projects: 4-6 cards. Each card has description, tech tags and optional links: Notion (tech blog), GitHub (repo), Live (demo). A link shows only if it exists
  - Experience section with downloadable resume PDF button
  - Contact form via Formspree + links to GitHub, LinkedIn, Email
  - Mobile-first responsive layout
  - Accessibility: semantic HTML, keyboard nav, good contrast
  - SEO: meta tags, Open Graph / social preview image, sitemap
  - Deployed on Vercel (free `vercel.app` domain first)
- [ ] Nice to have:
  - Custom domain later
  - Subtle scroll animations

## Out of scope
- Multiple pages / routes
- Own backend or database
- Blog engine (blogs live in Notion, projects link out)
- Analytics (not chosen)
- Login, CMS, comments

## Done means
- All sections show on one page and nav links scroll to them
- Theme toggle works and remembers the choice
- Project cards show only the links that exist
- Contact form sends a message to my inbox through Formspree
- Resume PDF downloads
- Works on phone and desktop; keyboard-only use works
- Lighthouse: Accessibility and SEO scores 90+
- Live on Vercel

## Open items
Filled from the resume on 2026-10-27: name, tagline, bio, skills, 5 projects, experience and education, email, LinkedIn, resume PDF, Formspree form ID.

Still open:
- GitHub: user is setting up the GitHub account/repo. Then set the real URL in `src/data/links.ts` (still a placeholder; must be fixed before deploy)
- Per-project links (GitHub, Notion blog, Live): user will add later in `src/data/projects.ts`; buttons stay hidden until then
- Project screenshots (optional)

Resolved:
- The resume's Portfolio link (`hero-my-work.vercel.app`) should point to this site. The old site is not linked from the page. Before sharing the resume, make sure that address serves this site (e.g. name the Vercel project `hero-my-work`, or update the resume link)
