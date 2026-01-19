# Kerunity First Launch Flow
## Mandatory Onboarding Screens (New Build Required)

**Version:** 1.0  
**Purpose:** Legal compliance, safety, and user orientation  
**Status:** Ready for development

---

## OVERVIEW

**What this is:**
A 4-screen flow that appears the first time someone opens Kerunity. Cannot be skipped until all screens are viewed and the medical disclaimer is acknowledged.

**Why it's critical:**
- Legal protection (user must see medical disclaimer)
- Safety (user must know how to get emergency help)
- Clarity (sets expectations for what the app does/doesn't do)

**Technical requirements:**
- Shown once per install
- Stored locally that user has seen it (localStorage or AsyncStorage)
- If user reinstalls, flow shows again
- Cannot be dismissed by swiping, back button, or tapping outside
- Must complete in order

---

## SCREEN 1: WELCOME

### Visual Design

```
┌─────────────────────────────────────────┐
│                                         │
│            [App Icon]                   │
│             Kerunity                    │
│                                         │
│                                         │
│      Crisis support for carers          │
│                                         │
│                                         │
│   When you don't know what to say,     │
│   this app gives you words that work.  │
│                                         │
│                                         │
│                                         │
│                                         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │       Continue                  │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Copy

**Headline:**
```
Kerunity
```

**Subheadline:**
```
Crisis support for carers
```

**Body:**
```
When you don't know what to say,
this app gives you words that work.
```

### Button

**Primary button:**
```
Continue
```

### Design Notes

- App icon: 80-100px, centered
- Headline: Brand font, 28-32px
- Subheadline: 18px, medium weight
- Body: 16px, comfortable line height (1.6)
- Void background with subtle radial gradient
- Gold wireframe button (champagne gold #f7e1c6)
- No back button or close X

### Behavior

- Tapping "Continue" advances to Screen 2
- No other way to proceed
- No skip option
- No back navigation

---

## SCREEN 2: MEDICAL DISCLAIMER (CRITICAL)

### Visual Design

```
┌─────────────────────────────────────────┐
│                                         │
│    ⚠️  Before you start...              │
│                                         │
│                                         │
│   This app provides practical scripts, │
│   not medical advice.                  │
│                                         │
│   In emergencies, always call 999.     │
│                                         │
│   If you're unsure whether this is an  │
│   emergency, call NHS 111.             │
│                                         │
│                                         │
│   You know the person you're caring    │
│   for. Trust your judgment. These      │
│   scripts are starting points, not     │
│   rules.                               │
│                                         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  ☐  I understand               │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │       Continue                  │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Copy

**Headline:**
```
⚠️ Before you start...
```

**Body (Paragraph 1):**
```
This app provides practical scripts, not medical advice.
```

**Body (Paragraph 2):**
```
In emergencies, always call 999.

If you're unsure whether this is an emergency, call NHS 111.
```

**Body (Paragraph 3):**
```
You know the person you're caring for. Trust your judgment. 
These scripts are starting points, not rules.
```

### Interactive Elements

**Checkbox:**
```
☐ I understand
```

**Primary button (disabled until checkbox checked):**
```
Continue
```

### Design Notes

- Warning icon (⚠️) in gold, not red (calm, not alarming)
- Text left-aligned, generous line height (1.6)
- Checkbox: Large tap target (44x44px minimum)
- Button disabled state: Reduced opacity (0.4)
- Button enabled state: Full opacity, gold glow
- No back button available
- No close X

### Behavior

1. Screen loads with checkbox unchecked
2. "Continue" button is disabled (greyed out)
3. User must tap checkbox
4. Checkbox animates to checked state
5. "Continue" button becomes enabled (full opacity, gold glow)
6. Tapping "Continue" advances to Screen 3
7. Checkbox state stored locally (user has acknowledged disclaimer)

### Localization

For non-UK regions, replace:
- "999" → local emergency number
- "NHS 111" → local urgent care number

Examples:
- **US:** "In emergencies, always call 911."
- **Canada:** "In emergencies, always call 911."
- **Australia:** "In emergencies, always call 000."
- **Ireland:** "In emergencies, always call 999 or 112."

---

## SCREEN 3: EMERGENCY CONTACTS (QUICK REFERENCE)

### Visual Design

```
┌─────────────────────────────────────────┐
│                                         │
│    🚨 Emergency Contacts                │
│                                         │
│                                         │
│   These numbers are always available    │
│   in the menu. Tap any number to call. │
│                                         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  🚨 999 — Emergency            │  │
│   │  Life-threatening situation     │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  🏥 111 — NHS Urgent Care      │  │
│   │  Medical advice, not emergency  │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  💛 Carer Support Lines        │  │
│   │  Samaritans: 116 123            │  │
│   │  Dementia UK: 0800 888 6678     │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │       Continue                  │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Copy

**Headline:**
```
🚨 Emergency Contacts
```

**Intro text:**
```
These numbers are always available in the menu. 
Tap any number to call.
```

**Emergency tier:**
```
🚨 999 — Emergency
Life-threatening situation
```

**Urgent tier:**
```
🏥 111 — NHS Urgent Care
Medical advice, not emergency
```

**Support tier:**
```
💛 Carer Support Lines
Samaritans: 116 123
Dementia UK: 0800 888 6678
```

### Interactive Elements

**Contact cards:**
- Each card is tappable (tap-to-call)
- Large tap targets (minimum 56px height)
- Visual feedback on tap (subtle scale)

**Primary button:**
```
Continue
```

### Design Notes

- Emergency card uses red accent (#ef4444), not gold
- Urgent card uses blue accent (#3b82f6)
- Support card uses gold accent (#f7e1c6)
- Cards have subtle borders, not solid fills
- Numbers are large, readable (18px+)
- Back button available (returns to Screen 2)
- No close X yet

### Behavior

1. User can tap any phone number to call immediately
2. Tapping "Continue" advances to Screen 4
3. User can go back to Screen 2 if needed
4. These contacts are also in main menu

### Localization

Adjust for region:
- **UK:** 999, 111, Samaritans, Dementia UK
- **US:** 911, 988, Alzheimer's Association
- **Canada:** 911, 988, Alzheimer Society Canada
- **Australia:** 000, 13 11 14, Dementia Australia
- **Ireland:** 999/112, 116 123, Alzheimer Society Ireland

---

## SCREEN 4: HOW TO USE (OPTIONAL BUT HELPFUL)

### Visual Design

```
┌─────────────────────────────────────────┐
│                                         │
│    📖 How to use Kerunity               │
│                                         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  1. Tap a situation             │  │
│   │     "Won't take medication"     │  │
│   │     "Asking for mum"            │  │
│   │     "Wants to go home"          │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  2. Read the words              │  │
│   │     The app gives you a script  │  │
│   │     to say out loud, right now  │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  3. That's it                   │  │
│   │     Everything else is optional │  │
│   └─────────────────────────────────┘  │
│                                         │
│                                         │
│   Works 100% offline. Your phone can   │
│   be in airplane mode.                 │
│                                         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │       Get Started               │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Copy

**Headline:**
```
📖 How to use Kerunity
```

**Step 1:**
```
1. Tap a situation
   "Won't take medication"
   "Asking for mum"
   "Wants to go home"
```

**Step 2:**
```
2. Read the words
   The app gives you a script
   to say out loud, right now
```

**Step 3:**
```
3. That's it
   Everything else is optional
```

**Bottom note:**
```
Works 100% offline. Your phone can be in airplane mode.
```

### Button

**Primary button:**
```
Get Started
```

### Design Notes

- Three numbered steps, each in a card
- Cards use subtle borders, void background
- Gold accents on card borders
- Comfortable spacing between steps (24px)
- Bottom note in smaller text (14px)
- Back button available (returns to Screen 3)
- No close X yet

### Behavior

1. User reads through the three steps
2. Tapping "Get Started" completes onboarding
3. User enters main app (home screen with crisis cards)
4. First-launch flow never shows again (unless app reinstalled)
5. Onboarding completion stored locally

### Optional: Video

If you create a 15-second demo video, it can replace or supplement the text steps:

```
┌─────────────────────────────────────────┐
│                                         │
│    📖 How to use Kerunity               │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │                                 │  │
│   │     [Video: 15 seconds]         │  │
│   │                                 │  │
│   └─────────────────────────────────┘  │
│                                         │
│   Tap a situation. Read the words.     │
│   That's it.                           │
│                                         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │       Get Started               │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

---

## TECHNICAL IMPLEMENTATION NOTES

### Local Storage

**Store these values:**
```javascript
{
  "onboarding_completed": true,
  "disclaimer_acknowledged": true,
  "disclaimer_acknowledged_date": "2026-01-20T10:30:00Z",
  "onboarding_version": "1.0" // In case you update onboarding later
}
```

**Check on app launch:**
```javascript
const onboardingCompleted = localStorage.getItem('onboarding_completed');
if (!onboardingCompleted) {
  // Show onboarding flow
} else {
  // Go straight to home screen
}
```

### Screen Transitions

**Animation style:**
- Fade + slide (300ms ease)
- Slide from right on "Continue"
- Slide to left on "Back"
- No jarring cuts

**Gesture handling:**
- Swipe back gesture disabled during onboarding
- Hardware back button: Goes to previous screen (not exit app)
- On first screen (Welcome): Back button exits app with confirmation

### Accessibility

**Screen reader announcements:**
```
Screen 1: "Welcome to Kerunity. Crisis support for carers."
Screen 2: "Important: Medical disclaimer. This app provides practical scripts, not medical advice."
Screen 3: "Emergency contacts. These numbers are always available."
Screen 4: "How to use Kerunity. Three simple steps."
```

**Focus management:**
- On each screen load, focus moves to headline
- Tab order is logical (headline → body → checkbox → button)
- Checkbox has clear focus indicator

### Error Handling

**If user closes app mid-onboarding:**
- Onboarding resumes from last completed screen
- User doesn't have to start over
- But must complete to access main app

**If user denies phone permission (for tap-to-call):**
- Show error: "To call emergency numbers, please enable phone permissions in settings"
- Provide fallback: Display number for manual dialing

---

## ASSETS NEEDED

### Icons
- [ ] App icon (80-100px)
- [ ] Warning icon (⚠️) in gold wireframe style
- [ ] Emergency icon (🚨) or use emoji
- [ ] Hospital icon (🏥) or use emoji
- [ ] Heart icon (💛) or use emoji
- [ ] Book icon (📖) or use emoji

### Video (Optional)
- [ ] 15-second demo video showing:
  - Tap situation
  - Read script
  - Use feedback buttons
  - Access emergency contacts

### Copy Review
- [ ] Legal review of medical disclaimer (Screen 2)
- [ ] Clinical review of emergency guidance (Screen 3)

---

## POST-LAUNCH ITERATION

### Metrics to Track (Anonymously)
- What % of users complete onboarding vs abandon?
- At which screen do most people abandon?
- How long does onboarding take on average?
- Do users tap emergency contacts during onboarding?

**Important:** These metrics should be:
- Anonymous (no user ID)
- Local only (no server)
- Aggregated (not per-user)
- Optional (user can disable if implemented)

### Potential Improvements Based on Feedback

**If users say onboarding is too long:**
- Combine Screens 3 and 4
- Make Screen 4 skippable

**If users skip the disclaimer checkbox:**
- Add more spacing around checkbox
- Make checkbox larger
- Add helper text: "Please confirm you've read this"

**If users get confused:**
- Add progress indicator (1 of 4, 2 of 4, etc.)
- Add "Why am I seeing this?" expandable

---

## SCREEN FLOW DIAGRAM

```
┌──────────────┐
│   Screen 1   │
│   Welcome    │
└──────┬───────┘
       │ Continue
       ▼
┌──────────────┐
│   Screen 2   │
│  Disclaimer  │◄── Cannot skip
└──────┬───────┘    Must check box
       │ Continue
       ▼
┌──────────────┐
│   Screen 3   │
│  Emergency   │
│  Contacts    │
└──────┬───────┘
       │ Continue
       ▼
┌──────────────┐
│   Screen 4   │
│  How to Use  │
└──────┬───────┘
       │ Get Started
       ▼
┌──────────────┐
│  Main App    │
│  Home Screen │
└──────────────┘
```

---

## CHECKLIST FOR DEV AGENT

### Build Requirements
- [ ] Create 4 onboarding screens as standalone components
- [ ] Implement screen navigation with slide animations
- [ ] Add localStorage for onboarding completion tracking
- [ ] Implement checkbox with state management (Screen 2)
- [ ] Add tap-to-call functionality (Screen 3)
- [ ] Localize emergency numbers based on user region
- [ ] Handle back navigation properly
- [ ] Disable swipe gestures during onboarding
- [ ] Add screen reader labels for accessibility
- [ ] Test on both iOS and Android
- [ ] Verify works offline (service worker caches onboarding assets)

### Design Requirements
- [ ] Match existing app visual style (void background, gold accents)
- [ ] Use consistent spacing (24px between sections)
- [ ] Large, readable text (minimum 16px body, 28px headlines)
- [ ] High contrast for accessibility (WCAG AA)
- [ ] Gold wireframe buttons with hover/active states
- [ ] Checkbox with clear visual states (unchecked, checked, focus)
- [ ] Emergency card uses red accent (not gold)

### Copy Requirements
- [ ] All copy matches this document exactly
- [ ] Emergency numbers localized per region
- [ ] Medical disclaimer matches legal requirements
- [ ] Tone is calm, supportive, not alarming

### Testing Requirements
- [ ] Test full flow start to finish
- [ ] Test abandoning mid-flow (reopens at last screen)
- [ ] Test checkbox requirement (can't skip without checking)
- [ ] Test back navigation
- [ ] Test tap-to-call on all emergency numbers
- [ ] Test with screen reader (VoiceOver, TalkBack)
- [ ] Test with large text sizes
- [ ] Test in airplane mode (should still work)

---

**End of First Launch Flow Specification**

*This document is ready for handoff to development. All copy, design, and behavior is specified.*
