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
    "slug": "why-am-i-always-tired",
    "title": "Why Am I Always Tired? A Shift Worker's Checklist",
    "description": "Always tired on shifts? An 8-point checklist on daytime sleep, body clock, caffeine, noise and light from a 40-year shift veteran, plus when to see your GP.",
    "category": "Managing Split/Rotating Rotas",
    "categorySlug": "rotating-rotas",
    "datePublished": "2026-10-24",
    "readMinutes": 8,
    "quickAnswer": "If you work shifts and feel tired all the time, the cause is usually a mix of short daytime sleep, a body clock that never settles, caffeine and alcohol at the wrong times, and a bedroom that is too bright or noisy. Work through the 8-point checklist below. If tiredness lasts for weeks despite good sleep, see your GP.",
    "blocks": [
      {
        "type": "p",
        "text": "I have worked shifts for 40 years: The King's Regiment from 1986 to 1989, then Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, and Budweiser UK. For a lot of those years I ran on empty and thought that was just the price of the job. It isn't, or at least not all of it. Most of the tiredness I carried came from a handful of habits I could change."
      },
      {
        "type": "p",
        "text": "In my experience of working almost every shift pattern possible, I always felt most tired on [4 on 4 off](/resources/4-on-4-off-shift-pattern/), which included two day shifts followed by two night shifts. My body just never settled into its circadian pattern, and by the end of the last night shift, I was always tired."
      },
      {
        "type": "p",
        "text": "This checklist is the one I wish someone had handed me. It is not a diagnosis. It is a practical way to find which part of your shift life is draining you, starting with the most common culprits."
      },
      {
        "type": "h2",
        "text": "Why am I always tired when I work shifts?"
      },
      {
        "type": "p",
        "text": "Shift work asks your body to sleep when it expects to be awake and to work when it expects to sleep. That alone makes daytime sleep shorter and lighter for most people. Add a rota that changes every few days, an energy drink at 3am, a drink to unwind after the shift and a bedroom full of daylight and traffic, and the tiredness stacks up."
      },
      {
        "type": "p",
        "text": "The good news is that each of those is something you can check. You will rarely fix everything, but fixing two or three usually makes a clear difference."
      },
      {
        "type": "h2",
        "text": "The 8-point shift fatigue checklist"
      },
      {
        "type": "ol",
        "items": [
          "**Are you getting 7-8 hours in every 24?** The [HSE says](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) most adults need 7-8 hours of sleep a day. Add up your real sleep, including naps, across a whole block, not just your best day. If you are regularly on 5 or 6 hours, start here. My guide [Is 6 Hours of Sleep Enough?](/resources/is-6-hours-of-sleep-enough/) goes deeper.",
          "**Is your body clock being pulled back and forth?** Rotating rotas and flipping back to days on your rest days keep your body clock unsettled. I know how it feels to get up early after your last night shift to make the most of your day off, then hit that dreaded jet-lag feeling by the afternoon. UK clocks go back this weekend, on Sunday 25 October, so anyone on nights that night works an extra hour and the next day's body clock feels it too. See [how to fix your sleep schedule after a block of nights](/resources/how-to-fix-sleep-schedule-after-nights/).",
          "**When is your last caffeine?** It's 3 o'clock in the morning and you hit that wall. No amount of coffee or Red Bull really helps, but you drink it anyway, then pay for it when you get home and lie there wired. The HSE advises using caffeine only occasionally and not relying on it to keep you awake. My [caffeine cut-off guide](/resources/how-long-does-caffeine-last/) shows when to stop for your bedtime.",
          "**Is the after-shift drink your \"me time\"?** For a day worker, the evening is their time. After nights, a drink in the morning can feel like the same thing. I've been there, and I paid for it later at 2am on the next shift. The HSE advises avoiding alcohol because it lowers the quality of sleep.",
          "**Is your bedroom dark enough?** Daylight leaking round a curtain is enough to keep sleep light. The HSE suggests heavy curtains, blackout blinds or eye shades. My comparison of [blackout blinds and blackout curtains](/resources/blackout-blinds-vs-curtains/) covers the cheap fixes.",
          "**Is noise breaking your sleep?** Even on a quiet street, cars and kids playing out can keep you wide awake when all you want to do is sleep. The HSE suggests telling close neighbours your sleep times, and using earplugs, white noise or background music to mask outside noise. Start with [earplugs for sleeping](/resources/earplugs-for-sleeping/) and a steady sound such as [brown noise](/resources/brown-noise-for-sleep/).",
          "**What, and when, are you eating?** The HSE says regular light meals or snacks are less likely to cause drowsiness than a single heavy meal. A big plate at 3am is a fast way to feel worse at 4am.",
          "**Are you moving at the right time?** The HSE suggests moderate exercise before a shift to help alertness, and avoiding vigorous exercise just before sleep because it raises your body temperature."
        ]
      },
      {
        "type": "h2",
        "text": "Which checklist point should you start with?"
      },
      {
        "type": "p",
        "text": "Use your main complaint to pick a starting point."
      },
      {
        "type": "table",
        "head": [
          "If this sounds like you",
          "Start with"
        ],
        "rows": [
          [
            "You wake after 4 or 5 hours and can't get back off",
            "Points 5 and 6 (light and noise)"
          ],
          [
            "You lie awake for an hour after getting into bed",
            "Point 3 (caffeine) and point 4 (alcohol)"
          ],
          [
            "You feel worst on your first rest day",
            "Point 2 (body clock)"
          ],
          [
            "You feel fine for a day or two, then worse every shift",
            "Point 1 (total hours)"
          ],
          [
            "You crash an hour after your break",
            "Point 7 (food)"
          ],
          [
            "You feel sluggish at the start of the shift",
            "Point 8 (movement)"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How does short sleep build up without you noticing?"
      },
      {
        "type": "p",
        "text": "Short sleep adds up, and you are a poor judge of how much it is costing you. In a 2003 study published in the journal SLEEP, [Van Dongen and colleagues](https://academic.oup.com/sleep/article/26/2/117/2709164) put 48 healthy adults aged 21 to 38 on 4, 6 or 8 hours in bed a night for 14 days. Restricting sleep to 6 hours or less produced thinking and reaction deficits equivalent to up to 2 nights without any sleep at all."
      },
      {
        "type": "p",
        "text": "The part every shift worker should remember: the participants were largely unaware of how impaired they had become. Their sleepiness ratings rose at first, then levelled off, while their performance kept getting worse."
      },
      {
        "type": "p",
        "text": "That matches what I've seen on every rota I've worked. By the third or fourth night, people say they feel \"fine\" because they have got used to the feeling. A lie-in on your days off helps, but it doesn't wipe the slate clean, which I cover in [Can You Catch Up on Sleep?](/resources/can-you-catch-up-on-sleep/)"
      },
      {
        "type": "h2",
        "text": "Why is shift fatigue a safety issue, not just a feeling?"
      },
      {
        "type": "p",
        "text": "The [HSE describes fatigue](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm) as a decline in mental or physical performance that results from prolonged exertion, and links it to excessive working time and poorly designed shift patterns. More than 3.5 million people work shifts in the UK."
      },
      {
        "type": "p",
        "text": "The HSE says fatigue is said to cost the UK £115-240 million a year in work accidents alone, and that it has been implicated in 20% of accidents on major roads. That last figure is the one that matters most after a night shift, because the drive home is when many of us are at our lowest."
      },
      {
        "type": "p",
        "text": "The HSE's advice for shift workers is plain: if you feel sleepy while driving, stop and take a short nap if it is safe to do so, and consider public transport or a taxi instead of driving. My guide to [microsleep and the drive home](/resources/microsleep-driving-after-night-shift/) explains the warning signs."
      },
      {
        "type": "p",
        "text": "I always needed to pull over for a nap of around 15 minutes on the Rainford bypass when driving home after night shifts at Budweiser. Without that recharge, I would never have made it home safely. If you feel tired, pull over and take a nap. It's simply not worth the risk of driving tired, for the sake of 15 minutes' rest."
      },
      {
        "type": "h2",
        "text": "When should you speak to your GP?"
      },
      {
        "type": "p",
        "text": "This checklist covers lifestyle and rota habits. It can't rule anything else out. If tiredness lasts for weeks despite good sleep, see your GP. Do the same if you still feel exhausted after several rest days of proper sleep, or if the tiredness is getting worse rather than better."
      },
      {
        "type": "p",
        "text": "It helps to take a simple record with you: your shift pattern, roughly when and how long you slept each day, and your caffeine and alcohol. If your employer has an occupational health service, it may also be able to look at your rota with you."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Always feeling tired on shifts is common, but it isn't something you just have to live with. Work through the checklist, fix the two or three points that apply to you, and give it a full block before you judge the result. Check how your rota is affecting you with the [Sleep Atlas Score](/scores/) and log your real hours in the [Sleep Debt & Fatigue Logger](/tools/sleep-debt-fatigue-logger/)."
      },
      {
        "type": "p",
        "text": "Then protect the sleep you do get. Sleyp is a free sleep-sounds player built for day sleepers: 13 sounds, a custom timer and a wake-up chime, all free in your browser. Keep the page open while you sleep so the timer and chime can run. [Try Sleyp free](/session/). The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "**More in this series:** [shift patterns explained](/resources/shift-patterns-explained/) · [4 on 4 off shift pattern](/resources/4-on-4-off-shift-pattern/) · [continental shift pattern](/resources/continental-shift-pattern/) · [fixing your sleep schedule after nights](/resources/how-to-fix-sleep-schedule-after-nights/) · [can you catch up on sleep?](/resources/can-you-catch-up-on-sleep/) · [night shift survival guide](/resources/night-shift-survival-guide/) · [how to sleep during the day](/resources/how-to-sleep-during-the-day/)"
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Van Dongen et al. (2003), The cumulative cost of additional wakefulness, SLEEP 26(2)](https://academic.oup.com/sleep/article/26/2/117/2709164)",
          "[Health and Safety Executive: Human factors, fatigue](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm)",
          "[Health and Safety Executive: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Why am I always tired even after sleeping?",
        "answer": "For shift workers, the most common reasons are sleep that is lighter or shorter than you think, broken by daylight or noise, or sleep at a time your body clock resists. Caffeine late in the shift and alcohol after it also lower sleep quality. If tiredness lasts for weeks despite good sleep, see your GP."
      },
      {
        "question": "Is it normal to be tired all the time on shifts?",
        "answer": "Feeling tired on shifts is common, especially on nights and rotating rotas, but feeling tired all the time is a signal to check your sleep hours, light, noise, caffeine and alcohol. Small changes to those usually help. Constant tiredness that doesn't improve deserves a chat with your GP."
      },
      {
        "question": "What is shift fatigue?",
        "answer": "Shift fatigue is the drop in alertness and performance that builds up when your sleep and work times keep fighting your body clock. The HSE describes fatigue as a decline in mental or physical performance from prolonged exertion, linked to long hours and poorly designed shift patterns."
      },
      {
        "question": "Why do I wake up tired after a day sleep?",
        "answer": "Daytime sleep is often shorter and lighter, and it is easily broken by light, traffic, deliveries and neighbours. Waking in the middle of a sleep cycle can also leave you groggy. A darker room, earplugs, a steady masking sound and a regular sleep window all help."
      },
      {
        "question": "Can I catch up on sleep on my days off?",
        "answer": "Partly. Extra sleep on rest days helps you recover, but it doesn't fully cancel a block of short sleep. Aim for 7-8 hours in every 24 during the block itself, and use short naps to top up where you can."
      },
      {
        "question": "How long does it take to stop feeling tired after nights?",
        "answer": "Most people feel jet-lagged for a day or two after switching from nights back to days. Getting daylight early, keeping caffeine to the morning and going to bed at a normal time on your first rest day usually shortens it."
      }
    ]
  },
  {
    "slug": "can-you-catch-up-on-sleep",
    "title": "Can You Catch Up on Sleep? What Science Says About Sleep Debt",
    "description": "Can you catch up on lost sleep with a lie-in? What a 2019 study found about weekend recovery sleep, and a better way to pay off sleep debt on days off.",
    "category": "Managing Split/Rotating Rotas",
    "categorySlug": "rotating-rotas",
    "datePublished": "2026-10-23",
    "readMinutes": 8,
    "quickAnswer": "You can recover some lost sleep, but only partly. One long lie-in on your days off does not cancel a week of short sleep. In a 2019 University of Colorado Boulder study, people who slept in at the weekend after 5-hour nights still showed the same effects once short sleep returned. Regular sleep, short naps and a steady wake time work better.",
    "blocks": [
      {
        "type": "p",
        "text": "You finish a block of four nights, crash out on your first rest day and sleep for twelve hours. You wake up expecting to feel human again, and instead you feel like you have been hit by a bus."
      },
      {
        "type": "p",
        "text": "Believe me, I've done this after a week of nights at Strangeways prison around 1997, and I paid for it that night. During the week of nights I had not slept well at all, so by the end of the week I was exhausted with sleep debt. After the last night, I fell asleep for literally the whole day, around 12 hours straight."
      },
      {
        "type": "p",
        "text": "But here's the problem: it's now night-time and you want to get your body clock back into sleeping at night. But you can't, because you've just had 12 hours. So you're wide awake at night-time, and the vicious circle begins."
      },
      {
        "type": "p",
        "text": "I worked shifts for 40 years: The King's Regiment from 1986 to 1989, Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, and Budweiser UK. For most of that time I believed a big sleep on my days off would square things up. The research says it is not that simple, and once you know why, you can plan your rest days a lot better."
      },
      {
        "type": "h2",
        "text": "What is sleep debt?"
      },
      {
        "type": "p",
        "text": "Sleep debt is the gap between the sleep your body needs and the sleep you actually get, added up over several days. The HSE says [most adults need 7-8 hours of sleep a day](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm). On a block of nights, daytime sleep is often shorter and broken, so the debt builds fast."
      },
      {
        "type": "p",
        "text": "Here is how it adds up for someone who needs 7.5 hours and is sleeping in the day between four night shifts (an example, not a measurement):"
      },
      {
        "type": "table",
        "head": [
          "Day sleep after",
          "Sleep needed",
          "Sleep got",
          "Debt that day",
          "Running total"
        ],
        "rows": [
          [
            "Night 1",
            "7.5 h",
            "6 h",
            "1.5 h",
            "1.5 h"
          ],
          [
            "Night 2",
            "7.5 h",
            "5.5 h",
            "2 h",
            "3.5 h"
          ],
          [
            "Night 3",
            "7.5 h",
            "5 h",
            "2.5 h",
            "6 h"
          ],
          [
            "Night 4",
            "7.5 h",
            "5.5 h",
            "2 h",
            "8 h"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Eight hours is a whole night's sleep missing by the end of the block. The tricky part is that you rarely feel it in full. In a well-known study, [Van Dongen and colleagues (2003)](https://academic.oup.com/sleep/article-abstract/26/2/117/2709164) restricted 48 healthy adults to 4, 6 or 8 hours in bed for 14 days. The 4-hour and 6-hour groups built up performance deficits equal to up to two nights of total sleep loss, yet their own sleepiness ratings rose only a little after the first few days. If you want the detail on that, read [is 6 hours of sleep enough?](/resources/is-6-hours-of-sleep-enough/)"
      },
      {
        "type": "h2",
        "text": "Can you catch up on sleep at the weekend?"
      },
      {
        "type": "p",
        "text": "Not fully. A 2019 study in Current Biology, led by Chris Depner at the [University of Colorado Boulder](https://www.colorado.edu/today/2019/02/28/catching-sleep-weekend-doesnt-work), tested exactly this. 36 healthy adults aged 18 to 39 spent two weeks in a sleep lab, split into three groups:"
      },
      {
        "type": "table",
        "head": [
          "Group",
          "Sleep schedule",
          "What happened"
        ],
        "rows": [
          [
            "Control",
            "9 hours a night for 9 nights",
            "Baseline"
          ],
          [
            "Short sleep",
            "5 hours a night for 9 nights",
            "More night-time snacking, weight gain; whole-body insulin sensitivity fell 13%"
          ],
          [
            "Weekend recovery",
            "5 hours or less for 5 days, a weekend of unlimited sleep, then 2 more short nights",
            "Only 66 minutes extra sleep on average; insulin sensitivity worsened by 9 to 27%"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The weekend group did snack less at night over the weekend, but that benefit disappeared as soon as the short workweek started again. Their body clocks also shifted later on Sunday night, which made it harder to fall asleep before an early Monday start."
      },
      {
        "type": "p",
        "text": "That last finding should ring a bell with any shift worker. Your rest days are your weekend, and your body clock is already being pulled about by the flip from nights to days. A huge lie-in on top of that can leave you wide awake at midnight and wrecked the next morning."
      },
      {
        "type": "h2",
        "text": "What does partial recovery look like?"
      },
      {
        "type": "p",
        "text": "Recovery sleep is not useless. Extra sleep still adds hours back, and the Colorado group did sleep longer when they were allowed to. The lesson is that one long sleep does not reset everything, and how you feel is a poor guide to how recovered you are."
      },
      {
        "type": "p",
        "text": "In practice, partial recovery looks like this:"
      },
      {
        "type": "ul",
        "items": [
          "You feel better after a long sleep, but your concentration and reactions may still lag behind.",
          "The benefit fades quickly if you go straight back to short sleep.",
          "A long lie-in can push your body clock later, so the next night's sleep is harder to get."
        ]
      },
      {
        "type": "p",
        "text": "That is why the jet-lag feeling after your last night shift is so familiar. You get up early to make the most of your day off, then hit a wall in the afternoon, then can't drop off at bedtime. For a full flip-back plan, see [how to fix your sleep schedule after a block of nights](/resources/how-to-fix-sleep-schedule-after-nights/)."
      },
      {
        "type": "h2",
        "text": "What is a better plan for your days off?"
      },
      {
        "type": "p",
        "text": "Spread the recovery out instead of trying to clear the debt in one go. These steps fit the HSE's advice for shift workers and what the research shows about weekend catch-up sleep:"
      },
      {
        "type": "ol",
        "items": [
          "**After your last night, take a short sleep, not a full day in bed.** The HSE's advice is to \"have a short sleep and go to bed earlier that night\" when coming off nights.",
          "**Go to bed a little earlier rather than lying in until noon.** Adding sleep at the start of the night is less likely to push your body clock later than a midday lie-in.",
          "**Keep your wake time steady across your rest days.** Aim for roughly the same time each morning so your body clock settles.",
          "**Use short naps to top up.** A short nap adds to your total sleep without wrecking your night. If you can't sleep, the HSE says rest is still beneficial.",
          "**Cut the debt during the block, not just after it.** A dark, cool, quiet bedroom means longer daytime sleeps, so less debt to clear. [Blackout blinds](/resources/blackout-blinds-vs-curtains/), [earplugs](/resources/earplugs-for-sleeping/) and a steady masking sound such as [brown noise](/resources/brown-noise-for-sleep/) all help.",
          "**Watch the after-shift drink and the late caffeine.** A drink after nights can feel like your \"me time\", the way an evening is for everyone else, but you pay for it later in shorter, lighter sleep."
        ]
      },
      {
        "type": "p",
        "text": "If you work long blocks such as the [4 on 4 off shift pattern](/resources/4-on-4-off-shift-pattern/), plan your first two rest days around this before you finish the last shift. For me, the first two days are recovery days, and what you do with them decides whether they are easy or hard. Normally, if I finish my last night shift at 7am on a Monday morning, I won't start feeling normal until around 5pm on the Tuesday evening."
      },
      {
        "type": "h2",
        "text": "How do you track your sleep debt?"
      },
      {
        "type": "p",
        "text": "The simplest way is a running log: write down the hours you needed and the hours you actually slept after each shift, and keep a total across the block. Patterns show up quickly, such as the third night always being the worst sleep, or your debt never clearing before the next block starts."
      },
      {
        "type": "p",
        "text": "The [Sleyp Sleep Debt & Fatigue Logger](/tools/sleep-debt-fatigue-logger/) does the sums for you across your shift block. In the logger, add your nightly sleep requirement, then log how much sleep you actually got each day. By the end of the last shift, you will know how much sleep debt you have, and the tool will suggest practical steps to deal with it. For a wider look at the causes of constant tiredness on shifts, the next guide in this series, [Why Am I Always Tired? A Shift Worker's Checklist](/resources/why-am-i-always-tired/), covers the full checklist."
      },
      {
        "type": "p",
        "text": "For more on how your rota shapes your sleep, see [shift patterns explained](/resources/shift-patterns-explained/) and the complete guide to [sleeping during the day](/resources/how-to-sleep-during-the-day/)."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "You can claw back some lost sleep, but not all of it in one go, and not with one giant lie-in. Cut the debt during your block by protecting your daytime sleep, then spread the recovery over your rest days with short naps, earlier nights and a steady wake time."
      },
      {
        "type": "p",
        "text": "A steady masking sound makes those daytime sleeps longer when the neighbours start drilling as everyone leaves for school and work. [Try Sleyp free](/session/): 13 sounds in your browser, with a free timer, wake-up chime and saved mixes. The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "**More in this series:** [shift patterns explained](/resources/shift-patterns-explained/) · [4 on 4 off shift pattern](/resources/4-on-4-off-shift-pattern/) · [continental shift pattern](/resources/continental-shift-pattern/) · [fixing your sleep schedule after nights](/resources/how-to-fix-sleep-schedule-after-nights/) · [why am I always tired?](/resources/why-am-i-always-tired/)"
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[University of Colorado Boulder (2019): Catching up on sleep on the weekend doesn't work](https://www.colorado.edu/today/2019/02/28/catching-sleep-weekend-doesnt-work) (Depner et al., Current Biology)",
          "[Van Dongen et al. (2003): The cumulative cost of additional wakefulness, SLEEP](https://academic.oup.com/sleep/article-abstract/26/2/117/2709164)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "How long does it take to recover from sleep debt?",
        "answer": "There is no fixed number, but research shows one weekend of extra sleep is not enough to undo a week of short nights. Spread recovery over several nights with a steady wake time. If tiredness lasts for weeks despite good sleep, see your GP."
      },
      {
        "question": "Is sleeping 12 hours on a day off bad?",
        "answer": "An occasional long sleep after a block of nights is common. The risk is that a very long lie-in pushes your body clock later, so you struggle to sleep that night. A shorter sleep and an earlier bedtime usually work better."
      },
      {
        "question": "Do naps pay off sleep debt?",
        "answer": "Naps add to your total sleep, so they help top up a deficit. They do not replace a proper main sleep, but a short nap on a rest day or before a night shift can take the edge off."
      },
      {
        "question": "Can you bank sleep before a block of nights?",
        "answer": "You can start the block in a better state. The HSE advises a short sleep before your first night shift so you are not running on a full day awake when you clock on."
      },
      {
        "question": "Why do I feel fine when I am short on sleep?",
        "answer": "In the Van Dongen study, people on 6 hours a night rated themselves only slightly sleepier as the days went on, while their performance kept getting worse. Feeling fine is not proof you have caught up."
      },
      {
        "question": "Is a lie-in better than going to bed earlier?",
        "answer": "For most shift workers, an earlier bedtime is the better option. In the 2019 Colorado study, weekend lie-ins shifted body clocks later, making it harder to fall asleep before an early start."
      }
    ]
  },
  {
    "slug": "how-to-fix-sleep-schedule-after-nights",
    "title": "How to Fix Your Sleep Schedule After a Block of Nights",
    "description": "How to fix your sleep schedule after a block of nights: an hour-by-hour flip-back plan using light, food and caffeine, so your days off don't feel like jet lag.",
    "category": "Managing Split/Rotating Rotas",
    "categorySlug": "rotating-rotas",
    "datePublished": "2026-10-23",
    "readMinutes": 8,
    "quickAnswer": "To fix your sleep schedule after a block of nights, take a short sleep of three to four hours after your last shift rather than a full day in bed, get outside in daylight that afternoon, stay up until a normal bedtime and keep caffeine early. Expect a day or two of feeling jet-lagged while your body clock catches up.",
    "blocks": [
      {
        "type": "p",
        "text": "I know how it feels to get up early after your last night shift to try to get the most out of your day off, only to find yourself hit by that dreaded jet-lag feeling by mid-afternoon. You're not on holiday, you haven't crossed any time zones, but your body thinks you have. After 40 years of shifts, from The King's Regiment to the prison wings at Strangeways, Walton and Guys Marsh, and the production lines at Jacobs Biscuits and Budweiser UK, the flip back to days is the part of the rota I've always found hardest to get right."
      },
      {
        "type": "p",
        "text": "Normally after the last night shift, it feels like it's your first day off, so you want to enjoy the day. But here's the thing: if you don't get it right, the day off becomes a day wasted, literally. For me, a short sleep between 8am and 12pm works best. And don't just sit down in the house; get out, get some fresh air and keep active. Sitting on the sofa watching a box set is best left for another day."
      },
      {
        "type": "p",
        "text": "Here's a simple hour-by-hour plan, why you feel rough, and what this weekend's clock change means."
      },
      {
        "type": "h2",
        "text": "How do you switch back to days after a block of nights?"
      },
      {
        "type": "p",
        "text": "The quickest way back is to split the difference: sleep enough to stay safe and functional, but not so much that you're wide awake at midnight. HSE's own advice to shift workers is that \"if coming off night shifts, have a short sleep and go to bed earlier that night\" ([HSE, Managing shift work, HSG256](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf))."
      },
      {
        "type": "p",
        "text": "Here's how that looks if your last night shift finishes at 7am. Slide the times to fit your own finish."
      },
      {
        "type": "table",
        "head": [
          "Time",
          "What to do",
          "Why it helps"
        ],
        "rows": [
          [
            "7am",
            "Finish, then get home safely. If you feel drowsy, don't drive: stop somewhere safe for a short nap or get a lift.",
            "Tiredness and driving don't mix. More in [microsleep and the drive home](/resources/microsleep-driving-after-night-shift/)."
          ],
          [
            "8am",
            "Short sleep in a dark, quiet room. Set an alarm for three to four hours.",
            "Takes the edge off without using up your sleep pressure for tonight."
          ],
          [
            "12pm",
            "Up, shower, curtains open, eat a proper lunch.",
            "Light and a regular meal tell your body clock it's daytime."
          ],
          [
            "1pm to 5pm",
            "Get outside in daylight: a walk, the garden, the school pick-up. Last caffeine with lunch, if at all.",
            "Daylight is one of the clearest signals your body clock gets."
          ],
          [
            "6pm",
            "Normal evening meal with the family.",
            "Eating at normal times helps your body follow the day."
          ],
          [
            "9:30pm to 10:30pm",
            "Bed a bit earlier than usual, dark room, phone away.",
            "HSE: go to bed earlier that night."
          ],
          [
            "Next day",
            "Up at your normal time, daylight early, normal meals.",
            "One normal day anchors the next."
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Why do you feel jet-lagged after nights?"
      },
      {
        "type": "p",
        "text": "You feel jet-lagged because, in a sense, you are. Your body clock has been pushed towards nights, and now you're asking it to swing straight back. HSE's shift work guidance says the adjustment of the body clock to \"an abrupt change in the sleep/wake cycle may take days or weeks\", and that it \"will never fully adjust, even for workers on permanent night shifts\" ([HSG256](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf))."
      },
      {
        "type": "p",
        "text": "That's why you can feel hungry at odd times, flat in the afternoon and wide awake at 1am. It's not a lack of willpower; your body clock is still on the wrong time zone."
      },
      {
        "type": "p",
        "text": "You're far from alone. TUC analysis of ONS figures found more than 3 million people (3,138,000) worked nights in 2018, one in nine UK employees ([TUC, 2018](https://www.tuc.org.uk/node/366134)). Most of them go through this flip every rota."
      },
      {
        "type": "h2",
        "text": "How long does it take to switch from nights to days?"
      },
      {
        "type": "p",
        "text": "For most people the worst of it lasts a day or two, but it depends on how many nights you've just worked. HSE guidance says workers switching between day and night shifts need \"a minimum of 2 nights of full sleep to enable them to adjust to the new schedule\" ([HSG256](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf))."
      },
      {
        "type": "p",
        "text": "The length of the block matters too. HSE suggests limiting 12-hour night shifts to two or three in a row. A longer run of nights pushes your body clock further, so there's further to come back. If you work four 12-hour nights on a [4 on 4 off shift pattern](/resources/4-on-4-off-shift-pattern/), treat your first rest day as recovery, not a full day out. A [continental shift pattern](/resources/continental-shift-pattern/) gives shorter runs of nights, but you make the switch more often. Our guide to [shift patterns explained](/resources/shift-patterns-explained/) compares the main UK rotas side by side."
      },
      {
        "type": "h2",
        "text": "How do light, food and caffeine reset your body clock?"
      },
      {
        "type": "p",
        "text": "You can't force your body clock to change overnight, but you can give it clear signals."
      },
      {
        "type": "ol",
        "items": [
          "**Light.** HSE notes that bright light at dawn after a night shift \"may make you less inclined to sleep\". Use that both ways: keep the light low on the way home and in the bedroom for your short sleep, then get as much daylight as you can in the afternoon.",
          "**Food.** Eat lunch and an evening meal at normal family times, even if you're not very hungry. Skip the big fry-up at 8am before bed; a light snack will do.",
          "**Caffeine.** Keep it early. A coffee when you get up from your short sleep is fine. A can of energy drink at 4pm will cost you the night. See [how long caffeine lasts](/resources/how-long-does-caffeine-last/) for the cut-off maths."
        ]
      },
      {
        "type": "p",
        "text": "I know the after-shift drink is often your \"me time\", the way an evening is for people on normal hours. On flip day it works against you: you nod off, then pay for it at 2am, wide awake."
      },
      {
        "type": "h2",
        "text": "What about the clocks going back on Sunday 25 October?"
      },
      {
        "type": "p",
        "text": "The clocks go back at 2am on Sunday 25 October 2026, when 2am becomes 1am and the UK returns to Greenwich Mean Time ([GOV.UK](https://www.gov.uk/when-do-the-clocks-change)). If you're on nights on Saturday into Sunday, the clock runs from 1am to 2am twice, so your shift is likely to feel an hour longer. Check with your employer how they handle that extra hour."
      },
      {
        "type": "p",
        "text": "For the flip back, the clock change can help a little. Mornings get lighter earlier, so if your rest days start this week it's easier to get daylight early in the day. The trade-off is darker evenings, so make the most of the afternoon light while it lasts."
      },
      {
        "type": "h2",
        "text": "Can a steady sound help with the short sleep after your last night?"
      },
      {
        "type": "p",
        "text": "Getting into bed when everyone else is leaving for school and work is great, until next door starts drilling. A steady masking sound such as [brown noise for sleep](/resources/brown-noise-for-sleep/) covers sudden noises so your three to four hours count. Add earplugs and a blackout blind."
      },
      {
        "type": "p",
        "text": "If you keep feeling tired for weeks despite getting good sleep, speak to your GP."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Fixing your sleep schedule after nights comes down to a short sleep, afternoon daylight, normal mealtimes, early caffeine and a slightly earlier night. Give it two nights of full sleep and most of the jet-lag feeling lifts. To plan the switch around your own rota, use the [Rota Flip-Flop Calculator](/tools/rota-flip-flop-calculator/). Next in this series: [Can You Catch Up on Sleep?](/resources/can-you-catch-up-on-sleep/)"
      },
      {
        "type": "p",
        "text": "For that short sleep after your last night, [try Sleyp free](/session/). The browser player has 13 free sounds, including brown noise, plus a free custom timer and wake-up chime, so you can set it for three to four hours and wake gently. Keep the page open for the timer to run. The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "**More in this series:** [shift patterns explained](/resources/shift-patterns-explained/) · [4 on 4 off shift pattern](/resources/4-on-4-off-shift-pattern/) · [continental shift pattern](/resources/continental-shift-pattern/) · [night shift survival guide](/resources/night-shift-survival-guide/) · [can you catch up on sleep?](/resources/can-you-catch-up-on-sleep/) · [why am I always tired?](/resources/why-am-i-always-tired/)"
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[HSE: Managing shift work, Health and safety guidance (HSG256)](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf): short sleep and an earlier night after coming off nights; body clock adjustment takes days or weeks; minimum 2 nights of full sleep when switching; limit 12-hour nights to 2-3 in a row.",
          "[TUC: Number of people working night shifts up by more than 150,000 in 5 years (27 October 2018)](https://www.tuc.org.uk/node/366134): 3,138,000 people worked nights in 2018.",
          "[GOV.UK: When do the clocks change?](https://www.gov.uk/when-do-the-clocks-change): clocks go back at 2am on Sunday 25 October 2026."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How long does it take to switch from nights to days?",
        "answer": "Most people feel close to normal within a day or two. HSE guidance says workers need a minimum of two nights of full sleep to adjust when switching between nights and days."
      },
      {
        "question": "Should I sleep after my last night shift?",
        "answer": "Yes, but keep it short. HSE advises having a short sleep after coming off nights and going to bed earlier that night. Three to four hours with an alarm takes the edge off without wrecking your night's sleep."
      },
      {
        "question": "How do I reset my body clock in one day?",
        "answer": "You can't fully reset it in one day, but you can get most of the way. Keep the first sleep short, get outside in daylight in the afternoon, eat at normal times, keep caffeine early and go to bed a little earlier than usual."
      },
      {
        "question": "Is it bad to stay awake all day after a night shift?",
        "answer": "Staying up all day after a night shift is risky, especially if you need to drive. Being awake that long builds a lot of sleep debt. A short sleep is safer and still leaves you tired enough to sleep at night."
      },
      {
        "question": "What if I can't sleep on my first night back to normal?",
        "answer": "It's common to feel wide awake on the first night. Keep the room dark and cool, put the phone away and stay off caffeine after lunch. Get up at your normal time the next day anyway; the second night is usually easier."
      },
      {
        "question": "Do the clocks going back make the flip easier?",
        "answer": "A little. When the clocks go back on 25 October, mornings get lighter earlier, so it's easier to get daylight soon after you wake. Evenings get darker, so plan your outdoor time for the afternoon."
      }
    ]
  },
  {
    "slug": "continental-shift-pattern",
    "title": "Continental Shift Pattern Explained (With a Sleep Survival Plan)",
    "description": "What is a continental shift pattern? How the 2-2-3 rota works for 24/7 crews, how it compares with 4 on 4 off, and how to protect sleep through the switches.",
    "category": "Managing Split/Rotating Rotas",
    "categorySlug": "rotating-rotas",
    "datePublished": "2026-10-22",
    "readMinutes": 10,
    "quickAnswer": "A continental shift pattern is a fast-rotating rota that gives 24/7 cover with four crews. The most common UK version is 12-hour shifts on a 2-2-3 cycle: two on, two off, three on, then the mirror image. Nights come in short runs of two or three, which matches HSE good practice, but the regular switches between days and nights test your body clock.",
    "blocks": [
      {
        "type": "p",
        "text": "If you've just been told your site is moving to continentals, or you're weighing up a job that runs them, this is the plain-English version. I'll cover how the rota works, the versions you'll come across, what it does to your sleep, and the plan I'd follow to get through the switches."
      },
      {
        "type": "p",
        "text": "At Budweiser, some professionals, such as engineers, worked continental shifts when they were on big contracts. Luckily, I've never had to do them myself. My own rota there was 4 on 4 off, with 2 days followed by 2 nights, which is a close cousin of the continental."
      },
      {
        "type": "h2",
        "text": "What is a continental shift pattern?"
      },
      {
        "type": "p",
        "text": "\"Continental\" is the name UK workplaces give to a rota that rotates quickly between shifts, so nobody is stuck on one shift for long. It is built for places that never close: manufacturing lines, breweries, warehouses, utilities, control rooms and the emergency services."
      },
      {
        "type": "p",
        "text": "The key features are:"
      },
      {
        "type": "ul",
        "items": [
          "**Four crews.** At any time one crew is on days, one is on nights and two are off.",
          "**Short runs.** You rarely work more than two or three of the same shift in a row.",
          "**Regular weekends off.** The 2-2-3 cycle gives every crew a long weekend off every other week.",
          "**About 42 hours a week on average.** A week has 168 hours, and four crews share them, so each crew averages 42 hours over the full cycle."
        ]
      },
      {
        "type": "p",
        "text": "The official guidance doesn't use the word \"continental\", but it describes the idea. HSE's [good practice guidelines for shift work](https://www.hse.gov.uk/humanfactors/topics/good-practice-guidelines.htm) say to \"either rotate shifts every 2-3 days or every 3-4 weeks\", and HSE's longer guide, [HSG256 Managing shift work](https://www.hse.gov.uk/pubns/priced/hsg256.pdf), says \"fast rotation of shifts minimises disruption of the internal body clock\". It also says weekly or fortnightly rotating schedules \"are not recommended\". That is the case for continentals in a sentence."
      },
      {
        "type": "h2",
        "text": "How does the 12-hour 2-2-3 continental rota work?"
      },
      {
        "type": "p",
        "text": "The 2-2-3 version runs on a 14-day cycle: work two, rest two, work three, then rest two, work two, rest three ([RosterElf's guide to shift patterns](https://www.rosterelf.com/uk/guides/shift-patterns) describes the same 14-day cycle). Two crews cover days and two cover nights, then they swap. Here is one fortnight (D = 12-hour day, N = 12-hour night, - = rest day):"
      },
      {
        "type": "table",
        "head": [
          "Crew",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "rows": [
          [
            "A, week 1",
            "D",
            "D",
            "-",
            "-",
            "D",
            "D",
            "D"
          ],
          [
            "A, week 2",
            "-",
            "-",
            "D",
            "D",
            "-",
            "-",
            "-"
          ],
          [
            "B, week 1",
            "-",
            "-",
            "D",
            "D",
            "-",
            "-",
            "-"
          ],
          [
            "B, week 2",
            "D",
            "D",
            "-",
            "-",
            "D",
            "D",
            "D"
          ],
          [
            "C, week 1",
            "N",
            "N",
            "-",
            "-",
            "N",
            "N",
            "N"
          ],
          [
            "C, week 2",
            "-",
            "-",
            "N",
            "N",
            "-",
            "-",
            "-"
          ],
          [
            "D, week 1",
            "-",
            "-",
            "N",
            "N",
            "-",
            "-",
            "-"
          ],
          [
            "D, week 2",
            "N",
            "N",
            "-",
            "-",
            "N",
            "N",
            "N"
          ]
        ]
      },
      {
        "type": "p",
        "text": "After the fortnight, crews A and C swap (A goes to nights, C to days), and so do B and D. Each crew works 7 shifts in 14 days, which is 84 hours, or 42 hours a week. Sites change the details, such as when the day-to-night swap happens, so always check your own rota sheet."
      },
      {
        "type": "h2",
        "text": "What are the other versions of the continental pattern?"
      },
      {
        "type": "p",
        "text": "You'll hear \"continental\" used for a few rotas. These are the main ones:"
      },
      {
        "type": "table",
        "head": [
          "Version",
          "Shift length",
          "How it runs",
          "Most nights in a row"
        ],
        "rows": [
          [
            "2-2-3 (above)",
            "12 hours",
            "2 on, 2 off, 3 on over a 14-day cycle; days and nights swap between crews",
            "3"
          ],
          [
            "2 days, 2 nights, 4 off",
            "12 hours",
            "Two days, straight onto two nights, then four rest days; an 8-day cycle",
            "2"
          ],
          [
            "8-hour continental",
            "8 hours",
            "Short runs of earlies, lates and nights (often 2-2-3) with rest days between, usually over a 28-day cycle",
            "3"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The 8-hour version is the older style and means more shifts per week but shorter ones. The 2 days, 2 nights, 4 off pattern is close to the [4 on 4 off shift pattern](/resources/4-on-4-off-shift-pattern/), but splits the block between days and nights."
      },
      {
        "type": "p",
        "text": "For how these compare with 4 on 4 off, weekly rotating earlies and lates, and other rotas, see [shift patterns explained](/resources/shift-patterns-explained/)."
      },
      {
        "type": "h2",
        "text": "Is a continental shift pattern good or bad for sleep?"
      },
      {
        "type": "p",
        "text": "It's both. The short runs of nights are its biggest strength. HSE's guidelines say to \"restrict long shifts, night shifts and early morning shifts to 2-3 consecutive shifts\", and a continental rota does exactly that. Two or three nights is far easier to recover from than four or seven."
      },
      {
        "type": "p",
        "text": "The weakness is the switching. Your body clock never settles on nights or days for long. HSG256 is honest about this: rotating shifts reduce the number of nights each person works, but workers \"may struggle to adapt to the constantly changing pattern\". HSE also advises allowing \"2 nights full sleep when switching from day to night shifts and vice versa\". Some continental rotas give you that. The 2 days, 2 nights, 4 off version doesn't, because you go straight from your second day shift to your first night."
      },
      {
        "type": "table",
        "head": [
          "",
          "Continental (2-2-3)",
          "4 on 4 off"
        ],
        "rows": [
          [
            "Average hours per week",
            "42",
            "42"
          ],
          [
            "Most 12-hour nights in a row",
            "3",
            "4"
          ],
          [
            "Fits HSE's 2-3 consecutive nights",
            "Yes",
            "No, one over"
          ],
          [
            "Day-night switches",
            "Frequent",
            "Fewer, if crews stay on days or nights"
          ],
          [
            "Long weekends off",
            "Every other week",
            "Moves round the calendar"
          ],
          [
            "Hardest part for sleep",
            "Flipping between days and nights",
            "The fourth night and the flip back"
          ]
        ]
      },
      {
        "type": "p",
        "text": "I know how lates and earlies sound great on paper, but the early start and the late finish take a toll on your sleep pattern and your sleep quality. Continentals are the same. On paper you're never on nights for long. In practice, you're always either getting ready for a switch or getting over one."
      },
      {
        "type": "h2",
        "text": "How do you handle the day-night switches on a continental rota?"
      },
      {
        "type": "p",
        "text": "This is the plan I'd follow. None of it needs special kit."
      },
      {
        "type": "ol",
        "items": [
          "**Before your first night, sleep in the afternoon.** On a 2 days, 2 nights rota, get to bed as soon as you can after your last day shift, then lie in or take a 90-minute afternoon sleep before the first night. On a 2-2-3 rota you usually have rest days first, so stay up later on the last one and sleep in.",
          "**Keep caffeine early in the shift.** It's 3 o'clock in the morning and you hit that wall. No amount of caffeine or Red Bull will help, but you drink it anyway, and then you pay for it when you're wired at bedtime. Set a cut-off about six hours before you plan to sleep. Our guide on [how long caffeine lasts](/resources/how-long-does-caffeine-last/) has the timings.",
          "**Get home safely.** The drive after a 12-hour night is the riskiest part of the rota. If you feel your eyes going, pull over somewhere safe. Read more on [microsleeps and the drive home](/resources/microsleep-driving-after-night-shift/).",
          "**Make your bedroom dark, cool and steady.** Blackout blinds or a mask, a cool room, and earplugs plus a masking sound. Getting into bed when everyone else is leaving for school and work is great, until next door starts drilling. Steady [brown noise](/resources/brown-noise-for-sleep/) covers a lot of that. The full setup is in [how to sleep during the day](/resources/how-to-sleep-during-the-day/).",
          "**After your last night, take a short sleep, not a full day in bed.** Three or four hours, then get outside in daylight and go to bed at a normal time. I know how it feels to get up early after your last night shift to make the most of your day off, then find yourself hit by that dreaded jet-lag feeling. A short sleep takes the edge off it. Our guide on [How to Fix Your Sleep Schedule After a Block of Nights](/resources/how-to-fix-sleep-schedule-after-nights/) covers this in detail.",
          "**Write the rota on the family calendar.** On a continental, your free days move all the time. If everyone at home knows which days you're sleeping, you get fewer knocks on the bedroom door."
        ]
      },
      {
        "type": "p",
        "text": "**A note on the clocks.** The clocks go back at 2am on Sunday 25 October 2026. If you're on nights that weekend, your shift could run an extra hour. Check with your employer how they handle it, and plan an extra break if you can."
      },
      {
        "type": "p",
        "text": "For many night shift workers, watching the clock go back from 2am to 1am is not a nice sight or feeling. Imagine working a day shift and the boss suddenly asks you to stay for an extra hour. It's not a nice feeling for sure. All your workmates finish and head off to the pub or home, and you're stuck at work for an extra hour."
      },
      {
        "type": "p",
        "text": "At Budweiser, we had two staff taking over from two staff. One would come in at the normal start time of 7pm and do the handover, and the other would come in an hour later at 8pm. The handover guy would then leave at 6am, and the late guy would stay to do the handover at 7am. This way both staff only did a 12-hour shift, not the 13-hour shift that comes with the clocks going back."
      },
      {
        "type": "h2",
        "text": "Is a continental shift pattern legal in the UK?"
      },
      {
        "type": "p",
        "text": "Yes, as long as it stays within the Working Time Regulations. [Acas](https://www.acas.org.uk/working-time-rules/night-workers) explains that a night worker usually works at least 3 hours between 11pm and 6am, and must not average more than 8 hours in 24, usually worked out over rolling 17-week periods. Workers can't opt out of this limit. Where the work involves special hazards or heavy physical or mental strain, the 8-hour limit applies to every 24 hours, with no averaging. HSG256 adds that the minimum rest between shifts is 11 hours. If you're not sure your rota fits, ask your employer or union rep."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "A continental shift pattern is one of the better rotas for limiting nights in a row, and that's what HSE good practice points to. The price is constant switching, so the people who do well on continentals plan every switch: an afternoon sleep before the first night, an early caffeine cut-off, a safe drive home, a dark, quiet bedroom, and a short sleep after the last night."
      },
      {
        "type": "p",
        "text": "If you want to see how your natural body clock fits your rota, try the [Chronotype & Rota Matcher](/tools/chronotype-rota-matcher/). And when you get into bed with the world waking up outside, [try Sleyp free](/session/): 13 free sounds in your browser, including brown noise, rain and fan hum, with a free timer and saved mixes. Keep the page open for the timer to run. The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "**More in this series:** [shift patterns explained](/resources/shift-patterns-explained/) · [4 on 4 off shift pattern](/resources/4-on-4-off-shift-pattern/) · [fixing your sleep schedule after nights](/resources/how-to-fix-sleep-schedule-after-nights/) · [night shift survival guide](/resources/night-shift-survival-guide/) · [can you catch up on sleep?](/resources/can-you-catch-up-on-sleep/) · [why am I always tired?](/resources/why-am-i-always-tired/)"
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[HSE: Good practice guidelines for shift work](https://www.hse.gov.uk/humanfactors/topics/good-practice-guidelines.htm): rotate every 2-3 days or every 3-4 weeks; restrict long shifts and night shifts to 2-3 consecutive shifts.",
          "[HSE HSG256: Managing shift work (PDF)](https://www.hse.gov.uk/pubns/priced/hsg256.pdf): fast rotation minimises body clock disruption; weekly or fortnightly rotation not recommended; 2 nights' full sleep when switching; 11 hours between shifts.",
          "[Acas: Working time rules for night workers](https://www.acas.org.uk/working-time-rules/night-workers): night worker definition; average of 8 hours in 24 over 17 weeks; no opt-out; no averaging for hazardous work.",
          "[RosterElf: Shift patterns explained](https://www.rosterelf.com/uk/guides/shift-patterns): the 14-day 2-2-3 cycle."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is a continental shift pattern?",
        "answer": "It's a fast-rotating rota that uses four crews to cover a site 24 hours a day, 7 days a week. The best-known version is 12-hour shifts on a 2-2-3 cycle over 14 days, with short runs of days and nights and a long weekend off every other week."
      },
      {
        "question": "How many hours is a continental shift?",
        "answer": "Most continental rotas use 12-hour shifts, though older versions use 8-hour earlies, lates and nights. Either way, four crews sharing 168 hours a week means each person averages about 42 hours a week over the full cycle, before overtime."
      },
      {
        "question": "Is continental better than 4 on 4 off?",
        "answer": "For sleep, a continental rota keeps runs of nights to two or three, which is in line with HSE good practice, while 4 on 4 off can mean four 12-hour nights in a row. The trade-off is that continentals switch between days and nights more often. Which suits you depends on how well you cope with switching."
      },
      {
        "question": "How many nights in a row do you work on a continental rota?",
        "answer": "Usually two or three. On the 2-2-3 version the longest run is three shifts, and on the 2 days, 2 nights, 4 off version it's two nights."
      },
      {
        "question": "How do you sleep when switching from days to nights?",
        "answer": "Sleep in, or take a 90-minute afternoon sleep, before your first night. Keep caffeine to the first half of the shift, go to bed as soon as you get home, and make the bedroom dark, cool and quiet with earplugs and a steady masking sound."
      },
      {
        "question": "Does the clock change affect a continental night shift?",
        "answer": "When UK clocks go back in October, a night shift that runs through 2am can last an hour longer. In 2026 that's the night of Saturday 24 into Sunday 25 October. Check how your employer handles the extra hour."
      }
    ]
  },
  {
    "slug": "4-on-4-off-shift-pattern",
    "title": "4 On 4 Off Shift Pattern: How It Works and How to Sleep on It",
    "description": "How does a 4 on 4 off shift pattern work? Hours per week, pros and cons, what HSE says about long shift blocks, and a sleep plan for your nights and days off.",
    "category": "4-on, 4-off Survival Strategies",
    "categorySlug": "4-on-4-off-survival",
    "datePublished": "2026-10-20",
    "readMinutes": 9,
    "quickAnswer": "A 4 on 4 off shift pattern is four 12-hour shifts followed by four days off, which averages 42 hours a week. You get long breaks, but HSE guidance suggests limiting 12-hour night shifts to two or three in a row, so four nights back to back needs a proper sleep plan for the block and the switch back.",
    "blocks": [
      {
        "type": "p",
        "text": "I've worked shifts for 40 years, from The King's Regiment (1986-1989) to Jacobs Biscuits, HM Prison Service at Strangeways, Walton and Guys Marsh, and Budweiser UK. Long blocks with long breaks are the rotas people ask me about most. Budweiser had the 4 on 4 off, 12-hour shift pattern, which was 2 day shifts followed by 2 night shifts. This guide covers how the pattern works, the real hours, what UK guidance says, and how to sleep on it. For a wider look at other rotas, see [shift patterns explained](/resources/shift-patterns-explained/)."
      },
      {
        "type": "h2",
        "text": "How does a 4 on 4 off shift pattern work?"
      },
      {
        "type": "p",
        "text": "You work four shifts in a row, usually 12 hours each, then have four days off. The cycle repeats every eight days, so four crews can cover a site 24 hours a day, 7 days a week."
      },
      {
        "type": "p",
        "text": "Because the cycle is eight days long and a week is seven, your days off move one day later each week. That means your weekends change constantly. Over any eight-week stretch you get both Saturday and Sunday off in three weeks, work both in three weeks, and work one of the two in the other two."
      },
      {
        "type": "p",
        "text": "The most common versions are:"
      },
      {
        "type": "table",
        "head": [
          "Version",
          "How it runs",
          "Cycle length",
          "Nights in a row"
        ],
        "rows": [
          [
            "4 days, 4 off",
            "Four 12-hour day shifts, four rest days, repeat",
            "8 days",
            "None"
          ],
          [
            "4 nights, 4 off",
            "Four 12-hour night shifts, four rest days, repeat",
            "8 days",
            "4"
          ],
          [
            "4 days, 4 off, 4 nights, 4 off",
            "Alternates a day block and a night block",
            "16 days",
            "4"
          ],
          [
            "2 days, 2 nights, 4 off",
            "Two days, two nights, then four rest days",
            "8 days",
            "2"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The 2 days, 2 nights, 4 off version is still four on and four off, but it splits the block. It sits close to the continental pattern, which I cover in [Continental Shift Pattern Explained](/resources/continental-shift-pattern/). This was my Budweiser shift pattern and, for me personally, the hardest shift pattern to get used to."
      },
      {
        "type": "h2",
        "text": "How many hours a week is 4 on 4 off?"
      },
      {
        "type": "p",
        "text": "Four 12-hour shifts is 48 hours every eight days. Spread across a week, that works out at an average of 42 hours."
      },
      {
        "type": "p",
        "text": "In practice no week is average. Depending on where the cycle falls, a calendar week has either three shifts (36 hours) or four shifts (48 hours). Over a year it comes to roughly 182 shifts and about 2,190 hours, with around 182 days off. Paid and unpaid breaks, holidays and overtime will change your own figures, so check your contract."
      },
      {
        "type": "table",
        "head": [
          "Measure",
          "4 on 4 off (12-hour shifts)"
        ],
        "rows": [
          [
            "Hours per 8-day cycle",
            "48"
          ],
          [
            "Average hours per week",
            "42"
          ],
          [
            "Hours in a single week",
            "36 or 48"
          ],
          [
            "Shifts per year",
            "About 182"
          ],
          [
            "Days off per year",
            "About 182"
          ],
          [
            "Full weekends off",
            "3 in every 8 weeks"
          ]
        ]
      },
      {
        "type": "p",
        "text": "If you work nights, GOV.UK says you count as a night worker if you regularly work at least 3 hours in the night period. [Night workers must not work more than an average of 8 hours in a 24-hour period](https://www.gov.uk/night-working-hours), usually averaged over 17 weeks, and you can't opt out of that limit. If you're unsure whether your rota fits, ask your employer or HR to show you how they calculate it."
      },
      {
        "type": "h2",
        "text": "Is 4 on 4 off a good shift pattern? Days vs nights"
      },
      {
        "type": "p",
        "text": "It depends on whether your four are days or nights. Four 12-hour days are tiring but your body clock stays roughly where it should be. Four 12-hour nights are a different story."
      },
      {
        "type": "p",
        "text": "**What people like about it:**"
      },
      {
        "type": "ul",
        "items": [
          "Four full days off every eight days, so more time at home than a five-day week",
          "Fewer commutes: four journeys in, not five",
          "Days off fall midweek, which is handy for appointments and quieter shops"
        ]
      },
      {
        "type": "p",
        "text": "**What wears you down:**"
      },
      {
        "type": "ul",
        "items": [
          "12 hours is a long time to stay sharp, especially on the third and fourth nights",
          "Weekends and family plans move every week",
          "Day one off is often lost to recovery sleep, so four days off can feel like three",
          "The switch from nights back to days hits you every single cycle"
        ]
      },
      {
        "type": "p",
        "text": "That last one is the killer. I know how it feels to get up early after your last night shift to make the most of your day off, then find yourself fatigued with that dreaded jet-lag feeling by mid-afternoon."
      },
      {
        "type": "h2",
        "text": "What does HSE say about four 12-hour nights in a row?"
      },
      {
        "type": "p",
        "text": "This is the point most guides skip. HSE's guidance for employers, [HSG256 Managing shift work](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf), says to \"limit 12-hour night shifts to 2-3 consecutive nights\". Its [good practice guidelines](https://www.hse.gov.uk/humanfactors/topics/good-practice-guidelines.htm) also say to \"restrict long shifts, night shifts and early morning shifts to 2-3 consecutive shifts\"."
      },
      {
        "type": "p",
        "text": "A 4 nights, 4 off rota goes one night past that. It isn't against the law, and plenty of workplaces run it, but it does mean the fourth night is the one to watch."
      },
      {
        "type": "p",
        "text": "The same guidance says:"
      },
      {
        "type": "ol",
        "items": [
          "Shifts should not be planned to be longer than 12 hours, including overtime.",
          "The minimum time between shifts under the Working Time Regulations is 11 hours.",
          "When switching from day to night shifts or back, workers should get at least 2 nights' full sleep.",
          "Forward-rotating schedules (days, then lates, then nights) may help reduce sleep loss and fatigue."
        ]
      },
      {
        "type": "p",
        "text": "Point 3 is where 4 on 4 off earns its keep. Four rest days gives you room for two proper nights' sleep before you're back in. The trick is not wasting them."
      },
      {
        "type": "h2",
        "text": "How do you sleep on a 4 on 4 off rota?"
      },
      {
        "type": "p",
        "text": "Here's the plan I'd give anyone starting a 4 nights, 4 off block. Treat it as a starting point and adjust it to your commute and home life."
      },
      {
        "type": "h3",
        "text": "Before night one"
      },
      {
        "type": "ol",
        "items": [
          "Have a normal night's sleep the night before, and don't set an early alarm.",
          "Take a nap in the afternoon before your first night if you can. Even an hour helps.",
          "Eat a proper meal before you leave, so you're not relying on the vending machine at 3am."
        ]
      },
      {
        "type": "h3",
        "text": "During the block (nights one to four)"
      },
      {
        "type": "ol",
        "items": [
          "Go to bed soon after you get home. HSE's [tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) suggest going to bed soon after you arrive back from work, and say most adults need 7-8 hours.",
          "Make the bedroom dark with heavy curtains, blackout blinds or an eye mask.",
          "Block the noise. Getting into bed when everyone else is leaving for school and work is great, until the neighbours decide to mow their lawns. Earplugs plus a steady masking sound is the combination I trust. See [sleeping with earplugs](/resources/earplugs-for-sleeping/) and [brown noise for sleep](/resources/brown-noise-for-sleep/).",
          "Stop caffeine well before the end of the shift. There's a worked cut-off in [how long does caffeine last](/resources/how-long-does-caffeine-last/).",
          "Tell your family and close neighbours your sleep times, as HSE suggests.",
          "Be extra careful on the drive home after nights three and four. If you feel sleepy, stop and nap where it's safe. More on that in [microsleep and the drive home](/resources/microsleep-driving-after-night-shift/)."
        ]
      },
      {
        "type": "h3",
        "text": "The flip back (rest days one and two)"
      },
      {
        "type": "ol",
        "items": [
          "After your last night, have a short sleep rather than a full day in bed. HSE's advice is: \"if coming off night shifts, have a short sleep and go to bed earlier that night.\" At Budweiser, I always tried to go to sleep after my last night shift at around 8am and get up at 12 noon. My best advice is to then keep active and go out somewhere. Don't just sit watching TV or doom scrolling, otherwise you will soon be back asleep and will regret it later.",
          "Get outside in daylight in the afternoon.",
          "Keep caffeine to the morning and early afternoon.",
          "Go to bed at a normal time that evening, a little earlier than usual if you need it.",
          "Count rest day two as your second full night's sleep. By rest day three you should feel close to normal."
        ]
      },
      {
        "type": "p",
        "text": "The after-shift drink is tempting. It's your \"me time\", the same as an evening is for a 9-to-5 worker. But if you have it after night one, you'll pay for it at 2am on night two. I very rarely had a drink after a night shift, but sometimes, especially after a really bad shift, the reward factor can play head games. The reality is you will pay for it later."
      },
      {
        "type": "p",
        "text": "For the full day-sleep setup, see [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/). For a more detailed hour-by-hour version of the flip back, see [How to Fix Your Sleep Schedule After a Block of Nights](/resources/how-to-fix-sleep-schedule-after-nights/)."
      },
      {
        "type": "p",
        "text": "**A note on the clocks.** UK clocks go back at 2am on Sunday 25 October 2026. If you're on nights that weekend, a 7pm to 7am shift lasts 13 hours, not 12, unless your employer adjusts it. Plan your food and caffeine for the extra hour, and take extra care on the drive home."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "4 on 4 off gives you more time at home than almost any other full-time rota, but four 12-hour nights in a row is one more than HSE suggests. Plan the block, protect your day sleep, and use your first two rest days to reset properly rather than burning them."
      },
      {
        "type": "p",
        "text": "If you want help with the switch from your last night to your first day off, try the [Rota Flip-Flop Calculator](/tools/rota-flip-flop-calculator/). And when it's time to sleep through the mowers and the school run, [try Sleyp free](/session/): 13 sleep sounds in your browser, with a free custom timer and wake-up chime (keep the page open for them to run). The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "**More in this series:** [shift patterns explained](/resources/shift-patterns-explained/) · [continental shift pattern](/resources/continental-shift-pattern/) · [fixing your sleep schedule after nights](/resources/how-to-fix-sleep-schedule-after-nights/) · [night shift survival guide](/resources/night-shift-survival-guide/) · [can you catch up on sleep?](/resources/can-you-catch-up-on-sleep/) · [why am I always tired?](/resources/why-am-i-always-tired/)"
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[HSE: HSG256 Managing shift work, health and safety guidance (PDF)](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf): 12-hour night shifts limited to 2-3 consecutive nights; shifts no longer than 12 hours; 11 hours between shifts; 2 nights' full sleep when switching; forward rotation.",
          "[HSE: Good practice guidelines for shift work](https://www.hse.gov.uk/humanfactors/topics/good-practice-guidelines.htm): restrict long shifts and night shifts to 2-3 consecutive shifts.",
          "[GOV.UK: Night working hours](https://www.gov.uk/night-working-hours): night worker definition; average of 8 hours in 24, usually over 17 weeks; no opt-out.",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm): 7-8 hours' sleep; blackout and eye shades; telling family and neighbours; short sleep after the last night."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many hours a week is 4 on 4 off?",
        "answer": "With 12-hour shifts, 4 on 4 off is 48 hours every eight days, which averages 42 hours a week. Any single calendar week will be either 36 or 48 hours, depending on where the cycle falls."
      },
      {
        "question": "Is 4 on 4 off a good shift pattern?",
        "answer": "Many people like the four days off and fewer commutes. The downsides are long 12-hour shifts, weekends that move every week, and, on nights, a block one longer than HSE's suggested 2-3 consecutive 12-hour nights."
      },
      {
        "question": "How do you sleep on a 4 on 4 off rota?",
        "answer": "Nap before the first night, go to bed soon after getting home during the block, keep the bedroom dark and quiet, and stop caffeine well before the end of the shift. After the last night, take a short sleep, get daylight and go to bed at a normal time."
      },
      {
        "question": "Is 4 on 4 off legal in the UK?",
        "answer": "Yes, it can be. Shifts shouldn't be planned over 12 hours, you're entitled to 11 hours' rest between shifts, and night workers must not average more than 8 hours in 24, usually over 17 weeks. Ask your employer how they calculate it for your rota."
      },
      {
        "question": "How many weekends off do you get on 4 on 4 off?",
        "answer": "Because the cycle is eight days long, your days off move one day later each week. Over eight weeks you get three full weekends off, work three full weekends, and work one day of the other two."
      },
      {
        "question": "What should I do on my first day off after four nights?",
        "answer": "Have a short sleep after your last shift, not a full day in bed. Then get outside in daylight, keep caffeine to the morning and go to bed at a normal time that night. HSE suggests allowing at least two nights' full sleep when you switch."
      }
    ]
  },
  {
    "slug": "shift-patterns-explained",
    "title": "Shift Patterns Explained: 4 On 4 Off, Continental, Rotating and 12-Hour Shifts",
    "description": "UK shift patterns explained: 4 on 4 off, continental, rotating and 12-hour shifts, how each affects sleep, and what HSE good practice says about rotas.",
    "category": "Managing Split/Rotating Rotas",
    "categorySlug": "rotating-rotas",
    "datePublished": "2026-10-19",
    "readMinutes": 10,
    "quickAnswer": "The most common UK shift patterns are 4 on 4 off (four 12-hour shifts, then four days off), continental (a fast-rotating pattern of short runs of days and nights) and weekly rotating earlies, lates and nights. HSE good practice favours forward rotation, shifts of no more than 12 hours and short runs of nights.",
    "blocks": [
      {
        "type": "p",
        "text": "I've worked shifts for 40 years: on stag in The King's Regiment, on the line at Jacobs Biscuits, on the wings at Strangeways, Walton and Guys Marsh, and on production at Budweiser UK. Every one of those jobs had a different rota, and every rota hit my sleep in a different way."
      },
      {
        "type": "p",
        "text": "The Army was mainly day work, apart from stag duty at night, or night patrols on a tour such as Northern Ireland. The Prison Service was a real mix: earlies, lates, main shift (days) and nights. Jacobs was earlies and lates, with no nights. Budweiser was the toughest, on 4 on 4 off 12-hour shifts, working 2 days followed by 2 nights."
      },
      {
        "type": "p",
        "text": "This guide explains what each pattern looks like, how many hours it works out at, what the HSE says good practice looks like, and how each one affects your sleep. It is the hub for our shift patterns series, so you'll find deeper guides on [4 on 4 off](/resources/4-on-4-off-shift-pattern/) and [continental rotas](/resources/continental-shift-pattern/), and [switching back to days after a block of nights](/resources/how-to-fix-sleep-schedule-after-nights/)."
      },
      {
        "type": "h2",
        "text": "What is a shift pattern?"
      },
      {
        "type": "p",
        "text": "A shift pattern (or rota) is the repeating cycle of shifts and rest days your employer uses to cover the hours it needs. It sets three things that matter for your sleep: **when** you work (days, lates or nights), **how long** each shift is (usually 8 or 12 hours), and **how often it changes** (fixed, slow rotation or fast rotation)."
      },
      {
        "type": "p",
        "text": "Most 24/7 workplaces split staff into crews. With four crews covering all 168 hours of the week, each crew averages 42 hours a week, whichever pattern they use. That's why so many 12-hour rotas land on 42 hours: the maths is the same, only the order of the shifts changes."
      },
      {
        "type": "p",
        "text": "Shift work is not a niche way of working. [HSE says](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm) more than 3.5 million people are employed as shift workers in the UK, and it states plainly that \"there is no single optimal shift system that suits everyone\". The right rota is the one that fits the work, the people and their lives outside work."
      },
      {
        "type": "h2",
        "text": "What are the most common UK shift patterns?"
      },
      {
        "type": "p",
        "text": "Here is how the main patterns compare. Hours assume no overtime; your own rota may vary."
      },
      {
        "type": "table",
        "head": [
          "Pattern",
          "How it runs",
          "Shift length",
          "Average hours a week",
          "Nights in a row",
          "Main sleep challenge"
        ],
        "rows": [
          [
            "4 on 4 off",
            "Four shifts, then four days off. Often 4 days, 4 off, 4 nights, 4 off",
            "12 hours",
            "42 (48 hours every 8 days)",
            "Up to 4",
            "A long block of 12-hour nights, then the flip back"
          ],
          [
            "[Continental (12-hour, 2-2-3)](/resources/continental-shift-pattern/)",
            "2 on, 2 off, 3 on, then the reverse, over a 14-day cycle",
            "12 hours",
            "42 (4 crews)",
            "2-3",
            "Frequent switches between days and nights"
          ],
          [
            "Continental (8-hour)",
            "Short runs such as 2 earlies, 2 lates, 3 nights, then rest",
            "8 hours",
            "About 42 (4 crews)",
            "2-3",
            "Quick turnarounds and constant change"
          ],
          [
            "Weekly rotating (earlies, lates, nights)",
            "A full week on each shift, then rotate",
            "8 hours",
            "About 40 (weekday cover)",
            "5",
            "A whole week of day sleep, then a hard switch"
          ],
          [
            "Earlies and lates (two-shift)",
            "Alternating weeks of mornings and afternoons/evenings",
            "8 hours",
            "About 37-40",
            "None",
            "Very early starts and late finishes"
          ],
          [
            "Permanent nights",
            "Nights only, fixed",
            "8-12 hours",
            "Varies",
            "Every working day",
            "Day sleep every week, and losing it on days off"
          ]
        ]
      },
      {
        "type": "p",
        "text": "You'll hear other names too: Panama, DuPont, 2-2-3 and 6 on 4 off are all variations on the same idea of crews rotating through fixed blocks. Police forces, the NHS, prisons and factories each tend to run their own versions, so always check the actual rota rather than the name on it."
      },
      {
        "type": "h2",
        "text": "What does HSE good practice say about shift patterns?"
      },
      {
        "type": "p",
        "text": "The HSE's guidance on [managing shift work (HSG256)](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf) sets out good practice for designing rotas. It is guidance for employers, not law, but it is the clearest benchmark we have in the UK. The key points:"
      },
      {
        "type": "ol",
        "items": [
          "**Limit shifts to a maximum of 12 hours, including overtime.**",
          "**Limit night shifts, and demanding, monotonous, dangerous or safety-critical work, to 8 hours** where possible.",
          "**For long shifts, night shifts and early starts, consider a limit of 2-3 consecutive shifts.** HSE specifically suggests limiting 12-hour night shifts to 2-3 nights in a row.",
          "**Rotate forwards where possible:** earlies to lates to nights, rather than backwards.",
          "**Avoid early starts before 7am** unless the business really needs them.",
          "**Allow at least 2 nights' full sleep when switching between day and night shifts.**",
          "**Give a choice between permanent and rotating shifts** where you can.",
          "**Leave at least 11 hours between shifts,** the minimum rest under the Working Time Regulations."
        ]
      },
      {
        "type": "p",
        "text": "The HSE's [fatigue guidance](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm) explains why this matters. Accidents and injuries are more common on night shifts, after a succession of shifts and when shifts are long. It also notes that a night worker's day sleep is usually \"lighter, shorter and more easily disturbed\"."
      },
      {
        "type": "p",
        "text": "Here is the point most rota articles miss. A 4 on 4 off block of four 12-hour nights is longer than the 2-3 consecutive long nights HSE suggests considering. That doesn't make it unlawful, and plenty of people work it well. It does mean your sleep plan during that block matters more than on almost any other rota."
      },
      {
        "type": "h2",
        "text": "Is my shift pattern legal?"
      },
      {
        "type": "p",
        "text": "For night workers, [GOV.UK sets out the rules](https://www.gov.uk/night-working-hours). You're a night worker if you regularly work at least 3 hours in the night period, which is 11pm to 6am unless you and your employer agree a different one. Night workers must not work more than an average of 8 hours in 24, usually averaged over 17 weeks, and they cannot opt out of that limit."
      },
      {
        "type": "p",
        "text": "A 4 on 4 off rota of 12-hour shifts works 48 hours every 8 days, which averages 6 hours in every 24. So 12-hour nights can sit inside the average. The exception is work involving special hazards or heavy mental or physical strain: those night workers cannot work more than 8 hours in any 24-hour period."
      },
      {
        "type": "p",
        "text": "If you think your rota breaks the rules, speak to your manager, union rep or HR first. ACAS also offers free advice."
      },
      {
        "type": "h2",
        "text": "How does each shift pattern affect your sleep?"
      },
      {
        "type": "p",
        "text": "Every rota has a weak spot. Knowing where yours is lets you plan for it rather than be ambushed by it."
      },
      {
        "type": "p",
        "text": "**4 on 4 off.** The four days off are the big draw. The cost is the block itself: four 12-hour shifts back to back leave little time for anything but commute, eat and sleep. On the nights block, sleep debt builds over the four shifts, and the flip back to days on your first rest day can feel brutal. I know how it feels to get up early after your last night shift to try to get the most out of your day off, then find yourself fatigued with that dreaded jet-lag feeling."
      },
      {
        "type": "p",
        "text": "**Continental.** Runs of nights are short, which fits HSE good practice. The trade-off is that your body clock never gets settled. You're forever switching between day sleep and night sleep, often with only a day or two in between."
      },
      {
        "type": "p",
        "text": "**Weekly rotating earlies, lates and nights.** A full week on nights gives your body clock time to shift a little, but five nights in a row is a long run, and the switch back is hard. If the rota rotates backwards (nights, then lates, then earlies), it is fighting your body clock rather than working with it."
      },
      {
        "type": "p",
        "text": "**Earlies and lates.** No nights, so it looks easy on paper. Lates and earlies sound great, but the early start and late finish take a toll on your sleep pattern and sleep quality. A 5am alarm after a week of getting in at midnight is a jolt every time. Jacobs had an early shift that started at 7am, as did the Prison Service. I used to double my shifts up to do one long day (an early and a late), because once I was awake and up, I might as well do it all in one day and then get an extra day off."
      },
      {
        "type": "p",
        "text": "**Permanent nights.** Your body clock can adapt more than on a rotating rota, but only if you stick with day sleep. Most people don't on their days off, because family and friends live in the daytime. Getting in bed when everyone else is leaving the house for school and work is great, until the neighbour starts drilling."
      },
      {
        "type": "h2",
        "text": "What is the best shift pattern for sleep?"
      },
      {
        "type": "p",
        "text": "There isn't one best pattern for everyone, and the HSE says as much. But the guidance points to some features that are easier on sleep:"
      },
      {
        "type": "ul",
        "items": [
          "**Forward rotation** (earlies, then lates, then nights)",
          "**Short runs of nights** (2-3 when shifts are 12 hours)",
          "**Shifts no longer than 12 hours,** including overtime",
          "**No starts before 7am** where it can be avoided",
          "**Proper recovery** after nights: at least 2 nights' full sleep before switching back",
          "**A regular, predictable rota** you can plan your home life around"
        ]
      },
      {
        "type": "p",
        "text": "Your own body clock matters too. Some people are naturally early risers and cope well with earlies; others come alive in the evening and handle lates and nights better. That's what our [Chronotype & Rota Matcher](/tools/chronotype-rota-matcher/) is for: it compares your natural tendencies with the pattern you actually work."
      },
      {
        "type": "h2",
        "text": "How do you adapt to a rotating shift pattern?"
      },
      {
        "type": "p",
        "text": "Most of us don't get to choose our rota. Here is how to make the one you have work harder for your sleep."
      },
      {
        "type": "ol",
        "items": [
          "**Map your whole cycle.** Write out four to eight weeks of the rota and mark the hard points: the first night, the last night, quick turnarounds and early starts.",
          "**Bank sleep before the hard runs.** A nap in the afternoon before your first night shift takes the edge off the first 3am.",
          "**Protect day sleep during night runs.** Dark room, cool room, earplugs and a steady masking sound. Our guide to [sleeping during the day after a night shift](/resources/how-to-sleep-during-the-day/) covers the full setup.",
          "**Time your caffeine.** It's 3 o'clock in the morning and you hit that wall. No amount of caffeine or Red Bull helps, but you drink it anyway, then pay for it when you try to sleep. Keep caffeine to the first half of the shift.",
          "**Plan the flip back.** After your last night, take a short sleep rather than a whole day in bed, get outside in daylight, then go to bed at a normal time. Our [Rota Flip-Flop Calculator](/tools/rota-flip-flop-calculator/) works out the timings for your shift.",
          "**Keep your days off steady.** Try to keep your rest-day wake time within a couple of hours of your working-day routine where you can.",
          "**Track your sleep debt.** Note the hours you actually sleep across each block. Seeing the numbers makes it easier to plan, and to raise a rota problem with your employer."
        ]
      },
      {
        "type": "p",
        "text": "In the army, you'd finish your stag in the middle of the night, lie there unable to get back to sleep, and the next day still had to be worked. Nobody asked what pattern suited you. Civvy street gives you a bit more say, so use it: ask about forward rotation, shift swaps and the length of your night runs."
      },
      {
        "type": "p",
        "text": "In the Prison Service, \"doubling up\" an early and a late shift got you an extra day off, so I would really recommend doing this if your managers allow it. First thing each morning on the landings, staff would have their diaries out, swapping shifts and getting days off sorted before inmates were let out of their cells."
      },
      {
        "type": "h2",
        "text": "Clocks go back on Sunday 25 October: what it means on nights"
      },
      {
        "type": "p",
        "text": "UK clocks go back one hour at 2am on Sunday 25 October 2026. If you're on nights that weekend, 2am happens twice, so a shift that crosses it runs an hour longer by the clock. Check your rota and pay arrangements with your employer, plan an extra snack and drink, and be extra careful on the [drive home](/resources/microsleep-driving-after-night-shift/). The upside for day sleepers is a lighter morning commute home for a few weeks, but darker evenings arrive fast."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Your shift pattern decides when you sleep, how long you get and how often your body clock has to reset. Know your pattern's weak spot, compare it with HSE good practice, and plan your sleep around the hard points: the long night runs, the quick turnarounds and the flip back to days."
      },
      {
        "type": "p",
        "text": "Start by checking how your rota fits your natural body clock with the [Chronotype & Rota Matcher](/tools/chronotype-rota-matcher/). Then deal with the daytime noise. Even on a quiet street, cars and kids playing out can keep you wide awake. A steady sound such as [brown noise](/resources/brown-noise-for-sleep/) masks the peaks."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/): 13 sounds, a custom timer and saved mixes, all free in your browser (keep the page open while it plays). The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "For the full night shift picture, read our [night shift survival guide](/resources/night-shift-survival-guide/). Next in this series: [4 On 4 Off Shift Pattern: How It Works and How to Sleep on It](/resources/4-on-4-off-shift-pattern/), [Continental Shift Pattern Explained](/resources/continental-shift-pattern/), [How to Fix Your Sleep Schedule After a Block of Nights](/resources/how-to-fix-sleep-schedule-after-nights/), [Can You Catch Up on Sleep? What Science Says About Sleep Debt](/resources/can-you-catch-up-on-sleep/) and [Why Am I Always Tired? A Shift Worker's Checklist](/resources/why-am-i-always-tired/)."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[HSE: Managing shift work, HSG256 (PDF)](https://www.hse.gov.uk/PUBNS/priced/hsg256.pdf): good practice guidelines for shift-work schedule design (Tables 3, 5, 7 and 11)",
          "[HSE: Human factors, Fatigue](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm): 3.5 million UK shift workers; when accidents are more common; day sleep quality",
          "[GOV.UK: Night working hours](https://www.gov.uk/night-working-hours): night worker definition, the 8-hour average and the hazardous-work limit"
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the healthiest shift pattern?",
        "answer": "No single pattern suits everyone, according to the HSE. Patterns that are easier on sleep tend to rotate forwards, keep night runs short (2-3 nights for 12-hour shifts), avoid starts before 7am and give at least two nights' full sleep before switching from nights to days."
      },
      {
        "question": "What is a forward-rotating rota?",
        "answer": "A forward-rotating rota moves from earlies to lates to nights, so each new shift starts later than the last. It works with your body clock, which finds it easier to stay up later than to go to bed earlier. HSE good practice recommends forward rotation where possible."
      },
      {
        "question": "How many hours is a 4 on 4 off shift pattern per week?",
        "answer": "With 12-hour shifts, 4 on 4 off works 48 hours in every 8 days, which averages 42 hours a week, before overtime. Over a year that is roughly 182 working shifts."
      },
      {
        "question": "How many night shifts in a row is safe?",
        "answer": "There is no single legal maximum, but HSE good practice suggests considering a limit of 2-3 consecutive 12-hour night shifts. Longer runs mean more sleep debt, so plan your day sleep carefully if your rota includes four or more nights in a row."
      },
      {
        "question": "Are 12-hour shifts legal in the UK?",
        "answer": "Yes, in most jobs. Night workers must average no more than 8 hours in 24, usually over 17 weeks, and 12-hour rotas with plenty of rest days can sit within that. Night workers in hazardous or high-strain roles cannot work more than 8 hours in any 24-hour period."
      },
      {
        "question": "What is a continental shift pattern?",
        "answer": "A continental shift pattern is a fast-rotating rota for 24/7 cover, usually across four crews. Common versions run 2 days, 2 nights and rest days, or a 2-2-3 cycle of 12-hour shifts. Nights come in short runs, but you switch between days and nights often."
      }
    ]
  },
  {
    "slug": "microsleep-driving-after-night-shift",
    "title": "Microsleep and the Drive Home After a Night Shift",
    "description": "What is a microsleep, and why is the drive home after a night shift so risky? UK road-safety data, warning signs, and what actually keeps shift workers safe.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-18",
    "readMinutes": 8,
    "quickAnswer": "A microsleep is a lapse of a few seconds when your brain briefly falls asleep, often with your eyes open. The drive home after nights is when they strike most: RoSPA says shift workers are about twice as likely to fall asleep at the wheel. If you feel drowsy, stop somewhere safe and nap for 15-20 minutes.",
    "blocks": [
      {
        "type": "p",
        "text": "I worked nights for the best part of 40 years: on stag with The King's Regiment, on the line at Jacobs Biscuits, on the wings at Strangeways, Walton and Guys Marsh, and at Budweiser UK. For a lot of night workers, the most dangerous part of the night isn't the shift at all. It's the drive home."
      },
      {
        "type": "p",
        "text": "You know the routine. It's 3 o'clock in the morning and you hit that wall. No amount of caffeine or Red Bull helps, but you drink it anyway. By 7am you've pushed through, the handover is done and all you want is your bed. So you get in the car. That's exactly when your body is least fit to drive."
      },
      {
        "type": "p",
        "text": "My drive home from Strangeways prison was about 35 minutes and from Budweiser it was around 40 minutes. Both trips were too long after a night shift, and I normally needed a power nap of 15-20 minutes to get home safely. I can't recommend it enough: if you feel tired, pull over and take a short nap."
      },
      {
        "type": "h2",
        "text": "What is a microsleep?"
      },
      {
        "type": "p",
        "text": "A microsleep is a very short episode of sleep while you are otherwise awake. The [Sleep Foundation's guide to microsleep](https://www.sleepfoundation.org/how-sleep-works/microsleep) says researchers generally define it as sleep lasting 15 seconds or less. It can happen with your eyes open, and people often don't recognise that they nodded off."
      },
      {
        "type": "p",
        "text": "That last part is what makes it so dangerous behind the wheel. At 60mph you cover roughly 27 metres every second. A five-second microsleep means well over 100 metres of road with nobody in control, and you may come round with no memory of it."
      },
      {
        "type": "h2",
        "text": "Why is the drive home after a night shift so dangerous?"
      },
      {
        "type": "p",
        "text": "The drive home lands right in your body clock's low point, after hours of being awake. The UK numbers are stark:"
      },
      {
        "type": "ul",
        "items": [
          "**Up to 20% of road accidents.** The [RoSPA driver fatigue factsheet](https://www.rospa.com/rospaweb/docs/advice-services/road-safety/drivers/driver-fatigue-factsheet.pdf) says fatigue may contribute to up to 20% of road accidents, and up to a quarter of fatal and serious ones.",
          "**The early hours are the peak.** RoSPA names 2am-6am as a high-risk period, along with 2pm-4pm. [THINK!](https://think.gov.uk/law/fatigue), the government road safety campaign, also says peak times are the early hours and after lunch.",
          "**Shift workers are at higher risk.** RoSPA quotes a US National Sleep Foundation study that found shift workers were twice as likely to fall asleep at the wheel as non-shift workers.",
          "**These crashes are worse.** THINK! says sleep-related crashes are more likely than others to result in a death or serious injury. A sleeping driver doesn't brake or swerve.",
          "**The regulator agrees.** [HSE's page on fatigue](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm) says fatigue has been implicated in 20% of accidents on major roads, and more than 3.5 million people in the UK work shifts."
        ]
      },
      {
        "type": "p",
        "text": "Healthcare staff see it too. [NHS Employers](https://www.nhsemployers.org/articles/sleep-fatigue-and-workplace) reports a survey of anaesthetists in which more than half said they had experienced a near miss driving home after a night shift. These are people who understand fatigue better than most, and it still catches them."
      },
      {
        "type": "p",
        "text": "**I've driven home when I've been so tired that I've actually fallen asleep at the wheel, at the traffic lights. The car behind me beeped and woke me up, but this has also happened to work mates, so it's more common than you might think.**"
      },
      {
        "type": "h2",
        "text": "What are the warning signs of a microsleep at the wheel?"
      },
      {
        "type": "p",
        "text": "THINK! makes an important point: drivers don't fall asleep without warning. Your body tells you first. Watch for:"
      },
      {
        "type": "ol",
        "items": [
          "Yawning again and again.",
          "Heavy eyelids, or blinking more than usual.",
          "Not remembering the last mile or two.",
          "Drifting towards the white lines or the kerb.",
          "Missing a turn or a road sign.",
          "Your head nodding, or jerking back up.",
          "Fidgeting, rubbing your eyes or winding the window down to stay awake."
        ]
      },
      {
        "type": "p",
        "text": "If you notice any one of these, treat it as the last warning. The next thing could be a microsleep."
      },
      {
        "type": "h2",
        "text": "What actually works on the drive home?"
      },
      {
        "type": "p",
        "text": "Here is what helps and what doesn't, based on UK road-safety guidance:"
      },
      {
        "type": "table",
        "head": [
          "Tactic",
          "Does it work?",
          "What the guidance says"
        ],
        "rows": [
          [
            "Short nap before you drive",
            "Yes",
            "NHS Employers: 15-20 minutes. RoSPA: up to 15 minutes."
          ],
          [
            "Caffeine, then a nap",
            "Yes, short term",
            "RoSPA: at least 150mg of caffeine plus a short nap. NHS Employers: caffeine takes 15-20 minutes to kick in, so you wake with both benefits."
          ],
          [
            "Taxi, lift or public transport",
            "Yes",
            "The safest option if you're struggling."
          ],
          [
            "Window down, radio up",
            "No, not for long",
            "THINK!: drivers who fell asleep had tried this. It doesn't work for long."
          ],
          [
            "Pushing on because you're nearly home",
            "No",
            "Rule 91: if you feel sleepy, stop somewhere safe."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Put together, a safer plan for the end of a night shift looks like this:"
      },
      {
        "type": "ol",
        "items": [
          "**Know your route and your rest stops.** Pick one or two safe places to pull in, such as a lay-by or services, not the hard shoulder.",
          "**Rest before you set off if you need to.** A 15-20 minute nap in a quiet staff room or the car park is far safer than a microsleep on the dual carriageway.",
          "**Try the coffee nap.** Drink a coffee, then nap straight away for 15-20 minutes. The caffeine starts working as you wake up.",
          "**Get a lift on the worst mornings.** After the last of a long block, or a shift that went wrong, take a taxi or public transport. **For me, car sharing was a godsend, but I know this isn't always possible, especially if you live further away from your place of work.**",
          "**Stop at the first warning sign.** Don't bargain with yourself about the last few miles.",
          "**Remember caffeine only buys time.** It doesn't replace sleep, so plan to be in bed soon after you get home."
        ]
      },
      {
        "type": "p",
        "text": "The [night shift survival guide](/resources/night-shift-survival-guide/) covers the whole night, and [how to stay awake on a night shift](/resources/how-to-stay-awake-on-night-shift/) covers planned naps on shift. Our guide to [how long caffeine lasts](/resources/how-long-does-caffeine-last/) explains why the 3am energy drink can still keep you awake at 10am. To plan your commute and bedtime around a shift, use the [Night Shift Recovery Calculator](/tools/night-shift-recovery-calculator/)."
      },
      {
        "type": "h2",
        "text": "Why don't the window down and radio up work?"
      },
      {
        "type": "p",
        "text": "They make you feel more alert for a few minutes, but they don't touch the sleep pressure that's building up. THINK! says drivers who fell asleep had tried opening a window or turning up the radio, and it doesn't work for long. Every night worker has done it. The danger is that it gives you just enough confidence to keep going."
      },
      {
        "type": "h2",
        "text": "What does Highway Code Rule 91 say?"
      },
      {
        "type": "p",
        "text": "[Rule 91 of The Highway Code](https://www.gov.uk/rules-drivers-motorcyclists-89-to-102) starts: driving when you are tired greatly increases your risk of collision. It advises you to:"
      },
      {
        "type": "ul",
        "items": [
          "avoid starting a journey if you are tired, and get plenty of sleep first",
          "avoid long journeys between midnight and the early morning, when alertness is at its worst",
          "take a break of at least 15 minutes after every two hours of driving",
          "if you feel sleepy, stop somewhere safe, but never on the hard shoulder of a motorway"
        ]
      },
      {
        "type": "p",
        "text": "For most night workers the drive home sits right in that midnight-to-morning window, which is why it deserves a plan, not just a strong coffee."
      },
      {
        "type": "h2",
        "text": "Clocks go back on Sunday 25 October: plan for an extra hour"
      },
      {
        "type": "p",
        "text": "UK clocks go back one hour at 2am on Sunday 25 October 2026. If you're on nights that weekend, your shift may run an hour longer by the clock, so you'll be awake for longer before the drive home. Plan your nap or lift before you start that shift, not at the end of it. **Watching the clock go from 2am to 1am is the worst feeling, especially if you are already tired from your night shifts.**"
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "The drive home after nights is one of the riskiest parts of a shift, and the warning signs come before the microsleep. Plan for it: know where you can stop, nap before you set off if you need to, and take a lift on the worst mornings. Then protect the sleep that comes next. Once you're home, a dark room and a steady sound like [brown noise](/resources/brown-noise-for-sleep/) help you drop off as the street wakes up. Our full guide to [how to sleep during the day](/resources/how-to-sleep-during-the-day/) covers the rest, and [Why Am I Always Tired? A Shift Worker's Checklist](/resources/why-am-i-always-tired/) covers the wider causes of shift fatigue. If tiredness lasts for weeks despite good sleep, see your GP."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/): 13 sounds, a custom timer and a wake-up chime, all free in your browser. The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[RoSPA: Driver fatigue factsheet (PDF)](https://www.rospa.com/rospaweb/docs/advice-services/road-safety/drivers/driver-fatigue-factsheet.pdf)",
          "[THINK! (Department for Transport): Fatigue](https://think.gov.uk/law/fatigue)",
          "[GOV.UK: The Highway Code, rules for drivers and motorcyclists (89 to 102)](https://www.gov.uk/rules-drivers-motorcyclists-89-to-102)",
          "[HSE: Human factors, fatigue](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm)",
          "[NHS Employers: Sleep, fatigue and the workplace](https://www.nhsemployers.org/articles/sleep-fatigue-and-workplace)",
          "[Sleep Foundation: Microsleep](https://www.sleepfoundation.org/how-sleep-works/microsleep)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "What does a microsleep feel like?",
        "answer": "Often it feels like nothing at all. You might notice your head jerk up, realise you've drifted in your lane, or find you can't remember the last stretch of road. Because people often don't realise they nodded off, the warning signs before it matter more."
      },
      {
        "question": "How long does a microsleep last?",
        "answer": "Researchers generally define a microsleep as sleep lasting 15 seconds or less, according to the Sleep Foundation. Even a few seconds is enough to cover a long stretch of road at speed with nobody in control."
      },
      {
        "question": "Is it safe to drive after a 12-hour night shift?",
        "answer": "It carries real risk, because you'll be driving at your body clock's low point after many hours awake. Follow Rule 91: don't set off tired, and stop somewhere safe if you feel sleepy. A 15-20 minute nap before you leave, or a lift home, is the safer choice."
      },
      {
        "question": "Does coffee stop microsleeps?",
        "answer": "Only for a while. RoSPA suggests at least 150mg of caffeine with a short nap, but caffeine works best paired with rest. It isn't a substitute for sleep, and it can make it harder to sleep once you're home."
      },
      {
        "question": "Does opening the window or turning up the radio help?",
        "answer": "Not for long. THINK! says drivers who fell asleep had tried both. If you're reaching for the window switch to stay awake, that's your cue to pull over."
      },
      {
        "question": "What should I do if I nearly fall asleep while driving?",
        "answer": "Pull in somewhere safe as soon as you can, such as a lay-by or services, never the hard shoulder. Have a caffeinated drink if you like, then nap for 15-20 minutes before you carry on."
      }
    ]
  },
  {
    "slug": "military-sleep-method",
    "title": "The Military Sleep Method: Does It Work After a Night Shift?",
    "description": "The military sleep method explained by an ex-King's Regiment soldier: where it comes from, whether the 96% claim holds up, and how to use it after nights.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-17",
    "readMinutes": 6,
    "quickAnswer": "The military sleep method is a two-minute routine: relax your face, drop your shoulders and arms, breathe out slowly, let your legs go heavy, then clear your mind for 10 seconds. It comes from Bud Winter's book Relax and Win. The famous \"96% asleep in two minutes\" figure is the book's claim, not a scientific trial.",
    "blocks": [
      {
        "type": "p",
        "text": "I served in The King's Regiment from 1986 to 1989, and I have worked nights for most of the 40 years since, in biscuit factories, prison wings and a brewery. So when a \"military\" trick for falling asleep went viral, I wanted to know two things. Where did it really come from? And does it help when you get into bed at 9am with the sun up and the street getting busy?"
      },
      {
        "type": "h2",
        "text": "What is the military sleep method, step by step?"
      },
      {
        "type": "p",
        "text": "The method is a quick, top-to-bottom relaxation routine followed by a short mental \"switch-off\". You can do it lying in bed or sitting in a chair. Here is the version most people use, based on how [Mental Floss](https://www.mentalfloss.com/live-smarter/healthy-living/military-sleep-method) and [The Art of Manliness](https://www.artofmanliness.com/articles/fall-asleep-fast/) set out Winter's routine."
      },
      {
        "type": "ol",
        "items": [
          "**Get settled.** Lie down, close your eyes and take a few slow, deep breaths. Let your arms fall loose by your sides.",
          "**Relax your face.** Start with your forehead, then your eyes, cheeks, jaw and lips.",
          "**Drop your shoulders and arms.** Let your shoulders sink and the tension go. Then loosen one arm from the upper arm down to the hand, then the other.",
          "**Breathe out.** Take a slow breath and let it all the way out, letting your chest go soft. Repeat a couple of times.",
          "**Relax your legs.** Let one thigh go heavy, then the calf, ankle and foot. Do the same on the other side.",
          "**Clear your mind for 10 seconds.** Hold one calm picture in your head. Winter's options were lying in a canoe on a still lake under a blue sky, or lying in a black velvet hammock in total darkness. If pictures don't work for you, silently repeat \"don't think, don't think\" for about 10 seconds."
        ]
      },
      {
        "type": "p",
        "text": "If a muscle won't let go, tense it for a second, then release it. Don't force the relaxation. Trying too hard to relax is a good way to stay awake."
      },
      {
        "type": "h2",
        "text": "Where does the military sleep method come from, and is the 96% claim true?"
      },
      {
        "type": "p",
        "text": "The routine was taught to trainee pilots during the Second World War. Bud Winter, a college football and track coach serving as a Navy ensign, was asked to build a relaxation course for aviators at the Del Monte Naval Pre-Flight School in California, according to [The Art of Manliness](https://www.artofmanliness.com/articles/fall-asleep-fast/). He later put it into his book Relax and Win: Championship Performance."
      },
      {
        "type": "p",
        "text": "The headline claim comes from that book. After six weeks of practice, 96% of the pilots were said to fall asleep in two minutes or less, even after drinking coffee and with the simulated noise of gunfire playing in the background."
      },
      {
        "type": "p",
        "text": "That is a striking figure, but it is worth being honest about what it is:"
      },
      {
        "type": "table",
        "head": [
          "What people say",
          "What we actually know"
        ],
        "rows": [
          [
            "\"It's a proven military technique\"",
            "It was taught on a US Navy pilot training course in the Second World War. It isn't a British Army method."
          ],
          [
            "\"96% fall asleep in 2 minutes\"",
            "That figure comes from Winter's own account, not a published, peer-reviewed study."
          ],
          [
            "\"It works on the first night\"",
            "The figure came after six weeks of practice. It is a skill you build, not a switch."
          ],
          [
            "\"It works anywhere\"",
            "Results depend on your sleep debt, your caffeine and your room, especially when you sleep in the day."
          ]
        ]
      },
      {
        "type": "p",
        "text": "Neither of the articles above cites a modern trial of this exact routine, and I couldn't find one either. That doesn't mean it is useless. Relaxing your muscles and slowing your breathing are sensible ways to wind down. It just means you should treat the 96% as a story from the book, not a promise."
      },
      {
        "type": "h2",
        "text": "Does it work after a night shift? A veteran's view"
      },
      {
        "type": "p",
        "text": "In the Army, you learn to sleep whenever you get the chance. You finish your stag in the middle of the night, can't get back to sleep, and the next day still has to be worked. Nobody cares how you slept. Unfortunately for me, in 1986, the military sleep method was not a thing, so getting sleep when you can was always our priority method."
      },
      {
        "type": "p",
        "text": "Night shifts are a different kind of hard. After a long night on a prison wing or a production line, your body is tired but your head often isn't. You've been alert all night, maybe topped up with tea, coffee or an energy drink at 3am. Then you get home just as the world is waking up."
      },
      {
        "type": "p",
        "text": "This is where I think the method has real value for shift workers. It gives your brain a job to do that isn't replaying the shift or worrying about the alarm. Working down your body piece by piece is slow, boring and calming, which is exactly what you want. I have tried this method after a night shift, but for me personally, we live on a noisy road, so I could not get to relax naturally for it to work. That's why noise masking is my go-to method and why I built the Sleyp app."
      },
      {
        "type": "p",
        "text": "Where it struggles is the stuff it was never designed for. The routine says nothing about daylight. You are sleeping with the sun up, with traffic, deliveries and neighbours on their own schedule. Getting into bed when everyone else is leaving the house for school and work is great, until next door decides to renovate and starts drilling. No breathing routine will cancel that."
      },
      {
        "type": "h2",
        "text": "How do you make the military sleep method work in daylight?"
      },
      {
        "type": "p",
        "text": "Think of the method as your final step, not your only step. Set the room up first, then use the routine to switch off. This order works best for day sleepers:"
      },
      {
        "type": "ol",
        "items": [
          "**Cut caffeine early in the shift.** If you're wired from a 3am energy drink, the 10-second mind clear will be much harder. Have your last one early in the shift, well before your planned bedtime. The guide to [how long caffeine lasts](/resources/how-long-does-caffeine-last/) has the numbers, and [how to stay awake on a night shift](/resources/how-to-stay-awake-on-night-shift/) covers what to do instead at the 3am wall.",
          "**Make the room dark.** Blackout blinds, curtains with no light gaps or a contoured sleep mask. Winter's hammock image works far better when the room is actually dark.",
          "**Block the sudden noises.** Earplugs take the edge off voices, doors and car horns. See [sleeping with earplugs](/resources/earplugs-for-sleeping/).",
          "**Mask what's left with a steady sound.** A low, constant sound like [brown noise](/resources/brown-noise-for-sleep/), [rain](/resources/rain-sounds-for-sleeping/) or a [fan hum](/resources/fan-noise-for-sleeping/) fills the gaps so a drill or a lawnmower doesn't jolt you awake.",
          "**Then run the routine.** Face, shoulders, arms, breath, legs, then 10 seconds of canoe, hammock or \"don't think\".",
          "**Practise it every day of your block.** The book's figure came after six weeks. Use it on your days off as well as after nights, so it becomes a habit rather than something you only try when you're desperate."
        ]
      },
      {
        "type": "p",
        "text": "If you're still awake after a while, don't lie there fighting it. Run through the body scan again slowly, or change the picture. Staying calm about not sleeping is half the battle."
      },
      {
        "type": "p",
        "text": "For the full room setup, see my guides to [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/) and the [night shift survival guide](/resources/night-shift-survival-guide/)."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "The military sleep method is a simple, free way to switch off after a shift, and it's worth practising. Just be honest about what it is: a wartime relaxation routine with an impressive claim from a book, not a proven cure. After a night shift it works best as the last step, once the room is dark and the noise is under control."
      },
      {
        "type": "p",
        "text": "That's where Sleyp comes in. Put on a steady brown noise or rain mix, set the free timer, then run through the routine. [Try Sleyp free](/session/) in your browser: all 13 sounds, the custom timer and saved mixes are free, and the page just needs to stay open while it plays. The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Mental Floss: The military sleep method](https://www.mentalfloss.com/live-smarter/healthy-living/military-sleep-method): the steps, the six-week 96% claim (with coffee and gunfire) and its origin with the Navy Pre-Flight School",
          "[The Art of Manliness: How to fall asleep fast](https://www.artofmanliness.com/articles/fall-asleep-fast/): Bud Winter's background, the Del Monte Naval Pre-Flight School, and the canoe, hammock and \"don't think\" images"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does the military sleep method really work?",
        "answer": "It can help you relax and fall asleep faster, but the famous \"96% in two minutes\" figure comes from Bud Winter's book, not from a scientific trial. It is a sensible wind-down routine. Expect it to take practice, and expect it to work better in a dark, quiet room."
      },
      {
        "question": "How long does it take to learn the military sleep method?",
        "answer": "The book's claim was based on six weeks of practice. Most people need to repeat it every time they go to bed, day or night, for a few weeks before it feels automatic. Don't judge it on the first try."
      },
      {
        "question": "Can you use the military sleep method to fall asleep during the day?",
        "answer": "Yes. The routine doesn't care what time it is, but daylight and daytime noise make it harder. Darken the room, use earplugs and play a steady masking sound, then do the routine as the last step before sleep."
      },
      {
        "question": "What is the 10-second part of the military sleep method?",
        "answer": "After relaxing your body, you clear your mind for about 10 seconds. You either hold a calm picture, such as lying in a canoe on a still lake or in a black velvet hammock in total darkness, or silently repeat \"don't think\"."
      },
      {
        "question": "Is the military sleep method used by the British Army?",
        "answer": "It was developed for US Navy trainee pilots during the Second World War. As far as I know, it isn't part of standard British Army training. Most soldiers simply learn to grab sleep whenever and wherever they can."
      },
      {
        "question": "Is the military sleep method the same as the 4-7-8 breathing technique?",
        "answer": "No. The 4-7-8 technique is a breathing count. The military method is a top-to-bottom muscle relaxation routine with slow breaths out, followed by a short mental picture. Some people combine them."
      }
    ]
  },
  {
    "slug": "how-long-does-caffeine-last",
    "title": "How Long Does Caffeine Last? A Caffeine Cut-Off Guide for Night Shifts",
    "description": "How long does caffeine last? Its half-life is about 4-6 hours but can reach 12. When to stop caffeine on a night shift so you can sleep when you get home.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-17",
    "readMinutes": 8,
    "quickAnswer": "Caffeine's half-life is about 4 to 6 hours for most adults, but it can range from 2 to 12 hours. In one sleep study, caffeine taken 6 hours before bed still cut sleep by more than an hour. On nights, have your last caffeine at least 6 hours before your daytime bedtime: around 3am for a 9am bed.",
    "blocks": [
      {
        "type": "p",
        "text": "It's 3 o'clock in the morning on your night shift and you hit that wall. No amount of caffeine or Red Bull will help you, but you drink it anyway. Then you pay for it later, lying in bed at 10am, wired, while the rest of the street gets on with its day."
      },
      {
        "type": "p",
        "text": "I've done that more times than I can count. Forty years of shifts, from stag in The King's Regiment to nights at Strangeways, Walton and Guys Marsh, the Jacobs Biscuits lines and Budweiser UK."
      },
      {
        "type": "p",
        "text": "My go-to drink has always been coffee, even the Army coffee that tasted like crap. Since Costa and Starbucks made coffee quality better, my go-to has always been a Starbucks before work. During the night shift at Budweiser, some caffeine and the odd Pepsi Max was always a help to get me through the night shift wall around 3am."
      },
      {
        "type": "h2",
        "text": "How long does caffeine last in your body?"
      },
      {
        "type": "p",
        "text": "Caffeine kicks in fast and leaves slowly. The [Sleep Foundation's guide to how long caffeine takes to wear off](https://sleepfoundation.org/nutrition/how-long-does-it-take-caffeine-to-wear-off) says you start to feel it within 15 to 60 minutes. Half of it is usually cleared in 4 to 6 hours, but for any one person that half-life can be anywhere from 2 to 12 hours."
      },
      {
        "type": "p",
        "text": "\"Half-life\" is the key idea. It is the time your body takes to clear half the caffeine you drank. The other half is still working on you. So if you have a strong coffee at 4am and your half-life is 5 hours, about half of it is still in your system at 9am, just as you are drawing the blinds."
      },
      {
        "type": "p",
        "text": "The same page lists things that change how fast you clear it, including pregnancy, the contraceptive pill, alcohol and smoking. That wide 2-to-12-hour range is why two people on the same shift can drink the same brew and sleep completely differently afterwards."
      },
      {
        "type": "h2",
        "text": "What happens if you have caffeine 6 hours before bed?"
      },
      {
        "type": "p",
        "text": "You lose sleep, and you probably won't notice. In a 2013 study reported by the [American Academy of Sleep Medicine](https://aasm.org/late-afternoon-and-early-evening-caffeine-can-disrupt-sleep-at-night/), 12 healthy sleepers took 400 mg of caffeine either 6 hours, 3 hours or right before bed. Even at 6 hours, their measured sleep time dropped by more than an hour."
      },
      {
        "type": "p",
        "text": "The part that stuck with me is this: the people in the study were unaware of it. They thought they had slept fine. That's the night worker's trap. You think the 4am energy drink has worn off because you feel tired at 9am, but it is still chipping away at the sleep you need for the next shift."
      },
      {
        "type": "p",
        "text": "Two things are worth knowing about that study. The dose was big: 400 mg is roughly a full day's worth for most adults. And it was night-time sleep in normal sleepers, not daytime sleep after a shift. Daytime sleep is already lighter and easier to break, so if anything I would treat 6 hours as the minimum, not a safe zone."
      },
      {
        "type": "h2",
        "text": "What time should I stop caffeine on a night shift?"
      },
      {
        "type": "p",
        "text": "Work backwards from the time you will actually be in bed, not the time you clock off. Take your bedtime, subtract 6 hours, and that is your last brew. If you are sensitive to caffeine, or you know you sleep badly after a late coffee, go further: the Sleep Foundation notes that experts typically recommend stopping at least 8 hours before bed."
      },
      {
        "type": "table",
        "head": [
          "Bed after your shift",
          "Last caffeine (6-hour rule)",
          "Last caffeine (8-hour rule, if you're sensitive)"
        ],
        "rows": [
          [
            "7am",
            "1am",
            "11pm"
          ],
          [
            "8am",
            "2am",
            "Midnight"
          ],
          [
            "9am",
            "3am",
            "1am"
          ],
          [
            "10am",
            "4am",
            "2am"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Here's how that plays out for a typical 10pm to 6am night with a 40-minute drive home:"
      },
      {
        "type": "ol",
        "items": [
          "Have your main caffeine at the start of the shift, between 10pm and midnight, when it does the most good.",
          "Allow one smaller top-up before your cut-off if you need it (2am for an 8am bed).",
          "After the cut-off, switch to water, squash or decaf. Keep the lights bright and get up and move when the 3am to 5am dip hits instead of reaching for another can.",
          "If you are struggling to stay awake for the drive home, don't solve it with caffeine at 5am. Stop somewhere safe and nap, or get a lift. A short planned nap during the shift is covered in [how to stay awake on a night shift](/resources/how-to-stay-awake-on-night-shift/)."
        ]
      },
      {
        "type": "p",
        "text": "The free [Night Shift Recovery Calculator](/tools/night-shift-recovery-calculator/) does this sum for you. Put in your finish time and commute and it gives you a caffeine cut-off, a light plan and a wind-down time."
      },
      {
        "type": "p",
        "text": "**Clocks going back this month:** UK clocks go back one hour at 2am on Sunday 25 October 2026. If you are on nights that weekend, your shift runs an hour longer by the clock. Keep your cut-off tied to your planned bedtime, not the hour you've been at work, or that extra hour will tempt you into a 4am coffee you'll regret at 10am."
      },
      {
        "type": "h2",
        "text": "How much caffeine is too much?"
      },
      {
        "type": "p",
        "text": "The European Food Safety Authority's [scientific opinion on caffeine (summary slides)](https://www.efsa.europa.eu/sites/default/files/event/documentset/150305-p02.pdf) gives three numbers worth knowing for healthy adults (pregnancy has separate advice):"
      },
      {
        "type": "ul",
        "items": [
          "Up to **400 mg a day** from all sources does not raise safety concerns.",
          "Single doses up to **200 mg** do not raise safety concerns.",
          "Just **100 mg close to bedtime** may make it take longer to fall asleep and shorten sleep in some adults."
        ]
      },
      {
        "type": "p",
        "text": "That last point is the one for night workers. 100 mg is not a lot. According to the UK government's [consultation on high-caffeine energy drinks](https://www.gov.uk/government/consultations/banning-the-sale-of-high-caffeine-energy-drinks-to-children/banning-the-sale-of-high-caffeine-energy-drinks-to-children), a 250 ml energy drink typically has about 80 mg of caffeine, and a 500 ml can averages 160 mg, with some reaching 200 mg. Any drink with more than 150 mg per litre has to carry a high-caffeine warning on the label, so check the can."
      },
      {
        "type": "table",
        "head": [
          "Drink",
          "Typical caffeine",
          "Source"
        ],
        "rows": [
          [
            "Energy drink, 250 ml",
            "About 80 mg",
            "GOV.UK"
          ],
          [
            "Energy drink, 500 ml",
            "About 160 mg (up to 200 mg)",
            "GOV.UK"
          ],
          [
            "EFSA single-dose limit",
            "200 mg",
            "EFSA"
          ],
          [
            "EFSA daily limit",
            "400 mg",
            "EFSA"
          ]
        ]
      },
      {
        "type": "p",
        "text": "One big can at 4am is close to the single-dose limit on its own, and well over the 100 mg that can affect sleep, right before you try to go to bed."
      },
      {
        "type": "h2",
        "text": "Do energy drinks help with the 3am wall?"
      },
      {
        "type": "p",
        "text": "A bit, briefly, and at a price. The 3am wall is your body clock telling you it should be asleep. Caffeine can blunt that feeling, but it doesn't remove the need for sleep, and a can drunk at 3am is still half in your system at 8am or 9am."
      },
      {
        "type": "p",
        "text": "It's a pattern I know well: the can at 3am, the second wind, then lying awake at 10am with a racing head, sleeping badly, and starting the next night already behind. What works better for me personally is front-loading caffeine at the start of the shift, then using light, movement, cold water and some overnight oats with fresh strawberries and blackberries around 3am. If you do want something at the wall, the overnight oats or a light meal with protein before your cut-off beats a big breakfast after the shift."
      },
      {
        "type": "p",
        "text": "Food plays a big part too: a heavy meal at 3am makes the slump worse; light snacks help. There's more on that in [what to eat on a night shift](/resources/what-to-eat-on-night-shift/)."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Caffeine lasts much longer than the buzz. With a half-life of 4 to 6 hours, and up to 12 for some people, the can you drink at 3am is still in the room with you at 9am. Set your cut-off 6 hours before bed (8 if you're sensitive), front-load caffeine at the start of the shift, and use light, movement and a planned nap for the 3am wall."
      },
      {
        "type": "p",
        "text": "Then give your body the best chance once you're home: dark room, cool room, steady sound. A deep, steady sound such as [brown noise](/resources/brown-noise-for-sleep/) or [rain](/resources/rain-sounds-for-sleeping/) helps cover the school run, the bin lorry and the neighbour's drill. For the full routine, see [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/) and the [night shift survival guide](/resources/night-shift-survival-guide/)."
      },
      {
        "type": "p",
        "text": "[Try Sleyp free](/session/) in your browser: 13 sounds, a custom timer and a wake-up chime, all free. Keep the page open while you sleep so the timer and chime can run. The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[American Academy of Sleep Medicine: Late afternoon and early evening caffeine can disrupt sleep at night (Drake et al., 2013)](https://aasm.org/late-afternoon-and-early-evening-caffeine-can-disrupt-sleep-at-night/)",
          "[Sleep Foundation: How long does it take for caffeine to wear off?](https://sleepfoundation.org/nutrition/how-long-does-it-take-caffeine-to-wear-off)",
          "[EFSA: Scientific opinion on the safety of caffeine (summary slides, 2015)](https://www.efsa.europa.eu/sites/default/files/event/documentset/150305-p02.pdf)",
          "[GOV.UK: Banning the sale of high-caffeine energy drinks to children (consultation)](https://www.gov.uk/government/consultations/banning-the-sale-of-high-caffeine-energy-drinks-to-children/banning-the-sale-of-high-caffeine-energy-drinks-to-children)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "How long does caffeine stay in your system?",
        "answer": "Half of it is usually cleared in 4 to 6 hours, but the half-life can range from 2 to 12 hours depending on the person. That means a good share of a 3am coffee can still be in your system when you go to bed at 9am."
      },
      {
        "question": "What time should I stop caffeine on a night shift?",
        "answer": "At least 6 hours before your planned bedtime, and 8 hours if you're sensitive to it. For a 9am bed, that means your last caffeine by 3am, or 1am to be safer."
      },
      {
        "question": "How much caffeine is in an energy drink?",
        "answer": "According to GOV.UK, a 250 ml energy drink typically has about 80 mg and a 500 ml can averages 160 mg, with some up to 200 mg. Drinks over 150 mg per litre must carry a high-caffeine warning."
      },
      {
        "question": "Can I sleep straight after caffeine if I'm exhausted?",
        "answer": "You may fall asleep, but the sleep is likely to be shorter and lighter. In the 2013 study, people lost more than an hour of sleep from caffeine taken 6 hours earlier and didn't realise it."
      },
      {
        "question": "Is decaf OK after my cut-off?",
        "answer": "Decaf has far less caffeine than regular coffee, so it's a reasonable swap for the warm-drink habit in the second half of a shift. Water and squash are the safest choices before a daytime sleep."
      },
      {
        "question": "Do the clocks going back affect my caffeine cut-off?",
        "answer": "Only if you let them. When the clocks go back on Sunday 25 October 2026, a night shift that weekend runs an hour longer by the clock. Keep your cut-off fixed to your planned bedtime, not to how long you've been on shift."
      }
    ]
  },
  {
    "slug": "what-to-eat-on-night-shift",
    "title": "What to Eat on a Night Shift: Meals, Snacks and Timing",
    "description": "What should you eat on a night shift? Meal timing, the best snacks for the 3am dip, what to avoid, and a meal-prep plan for a block of nights.",
    "category": "Nutrition & Energy on the Night Shift",
    "categorySlug": "night-shift-nutrition",
    "datePublished": "2026-10-16",
    "readMinutes": 9,
    "quickAnswer": "On a night shift, eat your main meal before you start, have light snacks rather than a heavy meal between midnight and 6am, and keep water nearby. A 2022 study of simulated night work found people who ate at night had 26% more depression-like mood, while those who ate only in the daytime showed no change.",
    "blocks": [
      {
        "type": "p",
        "text": "I worked nights for the best part of 40 years: on stag with The King's Regiment, on the line at Jacobs Biscuits, on the landings at Strangeways, Walton and Guys Marsh, and in the brewery at Budweiser UK. Food is one of the easiest things to get wrong on nights. This guide is what I learned, checked against what the research and the HSE actually say. It sits under our [night shift survival guide](/resources/night-shift-survival-guide/)."
      },
      {
        "type": "h2",
        "text": "What does a night shift eating plan look like?"
      },
      {
        "type": "p",
        "text": "The simplest plan is to keep your normal meal pattern anchored to the daytime as far as you can, then graze lightly through the night. Here is how that looks on a typical 7pm to 7am shift. Move the times to fit your own rota."
      },
      {
        "type": "table",
        "head": [
          "Time",
          "What to eat",
          "Why"
        ],
        "rows": [
          [
            "4pm to 5pm",
            "Your main meal: a proper plate with protein, vegetables and a slow carb such as rice, pasta or potatoes",
            "Fuels the first half of the shift while it is still daytime for your body"
          ],
          [
            "9pm to 10pm",
            "A light snack: fruit, yoghurt or a small sandwich",
            "Tops you up before the long stretch"
          ],
          [
            "Midnight to 1am",
            "Your break meal, kept small: soup, a wrap, or a pot of rice or pasta",
            "A small meal is less likely to make you drowsy than one heavy plate"
          ],
          [
            "3am to 4am",
            "A small protein snack and water: nuts, a boiled egg, hummus and veg sticks",
            "Gets you through the low point without a sugar crash"
          ],
          [
            "5am onwards",
            "Nothing heavy; water or a non-caffeinated drink",
            "Lets your stomach settle before bed"
          ],
          [
            "Home, before bed",
            "A light breakfast: toast, cereal or porridge",
            "Stops hunger waking you up, without a heavy meal sitting on your stomach"
          ]
        ]
      },
      {
        "type": "p",
        "text": "This matches the HSE's own advice for shift workers: light, regular meals or snacks are less likely to cause drowsiness than one heavy meal, and easily digested foods such as pasta, rice and fruit are a good choice."
      },
      {
        "type": "h2",
        "text": "Why does the timing of food matter on nights?"
      },
      {
        "type": "p",
        "text": "Timing matters because eating at night appears to affect how you feel, not just how full you are. In a [2022 study published in PNAS](https://www.sciencedaily.com/releases/2022/09/220912152846.htm), researchers at Brigham and Women's Hospital put 19 people through a lab protocol that shifted their routine by 12 hours over four days to simulate night work."
      },
      {
        "type": "p",
        "text": "One group ate during both the day and the night, as most night workers do. The other group ate only in the daytime. By the simulated night shift, the day-and-night eaters showed a 26% rise in depression-like mood and a 16% rise in anxiety-like mood compared with the start. The daytime-only group showed no change."
      },
      {
        "type": "p",
        "text": "It is a small lab study, not a rule for every rota. But it backs up what a lot of us learned the hard way: the 2am fry-up or the vending machine run doesn't just sit heavy, it leaves you feeling low and flat by the end of the shift. The practical takeaway is to front-load your eating into the evening and keep the small hours light."
      },
      {
        "type": "h2",
        "text": "What are the best snacks for the 3am dip?"
      },
      {
        "type": "p",
        "text": "The best snacks for the 3am dip release energy slowly and don't leave you sluggish. It's 3 o'clock in the morning on your night shift and you hit that wall. No amount of caffeine or Red Bull will help, but you drink it anyway, then pay for it later when you try to sleep and you're wired. A better snack won't beat the wall on its own, but it stops you making it worse."
      },
      {
        "type": "p",
        "text": "Good options to pack:"
      },
      {
        "type": "ul",
        "items": [
          "**Fruit:** apples, bananas, grapes. The HSE notes fruit and vegetables make good snacks because their sugar is turned into energy relatively slowly.",
          "**Veg sticks and hummus:** carrot, cucumber, peppers. Crunchy, light and filling.",
          "**Nuts with a bit of fruit:** a small handful, not the whole bag.",
          "**Boiled eggs or cheese:** protein helps you stay full for longer.",
          "**Porridge pots or overnight oats:** easy to eat at a desk or in a break room.",
          "**Soup in a flask:** warm, filling and hydrating on a cold shift."
        ]
      },
      {
        "type": "p",
        "text": "During my night shifts at Budweiser, my routine always included a full meal before going to work. This set me up for most of the night, but around 3 to 4am, when the fatigue started to kick in, I would have some overnight oats with berries, strawberries and some honey. That always helped me get through the last part of the night shift. During my Army night shifts, I was always told to eat something if you get tired, and it really does work in waking you up."
      },
      {
        "type": "p",
        "text": "For more on getting through the low point, including planned naps and light, see the [night shift survival guide](/resources/night-shift-survival-guide/) and [how to stay awake on a night shift](/resources/how-to-stay-awake-on-night-shift/)."
      },
      {
        "type": "h2",
        "text": "What should you avoid eating on a night shift?"
      },
      {
        "type": "p",
        "text": "Avoid heavy, fatty and very sugary food in the small hours, and go easy on caffeine late in the shift. The HSE warns that sugary foods such as chocolate give a short burst of energy followed by a dip, and advises against fatty, spicy or heavy meals before you sleep."
      },
      {
        "type": "p",
        "text": "The usual night shift traps:"
      },
      {
        "type": "ol",
        "items": [
          "**The vending machine.** Crisps, chocolate and fizzy drinks at 3am feel like a reward, then leave you flatter than before. Budweiser had a canteen with vending machines, which were always a last resort for me, but sometimes a Twirl or a Snickers was a way to get you through the night. I'm not a fan of fizzy drinks, but Pepsi Max was my go-to drink on odd occasions.",
          "**The free biscuits.** I worked in the chocolate room at Jacobs Biscuits around 1985 and you were allowed to eat as many Club biscuits as you liked, as long as you never took them outside the room. The chocolate was cold as it came out of a chiller onto the conveyor, so for me the temptation on shift was too much to resist.",
          "**A big takeaway on your break.** One heavy meal at midnight is the quickest way to feel drowsy by 2am.",
          "**Energy drinks after about 2am.** Caffeine late in the shift can still be working when you get into bed. A dietitian at [BHR Hospitals NHS Trust](https://www.bhrhospitals.nhs.uk/news/a-dietitians-healthy-eating-top-tips-for-shift-workers-2627/) suggests your last caffeine at least four hours before bedtime. Our guide, [How Long Does Caffeine Last?](/resources/how-long-does-caffeine-last/), covers cut-off times in detail.",
          "**Alcohol to wind down.** Drinking after a night shift is your \"me time\", like an evening is for normal workers. But I'm going to pay for it later, back on shift at 2am. The HSE says alcohol is linked to earlier waking, disrupted sleep and poorer sleep quality. For me, this is so true, so avoid alcohol if you can after a night shift."
        ]
      },
      {
        "type": "h2",
        "text": "How do you meal-prep for a block of nights?"
      },
      {
        "type": "p",
        "text": "Cook once before the block starts and you won't be relying on a garage forecourt at 4am. The BHR dietitian's advice is to make extra portions you can chill or freeze to take to work, and to bring your own food rather than relying on late-night shops, drive-throughs and vending machines."
      },
      {
        "type": "p",
        "text": "A simple plan for four nights:"
      },
      {
        "type": "ol",
        "items": [
          "**Day off before the block:** cook two big batches, such as a chilli or curry with rice and a pasta bake. Portion them into tubs.",
          "**Night 1 and 2:** batch one for your pre-shift main meal; a small tub of the same for your break.",
          "**Night 3 and 4:** batch two from the freezer, defrosted in the fridge the day before.",
          "**Every night:** a snack bag with fruit, nuts, veg sticks and a boiled egg or cheese, plus a large bottle of water.",
          "**Breakfast before bed:** keep bread, oats or cereal in so a light breakfast takes two minutes when you get home."
        ]
      },
      {
        "type": "p",
        "text": "During my Budweiser shifts from 2020 to 2025, I did 2 days followed by 2 nights. I would batch 2 shifts at a time, so I would prep for the 2 days, and then on my day off before my first night shift I would batch for the 2 night shifts."
      },
      {
        "type": "p",
        "text": "Drink steadily through the shift, too. The HSE notes that dehydration can reduce both mental and physical performance, but advises against drinking too much just before you sleep, so ease off in the last hour."
      },
      {
        "type": "h2",
        "text": "Should you eat before you go to bed after a night shift?"
      },
      {
        "type": "p",
        "text": "Yes, a light breakfast before bed usually helps. The BHR dietitian recommends a light breakfast-type meal if you plan to sleep soon after getting home, so hunger doesn't wake you too early. Keep it plain and skip anything greasy or heavily spiced, which can cause indigestion."
      },
      {
        "type": "p",
        "text": "Then get the bedroom right. Getting into bed when everyone else is leaving for school and work is great, until the neighbour starts drilling. A dark, cool room, [earplugs](/resources/earplugs-for-sleeping/) and a steady masking sound such as [brown noise](/resources/brown-noise-for-sleep/) make the difference. Our complete guide to [sleeping during the day](/resources/how-to-sleep-during-the-day/) covers the full setup."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "On nights, eat your main meal before the shift, graze lightly through the small hours, drink water steadily and finish with a light breakfast before bed. Front-load your food, keep 3am small, and plan ahead so the vending machine never gets a look in."
      },
      {
        "type": "p",
        "text": "Eat right, then sleep right. When you get home, press play on a steady sound to cover the school run and the drilling. [Try Sleyp free](/session/): 13 sounds, a custom timer and saved mixes, all free in your browser. The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Qian J, Scheer F, Chellappa S et al. (2022). Daytime eating prevents mood vulnerability in night work. PNAS, via ScienceDaily](https://www.sciencedaily.com/releases/2022/09/220912152846.htm)",
          "[Health and Safety Executive: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[BHR Hospitals NHS Trust: A dietitian's healthy eating top tips for shift workers (2020)](https://www.bhrhospitals.nhs.uk/news/a-dietitians-healthy-eating-top-tips-for-shift-workers-2627/)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Should you eat during a night shift?",
        "answer": "Yes, but keep it light. Small snacks or a light meal during your breaks are better than one big meal, especially between midnight and 6am. Going too long without food can affect your concentration, so plan regular small bites rather than skipping food altogether."
      },
      {
        "question": "What should I eat before a night shift?",
        "answer": "Have a proper main meal in the late afternoon or early evening: protein, vegetables and a slow-release carb such as rice, pasta or potatoes. It fuels the first half of the shift while your body still treats it as daytime."
      },
      {
        "question": "What snacks keep you awake at night?",
        "answer": "No snack keeps you awake on its own, but slow-release snacks avoid the crash that makes the 3am dip worse. Fruit, veg sticks with hummus, nuts, boiled eggs and porridge pots are good choices. Sugary snacks give a quick lift and then a slump."
      },
      {
        "question": "Is it bad to eat at 3am?",
        "answer": "A small snack at 3am is fine. A heavy meal at that time is more likely to make you drowsy and sit badly. A 2022 lab study also linked night-time eating to lower mood during simulated night work, so keep anything at that hour small."
      },
      {
        "question": "What should I eat after a night shift before sleeping?",
        "answer": "A light breakfast such as toast, cereal or porridge, so hunger doesn't wake you early. Avoid greasy, spicy or heavy food, and don't drink a lot of fluid right before bed."
      },
      {
        "question": "Do energy drinks help on a night shift?",
        "answer": "They can give a short lift, but late in the shift they can stop you sleeping when you get home. The HSE advises using caffeine only occasionally and not relying on it to stay awake. Have your last one well before the end of your shift."
      }
    ]
  },
  {
    "slug": "how-to-stay-awake-on-night-shift",
    "title": "How to Stay Awake on a Night Shift (Without Wrecking Your Sleep)",
    "description": "How to stay awake on a night shift: planned naps, caffeine timing, light and food, from a 40-year shift veteran. Beat the 3am wall without the payback.",
    "category": "Nutrition & Energy on the Night Shift",
    "categorySlug": "night-shift-nutrition",
    "datePublished": "2026-10-14",
    "readMinutes": 8,
    "quickAnswer": "To stay awake on a night shift, take a 15-20 minute nap before or during the shift if you can, have your caffeine early rather than late, keep the lights bright, eat light, and keep moving through the early hours. In a NASA study, pilots who took a planned nap were up to 54% more alert.",
    "blocks": [
      {
        "type": "p",
        "text": "It's 3 o'clock in the morning and you hit that wall. No amount of caffeine or Red Bull will help, but you drink it anyway, and then you pay for it later when you try to get some sleep and you're wired. I've lived that more times than I can count over 40 years of shifts: on stag with The King's Regiment, on the wings at Strangeways, Walton and Guys Marsh, and on the lines at Jacobs and Budweiser."
      },
      {
        "type": "p",
        "text": "This guide is about staying sharp on the night without wrecking the daytime sleep that comes after it. It sits under our [night shift survival guide](/resources/night-shift-survival-guide/), which covers the whole block from first night to last."
      },
      {
        "type": "h2",
        "text": "Why is 3am to 5am the hardest part of a night shift?"
      },
      {
        "type": "p",
        "text": "Your body clock expects you to be asleep in the early hours, so that's when the urge to sleep peaks. Every night worker I've known talks about the same window. The first half of the shift runs on adrenaline and routine. Then somewhere after 2am the jobs slow down, the building goes quiet, and your eyelids start to weigh a ton."
      },
      {
        "type": "p",
        "text": "The wall is worse when you're carrying sleep debt from short daytime sleeps, on the first night of a block, and after a heavy meal. It's also worse when you're sitting still in a warm, dim room, which describes a lot of control rooms, offices and observation posts."
      },
      {
        "type": "p",
        "text": "One date worth knowing: UK clocks go back at 2am on Sunday 25 October 2026. If you're on nights that weekend, your shift runs an extra hour, and that hour lands right in the wall. Plan your nap and your caffeine with that in mind."
      },
      {
        "type": "h2",
        "text": "Does a power nap on a night shift actually work?"
      },
      {
        "type": "p",
        "text": "Yes, and it's the best tool you have. The classic evidence comes from NASA. Pilots on long-haul flights were given a 40-minute chance to nap, and [those who slept for around 26 minutes showed up to a 54% increase in alertness and a 34% increase in job performance](https://www.sleepfoundation.org/sleep-hygiene/nasa-nap). The pilots who didn't nap showed twice as much sleepiness by the end of their flights."
      },
      {
        "type": "p",
        "text": "[NHS Employers advises night staff](https://www.nhsemployers.org/articles/sleep-fatigue-and-workplace) to rest for 15 to 20 minutes in a quiet, dark, comfortable space away from the noise of the work area, with an alarm set or a colleague ready to wake you. Their advice is not to worry about whether you actually fall asleep. Lying back with your eyes shut still helps."
      },
      {
        "type": "p",
        "text": "Keep it short. Naps much longer than 30 minutes make it more likely you'll wake up groggy and slow, which is the last thing you want when you're straight back on the job."
      },
      {
        "type": "p",
        "text": "During a night shift at Budweiser, I would normally have a quick nap in the canteen area, if only for 15 minutes. Sometimes, on a night shift, you just have to grab whatever you can to help get you through the night."
      },
      {
        "type": "p",
        "text": "I've also fallen asleep at my computer at Budweiser. It's not good, but sometimes your body just has to go to sleep, especially if you've not slept well during the day. Luckily my line manager was OK about it, and it was normally just a quick 5 minutes, nothing longer, as someone would either enter the office or an alarm on the screen would wake you up."
      },
      {
        "type": "h3",
        "text": "When to nap"
      },
      {
        "type": "ul",
        "items": [
          "**Before your first night:** a nap in the late afternoon or early evening before you leave is the easiest win, because you can do it in your own bed.",
          "**During the shift:** if your workplace allows rest breaks, aim for a nap before the wall rather than in the middle of it, roughly midway through the night.",
          "**Before driving home:** if you feel drowsy at the end of the shift, a short nap before you get in the car is far safer than pushing on. More on that in [Microsleep and the Drive Home After a Night Shift](/resources/microsleep-driving-after-night-shift/)."
        ]
      },
      {
        "type": "h2",
        "text": "When should you have caffeine on a night shift?"
      },
      {
        "type": "p",
        "text": "Timing matters more than the amount. Caffeine works best early in the shift and close to a nap. It works against you if you drink it in the last few hours."
      },
      {
        "type": "p",
        "text": "In a study published in the Journal of Clinical Sleep Medicine, [400 mg of caffeine (about 2-3 cups of coffee) taken six hours before bed cut total sleep by more than an hour](https://aasm.org/late-afternoon-and-early-evening-caffeine-can-disrupt-sleep-at-night/). The participants didn't notice the disruption. That matches my experience: you think you slept fine, but you wake up feeling like you didn't."
      },
      {
        "type": "p",
        "text": "The trick NHS Employers suggests is the caffeine nap. Have your coffee just as you put your head down, because caffeine takes about 15 to 20 minutes to kick in. You wake up to the benefit of the nap and the caffeine together."
      },
      {
        "type": "table",
        "head": [
          "Bedtime after your shift",
          "Last caffeine by (6-hour rule)"
        ],
        "rows": [
          [
            "7am",
            "1am"
          ],
          [
            "8am",
            "2am"
          ],
          [
            "9am",
            "3am"
          ],
          [
            "10am",
            "4am"
          ]
        ]
      },
      {
        "type": "p",
        "text": "That means the 3am Red Bull is exactly the wrong drink for most of us. We go deeper on half-lives and cut-off times in [How Long Does Caffeine Last?](/resources/how-long-does-caffeine-last/). You can also set your own cut-off with the [Night Shift Recovery Calculator](/tools/night-shift-recovery-calculator/)."
      },
      {
        "type": "h2",
        "text": "What else keeps you alert through the early hours?"
      },
      {
        "type": "p",
        "text": "After the nap and the coffee, the rest is about not letting your body settle into sleep mode."
      },
      {
        "type": "ol",
        "items": [
          "**Keep the lights bright.** A dim room tells your brain it's bedtime. Work under the brightest light you reasonably can, especially in the first half of the shift.",
          "**Move every 30-60 minutes.** A walk round the site, the stairs, or a lap of the car park gets the blood moving. At Strangeways, a walk around the landings was always a good way to keep me awake. At Budweiser I sat at a computer screen, so adding the hops or taking a mash sample was a good excuse to get moving.",
          "**Get some cold air.** Stepping outside for two minutes is a short sharp lift. It won't last, but it can carry you to your next task.",
          "**Eat light and little.** A heavy meal in the early hours makes the wall hit harder. Small snacks and water beat a big plate. Our guide, [What to Eat on a Night Shift](/resources/what-to-eat-on-night-shift/), covers meals and timing.",
          "**Save the boring jobs for earlier.** Where you can, do the dull, repetitive or sitting-down tasks before 2am and keep active tasks for the low point.",
          "**Talk to your colleagues.** Conversation keeps your brain switched on in a way that scrolling on your phone doesn't."
        ]
      },
      {
        "type": "h2",
        "text": "What doesn't work (or costs you later)?"
      },
      {
        "type": "p",
        "text": "Some of the classic night shift habits feel like they help, but they leave a bill to pay."
      },
      {
        "type": "ul",
        "items": [
          "**Energy drink after energy drink.** Stacking cans after 2am won't beat the wall, and it will keep you staring at the ceiling at 10am.",
          "**Sugar hits.** A chocolate bar from the vending machine gives a quick lift, then a slump.",
          "**Pushing through on willpower alone.** When your eyes start to close, willpower loses. A short planned rest is safer than nodding off without one.",
          "**The after-shift drink.** Drinking after a night shift is your me time, the way an evening is for normal workers. But you pay for it later, when you're back on nights at 2am the next shift. For me, I've done it on occasions, especially after my last night shift, but as a rule I always wanted my bed more. The after-effects of alcohol when you're so tired are just not worth the pain later."
        ]
      },
      {
        "type": "p",
        "text": "Staying awake well and sleeping well are two halves of the same job. Once you're home, our guide on [how to sleep during the day](/resources/how-to-sleep-during-the-day/) covers darkness, noise and the first hour after you get in."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "You can't out-drink the 3am wall, but you can plan around it. Nap before it, have caffeine early, keep the lights bright and keep moving, and protect the sleep that comes after the shift."
      },
      {
        "type": "p",
        "text": "For your break-time nap, set a 20-minute timer with the wake-up chime in the free Sleyp player. It's free in your browser; just keep the page open so the timer and chime can run. When you get home, the same player has brown noise and rain to mask the daytime noise outside. If you're new to noise colours, start with our guide to [brown noise for sleep](/resources/brown-noise-for-sleep/)."
      },
      {
        "type": "p",
        "text": "[**Try Sleyp free**](/session/). The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Sleep Foundation: The NASA nap (summary of Rosekind et al., 1995)](https://www.sleepfoundation.org/sleep-hygiene/nasa-nap)",
          "[NHS Employers: Sleep, fatigue and the workplace](https://www.nhsemployers.org/articles/sleep-fatigue-and-workplace)",
          "[American Academy of Sleep Medicine: Late afternoon and early evening caffeine can disrupt sleep at night (Drake et al., 2013, Journal of Clinical Sleep Medicine)](https://aasm.org/late-afternoon-and-early-evening-caffeine-can-disrupt-sleep-at-night/)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "How do I stop feeling sleepy at 3am on a night shift?",
        "answer": "Plan for it rather than fight it. Take a 15-20 minute nap before the low point if your workplace allows, have your coffee before about 2am, turn up the lights, eat something light, and get moving or step outside for some cold air."
      },
      {
        "question": "Is it OK to nap on a night shift?",
        "answer": "Where your employer allows it, yes. NHS Employers recommends 15-20 minute naps in a quiet, dark space for night staff. Always check your workplace rules first, and set an alarm."
      },
      {
        "question": "How long should a power nap be on a night shift?",
        "answer": "Aim for 15-20 minutes, and keep it under 30. NASA's pilots benefited from around 26 minutes of sleep. Longer naps make you more likely to wake up groggy."
      },
      {
        "question": "Do energy drinks help on night shifts?",
        "answer": "They give a short lift, but caffeine late in the shift can cut your daytime sleep by more than an hour without you noticing. If you use them, have them early in the shift or just before a nap, not in the last six hours before bed."
      },
      {
        "question": "What is a caffeine nap?",
        "answer": "You drink a coffee just before a 15-20 minute nap. The caffeine takes about 15-20 minutes to kick in, so you wake up as it starts working. NHS Employers suggests this for night staff who use caffeine."
      },
      {
        "question": "Is it harder to stay awake when the clocks go back?",
        "answer": "It can be. When UK clocks go back on Sunday 25 October 2026, anyone working that night does an extra hour, right in the early-hours low point. Build an extra nap or break into that shift if you can."
      }
    ]
  },
  {
    "slug": "night-shift-survival-guide",
    "title": "Working Nights: The Complete Night Shift Survival Guide (UK)",
    "description": "A night shift survival guide from a 40-year shift veteran: sleep before your first night, the 3am wall, food, caffeine, the drive home and your UK rights.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-13",
    "readMinutes": 16,
    "quickAnswer": "Surviving night shifts comes down to five things: a short sleep before your first night, early caffeine and a planned break during the shift, light meals, a safe drive home, and a dark, quiet bedroom for daytime sleep. More than 3 million UK employees work nights, and the same basics work for every one of them.",
    "blocks": [
      {
        "type": "p",
        "text": "It's 3 o'clock in the morning on your night shift and you hit that wall. No amount of caffeine or Red Bull will help, but you drink it anyway, and then you pay for it later when you try to get some sleep and you're wired to stay awake. If that sounds familiar, this guide is for you."
      },
      {
        "type": "p",
        "text": "I've worked shifts for 40 years. I started in The King's Regiment from 1986 to 1989, then worked at Jacobs Biscuits, in HM Prison Service at Strangeways, Walton and Guys Marsh, and at Budweiser UK. Nights have been part of my life for most of that time. I've done nights at Strangeways prison, in the Army on stag duty and on patrol, and night shifts at the Budweiser brewery in Samlesbury. This is everything I wish someone had told me before my first block of nights, checked against what the UK's own safety regulator says."
      },
      {
        "type": "h2",
        "text": "Who works nights in the UK?"
      },
      {
        "type": "p",
        "text": "You're far from alone. A [TUC analysis of official figures for 2018](https://www.tuc.org.uk/news/number-people-working-night-shifts-more-150000-5-years) found 3,138,000 people working nights, about one in nine (11.5%) employees. That was up 151,000 (5%) since 2013, and the number of night workers over 50 had risen by 114.5%."
      },
      {
        "type": "p",
        "text": "Nurses and care workers, prison officers, lorry drivers, warehouse staff, police, factory and brewery crews: the jobs are different, but the 3am wall is the same. The Health and Safety Executive (HSE) says [more than 3.5 million people are employed as shift workers in the UK](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm). It also says fatigue is said to cost the UK £115 to £240 million a year in work accidents alone, and that it has been implicated in 20% of accidents on major roads."
      },
      {
        "type": "p",
        "text": "That's the point to hold on to. Shift fatigue isn't weakness or a lack of willpower. It's a safety issue, and it's one you can manage with a plan."
      },
      {
        "type": "h2",
        "text": "What does a good night shift plan look like?"
      },
      {
        "type": "p",
        "text": "Here is the whole night shift cycle on one page. Each step is covered in more detail below. The times assume a 7pm to 7am night shift and a 30-minute commute; shift them to fit your own rota."
      },
      {
        "type": "table",
        "head": [
          "When",
          "What to do",
          "Why it helps"
        ],
        "rows": [
          [
            "Night before your first shift",
            "Sleep as normal and allow yourself a lie-in",
            "You start the block with as little sleep debt as possible"
          ],
          [
            "Afternoon before your first shift",
            "Take a short sleep, as [HSE advises](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
            "Cuts the hours you've been awake by the time 3am arrives"
          ],
          [
            "Before you leave",
            "Eat your main meal and do some moderate exercise",
            "HSE says moderate exercise before work may increase alertness on the shift"
          ],
          [
            "First half of the shift",
            "Have your caffeine early, keep lights bright, get the active jobs done",
            "Caffeine works when you need it and is fading by bedtime"
          ],
          [
            "3am to 5am",
            "Take your break, move about, talk to people, keep food light",
            "This is when the wall hits hardest"
          ],
          [
            "6 hours before bed (about 3am for a 9am bedtime)",
            "Last caffeine of the night",
            "Caffeine 6 hours before bed can still cut your sleep by over an hour"
          ],
          [
            "End of the shift",
            "Get home safely; take a taxi, lift share or stop for a nap if sleepy",
            "Fatigue is linked to 20% of accidents on major roads"
          ],
          [
            "At home",
            "Light snack, then bed in a dark, cool, quiet room",
            "Protects a 7 to 8 hour sleep"
          ],
          [
            "After your last night",
            "Short sleep, then bed earlier that night",
            "Helps your body clock swing back to days"
          ]
        ]
      },
      {
        "type": "p",
        "text": "You can work out your own timings with the [Night Shift Recovery Calculator](/tools/night-shift-recovery-calculator/), which builds the caffeine cut-off and wind-down around your commute."
      },
      {
        "type": "h2",
        "text": "How should you prepare before your first night shift?"
      },
      {
        "type": "p",
        "text": "The biggest mistake I see is people getting up at 7am as normal on the day of their first night shift. By 4am the next morning they've been awake for 21 hours. That's the hardest way to start a block."
      },
      {
        "type": "p",
        "text": "HSE's [hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) are simple: have a short sleep before your first night shift. In practice that means:"
      },
      {
        "type": "ol",
        "items": [
          "Sleep normally the night before, and have a lie-in if your household lets you.",
          "Get your head down for a short sleep in the afternoon before you go in. Even if you only doze, lying in a dark room helps.",
          "Eat a proper meal before you leave, rather than relying on the vending machine at 3am.",
          "Set up your bedroom for the day sleeps ahead: blinds, earplugs, a fan, your sound mix ready to go.",
          "Tell close neighbours your work pattern. HSE suggests asking them to try to avoid noisy activities during your sleep time. It doesn't always work, but a friendly word costs nothing."
        ]
      },
      {
        "type": "p",
        "text": "Before my first night shift, I always got up normally, but then always had a short sleep of around 2 hours. I'd then eat some food before leaving for work around 5:15pm as my start time was 7pm and the drive was along the very busy M6 towards Samlesbury."
      },
      {
        "type": "h2",
        "text": "How do you get through the 3am wall?"
      },
      {
        "type": "p",
        "text": "Most night workers know the feeling. The work is quieter, the building is quieter, and somewhere between about 3am and 5am your body decides it's time to sleep, whether you're on the clock or not. You can't remove the wall, but you can stop running into it head first."
      },
      {
        "type": "p",
        "text": "**Get your caffeine timing right.** Caffeine is a tool, not a crutch. HSE's advice is to only use caffeine occasionally and not to rely on it to keep you awake. The bigger problem for night workers is when you drink it. In a [2013 study reported by the American Academy of Sleep Medicine](https://aasm.org/late-afternoon-and-early-evening-caffeine-can-disrupt-sleep-at-night/), 400 mg of caffeine (about 2 to 3 cups of coffee) taken six hours before bed cut total sleep by more than an hour, and people didn't notice their sleep had been disturbed. For a 9am bedtime, that puts your last coffee or energy drink at about 3am, which is exactly when the wall hits. So front-load it: have your caffeine early in the shift and switch to water after your cut-off."
      },
      {
        "type": "p",
        "text": "**Use light and movement.** Keep your work area as bright as the job allows. Do your walking, checking or stock jobs in the early hours, and save the sit-down paperwork for when you're fresher."
      },
      {
        "type": "p",
        "text": "**Take your breaks properly.** By law, if your shift is longer than six hours you're entitled to [one uninterrupted 20-minute rest break](https://www.gov.uk/rest-breaks-work). Use it to get off your feet, eat something light and, where your employer allows it, have a short planned nap. HSE's good practice guidelines also say employers should encourage regular breaks and allow some choice over when they're taken."
      },
      {
        "type": "p",
        "text": "**Talk to people.** In the army, finishing your stag in the middle of the night and not being able to get back to sleep was normal. The next day still had to be worked. What got me through was the people around me. A conversation at 4am does more than another can of Red Bull."
      },
      {
        "type": "p",
        "text": "There's a full guide to this in [How to Stay Awake on a Night Shift](/resources/how-to-stay-awake-on-night-shift/), and the detail on caffeine timing is in [How Long Does Caffeine Last?](/resources/how-long-does-caffeine-last/)."
      },
      {
        "type": "h2",
        "text": "What should you eat and drink on a night shift?"
      },
      {
        "type": "p",
        "text": "Food on nights is less about superfoods and more about timing and size. HSE's [tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) say regular light meals and snacks are less likely to affect alertness or cause drowsiness than a single heavy meal. They also say not to go to bed hungry: have a light meal or snack before sleeping, but avoid fatty, spicy or heavy meals."
      },
      {
        "type": "p",
        "text": "A simple pattern that works:"
      },
      {
        "type": "ul",
        "items": [
          "**Before the shift:** your main meal of the day, eaten at home.",
          "**During the shift:** small, regular snacks rather than a big plate of chips at 2am. Pack your own so the vending machine isn't your only option.",
          "**Drinks:** water through the night, caffeine only before your cut-off.",
          "**Before bed:** something light so hunger doesn't wake you at noon."
        ]
      },
      {
        "type": "p",
        "text": "Then there's the drink after work. Drinking alcohol after a night shift is your \"me time\", the same way an evening is a normal worker's me time. I understand it completely. But I always paid for it later that night, back on shift at 2am in the morning, feeling worse than if I'd just gone to bed."
      },
      {
        "type": "p",
        "text": "I always took my own food in for a night shift, normally sandwiches and always ironically I had overnight oats for my breakfast around 4am. We had vending machines which was always great if you ever needed that sugar fix from a Snickers bar."
      },
      {
        "type": "p",
        "text": "[What to Eat on a Night Shift](/resources/what-to-eat-on-night-shift/) goes deeper on meal timing and snacks for the 3am dip."
      },
      {
        "type": "h2",
        "text": "How do you stay safe on the drive home after nights?"
      },
      {
        "type": "p",
        "text": "The drive home is the most dangerous part of a night shift for a lot of people. HSE says fatigue has been [implicated in 20% of accidents on major roads](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm). You've been awake all night, the sun is coming up, and the road is one you could drive in your sleep. That's the problem."
      },
      {
        "type": "p",
        "text": "HSE's advice for getting to and from work:"
      },
      {
        "type": "ol",
        "items": [
          "Consider public transport or a taxi rather than driving.",
          "Exercise briefly before your journey.",
          "Share the driving if you can.",
          "Drive carefully and defensively, and try not to hurry.",
          "Stop if you feel sleepy and take a short nap if it's safe to do so."
        ]
      },
      {
        "type": "p",
        "text": "From experience, winding the window down and turning the radio up buys you minutes, not miles. If your eyes are heavy, pull in somewhere safe. A 15-minute stop is a lot cheaper than the alternative. My normal stop was on the Rainford bypass, and to be honest, it was a godsend. By this time, I would have struggled to stay awake for about 20 minutes of driving, and each power nap saved me from crashing and near misses."
      },
      {
        "type": "p",
        "text": "I've been so tired that I've actually fallen asleep at the wheel at the traffic lights, swerved across lanes and somehow never injured anyone. I know 100% I'm not the only one at Budweiser who went through this, so it's definitely a common trait of driving home after a night shift."
      },
      {
        "type": "p",
        "text": "[Microsleep and the Drive Home After a Night Shift](/resources/microsleep-driving-after-night-shift/) covers the warning signs in detail."
      },
      {
        "type": "h2",
        "text": "How do you sleep in the day after a night shift?"
      },
      {
        "type": "p",
        "text": "Getting into bed when everyone else is leaving the house for school and work is great, until the neighbours decide to mow their lawns. Daytime sleep is harder because light, noise and heat are all at their worst while you're trying to rest. You need to fight all three."
      },
      {
        "type": "p",
        "text": "HSE says most adults need 7 to 8 hours of sleep a day, and suggests going to bed soon after you get home or staying up and sleeping before your next shift. Whichever you choose, keep it consistent across the block so your body knows when sleep is coming. I always went straight to bed as by the time I'd done a 12 hour shift, then drove home for 40 minutes, I was ready for sleep."
      },
      {
        "type": "p",
        "text": "My complete guide to [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/) covers this in full. The short version:"
      },
      {
        "type": "ul",
        "items": [
          "**Darkness:** HSE recommends heavy curtains, blackout blinds or eye shades. See [blackout blinds vs blackout curtains](/resources/blackout-blinds-vs-curtains/) for stopping light leaks.",
          "**Noise:** even on a quiet street, cars and kids playing out can keep you wide awake. Earplugs take the edge off the peaks (see [sleeping with earplugs](/resources/earplugs-for-sleeping/)), and a steady masking sound fills the gaps. Deep sounds such as [brown noise](/resources/brown-noise-for-sleep/) or [fan noise](/resources/fan-noise-for-sleeping/) are good at covering traffic, mowers and drilling.",
          "**Temperature:** keep the room cool, keep the blinds shut from the moment you get in, and use light bedding.",
          "**Switching off:** once the room is sorted, a simple routine helps your head follow your body. See [the military sleep method](/resources/military-sleep-method/) and whether it works after nights.",
          "**Your phone:** put it on Do Not Disturb with exceptions for family emergencies.",
          "**Your hours:** protect the full sleep. Six hours a day across a block of nights adds up fast; see [is 6 hours of sleep enough?](/resources/is-6-hours-of-sleep-enough/)"
        ]
      },
      {
        "type": "h2",
        "text": "What are your rights as a night worker in the UK?"
      },
      {
        "type": "p",
        "text": "UK law gives night workers specific protections. This is a summary of the GOV.UK guidance, not legal advice; check [GOV.UK's night working hours guide](https://www.gov.uk/night-working-hours) for the full rules and exceptions."
      },
      {
        "type": "table",
        "head": [
          "Rule",
          "What it means"
        ],
        "rows": [
          [
            "Who counts as a night worker",
            "Anyone who regularly works at least 3 hours during the night period"
          ],
          [
            "The night period",
            "11pm to 6am, unless you and your employer agree a different 7-hour period that includes midnight to 5am, in writing"
          ],
          [
            "Average hours limit",
            "No more than an average of 8 hours in every 24, usually worked out over 17 weeks (up to 52 weeks if agreed). Regular overtime counts"
          ],
          [
            "Opting out",
            "Night workers cannot opt out of the 8-hour average limit"
          ],
          [
            "Hazardous or strenuous work",
            "If the work involves special hazards or heavy mental or physical strain, no more than 8 hours in any 24-hour period"
          ],
          [
            "Health assessment",
            "Your employer must offer a [free health assessment](https://www.gov.uk/night-working-hours/health-assessments) before you start nights, and regular ones after that. You can decline"
          ],
          [
            "Rest between shifts",
            "The right to [11 hours' rest between working days](https://www.gov.uk/rest-breaks-work)"
          ],
          [
            "Breaks",
            "One uninterrupted 20-minute break if your shift is longer than 6 hours"
          ],
          [
            "Weekly rest",
            "24 hours off every week, or 48 hours every fortnight"
          ],
          [
            "Under-18s",
            "Can't work between midnight and 4am, and usually not between 10pm and 6am, with some exceptions"
          ]
        ]
      },
      {
        "type": "p",
        "text": "GOV.UK also notes there's no legal right to a higher night rate: the National Minimum Wage applies, but enhancements are down to your contract."
      },
      {
        "type": "h2",
        "text": "How many night shifts in a row is safe?"
      },
      {
        "type": "p",
        "text": "There's no single legal number, but HSE's guidance on shift design gives a clear steer. Its [good practice guidelines](https://www.hse.gov.uk/humanfactors/topics/good-practice-guidelines.htm) for employers say:"
      },
      {
        "type": "ul",
        "items": [
          "Restrict long shifts, night shifts and early morning shifts to 2 to 3 consecutive shifts.",
          "Limit shifts to 12 hours including overtime, or to 8 hours if they're night shifts and the work is demanding, monotonous, dangerous or safety critical.",
          "Rotate shifts forwards (days, then lates, then nights) where possible.",
          "Allow 2 nights' full sleep when switching from days to nights and back.",
          "Limit consecutive work days to a maximum of 5 to 7."
        ]
      },
      {
        "type": "p",
        "text": "HSE's full guide, [HSG256 Managing shift work](https://www.hse.gov.uk/pubns/books/hsg256.htm), is free to download and worth showing to anyone who designs rotas."
      },
      {
        "type": "p",
        "text": "That 2 to 3 nights point surprises a lot of people. Plenty of rotas, including many 4 on 4 off patterns, put four 12-hour nights back to back. That isn't automatically unlawful, but it's longer than HSE's good practice, so planning your sleep through the block matters even more. Lates and earlies sound great too, but the early starts and late finishes take their own toll on your sleep pattern and sleep quality. [Shift Patterns Explained](/resources/shift-patterns-explained/) compares the common UK rotas side by side."
      },
      {
        "type": "h2",
        "text": "How do you get back to days after a block of nights?"
      },
      {
        "type": "p",
        "text": "I know how it feels to get up early after your last night shift to try to get the most out of your day off, then find yourself fatigued with that dreaded jet-lag feeling. Your body clock has drifted towards nights, and it doesn't snap back in a day."
      },
      {
        "type": "p",
        "text": "HSE's advice is to have a short sleep when you come off nights, then go to bed earlier that night. Its good practice guidelines also suggest allowing two nights' full sleep when switching from nights back to days. In practice:"
      },
      {
        "type": "ol",
        "items": [
          "Sleep for a few hours after your last shift, not the whole day. Set an alarm.",
          "Get outside in daylight in the afternoon.",
          "Keep caffeine to the morning and early afternoon.",
          "Go to bed at a normal time that night, a little earlier than usual if you're shattered.",
          "Expect the next day or two to feel a bit off. That's your body clock catching up, not a sign you've done it wrong."
        ]
      },
      {
        "type": "p",
        "text": "The [Rota Flip-Flop Calculator](/tools/rota-flip-flop-calculator/) builds this into an hour-by-hour plan from the time your last shift ends. [How to Fix Your Sleep Schedule After a Block of Nights](/resources/how-to-fix-sleep-schedule-after-nights/) covers the flip back in more depth."
      },
      {
        "type": "p",
        "text": "**Clocks go back on Sunday 25 October 2026.** At 2am, UK clocks go back to 1am, so if you're on nights that weekend your shift will be an hour longer. Check your rota and how your employer handles the extra hour, and plan your caffeine cut-off and the drive home with it in mind. Watching the clock go back to 1am is one of the worst feelings possible. It really can be soul destroying."
      },
      {
        "type": "p",
        "text": "If you're lucky enough to have extra staff, work it out between you so that one person comes in on time but goes an hour earlier and another person comes in an hour later, but stays the extra hour, which is the normal handover time."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Night shifts don't have to grind you down. Sleep before the first night, front-load your caffeine, eat light, get home safely, and guard your daytime sleep like it's part of the job, because it is. Know your rights, and if your rota is stacking up long nights, use HSE's guidance to start the conversation with your employer."
      },
      {
        "type": "p",
        "text": "When you get home, the last thing you need is a mower or a drill. Try Sleyp free: the browser player has 13 free sounds, including [brown noise](/resources/brown-noise-for-sleep/), rain and fan hum, plus a free custom timer and wake-up chime. You can save your mix in your browser so it's ready for the next morning. Keep the page open while you sleep so the timer and chime can run. The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "If tiredness lasts for weeks despite good sleep, see your GP."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[TUC: Number of people working night shifts up by more than 150,000 in 5 years (October 2018)](https://www.tuc.org.uk/news/number-people-working-night-shifts-more-150000-5-years)",
          "[HSE: Human factors: Fatigue](https://www.hse.gov.uk/humanfactors/topics/fatigue.htm)",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)",
          "[HSE: Good practice guidelines for shift work](https://www.hse.gov.uk/humanfactors/topics/good-practice-guidelines.htm)",
          "[HSE: HSG256 Managing shift work](https://www.hse.gov.uk/pubns/books/hsg256.htm)",
          "[GOV.UK: Night working hours](https://www.gov.uk/night-working-hours)",
          "[GOV.UK: Night working hours: health assessments](https://www.gov.uk/night-working-hours/health-assessments)",
          "[GOV.UK: Rest breaks at work](https://www.gov.uk/rest-breaks-work)",
          "[American Academy of Sleep Medicine: Late afternoon and early evening caffeine can disrupt sleep at night (2013)](https://aasm.org/late-afternoon-and-early-evening-caffeine-can-disrupt-sleep-at-night/)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "How do you survive a night shift?",
        "answer": "Sleep before your first night, have your caffeine early in the shift and stop at least 6 hours before bed, eat light meals and snacks rather than one heavy meal, and get home safely. Then sleep in a dark, cool, quiet room for 7 to 8 hours. Planning beats willpower every time."
      },
      {
        "question": "How many night shifts in a row is safe?",
        "answer": "UK law doesn't set a maximum number of nights in a row, but HSE's good practice guidelines suggest restricting night shifts and long shifts to 2 to 3 in a row. If your rota has four or more 12-hour nights back to back, protect your daytime sleep carefully and plan the switch back to days."
      },
      {
        "question": "What are my rights as a night worker in the UK?",
        "answer": "Night workers must not work more than an average of 8 hours in 24, usually over 17 weeks, and can't opt out of that limit. Your employer must offer a free health assessment before you start nights and regularly after. You also have the right to 11 hours' rest between working days and a 20-minute break on shifts over 6 hours."
      },
      {
        "question": "Should I sleep before my first night shift?",
        "answer": "Yes. HSE advises a short sleep before your first night shift. Sleep normally the night before, then get your head down for a short sleep in the afternoon. It cuts the hours you've been awake by the time the early hours arrive."
      },
      {
        "question": "When should I stop drinking caffeine on a night shift?",
        "answer": "Aim for at least 6 hours before your planned bedtime. In a 2013 study, caffeine taken 6 hours before bed cut sleep by more than an hour, and people didn't notice. For a 9am bedtime, that means your last coffee or energy drink at about 3am."
      },
      {
        "question": "Is it safe to drive home after a night shift?",
        "answer": "It can be, but it's the riskiest part of the shift for many people. HSE says fatigue has been implicated in 20% of accidents on major roads. If you can, use public transport, a taxi or a lift share. If you feel sleepy at the wheel, stop somewhere safe and take a short nap."
      }
    ]
  },
  {
    "slug": "is-6-hours-of-sleep-enough",
    "title": "Is 6 Hours of Sleep Enough? What It Means for Shift Workers",
    "description": "Is 6 hours of sleep enough? Two weeks of 6-hour nights impaired people as much as up to two nights without sleep. What it means for shift workers.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-12",
    "readMinutes": 7,
    "quickAnswer": "For most adults, 6 hours of sleep isn't enough once it becomes your normal. In a well-known 2003 study, people limited to 6 hours in bed for 14 days ended up as impaired as people kept awake for up to two nights, and they barely noticed. HSE says most adults need 7-8 hours a day.",
    "blocks": [
      {
        "type": "p",
        "text": "In the Army, you finished your stag in the middle of the night, lay there unable to get back to sleep, and the next day still had to be worked. Nobody asked whether you'd had enough. Forty years later, through Jacobs Biscuits, HM Prison Service and Budweiser UK, the question I hear most from other shift workers is the same one: is 6 hours really that bad? The honest answer is that one 6-hour sleep won't hurt you much. A run of them adds up, and the research shows you are the last person to notice."
      },
      {
        "type": "h2",
        "text": "Is 6 hours of sleep enough? The short answer"
      },
      {
        "type": "p",
        "text": "Six hours is enough to get through a day. It isn't enough to stay sharp day after day. [HSE's guidance for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) puts it plainly: \"Most adults need 7-8 hours sleep a day although this may decrease with age.\""
      },
      {
        "type": "p",
        "text": "The problem with 6 hours is not the first night. It's the build-up. Every short sleep adds to your sleep debt, and your performance keeps sliding while your sense of how tired you are levels off. That gap is where the risk sits, at work and on the drive home."
      },
      {
        "type": "h2",
        "text": "What did the 14-day study actually find?"
      },
      {
        "type": "p",
        "text": "The study most people mean when they talk about 6 hours is [Van Dongen and colleagues, published in SLEEP in 2003](https://ntrs.nasa.gov/citations/20040087752). Researchers took 48 healthy adults aged 21-38 and gave them a fixed amount of time in bed every night for 14 days in a row. A separate group went 3 nights with no sleep at all, for comparison."
      },
      {
        "type": "table",
        "head": [
          "Group",
          "Time in bed",
          "How long",
          "What the researchers report"
        ],
        "rows": [
          [
            "Restricted",
            "4 hours a night",
            "14 days",
            "Deficits built up, equivalent to up to 2 nights without sleep (6 hours or less)"
          ],
          [
            "Restricted",
            "6 hours a night",
            "14 days",
            "Deficits built up, equivalent to up to 2 nights without sleep (6 hours or less)"
          ],
          [
            "Comparison",
            "8 hours a night",
            "14 days",
            "The normal-sleep group the others were compared with"
          ],
          [
            "Total sleep loss",
            "0 hours",
            "3 nights",
            "The yardstick for \"nights without sleep\""
          ]
        ]
      },
      {
        "type": "p",
        "text": "The headline finding: restricting sleep to 6 hours or less a night for two weeks produced thinking and reaction deficits equal to up to two full nights of no sleep. These were healthy young adults in a lab, sleeping on a regular schedule. Shift workers usually have it harder, not easier."
      },
      {
        "type": "h2",
        "text": "Why do you feel fine on 6 hours?"
      },
      {
        "type": "p",
        "text": "This is the part that should make every night worker sit up. In the same study, sleepiness ratings rose at first and then changed little, even as performance kept getting worse. The authors wrote that people \"were largely unaware of these increasing cognitive deficits.\""
      },
      {
        "type": "p",
        "text": "In real life, that sounds like \"I'm used to it\" or \"I only need six\". You might genuinely feel used to it. The study suggests your reactions and focus may not be. That matters when you are watching a production line at 4am, running a wing on nights, or driving home at 7am with the sun in your eyes."
      },
      {
        "type": "h2",
        "text": "What if you're a shift worker and 6 hours is all you get?"
      },
      {
        "type": "p",
        "text": "Sometimes 6 hours is the best a rota allows. Lates and earlies sound great, but the early start after a late finish takes a toll on your sleep pattern and sleep quality, and 6 hours between them can feel generous. On nights, daytime sleep is often shorter and lighter because of daylight, traffic and the rest of the world carrying on outside your window."
      },
      {
        "type": "p",
        "text": "After a night shift at Strangeways prison, it was always difficult to \"switch off\" enough to get a good quality 6 hours sleep, especially with the daytime noises."
      },
      {
        "type": "p",
        "text": "Getting a good quality 6 hours minimum is so important for not just your health, but for your time off. I really did hate that groggy jet-lagged feeling after my last night shift, especially if my daily sleep routine had given me broken sleep."
      },
      {
        "type": "p",
        "text": "If short sleep is unavoidable for a few days, the goal is damage control: protect the sleep you do get, top it up where you can, and pay it back on your rest days rather than letting it stack for weeks."
      },
      {
        "type": "h2",
        "text": "How can you top up a short sleep?"
      },
      {
        "type": "p",
        "text": "These steps follow HSE's advice for shift workers, plus what works in a real house on a real street."
      },
      {
        "type": "ol",
        "items": [
          "**Sleep before your first night.** HSE advises having \"a short sleep before your first night shift\". Even 60-90 minutes in the afternoon takes the edge off.",
          "**Nap when it's safe.** HSE says to \"stop if you feel sleepy and take a short nap if it is safe to do so\". A planned nap on a break beats fighting your eyelids. We cover nap timing in our guide [How to Stay Awake on a Night Shift](/resources/how-to-stay-awake-on-night-shift/).",
          "**Rest even if you can't sleep.** HSE notes that if you can't get 7-8 hours, \"try to rest, as this is still beneficial.\" Lying in a dark, quiet room is not wasted time.",
          "**Keep one fixed block.** Many shift workers keep the same few hours of sleep every day, nights or days off, and add extra sleep around it.",
          "**Make the bedroom dark.** HSE recommends \"heavy curtains, blackout blinds or eye shades\".",
          "**Mask the noise.** If it's too noisy, HSE suggests \"earplugs, white noise or background music to mask external noises\". Even on a quiet street, cars and kids playing out can keep you awake. A steady sound such as [brown noise](/resources/brown-noise-for-sleep/) smooths out the bangs and voices.",
          "**Tell the neighbours.** HSE advises you to \"discuss your work pattern with close neighbours\" and ask them to avoid noisy jobs during your sleep time.",
          "**Come off nights gently.** HSE's tip: \"have a short sleep and go to bed earlier that night.\""
        ]
      },
      {
        "type": "p",
        "text": "For the full daytime routine, see how to [sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/). For what happens inside those hours, read [how much deep sleep you need](/resources/how-much-deep-sleep-do-you-need/)."
      },
      {
        "type": "h2",
        "text": "Is 7 hours enough? Is 5 hours enough?"
      },
      {
        "type": "p",
        "text": "**7 hours** sits at the bottom of HSE's 7-8 hour range, so for most adults it is a reasonable target. If you wake up after 7 hours and still feel drained, you may simply need more, or the sleep you're getting is being broken up by noise and light."
      },
      {
        "type": "p",
        "text": "**5 hours** is below the 6-hour line. The Van Dongen findings covered \"6 hours or less\", and the 4-hour group in that study did worse again. Treat 5 hours as an emergency, not a plan."
      },
      {
        "type": "p",
        "text": "Night shifts at Budweiser were my worst experience, and why I decided to build the Sleyp app. 12-hour shifts in really hot conditions, then a 40-minute drive home, all added up to a sleep pattern that was all over the place."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Six hours will get you through a shift. Six hours, night after night, quietly wears you down, and the research says you won't feel how far. Protect your sleep window, top up with naps and rest, and keep a log of your real hours in the [Sleep Debt & Fatigue Logger](/tools/sleep-debt-fatigue-logger/) so you can see the debt before it sees you."
      },
      {
        "type": "p",
        "text": "When daytime noise is what cuts your sleep short, a steady masking sound can help you stay down for longer. [Try Sleyp free](/session/): 13 sounds, a custom timer and a wake-up chime, all free in your browser (keep the page open while it plays). The Sleyp iOS app is coming soon."
      },
      {
        "type": "p",
        "text": "If tiredness lasts for weeks despite good sleep, see your GP."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Van Dongen HPA, Maislin G, Mullington JM, Dinges DF (2003). The cumulative cost of additional wakefulness. SLEEP 26(2). NASA Technical Reports Server record](https://ntrs.nasa.gov/citations/20040087752)",
          "[Health and Safety Executive: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm)"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is 6 hours of sleep enough for a night shift worker?",
        "answer": "Not as a regular pattern. One 6-hour sleep is manageable, but in a two-week study, 6 hours a night produced deficits equal to up to two nights without sleep. Aim for 7-8 hours, using a nap or a second sleep to make up the gap."
      },
      {
        "question": "Is 7 hours of sleep enough?",
        "answer": "For most adults, yes. HSE says most adults need 7-8 hours a day, so 7 hours is at the lower end of normal. If you feel rough after 7, check your bedroom for light and noise before assuming you need more."
      },
      {
        "question": "Is 5 hours of sleep enough?",
        "answer": "No. Five hours is below the level at which the 2003 study found deficits building day after day. If a shift pattern forces 5 hours, top up with a nap and get a full sleep as soon as the rota allows."
      },
      {
        "question": "Can a nap make up for short sleep?",
        "answer": "A nap helps you get through, and HSE recommends a short nap when you feel sleepy and it's safe. It doesn't fully replace a proper sleep, so treat it as a top-up rather than a substitute."
      },
      {
        "question": "Why do I feel fine on 6 hours?",
        "answer": "Because your sense of sleepiness levels off while your performance keeps dropping. In the Van Dongen study, people were \"largely unaware\" of their growing deficits. Feeling fine is not the same as being sharp."
      },
      {
        "question": "Can you catch up on lost sleep on your days off?",
        "answer": "You can recover some, but a single long lie-in won't wipe out a week of short sleep. We go into this in our guide Can You Catch Up on Sleep? For now, spread recovery over your rest days."
      }
    ]
  },
  {
    "slug": "how-much-deep-sleep-do-you-need",
    "title": "How Much Deep Sleep Do You Need? (And How Night Workers Get It)",
    "description": "How much deep sleep do you need? Adults average 10-20% of sleep. When deep sleep happens, what steals it, and how night workers can protect it during the day.",
    "category": "Daytime Sleep Optimisation",
    "categorySlug": "daytime-sleep-optimisation",
    "datePublished": "2026-10-14",
    "readMinutes": 7,
    "quickAnswer": "Most adults spend 10-20% of their sleep in deep sleep, roughly 42-84 minutes in a 7-hour sleep. Most of it comes in the first part of your sleep, whatever time of day that is. For night workers, that means protecting the first few hours after you get into bed from noise, light and the after-shift drink.",
    "blocks": [
      {
        "type": "h2",
        "text": "How much deep sleep do you need?"
      },
      {
        "type": "p",
        "text": "According to the [Sleep Foundation](https://www.sleepfoundation.org/stages-of-sleep/deep-sleep), adults typically spend 10% to 20% of the night in deep sleep, also called slow-wave sleep. It is honest about the limits: there is no agreed single number for how much deep sleep is normal or ideal. So think of it as a range, not a target."
      },
      {
        "type": "table",
        "head": [
          "Hours asleep",
          "Typical deep sleep (10-20%)",
          "Where the figure comes from"
        ],
        "rows": [
          [
            "5 hours",
            "About 30-60 minutes",
            "The same 10-20% rule, worked out"
          ],
          [
            "6 hours",
            "About 36-72 minutes",
            "The same 10-20% rule, worked out"
          ],
          [
            "7 hours",
            "42-84 minutes",
            "Sleep Foundation"
          ],
          [
            "8 hours",
            "48-96 minutes",
            "Sleep Foundation"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Because deep sleep comes early, a short sleep probably loses more of its later, lighter sleep than its deep sleep. Treat the 5- and 6-hour rows as a rough guide. Short sleep still costs you, which is why the total matters as much as the deep part. [HSE](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm) says most adults need 7-8 hours of sleep a day, though this may decrease with age. We look at what happens when you regularly get less in [Is 6 Hours of Sleep Enough?](/resources/is-6-hours-of-sleep-enough/)"
      },
      {
        "type": "p",
        "text": "Age changes the picture too. The Sleep Foundation says children and teenagers need the most deep sleep, and that it then declines gradually before levelling off in your 70s. If you're 50-plus and still working nights, less deep sleep than you had at 25 is normal."
      },
      {
        "type": "h2",
        "text": "What does deep sleep actually do?"
      },
      {
        "type": "p",
        "text": "Sleep runs in stages: light sleep, deep sleep and REM (dreaming) sleep, repeating through the sleep period. Deep sleep is the stage where your brain waves slow right down. The Sleep Foundation explains that your muscles relax, your pulse and breathing slow, and your body builds and repairs tissue, muscle and bone. Deep sleep also supports memory and learning."
      },
      {
        "type": "p",
        "text": "One well-known study shows the memory link. In 2013, researchers in Germany played short sounds to [11 sleepers during deep sleep](https://www.sciencedaily.com/releases/2013/04/130411123850.htm), timed to their slow brain waves. The timed sounds strengthened those waves, and people better remembered word pairs they had learned the evening before. Sounds played out of step with the brain waves had no effect. That's why a pink noise track left on all day isn't the same thing, as we explain in [pink noise for sleep](/resources/pink-noise-for-sleep/)."
      },
      {
        "type": "p",
        "text": "Deep sleep is also the hardest stage to wake from. The Sleep Foundation says being woken from it can leave you groggy for up to an hour. If a delivery driver has ever hammered on your door at 11am and you've stood there not knowing what day it is, that's probably why."
      },
      {
        "type": "h2",
        "text": "When does deep sleep happen if you sleep in the day?"
      },
      {
        "type": "p",
        "text": "The Sleep Foundation says you get the most deep sleep during the early part of the night. For a day sleeper, \"the night\" is whenever your sleep starts. Get into bed at 8am and your deepest sleep is front-loaded into roughly the next three hours."
      },
      {
        "type": "p",
        "text": "That is exactly when the world wakes up. Getting in bed when everyone else is leaving the house for school and work is great, until the next door neighbour decides to renovate their house and starts drilling. The school run, the bin lorry and the post all land in your best deep-sleep window. Of all the hours of a day sleep, those early ones are the ones worth defending hardest."
      },
      {
        "type": "h2",
        "text": "What steals deep sleep?"
      },
      {
        "type": "table",
        "head": [
          "What gets in the way",
          "What happens",
          "What to do"
        ],
        "rows": [
          [
            "Caffeine",
            "The Sleep Foundation lists caffeine among the substances that can affect deep sleep. HSE advises avoiding caffeine and energy drinks a few hours before bed",
            "Set a caffeine cut-off on nights, not just \"less coffee\""
          ],
          [
            "Alcohol",
            "More deep sleep early on, then more broken sleep in the second half (see below). HSE says alcohol lowers the quality of sleep",
            "Keep the after-shift drink for the end of your block"
          ],
          [
            "Noise",
            "WHO recommends under 30 dB(A) in bedrooms at night and names shift workers as at increased risk from noise",
            "Earplugs plus a steady masking sound"
          ],
          [
            "Light",
            "The Sleep Foundation recommends a quiet, cool and dark bedroom; HSE suggests heavy curtains, blackout blinds or eye shades",
            "Black out the room before you need it"
          ],
          [
            "Stress",
            "The Sleep Foundation says high stress may make deep sleep harder to get",
            "A wind-down routine between the shift and bed"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Alcohol deserves its own word, because it fools people. A [review of 20 studies on alcohol and sleep](https://www.sciencedaily.com/releases/2013/01/130122162236.htm) found that, across doses, alcohol increases deep sleep in the first half of the night. But sleep becomes more disrupted in the second half, and total REM sleep drops at moderate and high doses. One of the experts summed it up: alcohol \"on the whole is not useful for improving a whole night's sleep\"."
      },
      {
        "type": "p",
        "text": "I know the pull of it. Drinking alcohol after a night shift is your \"me time\", like an evening is the normal worker's me time, but I'm going to pay for it later that night when I'm back on my night shift at 2am in the morning. This is amplified even more when you work at a brewery such as Budweiser. Each quarter, we got 5 crates of beer as an allowance, so the house always had beer in it. After a 12-hour night shift, a cold beer or two was the reward, but the payback was later, when you wake up for the toilet, feeling groggy, and then you struggle to get back to sleep. It's a never-ending cycle: the deep sleep comes early after a few pints, but the broken bit comes after lunch, when you should still be asleep."
      },
      {
        "type": "h2",
        "text": "How can night workers protect their deep sleep?"
      },
      {
        "type": "p",
        "text": "The aim is simple: make the first three hours of your day sleep as dark, quiet and undisturbed as you can."
      },
      {
        "type": "ol",
        "items": [
          "**Go to bed soon after you get home.** The longer you stay up, the closer your deep-sleep window drifts to the noisiest part of the day.",
          "**Black out the room first.** HSE suggests heavy curtains, blackout blinds or eye shades. Do it before your shift so you're not fiddling with it at 8am.",
          "**Cover the noise peaks from the first minute.** HSE suggests earplugs, white noise or background music to mask outside noise. A steady sound running before you drop off covers the first door slam. Many day sleepers prefer the deeper rumble of [brown noise for sleep](/resources/brown-noise-for-sleep/).",
          "**Keep the bedroom cool.** Heat breaks up daytime sleep, so shut out the sun early and keep air moving. Our guide to the [ideal bedroom temperature for sleep](/resources/ideal-bedroom-temperature-for-sleep/) covers how.",
          "**Set a caffeine cut-off.** Stop caffeine a few hours before your planned bedtime, as HSE advises. Hard timings are in [How Long Does Caffeine Last?](/resources/how-long-does-caffeine-last/).",
          "**Tell people your sleep times.** HSE advises talking to close neighbours about your work pattern and asking them to avoid noisy jobs during your sleep time. Same goes for the household.",
          "**Keep the same sleep window.** The Sleep Foundation's advice to get more deep sleep is to improve your overall sleep, starting with a consistent schedule."
        ]
      },
      {
        "type": "p",
        "text": "One seasonal note: the clocks go back on Sunday 25 October 2026. Darker mornings make the drive home and the first hour in bed a little easier on the light front. Watch the central heating timer, though. A radiator kicking in mid-morning can warm the bedroom just as your deep sleep should be peaking."
      },
      {
        "type": "p",
        "text": "For the full routine, read our guide on [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/)."
      },
      {
        "type": "h2",
        "text": "Should you trust your watch's deep sleep number?"
      },
      {
        "type": "p",
        "text": "Use it for trends, not verdicts. A [2023 study in JMIR mHealth and uHealth](https://mhealth.jmir.org/2023/1/e50983) tested 11 consumer sleep trackers on 75 people against a full sleep-lab recording. The best watches showed only moderate agreement with the lab on sleep stages. One under-mattress device labelled 59% of sleep as deep, when the lab measured 10.8%."
      },
      {
        "type": "p",
        "text": "The Sleep Foundation's view is fair: trackers aren't perfect, but they can show whether you're consistently getting enough deep sleep over time. So look at the trend across a block of nights, not one bad reading. I've never used a tracker other than a manual one where I score my own sleep. To keep track of the hours that matter most, log them in the [Sleep Debt & Fatigue Logger](/tools/sleep-debt-fatigue-logger/)."
      },
      {
        "type": "h2",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Most adults get 10-20% of their sleep as deep sleep, and it comes first. For night workers, the first three hours in bed are where it's won or lost. Make them dark, cool and quiet, and keep caffeine and alcohol away from them."
      },
      {
        "type": "p",
        "text": "Protect those first three hours by starting a Sleyp session as you get into bed. All 13 sounds in the browser player are free, along with the custom timer and saved mixes; just keep the page open for the timer to run. [Try Sleyp free](/session/). The Sleyp iOS app is coming soon."
      },
      {
        "type": "h3",
        "text": "Sources"
      },
      {
        "type": "ul",
        "items": [
          "[Sleep Foundation: Deep sleep](https://www.sleepfoundation.org/stages-of-sleep/deep-sleep): adults typically 10-20% deep sleep (42-84 minutes in 7 hours, 48-96 in 8); most deep sleep early in the night; declines with age; caffeine, alcohol and stress can affect it; trackers show trends.",
          "[ScienceDaily (Cell Press), April 2013: Ngo et al., Neuron, auditory closed-loop stimulation](https://www.sciencedaily.com/releases/2013/04/130411123850.htm): sounds timed to slow brain waves in 11 sleepers strengthened deep-sleep waves and improved word-pair recall; out-of-step sounds had no effect.",
          "[ScienceDaily, January 2013: Ebrahim et al., Alcohol and Sleep I, Alcoholism: Clinical & Experimental Research](https://www.sciencedaily.com/releases/2013/01/130122162236.htm): review of 20 studies; alcohol increases deep sleep in the first half of the night and disrupts the second half; total REM falls at moderate and high doses.",
          "[Lee et al. (2023), Accuracy of 11 consumer sleep trackers, JMIR mHealth and uHealth](https://mhealth.jmir.org/2023/1/e50983): 75 participants; best wearables showed moderate agreement on sleep stages; one device labelled 59% of epochs deep versus 10.8% in the lab.",
          "[WHO Europe: Noise fact sheet](https://www.who.int/europe/news-room/fact-sheets/item/noise): under 30 dB(A) in bedrooms at night; shift workers at increased risk.",
          "[HSE: Hints and tips for shift workers](https://www.hse.gov.uk/humanfactors/topics/shift-workers.htm): most adults need 7-8 hours; darken the bedroom; mask noise; talk to neighbours; avoid alcohol and late caffeine."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is 1 hour of deep sleep enough?",
        "answer": "For most adults, yes, it sits within the normal range. The Sleep Foundation puts typical deep sleep at 42-84 minutes in a 7-hour sleep and 48-96 minutes in an 8-hour sleep. There is no agreed single target, so focus on getting enough total sleep."
      },
      {
        "question": "Why is my deep sleep so low on my watch?",
        "answer": "Partly the watch: a 2023 study of 11 trackers found even the best only moderately matched a sleep lab on sleep stages. Partly real life: short or broken day sleep, noise early in the sleep and alcohol can all play a part. Watch the trend over weeks."
      },
      {
        "question": "Does alcohol reduce deep sleep?",
        "answer": "Not at first. A review of 20 studies found alcohol increases deep sleep in the first half of the night, then makes the second half more broken and cuts REM sleep at moderate and high doses. HSE advises avoiding alcohol before sleep because it lowers sleep quality."
      },
      {
        "question": "When does deep sleep happen if I sleep during the day?",
        "answer": "In the first part of your sleep, whatever the clock says. If you get into bed at 8am, your deepest sleep is mostly in the next few hours, which is when daytime noise is at its worst."
      },
      {
        "question": "How can I get more deep sleep after a night shift?",
        "answer": "Get to bed soon after you get home, make the room dark and cool, mask noise from the start, stop caffeine a few hours before bed, skip the after-shift drink and keep your sleep window consistent."
      },
      {
        "question": "Does pink noise increase deep sleep?",
        "answer": "Lab studies that strengthened deep sleep used short sounds timed precisely to brain waves. A pink noise track left running all day isn't the same thing, though it can still be a useful masking sound."
      }
    ]
  },
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
        "text": "Aim for a bedroom around 16-18C, keep the sun out from early morning, move the air, and go light on bedding. Day sleepers fight heat and noise together, so plan for both. For the rest of the daytime routine, read our guide on [how to sleep during the day after a night shift](/resources/how-to-sleep-during-the-day/), for deeper masking sounds see [brown noise for sleep](/resources/brown-noise-for-sleep/), and to protect the early hours of your sleep see [how much deep sleep you need](/resources/how-much-deep-sleep-do-you-need/)."
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
        "text": "The Cardiff researchers linked the mask's benefit to deep sleep, which comes mostly in the first part of your sleep. So the mask matters most in those first few hours after you get in from a shift. (More on this in [How Much Deep Sleep Do You Need?](/resources/how-much-deep-sleep-do-you-need/))"
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
          "**Go to bed within an hour of getting home.** Don't start the washing, the emails or the TV. A simple switch-off routine such as the [military sleep method](/resources/military-sleep-method/) helps once you're in bed.",
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
        "text": "I know how that sounds. It's 3 o'clock in the morning and you hit that wall. No amount of caffeine or Red Bull will help, but you drink it anyway, and then you pay for it later when you're lying in bed wired at 10am. Front-load your caffeine at the start of the shift instead. Our guide to [how long caffeine lasts](/resources/how-long-does-caffeine-last/) has a full cut-off table."
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
        "text": "Daytime sleep after a night shift isn't about willpower. It's about the room and the routine: in bed within an hour, dark enough that you can't see across the room, quiet with earplugs and a masking sound, cool at 16-18C, caffeine stopped six hours before bed, and 7-8 hours protected every day. Get those right and the rest of the block gets easier. To see why the first hours in bed matter most, read [how much deep sleep you need](/resources/how-much-deep-sleep-do-you-need/). If your rota only gives you short sleeps, read [is 6 hours of sleep enough](/resources/is-6-hours-of-sleep-enough/)."
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
        text: "That 3am Red Bull is still in your system when your head hits the pillow. The HSE advises avoiding caffeine, energy drinks and other stimulants a few hours before bedtime. On nights, that means your last caffeine should come well before the end of the shift, not on the drive home. I cover the timing in detail in [how long does caffeine last](/resources/how-long-does-caffeine-last/)." },
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
