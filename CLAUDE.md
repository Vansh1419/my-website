# Project Guide for Claude

## Project
- **Name:** Personal portfolio website (single page, goal: get a Software Engineer / FDE job)
- **Stack:** TypeScript, Next.js (App Router), Tailwind CSS, no database, Formspree for the contact form, hosted on Vercel
- **Run:** npm run dev
- **Test:** npm test (Vitest + React Testing Library, tests in `tests/`, runs once)
- **Spec:** see `docs/SPEC.md`
- **Content:** all text lives in `src/data/`, not in components

## Core Rules
- Do not refactor code that is not part of the task.
- Do not change the look or structure of test files.
- Never assume. If anything is unclear, ask before acting.
- Keep logic simple. If 2 lines do the job, do not write 50.
- No abstractions for one-time-use code.
- Keep answers short, precise and in easy words.

## Workflow
1. `/spec` – write or update `docs/SPEC.md` before new features.
2. `/plan` – break the spec into steps in `docs/PLAN.md`. Wait for approval.
3. `/build` or `/tdd` – implement one step at a time.
4. `/review` – reviewer agent checks the change.
5. `/orchestrate` – for big tasks, split work across worker agents.

## Agents
- `planner` – turns specs into small steps
- `worker` – implements one scoped step
- `tester` – writes and runs tests
- `reviewer` – reviews diffs against the rules above

## Decisions
Log important choices in `docs/DECISIONS.md`.

## My Extra Rules
<!-- add your own rules here -->
