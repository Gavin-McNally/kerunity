# Cursor Rules — Kerunity

You MUST read `KERUNITY_SPEC.md` before making any changes.

---

## Hard Rules

### Design
- Do not add visual noise (no gradients, textures, fancy shapes, decorative motion)
- Do not reduce font sizes — only increase or maintain
- Do not reduce font weights — only increase or maintain
- Do not reduce touch targets — minimum 44x44pt, emergency button 54px
- Do not remove or simplify safety guards (disclaimers, confirmations, exit routes)
- Follow design priority: Safety → Clarity → Predictability → Accessibility → Calm

### Motion
- Motion ONLY if subtle, calming, and functional
- Must respect `prefers-reduced-motion`
- No spring physics, bounce, parallax, or decorative animation

### Technical
- Do not add dependencies unless explicitly asked
- Keep `/web/index.html` as the main UI file
- No frameworks (React, Next, Vite)
- No bundlers or build tools
- Plain HTML/CSS/JS only

### Content
- Never introduce medical advice, diagnosis, or prescriptions
- No panic language
- No clinical tone
- Use "Kerunity" (not "KerUnity")

---

## Working Style

- Make the smallest safe change that improves calm + clarity
- Prefer single, clean patches
- Always preserve accessibility and contrast
- If unsure, propose 2 options with tradeoffs — don't guess silently
- After each change, verify UI still loads and buttons still work
- If something breaks, revert immediately

---

## Definition of Done

A change is complete when:
- It looks calmer than before (or no worse)
- It reads well at low brightness
- It works with reduced motion
- No new confusion added
- Touch targets still large
- All buttons still functional
