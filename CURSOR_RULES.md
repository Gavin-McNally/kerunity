# Kerunity Widget Guardrails (READ FIRST)

## What this is
This repo is a SINGLE-FILE HTML widget that must run inside the ChatGPT Apps SDK environment.
We are NOT building a full app yet.

## Hard rules (do not violate)
- Do NOT introduce React, Next.js, Vite, bundlers, build steps, or frameworks.
- Do NOT add routing, multiple pages, or complex folder structures.
- Do NOT add databases, auth, payment, or backend APIs.
- Keep the UI as a single static file: `web/index.html` (CSS + JS inside it).
- Avoid heavy libraries; prefer vanilla JS.
- Any change must preserve:
  - Tiles render correctly
  - Urgent Help opens/closes
  - Info/Disclaimer opens/closes
  - Aa large text toggle works
  - Crisis Card stepdown opens from tiles and works (Back/Next/Done)
  - No “runaway refactors”

## Allowed improvements
- Accessibility, readability, tap targets, contrast
- Bug fixes
- Small UI refinements
- Add/adjust situations and copy
- Keep performance fast and stable

## Workflow rules
- Make small changes.
- After each change: refresh preview and confirm the 5 core interactions still work.
- If something breaks: revert immediately (git or undo) and redo smaller.
