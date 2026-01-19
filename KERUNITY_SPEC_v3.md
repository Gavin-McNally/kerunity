# Kerunity — Product & UX Specification

**Version:** 3.0 (Midnight Glass)  
**Last updated:** January 2026

This document is the single source of truth for Kerunity.  
All design, code, motion, copy, and system behaviour must conform to this spec.

If there is a conflict between instructions, this spec overrides all prompts, tools, or assumptions.

For detailed visual specifications, see `DESIGN_SYSTEM_Midnight_Glass_v1.2.md`.

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
- **Privacy-first** — no data collection, no servers, no tracking

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
- Require learning or onboarding (beyond first-launch safety disclaimer)
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
1. **First Launch** — Welcome, medical disclaimer (mandatory), emergency contacts, how to use
2. **Home** — Search, common situations, emergency access, hamburger menu
3. **Situation cards** — Step-by-step guidance (typically 3-4 steps)
4. **Emergency contacts** — 999, NHS 111, Samaritans, Dementia UK (3-tier hierarchy)
5. **Follow-up** — "How are things now?" (calmer/same/worse)
6. **Menu** — About, Our Story, Privacy, Support, Feedback, etc.

### Fixed Card Structure
Crisis cards follow a strict structure:
- Situation context
- Step indicator ("Step 2 of 4")
- "Try saying this" (when present)
- "You can do this" (action guidance)
- Listen button
- Navigation (Back / Next / Done)
- Emergency escalation
- Footer disclaimer: "This is guidance, not medical advice. Emergency? Call 999"

This structure must not be rearranged.

---

## 7. Visual Design System — Midnight Glass

**See `DESIGN_SYSTEM_Midnight_Glass_v1.2.md` for complete specifications.**

### Design Philosophy
- Dark mode optimised for stressed users (tears, dilated pupils, exhaustion)
- Premium "glass cockpit" aesthetic — dignified, not medical
- Generous spacing for shaking hands and divided attention
- Gold accents used sparingly (the "Gold Glass Rule")

### Core Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--void` | `#050508` | Deepest background |
| `--bg` | `#0a0a0f` | Primary background |
| `--gold` | `#f7e1c6` | Champagne gold — icons, accents, CTAs |
| `--emergency` | `#8a2b3b` | Deep wine — 999 button ONLY |
| `--text` | `#FFFFFF` | Primary text |
| `--text-soft` | `rgba(255,255,255,0.9)` | Body text |

### Glass Effects
Cards use gradient backgrounds with blur:
```css
background: linear-gradient(180deg, rgba(50,55,80,0.6) 0%, rgba(30,35,50,0.7) 100%);
backdrop-filter: blur(12px);
border: 1px solid rgba(255,255,255,0.08);
border-top: 1px solid rgba(255,255,255,0.25);
```

### Touch Targets (Crisis-Optimised)
- Minimum: 48×48px (WCAG 2.1 AA)
- Standard buttons: 56px height
- Crisis buttons (Next, Back, Emergency): **72px height** — "Panic Slabs"

### Button Hierarchy
- **Ruby Glass** — 999 emergency ONLY (deep wine gradient)
- **Gold Glass** — Primary CTAs
- **Platinum Glass** — Secondary actions (bright top edge)
- **Neutral Glass** — Tertiary (NHS 111, Samaritans, navigation)

---

## 8. Accessibility Requirements (Non-Negotiable)

Kerunity must be usable by:
- Older adults
- Stressed users
- Shaky hands
- Users with impaired vision

### Rules:
- All tap targets minimum 48×48px, crisis buttons 72px
- WCAG 2.1 AA contrast compliance
- No reliance on colour alone
- Large, readable text (minimum 14px)
- Listen button clearly visible (audio for those who can't read)
- Voice input available for search
- Reduced motion support (`prefers-reduced-motion`)
- Focus states visible (2px gold outline)

---

## 9. Motion & Transitions — Haptic Physics

Motion exists to:
- Provide tactile feedback
- Reduce stress
- Signal state changes gently

### Haptic Press States
All interactive elements use spring-based easing:
```css
transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Active state */
transform: scale(0.97) translateY(2px);
```

### Allowed:
- Spring-based press feedback (scale + translateY)
- Soft fade-in (0.15s–0.3s)
- Slide transitions for menu (0.3s)
- Micro-fades on crisis screens (0.15s — speed over polish)

### Forbidden:
- Decorative animations
- Parallax
- Anything that delays access to content
- Bounce without purpose

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 10. Button Design

### Hierarchy:
- **Primary (Gold Glass):** Main actions — "Next Step", "Done"
- **Secondary (Platinum Glass):** Alternative actions — "Back", "Stay on this step"
- **Emergency (Ruby Glass):** 999 ONLY — deep wine gradient
- **Neutral (Glass):** Support options — NHS 111, Samaritans, navigation

### Emergency Button (999):
- Ruby Glass style (deep wine `#8a2b3b`, not bright red)
- 72px minimum height
- Prominent, well-separated from other controls
- Requires confirmation: "Tap to call 999" with countdown
- Inline emergency chips (within card content) call directly — no confirmation needed

### NHS 111 / Samaritans / Dementia UK:
- Neutral glass style (NOT red)
- No confirmation needed (low-risk calls)
- Grouped in "Support for Carers" section

---

## 11. Safety Guards (Do Not Remove)

The following are intentional protective mechanisms:

- **First launch disclaimer** — Medical guidance only, not advice (mandatory, cannot skip)
- **Crisis card footer** — "This is guidance, not medical advice. Emergency? Call 999"
- **Emergency escalation paths** — Always accessible
- **Clear exit and back routes** — Every screen has an escape
- **"Pick up where you left off" dialog** — Explicit choice required
- **Follow-up check** — "How are things now?" (calmer/same/worse)
- **Emergency contact hierarchy** — 999 (ruby) visually distinct from support options (neutral)

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
- Must be visually clear (ghost pill style, gold accent)
- Must not be buried
- Must not feel optional when speech is present
- Placement must be consistent within Crisis cards
- Uses device text-to-speech (Web Speech API) or pre-generated audio
- Works offline

---

## 14. Technical Architecture

### Current:
- Single HTML file with inline CSS/JS (`/web/index.html`)
- Progressive Web App (PWA)
- Service worker for offline caching
- No backend — entirely client-side
- No data collection
- No authentication
- System fonts only (no external font loading)
- All assets bundled for offline use

### Privacy (Structural, Not Promised):
- No servers
- No accounts
- No tracking
- No cookies
- No analytics
- Everything stays on device
- Cannot spy on users because architecture makes it impossible

This is intentional, not a limitation.

---

## 15. Localisation

Currently built for **United Kingdom**:
- Emergency: 999
- Urgent medical: NHS 111 / NHS 24 (Scotland)
- Language: British English

### Future localisation:
- Emergency numbers localised by region (US: 911, AU: 000, etc.)
- Mental health crisis lines localised (Samaritans equivalents)
- Dementia helplines localised where available
- High-stakes content requires human review by native speakers with care experience

---

## 16. Menu Structure

```
Emergency Contacts (top — safety first)
Important Notice
Privacy
How to Use
About
Our Story
───────────
Founding Supporters
Support Kerunity
───────────
Share
Feedback
───────────
Kerunity v1.0.0
Made with love in Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿
```

---

## 17. Future Considerations (Not Active)

The following are future concerns only:

- Learn mode (educational content)
- Recovery mode (breathing, meditation, sleep)
- Light mode / system preference detection
- Multi-language support
- Pre-generated audio (ElevenLabs)
- Charity partnerships
- Professional content review

Do not implement unless explicitly instructed.

---

## 18. Golden Rule

> If a feature does not help a stressed carer in a difficult moment, it does not belong in Kerunity.

When in doubt, ask:

> "What would feel safest to someone under stress, right now?"

If unsure, stop and ask.
