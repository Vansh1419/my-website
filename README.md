# Vibe Coding Template

Language-agnostic starter for Claude Code projects.

## Start a new project
1. Copy this folder and `git init`.
2. Fill in the **Project** section of `CLAUDE.md`.
3. Run `/spec` to define what you're building.

## Workflow
| Command | What it does |
|---|---|
| `/spec` | Interview → `docs/SPEC.md` |
| `/plan` | Spec → steps in `docs/PLAN.md` |
| `/build` | Plan → build → review loop |
| `/tdd` | Failing test → code until it passes |
| `/review` | Review current diff |
| `/orchestrate` | Split big tasks across worker agents |

## Hooks (`.claude/hooks/`, need Python 3)
- **block_dangerous** – blocks `rm -rf`, force push, `sudo`, etc.
- **protect_secrets** – blocks edits to `.env`, keys
- **format** – runs ruff / prettier / gofmt / rustfmt if installed
- **notify** – popup + sound when Claude is done or needs you
  - Linux needs `notify-send` and `paplay`

**Windows:** if `python3` doesn't work, change `python3` to `python` in `.claude/settings.json`.

## MCP
`.mcp.json` has Context7 (live library docs). Add more there.

## Structure
```
CLAUDE.md          rules + workflow
.claude/agents/    planner, worker, tester, reviewer
.claude/commands/  slash commands
.claude/hooks/     safety, format, notify
.claude/settings.json
.mcp.json
docs/              SPEC, PLAN, DECISIONS
```
# vb-template
