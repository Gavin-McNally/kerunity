// @ts-nocheck
      /* =========================
         DATA
      ========================== */
      /* Visible by default (Hick's Law: 6 is safe, 10 is limit) */
      const VISIBLE_COUNT = 6;

      const DATA = {
        /* Most common - shown first (6) - EXPANDED COVERAGE */
        refusing_meds: { 
          category: "medical",
          label: "Won't take medicine", sub: "Won't take pills",
          keywords: ["medication", "pills", "tablets", "medicine", "drugs", "prescription", "dose", "swallow", "spit", "meds", "capsule", "liquid", "syrup", "pharmacy", "chemist", "GP", "doctor"],
          aliases: ["won't take medication", "refusing tablets", "spitting out pills", "hiding medication", "not taking medicine", "refuses to swallow", "won't swallow pills", "spits out tablets", "hiding pills in mouth", "says no to meds", "fighting medication", "won't open mouth for pills", "clamping mouth shut"]
        },
        wants_home: { 
          category: "location",
          label: "Wants to go home", sub: "Confused about location",
          keywords: ["home", "leave", "go", "house", "back", "where", "lost", "place", "live", "bus", "taxi", "car", "door", "outside", "family", "parents", "childhood"],
          aliases: ["wants to leave", "going home", "take me home", "where do I live", "this isn't my house", "I want to go", "not my home", "need to get the bus", "waiting for a taxi", "when can I go home", "I don't live here", "where's my house", "wants to see parents", "going back to childhood home", "doesn't recognise house"]
        },
        asking_mom: { 
          category: "emotional",
          label: "Asking for someone gone", sub: "Deceased relative",
          keywords: ["mom", "mum", "mother", "dad", "father", "parent", "dead", "deceased", "passed", "gone", "husband", "wife", "spouse", "nan", "grandma", "grandad", "brother", "sister"],
          aliases: ["where's my mum", "wants her mother", "asking for father", "when is mum coming", "I want my mum", "where's mom", "waiting for dad", "when's mum picking me up", "I need my mother", "where's my husband", "have you seen my wife", "asking for dead relative", "wants to see nan"]
        },
        stealing: { 
          category: "behavior",
          label: "Says I stole something", sub: "Items 'missing'",
          keywords: ["stealing", "stole", "thief", "taken", "missing", "wallet", "money", "purse", "keys", "accuse", "blame", "robbed", "lost", "jewellery", "jewelry", "ring", "watch", "handbag", "bag"],
          aliases: ["says I stole", "accusing me", "thinks I took", "where's my money", "someone stole", "you took my", "things are missing", "keeps saying I stole it", "accusing carers of theft", "blaming me for stealing", "can't find wallet", "purse is missing", "who took my keys", "someone's been in my things", "money has gone"]
        },
        shadowing: { 
          category: "emotional",
          label: "Following me around", sub: "Following you constantly",
          keywords: ["following", "shadow", "clingy", "attached", "close", "behind", "everywhere", "stuck", "separation", "anxious", "needy", "dependent"],
          aliases: ["follows me everywhere", "won't let me out of sight", "always behind me", "can't leave them alone", "follows me around", "follows me to the toilet", "follows me to bathroom", "won't stay in room alone", "panics when I leave", "attached to my hip", "can't get any space", "follows room to room"]
        },
        hygiene: { 
          category: "medical",
          label: "Refusing to wash", sub: "Won't wash/change",
          keywords: ["wash", "bath", "shower", "clean", "hygiene", "smell", "dirty", "change", "clothes", "teeth", "toilet", "bathroom", "loo", "nappy", "diaper", "pad", "incontinence", "wet", "soiled"],
          aliases: ["won't wash", "refusing bath", "won't shower", "hasn't changed clothes", "needs a wash", "refusing to clean", "won't brush teeth", "scared of shower", "afraid of bath", "won't change wet clothes", "sitting in wet pad", "smells bad", "hasn't bathed in days", "refuses personal care", "won't let me wash them"]
        },
        /* Extended - shown on "View all" (19 more = 25 total) - EXPANDED COVERAGE */
        sundowning: { 
          category: "location",
          label: "Worse at night", sub: "Evening agitation",
          keywords: ["evening", "night", "sunset", "agitated", "restless", "worse", "afternoon", "dusk", "dark", "twilight", "late", "shadows", "anxious", "confused", "pacing", "upset"],
          aliases: ["gets worse at night", "evening agitation", "restless at sunset", "anxious in evening", "agitated after dark", "worse in late afternoon", "pacing at night", "confused when it gets dark", "sundown syndrome", "evening confusion", "worse as sun goes down", "unsettled at teatime", "bad every evening"]
        },
        wont_eat: { 
          category: "medical",
          label: "Won't eat or drink", sub: "Refusing food/drink",
          keywords: ["eat", "food", "drink", "hungry", "meal", "appetite", "swallow", "chew", "water", "tea", "coffee", "breakfast", "lunch", "dinner", "snack", "thirsty", "dehydrated", "weight"],
          aliases: ["not eating", "refusing food", "won't drink", "no appetite", "stopped eating", "pushing food away", "spitting food out", "won't open mouth", "not drinking enough", "losing weight", "barely eating", "picks at food", "won't touch meals", "refusing tea", "dehydrated"]
        },
        repetitive: { 
          category: "behavior",
          label: "Asking the same thing", sub: "Asking same thing",
          keywords: ["repeat", "again", "same", "question", "asking", "over", "loop", "constant", "broken", "record", "endless", "nonstop", "obsessive", "stuck"],
          aliases: ["asking same thing", "keeps repeating", "same question", "over and over", "asks constantly", "broken record", "asked this already", "keeps asking same thing", "won't stop asking", "repetitive questions", "stuck in a loop", "asks every five minutes", "endless questions"]
        },
        aggression: { 
          category: "behavior",
          label: "Getting aggressive", sub: "Shouting / hitting / throwing things",
          keywords: ["aggressive", "hitting", "shouting", "angry", "violent", "punch", "kick", "yelling", "attack", "slap", "bite", "scratch", "push", "shove", "grab", "rage", "fury", "temper"],
          aliases: ["being aggressive", "hit me", "shouting at me", "getting violent", "lashing out", "tried to punch me", "kicked me", "grabbed my arm", "scratched me", "bit me", "pushed me away", "screaming at me", "flew into a rage", "lost their temper", "threatening behaviour"]
        },
        sleep: { 
          category: "medical",
          label: "Can't sleep", sub: "Up at night",
          keywords: ["sleep", "night", "awake", "insomnia", "tired", "bed", "rest", "waking", "wandering", "nocturnal", "disturbed", "exhausted", "morning", "routine", "nap", "daytime"],
          aliases: ["can't sleep", "up all night", "won't go to bed", "waking up", "not sleeping", "wandering at night", "awake at 3am", "thinks it's morning", "sleeping all day", "day night reversed", "exhausted but won't sleep", "gets up repeatedly", "disturbed sleep pattern", "night time wandering"]
        },
        lost: { 
          category: "location",
          label: "Doesn't know where they are", sub: "Doesn't recognise place",
          keywords: ["lost", "confused", "where", "recognise", "place", "room", "house", "disoriented"],
          aliases: ["doesn't know where", "seems lost", "very confused", "doesn't recognise"]
        },
        wandering: { 
          category: "location",
          label: "Trying to leave", sub: "Trying to leave",
          keywords: ["wander", "walk", "leave", "door", "outside", "escape", "exit", "roam", "pacing", "restless", "garden", "street", "lost", "front", "back", "gate", "key", "lock"],
          aliases: ["trying to leave", "at the door", "wants to go outside", "keeps wandering", "walking around", "trying to get out", "pacing up and down", "found at front door", "went out the back", "escaped from house", "wandered off", "walking the streets", "let themselves out", "keeps trying door handle", "looking for way out"]
        },
        hiding: { 
          category: "behavior",
          label: "Hiding things", sub: "Can't find items",
          keywords: ["hiding", "hidden", "lost", "find", "where", "put", "missing", "moved"],
          aliases: ["hides things", "can't find", "where did I put", "things go missing", "hidden items"]
        },
        undressing: { 
          category: "behavior",
          label: "Taking clothes off", sub: "Removing clothes",
          keywords: ["undress", "naked", "clothes", "strip", "remove", "taking off"],
          aliases: ["taking clothes off", "getting undressed", "removing clothes", "keeps undressing"]
        },
        rummaging: { 
          category: "behavior",
          label: "Going through things", sub: "Going through drawers",
          keywords: ["rummage", "drawer", "cupboard", "search", "through", "looking", "mess"],
          aliases: ["going through drawers", "searching cupboards", "making a mess", "rummaging around"]
        },
        hoarding: { 
          category: "behavior",
          label: "Collecting or hoarding", sub: "Collecting / keeping things",
          keywords: ["hoard", "collect", "keep", "save", "pile", "stuff", "junk", "rubbish"],
          aliases: ["collecting things", "won't throw away", "keeping everything", "piling up stuff"]
        },
        crying: { 
          category: "emotional",
          label: "Upset or crying", sub: "Upset for no clear reason",
          keywords: ["crying", "tears", "upset", "sad", "weeping", "emotional", "distressed"],
          aliases: ["keeps crying", "very upset", "tearful", "crying for no reason", "emotionally distressed"]
        },
        wont_get_up: { 
          category: "emotional",
          label: "Won't get out of bed", sub: "Staying in bed",
          keywords: ["bed", "up", "get", "lying", "stay", "morning", "wake"],
          aliases: ["won't get out of bed", "staying in bed", "refuses to get up", "won't wake up"]
        },
        refusing_help: { 
          category: "behavior",
          label: "Won't let me help", sub: "Won't accept care",
          keywords: ["help", "refuse", "care", "assist", "support", "independent", "stubborn"],
          aliases: ["won't accept help", "refuses care", "pushes me away", "doesn't want help"]
        },
        paranoid: { 
          category: "behavior",
          label: "Thinks people are against them", sub: "Worried about others",
          keywords: ["paranoid", "suspicious", "trust", "people", "watching", "spy", "conspiracy", "poison", "plotting", "neighbour", "neighbor", "carer", "staff", "delusion", "persecuted", "threatened"],
          aliases: ["very suspicious", "doesn't trust", "thinks people are watching", "paranoid thoughts", "thinks I'm poisoning food", "says neighbours are spying", "accuses staff of plotting", "doesn't trust anyone", "thinks people want to hurt them", "suspicious of carers", "feels persecuted", "convinced someone is after them", "paranoid about visitors"]
        },
        hallucinations: { 
          category: "behavior",
          label: "Seeing or hearing things", sub: "Things that aren't there",
          keywords: ["seeing", "hallucination", "vision", "people", "things", "imaginary", "hear", "voices", "children", "intruders", "strangers", "animals", "bugs", "insects", "dead", "deceased", "ghost", "shadow"],
          aliases: ["seeing things", "hearing voices", "people that aren't there", "hallucinating", "sees children in the room", "talking to dead relatives", "sees intruders", "thinks there are strangers here", "seeing animals", "bugs on the wall", "sees shadows moving", "talking to people who aren't there", "says someone is in the house", "visual hallucinations"]
        },
        inappropriate: { 
          category: "behavior",
          label: "Saying inappropriate things", sub: "Saying unexpected things",
          keywords: ["inappropriate", "rude", "sexual", "comments", "embarrassing", "awkward", "offensive"],
          aliases: ["saying inappropriate things", "rude comments", "embarrassing behaviour", "sexual comments"]
        },
        wont_dress: { 
          category: "behavior",
          label: "Won't get dressed", sub: "Refusing clothes",
          keywords: ["dress", "clothes", "wear", "outfit", "change", "morning", "pyjamas"],
          aliases: ["won't get dressed", "refusing to dress", "staying in pyjamas", "won't change clothes"]
        },
        forgot_face: { 
          category: "location",
          label: "Doesn't recognise me", sub: "Forgotten who you are",
          keywords: ["know", "recognise", "who", "face", "forget", "stranger", "remember"],
          aliases: ["doesn't recognise me", "forgot who I am", "thinks I'm a stranger", "doesn't know who I am"]
        },
        /* FALLBACK - never shown in list */
        fallback_not_sure: {
          category: "default",
          label: "Not sure what this is", sub: "Start here. One step at a time.",
          isFallback: true,
          keywords: [],
          aliases: []
        }
      };

      const CRISIS_DECKS = {
        refusing_meds:{ title:"Won't take medicine", steps:[
          { say:"It's okay. We don't have to do this right now.", do:"Take the pressure off. Relax your shoulders. Speak slowly." },
          { say:"Can we take a sip of water first, then decide?", do:"Offer one tiny first step. Give two choices: water or tea." },
          { say:"Would you like to take it with me, or would you prefer later?", do:"Give two acceptable options. No demands or pressure." },
          { say:"Thank you. That's enough for now. We'll check again later.", do:"Let it go for now. You can try again in 10–20 minutes. If you're worried, call for medical advice." }
        ]},
        wants_home:{ title:"Wants to go home", steps:[
          { say:"I hear you. You want to go home. Tell me about home.", do:"Validate and invite description. Don't correct location facts." },
          { say:"Let's get you comfortable first, then we'll make a plan.", do:"Move to comfort: chair, drink, loo, warmer/blanket." },
          { say:"Shall we have a cup of tea first, then we'll decide?", do:"Use a short delay + familiar ritual. Keep it calm and simple." },
          { say:"You're safe with me. We'll sort it together.", do:"Close with safety + togetherness. Reduce stimulation." }
        ]},
        asking_mom:{ title:"Asking for someone gone", steps:[
          { say:"You miss her. Tell me about her.", do:"Join the emotion. Don't correct facts." },
          { say:"What would she want you to do right now?", do:"Redirect toward a safe action (sit, tea, photo, music)." },
          { say:"Let’s do something that would make her proud.", do:"Small task: fold towel, water plant, look at album." },
          { say:"I’m here with you. You’re not on your own.", do:"Close with reassurance and presence." }
        ]},
        stealing:{ title:"Says I stole something", steps:[
          { say:"That sounds really worrying. Let’s look together.", do:"Validate. Avoid defending yourself or debating." },
          { say:"Where did you last remember seeing it?", do:"Turn it into a shared search with gentle questions." },
          { say:"Let’s check the usual safe places first.", do:"Go to 2–3 common spots only. Keep pace slow." },
          { say:"If it's not here, we'll leave it and try again later.", do:"Close without correcting them. Offer a calming reset." }
        ]},
        shadowing:{ title:"Following me around", steps:[
          { say:"You're okay. I'm here. Let's do this together.", do:"Reassure first. Keep tone warm, not hurried." },
          { say:"Could you sit here? I have a job for you.", do:"Give a small task: hold a towel, watch the kettle, fold a cloth." },
          { say:"I'll be back in two minutes. Watch the timer for me.", do:"Use a timer and make a clear promise. Come back when you promised." },
          { say:"Thank you. You did great helping me.", do:"Praise the helper role. Repeat predictable routine." }
        ]},
        hygiene:{ title:"Refusing to wash", steps:[
          { say:"No problem. We can do this gently.", do:"Remove pressure. No demands." },
          { say:"Would you like a warm cloth wash instead of a full wash?", do:"Offer a smaller option: face/hands first." },
          { say:"Do you want the bathroom warmer, or a towel warmed?", do:"Fix discomfort triggers: cold room, lighting, privacy." },
          { say:"That's enough for now. We'll stop there.", do:"Close early with success. Short wins beat battles." }
        ]},
        sundowning:{ title:"Worse at night", steps:[
          { say:"I can see you're feeling unsettled. I'm here.", do:"Acknowledge their distress. Don't dismiss or argue." },
          { say:"Let's turn on some lights and get cosy.", do:"Close curtains. Turn on more lights." },
          { say:"Would you like to sit with me for a bit?", do:"Gentle distraction: music, photo, simple activity." },
          { say:"You're safe. We'll get through the evening together.", do:"Stay calm. Predictable routine helps." }
        ]},
        wont_eat:{ title:"Won't eat or drink", steps:[
          { say:"That's okay. No rush. We can try again later.", do:"Don't force. Remove pressure around mealtimes." },
          { say:"Would you like something small? Just a few bites?", do:"Offer finger foods, small portions, favourite tastes." },
          { say:"Let's sit together while I have mine.", do:"Eating together can encourage. Keep it social." },
          { say:"You did well. We'll have more later if you want.", do:"Praise any attempt. Make a quiet note for later." }
        ]},
        repetitive:{ title:"Asking the same thing", steps:[
          { say:"That's a good question. Let me help.", do:"Answer as if it's the first time. Stay patient." },
          { say:"I'll write it down so we can check.", do:"Use a whiteboard or note to point to." },
          { say:"Let's do something together while we wait.", do:"Redirect to a simple activity or task." },
          { say:"I'm here. We're okay.", do:"Reassurance is what they need, not facts." }
        ]},
        aggression:{ title:"Getting aggressive", steps:[
          { say:"I can see you're upset. I'm going to step back.", do:"Give space. Don't corner or crowd them." },
          { say:"You're safe. I'm here.", do:"Speak slowly. Sit down only if you can get up easily." },
          { say:"Let's take a breath together.", do:"Breathe slowly yourself. Wait for them to calm down." },
          { say:"Thank you. Let's sit down when you're ready.", do:"Don't hold grudges. Reset and move forward." }
        ]},
        sleep:{ title:"Can't sleep", steps:[
          { say:"Can't sleep? That's okay. Let's sit quietly.", do:"Don't argue about time. Join them calmly." },
          { say:"Would you like a warm drink or the radio on?", do:"Offer comfort. Dim lights. Keep voice soft." },
          { say:"We can rest here together for a bit.", do:"Don't force bed. Sitting nearby is fine." },
          { say:"You're safe. I'll be here if you need me.", do:"Reassure and let natural tiredness come." }
        ]},
        lost:{ title:"Doesn't know where they are", steps:[
          { say:"You're safe with me.", do:"State location simply. Don't quiz or test them." },
          { say:"This is the kitchen.", do:"Point to familiar objects." },
          { say:"Let's go to your chair / your room.", do:"Guide to a familiar, comfortable spot." },
          { say:"You're safe with me.", do:"Reassurance matters more than facts." }
        ]},
        wandering:{ title:"Trying to leave", steps:[
          { say:"Where are we going? I'll walk with you.", do:"Don't block or grab. Walk alongside calmly." },
          { say:"Let's check together. What are you looking for?", do:"Make it a shared mission, not a confrontation." },
          { say:"It's cold/dark out there. Let's get a cup of tea first.", do:"Offer distraction before they reach the door." },
          { say:"You're safe here. Let's sit down for a moment.", do:"Guide gently back to a chair. Make sure doors are secure later." }
        ]},
        hiding:{ title:"Hiding things", steps:[
          { say:"I can see something's important to you.", do:"Don't accuse or demand. Stay calm and curious." },
          { say:"Can you show me where you put it?", do:"Let them lead. They may remember hiding spots." },
          { say:"Let's keep it safe together.", do:"Create a safe place for important items." },
          { say:"Thank you for showing me.", do:"Don't make it a big deal. Note the hiding spots." }
        ]},
        undressing:{ title:"Taking clothes off", steps:[
          { say:"Are you feeling too warm?", do:"Check temperature, clothing comfort, toileting needs." },
          { say:"Let's find something more comfortable.", do:"Offer loose, easy clothes they can manage." },
          { say:"Here. This will feel better.", do:"Redirect with a soft blanket or familiar item." },
          { say:"You're okay. Let's get comfy.", do:"Cover them gently. Move to a private room." }
        ]},
        rummaging:{ title:"Going through things", steps:[
          { say:"What are you looking for? I can help.", do:"Join in rather than stopping them." },
          { say:"Let's check this drawer together.", do:"Redirect to a drawer with harmless items." },
          { say:"I've put some things here for you to sort.", do:"Create a rummage box with safe objects." },
          { say:"Thank you for tidying.", do:"Make it purposeful. Praise their effort." }
        ]},
        hoarding:{ title:"Collecting or hoarding", steps:[
          { say:"That looks important. Tell me about it.", do:"Don't throw things away now." },
          { say:"Shall we find a special place for these?", do:"Offer a box or bag to keep things safe." },
          { say:"Let's sort through together when you're ready.", do:"Remove items gradually, not all at once." },
          { say:"You've got some lovely things here.", do:"Validate their attachment. Be patient." }
        ]},
        crying:{ title:"Upset or crying", steps:[
          { say:"I can see you're upset. I'm here.", do:"Sit close. Don't rush to fix or explain." },
          { say:"It's okay to feel this way.", do:"Validate the emotion even if cause is unclear." },
          { say:"Would you like a hug / hand to hold?", do:"Offer comfort. Physical touch if welcome." },
          { say:"I'm not going anywhere. Take your time.", do:"Be present. The feeling will pass." }
        ]},
        wont_get_up:{ title:"Won't get out of bed", steps:[
          { say:"Good morning. No rush. Take your time.", do:"Don't force. Check if they're unwell or in pain." },
          { say:"Would you like a cup of tea in bed?", do:"Bring comfort to them first." },
          { say:"The bathroom's ready when you are.", do:"Give a gentle reason to move, not an order." },
          { say:"Let's just sit up for a bit.", do:"Small steps. Sitting up is progress." }
        ]},
        refusing_help:{ title:"Won't let me help", steps:[
          { say:"That's okay. I'll be right over here.", do:"Step back. Don't argue or insist." },
          { say:"I'll be nearby if you change your mind.", do:"Give them space but stay available." },
          { say:"Can I help with just this one thing?", do:"Offer help with one tiny task only." },
          { say:"You're doing well. Let me know if you need me.", do:"Praise independence. Try again later." }
        ]},
        paranoid:{ title:"Thinks people are against them", steps:[
          { say:"That sounds frightening. Tell me more.", do:"Listen without dismissing or arguing." },
          { say:"I can see why you're worried.", do:"Validate the feeling, not the belief." },
          { say:"Let's check together. I'll stay with you.", do:"Offer to investigate. Be their ally." },
          { say:"You're safe with me. I'm staying right here.", do:"Reassure. Reduce stimulation." }
        ]},
        hallucinations:{ title:"Seeing or hearing things", steps:[
          { say:"What can you see? Tell me about it.", do:"Stay calm. Don't argue or dismiss." },
          { say:"That must feel strange.", do:"Acknowledge their experience is real to them." },
          { say:"Let's turn on more lights / move rooms.", do:"Change environment. Reduce shadows." },
          { say:"I'm here with you. You're safe with me.", do:"Reassure. Don't pretend to see it too." }
        ]},
        inappropriate:{ title:"Saying inappropriate things", steps:[
          { say:"Let's talk about something else.", do:"Redirect calmly. Don't shame or scold." },
          { say:"I know you don't mean to upset anyone.", do:"Assume good intent. They may not understand." },
          { say:"Come with me. I need your help.", do:"Move them away from the situation." },
          { say:"It's okay. Let's move on.", do:"Don't dwell. Apologise to others later if needed." }
        ]},
        wont_dress:{ title:"Won't get dressed", steps:[
          { say:"Let's take our time. No rush.", do:"Don't force. Check if clothes are uncomfortable." },
          { say:"Would you like to choose what to wear?", do:"Offer simple choices. Two options max." },
          { say:"Let's just put this on for now.", do:"One item at a time. Start with easiest piece." },
          { say:"You look comfortable.", do:"Praise any progress. Comfort over perfection." }
        ]},
        forgot_face:{ title:"Doesn't recognise me", steps:[
          { say:"Hello. I'm here to help you.", do:"Avoid testing their memory. Stay calm." },
          { say:"I'm here to help you. You're safe with me.", do:"Reassure with warmth, not facts." },
          { say:"Let me show you some photos.", do:"Pictures may help. Don't quiz or test." },
          { say:"I care about you. That's what matters.", do:"Focus on feeling safe, not being recognised." }
        ]},
        fallback_not_sure:{ title:"Not sure what this is", steps:[
          { say:"Okay. We can slow down. I'm here with you.", do:"Speak quietly. Relax your shoulders." },
          { say:"What do you need right now?", do:"Ask one gentle question. Listen without rushing." },
          { say:"That's okay. We can sit quietly.", do:"If you feel unsafe or don't know what to do, tap Emergency." },
          { say:"We'll figure this out together.", do:"Stay with them. One moment at a time." }
        ]}
      };

      const URGENT_ITEMS = [
        { 
          key:"unresponsive", category:"medical", label:"Won't wake up", sub:"Won't wake up",
          keywords: ["unresponsive", "unconscious", "wake", "passed", "out", "fainted", "collapsed", "limp", "floppy", "not", "responding", "lifeless", "coma", "blackout", "knocked"],
          aliases: ["won't wake up", "passed out", "collapsed on floor", "not responding", "can't wake them", "fainted", "found unconscious", "not moving", "completely limp", "blacked out", "knocked out", "won't respond to voice", "eyes won't open"]
        },
        { 
          key:"breathing", category:"medical", label:"Trouble breathing", sub:"Gasping / Choking",
          keywords: ["breathing", "breath", "choking", "choke", "gasp", "wheeze", "cough", "airway", "blue", "lips", "oxygen", "struggling", "suffocate", "throat", "swallow", "aspirate"],
          aliases: ["can't breathe", "struggling to breathe", "choking on food", "gasping for air", "gone blue", "lips are blue", "wheezing badly", "food stuck in throat", "trouble breathing", "short of breath", "breathing problems", "not breathing properly", "coughing and choking"]
        },
        { 
          key:"stroke", category:"medical", label:"Could be a stroke", sub:"Face, Arms, Speech",
          keywords: ["stroke", "face", "droop", "arm", "weak", "speech", "slur", "fast", "paralysis", "numbness", "side", "dizzy", "sudden", "confusion", "vision", "headache"],
          aliases: ["face drooping", "arm weakness", "slurred speech", "think it's a stroke", "can't lift arm", "face looks different", "one side weak", "sudden confusion", "FAST signs", "can't speak properly", "words not making sense", "stroke symptoms"]
        },
        { 
          key:"fall", category:"medical", label:"Had a fall", sub:"Head injury / Pain",
          keywords: ["fall", "fell", "fallen", "head", "injury", "hurt", "pain", "hip", "fracture", "broken", "bleeding", "bump", "bruise", "floor", "stairs", "trip"],
          aliases: ["had a fall", "fell over", "hit their head", "fallen on floor", "can't get up after fall", "hurt after falling", "fell down stairs", "tripped and fell", "banged their head", "bleeding from fall", "possible fracture", "fell out of bed", "found on floor"]
        },
        { 
          key:"general_emergency", category:"medical", label:"Something feels wrong", sub:"Need immediate help",
          keywords: ["emergency", "urgent", "ambulance", "danger", "unsafe", "serious", "help", "critical", "dying", "999", "112", "911"],
          aliases: ["need ambulance", "call ambulance", "this is an emergency", "urgent help now", "immediate danger", "something is seriously wrong", "can't cope", "can't handle this", "need help now", "feels very wrong", "i think they're dying"]
        }
      ];

      const URGENT_DECKS = {
        unresponsive:{ title:"Won't wake up", steps:[
          { say:null, do:"Call {EMERGENCY} now. Put phone on speaker. Follow operator instructions." },
          { say:null, do:"Check breathing. If not breathing normally, start CPR. If you're unsure, the {EMERGENCY} operator will tell you what to do." },
          { say:null, do:"If breathing, place in recovery position. Keep warm. Stay with them until help arrives." }
        ]},
        breathing:{ title:"Trouble breathing", steps:[
          { say:null, do:"If they can't speak or breathe, call {EMERGENCY} now. If you're worried at all, call {EMERGENCY} now. If they're coughing, let them cough." },
          { say:"I'm here with you. You're not alone.", do:"Help them sit upright. Loosen tight clothing. Open a window." },
          { say:null, do:"If they're still struggling to breathe, call {EMERGENCY} now. If you're unsure what to do, call for medical advice." }
        ]},
        stroke:{ title:"Could be a stroke", steps:[
          { say:null, do:"Call {EMERGENCY} immediately. Note the time symptoms started." },
          { say:null, do:"Check FAST: Face drooping? Arm weak? Speech slurred? Call {EMERGENCY} now." },
          { say:"I'm here. Help is coming. Stay still.", do:"Do not give food or drink. Stay with them until help arrives." }
        ]},
        fall:{ title:"Had a fall", steps:[
          { say:"Don't try to move. I'm going to help you.", do:"If they hit their head, are bleeding, can't move, or you're worried at all, call {EMERGENCY} now." },
          { say:"Take your time. There's no rush.", do:"Check for pain, bleeding, alertness. Keep them warm and still." },
          { say:null, do:"If you're unsure what to do, call for medical advice. If they get worse at any point, call {EMERGENCY} now." }
        ]},
        general_emergency:{ title:"Something feels wrong", steps:[
          { say:null, do:"Trust your instincts. If something feels seriously wrong, call {EMERGENCY} now." },
          { say:"I'm here with you. Help is on the way.", do:"Keep them warm and still. Talk calmly. Note any symptoms." },
          { say:null, do:"You're doing the right thing. It's always OK to call for help." }
        ]}
      };

      /* =========================
         RENDER
      ========================== */
      let showAllSituations = false;

      // Get situation keys excluding fallback
      function getSituationKeys(){
        return Object.keys(DATA).filter(k => !DATA[k].isFallback);
      }

      function renderHome(){
        const grid = document.getElementById("grid-container");
        const viewAllBtn = document.getElementById("view-all-btn");
        const keys = getSituationKeys();
        const total = keys.length;
        const visibleKeys = showAllSituations ? keys : keys.slice(0, VISIBLE_COUNT);

        // XSS-safe: use createElement + textContent instead of innerHTML
        grid.textContent = "";
        visibleKeys.forEach(k => {
          const item = DATA[k];
          const card = document.createElement("div");
          card.className = "card";
          card.setAttribute("role", "button");
          card.setAttribute("tabindex", "0");
          card.dataset.key = k;
          card.dataset.category = item.category || "default";
          
          const icon = document.createElement("span");
          icon.className = "card-icon";
          icon.innerHTML = SITUATION_ICONS[k] || DEFAULT_ICON;

          const title = document.createElement("span");
          title.className = "card-title";
          title.textContent = item.label;
          
          const chevron = document.createElement("span");
          chevron.className = "card-chevron";
          chevron.textContent = "›";

          const textWrap = document.createElement("div");
          textWrap.className = "card-text";
          textWrap.appendChild(title);

          card.appendChild(icon);
          card.appendChild(textWrap);
          card.appendChild(chevron);
          grid.appendChild(card);
        });

        // Show/hide "View all" button
        if(total > VISIBLE_COUNT){
          viewAllBtn.style.display = "block";
          if(showAllSituations){
            viewAllBtn.textContent = "Show fewer";
          } else {
            viewAllBtn.textContent = `View all ${total} situations`;
          }
        } else {
          viewAllBtn.style.display = "none";
        }
      }

      function toggleViewAll(){
        showAllSituations = !showAllSituations;
        renderHome();
      }

      /* =========================
         SEARCH / TYPEAHEAD
      ========================== */
      const SEARCH_THRESHOLD = 4;
      const SITUATION_ICONS = {
        // Pill capsule
        refusing_meds: `<svg viewBox="0 0 24 24"><path d="M10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
        
        // House outline
        wants_home: `<svg viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        
        // Heart with small figure
        asking_mom: `<svg viewBox="0 0 24 24" style="transform:scale(1.1)"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><circle cx="12" cy="10" r="2"/><path d="M12 12v3"/></svg>`,
        
        // Hand reaching
        stealing: `<svg viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8V6"/></svg>`,
        
        // Footprints
        shadowing: `<svg viewBox="0 0 24 24"><circle cx="7" cy="6" r="2"/><circle cx="17" cy="10" r="2"/><path d="M6 8v5"/><path d="M18 12v5"/><path d="M4 18c0 1.5 1.2 2.5 3 2.5"/><path d="M16 20c0 1.5 1.2 2.5 3 2.5"/></svg>`,
        
        // Water droplet
        hygiene: `<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
        
        // Sun setting on horizon
        sundowning: `<svg viewBox="0 0 24 24"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>`,
        
        // Plate with utensils
        wont_eat: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4"/><path d="M8 12h8"/></svg>`,
        
        // Loop arrows
        repetitive: `<svg viewBox="0 0 24 24"><path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`,
        
        // Face profile with sound waves
        aggression: `<svg viewBox="0 0 24 24"><path d="M9 18c-1.5 0-3-1-3-3V9a6 6 0 0 1 12 0"/><circle cx="9" cy="9" r="3"/><path d="M16 11l2-2"/><path d="M16 15l3-3"/><path d="M16 19l4-4"/></svg>`,
        
        // Moon
        sleep: `<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
        
        // Question mark
        lost: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="0.5"/></svg>`,
        
        // Walking person
        wandering: `<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2"/><path d="m9 20 3-6 3 6"/><path d="m6 15 3-3 2 1 3-3 4 4"/></svg>`,
        
        // Box
        hiding: `<svg viewBox="0 0 24 24"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
        
        // Clothing hanger
        undressing: `<svg viewBox="0 0 24 24"><path d="M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/><path d="M12 8l-8 4v8h16v-8z"/></svg>`,
        
        // Open drawer
        rummaging: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 9v6"/><path d="M15 9v6"/></svg>`,
        
        // Basket
        hoarding: `<svg viewBox="0 0 24 24"><path d="M5 7h14l-1.5 9.5a2 2 0 0 1-2 1.5H8.5a2 2 0 0 1-2-1.5Z"/><path d="M2 7h20"/><path d="M12 2v5"/></svg>`,
        
        // Teardrop
        crying: `<svg viewBox="0 0 24 24"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/></svg>`,
        
        // Bed
        wont_get_up: `<svg viewBox="0 0 24 24"><path d="M2 12h20"/><path d="M2 20v-8"/><path d="M22 20v-8"/><path d="M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><circle cx="7" cy="10" r="1"/></svg>`,
        
        // Hand with X
        refusing_help: `<svg viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v9"/><path d="M10 10V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-4a2 2 0 0 0-4 0"/><path d="m15 17 4 4"/><path d="m19 17-4 4"/></svg>`,
        
        // Eye looking sideways
        paranoid: `<svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="14" cy="12" r="3"/></svg>`,
        
        // Eye with sparkles
        hallucinations: `<svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/><path d="M2 4l2 2"/><path d="M22 4l-2 2"/><path d="M2 20l2-2"/><path d="M22 20l-2-2"/></svg>`,
        
        // Speech bubble with exclamation
        inappropriate: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 8v3"/><circle cx="12" cy="14" r="0.5"/></svg>`,
        
        // T-shirt
        wont_dress: `<svg viewBox="0 0 24 24"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 1 .84H6v10h12V10h2.14a1 1 0 0 0 1-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z"/></svg>`,
        
        // Face with question mark
        forgot_face: `<svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="7"/><path d="M12 20v2"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M10 13a2 2 0 0 0 4 0"/><path d="M19 4l2 2"/><path d="M3 4l2 2"/></svg>`,
        
        // Question mark in circle
        fallback_not_sure: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="0.5"/></svg>`
      };

      const DEFAULT_ICON = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/></svg>`;
      const URGENT_ICONS = {
        // SOS / Alert circle
        unresponsive: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><circle cx="12" cy="16" r="0.5"/></svg>`,
        
        // Lungs
        breathing: `<svg viewBox="0 0 24 24"><path d="M12 4v4"/><path d="M8 8c-2 0-4 2-4 6s2 6 4 6"/><path d="M16 8c2 0 4 2 4 6s-2 6-4 6"/><path d="M8 8c0 0 2 2 4 2s4-2 4-2"/><path d="M8 20c0 0 2-2 4-2s4 2 4 2"/></svg>`,
        
        // Emergency siren
        stroke: `<svg viewBox="0 0 24 24"><path d="M6 18h12"/><path d="M8 18v-6a4 4 0 0 1 8 0v6"/><path d="M12 2v2"/><path d="M4.93 5.93l1.41 1.41"/><path d="M19.07 5.93l-1.41 1.41"/></svg>`,
        
        // Person fallen
        fall: `<svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"/><path d="M6 20l4-8 4 2 4-6"/><path d="M18 16l2 4"/></svg>`,
        
        // Warning triangle
        general_emergency: `<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><circle cx="12" cy="17" r="0.5"/></svg>`
      };

      /* HARD EMERGENCY TOKENS - if any match, route to Emergency immediately */
      const EMERGENCY_TOKENS = {
        // Category 1: Breathing & consciousness
        breathing: ["not breathing", "cant breathe", "can't breathe", "breathing trouble", "gasping", "unconscious", "collapsed", "passed out", "unresponsive", "choking", "blue lips", "not responding", "wont wake", "won't wake", "fainted", "lifeless"],
        // Category 2: Stroke & heart
        stroke: ["stroke", "face drooping", "slurred speech", "heart attack", "chest pain", "arm pain", "sudden weakness", "sudden confusion", "fast test", "face droop", "one side weak"],
        // Category 3: Falls & injury
        injury: ["bad fall", "hit head", "head injury", "bleeding", "cant get up", "can't get up", "broken", "severe pain", "fracture", "found on floor"],
        // Category 4: Immediate danger
        danger: ["fire", "danger", "unsafe", "violent now", "aggressive now", "weapon", "threatening", "emergency", "ambulance", "999", "112", "dying", "immediate danger", "seriously wrong"]
      };
      
      /* =========================
         DEV-TIME LINT: Hardcoded emergency numbers
         Scans deck strings for 999/112/911 that should be {EMERGENCY}
      ========================== */
      function lintHardcodedEmergencyNumbers(){
        const hardcodedPattern = /\b(999|112|911)\b/g;
        const warnings = [];
        
        // Check CRISIS_DECKS
        for(const [key, deck] of Object.entries(CRISIS_DECKS)){
          deck.steps.forEach((step, i) => {
            if(step.say && hardcodedPattern.test(step.say)){
              warnings.push(`CRISIS_DECKS["${key}"].steps[${i}].say contains hardcoded number`);
            }
            hardcodedPattern.lastIndex = 0; // Reset regex
            if(step.do && hardcodedPattern.test(step.do)){
              warnings.push(`CRISIS_DECKS["${key}"].steps[${i}].do contains hardcoded number`);
            }
            hardcodedPattern.lastIndex = 0;
          });
        }
        
        // Check URGENT_DECKS
        for(const [key, deck] of Object.entries(URGENT_DECKS)){
          deck.steps.forEach((step, i) => {
            if(step.say && hardcodedPattern.test(step.say)){
              warnings.push(`URGENT_DECKS["${key}"].steps[${i}].say contains hardcoded number`);
            }
            hardcodedPattern.lastIndex = 0;
            // Note: {EMERGENCY} in do text is allowed and will be injected
            const doText = step.do || "";
            const cleanedDo = doText.replace(/\{EMERGENCY\}/g, ""); // Remove placeholders before checking
            if(hardcodedPattern.test(cleanedDo)){
              warnings.push(`URGENT_DECKS["${key}"].steps[${i}].do contains hardcoded number (use {EMERGENCY})`);
            }
            hardcodedPattern.lastIndex = 0;
          });
        }
        
        // Output warnings
        if(warnings.length > 0){
          console.warn("🚨 DEV LINT: Hardcoded emergency numbers found:");
          warnings.forEach(w => console.warn("  →", w));
          console.warn("Replace hardcoded numbers with {EMERGENCY} placeholder.");
        }
      }

      function normalizeQuery(str){
        return str.toLowerCase().trim().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
      }

      /* Escape regex special characters */
      function escapeRegex(str){
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }

      /* Check if query contains emergency intent - returns true if ANY hard token matches */
      function hasEmergencyIntent(query){
        const q = normalizeQuery(query);
        if(!q) return false;
        
        for(const category of Object.values(EMERGENCY_TOKENS)){
          for(const token of category){
            // Multi-word phrases: use includes (safe, requires full phrase)
            // Single-word tokens: use word-boundary regex to prevent "fire" matching "fireplace"
            if(token.includes(' ')){
              if(q.includes(token)) return true;
            } else {
              const escaped = escapeRegex(token);
              const regex = new RegExp('\\b' + escaped + '\\b', 'i');
              if(regex.test(q)) return true;
            }
          }
        }
        return false;
      }

      /* Find which specific emergency items match the query */
      function matchEmergencyItems(query){
        const q = normalizeQuery(query);
        const matches = [];
        
        for(const item of URGENT_ITEMS){
          let score = 0;
          const label = normalizeQuery(item.label);
          const sub = normalizeQuery(item.sub);
          
          if(label.includes(q)) score += 6;
          if(sub.includes(q)) score += 4;
          
          if(item.aliases){
            for(const alias of item.aliases){
              if(normalizeQuery(alias).includes(q)){ score += 5; break; }
            }
          }
          if(item.keywords){
            for(const kw of item.keywords){
              const nkw = normalizeQuery(kw);
              if(nkw === q){ score += 3; break; }
              else if(nkw.includes(q) || q.includes(nkw)){ score += 2; }
            }
          }
          
          if(score > 0) matches.push({ key: item.key, score, isUrgent: true });
        }
        
        // Sort by score, return all matches (or general_emergency as fallback)
        matches.sort((a, b) => b.score - a.score);
        if(matches.length === 0){
          // Emergency intent detected but no specific match → general emergency
          return [{ key: 'general_emergency', score: 10, isUrgent: true }];
        }
        return matches;
      }

      function scoreItem(item, query){
        if(item.isFallback) return 0;
        
        let score = 0;
        const q = normalizeQuery(query);
        if(!q) return 0;
        
        const label = normalizeQuery(item.label);
        const sub = normalizeQuery(item.sub);
        
        if(label.includes(q)) score += 6;
        if(sub.includes(q)) score += 4;
        
        if(item.aliases){
          for(const alias of item.aliases){
            if(normalizeQuery(alias).includes(q)){ score += 5; break; }
          }
        }
        if(item.keywords){
          for(const kw of item.keywords){
            const nkw = normalizeQuery(kw);
            if(nkw === q){ score += 3; break; }
            else if(nkw.includes(q) || q.includes(nkw)){ score += 2; }
          }
        }
        
        return score;
      }

      const URGENT_THRESHOLD = 5; // Higher threshold for urgent to avoid false positives

      function searchSituations(query){
        const q = normalizeQuery(query);
        if(!q) return [];
        
        /* PRIORITY 1: Emergency intent check - if detected, return ONLY urgent items */
        if(hasEmergencyIntent(query)){
          return matchEmergencyItems(query);
        }
        
        /* PRIORITY 2: Score urgent items - only return if they genuinely match well */
        const urgentScored = URGENT_ITEMS.map(item => ({ key: item.key, score: scoreItem(item, query), isUrgent: true }))
                                         .filter(x => x.score > 0); // Filter out non-matches first
        urgentScored.sort((a, b) => b.score - a.score);
        
        // Only return urgent items if top score meets higher threshold
        if(urgentScored.length > 0 && urgentScored[0].score >= URGENT_THRESHOLD){
          return urgentScored;
        }
        
        /* PRIORITY 3: Normal crisis matching */
        const keys = getSituationKeys();
        const regularScored = keys.map(k => ({ key: k, score: scoreItem(DATA[k], query), isUrgent: false }))
                                  .filter(x => x.score > 0)
                                  .sort((a, b) => b.score - a.score);
        
        if(regularScored.length > 0 && regularScored[0].score >= SEARCH_THRESHOLD){
          return regularScored.slice(0, 5);
        }
        
        /* PRIORITY 4: Fallback */
        return [{ key: 'fallback_not_sure', score: 0, isUrgent: false }];
      }

      function renderSuggestions(results){
        const container = document.getElementById("search-suggestions");
        const homeSection = document.getElementById("common-home-section");
        
        if(results.length === 0){
          container.style.display = "none";
          homeSection.style.display = "block";
          return;
        }
        
        container.style.display = "grid";
        homeSection.style.display = "none";
        
        // XSS-safe: use createElement + textContent instead of innerHTML
        container.textContent = "";
        results.forEach(r => {
          let item;
          if(r.isUrgent){
            item = URGENT_ITEMS.find(u => u.key === r.key);
          } else {
            item = DATA[r.key];
          }
          if(!item) return;
          
          const card = document.createElement("div");
          card.className = r.isUrgent ? "card urgent-suggestion" : "card";
          card.setAttribute("role", "button");
          card.setAttribute("tabindex", "0");
          card.dataset.key = r.key;
          card.dataset.urgent = r.isUrgent;
          card.dataset.category = item.category || "default";
          
          const icon = document.createElement("span");
          icon.className = "card-icon";
          if(r.isUrgent){
            icon.innerHTML = URGENT_ICONS[r.key] || DEFAULT_ICON;
          } else {
            icon.innerHTML = SITUATION_ICONS[r.key] || DEFAULT_ICON;
          }

          const title = document.createElement("span");
          title.className = "card-title";
          title.textContent = item.label;
          
          const chevron = document.createElement("span");
          chevron.className = "card-chevron";
          chevron.textContent = "›";

          const textWrap = document.createElement("div");
          textWrap.className = "card-text";
          textWrap.appendChild(title);

          card.appendChild(icon);
          card.appendChild(textWrap);
          card.appendChild(chevron);
          container.appendChild(card);
        });
      }

      function handleSearchInput(e){
        const query = e.target.value;
        if(query.trim().length < 2){
          renderSuggestions([]);
        } else {
          const results = searchSituations(query);
          renderSuggestions(results);
        }
      }

      function renderUrgentSheet(){
        const list = document.getElementById("urgent-grid-sheet");
        // XSS-safe: use createElement + textContent instead of innerHTML
        list.textContent = "";
        URGENT_ITEMS.forEach(it => {
          const row = document.createElement("div");
          row.className = "urgent-row";
          row.setAttribute("role", "button");
          row.setAttribute("tabindex", "0");
          row.dataset.urgent = it.key;
          
          // Icon box
          const iconBox = document.createElement("div");
          iconBox.className = "urgent-icon";
          iconBox.innerHTML = URGENT_ICONS[it.key] || DEFAULT_ICON;
          
          // Text container
          const textBox = document.createElement("div");
          textBox.className = "urgent-text";
          
          const label = document.createElement("div");
          label.className = "urgent-title";
          label.textContent = it.label;
          
          const sub = document.createElement("div");
          sub.className = "urgent-sub";
          sub.textContent = it.sub;
          
          textBox.appendChild(label);
          textBox.appendChild(sub);
          
          // Chevron
          const chevron = document.createElement("span");
          chevron.className = "urgent-chevron";
          chevron.textContent = "›";
          
          row.appendChild(iconBox);
          row.appendChild(textBox);
          row.appendChild(chevron);
          list.appendChild(row);
        });
      }

      /* =========================
         OVERLAYS
      ========================== */
      function isOpen(id){
        const el = document.getElementById(id);
        return !!el && el.classList.contains("active");
      }

      function isMenuOpen(){
        const el = document.getElementById("menu-overlay");
        return !!el && el.classList.contains("active");
      }

      // Centralized body lock - considers ALL overlays
      function updateBodyLock(){
        const anyOpen = 
          isOpen("stepdown-overlay") || 
          isOpen("urgent-overlay") || 
          isMenuOpen() ||
          isResumePromptOpen();
        document.body.style.overflow = anyOpen ? "hidden" : "";
      }

      /* =========================
         HISTORY MANAGEMENT (Android back button)
      ========================== */
      let historyStatePushed = false;
      
      function pushOverlayState(){
        if(!historyStatePushed){
          history.pushState({ overlay: true }, "");
          historyStatePushed = true;
        }
      }
      
      function clearOverlayState(){
        // Only clear flag; don't manipulate history directly
        historyStatePushed = false;
      }
      
      function hasAnyOverlayOpen(){
        return isOpen("stepdown-overlay") || isOpen("urgent-overlay") || isMenuOpen() || isResumePromptOpen() || isOpen("followup-overlay") || isOpen("followup-response-overlay");
      }

      function toggleUrgent(show){
        const el = document.getElementById("urgent-overlay");
        if(!el) return;
        
        // Note: emergencyUsed is set only when a call is initiated (callEmergency/callAdvice)
        // Opening the panel alone does NOT count as "used"
        if(!show && emergencyUsed){
          // Show reassurance on close only if a call was actually initiated
          showReassurance();
          emergencyUsed = false;
        }
        
        if(show) pushOverlayState();
        
        if(!show){
          document.getElementById("urgent-open")?.focus();
          cancelEmergencyConfirm(); // Cancel any pending confirmation
        }
        el.classList.toggle("active", !!show);
        el.setAttribute("aria-hidden", show ? "false" : "true");
        updateBodyLock();
        
        // Check after toggle if we should clear history state
        if(!show && !hasAnyOverlayOpen()) clearOverlayState();
        if(show) document.getElementById("urgent-close")?.focus();
      }
      
      // Show brief reassurance banner after emergency use
      function showReassurance(){
        const banner = document.getElementById("reassurance-banner");
        if(!banner) return;
        banner.style.display = "flex";
        // Auto-hide after 6 seconds
        setTimeout(() => { banner.style.display = "none"; }, 6000);
      }
      
      // Toast notification (replaces native alert)
      let toastTimeout = null;
      function showToast(message, duration = 3000){
        const toast = document.getElementById("toast");
        if(!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        if(toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toast.classList.remove("show");
        }, duration);
      }

      function toggleMenu(show){
        const el = document.getElementById("menu-overlay");
        if(!el) return;
        
        if(show) pushOverlayState();
        
        if(!show){
          document.getElementById("info-open")?.focus();
          document.getElementById("info-open")?.classList.remove("pressed");
        }
        el.classList.toggle("active", !!show);
        el.setAttribute("aria-hidden", show ? "false" : "true");
        updateBodyLock();
        if(show) document.getElementById("menu-close")?.focus();
        
        // Check after toggle if we should clear history state
        if(!show && !hasAnyOverlayOpen()) clearOverlayState();
      }

      function toggleStepdown(show){
        const el = document.getElementById("stepdown-overlay");
        const appContent = document.getElementById("app-content");
        if(!el) return;
        
        if(show) pushOverlayState();
        
        if(!show){
          stopSpeak();
          cancelEmergencyConfirm(); // Cancel any pending confirmation
          document.getElementById("query")?.focus();
        }
        el.classList.toggle("active", !!show);
        el.setAttribute("aria-hidden", show ? "false" : "true");
        updateBodyLock();
        if(show) document.getElementById("stepdown-close")?.focus();
        if(appContent){
          appContent.classList.toggle("dashboard-exit", !!show);
        }
        
        // Check after toggle if we should clear history state
        if(!show && !hasAnyOverlayOpen()) clearOverlayState();
      }

      /* =========================
         STEP FLOW (single engine)
      ========================== */
      let activeDecks = null;   // CRISIS_DECKS or URGENT_DECKS
      let activeKey = null;
      let stepIndex = 0;

      // Resume grace: remember last position for 10 minutes (CRISIS decks only)
      let resumeState = { 
        deckKey: null,      // The situation key (e.g., "refusing_meds")
        stepIndex: 0,       // Which step they were on
        timestamp: 0        // When they exited
      };
      
      // Urgent resume: shorter TTL, separate from crisis (5 minutes)
      let urgentResumeState = {
        deckKey: null,
        stepIndex: 0,
        timestamp: 0
      };
      const URGENT_RESUME_MS = 5 * 60 * 1000; // 5 minutes for urgent
      
      const RESUME_GRACE_MS = 10 * 60 * 1000; // 10 minutes
      const RESUME_MIN_TIME_MS = 5 * 1000;    // Must be in deck 5+ seconds to save resume
      let deckOpenedAt = 0;                   // Timestamp when deck was opened
      
      // Emergency action tracking
      let emergencyUsed = false;        // For reassurance banner
      let emergencyTriggeredSinceExit = false; // Blocks resume if emergency was used

      /* EXIT DECK: Single function for all exits. Returns to Home/List reliably.
         No completion screens, no confirmations, no shame language. */
      function exitDeck(wasCompleted = false){
        // Guard: only true if explicitly passed boolean true (prevents Event object bugs)
        wasCompleted = (wasCompleted === true);
        stopSpeak();
        
        const timeInDeck = Date.now() - deckOpenedAt;
        
        // Save CRISIS resume state (mid-flow, not completed, not step 1, 5+ seconds)
        if(activeDecks === CRISIS_DECKS && activeKey && !wasCompleted && stepIndex > 0 && timeInDeck >= RESUME_MIN_TIME_MS){
          resumeState = { 
            deckKey: activeKey, 
            stepIndex: stepIndex, 
            timestamp: Date.now()
          };
        } else if(activeDecks === CRISIS_DECKS && wasCompleted){
          clearResume();
        }
        
        // Save URGENT resume state (mid-flow, not completed, shorter TTL)
        if(activeDecks === URGENT_DECKS && activeKey && !wasCompleted && stepIndex > 0){
          urgentResumeState = {
            deckKey: activeKey,
            stepIndex: stepIndex,
            timestamp: Date.now()
          };
        } else if(activeDecks === URGENT_DECKS && wasCompleted){
          clearUrgentResume();
        }
        
        activeDecks = null;
        activeKey = null;
        stepIndex = 0;
        
        // Clear search UI so home state is clean
        const searchInput = document.getElementById("query");
        if(searchInput) searchInput.value = "";
        renderSuggestions([]);
        
        toggleStepdown(false);
        
        // Update home screen continue chip
        updateContinueChip();
      }
      
      /* =========================
         POST-COMPLETION FOLLOW-UP
      ========================== */
      function showFollowup(){
        const overlay = document.getElementById("followup-overlay");
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        document.getElementById("followup-calmer")?.focus();
      }
      
      function hideFollowup(){
        const overlay = document.getElementById("followup-overlay");
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
      }
      
      function showFollowupResponse(type){
        const overlay = document.getElementById("followup-response-overlay");
        const textEl = document.getElementById("followup-response-text");
        const buttonsEl = document.getElementById("followup-response-buttons");
        
        buttonsEl.textContent = "";
        
        if(type === "calmer"){
          // High-voltage golden glow version
          textEl.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:48px 0;"><svg width="120" height="60" viewBox="0 0 120 60" fill="none" style="margin-bottom:24px;filter:drop-shadow(0 0 16px rgba(247, 225, 198, 0.8));"><path d="M10 10 C 35 55, 85 55, 110 10" stroke="#f7e1c6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="margin-bottom:0;background:linear-gradient(90deg, #FFFFFF 0%, #FFE4B5 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-size:26px;font-weight:700;letter-spacing:-0.5px;text-align:center;">That's good to hear.</span></div>`;
          textEl.style.marginBottom = "0"; // No buttons, so remove bottom margin
          // Make card minimal (no border)
          const card = overlay.querySelector(".followup-card");
          card.classList.add("followup-card-minimal");
          // Auto-dismiss after 2 seconds
          setTimeout(() => {
            card.classList.remove("followup-card-minimal");
            closeFollowupAndExit();
          }, 2000);
        } else if(type === "same"){
          const card = overlay.querySelector(".followup-card");
          card.classList.add("followup-response-same");
          textEl.textContent = "What would you like to do?";
          textEl.style.marginBottom = "24px";
          
          const btn1 = document.createElement("button");
          btn1.className = "same-response-btn primary";
          btn1.textContent = "Back to situations";
          btn1.onclick = (e) => {
            const b = e.currentTarget;
            b.style.background = "var(--surface)";
            setTimeout(() => {
              b.style.background = "";
              closeFollowupAndExit();
            }, 180);
          };
          buttonsEl.appendChild(btn1);
          
          const btn2 = document.createElement("button");
          btn2.className = "same-response-btn secondary";
          btn2.textContent = "Stay on this step";
          btn2.onclick = (e) => {
            const b = e.currentTarget;
            b.style.background = "var(--surface)";
            setTimeout(() => {
              b.style.background = "";
              // Hide both overlays INSTANTLY (no transition flash)
              const o1 = document.getElementById("followup-overlay");
              const o2 = document.getElementById("followup-response-overlay");
              o1.style.transition = "none";
              o2.style.transition = "none";
              o1.classList.remove("active");
              o1.setAttribute("aria-hidden", "true");
              o2.classList.remove("active");
              o2.setAttribute("aria-hidden", "true");
              void o1.offsetHeight;
              o1.style.transition = "";
              o2.style.transition = "";
              // Stay on current step (user stays in card)
            }, 180);
          };
          buttonsEl.appendChild(btn2);

          const urgentLink = document.createElement("button");
          urgentLink.className = "followup-urgent-link";
          urgentLink.type = "button";
          urgentLink.textContent = "I need urgent help";
          urgentLink.onclick = () => {
            closeFollowupAndExit();
            toggleUrgent(true);
          };
          buttonsEl.appendChild(urgentLink);
        } else if(type === "worse"){
          // Apply worse card styling
          const card = overlay.querySelector(".followup-card");
          card.classList.add("followup-response-worse");
          textEl.textContent = "If things are getting worse, it's okay to get urgent help.";
          textEl.style.marginBottom = "32px"; // More space before buttons
          
          // Emergency call button (with confirmation)
          const btn1 = document.createElement("button");
          btn1.className = "hero-btn btn-crisis-emergency";
          btn1.id = "ruby-999";
          const primaryContent = document.createElement("div");
          primaryContent.className = "btn-primary-content";
          const primaryTitle = document.createElement("span");
          primaryTitle.className = "btn-primary-title";
          primaryTitle.textContent = `Call ${emergencyNumber}`;
          const primarySubtitle = document.createElement("span");
          primarySubtitle.className = "btn-primary-subtitle";
          primarySubtitle.textContent = "For immediate danger";
          primaryContent.appendChild(primaryTitle);
          primaryContent.appendChild(primarySubtitle);
          btn1.appendChild(primaryContent);
          btn1.onclick = () => {
            initiateEmergencyConfirm(btn1, () => {
              hideFollowupResponse();
              exitDeck(true);
              callEmergency();
            });
          };
          buttonsEl.appendChild(btn1);
          
          // NHS 111 / Medical advice (UK only) - outlined, secondary to 999
          if(emergencyNumber === "999" && adviceNumber){
            const btn2 = document.createElement("button");
            btn2.className = "hero-btn btn-crisis-medical";
            const content = document.createElement("div");
            content.className = "btn-secondary-content";
            const title = document.createElement("span");
            title.className = "btn-secondary-title";
            title.textContent = `Call NHS ${adviceNumber}`;
            const subtitle = document.createElement("span");
            subtitle.className = "btn-secondary-subtitle";
            subtitle.textContent = "Medical advice";
            content.appendChild(title);
            content.appendChild(subtitle);
            btn2.appendChild(content);
            btn2.onclick = () => {
              hideFollowupResponse();
              exitDeck(true);
              callAdvice();
            };
            buttonsEl.appendChild(btn2);
          }
          
          // Back to situations
          const btn3 = document.createElement("button");
          btn3.className = "followup-back-link";
          btn3.textContent = "Back to situations";
          btn3.onclick = () => {
            closeFollowupAndExit();
          };
          buttonsEl.appendChild(btn3);
        }
        
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        // Keep original followup open underneath (same black backdrop, no flash)
        // Both will be closed together in closeFollowupAndExit()
      }
      
      function hideFollowupResponse(){
        const overlay = document.getElementById("followup-response-overlay");
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
        // Clean up response-specific classes
        const card = overlay.querySelector(".followup-card");
        card.classList.remove("followup-response-worse", "followup-card-minimal", "followup-response-same");
      }
      
      function closeFollowupAndExit(){
        // Hide both overlays INSTANTLY (no transition flash)
        const overlay1 = document.getElementById("followup-overlay");
        const overlay2 = document.getElementById("followup-response-overlay");
        overlay1.style.transition = "none";
        overlay2.style.transition = "none";
        overlay1.classList.remove("active");
        overlay1.setAttribute("aria-hidden", "true");
        overlay2.classList.remove("active");
        overlay2.setAttribute("aria-hidden", "true");
        // Force reflow then restore transitions
        void overlay1.offsetHeight;
        overlay1.style.transition = "";
        overlay2.style.transition = "";
        exitDeck(true);
      }
      
      // Check if resume should be offered
      // ONLY for CRISIS decks, same key, within TTL, not after emergency
      function canResume(decks, key){
        // Rule: Never for URGENT decks
        if(decks === URGENT_DECKS) return false;
        
        // Rule: Must be CRISIS deck
        if(decks !== CRISIS_DECKS) return false;
        
        // Rule: Must have saved state
        if(!resumeState.deckKey) return false;
        
        // Rule: Must be same situation
        if(resumeState.deckKey !== key) return false;
        
        // Rule: Must be within 10 minutes
        if(Date.now() - resumeState.timestamp > RESUME_GRACE_MS) return false;
        
        // Rule: Must have been past step 1
        if(resumeState.stepIndex === 0) return false;
        
        // Rule: Must not have used emergency since exit
        if(emergencyTriggeredSinceExit) return false;
        
        return true;
      }
      
      // Clear resume memory (called after user chooses, or on completion)
      function clearResume(){
        resumeState = { deckKey: null, stepIndex: 0, timestamp: 0 };
        emergencyTriggeredSinceExit = false;
        updateContinueChip(); // Update home screen chip
      }
      
      // Clear urgent resume (on call placed or completion)
      function clearUrgentResume(){
        urgentResumeState = { deckKey: null, stepIndex: 0, timestamp: 0 };
        updateContinueChip();
      }
      
      // Check if CRISIS resume is available
      function hasCrisisResumeAvailable(){
        if(!resumeState.deckKey) return false;
        if(Date.now() - resumeState.timestamp > RESUME_GRACE_MS) return false;
        if(resumeState.stepIndex === 0) return false;
        if(emergencyTriggeredSinceExit) return false;
        return true;
      }
      
      // Check if URGENT resume is available
      function hasUrgentResumeAvailable(){
        if(!urgentResumeState.deckKey) return false;
        if(Date.now() - urgentResumeState.timestamp > URGENT_RESUME_MS) return false;
        if(urgentResumeState.stepIndex === 0) return false;
        return true;
      }
      
      // Legacy alias
      function hasResumeAvailable(){ return hasCrisisResumeAvailable(); }
      
      // Update home screen continue chip (shows either crisis or urgent resume)
      function updateContinueChip(){
        const chip = document.getElementById("continue-chip");
        const label = document.getElementById("continue-label");
        const detail = document.getElementById("continue-detail");
        if(!chip) return;
        
        // Priority: show urgent resume first (more time-critical)
        if(hasUrgentResumeAvailable()){
          const deck = URGENT_DECKS[urgentResumeState.deckKey];
          if(deck){
            label.textContent = deck.title;
            detail.textContent = `Resume Step ${urgentResumeState.stepIndex + 1}`;
            chip.dataset.resumeType = "urgent";
            chip.style.display = "block";
            return;
          }
        }
        
        // Otherwise show crisis resume
        if(hasCrisisResumeAvailable()){
          const deck = CRISIS_DECKS[resumeState.deckKey];
          if(deck){
            label.textContent = deck.title;
            detail.textContent = `Resume Step ${resumeState.stepIndex + 1}`;
            chip.dataset.resumeType = "crisis";
            chip.style.display = "block";
            return;
          }
        }
        
        chip.style.display = "none";
      }
      
      // Resume prompt state
      let resumePromptCallbacks = { onContinue: null, onRestart: null };
      
      // Single cleanup function for resume prompt (used by all close paths)
      function cleanupResumePrompt(){
        const overlay = document.getElementById("resume-overlay");
        const continueBtn = document.getElementById("resume-continue");
        const restartBtn = document.getElementById("resume-restart");
        
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
        updateBodyLock(); // Centralized body lock
        
        continueBtn.onclick = null;
        restartBtn.onclick = null;
        resumePromptCallbacks.onContinue = null;
        resumePromptCallbacks.onRestart = null;
      }
      
      // Show in-app resume prompt (replaces native confirm)
      function showResumePrompt(stepNum, onContinue, onRestart){
        const overlay = document.getElementById("resume-overlay");
        const stepEl = document.getElementById("resume-step");
        const continueBtn = document.getElementById("resume-continue");
        const restartBtn = document.getElementById("resume-restart");
        
        // Store callbacks
        resumePromptCallbacks.onContinue = onContinue;
        resumePromptCallbacks.onRestart = onRestart;
        
        const resumeDeck = resumeState.deckKey ? CRISIS_DECKS[resumeState.deckKey] : null;
        const resumeTitle = resumeDeck?.title || "Situation";
        stepEl.textContent = `${resumeTitle} • Step ${stepNum}`;
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
        updateBodyLock(); // Centralized body lock
        
        continueBtn.focus();
        
        continueBtn.onclick = () => { 
          const cb = resumePromptCallbacks.onContinue;
          cleanupResumePrompt(); 
          if(cb) cb(); 
        };
        restartBtn.onclick = () => { 
          const cb = resumePromptCallbacks.onRestart;
          cleanupResumePrompt(); 
          if(cb) cb(); 
        };
      }
      
      // Check if resume prompt is open
      function isResumePromptOpen(){
        const overlay = document.getElementById("resume-overlay");
        return overlay?.classList.contains("active");
      }
      
      // Dismiss resume prompt (ESC/backdrop: defaults to Start from Step 1)
      function dismissResumePrompt(){
        if(!isResumePromptOpen()) return;
        const cb = resumePromptCallbacks.onRestart;
        cleanupResumePrompt();
        if(cb) cb();
      }

      /* OPEN DECK: Always resets state to ensure fresh start.
         - stepIndex reset to 0
         - previous card content cleared via new activeDecks/activeKey
         - step indicator will show "Step 1 of N" for the new card */
      function openDeck(decks, key, forceStep){
        if(!decks[key]) return;
        
        // Clear old urgent resume if switching to a different urgent situation
        // "Latest intent wins" — the app always reflects the current emergency
        if(decks === URGENT_DECKS && urgentResumeState.deckKey && urgentResumeState.deckKey !== key){
          clearUrgentResume();
        }
        
        // URGENT decks: Never show resume prompt, start immediately
        if(decks === URGENT_DECKS){
          activeDecks = decks;
          activeKey = key;
          stepIndex = forceStep !== undefined ? forceStep : 0;
          finishOpenDeck(decks);
          return;
        }
        
        // CRISIS decks: Check for resume only if clicking same card
        if(forceStep === undefined && canResume(decks, key)){
          const savedStep = resumeState.stepIndex;
          const resumeStepHuman = savedStep + 1; // Human-readable (1-indexed)
          
          showResumePrompt(resumeStepHuman, 
            () => {
              // Continue from saved step
              activeDecks = decks;
              activeKey = key;
              stepIndex = savedStep;
              clearResume();
              finishOpenDeck(decks);
            },
            () => {
              // Start from step 1
        activeDecks = decks;
        activeKey = key;
        stepIndex = 0;
              clearResume();
              finishOpenDeck(decks);
            }
          );
          return;
        }
        
        // Normal open (no resume available or forceStep specified)
        if(forceStep !== undefined){
          activeDecks = decks;
          activeKey = key;
          stepIndex = forceStep;
        } else {
          activeDecks = decks;
          activeKey = key;
          stepIndex = 0;
        }
        
        finishOpenDeck(decks);
      }
      
      function finishOpenDeck(decks){
        // Track when deck was opened (for minimum time threshold)
        deckOpenedAt = Date.now();
        
        // Apply urgent-mode class for emergency spacing (no scroll needed)
        const stepScreen = document.querySelector(".stepdown-screen");
        if(stepScreen){
          if(decks === URGENT_DECKS){
            stepScreen.classList.add("urgent-mode");
          } else {
            stepScreen.classList.remove("urgent-mode");
          }
        }
        
        // Show call button for urgent decks
        const callBtn = document.getElementById("stepdown-call");
        const callLabel = document.getElementById("stepdown-call-label");
        if(decks === URGENT_DECKS){
          callBtn.style.display = "block";
          callLabel.textContent = `Call ${emergencyNumber}`;
        } else {
          callBtn.style.display = "none";
        }
        
        renderStep();
        toggleStepdown(true);
      }

      function renderStep(){
        const deck = activeDecks?.[activeKey];
        if(!deck) return;
        
        // HARD RESET overflow classes at start - prevents state leak between steps
        const stepScreen = document.querySelector(".stepdown-screen");
        if(stepScreen){
          stepScreen.classList.remove("is-overflowing", "no-overflow");
        }
        
        // BOUNDS SAFETY: If stepIndex somehow out of range, exit safely
        if(stepIndex < 0 || stepIndex >= deck.steps.length){
          exitDeck();
          return;
        }

        const step = deck.steps[stepIndex];
        const isUrgent = activeDecks === URGENT_DECKS;
        
        document.getElementById("stepdown-title").textContent = deck.title;
        document.getElementById("stepdown-progress").textContent = `Step ${stepIndex+1} of ${deck.steps.length}`;
        const progressFill = document.getElementById("progress-fill");
        if(progressFill){
          const totalSteps = deck.steps.length || 0;
          const progressRatio = totalSteps ? (stepIndex + 1) / totalSteps : 0;
          const progressValue = Math.min(1, Math.max(0, progressRatio)) * 100;
          progressFill.style.width = `${progressValue}%`;
        }
        
        // SAY section: Show only if step.say exists and is non-empty
        const saySection = document.getElementById("stepdown-say-section");
        const sayText = document.getElementById("stepdown-say");
        const doKicker = document.getElementById("stepdown-do-kicker");
        const doText = document.getElementById("stepdown-do");
        
        if(step.say){
          saySection.style.display = "block";
          sayText.textContent = injectEmergencyNumber(step.say);
          doKicker.textContent = "You can do this";
          doText.classList.remove("do-only");
          // Urgent decks: keep large format even with SAY+DO
          if(isUrgent){
            sayText.classList.add("urgent");
            doText.classList.add("urgent");
          } else {
            sayText.classList.remove("urgent");
            doText.classList.remove("urgent");
          }
        } else {
          saySection.style.display = "none";
          doKicker.textContent = "Do this";
          doText.classList.add("do-only");  // Largest text in app for DO-only steps
          sayText.classList.remove("urgent");
          doText.classList.remove("urgent");
        }
        
        // DO section: Render with inline tappable emergency for urgent, plain text otherwise
        if(isUrgent && step.do && step.do.includes("{EMERGENCY}")){
          renderDoWithInlineEmergency(doText, step.do);
        } else {
          doText.textContent = injectEmergencyNumber(step.do) || "";
        }
        
        // Button visibility: Toggle controls based on deck type
        const genericEmergencyBtn = document.getElementById("stepdown-emergency");
        const genericEmergencyWrap = document.getElementById("stepdown-emergency-wrap");
        const backToUrgent = document.getElementById("back-to-urgent");
        const backToSituations = document.getElementById("back-to-situations");
        const listenFooter = document.getElementById("listen-inline");
        const listenInline = document.getElementById("listen-inline");
        const listenEmergency = document.getElementById("listen-emergency");
        
        // Listen position: prominent above content for Emergency, inline for Crisis
        if(listenFooter) listenFooter.style.display = "none";
        if(isUrgent){
          // Emergency: prominent Listen button above content (always visible, easy to find)
          if(listenEmergency) listenEmergency.style.display = "flex";
          if(listenInline) listenInline.style.display = "none";
        } else {
          // Crisis: inline Listen (under SAY text)
          if(listenEmergency) listenEmergency.style.display = "none";
          if(listenInline) listenInline.style.display = "inline-flex";
        }
        
        const crisisDisclaimer = document.getElementById("crisis-disclaimer");
        const urgentDisclaimer = document.getElementById("urgent-disclaimer");
        
        if(isUrgent){
          // Urgent deck: Call button, no Emergency button
          if(genericEmergencyWrap) genericEmergencyWrap.style.display = "none";
          genericEmergencyBtn.style.display = "none";
          if(backToUrgent) backToUrgent.style.display = "block";
          if(backToSituations) backToSituations.style.display = "none";
          if(crisisDisclaimer) crisisDisclaimer.style.display = "none";
          if(urgentDisclaimer) urgentDisclaimer.style.display = "block";
        } else {
          // Crisis deck: Emergency button + disclaimer
          if(genericEmergencyWrap) genericEmergencyWrap.style.display = "block";
          genericEmergencyBtn.style.display = "inline-flex";
          if(backToUrgent) backToUrgent.style.display = "none";
          if(backToSituations) backToSituations.style.display = "block";
          if(crisisDisclaimer) crisisDisclaimer.style.display = "block";
          if(urgentDisclaimer) urgentDisclaimer.style.display = "none";
        }

        const back = document.getElementById("stepdown-back");
        const next = document.getElementById("stepdown-next");
        
        // Back disabled at first step (visual only - prevStep handles exit)
        back.disabled = false;  // Keep enabled so it can exit
        back.style.opacity = stepIndex === 0 ? "0.5" : "1";

        const isLast = stepIndex === deck.steps.length - 1;
        next.textContent = isLast ? "Done" : "Next";

        stopSpeak(); // stop speech when step changes
        
        // Overflow detection: check after DOM update
        checkStepOverflow();
      }
      
      // Overflow detection - extracted for reuse on resize
      // Uses double rAF to ensure layout has fully settled (fonts, reflow, etc.)
      function checkStepOverflow(){
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const stepScreen = document.querySelector(".stepdown-screen");
            const body = document.querySelector(".stepdown-body");
            const footer = document.querySelector(".stepdown-footer");
            if(stepScreen && body){
              // Reset scroll position before measuring
              body.scrollTop = 0;
              
              // Temporarily force hidden to get accurate measurement
              const prevOverflow = body.style.overflow;
              body.style.overflow = "hidden";
              
              // Force layout recalc
              void body.offsetHeight;
              
              const isOverflowing = body.scrollHeight > body.clientHeight + 16;
              
              // Restore
              body.style.overflow = prevOverflow;
              
              
              // Mutually exclusive class application
              if(isOverflowing){
                stepScreen.classList.add("is-overflowing");
                stepScreen.classList.remove("no-overflow");
              } else {
                stepScreen.classList.add("no-overflow");
                stepScreen.classList.remove("is-overflowing");
              }
              // Bind scroll indicator after overflow state is set
              bindStepScrollIndicator();
              
            }
          });
        });
      }
      
      // Debounced resize handler for overflow re-check
      let resizeTimeout;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // Only re-check if stepdown is visible
          const stepScreen = document.querySelector(".stepdown-screen");
          if(stepScreen && stepScreen.closest(".stepdown-backdrop.active")){
            checkStepOverflow();
          }
        }, 150);
      });

      // Scroll indicator helper (Gemini-style rail + dot)
      let stepScrollEl = null;
      let onStepScroll = null;
      
      function bindStepScrollIndicator(){
        const screen = document.querySelector(".stepdown-screen");
        const body = document.querySelector(".stepdown-body");
        const rail = document.querySelector(".scroll-indicator");
        const dot = document.querySelector(".scroll-indicator-dot");
        if(!screen || !body || !rail || !dot) return;
        
        // Clean up previous listener
        if(stepScrollEl && onStepScroll){
          stepScrollEl.removeEventListener("scroll", onStepScroll);
        }
        
        // Only bind when overflowing
        if(!screen.classList.contains("is-overflowing")){
          dot.style.transform = "translate(-50%, 0px)";
          stepScrollEl = null;
          onStepScroll = null;
          return;
        }
        
        stepScrollEl = body;
        
        const updateDot = () => {
          const maxScroll = body.scrollHeight - body.clientHeight;
          const progress = maxScroll <= 0 ? 0 : (body.scrollTop / maxScroll);
          
          const railH = rail.clientHeight;
          const dotH = dot.clientHeight;
          const travel = Math.max(0, railH - dotH);
          
          const y = Math.round(travel * progress);
          dot.style.transform = `translate(-50%, ${y}px)`;
        };
        
        onStepScroll = () => updateDot();
        
        body.addEventListener("scroll", onStepScroll, { passive: true });
        
        // Ensure correct initial position
        updateDot();
      }

      function nextStep(){
        const deck = activeDecks?.[activeKey];
        if(!deck) return;
        
        if(stepIndex < deck.steps.length - 1){
          stepIndex++;
          renderStep();
        } else {
          // LAST STEP: Show follow-up for CRISIS decks, direct exit for URGENT
          if(activeDecks === CRISIS_DECKS){
            showFollowup();
          } else {
            exitDeck(true); // wasCompleted = true, clears resume state
          }
        }
      }

      function prevStep(){
        if(stepIndex > 0){
          stepIndex--;
          renderStep();
        } else {
          // FIRST STEP: Back exits to home/list
          exitDeck();
        }
      }

      /* =========================
         TEXT-TO-SPEECH (Speaker)
      ========================== */
      let speaking = false;
      let preferredVoice = null;

      function getPreferredVoice(){
        try{
          const voices = window.speechSynthesis?.getVoices?.() || [];
          
          // Priority: UK female offline voice
          const preferred = voices.find(v =>
            v.lang === "en-GB" &&
            v.localService === true &&
            (v.name.toLowerCase().includes("female") ||
             v.name.includes("Hazel") ||
             v.name.includes("Google UK English Female"))
          );
          
          // Fallback: any UK offline voice
          const fallback = voices.find(v =>
            v.lang === "en-GB" && v.localService === true
          );
          
          // Last resort: any UK voice
          const lastResort = voices.find(v => v.lang?.startsWith("en-GB"));
          
          return preferred || fallback || lastResort || null;
        }catch(_){
          return null;
        }
      }

      function pickVoice(){
        preferredVoice = getPreferredVoice();
      }

      function updateListenUI(){
        // Inline listen button (crisis mode) - PLAY/PAUSE pill
        const inlineBtn = document.getElementById("listen-inline");
        if(inlineBtn){
          inlineBtn.classList.toggle("speaking", speaking);
          inlineBtn.classList.toggle("is-playing", speaking);
          inlineBtn.setAttribute("aria-label", speaking ? "Pause audio" : "Listen to this step");
          // Update LISTEN/PAUSE text
          const textSpan = inlineBtn.querySelector("span");
          if(textSpan){
            textSpan.textContent = speaking ? "PAUSE" : "LISTEN";
          }
          // Update play/pause icon
          const listenIcon = inlineBtn.querySelector(".listen-icon");
          if(listenIcon){
            listenIcon.innerHTML = speaking
              ? '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>'
              : '<path d="M8 5v14l11-7z"/>';
          }
          // Legacy icon support (if present)
          const icon = inlineBtn.querySelector(".listen-inline-icon");
          if(icon){
            icon.innerHTML = speaking
              ? '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>'
              : '<path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
          }
        }
        // Emergency listen button (prominent, above content)
        const emergencyBtn = document.getElementById("listen-emergency");
        if(emergencyBtn){
          emergencyBtn.classList.toggle("speaking", speaking);
          emergencyBtn.setAttribute("aria-label", speaking ? "Pause" : "Listen");
          const emergencyLabel = emergencyBtn.querySelector(".listen-emergency-label");
          if(emergencyLabel){
            emergencyLabel.textContent = speaking ? "PAUSE" : "LISTEN";
          }
          const emergencyIcon = emergencyBtn.querySelector("svg");
          if(emergencyIcon){
            emergencyIcon.innerHTML = speaking
              ? '<path d="M6 4h4v16H6zM14 4h4v16h-4z"></path>'
              : '<path d="M8 5v14l11-7z"></path>';
          }
        }
      }

      function stopSpeak(){
        if("speechSynthesis" in window){
          window.speechSynthesis.cancel();
        }
        speaking = false;
        updateListenUI();
      }

      function speakCurrent(){
        const deck = activeDecks?.[activeKey];
        if(!deck) return;

        if(!("speechSynthesis" in window)){
          showToast("Text-to-speech isn't available in this browser.");
          return;
        }

        if(speaking){
          stopSpeak();
          return;
        }

        const step = deck.steps[stepIndex];
        const isUrgent = activeDecks === URGENT_DECKS;
        
        // Build speech text based on available content
        let text = `${deck.title}. Step ${stepIndex+1}. `;
        
        if(step.say){
          text += `Words to say: ${injectEmergencyNumber(step.say)}. `;
        }
        if(step.do){
          text += `Do this: ${injectEmergencyNumber(step.do)}. `;
        }
        if(!step.say && !step.do){
          text += "Follow the guidance on screen. ";
        }
        
        // Emergency audio cue for low-vision users
        if(isUrgent){
          // Check if this step has a call action (contains {EMERGENCY} placeholder)
          const hasCallAction = step.do && step.do.includes("{EMERGENCY}");
          if(hasCallAction){
            text += "When you're ready, use the Call button at the bottom of the screen.";
          } else {
            text += "When you're ready, use the Next button at the bottom of the screen.";
          }
        }

        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.9;
        u.pitch = 1.0;
        u.voice = getPreferredVoice() || preferredVoice || null;

        u.onstart = () => { speaking = true; updateListenUI(); };
        u.onend = () => { speaking = false; updateListenUI(); };
        u.onerror = () => { speaking = false; updateListenUI(); };

        speaking = true;
        updateListenUI();

        // cancel + speak in next tick for reliability
        window.speechSynthesis.cancel();
        setTimeout(() => window.speechSynthesis.speak(u), 0);
      }

      /* =========================
         VOICE INPUT (Mic) - optional
      ========================== */
      let recognition = null;
      let listening = false;

      function initSpeechRecognition(){
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if(!SR) return;

        recognition = new SR();
        recognition.lang = "en-GB";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
          const txt = event.results?.[0]?.[0]?.transcript?.trim?.() || "";
          const input = document.getElementById("query");
          if(input && txt){
            input.value = txt;
            // Trigger search
            const results = searchSituations(txt);
            renderSuggestions(results);
          }
        };

        recognition.onend = () => {
          listening = false;
          document.getElementById("mic-btn")?.classList.remove("listening");
        };
      }

      function toggleMic(){
        if(!recognition){
          showToast("Voice input isn't available on this device.");
          return;
        }
        const mic = document.getElementById("mic-btn");

        if(listening){
          recognition.stop();
          listening = false;
          mic?.classList.remove("listening");
          return;
        }

        listening = true;
        mic?.classList.add("listening");
        recognition.start();
      }

      /* =========================
         TEL buttons (Emergency)
      ========================== */
      let emergencyNumber = "999";
      let adviceNumber = "111";
      let isUK = true;

      function detectRegion(){
        try {
          const lang = navigator.language || navigator.userLanguage || "";
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
          isUK = lang.toLowerCase().includes("gb") || 
                 lang.toLowerCase() === "en-gb" || 
                 tz.toLowerCase().includes("london") ||
                 tz.toLowerCase().includes("europe/london");
        } catch(e) {
          isUK = true; // Default to UK if detection fails
        }
        
        if (isUK) {
          emergencyNumber = "999";
          adviceNumber = "111";
        } else {
          emergencyNumber = "112";
          adviceNumber = null; // Hide advice button for non-UK
        }
      }

      function setupEmergencyPanel(){
        detectRegion();
        
        const emergencyBtn = document.getElementById("call-emergency");
        const adviceBtn = document.getElementById("call-advice");
        const emergencyNumEl = document.getElementById("emergency-number");
        const adviceNumEl = document.getElementById("advice-number");
        const emergencyHint = document.getElementById("emergency-hint");
        
        // Populate call button labels
        emergencyNumEl.textContent = `Call ${emergencyNumber}`;
        if(adviceNumEl && adviceNumber){
          adviceNumEl.textContent = `Call NHS ${adviceNumber}`;
        }
        
        // Inject emergency number into hint text
        if(emergencyHint){
          emergencyHint.textContent = injectEmergencyNumber("If you or they are in immediate danger, call {EMERGENCY}.");
        }
        
        // Update info panel emergency line
        const infoEmergencyLine = document.getElementById("info-emergency-line");
        if(infoEmergencyLine){
          infoEmergencyLine.textContent = injectEmergencyNumber("If you or they are in immediate danger, call {EMERGENCY}.");
        }
        
        // Hide advice button for non-UK (no universal equivalent)
        if (!isUK || !adviceNumber) {
          adviceBtn.style.display = "none";
          emergencyBtn.style.flex = "1";
        }
      }

      function callEmergency(){
        emergencyUsed = true;               // Show reassurance after closing emergency panel
        emergencyTriggeredSinceExit = true; // Block crisis resume after call
        clearUrgentResume();                // Clear urgent resume on call placed
        window.location.href = `tel:${emergencyNumber}`;
      }

      function callAdvice(){
        if (adviceNumber) {
          emergencyUsed = true;               // Show reassurance after closing emergency panel
          emergencyTriggeredSinceExit = true; // Block crisis resume after advice call too
          clearUrgentResume();                // Clear urgent resume on call placed
          window.location.href = `tel:${adviceNumber}`;
        }
      }

      /* =========================
         EMERGENCY CONFIRMATION
         Prevents accidental calls - requires 2 taps within 3 seconds
      ========================== */
      let emergencyConfirmTimer = null;
      let emergencyConfirmCountdown = null;
      let emergencyConfirmBtn = null;
      let emergencyConfirmOriginalHTML = null;
      let emergencyConfirmCallback = null;
      
      function initiateEmergencyConfirm(btn, onConfirm){
        if("vibrate" in navigator){
          navigator.vibrate(200);
        }
        // If already confirming this button, complete the call
        if(emergencyConfirmBtn === btn){
          confirmAndCall();
          return;
        }
        
        // Cancel any existing confirmation on another button
        cancelEmergencyConfirm();
        
        // Store reference, original content, and optional callback
        emergencyConfirmBtn = btn;
        emergencyConfirmOriginalHTML = btn.innerHTML;
        emergencyConfirmCallback = onConfirm || null;
        
        // Enter confirmation state
        btn.classList.add("emergency-confirm");
        if(btn.classList.contains("btn-crisis-emergency")){
          btn.classList.add("active-state");
        }
        updateConfirmText(btn);
        
        // Listen for clicks elsewhere to cancel
        setTimeout(() => {
          document.addEventListener("click", handleConfirmOutsideClick, true);
        }, 10);
      }
      
      function updateConfirmText(btn){
        const confirmText = "Tap again to call";
        
        // For main panel button (has nested spans)
        const numberSpan = btn.querySelector("#emergency-number");
        if(numberSpan){
          numberSpan.textContent = confirmText;
          numberSpan.style.fontSize = "24px";
          numberSpan.style.fontWeight = "800";
          numberSpan.style.color = "#FFFFFF";
          numberSpan.style.textShadow = "0 2px 4px rgba(0, 0, 0, 0.4)";
        } else {
          // For stepdown call button (single label span)
          const label = btn.querySelector("#stepdown-call-label");
          if(label){
            label.textContent = confirmText;
            label.style.fontWeight = "800";
            label.style.color = "#FFFFFF";
            label.style.textShadow = "0 2px 4px rgba(0, 0, 0, 0.4)";
            label.style.fontSize = "24px";
          } else {
            btn.textContent = confirmText;
            btn.style.fontWeight = "800";
            btn.style.color = "#FFFFFF";
            btn.style.textShadow = "0 2px 4px rgba(0, 0, 0, 0.4)";
            btn.style.fontSize = "24px";
          }
        }
      }
      
      function cancelEmergencyConfirm(){
        if(emergencyConfirmTimer){
          clearTimeout(emergencyConfirmTimer);
          emergencyConfirmTimer = null;
        }
        if(emergencyConfirmCountdown){
          clearInterval(emergencyConfirmCountdown);
          emergencyConfirmCountdown = null;
        }
        if(emergencyConfirmBtn){
          emergencyConfirmBtn.classList.remove("emergency-confirm");
          emergencyConfirmBtn.classList.remove("active-state");
          emergencyConfirmBtn.innerHTML = emergencyConfirmOriginalHTML;
          // Restore font size for main button
          const numberSpan = emergencyConfirmBtn.querySelector("#emergency-number");
          if(numberSpan){
            numberSpan.style.fontSize = "";
            numberSpan.style.fontWeight = "";
            numberSpan.style.color = "";
            numberSpan.style.textShadow = "";
          }
          emergencyConfirmBtn = null;
          emergencyConfirmOriginalHTML = null;
        }
        emergencyConfirmCallback = null;
        document.removeEventListener("click", handleConfirmOutsideClick, true);
      }
      
      function confirmAndCall(){
        const callback = emergencyConfirmCallback;
        cancelEmergencyConfirm();
        if(callback){
          callback();
        } else {
          callEmergency();
        }
      }
      
      function handleConfirmOutsideClick(e){
        // If click is on the confirm button, let the button handler deal with it
        if(emergencyConfirmBtn && emergencyConfirmBtn.contains(e.target)){
          return;
        }
        // Click was outside - cancel confirmation
        cancelEmergencyConfirm();
      }

      /* Inject region-safe emergency number into copy strings */
      function injectEmergencyNumber(text){
        if(!text) return text;
        return text.replace(/\{EMERGENCY\}/g, emergencyNumber);
      }

      /* Render DO text for urgent decks as headline + subtitle */
      function renderDoWithInlineEmergency(containerEl, text){
        if(!containerEl) return;
        containerEl.innerHTML = "";
        if(!text) return;

        const cleanText = injectEmergencyNumber(text);
        const match = cleanText.match(/Call\s+(\d+)\s+now\.?\s*(.*)/i);
        const headline = match ? `Call ${match[1]} now` : cleanText;
        const subtitle = match ? match[2] : "";

        const block = document.createElement("div");
        block.className = "urgent-call-block";

        const titleEl = document.createElement("div");
        titleEl.className = "urgent-call-headline";
        titleEl.textContent = headline;
        block.appendChild(titleEl);

        if(subtitle){
          const subEl = document.createElement("div");
          subEl.className = "urgent-call-subtitle";
          subEl.textContent = subtitle;
          block.appendChild(subEl);
        }

        containerEl.appendChild(block);
      }

      /* =========================
         WIRING
      ========================== */
      function wire(){
        // search input
        const searchInput = document.getElementById("query");
        searchInput.addEventListener("input", handleSearchInput);
        
        // search suggestions clicks
        const suggestions = document.getElementById("search-suggestions");
        suggestions.addEventListener("click", (e) => {
          const card = e.target.closest(".card");
          if(!card) return;
          const isUrgent = card.dataset.urgent === "true";
          openDeck(isUrgent ? URGENT_DECKS : CRISIS_DECKS, card.dataset.key);
          searchInput.value = "";
          renderSuggestions([]);
        });
        suggestions.addEventListener("keydown", (e) => {
          if(e.key !== "Enter" && e.key !== " ") return;
          const card = e.target.closest(".card");
          if(!card) return;
          e.preventDefault();
          const isUrgent = card.dataset.urgent === "true";
          openDeck(isUrgent ? URGENT_DECKS : CRISIS_DECKS, card.dataset.key);
          searchInput.value = "";
          renderSuggestions([]);
        });

        // Press feedback delays for visible confirmation before navigation
        const PRESS_DELAY = 120;        // For same-screen actions (Next/Back)
        const SCREEN_DELAY = 180;       // For screen transitions (longer for visibility)
        
        // home tiles (with press feedback delay)
        const grid = document.getElementById("grid-container");
        grid.addEventListener("click", (e) => {
          const card = e.target.closest(".card");
          if(!card) return;
          card.style.background = "var(--surface)";
          setTimeout(() => {
            card.style.background = "";
            openDeck(CRISIS_DECKS, card.dataset.key);
          }, SCREEN_DELAY);
        });
        grid.addEventListener("keydown", (e) => {
          if(e.key !== "Enter" && e.key !== " ") return;
          const card = e.target.closest(".card");
          if(!card) return;
          e.preventDefault();
          card.style.background = "var(--surface)";
          setTimeout(() => {
            card.style.background = "";
            openDeck(CRISIS_DECKS, card.dataset.key);
          }, SCREEN_DELAY);
        });

        // urgent open/close (with press feedback)
        document.getElementById("urgent-open").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.opacity = "0.6";
          setTimeout(() => {
            btn.style.opacity = "";
            toggleUrgent(true);
          }, 220); // Slightly longer for red-bordered button
        });
        document.getElementById("urgent-close").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.transform = "scale(0.9)";
          setTimeout(() => {
            btn.style.transform = "";
            toggleUrgent(false);
          }, SCREEN_DELAY);
        });
        document.getElementById("urgent-overlay").addEventListener("click", (e) => {
          if(e.target.id === "urgent-overlay") toggleUrgent(false);
        });

        // urgent rows -> open urgent decks (with press feedback delay)
        const urgentList = document.getElementById("urgent-grid-sheet");
        urgentList.addEventListener("click", (e) => {
          const row = e.target.closest(".urgent-row");
          if(!row) return;
          row.style.background = "var(--surface)";
          setTimeout(() => {
            row.style.background = "";
            toggleUrgent(false);
            openDeck(URGENT_DECKS, row.dataset.urgent);
          }, SCREEN_DELAY);
        });
        urgentList.addEventListener("keydown", (e) => {
          if(e.key !== "Enter" && e.key !== " ") return;
          const row = e.target.closest(".urgent-row");
          if(!row) return;
          e.preventDefault();
          row.style.background = "var(--surface)";
          setTimeout(() => {
            row.style.background = "";
            toggleUrgent(false);
            openDeck(URGENT_DECKS, row.dataset.urgent);
          }, SCREEN_DELAY);
        });

        // stepdown controls
        document.getElementById("stepdown-next").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.background = "var(--surface)";
          setTimeout(() => {
            btn.style.background = "";
            nextStep();
          }, PRESS_DELAY);
        });
        document.getElementById("stepdown-back").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.background = "var(--surface)";
          setTimeout(() => {
            btn.style.background = "";
            prevStep();
          }, PRESS_DELAY);
        });
        document.getElementById("stepdown-close").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.transform = "scale(0.9)";
          setTimeout(() => {
            btn.style.transform = "";
            exitDeck();
          }, SCREEN_DELAY);
        });
        document.getElementById("switch-situation").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.classList.add("pressed");
          setTimeout(() => {
            btn.classList.remove("pressed");
            exitDeck();
          }, SCREEN_DELAY);
        });
        document.getElementById("back-to-urgent-btn").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.classList.add("pressed");
          setTimeout(() => {
            btn.classList.remove("pressed");
            // Close stepdown and return to emergency list
            toggleStepdown(false);
            toggleUrgent(true);
          }, SCREEN_DELAY);
        });
        document.getElementById("stepdown-call").addEventListener("click", (e) => {
          initiateEmergencyConfirm(e.currentTarget);
        });
        document.getElementById("stepdown-emergency").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.background = "var(--surface)";
          setTimeout(() => {
            btn.style.background = "";
            toggleStepdown(false);
            toggleUrgent(true);
          }, SCREEN_DELAY);
        });
        document.getElementById("stepdown-overlay").addEventListener("click", (e) => {
          if(e.target.id === "stepdown-overlay") toggleStepdown(false);
        });

        // speaker (emergency prominent, inline for crisis, footer legacy)
        document.getElementById("listen-inline").addEventListener("click", speakCurrent);
        document.getElementById("listen-inline").addEventListener("click", speakCurrent);
        document.getElementById("listen-emergency").addEventListener("click", speakCurrent);

        // mic
        document.getElementById("mic-btn").addEventListener("click", toggleMic);

        // Menu
        document.getElementById("info-open").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.classList.add("pressed");
          setTimeout(() => {
            toggleMenu(true);
          }, 280);
        });
        document.getElementById("menu-close").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.transform = "scale(0.9)";
          setTimeout(() => {
            btn.style.transform = "";
            toggleMenu(false);
          }, SCREEN_DELAY);
        });
        const menuBackdrop = document.querySelector("#menu-overlay .menu-backdrop");
        menuBackdrop?.addEventListener("click", () => {
          toggleMenu(false);
        });
        document.querySelectorAll(".menu-link").forEach((link) => {
          link.addEventListener("click", () => {
            const action = link.dataset.action;
            link.classList.add("active");
            setTimeout(() => link.classList.remove("active"), 250);
            if(action){
              console.log("Menu action:", action);
            }
            toggleMenu(false);
          });
        });

        // 999 / 111 (with confirmation for emergency)
        document.getElementById("call-emergency").addEventListener("click", (e) => {
          initiateEmergencyConfirm(e.currentTarget);
        });
        document.getElementById("call-advice").addEventListener("click", callAdvice);

        // View all situations
        document.getElementById("view-all-btn").addEventListener("click", toggleViewAll);
        
        // Continue chip (home screen resume shortcut - handles both crisis and urgent)
        document.getElementById("continue-btn").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.classList.add("pressed");
          setTimeout(() => {
            btn.classList.remove("pressed");
            const chip = document.getElementById("continue-chip");
            const resumeType = chip.dataset.resumeType;
            
            if(resumeType === "urgent" && hasUrgentResumeAvailable()){
              openDeck(URGENT_DECKS, urgentResumeState.deckKey, urgentResumeState.stepIndex);
              clearUrgentResume();
            } else if(resumeType === "crisis" && hasCrisisResumeAvailable()){
              openDeck(CRISIS_DECKS, resumeState.deckKey, resumeState.stepIndex);
              clearResume();
            }
          }, SCREEN_DELAY);
        });
        
        // Initialize continue chip visibility
        updateContinueChip();

        // Post-completion follow-up buttons (with press feedback)
        document.getElementById("followup-calmer").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.background = "var(--surface)";
          setTimeout(() => {
            btn.style.background = "";
            showFollowupResponse("calmer");
          }, SCREEN_DELAY);
        });
        document.getElementById("followup-same").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.background = "var(--surface)";
          setTimeout(() => {
            btn.style.background = "";
            showFollowupResponse("same");
          }, SCREEN_DELAY);
        });
        document.getElementById("followup-worse").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.background = "var(--surface)";
          setTimeout(() => {
            btn.style.background = "";
            showFollowupResponse("worse");
          }, SCREEN_DELAY);
        });
        document.getElementById("followup-close").addEventListener("click", (e) => {
          const btn = e.currentTarget;
          btn.style.transform = "scale(0.9)";
          setTimeout(() => {
            btn.style.transform = "";
            closeFollowupAndExit();
          }, SCREEN_DELAY);
        });

        // Resume prompt: ESC and backdrop click dismiss (defaults to Start from Step 1)
        document.getElementById("resume-overlay").addEventListener("click", (e) => {
          if(e.target.id === "resume-overlay") dismissResumePrompt();
        });

        // global Escape closes the topmost overlay (one at a time)
        document.addEventListener("keydown", (e) => {
          if(e.key !== "Escape") return;
          if(isOpen("followup-response-overlay")){ closeFollowupAndExit(); return; }
          if(isOpen("followup-overlay")){ closeFollowupAndExit(); return; }
          if(isResumePromptOpen()){ dismissResumePrompt(); return; }
          if(isOpen("stepdown-overlay")){ toggleStepdown(false); return; }
          if(isOpen("urgent-overlay")){ toggleUrgent(false); return; }
          if(isMenuOpen()){ toggleMenu(false); return; }
        });
        
        // Android back button: close overlay instead of navigating away
        window.addEventListener("popstate", (e) => {
          if(isOpen("followup-response-overlay")){ 
            closeFollowupAndExit();
            if(hasAnyOverlayOpen()) pushOverlayState();
            return; 
          }
          if(isOpen("followup-overlay")){ 
            closeFollowupAndExit();
            if(hasAnyOverlayOpen()) pushOverlayState();
            return; 
          }
          if(isResumePromptOpen()){ 
            dismissResumePrompt(); 
            pushOverlayState(); // Re-push if other overlays still open
            return; 
          }
          if(isOpen("stepdown-overlay")){ 
            toggleStepdown(false); 
            if(hasAnyOverlayOpen()) pushOverlayState();
            return; 
          }
          if(isOpen("urgent-overlay")){ 
            toggleUrgent(false); 
            if(hasAnyOverlayOpen()) pushOverlayState();
            return; 
          }
          if(isMenuOpen()){ 
            toggleMenu(false); 
            if(hasAnyOverlayOpen()) pushOverlayState();
            return; 
          }
          // No overlay open: allow normal back navigation
          clearOverlayState();
        });
      }

      export function initDashboard(){
        // Detect region first so emergency number is set before any rendering
        detectRegion();
        
        // DEV-TIME: Check for hardcoded emergency numbers
        lintHardcodedEmergencyNumbers();
        
        renderHome();
        renderUrgentSheet();
        setupEmergencyPanel();
        initSpeechRecognition();

        // voices often load async
        if("speechSynthesis" in window){
          pickVoice();
          window.speechSynthesis.onvoiceschanged = pickVoice;
        }

        wire();
      }
