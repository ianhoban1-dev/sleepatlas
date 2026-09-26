/**
 * Modular article engine.
 * Adding an article = one new object in ARTICLES. Zero structural changes.
 * Content is structured blocks so every word renders server-side.
 */
import type { FaqItem } from "./schema";

/**
 * Text in `text`, `items` and table cells supports two inline marks:
 * [link text](/internal/path/ or https://external) and **bold**.
 * External links open in a new tab; internal links use next/link.
 */
export interface ArticleBlock {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "quote" | "table";
  text?: string;
  items?: string[];
  /** Table header cells (type "table"). */
  head?: string[];
  /** Table body rows (type "table"). */
  rows?: string[][];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  datePublished: string;
  readMinutes: number;
  /** One-sentence direct answer, inverted pyramid, AEO-first. */
  quickAnswer: string;
  blocks: ArticleBlock[];
  faqs: FaqItem[];
}

export const CATEGORIES = [
  { slug: "4-on-4-off-survival", name: "4-on, 4-off Survival Strategies" },
  { slug: "daytime-sleep-optimisation", name: "Daytime Sleep Optimisation" },
  { slug: "noise-disturbance-defence", name: "Noise & Disturbance Defence" },
  { slug: "rotating-rotas", name: "Managing Split/Rotating Rotas" },
  { slug: "night-shift-nutrition", name: "Nutrition & Energy on the Night Shift" },
  { slug: "family-social-balance", name: "Family & Social Life Balancing" },
] as const;

export const ARTICLES: Article[] = [
  {
    "slug": "brown-noise-for-sleep",
    "title": "Brown Noise for Sleep: The Shift Worker's Guide to Noise Colours",
    "description": "What is brown noise, and does it help you sleep in the day? A 40-year shift worker compares brown, white, pink and green noise, with what the research says.",
    "category": "Noise & Disturbance Defence",
    "categorySlug": "noise-disturbance-defence",
    "datePublished": "2026-09-26",
    "readMinutes": 11,
    "quickAnswer": "Brown noise is a deep, steady rumble in which the low frequencies are loudest, like heavy rain on a roof or a distant waterfall. Many day sleepers prefer it to white noise because it smothers traffic, voices and building work without the hiss. The research on brown noise itself is still thin, so treat it as a practical masking tool rather than a cure.",
    "blocks": [
      {
        "type": "p",
        "text": "Used well, brown noise can be the difference between four broken hours and a proper day's sleep."
      },
      {
        "type": "p",
        "text": "I know that feeling of getting into bed just as everyone else is leaving the house for school and work. It's great for about ten minutes. Then the neighbour decides today is the day to renovate the kitchen, and the drill starts."
      },
      {
        "type": "p",
        "text": "I've worked shifts for 40 years: The King's Regiment, Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, then Budweiser UK. Getting sleep during the day has been a daily battle for most of my working life. This guide explains what brown noise is, how it compares with the other \"noise colours\", what the evidence actually says, and how to use it to sleep through a noisy day."
      },
      {
        "type": "h2",
        "text": "What is brown noise?"
      },
      {
        "type": "p",
        "text": "Brown noise is a sound that contains every audible frequency, with the power dropping steadily as the pitch rises. The result is bass-heavy and smooth, a rumble rather than a hiss. [Cleveland Clinic](https://health.clevelandclinic.org/brown-noise) compares it to waterfalls, thunder, rushing rivers and heavy rainfall."
      },
      {
        "type": "p",
        "text": "The name has nothing to do with the colour. It comes from **Brownian motion**, the random movement of particles first described by the botanist Robert Brown, because the sound's pattern follows the same maths. That's also why you'll see it called **Brownian noise** or **red noise**. They are the same thing."
      },
      {
        "type": "p",
        "text": "In plain terms:"
      },
      {
        "type": "ul",
        "items": [
          "**White noise** sounds like an untuned radio: bright and hissy.",
          "**Pink noise** is softer, like steady rain or wind in the trees.",
          "**Brown noise** is deeper again, like standing near a waterfall or inside an aircraft cabin."
        ]
      },
      {
        "type": "p",
        "text": "If white noise has ever felt like it was scratching at you rather than calming you, brown noise is usually the one to try next."
      },
      {
        "type": "h2",
        "text": "Brown noise vs white, pink and green noise"
      },
      {
        "type": "p",
        "text": "The main difference between the noise colours is where the energy sits: white is spread evenly, pink and brown lean towards the bass, and green sits in the middle."
      },
      {
        "type": "table",
        "head": [
          "Noise colour",
          "What it sounds like",
          "Where the energy sits",
          "Best at covering",
          "Watch out for"
        ],
        "rows": [
          [
            "White",
            "Radio static, a hissing shower",
            "Equal across all frequencies",
            "High-pitched sounds: voices, birdsong, a TV through the wall",
            "Can sound harsh at the volume needed to mask a drill"
          ],
          [
            "Pink",
            "Steady rain, wind in trees",
            "Leans towards lower frequencies",
            "General household and street noise",
            "Softer, so it may let sharp sounds through"
          ],
          [
            "Brown (red)",
            "Waterfall, thunder, heavy rain, aircraft cabin",
            "Strongly weighted to low frequencies",
            "Low rumbles: traffic, lorries, bass through walls, washing machines",
            "Masks high-pitched sounds less well than white"
          ],
          [
            "Green",
            "A hum of nature, a gentle mid-range wash",
            "Middle frequencies",
            "Mixed, everyday background noise",
            "Not a scientific standard; [very little research](https://www.sleepfoundation.org/noise-and-sleep/what-is-green-noise)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "For day sleepers, the useful takeaway is simple. **Brown noise is best for low, rumbling noise, white for high-pitched noise, and a blend often works best of all.** I've gone deeper on the two-way comparison in [brown noise vs white noise for daytime disturbances](/resources/brown-noise-vs-white-noise-for-daytime-disturbances/)."
      },
      {
        "type": "h2",
        "text": "Why brown noise suits daytime sleep after a night shift"
      },
      {
        "type": "p",
        "text": "Daytime is simply louder than night. School runs, delivery vans, bin lorries, lawnmowers, next door's builders: the whole street is awake while you're trying to sleep. The [World Health Organization](https://www.who.int/europe/news-room/fact-sheets/item/noise) recommends keeping bedrooms below 30 dB(A) at night for good sleep. It also names shift workers among the groups most sensitive to noise. Few day sleepers get anywhere near 30 dB at 11am."
      },
      {
        "type": "p",
        "text": "Most of that daytime noise is low and rumbling, which is exactly where brown noise is strongest."
      },
      {
        "type": "ul",
        "items": [
          "**Traffic and engines.** A diesel van idling outside or a lorry going past is mostly bass. Brown noise fills that same range, so the change in sound is less jarring.",
          "**Sound through walls.** Walls and double glazing block high frequencies better than low ones. What reaches your pillow is usually thuds, bass and rumble.",
          "**Sudden noises.** It's usually the change in sound that wakes you, not the level. A steady masking sound narrows the gap between \"quiet\" and \"car door slamming\", so fewer noises stand out enough to wake you."
        ]
      },
      {
        "type": "p",
        "text": "There's a comfort side too. Brown noise is gentler on the ear over a six- or seven-hour sleep than white noise at the same volume. Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. A low, even rumble gives your brain something steady to settle on."
      },
      {
        "type": "p",
        "text": "For years I slept with a fan going. It was only when I tried a deeper sound after a run of nights that I realised how much of the street I'd still been hearing."
      },
      {
        "type": "h2",
        "text": "What the research actually says about brown noise"
      },
      {
        "type": "p",
        "text": "**There is very little research on brown noise and sleep specifically, and the evidence for background noise in general is weak.** A lot of websites won't tell you that, so here is where the science stands."
      },
      {
        "type": "ul",
        "items": [
          "**Continuous noise in general.** A 2021 systematic review in Sleep Medicine Reviews looked at 38 studies of noise as a sleep aid ([Riedy et al.](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)). The reviewers rated the quality of evidence that continuous noise improves sleep as \"very low\". Most studies were small, and many didn't analyse their results properly.",
          "**Brown noise specifically.** [Cleveland Clinic](https://health.clevelandclinic.org/brown-noise) says research on brown noise for sleep is minimal, and scientists are still studying it.",
          "**The pink noise studies.** The best-known results are for pink noise. A Northwestern University study found memory improvement was about three times larger in adults over 60 ([Northwestern, 2017](https://news.northwestern.edu/stories/2017/april/pink-noise-sound-enhance-deep-sleep-memory)). But the sound came in short bursts, timed to each person's brain waves during deep sleep. A pink or brown noise track playing all day is not the same thing."
        ]
      },
      {
        "type": "p",
        "text": "So why use brown noise at all? Because none of those studies were testing the problem day sleepers actually have. We aren't trying to make good sleep better in a quiet lab. We're trying to stop a car alarm or a drill from waking us at 11am. Masking works in a simple way: a steady sound narrows the jump between the background and a sudden noise."
      },
      {
        "type": "p",
        "text": "My honest advice: treat brown noise as one layer of your defence, alongside a dark room, earplugs and good timing. Don't treat it as a cure. If it helps you sleep, it's working."
      },
      {
        "type": "h2",
        "text": "How to use brown noise for daytime sleep"
      },
      {
        "type": "p",
        "text": "Set it up before you get into bed, keep it at the lowest volume that covers the street, and let it run for your whole sleep."
      },
      {
        "type": "ol",
        "items": [
          "**Start it before your head hits the pillow.** Put it on while you're winding down, not after the first noise has already woken you.",
          "**Find the lowest volume that works.** Sit in bed and turn it up until the background traffic stops standing out, then stop. Louder isn't better, and there's no need to drown out the world.",
          "**Use a speaker, not earbuds, if you can.** A small speaker across the room fills the space more evenly and is kinder to your ears over several hours. If you share a bed or need earplugs as well, a sleep headband or low-profile buds are the fall-back.",
          "**Run it for the whole sleep.** A 30-minute timer helps you drop off, but the builders don't stop at 30 minutes. For day sleep, keep it running until your alarm, or use a long timer that fades out gently.",
          "**Layer it with earplugs on the worst days.** Earplugs cut the peaks, and brown noise fills the gaps.",
          "**Fix the room as well.** Noise is only one part of it. The [HSE's advice for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) includes blackout blinds or eye shades, a quiet room, and telling the neighbours when you sleep. My guide to the [best blackout strategies for daytime sleep](/resources/best-blackout-strategies-for-daytime-sleep/) covers the light side."
        ]
      },
      {
        "type": "p",
        "text": "**Not sure what's actually waking you?** The free [Noise Calibration Tool](/tools/noise-calibration-tool/) helps you work out which daytime sounds are your real problem, so you can pick the right masking sound."
      },
      {
        "type": "p",
        "text": "One trap I fell into for years: at 3 o'clock in the morning on your night shift you hit that wall, and no amount of caffeine or Red Bull helps, but you drink it anyway. Then you pay for it later, lying in bed wired with the brown noise playing and no sleep coming. No sound will fix caffeine. In one study, 400 mg of caffeine taken six hours before bed cut total sleep by more than an hour, and the volunteers didn't even notice ([Drake et al., 2013](https://jcsm.aasm.org/doi/abs/10.5664/jcsm.3170)). Stopping caffeine well before the end of your shift does more than any noise colour."
      },
      {
        "type": "h2",
        "text": "Building your own brown noise mix in Sleyp"
      },
      {
        "type": "p",
        "text": "Sleyp is the sleep-environment app I built because nothing on the market was designed for people who sleep while the world is awake. You can [play brown, pink and white noise free in your browser](/session/). No sign-up is needed."
      },
      {
        "type": "p",
        "text": "A mix that works for a lot of day sleepers:"
      },
      {
        "type": "ul",
        "items": [
          "**Brown noise as the base.** It covers traffic and bass through the walls.",
          "**A little rain or fan hum on top.** This adds some mid and high frequencies to catch voices and birdsong.",
          "**A long fade-out or none at all.** Keep the sound running through the noisiest part of the day."
        ]
      },
      {
        "type": "p",
        "text": "The free web player has brown, white and pink noise with 30, 60 and 90-minute fade-out timers. Premium adds ten more layers, including rain, thunderstorm, ocean waves, fan hum and cabin hum. It also adds saved personal mixes, custom timers up to 12 hours, and a gentle fade-in wake-up, so you don't jolt awake before your next night shift."
      },
      {
        "type": "p",
        "text": "**[Try Sleyp free](/session/)** in your browser now, or **get the Sleyp app** when it lands on the App Store."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Brown noise is a deep, steady rumble that's especially good at covering the low, grinding noise of a daytime street: traffic, engines, bass through walls and building work. The science on noise as a sleep aid is still weak, so don't expect miracles. But as one layer of your defence, alongside a dark room, earplugs and sensible caffeine timing, it can turn a broken day's sleep into a proper one."
      },
      {
        "type": "p",
        "text": "Start tonight. Or rather, start tomorrow morning when you get in from your shift. [Play brown noise free in Sleyp](/session/), set the volume just above the street, and see how you feel after a week."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Cleveland Clinic: What is brown noise?](https://health.clevelandclinic.org/brown-noise)",
          "[Riedy et al. (2021), Noise as a sleep aid: a systematic review, Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)",
          "[Northwestern University (2017): pink noise and deep sleep in older adults](https://news.northwestern.edu/stories/2017/april/pink-noise-sound-enhance-deep-sleep-memory)",
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise)",
          "[Sleep Foundation: What is green noise?](https://www.sleepfoundation.org/noise-and-sleep/what-is-green-noise)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[Drake et al. (2013), Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed, Journal of Clinical Sleep Medicine](https://jcsm.aasm.org/doi/abs/10.5664/jcsm.3170)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is brown noise better than white noise for sleep?",
        "answer": "Neither is better for everyone. Brown noise is better at covering low sounds like traffic and bass through walls, and many people find it less harsh over a long sleep. White noise is better at covering high-pitched sounds like voices and birdsong."
      },
      {
        "question": "Is it safe to sleep with brown noise on all day?",
        "answer": "For most people, yes, as long as the volume is moderate. Use the lowest level that covers the background noise, and play it through a speaker rather than earbuds where you can."
      },
      {
        "question": "How loud should brown noise be for sleeping?",
        "answer": "Just loud enough that background traffic and voices stop standing out, and no louder. Set it while you're sitting in bed, then leave it. If you have to raise your voice to talk over it, it's too loud."
      },
      {
        "question": "Is red noise the same as brown noise?",
        "answer": "Yes. Red noise, brown noise and Brownian noise are three names for the same deep, low-frequency sound."
      },
      {
        "question": "Does brown noise help you fall asleep faster?",
        "answer": "It helps some people, mainly by covering the sudden noises that keep them alert. A 2021 review of 38 studies found the evidence that continuous noise improves sleep is very low quality, so try it for a week of day sleeps and judge by how you feel."
      },
      {
        "question": "What is the best noise colour for sleeping after a night shift?",
        "answer": "For most daytime noise, which is mostly traffic, engines and building work, start with brown noise. Add a little rain or fan sound on top if voices or birdsong still get through."
      }
    ]
  },
  {
    slug: "how-to-sleep-after-a-prison-night-shift",
    title: "How to Sleep After a Prison Night Shift (From Someone Who Did It for Years)",
    description:
      "A prison officer's practical routine for sleeping after night shifts: managing the adrenaline comedown, the drive home in daylight, and a house that doesn't know you work nights. Tested at Strangeways, Walton and Guys Marsh.",
    category: "Daytime Sleep Optimisation",
    categorySlug: "daytime-sleep-optimisation",
    datePublished: "2026-07-05",
    readMinutes: 7,
    quickAnswer:
      "To sleep after a prison night shift: burn off the adrenaline with a wind-down ritual before you leave the gate, block all morning light on the drive home, eat something light and warm, and be in a blacked-out, sound-masked room within 90 minutes of clocking off, phone outside the door.",
    blocks: [
      {
        type: "p",
        text: "There is no tiredness quite like coming off a night shift on the landings. You're exhausted and wired at the same time, eight hours of staying switched on, listening for the wrong kind of quiet, and then suddenly you're standing in a car park at 7am with the sun coming up and every nerve still on duty. I did that walk at Strangeways, Walton and Guys Marsh, and it took me embarrassingly long to learn that the shift doesn't end when you hand the keys in. It ends when you're asleep.",
      },
      { type: "h2", text: "The real problem isn't tiredness: it's the switch-off" },
      {
        type: "p",
        text: "Prison nights are a specific kind of shift. Factory nights grind you down; prison nights keep you lit up. Your body has been producing stress chemistry for eight hours because that's the job, vigilance is the work. You cannot go from that state to sleep just because you're horizontal. The officers I watched burn out were the ones who drove home clenched, lay down wired, stared at the ceiling for two hours and called it insomnia. It wasn't insomnia. It was an unmanaged comedown.",
      },
      {
        type: "quote",
        text: "The shift doesn't end when you hand the keys in. It ends when you're asleep.",
      },
      { type: "h2", text: "Start the wind-down before you leave the gate" },
      {
        type: "p",
        text: "The last thirty minutes of the shift are your first thirty minutes of recovery. Once the morning handover is done, consciously stand down: slow your walking pace, drop your shoulders, and do the boring end-of-shift admin at half speed. It sounds like nothing. It isn't. You're telling your nervous system the vigilance window is closing. Some of the old hands had a ritual, same seat in the mess, same cup of decaf, same five minutes of pointless chat, and I eventually understood that the ritual was the point. Repetition is a signal the body trusts.",
      },
      { type: "h2", text: "The drive home is a light-defence operation" },
      {
        type: "p",
        text: "Morning sunlight is the most powerful wake-up signal your body clock ever receives, and you're about to drive straight into it. This is where most night workers lose the battle without knowing they're in one. Wrap-around sunglasses, visor down, and don't stop for a bright supermarket run, the fluorescent aisles at 7:30am are a full daylight dose to your brain. If you use our Night Shift Recovery Calculator, you'll see the commute flagged as a light-defence zone. Treat it that seriously. Dark glasses on a grey Manchester morning feel ridiculous. Do it anyway.",
      },
      { type: "h2", text: "Eat like it's supper, because it is" },
      {
        type: "p",
        text: "Whatever the clock says, your body is at the end of its day. A big fried breakfast tells your system it's morning and gives your gut a job right when you want everything powering down. Something light and warm works better, toast, porridge, scrambled eggs, soup. And the caffeine door closed hours ago: my rule on nights was nothing after 1am for a 7am finish, and it's the single rule I'd defend in a fight. Caffeine's half-life means the 4am 'survival brew' is still arguing with your brain at 10am.",
      },
      { type: "h2", text: "Build the cell: your bedroom, done properly" },
      {
        type: "p",
        text: "There's an irony in spending your nights checking cells and then going home to sleep in a room that leaks light and noise from four directions. Daytime sleep needs engineering. The order of spending, from forty years of trial and error:",
      },
      {
        type: "ul",
        items: [
          "Total blackout first. Side-channel blackout blinds beat curtains, because daylight leaks around edges, not through fabric. If the budget says mask instead, get a contoured one that survives side-sleeping.",
          "Sound floor second. The world is loud at 9am, bins, school runs, deliveries. A brown-noise bed from a machine or the Sleyp player raises the background floor so a slammed car door stops registering as an alert.",
          "Phone outside the door. On the landings you learn that being reachable is a state of alertness. You cannot be off-duty with the duty phone next to your head. Family knows the landline-equivalent rule for genuine emergencies; everything else waits.",
          "Warm shower, cool room. The drop in body temperature when you step out of a warm shower into a cool, dark room is a genuine sleep trigger, not a folk tale.",
        ],
      },
      { type: "h2", text: "The 90-minute rule" },
      {
        type: "p",
        text: "Everything above compresses into one target: be in bed within 90 minutes of leaving work. Every hour you stay up in daylight, the body clock swings harder toward 'day mode' and the sleep you eventually get is shorter and shallower. Home by 7:40, food by 8:00, shower by 8:20, dark room by 8:30. It's a drill, and like every drill it feels mechanical until the day it saves you.",
      },
      { type: "h2", text: "When it still goes wrong" },
      {
        type: "p",
        text: "Some days the street wins, an emergency drill next door, a heatwave, a toddler. Don't lie there fighting for hour three. Get up, keep the lights low, do something genuinely boring for twenty minutes, and go again. And if you're consistently getting under five hours across a block, that's not a personal failing to push through; that's accumulating sleep debt with real safety consequences. Log it in the Sleep Debt & Fatigue Logger and treat the number honestly, the same way you'd want the officer next to you treating it.",
      },
    ],
    faqs: [
      {
        question: "How long should you sleep after a night shift?",
        answer:
          "Aim for a solid morning block of 5–7 hours, plus a 90-minute top-up nap before your next shift if the block came up short. Chasing a full 8 in one daytime stretch usually fails; a planned two-block pattern is more reliable for most night workers.",
      },
      {
        question: "Why can't I sleep after a night shift even though I'm exhausted?",
        answer:
          "Usually it's the adrenaline comedown plus morning light exposure. High-vigilance work keeps stress chemistry elevated for hours, and daylight on the commute tells your body clock it's morning. A deliberate wind-down ritual, light-blocking on the way home and a fast route to a dark room fix most of it.",
      },
      {
        question: "Should prison officers and security staff nap before a night shift?",
        answer:
          "Yes, a 90-minute nap ending 2–3 hours before the shift is the single best preparation for high-vigilance night work. It cuts the 4am alertness trough, which is exactly when you least want slowed reactions on a landing.",
      },
    ],
  },
  {
    slug: "best-blackout-strategies-for-daytime-sleep",
    title: "The Best Blackout Strategies for Daytime Sleep, Ranked by 40 Years of Trial and Error",
    description:
      "Every blackout method for day sleepers ranked, side-channel blinds, layered curtains, films, masks and the cheap fixes, by someone who slept through four decades of daylight after military, prison and factory nights.",
    category: "Daytime Sleep Optimisation",
    categorySlug: "daytime-sleep-optimisation",
    datePublished: "2026-07-05",
    readMinutes: 6,
    quickAnswer:
      "The best blackout setup for daytime sleep is side-channel blackout blinds (blinds running in tracks that seal the window edges) combined with a door draught-excluder, costing from around £60 per window. Curtains alone fail because light leaks around edges, not through fabric; a contoured sleep mask is the best budget alternative.",
    blocks: [
      {
        type: "p",
        text: "Here's the mistake almost everyone makes first, because I made it too: buying 'blackout curtains' and wondering why the room still glows like a cinema at 10am. The answer is simple once you've seen it, light doesn't come through decent fabric, it comes around it. The top gap, the side gaps, the slit where the curtains meet. Your eyes adapt to darkness so well that those leaks might as well be spotlights. After forty years of sleeping through daylight (army, factories, prisons, breweries) I can rank every method that matters by what it actually does to a bright morning.",
      },
      { type: "h2", text: "The ranking, best to worst" },
      { type: "h3", text: "1. Side-channel blackout blinds: the gold standard" },
      {
        type: "p",
        text: "These are blackout blinds running inside aluminium tracks fixed to the window frame, so the fabric is sealed at both sides and the bottom. No edge leak, because there's no edge. They turned my bedroom from 'dim' to 'genuinely can't see my hand', and the difference between those two states is the difference between four broken hours and six solid ones. Expect from around £60–£120 per window for decent ones. If you sleep days regularly, this is the single highest-impact purchase available to you, and it's not close.",
      },
      { type: "h3", text: "2. Blackout blind + layered curtain: the strong second" },
      {
        type: "p",
        text: "A standard blackout roller blind mounted close to the glass, with heavy curtains over the top catching the edge spill. You're using the curtain for what it's actually good at (mopping up leaks) instead of asking it to do the whole job. This combination also takes the edge off low-frequency street noise, which matters more than people think; light and noise defences overlap at the window.",
      },
      { type: "h3", text: "3. The contoured sleep mask: best pound-for-pound" },
      {
        type: "p",
        text: "If you rent, travel, or the budget says no to blinds this month, a contoured mask (the kind with moulded eye cups rather than a flat strip) gets you 90% of the darkness for a tenner or two. The flat ones press on your eyelids, smear and shift when you side-sleep. Contoured cups don't. I kept one in my kit bag for decades; hotel curtains are a lottery and this is the insurance.",
      },
      { type: "h3", text: "4. Static blackout film: the renter's secret" },
      {
        type: "p",
        text: "Cling-film-style blackout sheeting applied to the glass. Zero drilling, landlord-proof, and it blacks out the pane completely. The catch: it's all-or-nothing (the room is dark at 6pm in December too) and it does nothing about the frame edges, so pair it with curtains. Brilliant for a box-room day-sleeping setup you don't need to look elegant.",
      },
      { type: "h3", text: "5. The foil-and-tape emergency rig" },
      {
        type: "p",
        text: "Kitchen foil, masking tape, ten minutes. Every shift worker has done it and it genuinely works, foil is a total light block. It also looks terrible, cooks the glass in summer, and peels at the corners within the week. Use it to prove to yourself how much darkness improves your sleep, then spend the money on option 1 or 4.",
      },
      { type: "h2", text: "The leaks everyone forgets" },
      {
        type: "ul",
        items: [
          "The door. A bright landing puts a light bar under the door right at eye level. A £8 draught excluder kills it and helps with noise.",
          "Standby LEDs. TVs, chargers, air purifiers, a dark-adapted eye reads each one like a beacon. A sheet of electrical tape dots the lot.",
          "Your phone. The 'quick check' at 11am is a full light dose plus a cognitive one. It charges outside the room. No exceptions that don't cost you sleep.",
          "Summer heat. Blackout without ventilation turns the room into an oven, and heat wrecks day sleep as surely as light. A fan is airflow and a noise floor in one, two defences, one plug.",
        ],
      },
      { type: "h2", text: "Match the spend to the rota" },
      {
        type: "p",
        text: "Permanent nights or long-term 4-on/4-off? Engineer the room properly: side-channel blinds, door seal, taped LEDs, fan. Occasional night blocks or rotating patterns? A contoured mask plus film in one room is the sensible middle. The test is always the same: at your normal wake-point, can you see your hand in front of your face? If yes, you've found your next job. Rate what your room does to your sleep with the Noise Calibration Tool and journal the difference a blackout upgrade makes, the before-and-after in your own numbers is what convinces people, not articles like this one.",
      },
    ],
    faqs: [
      {
        question: "What is the best blackout solution for shift workers?",
        answer:
          "Side-channel blackout blinds (blinds running in sealed tracks fixed to the window frame) are the most effective solution, eliminating edge leak entirely. Pair them with a door draught-excluder and taped-over standby LEDs for a genuinely dark room at any hour.",
      },
      {
        question: "Why do blackout curtains not work for daytime sleep?",
        answer:
          "Because daylight leaks around curtains (over the top, down the sides and through the centre gap) rather than through the fabric. Dark-adapted eyes perceive these edge leaks as very bright. Curtains work well as a second layer over a blind, not as the primary block.",
      },
      {
        question: "Are sleep masks good enough for sleeping during the day?",
        answer:
          "A contoured sleep mask with moulded eye cups is the best budget and travel option, delivering most of the benefit of a blacked-out room for under £20. Flat strip masks press on the eyes and shift during side-sleeping; contoured designs avoid both problems.",
      },
    ],
  },
  {
    slug: "brown-noise-vs-white-noise-for-daytime-disturbances",
    title: "Brown Noise vs White Noise for Daytime Disturbances: Which Actually Blocks Your Street?",
    description:
      "Brown noise beats white noise for traffic rumble; white wins on high-pitched spikes; pink splits the difference for voices. How to pick the right masking colour for daytime sleep, from a lifetime of sleeping through wide-awake streets.",
    category: "Noise & Disturbance Defence",
    categorySlug: "noise-disturbance-defence",
    datePublished: "2026-07-05",
    readMinutes: 6,
    quickAnswer:
      "For daytime sleep, brown noise is usually better than white noise: its energy sits in the same low frequencies as traffic rumble, engines and neighbour thuds, so it masks them at a comfortable volume. White noise is better against high-pitched sounds like birdsong and alarms, while pink noise is the best all-rounder against voices.",
    blocks: [
      {
        type: "p",
        text: "The short version, because you might be reading this at 8am with the bins being emptied outside: if your problem is traffic, engines, or the general low rumble of a street that's awake when you're not, choose brown noise. If your problem is birdsong, brake squeal or anything shrill, choose white. If it's voices (neighbours, kids, next door's telly) pink is your colour. Now the longer version, which explains why, and covers the mistakes that make people give up on masking before it's had a chance to work.",
      },
      { type: "h2", text: "What the colours actually mean" },
      {
        type: "p",
        text: "Noise colours describe where the energy sits across frequencies. White noise spreads equal energy across every frequency, which our ears (more sensitive up high) hear as hissy, like an untuned radio. Pink noise tilts the energy downward, equal per octave: softer, like steady rainfall. Brown noise tilts harder still, concentrating power in the low end: a deep rumble, like a waterfall heard through a wall or a plane cruising. No mysticism, just spectrum shape, but the shape is everything, because masking works best when the mask's energy sits in the same band as the intruder.",
      },
      { type: "h2", text: "Why masking beats blocking alone" },
      {
        type: "p",
        text: "Your brain doesn't wake you because the street is loud; it wakes you because something changed. A quiet room at 40dB into which a 70dB door slam arrives is a 30dB jump, the sleeping brain flags it and up you come. Run a steady 55dB brown-noise bed and the same slam is now a 15dB blip over the background. Under the threshold where the alarm system bothers. That's the whole trick: masking raises the floor so events stop standing out. You're not fighting the peaks; you're shrinking them relative to the background.",
      },
      { type: "quote", text: "You're not fighting the peaks; you're shrinking them relative to the background." },
      { type: "h2", text: "Match the colour to your street" },
      {
        type: "ul",
        items: [
          "Main road, buses, HGVs, engines idling: brown noise, no contest. Traffic energy is low-frequency and comes through walls; brown noise meets it in the same band at a comfortable volume.",
          "Birdsong at dawn, brake squeal, reversing beepers, alarms: white noise. Its high-frequency content covers shrill spikes that brown barely touches.",
          "Voices, television through the wall, kids in the street: pink noise. Speech lives in the mid band, and pink's balanced tilt blurs conversation into the background without white's harsh hiss.",
          "Unpredictable bangs, bins, deliveries, door slams: a brown base with a rain layer over it. The rain adds natural variability that stops your brain re-alerting to the masking itself, and the brown floor swallows the thud.",
        ],
      },
      { type: "h2", text: "The three mistakes that make people quit" },
      {
        type: "p",
        text: "First: playing it too loud. Masking is a floor, not a weapon, past about 60dB at the pillow you're trading one disturbance for another and your ears never relax. Second: choosing by name instead of by problem. Half the 'white noise doesn't work for me' posts describe a traffic problem that brown would have solved. Third: quitting after one night. A new sound texture takes three or four sleeps to become invisible, the same way a new fridge hum does. Give a colour a block of shifts before you judge it.",
      },
      { type: "h2", text: "Layer it like kit, not like a gadget" },
      {
        type: "p",
        text: "Forty years of noisy daytime streets taught me to think of sound defence in layers, same as cold-weather kit. Physical layer first: door draught-excluder, heavy curtains, moulded earplugs on the worst streets, every decibel stopped at the boundary is one the mask doesn't have to cover. Masking layer second: the right colour at a modest, steady volume, from a speaker or machine placed toward where the noise enters, not tight against your ear. The Sleyp player was built for exactly this, white, pink and brown beds, heavy rain, fan hums and custom blends you can tune to your street. And if you're not sure what your street's dominant problem even is, run the Noise Calibration Tool first: rate your four noise sources and it prescribes the colour, the volume strategy and the physical layer worth adding. Then log a block of shifts in the journal and let your own quality scores settle the brown-versus-white debate for your bedroom, on your street, against your bins.",
      },
    ],
    faqs: [
      {
        question: "Is brown noise or white noise better for sleeping during the day?",
        answer:
          "Brown noise is better for most daytime sleepers because daytime disturbance is dominated by low-frequency sound (traffic, engines, footsteps, thuds through walls) and brown noise concentrates its masking energy in that same low band. White noise wins only where the problem is high-pitched: birdsong, alarms and squeals.",
      },
      {
        question: "How loud should masking noise be for daytime sleep?",
        answer:
          "Around 50–60dB at the pillow, roughly quiet-conversation level. The goal is raising the background floor so interruptions stop standing out, not drowning them. Louder than ~60dB becomes its own disturbance and stops your hearing from relaxing.",
      },
      {
        question: "What is pink noise best for?",
        answer:
          "Voices and mid-frequency household noise, neighbours talking, TV through a wall, kids outside. Pink noise distributes equal energy per octave, giving strong coverage across the speech band with a softer, rain-like character that most people tolerate better than white noise.",
      },
      {
        question: "Do noise machines stop working if you use them every day?",
        answer:
          "No, the opposite. A consistent masking bed becomes part of your sleep routine's signal, like a familiar fridge hum, and most people mask more effectively after a week of nightly use than on day one. Expect three or four sleeps of adjustment when you change colour or texture.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
