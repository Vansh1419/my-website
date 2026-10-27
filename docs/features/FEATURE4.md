# Feature 4: Projects

## What it does
A grid of 4-6 project cards. Each card shows:
- Title and short description
- Tech tags
- Optional screenshot
- Link buttons, each shown **only if the URL exists**:
  - **Blog** → Notion page (tech blog)
  - **GitHub** → repo
  - **Live** → deployed demo

## Data (`src/data/projects.ts`)
```
{ title, description, tech[], image?, notionUrl?, githubUrl?, liveUrl? }
```

## Rules
- External links open in a new tab with `rel="noopener noreferrer"`
- If a project has no links, the card still shows normally
- Grid: 1 column on phone, 2 on tablet, 3 on desktop
- Start with placeholder projects until I give real ones

## Done when
- [ ] 4-6 cards render from the data file
- [ ] A missing URL means no button for it
- [ ] Links open correctly in a new tab
