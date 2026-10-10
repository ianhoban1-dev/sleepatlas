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
    "slug": "ideal-bedroom-temperature-for-sleep",
    "title": "Ideal Bedroom Temperature for Sleep (Even in a Summer Heatwave)",
    "description": "What is the ideal bedroom temperature for sleep? Why 16-18C is the target, why heat hits day sleepers hardest, and easy ways to cool a room without air-con.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-13",
    "readMinutes": 6,
    "quickAnswer": "The ideal bedroom temperature for sleep is around 16-18C, according to The Sleep Charity, and above 24C sleep tends to become restless. Day sleepers have it harder because we go to bed just as the house starts warming up. Shut the blinds on sunny windows early, run a fan, and switch to a low-tog duvet or a cotton sheet.",
    "blocks": [
      {
        "type": "h2",
        "text": "What is the ideal bedroom temperature for sleep?"
      },
      {
        "type": "p",
        "text": "[The Sleep Charity](https://thesleepcharity.org.uk/adults/sleep-environment/), a UK charity, puts the ideal bedroom temperature at around 16-18C (60-65F). It says temperatures over 24C (71F) are likely to cause restlessness, and a cold room of about 12C (53F) makes it difficult to drop off."
      },
      {
        "type": "p",
        "text": "Temperature matters more than most people think. A [2012 review in the Journal of Physiological Anthropology](https://doaj.org/article/7e71c8bd13f84f11b94aceb0fb27866d) called the thermal environment \"one of the most important factors that can affect human sleep\". With normal bedding and clothing, it found heat was the bigger disruptor: it increases time awake and cuts deep sleep and REM sleep, and humidity makes it worse."
      },
      {
        "type": "table",
        "head": [
          "Bedroom temperature",
          "What to expect",
          "What to do"
        ],
        "rows": [
          [
            "About 12C",
            "Hard to drop off (The Sleep Charity)",
            "Add a sheet or blanket rather than heating the room"
          ],
          [
            "16-18C",
            "The Sleep Charity's ideal range",
            "Normal bedding, room dark and quiet"
          ],
          [
            "19-23C",
            "Warmer than ideal; many people still sleep, but lighter bedding helps (Sleyp guidance)",
            "Lower-tog duvet, fan, light cotton nightwear"
          ],
          [
            "Over 24C",
            "Restlessness likely (The Sleep Charity)",
            "Full heatwave routine below"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Why does heat hit day sleepers hardest?"
      },
      {
        "type": "p",
        "text": "Normal sleepers go to bed as the day cools down. Night workers go to bed as it heats up. The sun is on the window by mid-morning, the house soaks up heat all afternoon, and a bedroom upstairs collects the warm air rising from below. You are trying to get your deepest sleep in the hottest part of the day."
      },
      {
        "type": "p",
        "text": "I've done my share of summer day sleeps after nights, and the bedroom could feel like an oven by mid-afternoon. I remember sleeping after a night patrol in Northern Ireland when I was in the Army in 1987, and the heat of the barracks room was never below 20C."
      },
      {
        "type": "p",
        "text": "Then there's the window problem. Open it for some air and you let the outside world in. You get into bed after a night shift and the neighbours decide to mow their lawns. Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. So day sleepers have to manage heat and noise at the same time."
      },
      {
        "type": "h2",
        "text": "How do you cool a bedroom without air-con?"
      },
      {
        "type": "p",
        "text": "You don't need air conditioning. Stop the heat getting in, let it out when the air is cooler, and keep air moving:"
      },
      {
        "type": "ol",
        "items": [
          "**Close the blinds and curtains early.** The [UK Health Security Agency](https://ukhsa.blog.gov.uk/2026/06/23/how-to-keep-cool-and-stay-well-during-hot-weather/) advises keeping windows and curtains closed in rooms that face the sun during the day. Do it before you leave for your shift or as soon as you get in. Blackout blinds help twice: they block the light and the warmth of the sun. If you're choosing between them, see our guide to [blackout blinds vs blackout curtains](/resources/blackout-blinds-vs-curtains/).",
          "**Let cool air in when it's cooler outside.** UKHSA suggests opening windows, if it is safe to, when the air feels cooler outside than inside, for example at night. For night workers that means the evening before your shift and the early morning when you get home, then closing up as the day warms.",
          "**Give the heat somewhere to go.** UKHSA advises getting air flowing through your home. The Sleep Charity suggests opening the loft hatch, because hot air rises and this gives it somewhere to go.",
          "**Run a fan, and add ice.** The Sleep Charity's trick is to put a tray of ice and a little water in front of the fan to cool the air even more. A fan also gives you a steady hum that covers sudden noises, which is why so many of us can't sleep without one. More on that in our post on [fan noise for sleeping](/resources/fan-noise-for-sleeping/).",
          "**Cool yourself, not just the room.** The Sleep Charity suggests drinking plenty of cold water in the evening and keeping a glass by the bed. It also suggests chilling socks in the fridge, because cooling your feet lowers the overall temperature of your skin and body."
        ]
      },
      {
        "type": "h2",
        "text": "What bedding and nightwear work best in the heat?"
      },
      {
        "type": "p",
        "text": "Lighter is better. The Sleep Charity recommends a lower-tog duvet or even a cotton sheet in hot weather, and light cotton nightwear to wick away sweat. On cooler days it suggests an extra layer of sheets or blankets instead."
      },
      {
        "type": "p",
        "text": "For day sleepers, layers beat one thick duvet. A cotton sheet plus a thin blanket lets you kick a layer off at 2pm when the room peaks, without fully waking up to swap the bedding."
      },
      {
        "type": "h2",
        "text": "What about winter, when the clocks go back?"
      },
      {
        "type": "p",
        "text": "The clocks go back on Sunday 25 October 2026. Darker mornings make the light side of daytime sleep easier, but the heating can make the bedroom too warm. If your central heating comes on during the day while you're asleep, turn the bedroom radiator down or set the timer around your sleep. It's better to add a blanket than heat the room past 18C. Just don't let it drop to around 12C, where The Sleep Charity says it becomes hard to drop off."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Aim for a bedroom around 16-18C, keep the sun out from early morning, move the air, and go light on bedding. Day sleepers fight heat and noise together, so plan for both. For the rest of the daytime routine, read our guide on [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/), and for deeper masking sounds see [brown noise for sleep](/resources/brown-noise-for-sleep/)."
      },
      {
        "type": "p",
        "text": "If the window has to stay shut, the free Sleyp player gives you fan hum without the fan, and you can layer it with brown noise or rain. All 13 sounds in the browser are free, along with the custom countdown timer. [Try Sleyp free](/session/). The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[The Sleep Charity: Sleep environment](https://thesleepcharity.org.uk/adults/sleep-environment/): ideal bedroom temperature 16-18C, restlessness over 24C, about 12C too cold; bedding, fan and cooling tips.",
          "[Okamoto-Mizuno and Mizuno (2012), Effects of thermal environment on sleep and circadian rhythm, Journal of Physiological Anthropology](https://doaj.org/article/7e71c8bd13f84f11b94aceb0fb27866d): with bedding and clothing, heat increases wakefulness and reduces deep and REM sleep; humidity adds to the effect.",
          "[UK Health Security Agency (June 2026): How to keep cool and stay well during hot weather](https://ukhsa.blog.gov.uk/2026/06/23/how-to-keep-cool-and-stay-well-during-hot-weather/): keep sun-facing windows and curtains closed by day; open windows when it's cooler outside; get air flowing."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is 20 degrees too hot to sleep?",
        "answer": "Not usually, but it's warmer than ideal. The Sleep Charity puts the ideal at 16-18C and says restlessness is likely over 24C. At 20C, most people sleep better with lighter bedding, light cotton nightwear and a fan."
      },
      {
        "question": "How can I cool my bedroom for daytime sleep?",
        "answer": "Close blinds and curtains on sunny windows before the sun reaches them, open windows when the air outside is cooler (early morning or the evening before your shift), get air moving with a fan, and use a low-tog duvet or cotton sheet."
      },
      {
        "question": "Does a fan help you sleep in the heat?",
        "answer": "Yes, for most people. It moves air across your skin and gives a steady hum that covers sudden noises. The Sleep Charity suggests a tray of ice and a little water in front of the fan to cool the air further."
      },
      {
        "question": "Should I sleep with the window open during the day?",
        "answer": "Open it while the air outside is cooler than inside, then close it as the day warms up, as UKHSA advises for sun-facing rooms. If outside noise keeps waking you, keep it shut and rely on blinds, a fan and a masking sound."
      },
      {
        "question": "What temperature is too cold to sleep?",
        "answer": "The Sleep Charity says a cold room of about 12C makes it difficult to drop off. Add a sheet or blanket rather than heating the bedroom."
      },
      {
        "question": "What should I wear to bed in a heatwave?",
        "answer": "Light cotton nightwear, which The Sleep Charity says helps wick away sweat. Pair it with a cotton sheet or low-tog duvet you can push off as the room warms."
      }
    ]
  },
  {
    "slug": "best-sleep-mask",
    "title": "Best Sleep Mask for Day Sleepers (and Why the Science Backs Them)",
    "description": "Do sleep masks actually work? What a Cardiff University study found, and how night-shift workers can choose a mask for total darkness during the day.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-12",
    "readMinutes": 7,
    "quickAnswer": "A sleep mask is the cheapest way to get full darkness for daytime sleep. A 2023 Cardiff University study found people who wore an eye mask for a week showed better learning and alertness than in a week when light reached their eyes. For day sleepers, choose a contoured, total-blackout mask that doesn't press on your eyes.",
    "blocks": [
      {
        "type": "p",
        "text": "I've spent 40 years working shifts: The King's Regiment, Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, then Budweiser UK. Getting into bed when everyone else is leaving the house for school and work sounds fine, until you realise it is broad daylight and every gap round the curtains is a searchlight. Blackout blinds help, but the one bit of kit I would never go to bed without after nights is a decent eye mask."
      },
      {
        "type": "p",
        "text": "I was always sceptical about wearing a sleep mask, but the evidence from trials and data suggests strongly that they are a great way to help you sleep."
      },
      {
        "type": "p",
        "text": "This guide covers what the research says, what to look for, which type of mask suits which sleeper, and how to pair a mask with earplugs and sound."
      },
      {
        "type": "h2",
        "text": "Do sleep masks actually work?"
      },
      {
        "type": "p",
        "text": "Yes, and there is good UK evidence for it. Researchers at Cardiff University ran two experiments, published in the journal SLEEP in 2023."
      },
      {
        "type": "ol",
        "items": [
          "In the first, 94 adults aged 18-35 wore an eye mask every night for a week, then spent a control week where light was not blocked. With the mask, they did better at learning new information (episodic encoding) and showed improved alertness.",
          "In the second, 35 adults wore a sleep-monitoring device with and without the mask. The learning benefit showed up again, and it was predicted by the time they spent in slow wave (deep) sleep."
        ]
      },
      {
        "type": "p",
        "text": "Those volunteers were sleeping at night, in normal bedrooms. If blocking the small amount of light in a bedroom at night makes a measurable difference, think how much more light reaches a day sleeper at 10am in June. That's why I rate a mask as the first thing to buy, not an extra."
      },
      {
        "type": "h2",
        "text": "Why does light matter more when you sleep in the day?"
      },
      {
        "type": "p",
        "text": "Because there is far more of it, and it gets in everywhere. A 2022 Northwestern Medicine study compared one night of sleep in moderate room light (100 lux) with dim light (3 lux). In the moderately lit room, heart rate rose during sleep and insulin resistance appeared the next morning. The researchers' own advice: blackout shades or eye masks are good if you can't control the outdoor light."
      },
      {
        "type": "p",
        "text": "A day sleeper can't control the outdoor light. The sun is up, the landing light is on, and the gap at the top of the curtain throws a stripe across the pillow. A mask is the one piece of blackout you carry on your face, so it works in a bedroom, a hotel, a mess room or the back of a car on a break."
      },
      {
        "type": "p",
        "text": "It's worth knowing that UK clocks go back on Sunday 25 October 2026. Sunrise jumps an hour earlier on the clock, so for a few weeks the drive home after nights is lighter than you're used to, and your bedroom is brighter when you get in. It's a good time to sort your mask out."
      },
      {
        "type": "h2",
        "text": "What should you look for in a sleep mask for day sleeping?"
      },
      {
        "type": "p",
        "text": "These are the five things that matter after a night shift, in order of importance."
      },
      {
        "type": "table",
        "head": [
          "Feature",
          "Why it matters for day sleep",
          "What to look for"
        ],
        "rows": [
          [
            "Total blackout",
            "Daylight leaks in round the nose and cheeks of flat masks",
            "A nose flap or moulded nose bridge; no light when you open your eyes in a bright room"
          ],
          [
            "Contoured eye cups",
            "Pressure on the eyelids gets uncomfortable over a 6-8 hour sleep",
            "Deep 3D cups that sit off the eyes"
          ],
          [
            "Strap",
            "A tight elastic strap gives headaches and slips when you turn",
            "Wide, adjustable strap; Velcro that doesn't catch your hair"
          ],
          [
            "Side-sleeper profile",
            "Bulky masks get pushed up your face by the pillow",
            "Thin edges at the temples"
          ],
          [
            "Material",
            "Hot rooms in summer make foam masks sweaty",
            "Breathable cotton or silk for warm days; washable cover"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The quick test: put it on in your brightest room at midday and open your eyes. If you can see any light at all, keep looking."
      },
      {
        "type": "h2",
        "text": "Which type of sleep mask is best for shift workers?"
      },
      {
        "type": "p",
        "text": "There is no single best mask, only the best one for how you sleep. Here are the main types."
      },
      {
        "type": "table",
        "head": [
          "Type",
          "Best for",
          "Downsides"
        ],
        "rows": [
          [
            "Contoured (3D) blackout mask",
            "Most day sleepers; anyone who hates pressure on the eyes",
            "Bulkier for side sleepers"
          ],
          [
            "Flat silk mask",
            "Hot summer days; sensitive skin",
            "Often leaks light at the nose"
          ],
          [
            "Foam or cotton wraparound",
            "Side sleepers who want full coverage",
            "Can get warm"
          ],
          [
            "Weighted mask",
            "People who like gentle, even pressure",
            "Heavier; pressure on the eyes isn't for everyone"
          ],
          [
            "Mask with built-in headphones",
            "Playing a masking sound without earbuds",
            "Needs charging; thicker over the ears"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Not that long ago, whilst at Budweiser on my night shifts, I used a mask with built-in headphones to try them out. The headphones were great with my noise masking app and the mask really did keep the light out."
      },
      {
        "type": "h2",
        "text": "Should you use a sleep mask and blackout blinds together?"
      },
      {
        "type": "p",
        "text": "Yes. Think of it as layers. Blackout blinds and curtains bring the whole room down to dim, which helps when you get up for the toilet or the door goes. The mask then handles whatever still leaks in round the edges. I cover the room side in [Blackout Blinds vs Blackout Curtains](/resources/blackout-blinds-vs-curtains/), and the full routine in [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/)."
      },
      {
        "type": "p",
        "text": "If you rent or you're on a budget, the mask comes first. It costs a fraction of a fitted blind and works anywhere."
      },
      {
        "type": "h2",
        "text": "How do you wear a sleep mask with earplugs?"
      },
      {
        "type": "p",
        "text": "Darkness is only half the problem. Even on a quiet street, cars and kids playing out can keep you wide awake, and nothing wakes you faster than the neighbours deciding to mow their lawns at 11am."
      },
      {
        "type": "ol",
        "items": [
          "Put your earplugs in first and seat them properly.",
          "Put the mask on so the strap sits above your ears, not across them. A strap pressing on an earplug gets sore fast.",
          "Choose a low-profile mask and low-profile plugs if you sleep on your side.",
          "Add a steady masking sound to cover the gaps the plugs leave, such as [brown noise](/resources/brown-noise-for-sleep/) or rain."
        ]
      },
      {
        "type": "p",
        "text": "My guide to [sleeping with earplugs](/resources/earplugs-for-sleeping/) covers fit and noise ratings in detail."
      },
      {
        "type": "h2",
        "text": "How do you get used to sleeping in a sleep mask?"
      },
      {
        "type": "p",
        "text": "Most people who say they can't sleep in a mask have tried a tight, flat one. Give a contoured mask a week before you judge it."
      },
      {
        "type": "ul",
        "items": [
          "Loosen the strap until it only just stays on.",
          "Wear it for 10 minutes while you wind down, before you try to sleep.",
          "Keep a spare by the bed, because masks go missing in the duvet.",
          "Wash it or the cover regularly, following the label. Your face, sweat and skin cream all end up on it.",
          "If it ends up on the floor every morning, try a wraparound style or a wider strap."
        ]
      },
      {
        "type": "p",
        "text": "The Cardiff researchers linked the mask's benefit to deep sleep, which comes mostly in the first part of your sleep. So the mask matters most in those first few hours after you get in from a shift. (More on this in How Much Deep Sleep Do You Need?, coming soon.)"
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "A good contoured sleep mask is the cheapest, most portable way to sleep in full darkness after nights, and the research backs it. Pair it with blackout blinds for the room and earplugs plus a steady sound for the noise half of the problem. Coming soon on this blog: Ideal Bedroom Temperature for Sleep, because a hot room in a heatwave is the next thing that will wake you up."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/): play brown noise, rain or fan hum in your browser, set a custom timer and a gentle wake-up chime, and save your mix in this browser. All 13 sounds are free (keep the page open for the timer and chime to run). The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Greenfield et al. (2023), Cardiff University: Wearing an eye mask during overnight sleep improves episodic learning and alertness, SLEEP (Cardiff ORCA record)](https://orca.cardiff.ac.uk/id/eprint/155060/)",
          "[Northwestern Medicine (2022): Light exposure during sleep impairs cardiometabolic function, PNAS (ScienceDaily release)](https://www.sciencedaily.com/releases/2022/03/220314154355.htm)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is it good to sleep with an eye mask every day?",
        "answer": "For most people, yes. The Cardiff study had volunteers wear a mask every night for a week and found better learning and alertness. Choose a mask that doesn't press on your eyes, and keep it clean."
      },
      {
        "question": "Contoured or flat sleep mask: which is better?",
        "answer": "For day sleepers, contoured. The cups sit off your eyelids and the moulded shape blocks more light round the nose. Flat silk masks are cooler on hot days but often leak light."
      },
      {
        "question": "Do sleep masks help after night shifts?",
        "answer": "Yes. After a night shift you are sleeping while the sun is up, so far more light reaches your eyes than at night. A mask gives you total darkness without having to black out the whole room."
      },
      {
        "question": "Can I wear a sleep mask if I sleep on my side?",
        "answer": "Yes. Pick one with a thin profile at the temples and a soft, wide strap, so the pillow doesn't push it up your face."
      },
      {
        "question": "Is a sleep mask better than blackout blinds?",
        "answer": "They do different jobs. Blinds darken the room; a mask blocks what still gets through. Use both if you can. If you can only afford one, start with the mask."
      },
      {
        "question": "Should I wear a mask with earplugs?",
        "answer": "If daytime noise wakes you, yes. Put the earplugs in first, keep the strap above your ears, and add a steady masking sound for drilling and mowers."
      }
    ]
  },
  {
    "slug": "blackout-blinds-vs-curtains",
    "title": "Blackout Blinds vs Blackout Curtains: Which Is Best for Daytime Sleep?",
    "description": "Blackout blinds or curtains for sleeping in the day? What blocks the most light, how to stop light leaks, and no-drill options for renters who work nights.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-11",
    "readMinutes": 8,
    "quickAnswer": "For daytime sleep, a blackout blind fitted inside the window recess blocks more light than curtains, which leak at the top and sides. The best setup is both: a blackout blind with blackout curtains over it, or a blind with side channels. A 2022 study found that even moderate room light during sleep raised heart rate.",
    "blocks": [
      {
        "type": "p",
        "text": "Getting into bed when everyone else is leaving the house for school and work sounds like a perk. Then you pull the curtains, lie down, and the room is still glowing orange. In summer it is worse: you get home at 7am into full sun, and the light pours round every edge of the window."
      },
      {
        "type": "p",
        "text": "I have slept through the day after nights for most of 40 years, from the barracks with The King's Regiment to night shifts at Strangeways, Walton and Guys Marsh, and later at Jacobs Biscuits and Budweiser UK. Darkness is the cheapest win you can get, and it is the one most people only half do. In the early years, especially in the Army, I would be sleeping in dormitories with other soldiers, so blacking out the windows was not possible. Later on at Budweiser, blacked-out curtains were essential in helping me get to sleep after a night shift."
      },
      {
        "type": "p",
        "text": "If you are new to sleeping in the day, start with the full guide on [how to sleep during the day](/resources/how-to-sleep-during-the-day/). This post goes deep on one part of it: getting the room properly dark."
      },
      {
        "type": "h2",
        "text": "Which is better for daytime sleep: blackout blinds or blackout curtains?"
      },
      {
        "type": "p",
        "text": "A blackout blind is better on its own, because it sits close to the glass and leaves smaller gaps. Blackout curtains are better at covering the edges, because they can be wider and taller than the window. Used together, they beat either one alone."
      },
      {
        "type": "ul",
        "items": [
          "**Best overall:** a blackout roller blind inside the recess, with blackout curtains on a track or pole above it.",
          "**Best single option:** a blackout blind with side channels, which close the gaps down each side.",
          "**Best on a budget:** blackout curtains (or blackout linings on your existing curtains) hung well past the window, plus a sleep mask.",
          "**Best for renters:** a suction-cup travel blind or static window film, with no drilling."
        ]
      },
      {
        "type": "h2",
        "text": "Why does light matter when you sleep in the day?"
      },
      {
        "type": "p",
        "text": "Light is one of the main signals your body clock uses to tell day from night, and daytime sleepers are trying to sleep while that signal is at full strength."
      },
      {
        "type": "p",
        "text": "In a 2022 Northwestern University study published in PNAS, volunteers spent one night sleeping in moderate room light (100 lux) and compared it with a night in dim light (3 lux). One night in the brighter room raised their heart rate during sleep and left them with higher insulin resistance the next morning, a marker of how well the body handles blood sugar. The researchers' practical advice was to keep the room dark, using blackout shades or an eye mask ([Northwestern University, 2022](https://news.northwestern.edu/stories/2022/03/close-the-blinds-during-sleep-to-protect-your-health))."
      },
      {
        "type": "p",
        "text": "That matches the UK regulator. The Health and Safety Executive's tips for shift workers recommend heavy curtains, blackout blinds or eye shades to keep the bedroom dark ([HSE](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)). The Sleep Charity gives a simple test: your bedroom should be dark enough that you cannot see across it ([The Sleep Charity](https://thesleepcharity.org.uk/information-support/adults/sleep-environment/)). At 10am in June, most bedrooms fail that test badly."
      },
      {
        "type": "h2",
        "text": "How do blackout blinds, curtains, film and travel blinds compare?"
      },
      {
        "type": "table",
        "head": [
          "Option",
          "How dark it gets",
          "Where light leaks",
          "Drilling?",
          "Best for"
        ],
        "rows": [
          [
            "Blackout roller blind (inside recess)",
            "Very dark",
            "Thin strips down the sides and at the top",
            "Yes",
            "Most bedrooms, the main layer"
          ],
          [
            "Blackout blind with side channels",
            "Darkest single option",
            "Very little",
            "Yes",
            "Night workers who want one fix"
          ],
          [
            "Blackout curtains",
            "Dark if oversized",
            "Top, sides and the middle join",
            "Yes (pole or track)",
            "Covering edges; pairing with a blind"
          ],
          [
            "Static or adhesive blackout film",
            "Dark on the glass only",
            "Frame and edges",
            "No",
            "Renters, odd-shaped windows"
          ],
          [
            "Suction-cup travel blind",
            "Dark if cut to fit",
            "Edges if not trimmed",
            "No",
            "Renters, travel, hotel rooms"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The pattern is clear: no single product is perfect, because light always finds the edges. That is why the layered setup wins."
      },
      {
        "type": "h2",
        "text": "How do you stop light leaking round the edges?"
      },
      {
        "type": "p",
        "text": "Most \"blackout\" rooms leak light, not through the fabric, but round it. Work through these in order:"
      },
      {
        "type": "ol",
        "items": [
          "**Fit the blind inside the recess**, as close to the glass as the handles allow. Measure the recess in three places and use the smallest width.",
          "**Close the side gaps.** Side channels are the neatest fix. A cheaper option is a strip of blackout fabric or draught-excluder tape down each side of the frame.",
          "**Oversize the curtains.** A good rule of thumb is curtains that reach well past each side of the window and sit above the top of the frame, so they overlap the wall.",
          "**Block the top.** Light spills over a curtain pole. A ceiling-fixed track, a pelmet or a curtain that tucks up to the ceiling stops it.",
          "**Close the middle.** Overlap the two curtains, or use a magnetic or clip closure where they meet.",
          "**Check the door and the gadgets.** Light under the bedroom door and standby LEDs on chargers, TVs and alarm clocks add up. A draught excluder and a bit of tape deal with both.",
          "**Back it up with a mask.** Even a good room leaks a little. A [sleep mask](/resources/best-sleep-mask/) covers whatever is left."
        ]
      },
      {
        "type": "p",
        "text": "Do the test once the room is set up: lie in bed at midday with the lights off for two minutes and look for any bright line. Every one you can see is worth fixing. For a ranked look at every method, see my guide to the [best blackout strategies for daytime sleep](/resources/best-blackout-strategies-for-daytime-sleep/)."
      },
      {
        "type": "h2",
        "text": "What are the best no-drill blackout options for renters?"
      },
      {
        "type": "p",
        "text": "If you rent, or you are staying away for a block of shifts, you can still get a room properly dark:"
      },
      {
        "type": "ul",
        "items": [
          "**Suction-cup travel blinds** stick straight onto the glass and can be trimmed to fit. They pack small, which helps if you work away.",
          "**Static cling or removable adhesive film** goes on the glass and peels off when you move out.",
          "**Tension rods** fit inside the recess with no screws and can hold a blackout curtain or a cut piece of blackout fabric.",
          "**Hook-and-loop strips** on the frame let you fix a sheet of blackout fabric over the whole window and pull it off in seconds.",
          "**Kitchen foil** works as a last resort, but it can trap heat against the glass and looks grim from the street. Check your tenancy before you stick anything to the frame."
        ]
      },
      {
        "type": "p",
        "text": "I tried a quick fix in the Army by covering the windows with a large blanket, but that is not ideal and only a temporary fix. If you need to sleep in total darkness, investing in getting this right will have huge benefits for your sleep."
      },
      {
        "type": "h2",
        "text": "Do blackout blinds help in a summer heatwave and when the clocks change?"
      },
      {
        "type": "p",
        "text": "They help with both. Closing blinds and curtains before the sun hits the window keeps the room darker and stops it warming up as quickly. A light-coloured or thermal-backed blind facing the glass helps more than a dark one. There is more on keeping cool in my guide to the [ideal bedroom temperature for sleep](/resources/ideal-bedroom-temperature-for-sleep/)."
      },
      {
        "type": "p",
        "text": "The clocks also go back on Sunday 25 October 2026. After that, sunrise comes an hour earlier by the clock, so the drive home after nights and your first hours in bed happen in brighter light than the week before. If your room only just got away with it in late October, check it again that week."
      },
      {
        "type": "h2",
        "text": "Dark room, steady sound: the other half of the job"
      },
      {
        "type": "p",
        "text": "A dark room does nothing about the neighbour's drill or the bin lorry. Blackout deals with light; your ears need their own defence. Pair your blinds with good [earplugs for sleeping](/resources/earplugs-for-sleeping/) and a steady masking sound such as [brown noise for sleep](/resources/brown-noise-for-sleep/), so sudden noises do not stand out against silence."
      },
      {
        "type": "p",
        "text": "If neighbour noise is the real problem, the guide to [noisy neighbours when you sleep in the day](/resources/noisy-neighbours-daytime-sleep/) covers your options in the UK."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Curtains alone are not enough for daytime sleep. Fit a blackout blind inside the recess, hang oversized blackout curtains over it, close the gaps at the sides and top, and keep a [sleep mask](/resources/best-sleep-mask/) for whatever still gets through. Then deal with the noise half of the problem."
      },
      {
        "type": "p",
        "text": "**Dark room, steady sound.** Once the room is dark, start a steady masking sound as you get into bed. [Try Sleyp free](/session/): 13 sounds, a custom timer and a wake-up chime, all free in your browser, and you can save your mix in this browser for next time (keep the page open for the timer and chime to run). The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Northwestern University (2022): Close the blinds during sleep to protect your health (PNAS study on light during sleep)](https://news.northwestern.edu/stories/2022/03/close-the-blinds-during-sleep-to-protect-your-health)",
          "[Health and Safety Executive: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[The Sleep Charity: Sleep environment](https://thesleepcharity.org.uk/information-support/adults/sleep-environment/)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Do blackout curtains block 100% of light?",
        "answer": "The fabric itself can block almost all light, but the room rarely goes fully dark, because light gets round the top, the sides and the gap in the middle. Oversized curtains on a ceiling track, or curtains over a blackout blind, get you much closer to total darkness."
      },
      {
        "question": "Are blackout blinds worth it for night shift workers?",
        "answer": "Yes. If you sleep in the day, a blackout blind is one of the most useful things you can buy for the bedroom. HSE recommends blackout blinds, heavy curtains or eye shades for shift workers, and a 2022 study found even moderate room light during sleep raised heart rate."
      },
      {
        "question": "What's the cheapest way to black out a bedroom?",
        "answer": "A sleep mask is the cheapest way to get darkness, because it blocks light at your eyes rather than at the window. For the room itself, blackout linings clipped to your existing curtains, or a trimmed suction-cup travel blind, cost little and need no drilling."
      },
      {
        "question": "Blackout blinds or curtains: which is better for a bedroom?",
        "answer": "A blind fitted inside the recess blocks more light on its own; curtains are better at covering the edges. For daytime sleep, use both together, or choose a blind with side channels if you only want one fix."
      },
      {
        "question": "Should I wear a sleep mask as well as having blackout blinds?",
        "answer": "It helps. Even a well blacked-out room leaks a little light round the edges and under the door. A mask covers what is left, and it goes with you if you stay away for work."
      },
      {
        "question": "Do blackout blinds keep a room cooler?",
        "answer": "They can help. Closing a blind before the sun reaches the window slows down how fast the room heats up, and a light-coloured or thermal-backed blind works better than a dark one. Pair it with a fan on hot days."
      }
    ]
  },
  {
    "slug": "how-to-sleep-during-the-day",
    "title": "How to Sleep During the Day After a Night Shift: The Complete Guide",
    "description": "How to sleep during the day after a night shift: darkness, noise, temperature, caffeine and timing, from someone who worked nights for 40 years.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-10",
    "readMinutes": 14,
    "quickAnswer": "To sleep well during the day after a night shift, go to bed as soon as you get home, make the room fully dark, cool and quiet, block sudden noise with earplugs and a steady masking sound, stop caffeine at least six hours before bed, and protect a 7-8 hour sleep window every day.",
    "blocks": [
      {
        "type": "p",
        "text": "I've worked shifts for 40 years: The King's Regiment from 1986 to 1989, Jacobs Biscuits, night shifts in HM Prison Service at Strangeways, Walton and Guys Marsh, and Budweiser UK. Getting into bed when everyone else is leaving the house for school and work sounds great. Then next door decides to renovate and starts drilling. This guide is everything I've learned about daytime sleep, checked against what the UK's Health and Safety Executive (HSE) advises."
      },
      {
        "type": "p",
        "text": "You're far from alone. [TUC analysis of ONS figures](https://www.tuc.org.uk/news/number-people-working-night-shifts-more-150000-5-years) found 3,138,000 people, 11.5% of employees in Britain, worked nights in 2018, up 151,000 since 2013. Most of us were never shown how to sleep in the day. We just worked it out, badly, over years."
      },
      {
        "type": "h2",
        "text": "How do you sleep during the day after a night shift? (The checklist)"
      },
      {
        "type": "p",
        "text": "Here is the whole routine in nine steps. Every section below explains one of them."
      },
      {
        "type": "ol",
        "items": [
          "**Wind down on the way home.** If you're a passenger or on public transport, sunglasses keep bright morning light off your eyes.",
          "**Go to bed within an hour of getting home.** Don't start the washing, the emails or the TV.",
          "**Make it dark.** HSE suggests heavy curtains, blackout blinds or eye shades.",
          "**Make it quiet.** Earplugs for the peaks, a steady masking sound for the gaps, and a word with the neighbours about your work pattern.",
          "**Keep it cool.** Aim for around 16-18C.",
          "**Stop caffeine at least six hours before bed.** For an 8am bedtime, that means nothing after about 2am.",
          "**Skip the after-shift drink** on work days.",
          "**Protect 7-8 hours.** HSE says most adults need 7-8 hours of sleep a day, and night workers are no different.",
          "**Put your phone and family on side.** Do not disturb on, doorbell covered, everyone knows your hours."
        ]
      },
      {
        "type": "h2",
        "text": "Why is sleeping in the day so much harder?"
      },
      {
        "type": "p",
        "text": "Your body clock is set by light. When you get into bed at 8am, everything around you is telling it to be awake: the room is brighter, the house is warmer and the street is at its busiest."
      },
      {
        "type": "p",
        "text": "Then there's the noise. Nights are quiet because everyone else is asleep. Days are not. Bin lorries, deliveries, the school run, and in summer the neighbours decide to mow their lawns just as you've dropped off. Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep."
      },
      {
        "type": "p",
        "text": "So daytime sleep isn't harder because you're doing it wrong. It's harder because you're sleeping against the clock and against the world. The fix is to change the room, not to try harder."
      },
      {
        "type": "h2",
        "text": "What has 40 years of daytime sleep taught me?"
      },
      {
        "type": "p",
        "text": "Sleeping in the day isn't new to me. In the Army you'd finish your stag in the middle of the night, couldn't get back to sleep, and the next day still had to be worked. On prison night shifts at Strangeways, and later on nights at Budweiser, the pattern was the same: the shift ends, but your head doesn't. I've also written a separate guide on how to [sleep after a prison night shift](/resources/how-to-sleep-after-a-prison-night-shift/)."
      },
      {
        "type": "p",
        "text": "What I learned slowly is that you can't rely on being tired enough. Tired people still wake up to drills, sunshine and doorbells. You have to build the conditions for sleep every single time, the same way you'd sort your kit before a shift."
      },
      {
        "type": "h2",
        "text": "What should you do on the drive home and in the first hour?"
      },
      {
        "type": "p",
        "text": "The first hour after a night shift decides how well you sleep. Treat it as part of the routine, not as free time."
      },
      {
        "type": "p",
        "text": "**Getting home safely.** HSE's [hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) suggest considering public transport or a taxi rather than driving, and stopping to take a short nap, if it is safe to do so, if you feel sleepy at the wheel. If your eyes are heavy, pull over somewhere safe. We'll cover this properly in our upcoming guide to microsleep and the drive home after a night shift."
      },
      {
        "type": "p",
        "text": "**The first hour.** Have a light snack rather than a full cooked breakfast (HSE recommends light, regular meals over one heavy meal). Have a quick wash, close the blinds, and get into bed. The longer you stay up, the more your body clock thinks the day has started."
      },
      {
        "type": "p",
        "text": "Here's an example timeline for a shift that finishes at 7am:"
      },
      {
        "type": "table",
        "head": [
          "Time",
          "What to do"
        ],
        "rows": [
          [
            "02:00",
            "Last caffeine of the shift"
          ],
          [
            "07:00",
            "Shift ends; sunglasses on if you're not driving"
          ],
          [
            "07:30",
            "Home: light snack, water, quick wash"
          ],
          [
            "08:00",
            "In bed: room dark, phone on do not disturb, masking sound on"
          ],
          [
            "15:00-16:00",
            "Wake after 7-8 hours; daylight, food, then family time"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**From my own experience, my routine was no caffeine after 1am, and the drive home was always the tough part.** I had a 40 minute drive home after a 12 hour night shift, and that is brutal and dangerous. I'd have the music up, the window down and the air con on, but that only helps briefly, so if you're struggling, stop somewhere safe and nap. My routine was far from standard, but once home, noise masking was always my go-to. That's why I built Sleyp: it's everything I wanted in a noise masking app and couldn't find."
      },
      {
        "type": "h2",
        "text": "How do you make a bedroom dark enough for daytime sleep?"
      },
      {
        "type": "p",
        "text": "Make it so dark you can't see across the room. That's the test [The Sleep Charity](https://thesleepcharity.org.uk/information-support/adults/sleep-environment/) uses, and it's a good one for day sleepers."
      },
      {
        "type": "p",
        "text": "Light matters even when you're asleep. In a [2022 Northwestern University study](https://news.northwestern.edu/stories/2022/03/close-the-blinds-during-sleep-to-protect-your-health), one night sleeping with moderate room light (100 lux) instead of near-darkness (3 lux) raised people's heart rate during sleep and their insulin resistance the next morning. The researchers' advice was simple: blackout shades or an eye mask. For anyone sleeping through a sunny afternoon, that's the whole problem in one study."
      },
      {
        "type": "table",
        "head": [
          "Fix",
          "How much light it stops",
          "Best for"
        ],
        "rows": [
          [
            "Blackout blind fitted inside the window recess",
            "Most of it; some leaks at the edges",
            "Your own home, permanent fix"
          ],
          [
            "Blackout curtains",
            "A lot, but light gets round the top and sides",
            "Adding to a blind, or renters"
          ],
          [
            "Blind and curtains together",
            "The most",
            "The full daytime setup"
          ],
          [
            "Temporary or travel blackout blind",
            "Good, if it fits well",
            "Renters, spare rooms, hotels"
          ],
          [
            "Eye mask",
            "Near-total, whatever the room",
            "Backup, or rooms you can't change"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Hunt down the light leaks.** Check the gap above the curtain pole, the sides of the blind, the gap under the door and the standby lights on chargers and TVs. I'd drape a piece of clothing over any standby lights, use blackout curtains and close the door fully."
      },
      {
        "type": "p",
        "text": "**Watch the calendar.** UK clocks go back on Sunday 25 October 2026, so sunrise moves an hour earlier on the clock. If you finish at 7am, the drive home will be back in daylight, which makes those sunglasses and a properly dark bedroom matter even more."
      },
      {
        "type": "p",
        "text": "If you've ever worked nights when the clocks go back, you'll know that 2am going back to 1am is the worst feeling ever. Now it's a 13 hour night shift, and that's brutal on every level."
      },
      {
        "type": "p",
        "text": "For more on the light side, see my guide to the [best blackout strategies for daytime sleep](/resources/best-blackout-strategies-for-daytime-sleep/). My guide to [blackout blinds vs blackout curtains](/resources/blackout-blinds-vs-curtains/) covers the choice in detail, and my guide to the [best sleep mask for day sleepers](/resources/best-sleep-mask/) covers masks."
      },
      {
        "type": "h2",
        "text": "How do you block out noise when you sleep in the day?"
      },
      {
        "type": "p",
        "text": "Use layers: earplugs to cut the loud peaks, a steady sound to fill the gaps so sudden noises don't stand out, and a word with the neighbours."
      },
      {
        "type": "p",
        "text": "The [World Health Organization's noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise) recommends bedrooms stay under 30 dB(A) at night for good sleep, and it names shift workers as a group especially sensitive to noise. A busy daytime street is nowhere near that, which is why one layer is rarely enough."
      },
      {
        "type": "p",
        "text": "**Layer 1: earplugs.** Foam or silicone plugs cut the loudest sounds. Our guide to [sleeping with earplugs](/resources/earplugs-for-sleeping/) covers fit, SNR ratings and wearing them every day."
      },
      {
        "type": "p",
        "text": "**Layer 2: a masking sound.** A steady sound such as brown noise, rain or a fan hum makes the drill next door or a slammed car door less of a jolt. Many day sleepers prefer deeper sounds; our guide to [brown noise for sleep](/resources/brown-noise-for-sleep/) explains the noise colours, and [fan noise for sleeping](/resources/fan-noise-for-sleeping/) covers the classic fan hum."
      },
      {
        "type": "p",
        "text": "**Layer 3: the neighbours.** HSE suggests discussing your work pattern with close neighbours and asking them to avoid noisy activities during your sleep time. Most people are decent about it once they know. If that doesn't work, our guide to [noisy neighbours when you sleep in the day](/resources/noisy-neighbours-daytime-sleep/) explains your options in the UK."
      },
      {
        "type": "p",
        "text": "The [free Sleyp player](/session/) gives you 13 sounds in your browser, including brown noise, rain and fan hum, with a free custom timer and wake-up chime. Keep the page open while you sleep, as the timer and chime need it to run."
      },
      {
        "type": "h2",
        "text": "What temperature should your bedroom be for daytime sleep?"
      },
      {
        "type": "p",
        "text": "Around 16-18C. [The Sleep Charity](https://thesleepcharity.org.uk/information-support/adults/sleep-environment/) puts the ideal bedroom temperature in that range and says temperatures above 24C make sleep restless."
      },
      {
        "type": "p",
        "text": "Day sleepers have it hardest here, because you're in bed through the warmest part of the day. A few things help:"
      },
      {
        "type": "ul",
        "items": [
          "**Close the blinds before you leave for your shift** on sunny days, so the room doesn't bake while you're out.",
          "**Open a window at night, close it in the morning** if the street is quiet enough, then let the blackout setup hold the cool air in.",
          "**Use a fan.** It cools you and gives you a steady sound at the same time.",
          "**Use light bedding** and keep a thinner duvet for summer."
        ]
      },
      {
        "type": "p",
        "text": "My guide to the [ideal bedroom temperature for sleep](/resources/ideal-bedroom-temperature-for-sleep/) goes deeper on heatwaves."
      },
      {
        "type": "h2",
        "text": "When should you stop caffeine and alcohol before daytime sleep?"
      },
      {
        "type": "p",
        "text": "Stop caffeine at least six hours before you plan to sleep, and keep alcohol for your days off."
      },
      {
        "type": "p",
        "text": "**Caffeine.** In a [2013 study in the Journal of Clinical Sleep Medicine](https://jcsm.aasm.org/doi/abs/10.5664/jcsm.3170), 400 mg of caffeine taken six hours before bed still cut total sleep by more than an hour, and the people taking it didn't notice. That's the trap: you feel fine, you just sleep less. For a night worker going to bed at 8am, a six-hour cut-off means your last coffee or energy drink is around 2am."
      },
      {
        "type": "p",
        "text": "I know how that sounds. It's 3 o'clock in the morning and you hit that wall. No amount of caffeine or Red Bull will help, but you drink it anyway, and then you pay for it later when you're lying in bed wired at 10am. Front-load your caffeine at the start of the shift instead. Our upcoming guide to how long caffeine lasts has a full cut-off table."
      },
      {
        "type": "p",
        "text": "**Alcohol.** For a lot of night workers, the drink after a shift is your \"me time\", the same as an evening is for people who work days. I get it. But you pay for it later that night, back on shift at 2am. A drink might help you drop off, but in my experience the sleep is broken and you wake feeling worse. Save it for the end of your block."
      },
      {
        "type": "h2",
        "text": "Should you sleep in one block or split your sleep after a night shift?"
      },
      {
        "type": "p",
        "text": "One block straight after your shift works best for most people, topped up with a short nap before the next shift if you need it. Split sleep is a useful fallback when one long block isn't possible."
      },
      {
        "type": "table",
        "head": [
          "Approach",
          "How it works",
          "Good for",
          "Watch out for"
        ],
        "rows": [
          [
            "One block",
            "7-8 hours straight after you get home, e.g. 8am to 3:30pm",
            "Most work days in a block of nights",
            "Afternoon noise and heat"
          ],
          [
            "Main sleep + nap",
            "5-6 hours after the shift, then a short nap before you leave",
            "Days with school runs or family plans",
            "Don't let the nap run too long"
          ],
          [
            "Short sleep on the last night",
            "3-4 hours after your final shift, then up for the day",
            "Switching back to days",
            "That jet-lag feeling for a day or two"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The last option is the one most of us know. I know how it feels to get up early after your last night shift to try to get the most out of your day off, then find yourself fatigued with that dreaded jet-lag feeling. Even so, a short sleep and then a normal bedtime usually gets you back to days quicker than a full day in bed. Our upcoming guide on how to fix your sleep schedule after a block of nights has the full flip-back plan."
      },
      {
        "type": "p",
        "text": "**My personal choice when working at Budweiser was always 3-4 hours and then up for the day.** To me, and most of the guys I worked with, this was the start of your days off, so staying in bed all day felt like a waste of a day off. That's not to say I'd stay awake until bedtime, especially once I sat down on the sofa around 5pm. Normally a power nap was all I needed. Having another proper sleep would have made no sense."
      },
      {
        "type": "h2",
        "text": "What are the most common daytime sleep mistakes?"
      },
      {
        "type": "p",
        "text": "Most shift workers have made these at some point:"
      },
      {
        "type": "ul",
        "items": [
          "**Staying up \"for an hour\" to unwind.** It turns into three, and the afternoon noise cuts your sleep short.",
          "**Relying on curtains alone.** Light round the edges is enough to wake you once the sun moves round.",
          "**Sleeping in silence.** With no background sound, every car door and dog bark stands out.",
          "**A coffee or energy drink at 5am** to get through the last two hours, then lying awake at 10am.",
          "**A different bedtime every day of the block.** Your body clock can't settle if it never knows when sleep is coming.",
          "**Sleeping until teatime after your last night.** You feel great at midnight and terrible the next morning."
        ]
      },
      {
        "type": "h2",
        "text": "How do you stop family and your phone waking you up?"
      },
      {
        "type": "p",
        "text": "Make your sleep hours official at home, the same way your shift times are official at work."
      },
      {
        "type": "ul",
        "items": [
          "**Phone on do not disturb**, with favourites or repeat calls allowed through so family can still reach you in an emergency.",
          "**Cover the doorbell.** I always used a note on the door (\"Night worker asleep, please leave parcels\") as it does save a lot of 11am wake-ups.",
          "**Agree the quiet hours** with the people you live with, and put your rota on the fridge so nobody has to guess.",
          "**Tell the neighbours your work pattern**, as HSE suggests. A friendly word early saves a row later.",
          "**Plan family time for when you're up.** If you wake at 3:30pm, the school pick-up or tea together can be your \"morning\"."
        ]
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Daytime sleep after a night shift isn't about willpower. It's about the room and the routine: in bed within an hour, dark enough that you can't see across the room, quiet with earplugs and a masking sound, cool at 16-18C, caffeine stopped six hours before bed, and 7-8 hours protected every day. Get those right and the rest of the block gets easier."
      },
      {
        "type": "p",
        "text": "Plan your timings with the [Night Shift Recovery Calculator](/tools/night-shift-recovery-calculator/), then press play. [Try Sleyp free](/session/): 13 sounds in your browser, with a free timer, wake-up chime and saved mixes. The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[TUC: Number of people working night shifts up by more than 150,000 in 5 years](https://www.tuc.org.uk/news/number-people-working-night-shifts-more-150000-5-years)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[Northwestern University: Close the blinds during sleep to protect your health (2022)](https://news.northwestern.edu/stories/2022/03/close-the-blinds-during-sleep-to-protect-your-health)",
          "[Drake et al. (2013), Journal of Clinical Sleep Medicine: Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed](https://jcsm.aasm.org/doi/abs/10.5664/jcsm.3170)",
          "[The Sleep Charity: Sleep environment](https://thesleepcharity.org.uk/information-support/adults/sleep-environment/)",
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Should I sleep straight after a night shift?",
        "answer": "Yes, for most people. Getting into bed within an hour of getting home, before your body clock decides the day has started, usually gives you the longest and most settled sleep. On your last night of a block, a shorter sleep followed by a normal bedtime helps you switch back to days."
      },
      {
        "question": "How many hours should I sleep after a night shift?",
        "answer": "Aim for 7-8 hours. HSE says most adults need 7-8 hours of sleep a day, and that doesn't change because your sleep happens in daylight. If you can't get it in one go, top up with a short nap before your next shift."
      },
      {
        "question": "Is it better to sleep in one block or split it?",
        "answer": "One block is better when you can protect it. Split sleep (a main sleep after the shift plus a nap before the next one) is a good fallback on days with school runs or appointments. What matters most is getting 7-8 hours in total, at roughly the same times each day of your block."
      },
      {
        "question": "Why do I keep waking up at midday?",
        "answer": "It's usually light, noise or heat. Check for light leaks around blinds and doors, add a steady masking sound to cover traffic and voices, and keep the room near 16-18C. Caffeine late in the shift can also cut your sleep short without you feeling it."
      },
      {
        "question": "Is it OK to sleep with a sound playing all day?",
        "answer": "Yes, for most people. Keep the volume at the lowest level that still covers the noise outside, and use a timer if you don't want it running after you wake. In the free Sleyp player, keep the browser page open so the timer and wake-up chime can run."
      },
      {
        "question": "Why do I feel worse after sleeping in the day?",
        "answer": "Daytime sleep is easily broken by noise, light and heat, so you can wake feeling groggy. Getting the room dark, quiet and cool, and keeping caffeine and alcohol away from bedtime, usually helps. If tiredness lasts for weeks despite good sleep, see your GP."
      }
    ]
  },
  {
    "slug": "white-noise-app-for-day-sleepers",
    "title": "Best White Noise App for Day Sleepers (Free Options Compared)",
    "description": "Need a white noise app for daytime sleep? What night workers need from a noise app, free options compared, and how to set one up for a 9am bedtime.",
    "category": "Noise & Disturbance Defence",
    "categorySlug": "noise-disturbance-defence",
    "datePublished": "2026-10-09",
    "readMinutes": 9,
    "quickAnswer": "The best white noise app for daytime sleep gives you brown and pink noise as well as white, a long or unlimited timer, layers you can mix, and no ads breaking the sound. Night workers should also look for a gentle fade-in wake-up, so you don't jolt awake before your next shift.",
    "blocks": [
      {
        "type": "p",
        "text": "Getting into bed when everyone else is leaving for school and work sounds ideal. Then next door starts drilling. I've slept through the day for most of 40 years, from The King's Regiment (1986-1989) to Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, and Budweiser UK. Most noise apps are built for a quiet bedroom at 11pm. This guide is about the one that has to work at 10am."
      },
      {
        "type": "h2",
        "text": "What does a day sleeper need from a white noise app?"
      },
      {
        "type": "p",
        "text": "A day sleeper needs an app that covers the loudest daytime noises, runs for a full 7-8 hour sleep and never interrupts itself. The World Health Organization says bedrooms should be [under 30 dB(A) at night for good-quality sleep](https://www.who.int/europe/news-room/fact-sheets/item/noise), and names shift workers as a group at increased risk from noise. Daytime streets are rarely that quiet."
      },
      {
        "type": "p",
        "text": "Use this checklist before you download anything:"
      },
      {
        "type": "ol",
        "items": [
          "**Brown and pink noise, not just white.** Brown noise is deep and covers traffic, engines and the rumble of a mower. Pink noise sits in the middle and covers voices. White noise is bright and hissy; it suits high-pitched sounds but tires some ears over a long sleep. See our guide to [brown noise for sleep](/resources/brown-noise-for-sleep/) for how the colours compare.",
          "**A long or custom timer.** A 30-minute timer is built for falling asleep at night. After a night shift you need cover for the whole sleep, because the bin lorry comes at 11am, not at 9.",
          "**A fade-out, not a hard stop.** Sound that cuts out suddenly can wake you as surely as a door slamming.",
          "**Mixable layers.** One sound rarely covers everything. A brown base with rain on top handles both the road and the kids playing out.",
          "**No ads in the audio.** An advert that breaks into your sound at noon defeats the point.",
          "**Works offline.** Patchy signal or a dead Wi-Fi router shouldn't end your sleep.",
          "**A fade-in wake-up.** Waking at 4pm to a blaring alarm before a night shift is a rough start. A sound that rises slowly is kinder."
        ]
      },
      {
        "type": "p",
        "text": "Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. That's why points 1 and 4 matter most."
      },
      {
        "type": "h2",
        "text": "How do the best-known white noise apps compare?"
      },
      {
        "type": "p",
        "text": "The table below compares features only, taken from each app's own store listing or help pages in October 2026. Prices and features change, so check the listing before you subscribe."
      },
      {
        "type": "table",
        "head": [
          "App",
          "Cost model",
          "Noise colours",
          "Mixing",
          "Timer and wake-up",
          "Worth knowing"
        ],
        "rows": [
          [
            "Sleyp",
            "Free in the browser; iOS app coming soon; Sleyp Plus subscription (prices not confirmed yet)",
            "13 sounds in the browser, all free, including white, pink and brown noise, rain and fan hum",
            "Layered mixes and a blend questionnaire; guests can save mixes in this browser, free",
            "Free custom timer and wake-up chime. Keep the page open for them to run",
            "No download needed. No offline mode or locked-screen playback. The iOS app is coming soon with 22 free library sounds, a different library from the browser's 13"
          ],
          [
            "[Apple Background Sounds](https://support.apple.com/guide/iphone/background-sounds-iphb2cfa052c/15.0/ios/15.0)",
            "Free, built into iPhone",
            "[Balanced, bright and dark noise, plus ocean, rain and stream](https://9to5mac.com/2021/05/19/apple-announces-ios-iphone-background-sounds/)",
            "No",
            "Check your iOS version",
            "No download; a good free starting point for iPhone users"
          ],
          [
            "[myNoise](https://mynoise.net/appGuide.php)",
            "Free app with in-app purchases; free web generators",
            "[White, pink, brown and grey](https://mynoise.net/NoiseMachines/whiteNoiseGenerator.php) on the White Noise & Co generator",
            "10 sliders per generator",
            "Built-in timer",
            "Calibration to your own hearing; works without the internet"
          ],
          [
            "[White Noise Lite (TMSOFT)](https://apps.apple.com/gb/app/white-noise-lite/id292987597)",
            "Free with ads; paid upgrade removes them",
            "White, pink and brown among 50+ sounds",
            "Mix Pad editor",
            "Timer that fades in and out; fade-in alarms",
            "Visual ads in the free version"
          ],
          [
            "[BetterSleep](https://apps.apple.com/gb/app/bettersleep-relax-and-sleep/id314498713)",
            "Free with in-app purchases; Premium subscription",
            "White noise among 300+ sounds and music tracks",
            "[Up to 15 sounds, 1 music track and 1 brainwave](https://www.bettersleep.com/support/en/articles/11101160-bettersleep-getting-started-guide)",
            "Timers; smart alarm in a wake-up window",
            "Also includes sleep tracking, stories and meditations"
          ]
        ]
      },
      {
        "type": "p",
        "text": "All five are solid apps. The difference is who they were built for. Most are designed around a night-time bedtime. I built Sleyp because after 40 years of sleeping through the day, I couldn't find one designed for it: brown noise up front for traffic and drilling, a custom timer long enough for a full day sleep, and a wake-up chime."
      },
      {
        "type": "p",
        "text": "Before I built Sleyp, I tried quite a few noise masking apps, but found them to be overly complicated to use, especially after a night shift. I'm tired and just need a simple app. That's why the Sleyp iOS app, which is coming soon, has just one button to press, and your saved personalised mix is playing with a countdown timer. I built Sleyp after reading the bad reviews and listening to what shift workers actually wanted, so they can now benefit from simplicity."
      },
      {
        "type": "h2",
        "text": "Free vs paid apps: what do you usually get?"
      },
      {
        "type": "p",
        "text": "Free apps cover the basics well. A paid tier mostly buys you time, layers and peace from adverts."
      },
      {
        "type": "table",
        "head": [
          "Feature",
          "Usually free",
          "Usually paid"
        ],
        "rows": [
          [
            "Noise colours",
            "White, often pink and brown",
            "Nature layers, fan hum, extra textures"
          ],
          [
            "Timer",
            "Short presets (30-90 minutes)",
            "Custom lengths for a full sleep"
          ],
          [
            "Mixing",
            "One sound at a time, or limited",
            "Several layers, saved mixes"
          ],
          [
            "Ads",
            "Sometimes shown",
            "Removed"
          ],
          [
            "Wake-up",
            "Basic alarm, if any",
            "Fade-in or smart alarms"
          ]
        ]
      },
      {
        "type": "p",
        "text": "**Start free.** If plain brown noise covers your street, you may never need to pay for an app. **Enjoy the free player with no sign up, no ads and just a simple app that very tired people can use easily.**"
      },
      {
        "type": "p",
        "text": "**Switch when your app's timer runs out before you wake.** That's the usual sign. If a 90-minute timer stops at 10:30am and the mowers start at 11, look for an app with a custom timer. Sleyp's is free in the browser. Lawnmower season is when I'd notice it most: in bed after nights and the neighbours decide to mow their lawns."
      },
      {
        "type": "p",
        "text": "Be honest with yourself about the evidence too. A [2021 systematic review of 38 studies](https://www.em-consulte.com/article/1421191/article/noise-as-a-sleep-aid-a-systematic-review) rated the quality of evidence that continuous noise improves sleep as very low, and called for more research. Noise apps don't put you to sleep. What they do is cover sudden sounds, so a car door or a dog bark is less likely to wake you. For a day sleeper, that's the job."
      },
      {
        "type": "h2",
        "text": "What's free with Sleyp?"
      },
      {
        "type": "p",
        "text": "The Sleyp [website player](/session/) has 13 sounds, all free. The custom timer, wake-up chime and blend questionnaire are free too, and guests can save mixes in this browser. Keep the page open so the timer and chime can run. There is no offline mode and no locked-screen playback."
      },
      {
        "type": "p",
        "text": "The Sleyp iOS app is coming soon, with 22 free library sounds and saved mixes for guests. Its sound library differs from the browser's 13, so don't expect them to match."
      },
      {
        "type": "p",
        "text": "Sleyp Plus is the subscription. It adds AI mix generation and Discovery, while individual sounds and saved mixes stay free. Plus prices aren't confirmed yet, so I won't quote one. See [the Sleyp app page](/pricing/) for what Free and Plus include."
      },
      {
        "type": "h2",
        "text": "How do you set up a noise app for a 9am bedtime?"
      },
      {
        "type": "p",
        "text": "Here's the routine I'd use for a 9am bedtime after a night shift:"
      },
      {
        "type": "ol",
        "items": [
          "**On the drive or bus home, choose your mix.** Don't scroll for sounds in bed with the screen in your face.",
          "**8:45am: phone on Do Not Disturb**, with your alarm and important contacts allowed through.",
          "**Pick the base colour by your biggest noise.** Traffic or building work: brown. Voices, TV through the wall: pink. Rain over the top if you like it.",
          "**Set the volume as low as still does the job.** It should blur the street, not drown it. The 2021 review flagged possible effects on hearing, so don't crank it up. A speaker across the room is kinder than earbuds for a long sleep.",
          "**Set the timer for your whole sleep.** For a 9am bedtime and a 4pm alarm, that's 7 hours. Use a fade-out so the sound doesn't stop dead.",
          "**Set a fade-in wake-up** if your app has one, so you surface slowly before the next shift.",
          "**Add earplugs on the worst days.** Earplugs cut the peaks; masking sound fills the gaps. Our guide to [sleeping with earplugs](/resources/earplugs-for-sleeping/) covers fit and SNR ratings."
        ]
      },
      {
        "type": "p",
        "text": "If you're weighing up sleep buds or noise-cancelling headphones as well, see [noise cancelling for sleep](/resources/noise-cancelling-for-sleep/). Darkness matters just as much as sound; my guide, [How to Sleep During the Day After a Night Shift](/resources/how-to-sleep-during-the-day/), covers blinds, timing and the rest of the routine."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Pick an app that gives you brown noise, a timer that lasts your whole sleep, mixing and no adverts. Start free, and switch only when the timer runs out before you wake. Then pair it with earplugs and a dark room on the noisy days."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/) in your browser, with no download. The custom timer, wake-up chime and saved mixes are free there. The Sleyp iOS app is coming soon. See [the Sleyp app page](/pricing/) for what Free and Plus include."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise)",
          "[Riedy et al. (2021), Sleep Medicine Reviews: Noise as a sleep aid, a systematic review](https://www.em-consulte.com/article/1421191/article/noise-as-a-sleep-aid-a-systematic-review)",
          "[Apple Support: Play background sounds on iPhone](https://support.apple.com/guide/iphone/background-sounds-iphb2cfa052c/15.0/ios/15.0)",
          "[9to5Mac: Apple announces Background Sounds](https://9to5mac.com/2021/05/19/apple-announces-ios-iphone-background-sounds/)",
          "[myNoise for iOS: app guide](https://mynoise.net/appGuide.php)",
          "[myNoise: White Noise & Co generator](https://mynoise.net/NoiseMachines/whiteNoiseGenerator.php)",
          "[White Noise Lite on the App Store (UK)](https://apps.apple.com/gb/app/white-noise-lite/id292987597)",
          "[BetterSleep on the App Store (UK)](https://apps.apple.com/gb/app/bettersleep-relax-and-sleep/id314498713)",
          "[BetterSleep: getting started guide](https://www.bettersleep.com/support/en/articles/11101160-bettersleep-getting-started-guide)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is there a free white noise app with no ads?",
        "answer": "Yes. Apple's Background Sounds is built into iPhone and free. The myNoise web generators are free and ad-free, funded by donations. Sleyp's browser player is free too, with 13 sounds, a custom timer and a wake-up chime."
      },
      {
        "question": "Which colour of noise is best for daytime sleep?",
        "answer": "For most day sleepers, brown noise. Its deep rumble covers traffic, engines and drilling better than the hiss of white noise. Pink noise is a good second choice for voices. Try each for a few sleeps and keep what works."
      },
      {
        "question": "Can I leave a white noise app on all day?",
        "answer": "Yes, many people play sound for their whole sleep. Keep the volume as low as still masks the noise outside, use a speaker rather than earbuds where you can, and use a timer with a fade-out so it ends gently."
      },
      {
        "question": "Do I need to pay for a white noise app?",
        "answer": "Not always. If a free app with brown noise and a 90-minute timer gets you through, stay free. Sleyp's timers and saved mixes are free, and Sleyp Plus only adds AI mix generation and Discovery. Some other apps charge for longer timers, saved mixes or no adverts."
      },
      {
        "question": "Should I use earbuds or a speaker for white noise?",
        "answer": "A speaker across the room is usually more comfortable for a long day sleep, especially if you sleep on your side. Use sleep earbuds or earplugs when the noise is heavy, such as building work next door."
      },
      {
        "question": "What's the best white noise app for night shift workers?",
        "answer": "The one built around daytime noise: brown and pink noise, a timer that lasts your whole sleep, mixable layers and a gentle wake-up. Compare the table above against your own street and rota."
      }
    ]
  },
  {
    "slug": "noise-cancelling-for-sleep",
    "title": "Noise Cancelling for Sleep: Sleep Buds vs Earplugs vs Masking",
    "description": "Does noise cancelling help you sleep? How sleep buds, earplugs and noise masking compare for traffic, voices and drilling, and the best setup for day sleepers.",
    "category": "Noise & Disturbance Defence",
    "categorySlug": "noise-disturbance-defence",
    "datePublished": "2026-10-08",
    "readMinutes": 7,
    "quickAnswer": "Noise cancelling helps you sleep against steady, low sounds such as traffic hum, but it does little against sudden noises like a dog barking or a neighbour's drill. For daytime sleep after a night shift, the setup that works best for most people is layered: passive blocking (earplugs or sleep buds) plus a steady masking sound.",
    "blocks": [
      {
        "type": "p",
        "text": "I worked shifts for 40 years: The King's Regiment from 1986 to 1989, Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, then Budweiser UK. In all that time, the noise that kept me awake was never the steady stuff. It was the sudden stuff. Getting into bed as everyone else is leaving the house for school and work is great, until the neighbour decides to renovate and starts drilling."
      },
      {
        "type": "p",
        "text": "Imagine people on day shifts getting into bed at 11pm and the next-door neighbour suddenly starting to mow the lawn or drill into the wall. For night shift workers, this is what we deal with every week, but until you've worked nights, you will never fully appreciate the pain."
      },
      {
        "type": "p",
        "text": "That is exactly where people expect noise cancelling to save them, and exactly where it falls short. Here is how the three options really compare, and how to put them together."
      },
      {
        "type": "h2",
        "text": "What is the difference between noise cancelling and noise masking?"
      },
      {
        "type": "p",
        "text": "They solve the same problem in opposite ways. One takes sound away. The other adds sound so the noise you care about stands out less."
      },
      {
        "type": "ul",
        "items": [
          "**Active noise cancelling (ANC)** uses microphones to pick up outside sound and plays an opposite sound wave to cancel it. Bose says ANC [works best for steady low-frequency sounds, like the hum of an air conditioner or passing traffic](https://www.bose.com/stories/what-is-active-noise-cancellation), and is less effective against sudden, sharp noise.",
          "**Passive blocking** is a physical seal: foam, silicone or wax earplugs, or the tips on sleep buds. It works across all frequencies, but nothing seals perfectly, so some sound gets through.",
          "**Noise masking** plays a steady sound, such as brown noise, rain or fan hum, so that sudden noises stand out less against it. It does not remove anything. It makes the change in sound smaller, and it is the change that wakes you."
        ]
      },
      {
        "type": "p",
        "text": "If you want to understand the masking sounds themselves, my guide to [brown noise for sleep](/resources/brown-noise-for-sleep/) compares brown, white, pink and green noise."
      },
      {
        "type": "h2",
        "text": "What does each one block: traffic, voices or drilling?"
      },
      {
        "type": "p",
        "text": "This is the comparison that matters for day sleepers. It is a practical guide, not a lab measurement. Results depend on fit, the device and how loud the noise is."
      },
      {
        "type": "table",
        "head": [
          "Daytime noise",
          "Noise cancelling (ANC)",
          "Earplugs / sleep bud tips",
          "Masking sound",
          "Best combination"
        ],
        "rows": [
          [
            "Traffic hum, a distant main road",
            "Good",
            "Good",
            "Good",
            "Any one of the three"
          ],
          [
            "Bin lorry, buses, delivery vans",
            "Fair",
            "Good",
            "Good",
            "Earplugs + masking"
          ],
          [
            "Voices, kids playing out",
            "Weak",
            "Fair",
            "Good",
            "Earplugs + masking"
          ],
          [
            "Dog barking, car horns, doors slamming",
            "Weak",
            "Fair",
            "Fair",
            "Earplugs + masking, louder room setting"
          ],
          [
            "Drilling, hammering, lawnmowers",
            "Weak",
            "Fair",
            "Fair",
            "Earplugs + masking, plus a word with the neighbour"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The pattern is simple. ANC is strongest where you need it least. The sounds that really wreck daytime sleep are sudden and irregular, and those need a seal plus a steady sound behind them."
      },
      {
        "type": "p",
        "text": "It is worth knowing the target. The [WHO recommends less than 30 dB(A) in bedrooms at night](https://www.who.int/europe/news-room/fact-sheets/item/noise) for good-quality sleep, and it names shift workers as being at increased risk because their sleep is already under stress. A suburban street at 10am is nowhere near 30 dB. Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep."
      },
      {
        "type": "h2",
        "text": "Can you sleep with noise cancelling headphones?"
      },
      {
        "type": "p",
        "text": "You can, but over-ear headphones are a poor fit for sleep. They press on your ear when you lie on your side, they get hot, and they slip off. Most people who try them end up on their back and still wake up when the headphones move."
      },
      {
        "type": "p",
        "text": "In-ear ANC earbuds are better, but standard models stick out of the ear. Lying on one for seven hours is uncomfortable, and the battery may not last a full day sleep with ANC on."
      },
      {
        "type": "h2",
        "text": "Are sleep buds worth it for side sleepers?"
      },
      {
        "type": "p",
        "text": "Sleep buds are small, low-profile earbuds designed to be worn in bed. Most play masking sounds, and some add noise cancelling. They suit side sleepers far better than normal earbuds."
      },
      {
        "type": "table",
        "head": [
          "Sleep buds",
          "Pros",
          "Cons"
        ],
        "rows": [
          [
            "Fit",
            "Low profile; made for lying on your side",
            "Fit varies; a poor seal lets drilling through"
          ],
          [
            "Sound",
            "Masking sound right at your ear",
            "Library of sounds may be limited or locked to an app"
          ],
          [
            "Noise cancelling",
            "Takes the edge off steady traffic hum",
            "Little help against sudden noise, same as any ANC"
          ],
          [
            "Practical",
            "No speaker to disturb a partner",
            "Battery must last a full day sleep; costs far more than earplugs"
          ]
        ]
      },
      {
        "type": "p",
        "text": "My honest take: sleep buds are a good tool if you can afford them and they fit. But a decent pair of earplugs and a speaker playing a masking sound does most of the same job for a fraction of the price."
      },
      {
        "type": "h2",
        "text": "What is the layered approach for daytime sleep?"
      },
      {
        "type": "p",
        "text": "No single option handles everything a daytime street throws at you. Layering does. This is the order I would set it up in."
      },
      {
        "type": "ol",
        "items": [
          "**Seal first.** Fit earplugs properly, or sleep buds with the right size tips. A poor fit loses most of the benefit. My guide to [sleeping with earplugs](/resources/earplugs-for-sleeping/) covers fit and which types block the most.",
          "**Add a steady masking sound.** Brown noise or heavy rain works well against low rumbles like traffic and lorries. Play it from a speaker near the bed, or through sleep buds if you use them.",
          "**Set the level once, then leave it.** The masking sound should be just loud enough that the normal street sounds fade. If you can still hear voices clearly, nudge it up a little. Keep it comfortable, not loud.",
          "**Use a long timer, or none.** A day sleep runs seven or eight hours. A 30-minute timer that cuts out at 10am, just as the neighbour starts the mower, defeats the point.",
          "**Deal with the source where you can.** HSE's advice to shift workers includes telling neighbours your sleep times. A friendly word about the drilling can do more than any device. My guide to [noisy neighbours when you sleep in the day](/resources/noisy-neighbours-daytime-sleep/) covers your options in the UK."
        ]
      },
      {
        "type": "p",
        "text": "Then there is the lawnmower problem: getting into bed after a night shift and the neighbours decide to mow their lawns. ANC will not touch that. Earplugs plus a steady sound will take the edge off enough to stay asleep."
      },
      {
        "type": "p",
        "text": "After a night shift at Budweiser, earplugs and noise masking worked for me when the outside noise was loud, but noise cancelling headphones would have been a great alternative."
      },
      {
        "type": "h2",
        "text": "Is noise masking better than noise cancelling?"
      },
      {
        "type": "p",
        "text": "For daytime sleep, masking is usually more useful, because the noises that wake day sleepers are sudden and irregular. But the honest answer is that the science on masking is thin. A 2021 systematic review of 38 studies in Sleep Medicine Reviews found [the quality of evidence for continuous noise improving sleep was very low](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)."
      },
      {
        "type": "p",
        "text": "That does not mean it does not work for you. It means the studies are small and mixed, and most were done on people sleeping at night, not at 9am on a busy street. I treat masking as a practical tool for covering disturbances, not a cure for poor sleep. Your own experience over a week of day sleeps is the test that counts."
      },
      {
        "type": "p",
        "text": "For me personally, a good noise masking mix is my go-to option these days, especially after a night shift when your brain just won't switch off."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Noise cancelling is good at the noise that bothers day sleepers least. For the drill, the mower and the kids playing out, you need a seal and a steady sound behind it. You do not need to buy new hardware to get the masking half: Sleyp plays brown noise, rain and fan hum in your browser, built for people who sleep while everyone else is up. Comparing options? See the [best white noise app for day sleepers](/resources/white-noise-app-for-day-sleepers/)."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/): the timer and saved mixes are free there too, and the Sleyp iOS app is coming soon. Not sure how loud your street is? Try the [Noise Calibration Tool](/tools/noise-calibration-tool/)."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise) (bedrooms under 30 dB(A) at night; shift workers at increased risk)",
          "[Riedy et al. (2021), Noise as a sleep aid: a systematic review, Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283) (38 studies; very low quality evidence for continuous noise)",
          "[Bose: What is active noise cancellation?](https://www.bose.com/stories/what-is-active-noise-cancellation) (ANC best on steady low-frequency sound; less effective on sudden, sharp noise)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) (telling neighbours your sleep times)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can you sleep with noise cancelling headphones?",
        "answer": "Yes, but over-ear headphones are uncomfortable on your side and often slip off. Low-profile sleep buds or earplugs with a masking sound are more practical for a seven or eight hour day sleep."
      },
      {
        "question": "Is noise masking better than noise cancelling?",
        "answer": "For daytime sleep, usually yes. Noise cancelling works best on steady low sounds like traffic hum. Masking helps with sudden sounds like voices and barking by making the change in sound smaller. Combining both with earplugs works best."
      },
      {
        "question": "Do sleep buds work for daytime sleep?",
        "answer": "They can, especially for side sleepers, because they combine a seal with masking sound at your ear. Check the battery lasts a full day sleep, and expect them to soften, not remove, drilling and mowers."
      },
      {
        "question": "Does noise cancelling block drilling?",
        "answer": "Not much. Drilling and hammering are sudden, sharp sounds, which ANC handles poorly. Earplugs plus a steady masking sound, and a word with the neighbour, are more effective."
      },
      {
        "question": "Can I just use earplugs on their own?",
        "answer": "On a quiet day, often yes. On a noisy day, sudden sounds still get through, so adding a steady masking sound in the background gives you a second layer."
      },
      {
        "question": "How loud should a masking sound be for sleeping?",
        "answer": "Just loud enough that normal street sounds fade into it, and no louder. Keep it at a comfortable level you could talk over. The WHO's bedroom target is under 30 dB(A), so the aim is to cover noise, not to add a lot more."
      }
    ]
  },
  {
    "slug": "noisy-neighbours-daytime-sleep",
    "title": "Noisy Neighbours When You Sleep in the Day: Your Options in the UK",
    "description": "Neighbour noise while you sleep after nights? What UK law says about daytime noise, talking to neighbours, cheap soundproofing and when to call the council.",
    "category": "Noise & Disturbance Defence",
    "categorySlug": "noise-disturbance-defence",
    "datePublished": "2026-10-04",
    "readMinutes": 10,
    "quickAnswer": "UK councils can investigate noise as a statutory nuisance at any time of day, but the special night-noise rules only cover 11pm to 7am, which isn't when you sleep. Start by telling your neighbours your sleep hours, as the HSE advises, then soundproof and mask your bedroom before you take it to the council.",
    "blocks": [
      {
        "type": "p",
        "text": "Getting in bed when everyone else is leaving the house for school and work is great, until the next-door neighbour decides to renovate their house and starts drilling. I've worked shifts for 40 years, from The King's Regiment to HM Prison Service at Strangeways, Walton and Guys Marsh, Jacobs Biscuits and Budweiser UK. In that time I've learned that most noisy neighbours aren't being awkward. They simply don't know there's someone asleep through the wall at 11am."
      },
      {
        "type": "p",
        "text": "This guide covers what the law says about daytime noise, then the four steps I'd take, in order: a friendly word, a quieter bedroom, a masking sound, and only then a noise diary and a council complaint."
      },
      {
        "type": "h2",
        "text": "What does UK law say about daytime noise from neighbours?"
      },
      {
        "type": "p",
        "text": "There's no law that sets \"quiet hours\" for ordinary daytime living. What there is, under the [GOV.UK guidance on noise nuisances](https://www.gov.uk/guidance/noise-nuisances-how-councils-deal-with-complaints), is the idea of a **statutory nuisance**: noise that unreasonably and substantially interferes with the use or enjoyment of your home. Councils can investigate that at any time of day or night."
      },
      {
        "type": "p",
        "text": "The catch for night workers is the special night-noise warning rules. Those only cover 11pm to 7am, which is exactly when we're at work. So your daytime sleep isn't protected by the night rules. You rely on the general nuisance rules, and the council will weigh up whether the noise is unreasonable for that time of day."
      },
      {
        "type": "p",
        "text": "In practice that means:"
      },
      {
        "type": "ul",
        "items": [
          "**Normal daytime living is unlikely to count.** A hoover, kids playing out, or a mower at midday is usually reasonable, even if it wakes you.",
          "**Persistent, unreasonable noise can count.** Loud music most days, a dog barking for hours, or building work that runs on and on are the sort of things councils look into.",
          "**Evidence decides it.** A diary of dates, times and what the noise was makes any complaint far stronger."
        ]
      },
      {
        "type": "p",
        "text": "Here's how I'd match the problem to the route:"
      },
      {
        "type": "table",
        "head": [
          "The noise",
          "Most likely to fix it",
          "Worth a council complaint?"
        ],
        "rows": [
          [
            "One-off DIY or a weekend job",
            "A friendly word and a heads-up next time",
            "Rarely"
          ],
          [
            "Weeks of building work next door",
            "Ask for the work schedule; check your council's guidance on building work hours",
            "Only if it runs outside reasonable hours or never lets up"
          ],
          [
            "Mowers, kids playing out, car doors",
            "Your own defences: earplugs, masking sound, a better room",
            "No, this is normal daytime life"
          ],
          [
            "Loud music or TV most days",
            "A friendly word first, then a diary",
            "Yes, if it carries on after you've asked"
          ],
          [
            "A dog barking for hours",
            "A friendly word (owners at work often don't know)",
            "Yes, if it's persistent"
          ],
          [
            "You rent from a landlord or housing association",
            "Tell them as well; most tenancies have a clause on nuisance",
            "Alongside, not instead"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Step 1: How do you ask a neighbour to keep the noise down when you sleep in the day?"
      },
      {
        "type": "p",
        "text": "Tell them, before you're angry. The [HSE's hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) include letting your neighbours know when you sleep. Most people genuinely have no idea. To them, 10am on a Tuesday is the obvious time to put a shelf up."
      },
      {
        "type": "p",
        "text": "A few rules that make the conversation go well:"
      },
      {
        "type": "ol",
        "items": [
          "**Pick your moment.** Knock on a day off, not straight after you've been woken by their drill. Nobody listens to someone shouting in a dressing gown.",
          "**Lead with your job, not the complaint.** \"I work nights, so I sleep from about 8 till 3\" gets a better reaction than \"your drilling is doing my head in\".",
          "**Ask for a heads-up, not silence.** Most neighbours will happily text you before a big job. That way you can sleep in the back room, or line up your earplugs and a masking sound.",
          "**Give them your rota.** If you work blocks, they can save the loud jobs for your days off."
        ]
      },
      {
        "type": "p",
        "text": "If you'd rather not knock, a note through the door works too. Something like this:"
      },
      {
        "type": "quote",
        "text": "Hi, I'm [name] from number [x]. I work night shifts, so I'm usually asleep between [8am] and [3pm] on [days]. I know daytime noise is just normal life, so I'm not asking for silence. If you've got a big job planned, like drilling or building work, could you give me a heads-up on [number]? I'll do my best to sleep through it. Thanks, and give me a shout if I can ever return the favour."
      },
      {
        "type": "p",
        "text": "Sometimes a friendly word isn't enough, and I know that from experience. My next door neighbour whilst I was at Budweiser had a Yorkshire Terrier called Alfie, who never stopped barking. During the summer, the dog would go into the garden opposite my bedroom window and start barking. The neighbour was constantly shouting at the dog through the open back door, \"Shut up Alfie\", and this went on all day, every day."
      },
      {
        "type": "p",
        "text": "My wife noticed how little sleep I was getting during the day and confronted the neighbour, but to no avail. In the end, she spoke to the neighbour's landlord, and finally, I got some sleep. The neighbour has since moved, but to this day, I'm sure she has no idea how much her dog affected both my sleep and my health."
      },
      {
        "type": "h2",
        "text": "Step 2: How can you soundproof a bedroom cheaply?"
      },
      {
        "type": "p",
        "text": "You don't need a builder. Sound gets in through gaps and through shared walls, so deal with those first:"
      },
      {
        "type": "ol",
        "items": [
          "**Move the bed off the shared wall.** Even a few feet helps, because drilling and bass travel through the brickwork.",
          "**Put something heavy against that wall.** A full wardrobe or bookcase soaks up more sound than bare plaster.",
          "**Seal the gaps.** A draught excluder at the bottom of the bedroom door and foam strips around the frame cut a surprising amount of landing and stairwell noise.",
          "**Hang heavy curtains.** The HSE suggests heavy curtains or blackout blinds for daytime sleep. Thick lined curtains help with light and street noise at the same time. My guide to the [best blackout strategies for daytime sleep](/resources/best-blackout-strategies-for-daytime-sleep/) covers the light side.",
          "**Sleep in the quietest room.** If the back bedroom faces the garden rather than the road or next door's extension, it might be worth swapping, at least while the building work lasts.",
          "**Wear earplugs.** They're the cheapest soundproofing there is. See my complete guide to [sleeping with earplugs](/resources/earplugs-for-sleeping/) for how to fit them properly."
        ]
      },
      {
        "type": "p",
        "text": "The Army gave me small foam earplugs that weren't comfortable to wear, but they were better than nothing. On the worst streets I've lived on, I ended up with moulded earplugs, because nothing else stayed comfortable through a full day's sleep. If you want a reusable pair, I've also written an honest [Loop earplugs review](/resources/loop-earplugs-for-sleeping-review/) from a day sleeper's point of view, and a full comparison is coming in the Best Earplugs for Sleeping in the UK guide."
      },
      {
        "type": "p",
        "text": "I've also swapped to the back bedroom on occasions, when the main bedroom was simply just too noisy to get any quality sleep."
      },
      {
        "type": "h2",
        "text": "Step 3: How do you mask the neighbour noise that's left?"
      },
      {
        "type": "p",
        "text": "Even with a friendly neighbour and a better room, some noise gets through. The [WHO Europe noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise) recommends keeping bedrooms below 30 dB(A) at night for good sleep, and it names shift workers among the groups most sensitive to noise. Few day sleepers get anywhere near that at 11am on a weekday."
      },
      {
        "type": "p",
        "text": "That's where a steady masking sound earns its place. It doesn't make the drill quieter. It narrows the jump between the background and each sudden start, so fewer noises stand out enough to wake you."
      },
      {
        "type": "ul",
        "items": [
          "**Drilling, hammering, bass through the wall:** brown noise. Its energy sits in the low frequencies where those sounds live. My [brown noise for sleep](/resources/brown-noise-for-sleep/) guide explains why.",
          "**Voices, kids playing out, next door's telly:** pink noise is usually the better all-rounder. The [brown noise vs white noise guide](/resources/brown-noise-vs-white-noise-for-daytime-disturbances/) matches each colour to the noise it covers best.",
          "**Not sure what you're up against?** The [Noise Calibration Tool](/tools/noise-calibration-tool/) helps you match a sound to the noise outside your window."
        ]
      },
      {
        "type": "p",
        "text": "Two habits make masking work. Start the sound as you get into bed, not once the noise begins, so the first van door doesn't catch you out. And keep it at a steady, moderate level from a speaker. It only needs to blur the background, not drown it. If you're weighing up sleep buds or noise-cancelling headphones instead, see my guide to [noise cancelling for sleep](/resources/noise-cancelling-for-sleep/)."
      },
      {
        "type": "h2",
        "text": "Step 4: When should you complain to the council about noisy neighbours?"
      },
      {
        "type": "p",
        "text": "When you've asked nicely, done what you can at your end, and the noise is still persistent and unreasonable. Before you contact the council, keep a noise diary. It's the single most useful thing you can bring, because the council has to judge whether the noise is a nuisance, and your word alone isn't much to go on."
      },
      {
        "type": "p",
        "text": "What to record, every time:"
      },
      {
        "type": "ol",
        "items": [
          "**Date, start time and finish time.**",
          "**What the noise was.** Music, drilling, barking, shouting, a generator.",
          "**Where it came from.** Which house, which side, which room.",
          "**How it affected you.** For example: \"Woke at 11.20am after a 12-hour night shift. Couldn't get back to sleep. Back on nights at 7pm.\"",
          "**What you'd already done.** The date you spoke to them or put a note through the door."
        ]
      },
      {
        "type": "p",
        "text": "Then contact your council's environmental health team, usually through the council website. Under the GOV.UK guidance, if the council is satisfied the noise is a statutory nuisance, it must serve an abatement notice telling the person responsible to stop or limit it. Be ready to explain clearly that you work nights and sleep in the day. That context matters when they decide what's reasonable."
      },
      {
        "type": "p",
        "text": "If you rent, tell your landlord or housing association as well. Most tenancies include a clause about not causing a nuisance, so they may be able to act too."
      },
      {
        "type": "p",
        "text": "One honest word of warning: a formal complaint can sour things with people you'll be living next to for years. That's why it's step 4, not step 1. Going back to Alfie the dog, speaking to the landlord was not what we wanted to do, but after no help from the neighbour, we really did have no option. If that's you, then just cover yourself and back up what you can. We recorded the dog barking at various times of the day for a few weeks, just to prove it was not a one-off."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Most noisy neighbours don't know you're asleep. Tell them first, then make your bedroom as quiet as you can, then mask what's left. Keep the council for noise that's persistent and unreasonable, and bring a diary when you do. The night-noise rules won't protect your daytime sleep, so your own defences matter more than the law."
      },
      {
        "type": "p",
        "text": "Drilling at 10am? [Try Sleyp free](/session/): start a brown noise mix at the right level as you get into bed. The timer and saved mixes are free there too, and the Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[GOV.UK: Noise nuisances: how councils deal with complaints](https://www.gov.uk/guidance/noise-nuisances-how-councils-deal-with-complaints)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I complain about noise during the day?",
        "answer": "Yes. Under GOV.UK guidance, councils can investigate noise that may be a statutory nuisance at any time of day or night. The council will judge whether it's unreasonable for that time of day, so ordinary daytime living rarely counts, but persistent loud music, barking or never-ending building work can."
      },
      {
        "question": "What hours are neighbours allowed to make noise?",
        "answer": "There are no set daytime hours for ordinary household noise. The special night-noise warning rules cover 11pm to 7am. Many councils publish recommended hours for noisy building work, so check your council's website if a big job is going on next door."
      },
      {
        "question": "How do I sleep through a neighbour's drilling?",
        "answer": "Ask for a heads-up so you can plan, sleep in the room furthest from the work, wear well-fitted earplugs, and run a steady brown noise from a speaker at a moderate level. Earplugs cut the peaks; the brown noise softens each start and stop."
      },
      {
        "question": "Should I tell my neighbours I work nights?",
        "answer": "Yes. The HSE's advice for shift workers includes telling neighbours when you sleep. Most people simply don't know, and a friendly word or a note with your sleep times often fixes more than any complaint."
      },
      {
        "question": "Do the 11pm to 7am night-noise rules protect day sleepers?",
        "answer": "No. Those warning rules only cover the night hours, when most night workers are at work. Your daytime sleep relies on the general statutory nuisance rules, which is why a noise diary and a clear explanation of your shifts matter."
      },
      {
        "question": "What should I put in a noise diary?",
        "answer": "The date, start and finish times, what the noise was, where it came from, how it affected your sleep, and what you'd already done to sort it out. Keep it going for a while before you contact the council, so it shows a pattern."
      }
    ]
  },
  {
    "slug": "loop-earplugs-for-sleeping-review",
    "title": "Loop Earplugs for Sleeping: An Honest Review From a Day Sleeper",
    "description": "Are Loop earplugs good for sleeping? A Loop Dream review from a night-shift veteran: noise reduction, side-sleeper comfort and how it compares with foam.",
    "category": "Noise & Disturbance Defence",
    "categorySlug": "noise-disturbance-defence",
    "datePublished": "2026-10-03",
    "readMinutes": 7,
    "quickAnswer": "Yes, Loop earplugs are good for sleeping, as long as you buy the right model. Loop Dream is the sleep one: rated 27 dB SNR, the highest in Loop's range, with foam-silicone tips in four sizes and a low-profile shape for side sleepers. It handles traffic and voices well. For drilling or lawnmowers, add a masking sound.",
    "blocks": [
      {
        "type": "p",
        "text": "Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. I've spent 40 years on shifts, from The King's Regiment to HM Prison Service at Strangeways, Walton and Guys Marsh, Jacobs Biscuits and Budweiser UK. Earplugs have been in my bedside drawer for most of it. This is my honest take on Loop Dream for daytime sleep. I've worn them after a set of nights whilst working at Budweiser and then on my following days off, just to see how they performed during the day and night."
      },
      {
        "type": "h2",
        "text": "Are Loop earplugs good for sleeping? The verdict up front"
      },
      {
        "type": "p",
        "text": "Loop Dream is a good choice for day sleepers who find foam plugs uncomfortable or who sleep on their side. It is reusable, comfortable for a full sleep and blocks enough to take the edge off a normal daytime street. It is not the strongest earplug you can buy. Cheap foam plugs are rated higher on paper, so if raw blocking is all you care about, foam still wins."
      },
      {
        "type": "table",
        "head": [
          "At a glance",
          "Loop Dream: what I think"
        ],
        "rows": [
          [
            "Best for",
            "Side sleepers; people who can't get on with foam"
          ],
          [
            "Noise rating",
            "27 dB SNR (Loop's highest)"
          ],
          [
            "Weak spot",
            "Sudden loud noise such as drilling, mowers, dogs"
          ],
          [
            "Price",
            "£44.95 on Loop's UK site (checked 3 Oct 2026)"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Loop Dream vs Loop Quiet vs Loop Engage: which one is for sleep?"
      },
      {
        "type": "p",
        "text": "Loop sells several models, and the names don't make it obvious. Only Dream is designed for sleep. Quiet 2 is the cheaper all-rounder, and Engage 2 is made for conversations, so it lets too much through for sleeping."
      },
      {
        "type": "table",
        "head": [
          "Model",
          "Noise reduction (SNR)",
          "Made for",
          "UK price"
        ],
        "rows": [
          [
            "[Loop Dream](https://www.loopearplugs.com/products/dream)",
            "27 dB",
            "Sleep, side sleepers",
            "£44.95"
          ],
          [
            "[Loop Quiet 2](https://www.loopearplugs.com/products/quiet)",
            "24 dB",
            "Focus, travel, light sleep",
            "£19.95"
          ],
          [
            "[Loop Engage 2](https://www.loopearplugs.com/products/engage)",
            "16 dB",
            "Conversations, social settings",
            "See Loop's site"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The [Loop Dream product page](https://www.loopearplugs.com/products/dream) lists foam-silicone ear tips in XS, S, M and L, plus a set of \"double tips\" in the same four sizes, and a bedside carry case. Loop offers 100-day returns and a 2-year warranty, which takes some of the risk out of the price."
      },
      {
        "type": "p",
        "text": "If your budget is tight, Quiet 2 will do for background noise. If you sleep on your side or you're fighting a busy street, Dream is the one to get."
      },
      {
        "type": "h2",
        "text": "How much noise do Loop Dream earplugs block in real life?"
      },
      {
        "type": "p",
        "text": "SNR (single number rating) is the figure on the box. It is measured in a lab with a good fit, so a badly fitted plug blocks less. A 27 dB rating means Dream turns a steady street down a long way, but it won't make a room silent."
      },
      {
        "type": "p",
        "text": "The World Health Organization says bedrooms should be under 30 dB at night for good quality sleep, and it names shift workers as a group at higher risk from noise ([WHO Europe noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise)). The trouble is that we sleep in the day, when the street is at its loudest."
      },
      {
        "type": "p",
        "text": "Here is how Dream did against the noises day sleepers actually face:"
      },
      {
        "type": "table",
        "head": [
          "Daytime noise",
          "How Loop Dream coped"
        ],
        "rows": [
          [
            "Traffic and buses",
            "Great for light traffic"
          ],
          [
            "Voices, school run, kids playing out",
            "Worked well"
          ],
          [
            "Partner snoring",
            "Never got to try this!"
          ],
          [
            "Bin lorry, doors slamming",
            "Worked well"
          ],
          [
            "Drilling or a lawnmower next door",
            "Some noise still heard"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Getting into bed after a night shift and the neighbours decide to mow their lawns: that is the test any earplug fails sooner or later. Steady, low noise is easy to block. Sudden, sharp noise gets through. That is where a masking sound earns its place (more on that below)."
      },
      {
        "type": "h2",
        "text": "Is Loop Dream comfortable for a 7-hour day sleep?"
      },
      {
        "type": "p",
        "text": "The Health and Safety Executive says most adults need 7-8 hours of sleep a day ([HSE hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)). So an earplug has to be comfortable for that long, not just for an hour on a train."
      },
      {
        "type": "p",
        "text": "Loop says Dream uses soft silicone and a low-profile shape so it doesn't press when your head is on the pillow. The oval tip is meant to follow the shape of your ear canal."
      },
      {
        "type": "p",
        "text": "Try every tip size. The one that comes fitted is not always the right one, and a poor seal costs you more blocking than any difference between models."
      },
      {
        "type": "h2",
        "text": "Loop earplugs vs foam earplugs: which is better for sleep?"
      },
      {
        "type": "p",
        "text": "Foam blocks more on paper. Loop is more comfortable for many people and lasts far longer. For example, Moldex Spark Plugs, a common foam plug in the UK, are rated 35 dB SNR but are disposable ([Moldex spec page](https://www.moldex-europe.com/en/details/spark-plugs/))."
      },
      {
        "type": "table",
        "head": [
          "",
          "Loop Dream",
          "Foam (e.g. Moldex Spark Plugs)"
        ],
        "rows": [
          [
            "Noise rating",
            "27 dB SNR",
            "35 dB SNR"
          ],
          [
            "Reusable",
            "Yes, washable silicone",
            "No, disposable"
          ],
          [
            "Feel",
            "Soft silicone, low profile",
            "Expands to fill the ear; some find it presses"
          ],
          [
            "Upfront cost",
            "£44.95",
            "A few pounds for a pack"
          ],
          [
            "Best for",
            "Comfort and side sleeping",
            "Maximum blocking on a budget"
          ]
        ]
      },
      {
        "type": "p",
        "text": "I've been used to wearing foam ear plugs right through my career from my early army days in 1986, right up until 2025 in Budweiser. I've never liked the feeling of foam in my ears, especially how they dig in."
      },
      {
        "type": "p",
        "text": "My rule is simple: the best earplug is the one you can keep in for the whole sleep. A 35 dB plug that you pull out at 11am because your ears ache blocks nothing."
      },
      {
        "type": "h2",
        "text": "Who should buy Loop Dream earplugs?"
      },
      {
        "type": "p",
        "text": "Buy Loop Dream if:"
      },
      {
        "type": "ol",
        "items": [
          "You sleep on your side and foam plugs dig in.",
          "You want one pair that lasts, rather than buying foam every month.",
          "Your daytime noise is mostly steady: traffic, voices, a busy road."
        ]
      },
      {
        "type": "p",
        "text": "Skip it, or pair it with something else, if:"
      },
      {
        "type": "ol",
        "items": [
          "You need the highest blocking possible for a very loud street. Foam is rated higher.",
          "Your main problem is sudden noise such as drilling. No earplug fully stops that; add a masking sound.",
          "You only need something for the odd nap. Quiet 2 is less than half the price."
        ]
      },
      {
        "type": "p",
        "text": "The HSE suggests earplugs, white noise or background music to mask outside noise, plus a word with close neighbours about your sleep times. I agree: earplugs work best as one layer of the defence, not the whole of it. Our full guide to [brown noise for sleep](/resources/brown-noise-for-sleep/) explains why a deep, steady sound covers the gaps that earplugs leave."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Loop Dream is a comfortable, reusable sleep earplug that suits side sleepers and people who can't get on with foam. It won't beat cheap foam on raw blocking, and nothing stops the drill next door. Use it as one layer: earplugs for the steady noise, and a deep masking sound for the sudden stuff."
      },
      {
        "type": "p",
        "text": "My own setup after nights is Loop Dream in and my personalised mix in Sleyp of brown noise playing at a low, steady level with a forest sound mixed together. It's my go-to sleep mix, but everyone is different, so find your own personalised sleep mix and get those Loops in."
      },
      {
        "type": "p",
        "text": "For the full picture, read our guide to [sleeping with earplugs](/resources/earplugs-for-sleeping/) and the best earplugs for sleeping in the UK, which is coming soon in this series."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/): play brown noise in your browser while you wear your earplugs. The timer and saved mixes are free there too, and the Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "Some links on this page may be affiliate links. If you buy through them, Sleyp may earn a small commission at no extra cost to you."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Loop Earplugs: Loop Dream product page](https://www.loopearplugs.com/products/dream) (27 dB SNR, tip sizes, box contents, 100-day returns, 2-year warranty)",
          "[Loop Earplugs: Earplugs for sleeping, UK](https://www.loopearplugs.com/pages/earplugs-for-sleeping?country=GB) (UK prices: Dream £44.95, Quiet 2 £19.95)",
          "[Loop Earplugs: Loop Quiet 2](https://www.loopearplugs.com/products/quiet) (24 dB SNR)",
          "[Loop Earplugs: Loop Engage 2](https://www.loopearplugs.com/products/engage) (16 dB SNR, made for conversations)",
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise) (under 30 dB(A) in bedrooms at night; shift workers at increased risk)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) (7-8 hours' sleep; earplugs, white noise; talking to neighbours)",
          "[Moldex Europe: Spark Plugs](https://www.moldex-europe.com/en/details/spark-plugs/) (35 dB SNR, disposable foam)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Are Loop earplugs good for sleeping?",
        "answer": "Yes, if you choose Loop Dream. It is Loop's sleep model, rated 27 dB SNR with a low-profile shape for side sleepers. Loop Quiet 2 (24 dB) also works for lighter noise. Loop Engage is made for conversations and lets too much sound through for sleep."
      },
      {
        "question": "Loop Dream vs Loop Quiet: which is better for sleep?",
        "answer": "Loop Dream. It blocks more (27 dB vs 24 dB SNR) and is shaped for side sleeping. Quiet 2 costs £19.95 against £44.95 for Dream, so it makes sense if your daytime noise is light or you mainly use earplugs for naps and travel."
      },
      {
        "question": "Do Loop earplugs block snoring and traffic?",
        "answer": "They turn steady sounds such as traffic down a long way. I haven't tested them against snoring, but steady, low sound is what earplugs handle best. No earplug makes a room silent, and sudden, sharp noises like drilling, slamming doors or a barking dog can still get through. Pair them with a steady masking sound for those."
      },
      {
        "question": "Are Loop earplugs better than foam earplugs?",
        "answer": "They are more comfortable for many people and reusable, but foam blocks more on paper. Moldex Spark Plugs, for example, are rated 35 dB SNR against 27 dB for Loop Dream. Choose the plug you can keep in for the whole sleep."
      },
      {
        "question": "Can you hear an alarm with Loop earplugs in?",
        "answer": "Most people can still hear a loud alarm close to the bed, but it will sound quieter. Test it before you rely on it before a night shift. Put your phone near your pillow or use a vibrating alarm. From my personal experience, I could still hear my alarm enough to wake me, but if you're a deep sleeper, try them out first before relying on them for a work day."
      },
      {
        "question": "Is it OK to wear earplugs every day?",
        "answer": "For most people, yes, if you keep them clean and let your ears rest. Wash reusable tips regularly and stop if your ears become sore. Our guide to [sleeping with earplugs](/resources/earplugs-for-sleeping/) covers hygiene in more detail."
      }
    ]
  },
  {
    "slug": "earplugs-for-sleeping",
    "title": "Sleeping With Earplugs: The Complete Guide for Day Sleepers",
    "description": "Are earplugs safe to sleep in every day, and which block the most noise? A 40-year shift worker's guide to earplugs, fit and pairing them with masking sound.",
    "category": "Noise & Disturbance Defence",
    "categorySlug": "noise-disturbance-defence",
    "datePublished": "2026-10-04",
    "readMinutes": 10,
    "quickAnswer": "Earplugs are the cheapest way to cut daytime noise when you sleep after a night shift. Check the SNR rating on the pack (Loop Dream, for example, is rated 27 dB) and fit them properly. WHO recommends under 30 dB in a bedroom at night, so on the loudest days combine earplugs with a masking sound.",
    "blocks": [
      {
        "type": "p",
        "text": "Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. You've done twelve hours, the blind is down, and every car door and shout from the pavement lands like it's in the room. Over 40 years of shifts, from The King's Regiment to HM Prison Service at Strangeways, Walton and Guys Marsh, Jacobs Biscuits and Budweiser UK, a pair of earplugs has been in my kit more often than not. The Army provided me with the small foam ear plugs that were so uncomfortable to wear, but they were better than nothing. Today, earplugs have come a long way since 1987's foam version."
      },
      {
        "type": "p",
        "text": "This guide covers whether earplugs actually help, how much noise they block, which type suits a day sleeper, how to fit them, whether they're safe every day, and what to do when they aren't enough on their own."
      },
      {
        "type": "h2",
        "text": "Do earplugs help you sleep?"
      },
      {
        "type": "p",
        "text": "Yes, for most day sleepers they help a lot. Earplugs don't make the world silent, but they turn every noise down. That matters because it's the sudden jump in sound, a door slam or a dog, that pulls you out of sleep."
      },
      {
        "type": "p",
        "text": "The [WHO Europe noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise) recommends keeping bedrooms below 30 dB(A) at night for good sleep. It also names shift workers among the groups most sensitive to noise. Few day sleepers get anywhere near 30 dB at 11am, with school runs, delivery vans and bin lorries outside. Earplugs are the quickest way to close that gap."
      },
      {
        "type": "p",
        "text": "The UK regulator agrees. The [HSE's hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) say that if it's too noisy to sleep, consider earplugs, white noise or background music."
      },
      {
        "type": "p",
        "text": "What earplugs are good and bad at:"
      },
      {
        "type": "ul",
        "items": [
          "**Good at:** voices, traffic hiss, birdsong, a TV through the wall, the general hum of a street in daytime.",
          "**Less good at:** deep, low sounds and vibration, such as bass music, a lorry idling, or a drill going into a shared wall. Low sound travels through the walls and your own skull, so plugs only take the edge off."
        ]
      },
      {
        "type": "p",
        "text": "That second list is why earplugs work best as one layer, not the whole answer. More on that below."
      },
      {
        "type": "h2",
        "text": "How much noise do earplugs block? (SNR explained)"
      },
      {
        "type": "p",
        "text": "Look for the **SNR** on the pack. SNR stands for Single Number Rating. It's the standard figure used on hearing protection sold in the UK and Europe, given in decibels (dB). The higher the number, the more sound the plug cuts in testing."
      },
      {
        "type": "p",
        "text": "Three things to know before you buy:"
      },
      {
        "type": "ol",
        "items": [
          "**The rating assumes a good fit.** It comes from tests with the plug fitted properly. Push a foam plug in half-heartedly and you'll get far less than the pack says.",
          "**Higher isn't always better for sleep.** The plug you can wear comfortably for seven or eight hours beats a stronger one you pull out at noon. HSE says most adults need 7-8 hours, so comfort over that whole stretch is the real test.",
          "**Compare like with like.** Some brands quote SNR, some quote the American NRR figure, and the two aren't the same scale. Compare SNR with SNR."
        ]
      },
      {
        "type": "p",
        "text": "As an example, Loop's sleep model, [Loop Dream](https://www.loopearplugs.com/products/dream), is rated 27 dB SNR, which is Loop's highest rating. It comes with foam and silicone tips in sizes XS to L, and a low-profile body made with side sleepers in mind. I've tested it properly in my [Loop earplugs for sleeping review](/resources/loop-earplugs-for-sleeping-review/)."
      },
      {
        "type": "h2",
        "text": "Foam vs silicone vs wax vs reusable: which earplugs are best for sleeping?"
      },
      {
        "type": "p",
        "text": "There are five main types. Each one trades off blocking power, comfort and cost."
      },
      {
        "type": "table",
        "head": [
          "Type",
          "How it feels",
          "Best for",
          "Downsides"
        ],
        "rows": [
          [
            "Foam (disposable)",
            "Soft, rolls down then expands to fill the ear canal",
            "Most blocking for the least money",
            "Replace often; some people feel pressure after a few hours"
          ],
          [
            "Silicone putty",
            "Moulds over the ear opening rather than going in",
            "People who hate anything inside the ear canal",
            "Can pick up hair and fluff; less blocking than well-fitted foam"
          ],
          [
            "Wax",
            "Warms and shapes to your ear",
            "A snug seal with a soft, natural feel",
            "Can leave marks on the pillow; single or short use"
          ],
          [
            "Reusable (silicone or foam-tipped)",
            "Firm body with swap-in tips in several sizes",
            "Daily use, side sleepers, less waste",
            "Costs more up front; must be washed regularly"
          ],
          [
            "Custom moulded",
            "Made from impressions of your own ears",
            "Comfort over years of daily day sleeps",
            "Most expensive; needs a fitting appointment"
          ]
        ]
      },
      {
        "type": "p",
        "text": "If you're new to earplugs, start with a cheap mixed pack of foam. Find out what shape and firmness your ears put up with before you spend money on reusable or custom plugs."
      },
      {
        "type": "p",
        "text": "On the worst streets I've lived, I've ended up with moulded earplugs, because nothing else stayed comfortable through a full day's sleep. You can browse the types we rate in the [Sleyp shop](/shop/), and a full comparison is coming in the Best Earplugs for Sleeping in the UK guide."
      },
      {
        "type": "h2",
        "text": "How do you fit earplugs properly?"
      },
      {
        "type": "p",
        "text": "Most people who say earplugs don't work have never fitted them properly. Foam plugs need a few seconds of care. Here's the method:"
      },
      {
        "type": "ol",
        "items": [
          "**Wash your hands.** You're putting something in your ear for eight hours.",
          "**Roll the foam plug** between your finger and thumb into a thin, tight cylinder with no creases.",
          "**Straighten your ear canal.** Reach over your head with the opposite hand and gently pull the top of your ear up and back.",
          "**Slide the plug in** while it's still compressed, until it feels snug but not forced. Don't push it deep.",
          "**Hold it for 20-30 seconds** with a fingertip while the foam expands to fill the canal.",
          "**Test the seal.** Talk out loud. Your own voice should sound muffled and boomy. If it doesn't, take it out and try again."
        ]
      },
      {
        "type": "p",
        "text": "For reusable plugs, try every tip size in the box. Most people need a different size from the one fitted at the factory, and some need a different size in each ear. A tip that's too big will ache by mid-morning; one that's too small lets sound straight past."
      },
      {
        "type": "p",
        "text": "Side sleepers should pick low-profile plugs that sit flush with the ear. Anything that sticks out gets pushed in by the pillow, which is uncomfortable and can make you wake up to adjust it."
      },
      {
        "type": "h2",
        "text": "Are earplugs safe to wear every day?"
      },
      {
        "type": "p",
        "text": "For most people, yes, if you keep them clean and comfortable. Plenty of night workers wear them for years. A few simple habits keep it that way:"
      },
      {
        "type": "ul",
        "items": [
          "**Replace foam plugs often.** Once they stop expanding properly, or look grubby, bin them.",
          "**Wash reusable plugs** as the maker suggests, and let them dry fully before you put them back in.",
          "**Don't share them.**",
          "**Give your ears a break** on days off if you can.",
          "**Don't force them in deep.** A plug should seal the entrance of the canal, not travel down it."
        ]
      },
      {
        "type": "p",
        "text": "Earplugs can push earwax further in for some people. If your ears feel blocked, itchy or sore, stop wearing them for a while and ask a pharmacist or your GP to take a look."
      },
      {
        "type": "h2",
        "text": "Can you hear an alarm with earplugs in?"
      },
      {
        "type": "p",
        "text": "Usually, yes, if it's loud and close. A phone alarm on the bedside table at full volume will get through most earplugs. But don't find out on the afternoon before your first night shift. Test it on a day off."
      },
      {
        "type": "p",
        "text": "If you're a deep sleeper, back it up:"
      },
      {
        "type": "ul",
        "items": [
          "a vibrating alarm on a smartwatch or fitness band",
          "a phone under the pillow on vibrate as well as ring",
          "a second alarm across the room, so you have to get up"
        ]
      },
      {
        "type": "p",
        "text": "Think about smoke alarms too, especially if you live alone. Check you can hear yours from bed with your plugs in, and if not, look at a louder or linked alarm. To be 100% safe, I used vibrate on my watch to make sure I got up for my night shift, especially at Budweiser on the 2 days, 2 nights shift pattern."
      },
      {
        "type": "h2",
        "text": "Earplugs plus masking sound: why the combination works best"
      },
      {
        "type": "p",
        "text": "Earplugs cut the peaks. A masking sound fills the gaps. Together they do far more than either one alone."
      },
      {
        "type": "p",
        "text": "Getting in bed when everyone else is leaving the house for school and work is great, until the next-door neighbour decides to renovate their house and starts drilling. Earplugs take the top off the drill, but you still hear it start and stop. Every start is a fresh jolt. Add a steady masking sound underneath and that start-stop is far less sudden, so your brain is less likely to wake you for it."
      },
      {
        "type": "p",
        "text": "Which sound to use depends on the noise you're fighting:"
      },
      {
        "type": "table",
        "head": [
          "Daytime noise",
          "Earplugs alone",
          "Best masking sound to add"
        ],
        "rows": [
          [
            "Voices, kids playing out, TV through the wall",
            "Good",
            "Pink noise or a fan hum"
          ],
          [
            "Traffic, buses, delivery vans",
            "Fair",
            "Brown noise"
          ],
          [
            "Drilling, hammering, lawnmowers",
            "Fair, the starts and stops still get through",
            "Brown noise or red noise at a steady, moderate volume"
          ],
          [
            "Bass music, lorries idling, vibration",
            "Poor",
            "Brown noise, plus moving the bed away from the shared wall if you can"
          ]
        ]
      },
      {
        "type": "p",
        "text": "If you're not sure which colour suits your street, my [brown noise vs white noise guide](/resources/brown-noise-vs-white-noise-for-daytime-disturbances/) walks through it, and the [Noise Calibration Tool](/tools/noise-calibration-tool/) helps you match your sound to the noise outside. For the full rundown of sound colours, start with [brown noise for sleep](/resources/brown-noise-for-sleep/), then see [pink noise for sleep](/resources/pink-noise-for-sleep/), [red noise](/resources/red-noise/) and [fan noise for sleeping](/resources/fan-noise-for-sleeping/)."
      },
      {
        "type": "p",
        "text": "Two rules for the combination:"
      },
      {
        "type": "ol",
        "items": [
          "**Play the sound from a speaker, not earbuds**, at a modest volume. With earplugs in, you'll be tempted to turn it up. Don't. It only needs to blur the background, not drown it.",
          "**Start it as you get into bed**, not once the noise begins. A steady sound from the start means the first car door doesn't catch you out."
        ]
      },
      {
        "type": "p",
        "text": "Light matters as much as sound for daytime sleep. For the other half of the job, see my guide to the [best blackout strategies for daytime sleep](/resources/best-blackout-strategies-for-daytime-sleep/)."
      },
      {
        "type": "h2",
        "text": "What if earplugs aren't enough? Talking to neighbours and your council"
      },
      {
        "type": "p",
        "text": "Some noise no earplug will beat. Then it's time to deal with the source."
      },
      {
        "type": "p",
        "text": "**Start with a friendly word.** The [HSE's advice for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) includes telling your neighbours when you sleep. Most people simply don't know there's someone asleep next door at 11am. A short note through the door with your sleep times and your shift pattern often does more than any complaint."
      },
      {
        "type": "p",
        "text": "**Then fix the room.** Heavy curtains, a draught excluder on the bedroom door and moving the bed off a shared wall all cut the sound before it reaches your ears."
      },
      {
        "type": "p",
        "text": "**If it's persistent and unreasonable, keep a noise diary and contact your council.** Under the [GOV.UK guidance on noise nuisances](https://www.gov.uk/guidance/noise-nuisances-how-councils-deal-with-complaints), councils can investigate noise that may be a statutory nuisance at any time of day or night. But the special night-noise warning rules only cover 11pm to 7am, which is exactly when a night worker is awake. So daytime noise can still be a nuisance, but you'll be relying on the general rules rather than the night ones. A diary of dates, times and what the noise was makes any complaint far stronger."
      },
      {
        "type": "p",
        "text": "For a full step-by-step guide, read [Noisy Neighbours When You Sleep in the Day](/resources/noisy-neighbours-daytime-sleep/)."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Earplugs are the first thing every day sleeper should own. Pick a type you can wear for a full sleep, fit them properly, and keep them clean. On the worst days, when the drill starts or the mowers come out, layer a steady masking sound underneath. Earplugs cut the peaks; Sleyp fills the gaps. Comparing apps? See the [best white noise app for day sleepers](/resources/white-noise-app-for-day-sleepers/)."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/) in your browser: start a brown, pink or fan-hum mix as you get into bed tonight. The timer and saved mixes are free there too, and the Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[GOV.UK: Noise nuisances: how councils deal with complaints](https://www.gov.uk/guidance/noise-nuisances-how-councils-deal-with-complaints)",
          "[Loop Earplugs: Loop Dream product page](https://www.loopearplugs.com/products/dream)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is it OK to sleep with earplugs every day?",
        "answer": "For most people, yes. Keep them clean, replace foam plugs often, wash reusable ones, and don't push them deep. If your ears feel blocked, itchy or sore, take a break and ask a pharmacist or your GP to check them."
      },
      {
        "question": "Which earplugs block the most noise?",
        "answer": "Check the SNR rating on the pack: the higher the number, the more they block when fitted properly. Well-fitted foam plugs block a lot for very little money. Loop Dream, Loop's sleep model, is rated 27 dB SNR. Comfort over seven or eight hours matters as much as the number."
      },
      {
        "question": "Can you hear an alarm with earplugs in?",
        "answer": "Usually, if it's loud and close to your head. Test your phone alarm on a day off before you rely on it, and back it up with a vibrating watch or a second alarm across the room. Check you can still hear your smoke alarm from bed."
      },
      {
        "question": "Are earplugs or white noise better for daytime sleep?",
        "answer": "Use both if you can. Earplugs turn everything down; a steady sound such as brown or pink noise covers the sudden changes that wake you. The HSE lists earplugs, white noise and background music as options for shift workers when it's too noisy to sleep."
      },
      {
        "question": "Why do my ears hurt after sleeping with earplugs?",
        "answer": "Usually the plug is the wrong size, pushed in too deep, or pressed by the pillow. Try a smaller tip, a softer foam, or a low-profile plug for side sleeping. If the soreness carries on after you stop, speak to a pharmacist or your GP."
      },
      {
        "question": "Can earplugs block a neighbour's drilling?",
        "answer": "Not completely. They take the edge off, but low, vibrating sounds travel through walls. Pair earplugs with a steady brown noise and, if the work goes on for days, have a word with your neighbour about your sleep hours."
      }
    ]
  },
  {
    slug: "fan-noise-for-sleeping",
    title: "Fan Noise for Sleeping: Why So Many Night Workers Can't Sleep Without One",
    description: "Why does fan noise help you sleep, and is it bad to sleep with a fan on? A night-shift veteran on fan noise, cooler rooms and fan-hum sound for daytime sleep.",
    category: "Noise & Disturbance Defence",
    categorySlug: "noise-disturbance-defence",
    datePublished: "2026-09-30",
    readMinutes: 8,
    quickAnswer: "Fan noise helps you sleep because it is a steady, broadband sound that covers sudden noises such as voices, traffic and a lawnmower. A fan also cools the room, which matters when you sleep through the warmest part of the day. For the sound without the draught or running cost, a fan-hum recording does the same masking job.",
    blocks: [
      {
        "type": "p",
        "text": "You get in bed after a night shift, the blind is down, the house is finally quiet, and then the neighbours decide to mow their lawns. For years the fan on my bedside table was my first line of defence. It didn't stop the mower, but it took the edge off it enough for me to drift back off. On a night shift in Strangeways prison, the home fan on my bedside table was enough to help me get to sleep if I was absolutely knackered. Thinking back, it was very basic noise masking, but it helped."
      },
      {
        "type": "p",
        "text": "Plenty of night workers can't sleep without a fan on, even in winter. Here is why it works, when it doesn't, and how to avoid the downsides."
      },
      {
        "type": "h2",
        "text": "Why does fan noise help you sleep?"
      },
      {
        "type": "p",
        "text": "Fan noise works by **masking**. Your brain doesn't wake you because a sound is loud; it wakes you because a sound changes. A car door, a dog, a drill starting up next door: each one is a sudden jump above a quiet background. A fan raises that background with a steady whoosh, so the jump is smaller and less likely to pull you out of sleep."
      },
      {
        "type": "p",
        "text": "Three things make a fan a good masker:"
      },
      {
        "type": "ul",
        "items": [
          "**It is broadband.** A fan's hum covers a wide spread of frequencies at once, so it blurs lots of different noises, not just one.",
          "**It is steady.** There is no rhythm, melody or words for your brain to follow.",
          "**It is predictable.** After a few minutes it fades into the background, which is exactly what you want."
        ]
      },
      {
        "type": "p",
        "text": "This matters more for shift workers than for anyone else. The [WHO Europe noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise) recommends less than 30 dB(A) in bedrooms at night for good sleep, and says shift workers are at increased risk from noise \"because their sleep structure is under stress\". No normal street is that quiet at 10am. Even the [HSE's tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) say that if it's too noisy to sleep, consider earplugs, white noise or background music."
      },
      {
        "type": "h2",
        "text": "Does fan noise count as white noise?"
      },
      {
        "type": "p",
        "text": "Not quite, but it's close. True white noise has equal energy across every frequency, which gives it a bright hiss. Most fans produce more low and mid-range sound than high, so a fan usually sounds deeper and softer than white noise, somewhere between white and [brown noise for sleep](/resources/brown-noise-for-sleep/)."
      },
      {
        "type": "table",
        "head": [
          "Sound",
          "What it sounds like",
          "Best at masking",
          "Worth knowing"
        ],
        "rows": [
          [
            "Fan hum",
            "Soft, steady whoosh",
            "Voices, general street noise",
            "Also cools the room; tone varies by fan"
          ],
          [
            "White noise",
            "Bright, even hiss",
            "High-pitched sounds, chatter",
            "Some people find it harsh over 7-8 hours"
          ],
          [
            "[Pink noise](/resources/pink-noise-for-sleep/)",
            "Balanced, gentler than white",
            "Light, mixed background noise",
            "A good middle ground for light sleepers"
          ],
          [
            "Brown noise",
            "Deep rumble",
            "Traffic, engines, drilling, mowers",
            "Many day sleepers prefer it for low noise"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Is it bad to sleep with a fan on?"
      },
      {
        "type": "p",
        "text": "For most people, no. Sleeping with a fan on is a comfort and noise tool, and millions of people do it every night (or, in our case, every day). There are a few practical downsides worth knowing:"
      },
      {
        "type": "ul",
        "items": [
          "**Moving air.** Some people notice a dry mouth or eyes, or a stiff neck from a fan blowing straight at them. Point it across the room, not at your face.",
          "**Dust.** A fan pushes dust around the bedroom. Wipe the blades and grille every couple of weeks.",
          "**Rattles and clicks.** An oscillating fan changes tone as it turns, and a loose grille can tick. Both are exactly the kind of change that can wake you. Switch oscillation off for sleep.",
          "**Winter.** A fan cools the room when you don't want it cooled, so the sound starts to cost you comfort."
        ]
      },
      {
        "type": "p",
        "text": "It's also worth being honest about the science. A [2021 systematic review in Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283) looked at 38 studies of continuous white or broadband noise and rated the quality of evidence that it improves sleep as very low. So a fan isn't a magic sleep switch. What it does well is mask the sudden daytime noises that a normal night sleeper never has to deal with."
      },
      {
        "type": "h2",
        "text": "Why can't I sleep without a fan?"
      },
      {
        "type": "p",
        "text": "Mostly habit. If you've slept with a fan for years, your brain links that whoosh with switching off. Take it away and the bedroom suddenly feels too quiet, and every creak, car and voice stands out. For day sleepers it's worse, because the daytime world outside never really goes quiet. Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep."
      },
      {
        "type": "p",
        "text": "That habit isn't a problem in itself. It only becomes one when you're away from home: a hotel on a training course, a relative's spare room, or a cold spell when the fan makes you shiver. That's where a recorded fan sound on your phone earns its keep. Whilst on my Northern Ireland Army training in Hythe and Lydd, I was new to the regiment and didn't yet have a small fan, and mobile phones had not yet been invented in 1987."
      },
      {
        "type": "h2",
        "text": "Real fan or fan-hum sound: which is better?"
      },
      {
        "type": "p",
        "text": "It depends on the season and what you need the fan for."
      },
      {
        "type": "table",
        "head": [
          "",
          "Real fan",
          "Fan-hum recording"
        ],
        "rows": [
          [
            "Cools the room",
            "Yes",
            "No"
          ],
          [
            "Sound stays steady",
            "Not always (rattles, oscillation)",
            "Yes"
          ],
          [
            "Draught on your face",
            "Yes, if pointed at you",
            "No"
          ],
          [
            "Running cost",
            "Electricity for 7-8 hours a day",
            "Phone or speaker only"
          ],
          [
            "Works away from home",
            "Only if you pack it",
            "Yes"
          ],
          [
            "Control over volume and tone",
            "Limited to fan speeds",
            "Full control, can mix with other sounds"
          ]
        ]
      },
      {
        "type": "p",
        "text": "A simple rule of thumb: in summer, use a real fan for the cooling and let the sound come with it. In winter, switch to a fan-hum recording so you keep the sound without chilling the room. If a fan's mechanical drone starts to grate, [rain sounds for sleeping](/resources/rain-sounds-for-sleeping/) give you the same steady cover with a softer, natural feel."
      },
      {
        "type": "h2",
        "text": "How do you use a fan to sleep through a summer day?"
      },
      {
        "type": "p",
        "text": "Summer is when day sleepers suffer most. You get home at 7am into full sun and try to sleep while the house heats up around you. [The Sleep Charity](https://thesleepcharity.org.uk/information-support/adults/sleep-environment/) puts the ideal bedroom temperature at around 16-18C and says temperatures over 24C are likely to cause restlessness (more in my guide to the [ideal bedroom temperature for sleep](/resources/ideal-bedroom-temperature-for-sleep/)). Here's how to get closer to that:"
      },
      {
        "type": "ol",
        "items": [
          "**Keep the sun out early.** Close blinds and curtains on the sunny side of the house before the heat builds, not when you get into bed.",
          "**Set the fan up before you lie down.** Oscillation off, pointed across the bed rather than at your face, on a steady speed.",
          "**Try the ice trick.** The Sleep Charity suggests putting a tray of ice and a little water in front of an electric fan on really hot days to cool the air further.",
          "**Go light on bedding.** A thin cotton sheet beats a duvet in a heatwave.",
          "**Add a masking layer if needed.** If the fan alone doesn't cover the mower or the school run, add brown noise underneath at a low level."
        ]
      },
      {
        "type": "p",
        "text": "We'll cover cooling in much more detail in our upcoming guide, Ideal Bedroom Temperature for Sleep."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Fan noise helps day sleepers because it turns sudden noises into a steady background, and in summer it cools the room too. It isn't a cure-all, and the research on noise for sleep is thin, but as a masking tool for the mower, the school run and the neighbour's van, it earns its place. Use a real fan when you need the cooling, and a fan-hum sound when you don't."
      },
      {
        "type": "p",
        "text": "Want the sound without the draught? [Try Sleyp free](/session/) in your browser and layer fan hum with brown noise or rain. The Sleyp iOS app is coming soon with 22 free library sounds, including Desk Fan."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[The Sleep Charity: Sleep environment](https://thesleepcharity.org.uk/information-support/adults/sleep-environment/)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise)",
          "[Riedy et al. (2021), Noise as a sleep aid: a systematic review, Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)"
        ]
      }
    ],
    faqs: [
      {
        "question": "Is it bad to sleep with a fan on every day?",
        "answer": "For most people, no. Keep the fan clean, point it across the room rather than at your face, and switch oscillation off so the sound stays steady. If a fan leaves you cold or uncomfortable, use a fan-hum recording instead so you keep the masking without the draught."
      },
      {
        "question": "Why can't I sleep without a fan?",
        "answer": "Usually it's habit. After years of sleeping with a fan, your brain links the sound with switching off, and a silent room makes every small noise stand out. That's common for day sleepers, whose bedrooms are rarely quiet. A recorded fan sound on your phone gives you the same cue when you're away from home."
      },
      {
        "question": "Does fan noise count as white noise?",
        "answer": "Not exactly. White noise has equal energy across all frequencies and sounds like a bright hiss. Most fans are heavier in the low and mid range, so they sound softer, somewhere between white and brown noise. Both work in the same way: by masking sudden sounds with a steady background."
      },
      {
        "question": "Is fan noise or brown noise better for daytime sleep?",
        "answer": "It depends on what's outside. Fan noise suits general street noise and voices, and cools the room in summer. Brown noise is deeper, so many day sleepers find it better against traffic, drilling and lawnmowers. You can layer the two: fan hum on top, brown noise underneath."
      },
      {
        "question": "How loud should fan noise be for sleeping?",
        "answer": "Just loud enough to blur the background noise, not so loud that it becomes the noise. A good test is that you could still talk over it comfortably. If a fan has to be on its highest setting to cover the street, add earplugs or a deeper masking sound instead of turning it up further."
      },
      {
        "question": "Can I use a fan sound in winter instead of a real fan?",
        "answer": "Yes, and it's often the better option. A fan-hum recording gives you the same steady sound without cooling a room that's already cold, and without the draught. You can also control the volume and tone, and play it anywhere you sleep."
      }
    ],
  },
  {
    slug: "red-noise",
    title: "Red Noise Explained: Is It Just Brown Noise by Another Name?",
    description: "Red noise explained in plain English: how it relates to brown noise, what it sounds like, and whether it can help you sleep during the day after night shifts.",
    category: "Noise & Disturbance Defence",
    categorySlug: "noise-disturbance-defence",
    datePublished: "2026-09-29",
    readMinutes: 5,
    quickAnswer:
      "Red noise is another name for brown noise, also called Brownian noise: a steady sound whose power drops as the pitch rises, so the deep, low tones are loudest. It sounds like a deep rumble, such as thunder, a waterfall or heavy rain. For day sleepers it's a strong masker for traffic and drilling, but the research is still thin.",
    blocks: [
      { type: "p",
        text: "Getting into bed as everyone else leaves the house for school and work is great, until the next door neighbour decides to renovate and starts drilling. That's when most day sleepers go looking for a sound that can stand up to it. Search around and you soon find two names that seem to describe the same thing: red noise and brown noise." },
      { type: "p",
        text: "They do. If you've read my guide to [brown noise for sleep](/resources/brown-noise-for-sleep/), you already know most of this. This post clears up the naming, so you know exactly what you're pressing play on." },
      { type: "h2",
        text: "What is red noise?" },
      { type: "p",
        text: "Red noise is random sound that covers the whole hearing range, with the power falling away as the pitch goes up. The low frequencies get the most energy and the high ones the least. The result is a soft, heavy rumble with none of the hiss you hear in white noise." },
      { type: "p",
        text: "The \"red\" comes from light. White light contains every colour evenly, which is where white noise gets its name. Red light sits at the long-wavelength end of the spectrum, so a sound weighted towards the low end got called red." },
      { type: "p",
        text: "\"Brown\" isn't a colour at all. [Cleveland Clinic](https://health.clevelandclinic.org/brown-noise) explains it's named after Robert Brown, the scientist who described Brownian motion: the random way pollen particles move when they're suspended in water or air." },
      { type: "h2",
        text: "Is red noise the same as brown noise?" },
      { type: "p",
        text: "Yes. It's one sound with three names. The [Sleep Foundation](https://www.sleepfoundation.org/noise-and-sleep/white-noise) puts it plainly: \"Brown noise, also called red noise, contains sounds from every octave of the sound spectrum, but the power behind frequencies decreases with each octave.\"" },
      { type: "table",
        head: ["Name", "Where the name comes from", "What you hear"],
        rows: [
          ["Red noise", "Light: red is the low-frequency, long-wavelength end of the spectrum", "A deep, steady rumble"],
          ["Brown noise", "Robert Brown, who described Brownian motion", "The same deep rumble"],
          ["Brownian noise", "The full scientific name, from Brownian motion", "The same deep rumble"],
        ] },
      { type: "p",
        text: "One practical point: these are labels, and every app generates its own version. Two tracks both called \"red noise\" can sound slightly different depending on how they were made and filtered. Trust your ears over the name. If a track sounds lighter and more like falling rain, you're probably closer to [pink noise](/resources/pink-noise-for-sleep/), which keeps more of the higher tones." },
      { type: "h2",
        text: "What does red noise sound like in real life?" },
      { type: "p",
        text: "Think of any big, steady, low sound. [Cleveland Clinic](https://health.clevelandclinic.org/brown-noise) lists rushing waterfalls or rivers, rumbling thunder, crashing waves, a running shower, heavy rainfall and heavy wind blowing through trees." },
      { type: "p",
        text: "Anyone who has worked nights in a factory or a brewery knows that deep, constant hum that fades into the background after the first hour. In Budweiser, that constant background noise was always there, all through the night. The constant noise of the mills, conversion vessels and kettles running through the night." },
      { type: "p",
        text: "That's the point of red noise for sleep. It isn't meant to be listened to. It's meant to become the background, so the sounds that would normally wake you stand out less." },
      { type: "h2",
        text: "Is red noise good for daytime sleep after nights?" },
      { type: "p",
        text: "It can help, but be honest with yourself about what the science says. The Sleep Foundation notes that brown noise's \"effect on sleep has not been widely studied.\" Research on sound as a sleep aid in general is thin too. A 2021 review of 38 studies rated the quality of evidence that continuous noise improves sleep as \"very low\", and warned it \"may also negatively affect sleep and hearing\" ([Riedy et al., Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283))." },
      { type: "p",
        text: "So why do so many day sleepers swear by it? Because what usually wakes you after a night shift isn't the level of noise. It's the jump: a van door, a dog, a lorry reversing, a drill starting up. A steady sound underneath makes each jump smaller." },
      { type: "p",
        text: "Red noise suits daytime sleep because the worst daytime noises are deep ones. Buses, lorries, road traffic, drilling and bass through a party wall all carry a lot of low-frequency energy. As a rule of thumb, a sound masks best when it shares frequencies with the noise you're trying to cover, and red noise is strongest exactly where those sounds are. White noise's hiss sits higher up, which is why it can feel harsh and still let the rumble through." },
      { type: "h2",
        text: "How to use red noise for daytime sleep" },
      { type: "ol",
        items: [
          "**Keep the volume low.** The Sleep Foundation suggests a level similar to a background conversation or light rustling, and notes that noise of 70 decibels or more, like city traffic, \"can become hazardous over time\". Turn it up only until the street stops standing out.",
          "**Use a speaker across the room, not earbuds.** It spreads the sound and spares your ears over a seven-hour sleep.",
          "**Run it for your whole sleep.** The school run, the bin lorry and the afternoon deliveries don't stop after a 30-minute timer.",
          "**Pair it with [earplugs](/resources/earplugs-for-sleeping/) on bad days.** Earplugs cut the peaks and red noise fills the gaps around them.",
          "**Blend if it feels too heavy.** If a pure rumble makes your ears feel \"full\", layer a little pink noise or [green noise](/resources/green-noise/) on top, or swap to rain. Give any change three or four day sleeps before you judge it.",
        ] },
      { type: "h2",
        text: "The bottom line" },
      { type: "p",
        text: "Red noise and brown noise are the same thing: a deep, steady rumble with the low tones loudest. The science on it as a sleep aid is thin, but as a masking sound it's well matched to the deep noises that wreck daytime sleep. Keep it low, run it for your whole sleep, and blend in something lighter if it feels too heavy." },
      { type: "p",
        text: "[Try Sleyp free](/session/) and play the deep rumble (brown/red) sound in your browser. The timer and saved mixes are free there too, and the Sleyp iOS app is coming soon." },
      { type: "p",
        text: "**More in this series:** [brown noise for sleep](/resources/brown-noise-for-sleep/) · [pink noise for sleep](/resources/pink-noise-for-sleep/) · [rain sounds for sleeping](/resources/rain-sounds-for-sleeping/) · [green noise](/resources/green-noise/) · [fan noise for sleeping](/resources/fan-noise-for-sleeping/)" },
      { type: "h3",
        text: "Sources" },
      { type: "ul",
        items: [
          "[Sleep Foundation (2025), What is white noise? Medically reviewed by Dr Anis Rehman](https://www.sleepfoundation.org/noise-and-sleep/white-noise)",
          "[Cleveland Clinic (2024), What is brown noise and how can it benefit you?](https://health.clevelandclinic.org/brown-noise)",
          "[Riedy et al. (2021), Noise as a sleep aid: a systematic review, Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)",
        ] },
    ],
    faqs: [
      {
        question: "Is red noise the same as brown noise?",
        answer:
          "Yes. Red noise, brown noise and Brownian noise are three names for the same sound: every frequency is present, but the power drops as the pitch rises, so the low tones dominate.",
      },
      {
        question: "Is red noise good for sleep?",
        answer:
          "It can help as a masking sound, especially against deep daytime noise like traffic and drilling. But there's little research on it specifically, and a 2021 review rated the evidence that continuous noise improves sleep as very low. Judge it by how you actually sleep.",
      },
      {
        question: "What does red noise sound like?",
        answer:
          "A deep, steady rumble: think heavy rain, a waterfall, rolling thunder or strong wind through trees. It has none of the hiss of white noise.",
      },
      {
        question: "Why is it called red noise?",
        answer:
          "It borrows from light. White light has every colour evenly, like white noise. Red is the long-wavelength end of the spectrum, so sound weighted to the low end became \"red\". The name \"brown\" comes from Robert Brown and Brownian motion, not the colour.",
      },
      {
        question: "Red noise vs white noise: which is better for daytime sleep?",
        answer:
          "For most daytime noise, red usually wins, because lorries, buses and drilling are deep sounds and red noise is strongest in the low frequencies. White noise can suit sharper, higher sounds, but many people find its hiss harsh over a long sleep.",
      },
      {
        question: "Is it safe to sleep with red noise on all day?",
        answer:
          "Keep the volume low, similar to a background conversation, and play it through a speaker rather than earbuds. The Sleep Foundation notes that noise of 70 decibels or more can become hazardous over time.",
      },
    ],
  },
  {
    slug: "green-noise",
    title: "Green Noise: What It Is and Whether It Helps You Sleep",
    description: "Green noise explained: what it sounds like, how it compares with white, pink and brown noise, and what the limited evidence says about using it for sleep.",
    category: "Noise & Disturbance Defence",
    categorySlug: "noise-disturbance-defence",
    datePublished: "2026-09-29",
    readMinutes: 6,
    quickAnswer:
      "Green noise is a nickname for steady sound centred on the middle frequencies, often described as the hum of nature, like a stream or distant surf. There is very little sleep research behind it. Some people find it softer than white noise, so treat it as one option in your masking mix, not a proven sleep aid.",
    blocks: [
      { type: "p",
        text: "Getting into bed after a night shift, just as the neighbours decide to mow their lawns, is a feeling every day sleeper knows. When that happens you'll try anything, and green noise is the latest colour doing the rounds on social media." },
      { type: "p",
        text: "Green noise is a new noise that's getting great reviews lately, and we will be adding it to the Sleyp sounds soon. It's similar to a stream or the sea, so this fits perfectly into my sound mix favourites, as anything with water seems to calm me." },
      { type: "p",
        text: "Here's what green noise is, what the evidence says, and who might get on with it." },
      { type: "h2",
        text: "What is green noise?" },
      { type: "p",
        text: "Green noise is steady background sound with extra weight in the middle of the hearing range. The [Sleep Foundation](https://www.sleepfoundation.org/noise-and-sleep/what-is-green-noise) describes it as sound that \"amplifies the frequencies in the middle of that range\", which gives it a natural feel, like the ocean or a stream, without the harsh high tones of white noise." },
      { type: "p",
        text: "One honest point: white, pink and brown noise have precise technical definitions. Green noise doesn't. It's a popular label rather than a standard, and the Sleep Foundation doesn't give an exact frequency range for it. That means one app's green noise can sound quite different from another's, so trust your ears over the name." },
      { type: "h2",
        text: "How does green noise compare with white, pink and brown noise?" },
      { type: "table",
        head: ["Colour", "Where the energy sits", "What it sounds like", "Best at masking"],
        rows: [
          ["White", "Evenly across all frequencies", "A continuous hiss, like TV static", "Sharp, high sounds"],
          ["Pink", "More in the lower frequencies", "Falling rain or a water sprinkler", "General household noise"],
          ["Green", "Boosted middle frequencies", "A stream, the sea, a gentle outdoor hum", "Voices, TVs and everyday mid-range noise"],
          ["Brown", "Mostly in the low frequencies", "Thunder or a distant jet engine", "Traffic, lorries, drilling and bass through walls"],
        ] },
      { type: "p",
        text: "Sound descriptions follow the [Sleep Foundation's guide](https://www.sleepfoundation.org/noise-and-sleep/what-is-green-noise). The masking column is a practical rule of thumb: a sound covers other sounds best when it shares their frequencies. For a deeper look at the heavy end of the scale, see my guide to [brown noise for sleep](/resources/brown-noise-for-sleep/)." },
      { type: "h2",
        text: "Does green noise help you sleep? What the evidence says" },
      { type: "p",
        text: "The short answer is that nobody knows yet. The Sleep Foundation says research into green noise and sleep \"is limited\", even though it's gaining popularity on social media." },
      { type: "p",
        text: "The wider evidence on sound as a sleep aid is thin too. A 2021 review of 38 studies found that continuous noise tended to shorten the time taken to fall asleep and reduce broken sleep, but the effects were either not significant or not tested statistically. The authors rated the quality of evidence that continuous noise improves sleep as \"very low\", and warned it may also negatively affect sleep and hearing ([Riedy et al., Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283))." },
      { type: "p",
        text: "The studies you may have seen about noise and deeper sleep used short bursts of [pink noise](/resources/pink-noise-for-sleep/) timed to brain waves in a lab. That isn't the same as a green noise track playing all day, so don't read those results across." },
      { type: "p",
        text: "So why bother? Because the practical case for masking doesn't depend on the colour. What usually wakes a day sleeper is the jump in sound: a car door, a dog, a delivery van. A steady sound underneath makes that jump smaller. The Sleep Foundation also notes that shift workers who need to sleep while outside noise such as traffic is loud might benefit from a sound machine." },
      { type: "h2",
        text: "Who might prefer green noise?" },
      { type: "p",
        text: "Green noise is worth a try if one of these sounds like you:" },
      { type: "ul",
        items: [
          "**You find white noise too harsh.** Green noise drops the hiss at the top end, which some people find easier to live with over a seven-hour day sleep.",
          "**You find brown noise too heavy.** If a deep rumble feels boomy or makes your ears feel \"full\", green sits in the middle.",
          "**Your problem noise is mid-range.** Voices on the street, next door's TV and general household noise sit largely in the middle frequencies, where green noise is strongest.",
          "**You like nature sounds.** Green noise sits close to the feel of a stream or the sea. If [rain sounds](/resources/rain-sounds-for-sleeping/) already work for you, green noise may too.",
        ] },
      { type: "p",
        text: "It's less suited to deep, low noise. Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep, and green noise may be enough for that. But for a busy road, lorries or a drill through the wall, brown noise usually holds up better. Many day sleepers end up with a blend." },
      { type: "h2",
        text: "How to try green noise after a night shift" },
      { type: "ol",
        items: [
          "**Give it a fair test.** Use it for three or four day sleeps before you judge it. One morning tells you very little.",
          "**Set the lowest volume that works.** Turn it up until the street stops standing out, then stop. If you'd have to raise your voice to talk over it, it's too loud.",
          "**Play it through a speaker across the room** rather than earbuds, to spread the sound and spare your ears.",
          "**Run it for your whole sleep.** The school run and bin lorries don't stop after a 30-minute timer.",
          "**Compare and blend.** Try brown and pink on other days. If low rumble still gets through, layer brown noise under the green.",
        ] },
      { type: "h2",
        text: "The bottom line" },
      { type: "p",
        text: "Green noise is a softer, mid-range sound with a natural feel. The research on it is almost non-existent, but as a masking sound it can take the edge off daytime noise if white feels too sharp or brown too heavy. Keep the volume low and blend in brown noise if deep rumble still gets through." },
      { type: "p",
        text: "Try Sleyp free and play the colours back to back in your browser, then save the mix that works. Saved mixes are free there, and the Sleyp iOS app is also coming soon. Green noise will be coming soon to Sleyp, so don't forget to try it in your mix soon." },
      { type: "p",
        text: "**More in this series:** [brown noise for sleep](/resources/brown-noise-for-sleep/) · [pink noise for sleep](/resources/pink-noise-for-sleep/) · [rain sounds for sleeping](/resources/rain-sounds-for-sleeping/) · [red noise](/resources/red-noise/) · [fan noise for sleeping](/resources/fan-noise-for-sleeping/)" },
      { type: "h3",
        text: "Sources" },
      { type: "ul",
        items: [
          "[Sleep Foundation (2025), What is green noise and how can it help you sleep? Medically reviewed by Dr Abhinav Singh](https://www.sleepfoundation.org/noise-and-sleep/what-is-green-noise)",
          "[Riedy et al. (2021), Noise as a sleep aid: a systematic review, Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)",
        ] },
    ],
    faqs: [
      {
        question: "Is green noise real?",
        answer:
          "Yes, in the sense that you can generate sound with extra energy in the middle frequencies. But unlike white, pink and brown noise, it has no strict technical definition, so tracks labelled \"green noise\" vary.",
      },
      {
        question: "Is green noise good for sleep?",
        answer:
          "It may help some people as a gentle masking sound, but there is very little research on green noise and sleep specifically. A 2021 review rated the evidence that continuous noise improves sleep as very low. Judge it by how you sleep.",
      },
      {
        question: "Green noise vs brown noise: which is better?",
        answer:
          "It depends on what you're blocking. Green suits voices, TVs and everyday mid-range noise. Brown is better for deep sounds like traffic, lorries and drilling. Many day sleepers use brown as a base and add a lighter layer on top.",
      },
      {
        question: "What does green noise sound like?",
        answer:
          "A soft, natural hum, like a stream or the sea, with less hiss than white noise and less rumble than brown.",
      },
      {
        question: "Is green noise better than white noise?",
        answer:
          "Neither has strong evidence as a sleep aid. Some people find green noise more pleasant over a long sleep because it drops the harsh high tones that make white noise hiss.",
      },
    ],
  },
  {
    slug: "rain-sounds-for-sleeping",
    title: "Rain Sounds for Sleeping: Why Nature Sounds Calm a Wired Brain",
    description: "Why do rain sounds help you sleep? The science behind nature sounds, which rain works best for daytime noise, and how night workers can use rain sounds well.",
    category: "Noise & Disturbance Defence",
    categorySlug: "noise-disturbance-defence",
    datePublished: "2026-09-27",
    readMinutes: 8,
    quickAnswer:
      "Rain sounds help many people sleep because they are steady, predictable and non-threatening, and they cover the sudden noises that jolt you awake.",
    blocks: [
      { type: "p",
        text: "A 2017 brain-scanning study found natural soundscapes shifted listeners towards the body's \"rest-and-digest\" state compared with artificial sounds, and the people who were least relaxed at the start shifted the most." },
      { type: "p",
        text: "It's 3 o'clock in the morning on your night shift and you hit that wall. No amount of coffee or Red Bull will help, but you drink it anyway. Then you get home at 8am, the house is quiet for once, and you lie there wired, staring at the ceiling while the street wakes up outside. For me, the thing that finally switched my head off on mornings like that was rain. Light rain on a tent is one of my go too sounds I use in my noise masking mix, for me, it's so calming." },
      { type: "p",
        text: "Here's why rain works for so many people, what the research does and doesn't show, and how to use it well when you have to sleep through the day." },
      { type: "h2",
        text: "Why do rain sounds help you sleep?" },
      { type: "p",
        text: "Rain sounds help you sleep in two ways: they mask sudden noises, and they are a sound your brain has no reason to worry about." },
      { type: "p",
        text: "**They mask.** Steady rain covers a wide band of frequencies at a fairly even level. That fills the gap between silence and a sudden noise, so a car door, a dog or a delivery van stands out less. What wakes you is usually the jump in sound, not the sound itself." },
      { type: "p",
        text: "**They don't demand attention.** Rain has no words, no tune and no pattern to follow. There's nothing to listen to, so your mind drifts. Compare that with a radio or a podcast, where your brain keeps picking up the thread." },
      { type: "p",
        text: "**They're familiar.** Most of us have fallen asleep to rain on a window. It's a safe, indoor sound: you're warm, dry and nothing needs doing. I remember being at Strensall Barracks near York in 1986, and doing my first Army night training exercise. The noise of rain on our tent was so calming, and helped me to get at least some sleep before being woken at 3am in the morning from the sound of enemy flashlights going off." },
      { type: "p",
        text: "The HSE's own [advice for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) says that if it's too noisy to sleep, you can consider earplugs, white noise or background music. Rain sits comfortably in that list." },
      { type: "h2",
        text: "What does the science say about natural vs artificial sounds?" },
      { type: "p",
        text: "The best-known study here comes from the University of Sussex. In 2017, researchers played 17 volunteers recordings of natural and artificial environments while scanning their brains and measuring their heart activity ([Gould van Praag et al., Scientific Reports](https://www.nature.com/articles/srep45273))." },
      { type: "p",
        text: "Three findings matter for day sleepers:" },
      { type: "ol",
        items: [
          "**Natural sounds increased \"rest-and-digest\" activity.** This is the parasympathetic side of the nervous system, the part that calms you down. It rose with natural soundscapes compared with artificial ones.",
          "**Attention shifted outwards.** With natural sounds, brain activity moved away from the inward-focused, self-referential kind (the mind chewing things over) towards a more relaxed, outward focus.",
          "**The least relaxed people gained the most.** Volunteers who started with low rest-and-digest activity saw it rise with natural sounds. Those who were already relaxed didn't.",
        ] },
      { type: "p",
        text: "That third point is the one I'd underline for night workers. If you come home tense and buzzing, you're the kind of listener who seemed to benefit most." },
      { type: "p",
        text: "Now the honest part: this was a small study of awake volunteers in a scanner, not people asleep, and the natural sounds weren't only rain. The wider research on sound as a sleep aid is also thin. A 2021 review of 38 studies rated the quality of evidence that continuous noise improves sleep as \"very low\" ([Riedy et al., Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283))." },
      { type: "p",
        text: "So rain isn't a cure for anything. It's a calming masking sound with a sensible reason behind it. Judge it by how you sleep, not by a headline." },
      { type: "h2",
        text: "Light rain, heavy rain or thunder: which masks what?" },
      { type: "p",
        text: "Not all rain is the same. The heavier the rain, the more low-frequency rumble it carries, and the more it behaves like brown noise." },
      { type: "table",
        head: ["Rain sound", "What it sounds like", "Best at covering", "Watch out for"],
        rows: [
          ["Light rain", "Soft patter on a window or leaves", "Voices, birdsong, light household noise", "Too gentle for traffic or building work"],
          ["Steady or heavy rain", "Constant, full downpour", "Traffic, doors, next door's TV, general street noise", "Can feel \"busy\" if played too loud"],
          ["Rain on a roof or tent", "Close drumming with a deeper body", "Mixed noise with some bass", "Uneven drips can catch your attention"],
          ["Thunderstorm", "Rain with rolling rumbles", "Deep noise like lorries and bass through walls", "Sharp cracks can wake you. Pick a track with rolling thunder only"],
        ] },
      { type: "p",
        text: "Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. For that kind of patchy, lighter noise, steady rain is often enough. For a busy road or builders next door, heavy rain or rain layered over brown noise holds up better." },
      { type: "h2",
        text: "Can rain sounds switch off a brain that's wired after nights?" },
      { type: "p",
        text: "They can help, but they work best alongside the things that got you wired in the first place." },
      { type: "p",
        text: "That 3am Red Bull is still in your system when your head hits the pillow. The HSE advises avoiding caffeine, energy drinks and other stimulants a few hours before bedtime. On nights, that means your last caffeine should come well before the end of the shift, not on the drive home. I'll cover the timing in detail in an upcoming guide, how long does caffeine last." },
      { type: "p",
        text: "Once you're home, rain can do the rest of the work:" },
      { type: "ul",
        items: [
          "**Start it before you get into bed**, while you wind down, so the calm sets in before you try to sleep.",
          "**Keep the room dark.** The HSE recommends heavy curtains, blackout blinds or eye shades.",
        ] },
      { type: "h2",
        text: "Should you mix rain with brown noise?" },
      { type: "p",
        text: "Yes, if your daytime noise has a lot of rumble in it. Rain on its own is great for texture, and brown noise fills in the low end that lorries, buses and drilling come through on. Here's how I'd set it up:" },
      { type: "ol",
        items: [
          "**Start with rain alone** for a couple of day sleeps and see what still wakes you.",
          "**If it's deep noise getting through** (traffic, bass, building work), add brown noise underneath the rain at a lower level.",
          "**If it's lighter noise getting through** (voices, birds), try pink noise underneath instead.",
          "**Set the lowest volume that works.** Turn it up until the street stops standing out, then stop. If you'd have to raise your voice to talk over it, it's too loud.",
          "**Play it through a speaker across the room** rather than earbuds. It fills the space more evenly over a seven-hour sleep.",
          "**Run it for the whole sleep.** The school run, bin lorries and lawnmowers don't stop after a 30-minute timer.",
        ] },
      { type: "p",
        text: "Not sure what's actually waking you? The Noise Calibration Tool helps you work out which sounds are the real problem." },
      { type: "h2",
        text: "The bottom line" },
      { type: "p",
        text: "Rain sounds work because they're steady, calming and good at hiding the sudden noises that wake day sleepers. The research on natural sounds is promising but small, so treat rain as one layer of your defence alongside a dark room, earplugs and sensible caffeine timing. For a noisy daytime street, rain over brown noise is a strong place to start." },
      { type: "p",
        text: "Try Sleyp free and layer rain and brown noise into your own mix in your browser. The Sleyp iOS app is coming soon." },
      { type: "p",
        text: "**More in this series:** [brown noise for sleep](/resources/brown-noise-for-sleep/) · [pink noise for sleep](/resources/pink-noise-for-sleep/) · [green noise](/resources/green-noise/) · [red noise](/resources/red-noise/) · [fan noise for sleeping](/resources/fan-noise-for-sleeping/)" },
      { type: "h3",
        text: "Sources" },
      { type: "ul",
        items: [
          "[Gould van Praag et al. (2017), Mind-wandering and alterations to default mode network connectivity when listening to naturalistic versus artificial sounds, Scientific Reports](https://www.nature.com/articles/srep45273)",
          "[Riedy et al. (2021), Noise as a sleep aid: a systematic review, Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
        ] },
    ],
    faqs: [
      {
        question: "Why do rain sounds make you sleepy?",
        answer:
          "Rain is steady, has no words or tune to follow, and covers sudden noises. A 2017 study found natural sounds moved listeners towards the calming \"rest-and-digest\" state compared with artificial sounds. Many people also link rain with being safe and warm indoors, which helps the mind let go.",
      },
      {
        question: "Is it OK to sleep with rain sounds every day?",
        answer:
          "For most people, yes, at a moderate volume. Use the lowest level that covers the background noise, and play it through a speaker rather than earbuds if you can. If you'd have to raise your voice to talk over it, turn it down.",
      },
      {
        question: "Is heavy rain or light rain better for sleep?",
        answer:
          "It depends on what you're trying to block. Light rain suits a fairly quiet street with voices or birdsong. Heavy rain covers traffic and general street noise better because it carries more low-frequency sound.",
      },
      {
        question: "Are thunderstorm sounds good for sleeping?",
        answer:
          "Rolling thunder can help mask deep noises like lorries. Sudden, sharp cracks can wake you, though, so choose a track with steady rain and soft rumbles rather than loud strikes.",
      },
      {
        question: "Are rain sounds better than white noise?",
        answer:
          "Many people find rain more pleasant over a long sleep because it's softer and more natural than the hiss of white noise. Neither has strong evidence as a sleep aid, so pick the one you find easier to sleep through.",
      },
      {
        question: "Can I get free rain sounds for sleeping?",
        answer:
          "Yes. You can play rain in the free Sleyp player in your browser, and layer it with brown or pink noise to suit your street.",
      },
    ],
  },
  {
    slug: "pink-noise-for-sleep",
    title: "Pink Noise for Sleep: What the Deep-Sleep Studies Really Found",
    description: "Does pink noise improve deep sleep? We explain the studies behind the claim, why timing matters, and how shift workers can use pink noise for daytime sleep.",
    category: "Noise & Disturbance Defence",
    categorySlug: "noise-disturbance-defence",
    datePublished: "2026-09-26",
    readMinutes: 7,
    quickAnswer:
      "Pink noise is a balanced, gentle sound with more of its energy in the lower frequencies, so it sounds softer than white noise, like steady rain or wind in the trees. The studies that linked it to deeper sleep used short bursts timed to brain waves, not an all-night track. As steady background sound, it's a gentle masker for lighter daytime noise.",
    blocks: [
      { type: "p",
        text: "I've done my share of getting into bed at 9am, just as the school run starts and the bin lorry works its way down the street. Every so often a headline tells you pink noise will \"boost your deep sleep\". So I went back to the studies to see what they actually tested, and whether any of it applies to someone trying to sleep through the day after a night shift." },
      { type: "h2",
        text: "What is pink noise?" },
      { type: "p",
        text: "Pink noise contains every frequency you can hear, like white noise, but the power drops as the pitch rises. Each octave carries the same amount of energy, which is roughly how our ears hear sound. The result is fuller and less hissy than white noise, but not as deep as brown noise." },
      { type: "p",
        text: "Think steady rain on a window or wind through trees. If white noise feels like it's scratching at you, pink noise is a softer step down. I covered the full range in my guide to [brown noise for sleep](/resources/brown-noise-for-sleep/)." },
      { type: "h2",
        text: "What did the pink noise sleep studies find?" },
      { type: "p",
        text: "The pink noise claims come mainly from two small studies. Both played short bursts of pink noise at exactly the right moment in each person's deep sleep. Neither played pink noise all night." },
      { type: "table",
        head: ["Study", "Who took part", "What was played", "What they found"],
        rows: [
          ["[Ngo et al. (2013), Neuron](https://www.sciencedirect.com/science/article/pii/S0896627313002304)", "11 young adults (average age 24)", "Pink noise bursts timed to the \"up\" phase of slow brain waves in deep sleep", "Next-morning recall of word pairs: 22.2 words vs 13.0 with no sound. Bursts played out of step with the brain waves gave no benefit."],
          ["[Northwestern University (2017)](https://news.northwestern.edu/stories/2017/april/pink-noise-sound-enhance-deep-sleep-memory)", "13 adults aged 60 and over", "Pink noise delivered during the rising part of slow brain waves, locked to each person's brain activity in real time", "Memory improvement was about three times larger than after the sham (no-sound) night."],
        ] },
      { type: "p",
        text: "These are real results. But look at what the researchers needed to get them: a sleep lab, equipment reading each person's brain waves as they slept, and a system that timed every burst to that rhythm." },
      { type: "h2",
        text: "Timed bursts vs an all-night track: why does it matter?" },
      { type: "p",
        text: "It matters because the timing was the whole effect. In the 2013 study, the same pink noise played out of step with the brain waves did nothing for memory. The benefit came from when the sound was played, not from the sound being pink." },
      { type: "p",
        text: "A pink noise track on your phone doesn't know what your brain is doing. It plays the same steady sound whether you're in deep sleep, light sleep or awake. So it isn't a home version of those experiments, and any app that says \"pink noise is proven to deepen sleep\" is stretching the evidence." },
      { type: "p",
        text: "The wider research on steady background noise is honest about this. A 2021 review of 38 studies of noise as a sleep aid, including white, pink and other broadband noise, rated the quality of evidence that continuous noise improves sleep as \"very low\" ([Riedy et al., Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283))." },
      { type: "p",
        text: "So why bother? Because day sleepers aren't trying to make good sleep better in a quiet lab. We're trying to stop the neighbour's lawnmower or a slammed car door from waking us at 11am. A steady sound narrows the jump between the background and a sudden noise, so fewer sounds stand out enough to wake you. Any noise colour can do that job. The question is which one suits your street." },
      { type: "h2",
        text: "Pink noise vs brown noise: which is better for daytime noise?" },
      { type: "p",
        text: "Brown noise is usually better for low, rumbling daytime noise, and pink noise is better for lighter, mixed noise with some higher-pitched sounds." },
      { type: "table",
        head: ["Feature", "Pink noise", "Brown noise", "White noise"],
        rows: [
          ["Sounds like", "Steady rain, wind in trees", "Waterfall, aircraft cabin", "Radio static"],
          ["Energy", "Evenly spread across octaves, softer at the top", "Heavily weighted to the bass", "Equal at every frequency, bright at the top"],
          ["Best at covering", "Voices, birdsong, general household noise", "Traffic, lorries, bass through walls, building work", "High-pitched sounds, a TV through the wall"],
          ["Weak spot", "Can let deep rumbles through", "Less good on sharp, high sounds", "Can feel harsh over a long sleep"],
          ["Good choice if", "Your street is fairly quiet and you're a light sleeper", "You live near a road or have noisy neighbours", "You like a crisp sound and can put up with the hiss"],
        ] },
      { type: "p",
        text: "Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. For that kind of lighter, patchy noise, pink noise is a comfortable option. For a busy road or next door's builders, brown noise tends to hold up better." },
      { type: "p",
        text: "I use a mix of sounds, but I always like some pink noise in there. Light traffic passes my house all day and night, and pink noise helps mask it. For me, a forest sound is the perfect way to add it: birds, rain and wind through the trees. It's so relaxing, and it helps me fall asleep every time." },
      { type: "h2",
        text: "How do you try pink noise after a night shift?" },
      { type: "p",
        text: "Give it a fair trial over a few day sleeps, and set it up before you get into bed." },
      { type: "ol",
        items: [
          "**Start it while you wind down.** Put it on as you get into bed, not after the first noise has already woken you.",
          "**Set the lowest volume that works.** Sit in bed and turn it up until the street stops standing out, then stop. If you'd have to raise your voice to talk over it, it's too loud.",
          "**Use a speaker across the room.** It fills the space more evenly than earbuds and is kinder to your ears over six or seven hours.",
          "**Keep it running for the whole sleep.** A 30-minute timer helps you drop off, but the school run and the delivery vans don't stop after 30 minutes. For day sleep, run it until your alarm or use a long fade-out.",
          "**Compare it with brown noise.** Try pink for two or three day sleeps, then brown for two or three, and note which days you woke less.",
          "**Fix the room too.** Noise is only one part. The [HSE's advice for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) includes blackout blinds or eye shades and telling your neighbours when you sleep.",
        ] },
      { type: "p",
        text: "**Not sure what's waking you?** The free [Noise Calibration Tool](/tools/noise-calibration-tool/) helps you work out which daytime sounds are the real problem, so you can pick the right colour." },
      { type: "h2",
        text: "The bottom line" },
      { type: "p",
        text: "Pink noise is a softer, more natural-sounding alternative to white noise, and it's a good fit for lighter daytime noise. The headline studies were real, but they tested precisely timed bursts in a lab, not an all-night track. As one layer of your defence, alongside a dark room, earplugs and sensible caffeine timing, it can help you sleep through a noisy morning." },
      { type: "p",
        text: "[Try Sleyp free](/session/) and compare pink and brown noise side by side in your browser. The Sleyp iOS app is coming soon." },
      { type: "p",
        text: "**More in this series:** [brown noise for sleep](/resources/brown-noise-for-sleep/) · [brown noise vs white noise for daytime disturbances](/resources/brown-noise-vs-white-noise-for-daytime-disturbances/) · [rain sounds for sleeping](/resources/rain-sounds-for-sleeping/) · [green noise](/resources/green-noise/) · [red noise](/resources/red-noise/) · [fan noise for sleeping](/resources/fan-noise-for-sleeping/)" },
      { type: "h3",
        text: "Sources" },
      { type: "ul",
        items: [
          "[Ngo et al. (2013), Auditory closed-loop stimulation of the sleep slow oscillation enhances memory, Neuron](https://www.sciencedirect.com/science/article/pii/S0896627313002304)",
          "[Northwestern University (2017): pink noise, deep sleep and memory in older adults](https://news.northwestern.edu/stories/2017/april/pink-noise-sound-enhance-deep-sleep-memory)",
          "[Riedy et al. (2021), Noise as a sleep aid: a systematic review, Sleep Medicine Reviews](https://www.sciencedirect.com/science/article/abs/pii/S1087079220301283)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
        ] },
    ],
    faqs: [
      {
        question: "Does pink noise really improve deep sleep?",
        answer:
          "Not as a background track, as far as the evidence shows. The studies that found stronger deep sleep and better memory played short bursts of pink noise timed precisely to each person's brain waves. When the same sound was played out of step, there was no benefit.",
      },
      {
        question: "Is pink noise better than white noise for sleep?",
        answer:
          "Many people find it more comfortable, because it's softer and less hissy over a long sleep. White noise is better at covering sharp, high-pitched sounds. Neither has strong evidence behind it as a sleep aid, so go with the one you find easier to sleep through.",
      },
      {
        question: "Can you listen to pink noise all day while you sleep?",
        answer:
          "For most people, yes, at a moderate volume. Use the lowest level that covers the background noise, and play it through a speaker rather than earbuds if you can.",
      },
      {
        question: "Is pink noise or brown noise better for daytime sleep?",
        answer:
          "It depends on your street. Brown noise is better for low, rumbling noise like traffic and building work. Pink noise suits lighter, mixed noise such as voices and birdsong.",
      },
      {
        question: "Is there any proof that pink noise helps you sleep?",
        answer:
          "Only for timed pink noise bursts in lab studies. A 2021 review of 38 studies rated the evidence that continuous noise improves sleep as very low quality. Treat pink noise as a masking tool, not a treatment, and judge it by how you feel after a week.",
      },
    ],
  },
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
        "text": "I've worked shifts for 40 years: The King's Regiment, Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, then Budweiser UK. Getting sleep during the day has been a daily battle for most of my working life (my full routine is in [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/)). This guide explains what brown noise is, how it compares with the other \"noise colours\", what the evidence actually says, and how to use it to sleep through a noisy day."
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
        "text": "The name has nothing to do with the colour. It comes from **Brownian motion**, the random movement of particles first described by the botanist Robert Brown, because the sound's pattern follows the same maths. That's also why you'll see it called **Brownian noise** or [red noise](/resources/red-noise/). They are the same thing."
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
        "text": "The main difference between the noise colours is where the energy sits: white is spread evenly, pink and brown lean towards the bass, and [green noise](/resources/green-noise/) sits in the middle."
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
            "[Pink](/resources/pink-noise-for-sleep/)",
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
          "**The pink noise studies.** The best-known results are for pink noise. A Northwestern University study found memory improvement was about three times larger in adults over 60 ([Northwestern, 2017](https://news.northwestern.edu/stories/2017/april/pink-noise-sound-enhance-deep-sleep-memory)). But the sound came in short bursts, timed to each person's brain waves during deep sleep. A pink or brown noise track playing all day is not the same thing. I've unpacked those studies in [pink noise for sleep](/resources/pink-noise-for-sleep/)."
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
          "**Layer it with [earplugs](/resources/earplugs-for-sleeping/) on the worst days.** Earplugs cut the peaks, and brown noise fills the gaps.",
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
        "text": "Sleyp is the free sleep-sounds player I built from my own experience of trying to sleep while the world is awake. You can [play brown, pink and white noise free in your browser](/session/). No sign-up is needed, and the Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "A mix that works for a lot of day sleepers:"
      },
      {
        "type": "ul",
        "items": [
          "**Brown noise as the base.** It covers traffic and bass through the walls.",
          "**A little rain or [fan hum](/resources/fan-noise-for-sleeping/) on top.** This adds some mid and high frequencies to catch voices and birdsong.",
          "**A long fade-out or none at all.** Keep the sound running through the noisiest part of the day."
        ]
      },
      {
        "type": "p",
        "text": "The free web player has 13 sounds, including brown, white and pink noise, rain, thunderstorm, ocean waves, fan hum and cabin hum. It also has 30, 60 and 90-minute fade-out timers, custom timers up to 12 hours, saved mixes and a gentle fade-in wake-up chime, so you don't jolt awake before your next night shift. Keep the page open in your browser while the timer runs."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/) in your browser now. The Sleyp iOS app is coming soon."
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
        text: "If you rent, travel, or the budget says no to blinds this month, a [contoured sleep mask](/resources/best-sleep-mask/) (the kind with moulded eye cups rather than a flat strip) gets you 90% of the darkness for a tenner or two. The flat ones press on your eyelids, smear and shift when you side-sleep. Contoured cups don't. I kept one in my kit bag for decades; hotel curtains are a lottery and this is the insurance.",
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
        text: "Forty years of noisy daytime streets taught me to think of sound defence in layers, same as cold-weather kit. Physical layer first: door draught-excluder, heavy curtains, [moulded earplugs](/resources/earplugs-for-sleeping/) on the worst streets, every decibel stopped at the boundary is one the mask doesn't have to cover. Masking layer second: the right colour at a modest, steady volume, from a speaker or machine placed toward where the noise enters, not tight against your ear. The Sleyp player was built for exactly this, white, pink and brown beds, heavy rain, fan hums and custom blends you can tune to your street. And if you're not sure what your street's dominant problem even is, run the Noise Calibration Tool first: rate your four noise sources and it prescribes the colour, the volume strategy and the physical layer worth adding. Then log a block of shifts in the journal and let your own quality scores settle the brown-versus-white debate for your bedroom, on your street, against your bins.",
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
