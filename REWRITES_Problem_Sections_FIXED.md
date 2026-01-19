# Kerunity Menu Content - FIXED SECTIONS
## Production-Ready Copy (Replace Existing Sections)

---

## SECTION 1: Emergency Contacts (COMPLETE REWRITE)

**Headline:** If someone is in immediate danger, get help now.

### Design Requirements
- Three distinct tiers, visually separated by white space
- Large tap targets (minimum 56px height)
- Emergency tier uses red accent, not gold
- Tap-to-call on all numbers
- Localize based on user region (see JSON at end)

---

### UK Version

```
┌─────────────────────────────────────────┐
│  🚨 EMERGENCY — CALL NOW                │
│                                         │
│         999                             │
│                                         │
│  Someone collapsed, stopped breathing,  │
│  or in immediate danger?                │
│  Tap to call immediately.               │
└─────────────────────────────────────────┘

[White space - 32px minimum]

┌─────────────────────────────────────────┐
│  🏥 URGENT (Not Life-Threatening)       │
│                                         │
│         111                             │
│                                         │
│  NHS 24-hour advice line                │
│  Medical concerns that need help today  │
└─────────────────────────────────────────┘

[White space - 32px minimum]

┌─────────────────────────────────────────┐
│  💛 SUPPORT FOR CARERS                  │
│                                         │
│  Samaritans                             │
│  116 123 (24/7)                         │
│  Free confidential support              │
│                                         │
│  Dementia UK                            │
│  0800 888 6678                          │
│  Specialist Admiral Nurses              │
│  Mon-Fri 9am-9pm, Sat-Sun 9am-5pm       │
│                                         │
│  Alzheimer's Society                    │
│  0333 150 3456                          │
│  Dementia Connect support line          │
│  Mon-Fri 9am-8pm, Sat-Sun 10am-4pm      │
└─────────────────────────────────────────┘
```

---

### US Version

```
┌─────────────────────────────────────────┐
│  🚨 EMERGENCY — CALL NOW                │
│                                         │
│         911                             │
│                                         │
│  Someone collapsed, stopped breathing,  │
│  or in immediate danger?                │
│  Tap to call immediately.               │
└─────────────────────────────────────────┘

[White space - 32px minimum]

┌─────────────────────────────────────────┐
│  💛 SUPPORT FOR CARERS                  │
│                                         │
│  Suicide & Crisis Lifeline              │
│  988 (24/7)                             │
│  Free confidential support              │
│                                         │
│  Alzheimer's Association                │
│  800-272-3900 (24/7)                    │
│  Dementia helpline and resources        │
└─────────────────────────────────────────┘
```

---

### Canada Version

```
┌─────────────────────────────────────────┐
│  🚨 EMERGENCY — CALL NOW                │
│                                         │
│         911                             │
│                                         │
│  Someone collapsed, stopped breathing,  │
│  or in immediate danger?                │
│  Tap to call immediately.               │
└─────────────────────────────────────────┘

[White space - 32px minimum]

┌─────────────────────────────────────────┐
│  💛 SUPPORT FOR CARERS                  │
│                                         │
│  Suicide Crisis Helpline                │
│  988 (24/7)                             │
│  Free confidential support              │
│                                         │
│  Alzheimer Society of Canada            │
│  1-855-705-4636                         │
│  Dementia support and information       │
└─────────────────────────────────────────┘
```

---

### Australia Version

```
┌─────────────────────────────────────────┐
│  🚨 EMERGENCY — CALL NOW                │
│                                         │
│         000                             │
│                                         │
│  Someone collapsed, stopped breathing,  │
│  or in immediate danger?                │
│  Tap to call immediately.               │
└─────────────────────────────────────────┘

[White space - 32px minimum]

┌─────────────────────────────────────────┐
│  💛 SUPPORT FOR CARERS                  │
│                                         │
│  Lifeline                               │
│  13 11 14 (24/7)                        │
│  Crisis support and suicide prevention  │
│                                         │
│  Dementia Australia                     │
│  1800 100 500                           │
│  National dementia helpline             │
└─────────────────────────────────────────┘
```

---

### Ireland Version

```
┌─────────────────────────────────────────┐
│  🚨 EMERGENCY — CALL NOW                │
│                                         │
│      999  or  112                       │
│                                         │
│  Someone collapsed, stopped breathing,  │
│  or in immediate danger?                │
│  Tap to call immediately.               │
└─────────────────────────────────────────┘

[White space - 32px minimum]

┌─────────────────────────────────────────┐
│  💛 SUPPORT FOR CARERS                  │
│                                         │
│  Samaritans Ireland                     │
│  116 123 (24/7)                         │
│  Free confidential support              │
│                                         │
│  Alzheimer Society of Ireland           │
│  1800 341 341                           │
│  Support for those affected by dementia │
└─────────────────────────────────────────┘
```

---

### Bottom Note (All Regions)

**If you're struggling:**

Exhaustion, burnout, feeling like you can't cope — that's not weakness. That's what happens when someone does an impossible job for too long.

The crisis lines above support carers too, not just the person you're caring for. Please reach out.

---

### Localization JSON (Implementation)

```json
{
  "GB": {
    "emergency": {
      "number": "999",
      "name": "Emergency Services",
      "description": "Someone collapsed, stopped breathing, or in immediate danger?"
    },
    "urgent": {
      "number": "111",
      "name": "NHS 24-hour advice",
      "description": "Medical concerns that need help today"
    },
    "support": [
      {
        "name": "Samaritans",
        "number": "116 123",
        "hours": "24/7",
        "description": "Free confidential support"
      },
      {
        "name": "Dementia UK",
        "number": "0800 888 6678",
        "hours": "Mon-Fri 9am-9pm, Sat-Sun 9am-5pm",
        "description": "Specialist Admiral Nurses"
      },
      {
        "name": "Alzheimer's Society",
        "number": "0333 150 3456",
        "hours": "Mon-Fri 9am-8pm, Sat-Sun 10am-4pm",
        "description": "Dementia Connect support line"
      }
    ]
  },
  "US": {
    "emergency": {
      "number": "911",
      "name": "Emergency Services",
      "description": "Someone collapsed, stopped breathing, or in immediate danger?"
    },
    "support": [
      {
        "name": "Suicide & Crisis Lifeline",
        "number": "988",
        "hours": "24/7",
        "description": "Free confidential support"
      },
      {
        "name": "Alzheimer's Association",
        "number": "800-272-3900",
        "hours": "24/7",
        "description": "Dementia helpline and resources"
      }
    ]
  },
  "CA": {
    "emergency": {
      "number": "911",
      "name": "Emergency Services",
      "description": "Someone collapsed, stopped breathing, or in immediate danger?"
    },
    "support": [
      {
        "name": "Suicide Crisis Helpline",
        "number": "988",
        "hours": "24/7",
        "description": "Free confidential support"
      },
      {
        "name": "Alzheimer Society of Canada",
        "number": "1-855-705-4636",
        "hours": "",
        "description": "Dementia support and information"
      }
    ]
  },
  "AU": {
    "emergency": {
      "number": "000",
      "name": "Emergency Services",
      "description": "Someone collapsed, stopped breathing, or in immediate danger?"
    },
    "support": [
      {
        "name": "Lifeline",
        "number": "13 11 14",
        "hours": "24/7",
        "description": "Crisis support and suicide prevention"
      },
      {
        "name": "Dementia Australia",
        "number": "1800 100 500",
        "hours": "",
        "description": "National dementia helpline"
      }
    ]
  },
  "IE": {
    "emergency": {
      "number": "999 or 112",
      "name": "Emergency Services",
      "description": "Someone collapsed, stopped breathing, or in immediate danger?"
    },
    "support": [
      {
        "name": "Samaritans Ireland",
        "number": "116 123",
        "hours": "24/7",
        "description": "Free confidential support"
      },
      {
        "name": "Alzheimer Society of Ireland",
        "number": "1800 341 341",
        "hours": "",
        "description": "Support for those affected by dementia"
      }
    ]
  }
}
```

---

## SECTION 2: Important Notice (ENHANCED)

**Headline:** Please read this.

**This app provides guidance, not medical advice.**

Kerunity offers practical scripts and de-escalation techniques based on established dementia care approaches. It is not a substitute for professional medical advice, diagnosis, or treatment.

**When to seek professional help:**

- If the person you're caring for shows sudden changes in behaviour, confusion, or consciousness
- If you're concerned about medication, symptoms, or their physical health
- If you're unsure whether a situation is a medical emergency

**When in doubt, call NHS 111 or 999.**

---

**Content review:**

Every script in Kerunity has been reviewed by dementia care professionals. However, we cannot guarantee outcomes. Every person with dementia is different, and what works in one situation may not work in another.

---

**Your judgement matters:**

You know the person you're caring for. The scripts in this app are starting points, not rules. If something doesn't feel right for your situation, trust yourself.

---

**The limits of what an app can do:**

Kerunity can help you find words in a difficult moment. It cannot replace human support — from professionals, from family, from your community. Please don't carry this alone.

---

**Age guidance:**

Kerunity is designed for adult family carers. While there's nothing inappropriate in the content, the emotional weight of the situations described may be distressing for children.

---

**Accuracy:**

We've done our best to ensure the information in this app is helpful and accurate based on current dementia care best practices. If you notice something that seems wrong or harmful, please tell us immediately: gavin@kerunity.app

---

## SECTION 3: Privacy (ENHANCED)

**Headline:** Your privacy isn't a setting. It's how we built this.

**The short version:**  
Kerunity collects nothing. We store nothing. We track nothing. We can't see what you do in this app because we deliberately built it that way.

**How it works:**

- **100% offline** — The app runs entirely on your device. No servers. No accounts. No internet required after installation.

- **No analytics** — We don't use Google Analytics, Facebook pixels, or any tracking code. We have no idea how many people use this app or what they tap on.

- **No accounts** — You don't sign up. You don't log in. There's nothing to hack because there's nothing stored.

- **No data collection** — We don't collect your location, your contacts, your usage patterns, or anything else. The app literally cannot send data because it doesn't connect to anything.

---

**Why we built it this way:**

Caring for someone is intimate and exhausting. The last thing you need is another app harvesting your struggles for ad targeting. 

We believe privacy should be structural, not a promise. You shouldn't have to trust us — you should be able to verify that we *can't* access your data, even if we wanted to.

---

**Why most apps can't make this promise:**

Other crisis apps require accounts, track your usage, or sync data to the cloud. They'll say they "take privacy seriously" — but their architecture requires knowing who you are and what you do.

We chose the harder path: building an app that literally cannot spy on you. No servers to hack. No database to leak. No company to sell your data to.

**This isn't a better privacy policy. It's a different architecture.**

---

**What happens if you reinstall:**

Because Kerunity stores nothing on servers, reinstalling the app means starting fresh. There's no account to recover because there was never an account.

This is by design. Your crisis moments disappear with the app.

---

**Third-party services:**  
This app contains no third-party SDKs, advertising frameworks, or external services. What you download is what you get.

---

**GDPR Compliance:**

Kerunity processes no personal data. When you contact us via email or WhatsApp, that communication is handled by those services (Google, Meta) under their privacy policies.

If you donate via Ko-fi or Buy Me a Coffee, payment processing is handled by those services under their terms. We never see your payment information.

---

## SECTION 4: How to Use (SIMPLIFIED)

**Headline:** Get help in three taps.

**Tap a situation. Read the words. That's it.**

Everything else is optional.

---

### Want more detail?

**🎧 Tap "Listen"**  
Hear the script read aloud. Helpful when you're too stressed to read, or when you want to focus on the person you're caring for.

**👆 Use the feedback buttons**  
After each script, we ask "How does it feel now?" This helps you navigate to more support if the situation is getting worse. Your answer stays on your device — we never see it.

**📱 Works offline**  
Once installed, your phone can be in airplane mode. This is crisis infrastructure, not a cloud service.

---

### Video walkthrough

[15-second demo video placeholder]

Shows: Tap situation → Read script → Tap feedback → Next step appears

---

## SECTION 5: Our Story (FINAL - Full Founder Story)

**Headline:** Built by a carer. Named for my partner.

**Body:**

I'm a carer for my Mum. She's had MS for over 40 years, and now in her 70s, she's started experiencing cognitive decline. Missed appointments. Forgotten conversations. The kind of thing where she'll be on the phone booking something and write down the wrong time because she's already forgotten.

The tools that are supposed to help — Alexa, calendars, reminders — don't work for her. By the time she sees the reminder, she can't remember what it's for.

I started building tools to help her. But while researching cognitive decline, I found the research on dementia carers. And I realised: what we're dealing with is minor compared to what they face. The 3am moments. The aggression. The grief of losing someone who's still there.

That's when I knew I had to build this first. Not because my situation is the hardest — but because theirs is, and they have nothing like this — no in-the-moment scripts, no calm guidance when they're frozen.

The crisis cards work for any cognitive decline — dementia, MS, stroke, brain injury. But I focused my research on dementia because that's where the need was most urgent, and the tools were most lacking.

The app is named after Kerry, my partner. Kerry and unity — because carers need community, not isolation. She's steady when I'm not. She takes her time when I want to rush. She's the kind of quiet confidence that makes everyone around her feel like things will be okay.

That's what I wanted this app to feel like — a calm presence when everything else is falling apart. Not panic. Not judgment. Just: "Here. Try these words."

I'm Gavin. I'm building this from Scotland. If Kerunity helps you, I'd love to hear about it.

You're not alone in this.

**Optional CTA at bottom:**

If you'd like to support this work → [Support Kerunity]

**Design note:** This section should feel warm and personal. Consider a subtle photo or illustration of Scotland (not of Gavin or Kerry — keep faces private).

---

## SECTION 6: Support Kerunity (ENHANCED FRAMING)

**Headline:** Help keep Kerunity independent

**Body:**

Kerunity is free, and it always will be for crisis support. No ads. No data harvesting. No paywall when you're desperate at 3am.

But building and maintaining it takes time — time I could be spending on paid work.

---

**Why we're asking:**

Most crisis apps are funded by venture capital, which means they need to grow fast and make money from data or ads. That's why they track you.

We're trying something different: building slowly, funded by carers who value privacy and want this to exist. That means no investors pressuring us to compromise.

But it also means we need your help.

---

**What your support does:**

- Keeps the app free for every carer who needs it
- Funds new features (audio, translations, more situations)
- Lets me keep building instead of returning to other work
- Proves ethical, private apps can survive without surveillance

---

**How to support:**

```
┌─────────────────────────────────┐
│  ☕  Buy me a coffee            │
│      One-time, any amount       │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│  💛  Become a monthly supporter │
│      From £3/month              │
└─────────────────────────────────┘
```

---

**No pressure. Genuinely.**

If you can't support financially, that's completely okay. You're already doing one of the hardest jobs there is. 

If you want to help another way, tell another carer about Kerunity. That means just as much.

---

**Thank you:**

To everyone who has already supported, messaged, or shared — thank you. You're the reason this exists.

— Gavin

---

## SECTION 7: Founding Supporters (TOAST REMOVED)

### Concept

A warm, celebratory display of early supporters. Not manipulative social proof — a genuine acknowledgment of community.

### Design

```
┌─────────────────────────────────────────┐
│                                         │
│  ⭐ Founding Supporters                 │
│                                         │
│  These people believed early.           │
│  Kerunity exists because of them.       │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Sarah M. · Edinburgh           │   │
│  │  January 2026                   │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  James T. · London              │   │
│  │  January 2026                   │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  Anonymous · Canada             │   │
│  │  January 2026                   │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  Michelle R. · Glasgow          │   │
│  │  January 2026                   │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ...and 12 others                       │
│                                         │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  💛  Join the Founding Wall     │   │
│  │      Support Kerunity           │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### Display Options

**Format:** First name + last initial + location (city or country)  
**Example:** Sarah M. · Edinburgh

**Privacy options to offer supporters:**
- Full display: "Sarah M. · Edinburgh"
- Location only: "A supporter from Edinburgh"
- Fully anonymous: "Anonymous"

---

### ⚠️ CRITICAL CHANGE: Toast Notification REMOVED

**Original design included:**
```
┌─────────────────────────────────────┐
│  💛  Michelle from Glasgow just    │
│      became a Founding Supporter   │
└─────────────────────────────────────┘
```

**This has been removed entirely.**

**Reason:** This is a dark pattern that uses social proof to create FOMO (fear of missing out), which contradicts the ethical principles established in the research documents. The Founding Supporters Wall is celebratory and opt-in. The toast notification is manipulative.

**If you want to acknowledge new supporters:**
- Send them a personal thank-you email
- Show the toast only to the person who just donated (as confirmation)
- Never show it to non-supporters

---

### Copy for Donation Form

**Additional field:**

```
Would you like to be listed on our Founding Supporters wall?

○ Yes — First name & city (e.g., "Sarah M. · Edinburgh")
○ Yes — Anonymous ("A supporter from [country]")
○ No — Keep my support private

Your support means the same either way. This is just a way to 
celebrate our community if you'd like to be part of it.
```

---

## SECTION 8: Accessibility (NEW SECTION - ADD TO MENU)

**Headline:** Accessibility

**Body:**

Kerunity is designed to meet WCAG 2.1 AA accessibility standards. This means:

- **Large, high-contrast text** — Readable even when stressed or tearful
- **Screen reader compatible** — Works with VoiceOver (iOS) and TalkBack (Android)
- **One-handed use** — All controls are thumb-reachable
- **No time-based interactions** — Nothing disappears or requires quick response
- **Works in low light** — Dark mode optimized for late-night use

---

**If you encounter accessibility issues:**

Please let us know immediately: gavin@kerunity.app

We want this app to work for every carer who needs it.

---

## MENU STRUCTURE (REORDERED FOR SAFETY)

```
┌─────────────────────────────┐
│  ✕                          │
│                             │
│  🚨 Emergency contacts      │
│  ⚠️  Important notice       │
│  🔒 Privacy                 │
│  ♿ Accessibility           │
│                             │
│  ───────────────────────    │
│                             │
│  ℹ️  About                  │
│  📖 How to use              │
│  💙 Our story               │
│                             │
│  ───────────────────────    │
│                             │
│  ⭐ Founding Supporters     │
│  💛 Support Kerunity        │
│                             │
│  ───────────────────────    │
│                             │
│  📤 Share Kerunity          │
│  💬 Send feedback           │
│                             │
│  ───────────────────────    │
│                             │
│  Kerunity v1.0.0            │
│  Made with love in          │
│  Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿               │
│                             │
└─────────────────────────────┘
```

**Key changes:**
- Emergency contacts moved to top (was 4th)
- Important notice moved to 2nd (was 5th)
- Privacy moved to 3rd (was 9th)
- Accessibility added as 4th
- Safety/legal content clearly separated from community/support content

---

## CHANGES SUMMARY

### ✅ FIXED
1. Emergency contacts simplified (3 tiers, no cognitive load)
2. Medical disclaimer enhanced and will appear on first launch
3. Privacy section strengthened with competitive positioning + GDPR
4. "How to Use" reduced to single sentence + optional expansion
5. "Our Story" corrected — Kerry is Gavin's partner, not someone he cared for
6. Kerry explanation now describes how her calm personality inspired the app's feel
7. Support section now explains funding model
8. Toast notification removed (dark pattern)
9. Accessibility statement added
10. Menu reordered for safety-first
11. Age guidance added to Important Notice
12. Content review statement added
13. Data retention explanation added

### 📋 READY FOR IMPLEMENTATION
All sections are now production-ready with:
- Exact copy
- Technical specifications
- Localization data
- Design notes
- Accessibility requirements

**Next step:** Hand to dev agent for implementation.
