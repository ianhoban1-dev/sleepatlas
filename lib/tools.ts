/**
 * Tools registry — single source of truth for every calculator.
 * Adding a new tool = add one entry here + one calculator component.
 * Zero structural changes required (modularity requirement).
 */
import type { FaqItem } from "./schema";

export interface ToolDef {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Server-rendered explainer paragraphs — critical AEO content. */
  explainer: string[];
  howItWorks: string[];
  faqs: FaqItem[];
}

export const TOOLS: ToolDef[] = [
  {
    slug: "night-shift-recovery-calculator",
    name: "Night Shift Recovery Calculator",
    shortName: "Night Recovery",
    tagline: "Your personal post-shift countdown to quality daytime sleep.",
    description:
      "Enter your shift end time and commute, and get precise countdowns for light exposure, caffeine cut-off and winding down — so your body clock works with you, not against you.",
    explainer: [
      "The single biggest mistake night workers make is treating the journey home as 'off the clock'. It isn't. The 90 minutes between clocking off and getting into bed decide whether you get five broken hours or seven solid ones.",
      "This calculator works backwards from your shift end time and commute to give you three hard deadlines: when your last caffeine should have been (hours before you even finish), when to start blocking morning light, and when to begin your wind-down routine at home.",
      "Morning sunlight is the strongest body-clock signal there is. Catch a face full of it on the drive home and your brain reads it as 'wake up' — exactly what you don't want. Sunglasses on the commute aren't a style choice for night workers; they're equipment.",
    ],
    howItWorks: [
      "Enter your shift end time and door-to-door commute in minutes.",
      "The calculator sets your caffeine cut-off at 6 hours before shift end — caffeine's half-life means a 4am coffee is still working against you at 10am.",
      "Light-blocking starts the moment you step outside: it flags your commute window as a light-defence zone.",
      "Your wind-down window begins 30 minutes after you get home, targeting lights-out within 90 minutes of leaving work.",
    ],
    faqs: [
      {
        question: "When should I stop drinking caffeine on a night shift?",
        answer:
          "Cut caffeine at least 6 hours before your shift ends. If you finish at 7am, your last coffee should be around 1am. Caffeine has a half-life of roughly 5–6 hours, so a late-shift coffee is still suppressing sleep pressure when you get into bed.",
      },
      {
        question: "Should I wear sunglasses on the way home from a night shift?",
        answer:
          "Yes. Morning daylight is the most powerful body-clock reset signal there is. Wrap-around sunglasses on the commute home stop your brain reading sunrise as 'time to wake up', making it significantly easier to fall asleep once you're home.",
      },
      {
        question: "How soon after a night shift should I go to bed?",
        answer:
          "Aim for lights-out within 90 minutes of leaving work. The longer you stay up in daylight, the more your body clock fights the sleep. Get home, eat something light, do a short wind-down, and get into a dark room fast.",
      },
      {
        question: "Is it better to sleep straight away or split my daytime sleep?",
        answer:
          "For most people a single block straight after the shift beats a split. But if you consistently wake after 4–5 hours, a two-block pattern — main sleep in the morning plus a 90-minute top-up before your next shift — is a proven fallback used across prison, factory and logistics rotas.",
      },
    ],
  },
  {
    slug: "rota-flip-flop-calculator",
    name: "Rota Flip-Flop Calculator",
    shortName: "Rota Flip-Flop",
    tagline: "Land your body clock safely back into family weekends.",
    description:
      "Coming off your final night shift and need to be human by Saturday afternoon? This calculator builds your exact transition plan — anchor sleep length, wake time, light exposure and the first proper night sleep.",
    explainer: [
      "The flip back from nights to days is where most shift workers lose their weekend. Sleep a full day Friday and you'll be wide awake at 3am Saturday; skip sleep entirely and you're a zombie at your kid's football match.",
      "The proven middle path is the anchor sleep: a deliberately shortened morning sleep after your final night — enough to clear the worst of the debt, short enough to leave you tired by a normal bedtime that same evening.",
      "This calculator takes your final shift end time and your target 'normal' bedtime, and outputs your anchor sleep window, your forced wake time, when to get bright light, and when to eat your meals to drag your body clock back to daytime.",
    ],
    howItWorks: [
      "Enter when your final night shift ends and the bedtime you want to keep on your days off.",
      "You get an anchor sleep window of about 4 hours, ending no later than early afternoon.",
      "The plan front-loads bright light and a proper meal immediately after the anchor wake-up — both are powerful daytime signals.",
      "It then sets a realistic first-night bedtime and warns you off napping after 4pm, the single most common flip-flop failure.",
    ],
    faqs: [
      {
        question: "How do I switch back to normal sleep after night shifts?",
        answer:
          "Use an anchor sleep: after your final night shift, sleep only about 4 hours in the morning (for example 8am–12pm), force yourself up, get bright light and a proper meal, stay awake through the afternoon and evening, then go to bed at a normal time that night. Most people are largely re-synced within one to two days.",
      },
      {
        question: "Should I stay up all day after my last night shift?",
        answer:
          "No — pushing through on zero sleep tanks your reaction time, mood and judgement, and often leads to an accidental evening crash that wrecks the reset. A controlled 4-hour anchor sleep gets you the reset without the danger.",
      },
      {
        question: "How long does it take to recover from a block of night shifts?",
        answer:
          "Roughly one day per time-zone-equivalent of shift. A 4-night block behaves like flying across 6–8 time zones, so expect 1–2 days of managed transition to feel genuinely normal — faster if you control light, meals and the anchor sleep properly.",
      },
      {
        question: "Can I nap in the evening before my first normal night sleep?",
        answer:
          "Avoid any nap after 4pm on transition day. Evening naps drain the sleep pressure you need to get through your first full night, and are the most common reason a flip-flop fails.",
      },
    ],
  },
  {
    slug: "sleep-debt-fatigue-logger",
    name: "Sleep Debt & Fatigue Logger",
    shortName: "Sleep Debt Logger",
    tagline: "See your missed hours stacking up before they flatten you.",
    description:
      "Log actual sleep against your personal requirement across a rolling shift block, and watch your accumulated sleep debt and projected fatigue level — before it becomes a safety problem.",
    explainer: [
      "Sleep debt is sneaky. One short sleep feels fine. Three short sleeps in a 4-on block and your reaction time is legally-drunk equivalent — and you're the last person able to judge it, because impairment blunts self-assessment first.",
      "This logger tracks the gap between the sleep you need and the sleep you actually got across your current shift block, then translates the accumulated debt into a plain-English fatigue banding used across safety-critical industries.",
      "On the landings, on the line, behind the wheel of a forklift at 5am — the workers who last decades are the ones who treat sleep debt like an overdraft: fine to dip into, dangerous to live in.",
    ],
    howItWorks: [
      "Set your personal nightly requirement (most adults: 7–9 hours).",
      "Log the actual hours you slept for each day of your current block.",
      "The logger sums your rolling debt and assigns a fatigue band: Green (under 2h), Amber (2–5h), Red (5–8h), Critical (over 8h).",
      "Each band comes with a practical action — from 'protect tonight's sleep' to 'do not drive; recovery sleep is now a safety requirement'.",
    ],
    faqs: [
      {
        question: "What is sleep debt?",
        answer:
          "Sleep debt is the running total of the difference between the sleep your body needs and the sleep it actually gets. Need 8 hours and get 5.5 across four nights? You're carrying 10 hours of debt — comparable to missing an entire night.",
      },
      {
        question: "How much sleep debt is dangerous?",
        answer:
          "Performance measurably degrades from about 2 hours of accumulated debt. Beyond 5 hours in a rolling week, reaction time and judgement decline to levels comparable with alcohol impairment. Over 8 hours, driving and safety-critical work carry serious risk.",
      },
      {
        question: "Can you pay back sleep debt with a lie-in?",
        answer:
          "Partially. A single long sleep recovers alertness faster than it recovers accuracy and judgement — those take two to three nights of solid sleep. That's why the smart play is stopping the debt building mid-block, not banking on one heroic day-off sleep.",
      },
      {
        question: "How much sleep do shift workers actually need?",
        answer:
          "The same 7–9 hours as everyone else — the difference is shift workers rarely get it in one block. Counting a main sleep plus a planned nap toward your daily total is a legitimate and often necessary strategy on rotating rotas.",
      },
    ],
  },
  {
    slug: "noise-calibration-tool",
    name: "Noise Calibration Tool",
    shortName: "Noise Calibration",
    tagline: "Match your daytime noise problem to the right masking defence.",
    description:
      "Rate the noise sources around your daytime sleep — traffic, neighbours, kids, deliveries — and get a calibrated masking plan: which noise colour, what volume strategy, and which physical defences to layer.",
    explainer: [
      "Daytime sleep fails for one reason more than any other: the world is awake and it's loud. Bin lorries, school runs, next door's dog, delivery knocks. You can't silence a neighbourhood — but you can stop your brain flagging its noises as alerts.",
      "Sound masking works by raising the floor, not fighting the peaks. A steady bed of brown or pink noise makes the gap between background and a slammed car door small enough that your sleeping brain stops treating each event as a wake-up call.",
      "This tool scores your personal noise environment and outputs a specific defence: the noise colour that best covers your problem frequencies, a volume strategy, and the physical layers (seals, mass, earplugs) worth adding for your situation.",
    ],
    howItWorks: [
      "Rate each noise source around your sleep space: constant traffic, intermittent bangs, voices, high-pitch sounds.",
      "The tool computes your Noise Impact Score and identifies whether your problem is low-frequency rumble, mid-band voices or sharp transients.",
      "Low-frequency problems point to brown noise; voice intrusion points to pink; sharp high transients suit white noise or layered blends.",
      "You get a full plan: noise colour, positioning, volume ceiling (under 60dB at the pillow), plus physical defences ranked by impact per pound.",
    ],
    faqs: [
      {
        question: "What is the best noise colour for blocking traffic noise?",
        answer:
          "Brown noise. Traffic rumble is low-frequency energy, and brown noise concentrates its power in the same low band, masking engine and road noise far more effectively than white noise at the same comfortable volume.",
      },
      {
        question: "How loud should a noise masking machine be for sleep?",
        answer:
          "Keep it under about 60dB at your pillow — roughly the level of a quiet conversation. The goal is raising the background floor so interruptions don't stand out, not overpowering them with volume.",
      },
      {
        question: "Is it better to block noise or mask it?",
        answer:
          "Layer both. Physical blocking (door seals, heavy curtains, earplugs) removes energy; masking covers what gets through. Earplugs alone often fail because they make your own heartbeat and swallowing more noticeable — a masking bed underneath solves that.",
      },
      {
        question: "Does white noise work for daytime sleeping?",
        answer:
          "It helps, but it's rarely the best choice for daytime sleepers. Daytime noise is dominated by low-frequency traffic and voices, which brown and pink noise cover better. White noise earns its place against high-pitched intermittent sounds like birdsong or brake squeal.",
      },
    ],
  },
  {
    slug: "chronotype-rota-matcher",
    name: "Chronotype & Rota Matcher",
    shortName: "Chronotype Matcher",
    tagline: "Find out how your natural body clock fits your shift pattern.",
    description:
      "Answer a short set of questions about your natural sleep tendencies and current rota, and see your chronotype, your rota compatibility score, and the specific adjustments that make a mismatched pattern survivable.",
    explainer: [
      "Some people genuinely handle nights better. It isn't toughness — it's chronotype, your genetically-influenced natural timing. Late types ('owls') adapt to night blocks faster; early types ('larks') pay a heavier price and need stricter recovery discipline.",
      "Knowing your chronotype changes how you play your rota. A lark on permanent nights needs different nap timing, light strategy and caffeine rules than an owl on the same pattern — and both beat the intermediate type who copies neither.",
      "This matcher estimates your chronotype from sleep-preference questions, scores it against your assigned pattern, and gives you the adjustment set for your specific combination.",
    ],
    howItWorks: [
      "Answer questions about your free-day sleep timing, natural alertness peaks and morning difficulty.",
      "The matcher places you on a lark–owl spectrum using standard chronotype question patterns.",
      "It then scores compatibility against your selected rota: permanent nights, rotating days/nights, 4-on/4-off, earlies, or split shifts.",
      "You get a compatibility rating plus targeted advice: nap placement, light timing, caffeine windows and which shift swaps to seek or avoid.",
    ],
    faqs: [
      {
        question: "What is a chronotype?",
        answer:
          "Your chronotype is your body's natural preferred timing for sleep and alertness — commonly described as larks (early types), owls (late types) and intermediates. It's substantially genetic, shifts with age, and strongly affects how well you tolerate different shift patterns.",
      },
      {
        question: "Which chronotype handles night shifts best?",
        answer:
          "Late chronotypes (owls) consistently adapt to night work faster and report less shift fatigue. Their natural alertness peak sits later in the day, so staying up through the night is a smaller stretch from their baseline.",
      },
      {
        question: "Can I change my chronotype to suit my rota?",
        answer:
          "You can't change the underlying type, but you can shift your actual sleep timing 1–2 hours either way using strict light exposure, consistent meal times and caffeine discipline. The tactics in this tool are about making your type work with your rota, not fighting it.",
      },
      {
        question: "What's the worst shift pattern for early risers?",
        answer:
          "Permanent or long blocks of nights. Larks feel the 4am–6am alertness trough hardest and recover slower afterwards. If you're a strong lark stuck on nights, prioritise the pre-shift nap and be ruthless about morning light-blocking on the commute home.",
      },
    ],
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
