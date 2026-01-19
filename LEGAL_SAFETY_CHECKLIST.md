# Kerunity Legal & Safety Compliance Checklist
## App Store Submission & UK Digital Health Requirements

**Version:** 1.0  
**Last Updated:** January 2026  
**Status:** Pre-Launch Review

---

## CRITICAL PRE-LAUNCH REQUIREMENTS

### ✅ = Completed
### ⚠️ = In Progress
### ❌ = Not Started

---

## 1. MEDICAL & HEALTH DISCLAIMERS

### Required Disclaimers

- [ ] **First launch disclaimer screen**
  - Cannot be skipped
  - Must be acknowledged before app use
  - Includes: "Not medical advice" + emergency contact info
  - Stored confirmation (local only, no tracking)

- [ ] **In-app disclaimer visibility**
  - Medical disclaimer in "Important Notice" menu section
  - Footer text on every crisis card: "This is guidance, not medical advice. Emergency? Call 999"
  - Emergency contacts accessible from every screen

- [ ] **Scope of practice statement**
  - Clearly states: "Practical scripts, not medical advice"
  - Clarifies: "Not a substitute for professional care"
  - Defines: When to seek professional help

### Content Accuracy

- [ ] **Professional review documentation**
  - All crisis cards reviewed by qualified dementia care professional(s)
  - Reviewer credentials documented
  - Review date documented
  - Process for ongoing review established

- [ ] **Content update process**
  - Mechanism to flag harmful content
  - Process to review and update based on feedback
  - Version control for crisis card content

- [ ] **No diagnostic claims**
  - Verify: No language suggesting diagnosis
  - Verify: No language suggesting treatment
  - Verify: No language suggesting medical authority

---

## 2. EMERGENCY CONTACT REQUIREMENTS

### Design & Accessibility

- [ ] **Emergency contacts prominent**
  - Available from menu (top position)
  - Available on first launch flow
  - Large tap targets (56px minimum)
  - High contrast, readable in stress

- [ ] **Tap-to-call functionality**
  - All emergency numbers are tappable
  - Opens native phone dialer
  - Works offline
  - No confirmation dialogs (immediate action)

- [ ] **Localized emergency numbers**
  - UK: 999, 111
  - US: 911, 988
  - Canada: 911, 988
  - Australia: 000, 13 11 14
  - Ireland: 999/112, 116 123
  - Fallback for other regions: 112 (international)

- [ ] **Dementia-specific helplines included**
  - UK: Dementia UK, Alzheimer's Society
  - US: Alzheimer's Association
  - Other regions as applicable

---

## 3. PRIVACY & DATA PROTECTION

### GDPR Compliance

- [ ] **Privacy policy exists**
  - Explains what data is NOT collected
  - Explains third-party services (email, payments)
  - Available in-app and on website
  - Written in plain language

- [ ] **Data processing lawful basis**
  - Documented: "No personal data processed by app"
  - Documented: Third-party processing (Google, Meta, Ko-fi)
  - Clear boundaries of what each service handles

- [ ] **User rights documented**
  - Right to access (N/A - no data stored)
  - Right to deletion (N/A - no data stored)
  - Right to data portability (N/A - no data stored)
  - Contact for privacy questions: gavin@kerunity.app

### Structural Privacy

- [ ] **Offline-first architecture verified**
  - App functions 100% without internet
  - No server calls during crisis card use
  - Service worker caches all content
  - No analytics SDKs present

- [ ] **No tracking verification**
  - No Google Analytics
  - No Facebook Pixel
  - No third-party SDKs
  - No advertising frameworks
  - No A/B testing tools that phone home

- [ ] **Account-free verified**
  - No signup flow
  - No login flow
  - No password storage
  - No user database

---

## 4. ACCESSIBILITY COMPLIANCE

### WCAG 2.1 AA Standards

- [ ] **Color contrast**
  - Text meets 4.5:1 contrast ratio (normal text)
  - Text meets 3:1 contrast ratio (large text 18pt+)
  - UI elements meet 3:1 contrast ratio
  - Emergency elements use red, not just color

- [ ] **Text readability**
  - Font size: minimum 16px body text
  - Crisis card text: minimum 18px
  - Emergency contacts: minimum 20px
  - Line height: 1.5x minimum
  - Can be zoomed to 200% without breaking

- [ ] **Screen reader compatibility**
  - All interactive elements have labels
  - Semantic HTML used correctly
  - Focus order is logical
  - Dynamic content announced
  - Tested with VoiceOver (iOS) and TalkBack (Android)

- [ ] **Motor accessibility**
  - All tap targets minimum 44x44px (iOS), 48x48px (Android)
  - No time-based interactions
  - No drag/swipe-only interactions
  - Works with switch control
  - One-handed use possible

- [ ] **Cognitive accessibility**
  - Simple language (no jargon)
  - Clear headings
  - Consistent navigation
  - No flashing content
  - No auto-playing media without control

### Accessibility Statement

- [ ] **Statement in menu**
  - Lists accessibility features
  - Explains WCAG compliance
  - Provides contact for issues: gavin@kerunity.app

---

## 5. AGE RATING & CONTENT

### App Store Age Ratings

- [ ] **Age rating selected**
  - Recommended: 12+ or 17+ depending on emotional content
  - Rationale documented: "Designed for adult carers; emotional weight of dementia situations may be distressing for children"

- [ ] **Content descriptors accurate**
  - iOS App Store: Check applicable boxes
  - Google Play: Select appropriate content ratings
  - No inappropriate content flagged

- [ ] **Age guidance in app**
  - Statement in "Important Notice" section
  - Clear that app is for adult family carers

---

## 6. TERMS OF SERVICE & LEGAL

### Required Legal Documents

- [ ] **Terms of Service**
  - Exists (even if minimal for free app)
  - Covers: Use of app, limitations of liability, governing law
  - Accessible from menu or landing page

- [ ] **Disclaimer of Warranties**
  - App provided "as is"
  - No guarantee of outcomes
  - User assumes risk of use

- [ ] **Limitation of Liability**
  - Clear statement of liability limits
  - No liability for harm from following scripts
  - No liability for emergency situations

- [ ] **Contact information**
  - Email: gavin@kerunity.app
  - (Optional: Registered business address if you have one)
  - (Optional: Phone/WhatsApp for feedback)

### UK-Specific Requirements

- [ ] **Not registered as medical device**
  - Verified: App does not diagnose, monitor, or treat
  - Verified: App is general wellness/support
  - No MHRA registration needed (document this decision)

- [ ] **Advertising Standards Authority (ASA) compliance**
  - Any marketing claims are truthful
  - No misleading health claims
  - No exaggerated testimonials

---

## 7. APP STORE SUBMISSION REQUIREMENTS

### Apple App Store

- [ ] **App Store Connect account**
  - Developer account active
  - Tax information submitted
  - Banking information submitted

- [ ] **App metadata**
  - App name: Kerunity
  - Subtitle: (50 characters max) "Crisis support for dementia carers"
  - Keywords: dementia, carer, crisis, support, caregiver, alzheimer
  - Description: Emphasizes privacy, offline, crisis support
  - Screenshots: 5-10 screenshots showing key features
  - Preview video: Optional 15-30 second demo

- [ ] **App Review Information**
  - Contact info: gavin@kerunity.app
  - Demo account: N/A (no account required)
  - Notes: "100% offline app, no data collection, please test airplane mode"

- [ ] **Privacy questions answered**
  - Data collection: Select "No"
  - Data linked to user: N/A
  - Data used to track: N/A
  - Privacy policy URL: [your website]/privacy

### Google Play Store

- [ ] **Google Play Console account**
  - Developer account active
  - Identity verified
  - Payment profile set up

- [ ] **Store listing**
  - App name: Kerunity
  - Short description: (80 characters)
  - Full description: (4000 characters)
  - Screenshots: 4-8 screenshots
  - Feature graphic: 1024x500px
  - App icon: 512x512px

- [ ] **Content rating questionnaire**
  - Complete IARC questionnaire
  - Answer honestly about content
  - Receive rating certificate

- [ ] **Data safety section**
  - Declare: "No data collected"
  - Declare: "No data shared"
  - Privacy policy URL: [your website]/privacy

---

## 8. TECHNICAL SAFETY REQUIREMENTS

### Offline Functionality

- [ ] **Service worker tested**
  - All assets cached on first load
  - App works in airplane mode
  - No broken functionality when offline
  - Crisis cards accessible without internet

- [ ] **Graceful degradation**
  - If service worker fails, show helpful error
  - Core features still work
  - No silent failures

### Performance & Reliability

- [ ] **Load time acceptable**
  - First load: Under 3 seconds on 4G
  - Subsequent loads: Instant (cached)
  - No splash screens that delay access

- [ ] **Battery/resource usage**
  - No background processes
  - No unnecessary CPU usage
  - No memory leaks

- [ ] **Error handling**
  - All errors caught and logged (locally only)
  - User-friendly error messages
  - No crashes on edge cases

---

## 9. CONTENT QUALITY CONTROL

### Crisis Card Review

- [ ] **Accuracy verified**
  - All scripts reviewed by dementia care professional
  - Based on established best practices
  - No harmful advice present

- [ ] **Tone verified**
  - Supportive, not judgmental
  - Permission-based language ("try saying" not "you should say")
  - Validates carer experience
  - No guilt-inducing language

- [ ] **Completeness verified**
  - All major crisis scenarios covered
  - Scripts provide full sentences (not fragments)
  - Next steps clear if script doesn't work
  - Emergency escalation always visible

### Testing with Real Carers

- [ ] **Beta testing completed**
  - 5-10 carers tested pre-launch
  - Feedback incorporated
  - Crisis scenarios validated as realistic
  - Scripts tested for helpfulness

- [ ] **Feedback mechanism active**
  - Users can report problems
  - Email/WhatsApp contact working
  - Commitment to respond to safety concerns

---

## 10. MONETIZATION COMPLIANCE

### Free vs Paid Features

- [ ] **Crisis support confirmed free forever**
  - No paywall on crisis cards
  - No time limits
  - No feature degradation for free users

- [ ] **Paid features clearly optional**
  - Learn zone: Optional, gated by email signup
  - Recovery zone: Optional, gated by email signup
  - Language: "Support" not "upgrade"
  - No pressure tactics

### Payment Processing

- [ ] **Third-party payment only**
  - Ko-fi or Buy Me a Coffee handles payments
  - Kerunity never sees payment details
  - Payment processor terms linked
  - Refund policy clear (follow processor's policy)

- [ ] **No dark patterns**
  - No fake urgency ("only 3 spots left!")
  - No shame-based upsells
  - No interrupting crisis use to ask for money

---

## 11. EXTERNAL COMMUNICATIONS

### Email (Optional Feature)

- [ ] **Email signup optional**
  - Not required for crisis cards
  - Only for Learn/Recovery zones or updates
  - Clear what you'll send
  - Easy unsubscribe

- [ ] **Email service compliant**
  - Using: (e.g., Mailchimp, ConvertKit)
  - GDPR-compliant service
  - Privacy policy covers email
  - Can export/delete user data on request

### Feedback Channels

- [ ] **Email: gavin@kerunity.app**
  - Active and monitored
  - Response commitment documented
  - Safety issues prioritized

- [ ] **WhatsApp (optional)**
  - Number provided if you want direct contact
  - Privacy implications explained
  - Can be disabled if overwhelming

---

## 12. LAUNCH DAY READINESS

### Final Checks

- [ ] **All disclaimers in place**
- [ ] **Emergency contacts working and localized**
- [ ] **App functions 100% offline**
- [ ] **Privacy policy published on website**
- [ ] **Terms of service published**
- [ ] **Accessibility tested**
- [ ] **Beta feedback addressed**
- [ ] **App store listings complete**
- [ ] **Payment links working (if applicable)**
- [ ] **Feedback channels active**

### Post-Launch Monitoring

- [ ] **Monitor app store reviews**
  - Check daily for first 2 weeks
  - Respond to safety concerns immediately
  - Flag bugs and crashes

- [ ] **Monitor feedback email**
  - Check daily
  - Prioritize safety issues
  - Document feature requests

- [ ] **Track crash reports**
  - iOS: Xcode Organizer or App Store Connect
  - Android: Google Play Console
  - Fix critical crashes within 48 hours

---

## 13. RECORD KEEPING

### Documentation to Maintain

- [ ] **Content review records**
  - Who reviewed crisis cards
  - When reviewed
  - Credentials of reviewer
  - Update log

- [ ] **User feedback log**
  - Safety issues reported
  - How addressed
  - Changes made

- [ ] **Legal compliance log**
  - GDPR decisions documented
  - Age rating rationale
  - Medical device exemption rationale

- [ ] **Version history**
  - What changed in each update
  - Why changes were made
  - When deployed

---

## SIGNATURES & APPROVALS

**Reviewed by:**

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Founder/Developer | Gavin | [Date] | ___________ |
| Clinical Reviewer | [Name] | [Date] | ___________ |
| Legal Advisor (if applicable) | [Name] | [Date] | ___________ |

---

## APPENDIX: KEY CONTACTS

**Regulatory Questions:**
- MHRA (UK Medical Devices): https://www.gov.uk/guidance/medical-devices-how-to-comply-with-the-legal-requirements
- ICO (UK Data Protection): https://ico.org.uk/

**App Store Support:**
- Apple App Review: https://developer.apple.com/app-store/review/
- Google Play Policy: https://play.google.com/about/developer-content-policy/

**Accessibility Resources:**
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- iOS Accessibility: https://developer.apple.com/accessibility/
- Android Accessibility: https://developer.android.com/guide/topics/ui/accessibility

**Dementia Care Resources:**
- Alzheimer's Society (UK): https://www.alzheimers.org.uk/
- Dementia UK: https://www.dementiauk.org/

---

**End of Checklist**

*Keep this document updated as you complete each item. This serves as both a launch checklist and an ongoing compliance record.*
