# Cursor Rules — Kerunity
## Version 2.0 (Midnight Glass)

**Updated:** January 2026  
**Design System:** Midnight Glass v1.2

You MUST read `KERUNITY_SPEC.md` and `DESIGN_SYSTEM_Midnight_Glass_v1.2.md` before making any changes.

---

## Hard Rules

### Design System — Midnight Glass
- Follow the Midnight Glass design system exactly
- Use void backgrounds (`#050508`) with radial gradient ambient lighting
- Use glass card effects (gradient backgrounds + backdrop-filter blur)
- Use champagne gold (`#f7e1c6`) for accents and active states
- Use deep wine red (`#8a2b3b`) for 999 emergency button ONLY
- Apply the "Gold Glass Rule" — gold accents sparingly, for active states only
- All other emergency/support buttons use neutral glass (NHS 111, Samaritans, etc.)

### Touch Targets (Crisis-Optimised)
- Minimum touch target: 48×48px (WCAG 2.1 AA)
- Standard buttons: 56px minimum height
- Crisis action buttons (Next, Back, Emergency): **72px minimum height** — these are "Panic Slabs"
- Do not reduce touch targets under any circumstances

### Typography
- Do not reduce font sizes — only increase or maintain
- Do not reduce font weights — only increase or maintain
- Use pearlescent gradients for celebration headlines (Calmer card)
- Use gold foil gradients for section labels
- System fonts only (no external font loading — offline requirement)

### Glass Effects
- Cards use gradient backgrounds with `backdrop-filter: blur(12px)`
- Borders: subtle `rgba(255,255,255,0.08)` with brighter top edge
- Secondary buttons get "Platinum Edge" — `border-top: 1px solid rgba(255,255,255,0.9)`
- Shadows: layered, soft, max `rgba(0,0,0,0.6)`

### Motion — Haptic Physics
- Use spring-based easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Press states: `transform: scale(0.97) translateY(2px)`
- Transitions: 0.15s for micro-interactions, 0.3s for larger animations
- Must respect `prefers-reduced-motion`
- No decorative animation — motion must be functional (feedback, state changes)

### Safety (Non-Negotiable)
- Do not remove or simplify safety guards (disclaimers, confirmations, exit routes)
- Emergency escalation paths must always be accessible
- Medical disclaimer must appear on first launch AND on every crisis card footer
- Follow design priority: Safety → Clarity → Predictability → Accessibility → Calm

### Technical
- Do not add dependencies unless explicitly asked
- Keep `/web/index.html` as the main UI file
- No frameworks (React, Next, Vite)
- No bundlers or build tools
- Plain HTML/CSS/JS only
- All assets must work offline (no external CDNs for fonts/icons)

### Content
- Never introduce medical advice, diagnosis, or prescriptions
- No panic language
- No clinical tone
- Use "Kerunity" (not "KerUnity")

---

## Color Quick Reference

```css
/* Backgrounds */
--void: #050508;
--bg: #0a0a0f;

/* Glass surfaces */
background: linear-gradient(180deg, rgba(50,55,80,0.6) 0%, rgba(30,35,50,0.7) 100%);

/* Gold (champagne) */
--gold: #f7e1c6;
--gold-dark: #d4af7a;

/* Emergency (deep wine) — 999 ONLY */
--emergency: #8a2b3b;
--emergency-dark: #5c1a24;

/* Text */
--text: #FFFFFF;
--text-soft: rgba(255,255,255,0.9);
--text-muted: rgba(255,255,255,0.75);
--text-faint: rgba(255,255,255,0.55);
```

---

## Working Style

- Make the smallest safe change that improves calm + clarity
- Prefer single, clean patches
- Always preserve accessibility and contrast
- If unsure, propose 2 options with tradeoffs — don't guess silently
- After each change, verify UI still loads and buttons still work
- If something breaks, revert immediately
- Test with DevTools cache disabled + hard refresh (Ctrl+Shift+R)

---

## Definition of Done

A change is complete when:
- It follows Midnight Glass design system
- It looks calmer than before (or no worse)
- It reads well at low brightness
- It works with reduced motion
- No new confusion added
- Touch targets meet minimums (48px standard, 72px crisis)
- All buttons still functional
- Works offline (no external resource loading)
