# Feature 7: Quality (SEO, responsive, accessibility)

## SEO + social preview
- Page title and meta description
- Open Graph and Twitter card tags; image is generated from `profile.ts` by `src/app/opengraph-image.tsx` (no static file to keep in sync)
- `sitemap.ts` and `robots` file
- Correct heading order (one `h1`)

## Mobile-first responsive
- Design for 320px first, then scale up
- No horizontal scroll at any width
- Touch targets at least 44px

## Accessibility
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- Skip-to-content link
- Visible focus outline
- Text contrast AA in both dark and light themes
- Alt text on images
- Respect `prefers-reduced-motion`

## Not included
- Analytics (not chosen)

## Done when
- [ ] Lighthouse Accessibility 90+ and SEO 90+
- [ ] Social preview shows when the link is shared
- [ ] Usable by keyboard only and at 320px width
