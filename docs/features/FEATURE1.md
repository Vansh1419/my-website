# Feature 1: Site shell

Covers the parts shared by the whole page. Each feature has its own file in this folder (`FEATURE2.md` … `FEATURE7.md`). Update the file when a feature changes; add a new file for a new feature.

## What it does
- Sticky top nav with links: About, Skills, Projects, Experience, Contact
- Smooth scroll to each section; the active link is highlighted while scrolling
- Dark / light toggle button in the nav
- Footer with copyright and social links

## Rules
- Default theme is dark
- Theme choice is saved in `localStorage` and applied before first paint (no flash)
- On phone the nav collapses to a menu button; it is keyboard usable
- Respect `prefers-reduced-motion` (no smooth scroll animation if set)

## Done when
- [ ] Nav stays visible while scrolling
- [ ] Each link scrolls to the right section
- [ ] Toggle switches theme and remembers it after reload
- [ ] Works with keyboard only
