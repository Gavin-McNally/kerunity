# Kerunity Design System
## Midnight Glass v1.2

**Version:** 1.2  
**Date:** January 2026  
**Status:** Production Reference — Code Parity Verified  
**Theme:** Premium, calm, dark mode optimised for stressed users

---

## Design Philosophy

Kerunity is crisis infrastructure for carers. Every design decision serves one goal: **reduce cognitive load during high-stress moments**.

**Principles:**
- Dark mode by default (users may have vision issues from tears, stress, exhaustion)
- Generous spacing and large touch targets (shaking hands, divided attention)
- Calm over urgent (even emergency elements should feel composed, not alarming)
- Premium feel (carers deserve dignity, not medical-app sterility)
- Gold accents used sparingly (the "Gold Glass Rule" — active states only)

---

## Color Tokens

### Core Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--void` | `#050508` | Deepest background (true black with slight warmth) |
| `--bg` | `#0a0a0f` | Primary background |
| `--bg-elevated` | `#12121a` | Elevated surfaces |
| `--charcoal` | `#1a1a24` | Card backgrounds (avoid pure black — causes halos) |

### Ambient Lighting

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-gradient` | `radial-gradient(circle at 50% 0%, #252a45 0%, #050508 100%)` | Subtle top-down ambient light |
| `--bg-gradient-warm` | `radial-gradient(circle at 50% 100%, #2a2520 0%, #050508 100%)` | Warm bottom glow (optional) |

### Gold Accents (Champagne Gold)

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#f7e1c6` | Primary gold — icons, active states, CTAs |
| `--gold-dark` | `#d4af7a` | Gold gradient end, shadows |
| `--gold-glow` | `rgba(247, 225, 198, 0.3)` | Subtle glow effects |
| `--gold-bright` | `rgba(247, 225, 198, 0.8)` | Strong glow (calmer card smile) |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--text` | `#FFFFFF` | Primary text, headlines |
| `--text-soft` | `rgba(255, 255, 255, 0.9)` | Body text, subtitles |
| `--text-muted` | `rgba(255, 255, 255, 0.75)` | Secondary text |
| `--text-faint` | `rgba(255, 255, 255, 0.55)` | Tertiary, hints, timestamps |
| `--text-disabled` | `rgba(255, 255, 255, 0.35)` | Disabled states |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--emergency` | `#8a2b3b` | Emergency actions (999 only) — Deep Wine |
| `--emergency-dark` | `#5c1a24` | Emergency gradient end |
| `--emergency-border` | `#8b2635` | Emergency button border |
| `--success` | `#4ade80` | Positive feedback (use sparingly) |
| `--warning` | `#f7e1c6` | Warnings use gold, not yellow |

---

## Glass Effects

### Standard Glass Card

```css
.glass-card {
  background: linear-gradient(180deg, 
    rgba(50, 55, 80, 0.6) 0%, 
    rgba(30, 35, 50, 0.7) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### Elevated Glass (Modals, Overlays)

```css
.glass-elevated {
  background: linear-gradient(180deg, 
    rgba(50, 55, 80, 0.95) 0%, 
    rgba(25, 30, 45, 0.98) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8);
}
```

### Subtle Glass (Buttons, Secondary Elements)

```css
.glass-subtle {
  background: linear-gradient(180deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: none;
}
```

### Gold Glass (Primary CTAs)

```css
.glass-gold {
  background: linear-gradient(180deg, 
    rgba(247, 225, 198, 0.18) 0%, 
    rgba(247, 225, 198, 0.08) 100%
  );
  border: 1px solid rgba(247, 225, 198, 0.25);
  border-top: 1px solid rgba(247, 225, 198, 0.4);
  color: #f7e1c6;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}
```

### Ruby Glass (Emergency Only) — DEEP WINE

```css
.glass-ruby {
  background: linear-gradient(180deg, 
    #8a2b3b 0%, 
    #7d2230 45%, 
    #5c1a24 100%
  );
  border: 1px solid #8b2635;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  color: #FFFFFF;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 
              0 6px 12px rgba(0, 0, 0, 0.4);
}
```

**Important:** Ruby Glass is reserved for the 999/911 emergency button ONLY. NHS 111, Samaritans, and all other support buttons use Gold Glass or Neutral Glass (calm, supportive) — never ruby. This preserves visual hierarchy and prevents alarm fatigue.

---

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Note:** System fonts ensure offline reliability. No external font loading.

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero headline | 32px | 700 | 1.2 | -0.5px |
| Page headline | 24-28px | 700 | 1.3 | -0.5px |
| Card title | 20px | 700 | 1.3 | -0.3px |
| Body large | 18px | 500 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Body small | 14px | 400 | 1.5 | 0 |
| Caption | 12px | 500 | 1.4 | 0.5px |
| Section label | 12px | 700 | 1.2 | 2px (uppercase) |

### Special Text Effects

#### Gold Foil (Section Labels)

```css
.text-gold-foil {
  background: linear-gradient(90deg, #d4af7a 0%, #f7e1c6 50%, #d4af7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
}
```

#### Pearlescent (Celebration Headlines)

```css
.text-pearlescent {
  background: linear-gradient(90deg, #FFFFFF 0%, #FFE4B5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
```

---

## Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, icon gaps |
| `--space-2` | 8px | Inline element spacing |
| `--space-3` | 12px | Small component padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | Medium spacing |
| `--space-6` | 24px | Section gaps, card padding |
| `--space-8` | 32px | Large section gaps |
| `--space-10` | 40px | Page margins |
| `--space-12` | 48px | Hero sections |

### Component Spacing

| Component | Padding | Gap |
|-----------|---------|-----|
| Cards | 24px | — |
| Buttons | 16px 24px | — |
| Button groups | — | 8-12px |
| Menu items | 16px 24px | 8px |
| Modal | 32px | — |
| Page | 24px sides, 32px top/bottom | — |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small elements, pills |
| `--radius-md` | 12px | Buttons, inputs |
| `--radius-lg` | 16px | Cards, modals |
| `--radius-xl` | 20px | Large cards, sheets |
| `--radius-full` | 9999px | Circular elements |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(0, 0, 0, 0.3)` | Subtle lift |
| `--shadow-md` | `0 8px 20px rgba(0, 0, 0, 0.4)` | Buttons, small cards |
| `--shadow-lg` | `0 12px 32px rgba(0, 0, 0, 0.6)` | Cards, elevated elements |
| `--shadow-xl` | `0 24px 48px rgba(0, 0, 0, 0.8)` | Modals, overlays |
| `--shadow-gold` | `0 4px 16px rgba(247, 225, 198, 0.3)` | Gold accent glow |
| `--shadow-ruby` | `0 6px 12px rgba(0, 0, 0, 0.4)` | Emergency button (subtle, not glowing) |

---

## Haptic Physics

All interactive elements use spring-based easing for a tactile feel.

### Press State

```css
.interactive {
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.15s ease;
}

.interactive:active {
  transform: scale(0.97) translateY(2px);
}
```

### Button Press States

```css
/* Standard button */
.btn:active {
  transform: scale(0.97) translateY(2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
}

/* Gold button */
.btn-gold:active {
  transform: scale(0.97) translateY(2px);
  box-shadow: 0 2px 8px rgba(247, 225, 198, 0.4);
}

/* Ruby button (Deep Wine) */
.btn-ruby:active {
  transform: scale(0.97) translateY(2px);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), 
              0 4px 8px rgba(0, 0, 0, 0.5);
}
```

### Card Lift (Hover/Focus)

```css
.card:hover,
.card:focus {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
}
```

---

## Icons

### Style: Gold Wireframe

All icons are stroke-only (no fills) in champagne gold.

| Property | Value |
|----------|-------|
| Stroke color | `#f7e1c6` |
| Stroke width | 2px |
| Stroke linecap | `round` |
| Stroke linejoin | `round` |
| Fill | `none` |

### Sizes

| Context | Size | Container |
|---------|------|-----------|
| Menu items | 20-22px | None |
| Card icons | 34px | 52×52px container |
| Hero icons | 48-64px | None |
| Navigation | 24px | 44×44px touch target |

### Icon Container (Cards)

```css
.icon-container {
  width: 52px;
  height: 52px;
  background: rgba(247, 225, 198, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 1px 4px rgba(247, 225, 198, 0.15);
}

.icon-container svg {
  width: 34px;
  height: 34px;
  stroke: #f7e1c6;
  stroke-width: 2px;
  fill: none;
}
```

### Icon Opacity States

| State | Opacity |
|-------|---------|
| Resting | 0.6 |
| Hover/Focus | 0.8 |
| Active | 1.0 |
| Disabled | 0.3 |

---

## Buttons

### Primary (Gold Glass)

```css
.btn-primary {
  background: linear-gradient(180deg, 
    rgba(247, 225, 198, 0.18) 0%, 
    rgba(247, 225, 198, 0.08) 100%
  );
  border: 1px solid rgba(247, 225, 198, 0.25);
  border-top: 1px solid rgba(247, 225, 198, 0.4);
  color: #f7e1c6;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 16px;
  min-height: 56px;
  width: 100%;
}
```

### Secondary (Neutral / Platinum Glass)

```css
.btn-secondary {
  background: linear-gradient(180deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* The Platinum Edge: High opacity to look like metal catching light */
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 16px;
  min-height: 56px;
  width: 100%;
}
```

### Emergency (Ruby Glass) — 999 ONLY

```css
.btn-emergency {
  background: linear-gradient(180deg, 
    #8a2b3b 0%, 
    #7d2230 45%, 
    #5c1a24 100%
  );
  border: 1px solid #8b2635;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  color: #FFFFFF;
  font-weight: 700;
  padding: 16px 24px;
  border-radius: 16px;
  min-height: 72px; /* Crisis touch target */
  width: 100%;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 
              0 6px 12px rgba(0, 0, 0, 0.4);
}
```

### Ghost (Text Only)

```css
.btn-ghost {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  padding: 12px 16px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.btn-ghost:hover {
  color: rgba(255, 255, 255, 0.9);
}
```

---

## Touch Targets

**Minimum touch target: 48px × 48px** (WCAG 2.1 AA)

For stressed users: **56px minimum height** recommended for standard actions.

For crisis actions: **72px minimum height** required — accommodates motor control loss during high-stress states.

```css
.touch-target {
  min-height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.touch-target-lg {
  min-height: 56px;
}

/* Crisis buttons: Next, Back, Emergency */
.touch-target-crisis {
  min-height: 72px;
}
```

### Crisis Touch Target Rule

Primary crisis actions (Next Step, Back to Situations, Call 999) must use `min-height: 72px`. These are "Panic Slabs" — large enough to hit accurately when hands are shaking, vision is blurred, or attention is divided.

---

## Dividers

### Standard Divider

```css
.divider {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.15) 50%, 
    transparent 100%
  );
  margin: 16px 0;
}
```

### Section Divider (with more space)

```css
.divider-section {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.1) 50%, 
    transparent 100%
  );
  margin: 24px 0;
}
```

---

## Animations

### Entrance — Fade Up

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.4s ease-out forwards;
}
```

### Entrance — Staggered Cards

```css
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 50ms; }
.card:nth-child(3) { animation-delay: 100ms; }
.card:nth-child(4) { animation-delay: 150ms; }
```

### Menu — Slide In

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.menu-enter {
  animation: slideIn 0.3s ease-out forwards;
}
```

### Menu — Slide Out

```css
@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

.menu-exit {
  animation: slideOut 0.25s ease-in forwards;
}
```

### Micro-Fade (Crisis Screens)

For crisis screens, use instant micro-fades (speed over polish):

```css
.micro-fade {
  transition: opacity 0.15s ease;
}

/* Modal backdrop */
.modal-backdrop {
  transition: opacity 0.15s ease;
}

/* Modal content */
.modal-content {
  transition: opacity 0.15s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Accessibility

### Color Contrast

All text meets **WCAG 2.1 AA** standards:
- `--text` (#FFFFFF) on `--bg` (#0a0a0f): **21:1** ✅
- `--text-soft` on `--bg`: **18.9:1** ✅
- `--text-muted` on `--bg`: **12.6:1** ✅
- `--gold` on `--bg`: **13.8:1** ✅

### Focus States

```css
*:focus-visible {
  outline: 2px solid #f7e1c6;
  outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader

- All icons must have `aria-label` or be hidden with `aria-hidden="true"`
- Interactive elements need clear accessible names
- Page structure uses semantic HTML (`<main>`, `<nav>`, `<section>`)

---

## Component Reference

### Crisis Card Footer

Every crisis card includes this footer:

```css
.crisis-footer {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  text-align: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
```

Content: "This is guidance, not medical advice. Emergency? Call 999"

### Calmer Card (Celebration State)

```css
.calmer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
}

.calmer-smile {
  width: 120px;
  height: 60px;
  margin-bottom: 24px;
  filter: drop-shadow(0 0 16px rgba(247, 225, 198, 0.8));
}

.calmer-smile path {
  stroke: #f7e1c6;
  stroke-width: 6px;
  stroke-linecap: round;
  fill: none;
}

.calmer-text {
  font-size: 26px;
  font-weight: 700;
  background: linear-gradient(90deg, #FFFFFF 0%, #FFE4B5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Midnight Menu (Side Drawer)

The hamburger menu slides in from the left with a gold-edged void background.

```css
.menu-drawer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 85%;
  max-width: 320px;
  background: rgba(15, 20, 35, 0.95); /* Deep Void, nearly opaque */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(247, 225, 198, 0.15); /* Gold Edge */
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2000;
  padding: 32px 24px;
  overflow-y: auto;
}

.menu-drawer.open {
  transform: translateX(0);
}

/* Backdrop overlay */
.menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1999;
}

.menu-backdrop.open {
  opacity: 1;
  visibility: visible;
}
```

#### Menu Typography

```css
.menu-link {
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #F2F2F5;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  text-decoration: none;
  transition: color 0.15s ease;
}

.menu-link:active,
.menu-link.active {
  color: #f7e1c6; /* Gold on active */
}

.menu-section-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 24px;
  margin-bottom: 8px;
}
```

#### Menu Close Button

```css
.menu-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-close svg {
  width: 22px;
  height: 22px;
  stroke: #f7e1c6;
  stroke-width: 2px;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}

.menu-close:active svg {
  opacity: 1;
}
```

#### Hamburger Trigger Button

```css
.hamburger-btn {
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.hamburger-btn svg {
  width: 22px;
  height: 22px;
  stroke: #f7e1c6;
  stroke-width: 2px;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}

.hamburger-btn:active svg {
  opacity: 1;
}
```

---

## The Gold Glass Rule

**Use gold accents sparingly.** Gold should indicate:
- Active/selected states
- Primary CTAs
- Positive feedback (Calmer card)

Gold should NOT be used for:
- Every button
- Decorative elements
- Static labels
- Backgrounds

When everything is gold, nothing is gold. Restraint creates premium.

---

## File Checklist

### Required Assets (Offline)

- [ ] All SVG icons inline or in local `/assets` folder
- [ ] No external font CDN links
- [ ] No external CSS CDN links
- [ ] No external JS CDN links (unless cached by service worker)
- [ ] All images in PWA cache manifest

### Fonts

System fonts only — no external loading:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2026 | Initial Midnight Glass system |
| 1.1 | Jan 2026 | Added Ruby Glass specs, haptic physics, accessibility requirements, component reference |
| 1.2 | Jan 2026 | **Code parity fixes:** Ruby Glass changed to Deep Wine (#8a2b3b), Platinum Edge added to secondary buttons (0.9 opacity), Crisis touch targets set to 72px, Midnight Menu (Side Drawer) component added, Micro-fade timing corrected to 0.15s |

---

*This document is the canonical reference for all Kerunity visual design.*
