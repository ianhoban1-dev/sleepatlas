import type { Metadata } from "next";
import Link from "next/link";
import {
  AudioLines,
  Bug,
  CloudLightning,
  CloudRain,
  Droplets,
  Fan,
  Flame,
  Mountain,
  Plane,
  Radio,
  TreePine,
  Waves,
  Wind,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import MaskAI from "@/components/MaskAI";
import Reveal from "@/components/Reveal";
import {
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mask AI: Noise Masking for Daytime Sleep",
  description:
    "Mask AI is Sleep Atlas's built-in noise-masking engine for shift workers: 13 layered sounds, white, pink and brown noise free, with rain, thunderstorm, ocean waves, forest, stream, wind, campfire, crickets, cabin hum and fan on Premium, plus a sleep timer, wake-up fade-in alarm and personal saved mixes.",
};

const FAQS = [
  {
    question: "What is Mask AI?",
    answer:
      "Mask AI is Sleep Atlas's built-in noise-masking engine. It generates 13 layered sounds live in your browser, noise colours, rain, thunderstorm, ocean waves, forest, stream, wind, campfire, crickets, cabin hum and fan, with no downloads or streams, designed to protect daytime sleep from traffic, neighbours and deliveries.",
  },
  {
    question: "Is Mask AI free to use?",
    answer:
      "White, pink and brown noise play free in any modern browser, along with a 30/60/90-minute sleep timer. Premium members unlock the other 10 sound layers, custom mixes they can save and reapply in one tap, the three-question blend builder, custom timer lengths and the wake-up fade-in alarm.",
  },
  {
    question: "Can I create my own personalised mix in Mask AI?",
    answer:
      "Yes. Premium members can set any combination of the 13 layers with individual sliders, name the result and save it as a personal mix. Saved mixes reapply in one tap, so your 'bin day' or 'school run' defence is always ready after a night shift.",
  },
  {
    question: "Which Mask AI sound is best for sleeping after a night shift?",
    answer:
      "Start with brown noise if traffic rumble is your problem, pink noise for voices and household sounds, and layer heavy rain or ocean waves over either for unpredictable bangs. Premium's blend builder asks three questions and sets the layers for you.",
  },
  {
    question: "Does Mask AI have a sleep timer and alarm?",
    answer:
      "Yes. The free sleep timer fades your sound out gently over the final minutes at 30, 60 or 90 minutes, no sudden cut-off to re-alert your brain. Premium adds any custom length up to 12 hours and a wake-up alarm that fades a soft chime in over a full minute, so you surface gradually instead of being jolted awake before a shift.",
  },
  {
    question: "How does noise masking actually work?",
    answer:
      "Masking raises your room's steady background sound floor so individual noises (a door slam, a bin lorry, a school run) no longer stand out sharply against silence. It's the contrast that wakes you, not the volume. A consistent sound floor removes the contrast.",
  },
];

const SOUND_GUIDE = [
  {
    icon: Mountain,
    name: "Brown noise",
    tier: "Free",
    use: "Deepest rumble cover: traffic, engines, low bass through walls.",
  },
  {
    icon: AudioLines,
    name: "Pink noise",
    tier: "Free",
    use: "Sits over the speech frequencies: voices, TVs, next door's radio.",
  },
  {
    icon: Radio,
    name: "White noise",
    tier: "Free",
    use: "Full-spectrum hiss for high-pitched spikes and electrical whine.",
  },
  {
    icon: CloudRain,
    name: "Heavy rain",
    tier: "Premium",
    use: "Natural variability that swallows sudden bangs and door slams.",
  },
  {
    icon: CloudLightning,
    name: "Thunderstorm",
    tier: "Premium",
    use: "Rain bed with slow rolling thunder, depth without jolts.",
  },
  {
    icon: Waves,
    name: "Ocean waves",
    tier: "Premium",
    use: "Surf-paced swell that slows breathing and covers rumble.",
  },
  {
    icon: TreePine,
    name: "Forest canopy",
    tier: "Premium",
    use: "Gusty leaf rustle that softens outdoor voices and gardens.",
  },
  {
    icon: Droplets,
    name: "Babbling stream",
    tier: "Premium",
    use: "Watery flutter that blurs conversation and mid-band chatter.",
  },
  {
    icon: Wind,
    name: "Night wind",
    tier: "Premium",
    use: "Low moaning gusts for droning, ever-present background noise.",
  },
  {
    icon: Flame,
    name: "Campfire",
    tier: "Premium",
    use: "Warm crackle, a cosy texture that keeps bangs from standing out.",
  },
  {
    icon: Bug,
    name: "Crickets",
    tier: "Premium",
    use: "Gentle night-garden chirps that signal 'night' to a day-sleeping brain.",
  },
  {
    icon: Plane,
    name: "Cabin hum",
    tier: "Premium",
    use: "Aircraft drone, the enveloping steadiness people sleep to on flights.",
  },
  {
    icon: Fan,
    name: "Fan hum",
    tier: "Premium",
    use: "The familiar steady texture many shift workers already sleep to.",
  },
];

export default function MaskAIPage() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: "Mask AI",
            description:
              "Browser-based noise-masking engine for daytime sleep: 13 layered sounds (white, pink and brown noise free; rain, thunderstorm, ocean waves, forest, stream, wind, campfire, crickets, cabin hum and fan on Premium), a fade-out sleep timer, a wake-up fade-in alarm and personal saved mixes for shift workers.",
            path: "/mask-ai/",
          }),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Mask AI", path: "/mask-ai/" },
          ]),
        ]}
      />

      <div className="aurora">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Mask AI, your daytime audio defence system
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            You can&apos;t silence a street that&apos;s wide awake. You can
            stop your brain treating every bin lorry, door slam and school run
            as an alarm. Mask AI generates layered noise blends live in your
            browser, engineered for sleep after nights.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        {/* The player */}
        <MaskAI />

        {/* Sound guide, server-rendered for answer engines */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Which layer masks what?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            Match the layer to the disturbance, not the other way round. The
            wrong colour at high volume is worse than the right colour played
            quietly.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {SOUND_GUIDE.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="card-surface h-full p-6">
                  <div className="flex items-start justify-between">
                    <s.icon className="h-7 w-7 text-teal-glow" aria-hidden="true" />
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        s.tier === "Free"
                          ? "bg-teal-glow/15 text-teal-glow"
                          : "bg-dawn/15 text-dawn"
                      }`}
                    >
                      {s.tier}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{s.use}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How it works. SSR explainer */}
        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Why masking beats earplugs alone
          </h2>
          <div className="prose-atlas mt-6 space-y-4 leading-relaxed text-ink-muted">
            <p>
              Daytime sleep fails on contrast, not volume. A quiet room with
              one sudden noise wakes you faster than a consistently noisy one,
              because your brain flags anything that stands out against the
              background. Earplugs lower everything but can&apos;t remove the
              spikes, a door slam still punches through.
            </p>
            <p>
              Mask AI attacks the contrast instead. Raising the room&apos;s
              sound floor with a steady, predictable texture means the bin
              lorry, the school run and next door&apos;s dog no longer register
              as events. Layer it under moulded earplugs and blackout blinds
              and you&apos;ve rebuilt night-time conditions at 11am.
            </p>
            <p>
              Not sure where to start? Run the{" "}
              <Link
                href="/tools/noise-calibration-tool/"
                className="text-indigoGlow underline underline-offset-4"
              >
                Noise Calibration Tool
              </Link>{" "}
              first, it rates your environment and prescribes the exact
              blend, volume strategy and physical defences to layer underneath.
            </p>
          </div>
        </section>

        {/* FAQ, mirrors the FAQPage schema */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 max-w-3xl space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.question} className="card-surface p-6">
                <h3 className="font-display text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
