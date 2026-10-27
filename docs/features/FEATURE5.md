# Feature 5: Experience + Resume

## What it does
- Timeline of work experience and education (role, company, dates, 2-4 bullet points)
- "Download resume" button that downloads `public/resume.pdf`

## Data (`src/data/experience.ts`)
```
{ role, org, start, end, points[] }
```

## Rules
- Placeholder entries until I provide real ones
- Resume button uses the `download` attribute and is also a normal link (works without JS)
- I replace `public/resume.pdf` myself; no code change needed

## Done when
- [ ] Entries render newest first
- [ ] Button downloads the PDF
