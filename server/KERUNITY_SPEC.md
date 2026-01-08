# Kerunity — Product & UX Specification (Authoritative)

This document is the single source of truth for Kerunity.
All design, code, motion, copy, and system behavior MUST conform to this spec.

If there is a conflict between instructions:
KERUNITY_SPEC.md overrides all prompts, tools, or assumptions.

---

## 1. What Kerunity IS

Kerunity is a **calm, crisis-support companion** for carers.

It is:
- A **ChatGPT App widget first**
- A **single-screen, low-cognitive-load interface**
- Designed for **real-world emotional stress**
- Focused on **what to say, right now**

Primary goal:
> Reduce panic, reduce escalation, reduce harm.

Kerunity does NOT attempt to:
- Diagnose
- Teach
- Educate broadly
- Replace professionals
- Provide long explanations

---

## 2. What Kerunity IS NOT (Hard Constraints)

Kerunity must NEVER:
- Become a full productivity app
- Add dashboards, tabs, feeds, or navigation trees
- Introduce complex settings
- Ask the user many questions at once
- Require learning or onboarding
- Overwhelm the screen
- Animate aggressively
- Feel “clever”, “AI-ish”, or impressive

If a feature increases cognitive load, it is rejected.

---

## 3. Core UX Philosophy

Kerunity follows **Calm Tech** and **Crisis UX** principles.

### UX rules:
- One primary action per screen
- Language must feel human, permissive, and grounding
- No urgency unless explicitly triggered by the user
- No instructions framed as commands
- No clinical tone
- No jargon

Copy should feel like:
> “I’m here with you. One step at a time.”

---

## 4. Interface Structure (Current Phase)

Single screen only.

Required elements:
- Calm, matte background (dark sage / olive tone)
- One centered card
- Generous spacing
- Large, readable text
- One primary action button
- Optional secondary text links (subtle)

No navigation bars.
No side menus.
No multi-page flows.

---

## 5. Motion & Transitions (Very Important)

Motion exists ONLY to:
- Reduce stress
- Increase clarity
- Signal state changes gently

### Allowed motion:
- Soft fade-in on screen load (200–300ms)
- Subtle opacity transitions
- Very light shimmer on title or header (slow, non-distracting)
- Ease-in-out only

### Forbidden motion:
- Sliding panels
- Bounce effects
- Spring physics
- Parallax
- Fast transitions
- Repeated or looping animations

Motion should feel:
> “Barely noticeable, but emotionally reassuring.”

Reference inspiration:
- Google AI Edge Gallery
- Apple system transitions
- Accessibility-first UI

---

## 6. Accessibility & Readability

Kerunity must be usable by:
- Older adults
- Stressed users
- Shaky hands
- Bright daylight conditions

Rules:
- High contrast
- Large tap targets
- No reliance on color alone
- Clear visual hierarchy
- SF Pro / system fonts only
- No small text

---

## 7. AI Behavior Rules

Kerunity AI must:
- Respond step-by-step
- Use short sentences
- Pause escalation
- De-escalate emotionally
- Never shame, blame, or judge
- Never rush the user

Kerunity AI must NOT:
- Ask multiple questions at once
- Give long explanations
- Speculate
- Offer medical or legal advice
- Override the user’s autonomy

---

## 8. Architecture Constraints (Current Phase)

Current architecture:
- Static HTML / CSS / minimal JS
- Runs inside ChatGPT Apps SDK
- No custom backend required yet
- MCP server exists but is dormant

DO NOT:
- Add backend complexity
- Activate MCP tools
- Introduce databases
- Add authentication flows

These are future-phase concerns only.

---

## 9. Future Phase Notes (Not Active Yet)

The following are explicitly future concerns:
- MCP server activation
- External data sources
- Wearables / sensors
- Persistent memory
- Full native apps

Do not implement or prepare these unless explicitly instructed.

---

## 10. Golden Rule

If a feature does not help a stressed carer
in a difficult moment,
it does not belong in Kerunity.
