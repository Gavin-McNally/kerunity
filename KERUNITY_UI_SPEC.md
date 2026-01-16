# Kerunity Crisis App - UI Design Specification

## Project Context
- **App Purpose:** Crisis intervention app for dementia caregivers
- **Design Philosophy:** Dark mode optimized for users in high-stress situations with potential vision issues (dilated pupils, tears, astigmatism)
- **Key Constraint:** Users are in crisis - needs fast recognition, minimal cognitive load, calming aesthetics

---

## Core Design Principles

### Color Psychology for Crisis Design
- Avoid pure blacks (#000000) - causes "halos" around text for astigmatism sufferers
- Use "charcoal" grays - softer on dilated pupils, reduces OLED screen smearing
- Inject subtle blue/slate undertones - more calming than pure gray for crisis contexts
- Transparent borders over solid - creates glass-like edges, feels more premium

### Accessibility Requirements
- WCAG AA compliance mandatory - vision may be blurred by stress/tears
- Minimum contrast ratios: Primary text #E0E0E0+, Secondary text #A0A0A0+
- Touch targets: Minimum 44-50px height (iOS standard)
- Crisis-optimized red: Low opacity backgrounds for emergency buttons to maintain readability

---

## Final Color Palette

```css
:root {
  /* Base layers */
  --bg: #161618;              /* App background - subtle blue undertone */
  --surface: #1F1F22;         /* Card surface - distinct from bg */
  --surface-hover: #2B2B30;   /* Interactive state */
  
  /* Text hierarchy */
  --text-primary: #F2F2F5;    /* Soft white, not harsh pure white */
  --text-secondary: #9CA3AF;  /* Muted gray */
  --text-muted: #6B7280;      /* Disclaimer text */
  --text-subtle: #525252;     /* Legal/safety text */
  
  /* Brand accent */
  --brand-gold: #D4A017;      /* Primary action color */
  
  /* Emergency */
  --emergency-text: #EB5757;
  --emergency-bg: rgba(235, 87, 87, 0.1);
  --emergency-border: rgba(235, 87, 87, 0.3);
  
  /* Borders (transparent white) */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.12);
}
```

---

## Screen-by-Screen Implementation

### 1. Dashboard/Home Screen

#### Header Structure
```html
<div class="app-bar">
  <div class="brand">Kerunity</div>
  <button class="btn-emergency-nav">Emergency</button>
</div>

<div class="hero-section">
  <h1>Start here.</h1>
  <p>You don't have to get this right perfectly. Just breathe.</p>
</div>

<p class="disclaimer">Guidance only. Not live monitoring. If in danger, call 999.</p>
```

#### Header CSS
```css
.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-top: 10px;
}

.brand {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #F2F2F5;
}

.btn-emergency-nav {
  background: transparent;
  border: 1px solid rgba(235, 87, 87, 0.4);
  color: #EB5757;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
}

.hero-section h1 {
  font-size: 28px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
  line-height: 1.2;
}

.hero-section p {
  font-size: 17px;
  color: #9CA3AF;
  line-height: 1.5;
}

.disclaimer {
  font-size: 13px;
  color: #525252;
  margin-bottom: 24px;
}
```

#### Search Bar
```css
.search-container {
  display: flex;
  align-items: center;
  background-color: #2C2C2E;
  border-radius: 100px;
  padding: 0 20px;
  height: 56px;
  margin-bottom: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.search-input {
  flex-grow: 1;
  background: transparent;
  border: none;
  color: #FFF;
  font-size: 17px;
  height: 100%;
  padding-left: 12px;
}

.search-input:focus {
  outline: none;
}

.search-icon, .mic-icon {
  color: #9CA3AF;
  font-size: 20px;
}
```

#### Situation Cards
```css
.situation-card {
  display: flex;
  align-items: center;
  background-color: #242424;
  padding: 20px;
  margin-bottom: 12px;
  border-radius: 16px;
  
  /* Premium "etched" look */
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  transition: transform 0.2s ease, background 0.2s;
  cursor: pointer;
}

.situation-card:active {
  transform: scale(0.98);
  background-color: #2a2a2a;
}

.card-icon {
  font-size: 24px;
  margin-right: 16px;
  opacity: 0.8;
}

.chevron {
  margin-left: auto;
  color: #666;
}

.card-title {
  font-weight: 600;
  color: #F2F2F5;
  margin: 0;
}

.card-subtitle {
  font-size: 0.9rem;
  color: #9CA3AF;
  margin-top: 4px;
}
```

**Suggested Icons:**
- Refusing meds → 💊
- Wants to go home → 🏠
- Asking for mom → ❤️

---

### 2. Crisis Script Screen

#### Close Button
```css
.btn-close-simple {
  background: transparent;
  border: none;
  color: #9CA3AF;
  font-size: 28px;
  line-height: 1;
  padding: 8px;
  cursor: pointer;
}

.btn-close-simple:hover {
  color: #FFF;
}
```

#### Script Content with Quote Bar
```css
.label-gold {
  color: #D4A017;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.script-hero-text {
  font-size: 26px;
  font-weight: 600;
  color: #F2F2F5;
  line-height: 1.4;
  border-left: 4px solid #D4A017;
  padding-left: 20px;
  margin-bottom: 24px;
}
```

#### Listen Button (Gold Pill)
```css
.btn-listen-gold {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(212, 160, 23, 0.15);
  border: 1px solid rgba(212, 160, 23, 0.3);
  color: #D4A017;
  padding: 10px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 24px;
}

.btn-listen-gold:hover {
  background-color: rgba(212, 160, 23, 0.25);
}
```

#### Navigation Buttons
```css
.nav-buttons-row {
  display: flex;
  gap: 16px;
  margin-top: 24px;
  width: 100%;
}

/* Back Button - Solid Charcoal */
.btn-back-solid {
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #E5E5E5;
  padding: 14px 28px;
  border-radius: 100px;
  font-weight: 600;
  flex: 1;
  text-align: center;
}

.btn-back-solid:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

/* Next Button - Brand Gold */
.btn-next-gold {
  background-color: #D4A017;
  color: #1a1a1a;
  border: none;
  padding: 14px 28px;
  border-radius: 100px;
  font-weight: 700;
  flex: 1;
  text-align: center;
  box-shadow: 0 4px 12px rgba(212, 160, 23, 0.3);
}

.btn-next-gold:active {
  transform: scale(0.96);
}
```

#### Progress Bar
```css
.progress-container {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 8px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #D4A017;
  transition: width 0.3s ease;
}
```

#### Back to Situations Link
```css
.link-text-only {
  background: none;
  border: none;
  color: #6B7280;
  font-size: 14px;
  text-decoration: underline;
  text-decoration-color: rgba(107, 114, 128, 0.3);
  text-underline-offset: 4px;
  cursor: pointer;
  display: block;
  margin: 0 auto 20px auto;
}
```

---

## Typography Standards

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.01em;
}

h1 { font-size: 28px; font-weight: 700; line-height: 1.2; }
h2 { font-size: 24px; font-weight: 600; line-height: 1.3; }
h3 { font-size: 20px; font-weight: 700; }

.body-text { font-size: 17px; line-height: 1.6; }
.small-text { font-size: 14px; }
.legal-text { font-size: 13px; }
```

---

## Design Decisions

### ❌ Rejected Approaches
- Pure black backgrounds (#141414) → Too harsh, causes astigmatism halos
- Solid gray borders (#333333) → Looked flat, muddy
- Thick borders (2px+) → Felt clunky, outdated
- Pure white buttons (#FFFFFF) → Too bright, jarring in dark mode
- Ghost/transparent back buttons → Users couldn't see them

### ✅ Final Patterns
- Charcoal with blue undertones - Calming, reduces eye strain
- Transparent white borders (rgba) - Creates premium glass effect
- 1px borders max - Clean, modern
- Gold primary actions (#D4A017) - Warm, reassuring, on-brand
- Solid charcoal secondary buttons - Visible but not competing
- Pill shapes (border-radius: 100px) - Friendly, modern
- 56px touch targets - Thumb-friendly for stressed users
- Icons in list items - Faster cognitive processing

---

## Critical UX Principles for Crisis Apps

1. **Visual Hierarchy Over Decoration:** Primary actions must be unmistakable
2. **No Competing Elements:** One clear "next step" per screen
3. **Minimize Reading:** Icons + short labels beat paragraphs
4. **Tactile Feedback:** Scale transforms (0.96-0.98) on press
5. **Accessibility First:** Contrast ratios are non-negotiable
6. **Emergency Latch Pattern:** Red buttons should be visible but recessed

---

## Theme Meta Tag

```html
<meta name="theme-color" content="#161618">
```
