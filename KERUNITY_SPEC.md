# Kerunity — Product & UX Specification

**Version:** 2.0  
**Last updated:** January 2025

This document is the single source of truth for Kerunity.  
All design, code, motion, copy, and system behaviour must conform to this spec.

If there is a conflict between instructions, this spec overrides all prompts, tools, or assumptions.

---

## 1. What Kerunity Is

Kerunity is a **crisis-support system for carers**, especially those supporting people with dementia, cognitive decline, or acute distress.

It is:
- A **standalone Progressive Web App (PWA)**
- A **calm, low-cognitive-load interface**
- Designed for **real-world emotional stress**
- Focused on **what to say and do, right now**
- **Offline-capable** — works without internet after first visit
- **Installable** — can be added to home screen

Primary goal:
> Reduce panic, reduce escalation, reduce harm.

Kerunity does NOT attempt to:
- Diagnose
- Monitor
- Replace professionals
- Provide medical advice
- Track outcomes or progress

---

## 2. What Kerunity Is NOT (Hard Constraints)

Kerunity must NEVER:
- Become a productivity app
- Add dashboards, feeds, or complex navigation
- Introduce gamification, streaks, or rewards
- Ask the user many questions at once
- Require learning or onboarding
- Overwhelm the screen
- Animate decoratively
- Feel "clever", "AI-ish", or impressive
- Collect any user data

If a feature increases cognitive load without improving safety or clarity, it is rejected.

---

## 3. Design Priority Order (Strict)

All decisions must follow this hierarchy:

1. **Safety**
2. **Clarity**
3. **Predictability**
4. **Accessibility**
5. **Visual calm**

Aesthetic considerations come last.

> "If a design choice makes the app feel *nicer* but less *clear*, it is wrong."

---

## 4. Core UX Philosophy

Kerunity follows **Calm Tech** and **Crisis UX** principles.

### The user may be:
- Panicking
- Physically shaking
- Unable to read clearly (glasses missing, tears, stress)
- Exhausted
- Operating at reduced cognitive capacity

### UX rules:
- One primary action per screen
- Language must feel human, permissive, and grounding
- No urgency unless triggered by user
- No instructions framed as commands
- No clinical tone
- No jargon

### Copy should feel like:
> "A steady hand on your shoulder, not a conversation."

---

## 5. App Structure

### Current Modes
- **Crisis** — Active, in production

### Future Modes (not yet built)
- **Learn** — Educational content, videos, PDFs for carer development
- **Recovery** — Breathing exercises, meditation, sleep support for carer wellbeing

Each mode has its own design rules. Never infer rules from one mode into another.

---

## 6. Crisis Mode Structure

### Screens
1. **Home** — Search, common situations, emergency access
2. **Situation cards** — Step-by-step guidance (typically 3-4 steps)
3. **Emergency contacts** — 999, NHS 24, Local Crisis Team, GP
4. **Follow-up** — "How are things now?" (better/same/worse)

### Fixed Card Structure
Crisis cards follow a strict structure:
- Situation context
- Step indicator ("Step 2 of 4")
- "Try saying this" (when present)
- "You can do this" (action guidance)
- Listen button
- Navigation (Back / Next / Done)
- Emergency escalation

This structure must not be rearranged.

---

## 7. Visual Design System

### Colour
- **Background:** Pure black (#000000)
- **Surfaces/Cards:** Dark grey (#1a1a1a) — elevated from background
- **Text primary:** White/off-white
- **Text secondary:** Muted grey (no opacity reduction — use actual colour)
- **Emergency:** Muted red for button, softer red for text
- **NHS/Secondary:** Outline style, no competing colours

### Typography
- System sans-serif font
- Clear hierarchy through weight, not size reduction
- Minimum 14px for any text
- Generous line-height (1.5–1.7)
- Font weights: 400 base, 500-600 for emphasis
- Never reduce text size to create hierarchy

### Spacing
- 8pt/16pt grid system
- Generous padding inside cards (24px)
- Spacing is functional, not decorative
- Crowding increases stress — avoid it

### Borders & Surfaces
- Outlined surfaces, not heavy filled cards
- Subtle borders, no harsh lines
- Subtle shadows allowed for depth (max opacity 0.3, soft blur)
- No heavy drop shadows or hard edges
- Visual weight stays low

---

## 8. Accessibility Requirements (Non-Negotiable)

Kerunity must be usable by:
- Older adults
- Stressed users
- Shaky hands
- Users with impaired vision

### Rules:
- All tap targets minimum 44x44pt
- Emergency button minimum 54px height
- High contrast in both light and dark
- No reliance on colour alone
- Large, readable text
- Listen button clearly visible (audio for those who can't read)
- Voice input available for search

---

## 9. Motion & Transitions

Motion exists ONLY to:
- Reduce stress
- Increase clarity
- Signal state changes gently

### Allowed:
- Soft fade-in (200-300ms)
- Subtle opacity transitions
- Ease-in-out only
- Functional feedback (button press)

### Forbidden:
- Spring physics
- Bounce effects
- Parallax
- Fast transitions
- Decorative animations
- Anything "playful" or "delightful"

> "If it draws attention to itself, it doesn't belong."

---

## 10. Button Design

### Hierarchy:
- **Primary:** Filled, prominent (e.g., "Done", "Call 999")
- **Secondary:** Outlined (e.g., "NHS 24", "Back to situations")
- **Tertiary:** Text link style

### Emergency Button:
- Prominent, well-separated from other controls
- Requires confirmation: "Tap to call 999" with 3-2-1 countdown
- Inline emergency chips (within card content) call directly — no confirmation needed

### NHS 24 Button:
- No confirmation needed (low-risk call)
- Outline style, not competing with 999

---

## 11. Safety Guards (Do Not Remove)

The following are intentional protective mechanisms:

- Emergency escalation paths always accessible
- Clear exit and back routes
- "Pick up where you left off" dialog (explicit choice required)
- Disclaimers: "Guidance only. Not live monitoring."
- Follow-up check: "How are things now?"

These must not be "cleaned up" or simplified away.

---

## 12. Copy & Tone

### Voice:
- Calm
- Human
- Direct
- Non-clinical
- Non-authoritarian

### Avoid:
- Commands ("Do this now")
- Jargon ("Administer medication")
- Emotional validation clichés ("I hear you")
- Over-explaining
- Anything that lectures, shames, or rushes

### Examples:
- ✅ "It's okay to pause for a moment."
- ❌ "Take control of the situation."
- ✅ "Meds" 
- ❌ "Medication"

---

## 13. Listen Button (Critical)

The Listen button exists because users may not be able to read.

### Rules:
- Must be visually clear
- Must not be buried
- Must not feel optional when speech is present
- Placement must be consistent within Crisis cards
- Uses device text-to-speech (Web Speech API)
- Works offline

---

## 14. Technical Architecture

### Current:
- Single HTML file with inline CSS/JS
- Progressive Web App (PWA)
- Service worker for offline caching
- No backend — entirely client-side
- No data collection
- No authentication

### Privacy:
- No servers
- No accounts
- No tracking
- No cookies
- No analytics
- Everything stays on device

This is intentional, not a limitation.

---

## 15. Localisation

Currently built for **Scotland**:
- Emergency: 999
- Urgent medical: NHS 24 / 111
- Language: British English

---

## 16. Future Considerations (Not Active)

The following are future concerns only:

- Learn mode (educational content)
- Recovery mode (breathing, meditation, sleep)
- Light mode / system preference detection
- Charity partnerships
- Professional content review

Do not implement unless explicitly instructed.

---

## 17. Golden Rule

> If a feature does not help a stressed carer in a difficult moment, it does not belong in Kerunity.

When in doubt, ask:

> "What would feel safest to someone under stress, right now?"

If unsure, stop and ask.
