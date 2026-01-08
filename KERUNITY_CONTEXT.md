# Kerunity — Source of Truth (Context)

## What we are building
Kerunity is a **crisis de-escalation micro-coach for dementia/ageing carers**.
It is not “a chatbot app” — it’s a **calm, reliable panic-support tool** that gives:
- **Words to say** (primary)
- **One next step** (secondary)
- **Urgent escalation** when needed (clear + fast)

Primary user state: stressed, time-poor, shaky hands, low patience, possibly older eyes.

---

## North Star UI (non-negotiables)
1. **Calm Tech**: visually silent, no decorative noise, no “clever” UI.
2. **Minimal decisions**: one clear primary action per moment.
3. **Readable in bad conditions**: low brightness + bright daylight.
4. **Forgiving touch targets**: big buttons, big spacing.
5. **No guilt language**: permissive, supportive tone.
6. **One-card-first**: perfect one core screen, then clone/extend.

---

## Visual language (locked)
- Background: **flat matte dark sage/olive** (no gradients, no grain, no texture).
- One centered “room” card: soft rounding, subtle border, embedded feel (not floating).
- Warm clay/terracotta primary button for Urgent Help (high contrast label).
- Typography: system/SF-like (clean, larger sizes, comfortable line-height).

---

## Interaction model
### Home
- Top bar: Kerunity mark + **Aa (large text toggle)** + **info/disclaimer** + **Urgent Help**.
- One input: “Tell me what’s happening…” (+ optional mic icon).
- “Common situations” grid (tap → opens guidance view).

### Guidance view (the product)
- Shows **short, step-by-step “Words to say”** (script-like).
- Optional “What to do next” (one step at a time).
- “Back” always obvious.
- Avoid long paragraphs.

### Urgent Help
- Always accessible.
- Extremely clear: “If you are in immediate danger call emergency services.”
- UK defaults: **999** emergency; **111** non-emergency guidance.
- Also: “If outside the UK, use your local emergency number.”

---

## Motion (must feel like Google AI Edge Gallery)
Motion should be **subtle, soothing, almost invisible**:
- Screen/card content fades in gently (opacity + tiny translate).
- No bouncy easing, no springy motion.
- Add a **very subtle shimmer sweep over the app name** on first load only.
- MUST respect accessibility:
  - If `prefers-reduced-motion: reduce` → disable shimmer + transitions.

---

## Safety + review constraints (hard rules)
- No diagnosis, no prescribing, no medical instructions.
- No “guarantees” or absolute claims.
- No storing personal health data on our servers (keep everything local).
- Provide escalation wording without panic, and without pretending to be emergency services.
- Add disclaimers in Info screen, not buried.

---

## Technical constraints (hard rules)
- Keep it **simple**: single-page static web UI in `/web/index.html`.
- No framework migrations (no React/Next) unless explicitly decided later.
- Avoid new dependencies unless truly necessary.
- Prefer: plain HTML/CSS/JS, local state, localStorage.

Project layout:
- `/web/` → UI (static)
- `/server/` → MCP server (for Apps SDK / tools)

---

## Known open issues to keep visible
- “Large Text (Aa)” toggle must work reliably.
- Top “disclaimer/info” button must work reliably.
- Any speaker/listening UI must be implemented carefully (if still pending).

---

## Definition of “done” for any UI change
- Looks calmer than before.
- Reads better in 10% phone brightness.
- Works with reduced motion.
- No new confusion added.
- Touch targets still big.
