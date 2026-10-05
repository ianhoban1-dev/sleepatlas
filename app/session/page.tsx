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
import SoundSession from "@/components/SoundSession";
import Reveal from "@/components/Reveal";
import {
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/lib/schema";
import FaqList from "@/components/FaqList";

export const metadata: Metadata = {
  title: "Try sounds in your browser",
  description:
    "Mix 13 free sleep sounds in your browser, set a sleep timer that fades out and save the mixes you like. Nothing to download. The Sleyp iOS app is coming soon with 22 free library sounds.",
};

const FAQS = [
  {
    question: "What can I do on this page?",
    answer:
      "Mix 13 sounds with simple sliders, from brown, pink and white noise to rain, ocean waves and fans, to cover traffic, neighbours and deliveries while you sleep. Add a sleep timer that fades out, and save the mixes you like. It is free and there is nothing to download.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. All 13 sounds, the sleep timer, the wake-up chime, the three-question blend and saved mixes are free to use in your browser. You don't need an account.",
  },
  {
    question: "Can I save my own mix?",
    answer:
      "Yes. Set the sliders, name the mix and save it. Mixes are saved in this browser on this device, so they won't follow you to another browser or phone, and clearing your browser data removes them. You don't need an account to save a mix.",
  },
  {
    question: "Which sound is best for sleeping after a night shift?",
    answer:
      "Start with brown noise if traffic rumble is your problem, pink noise for voices and household sounds, and add heavy rain or ocean waves for unpredictable bangs. The three-question blend can set a starting mix for you.",
  },
  {
    question: "Is there a sleep timer and a wake-up chime?",
    answer:
      "Yes. The sleep timer fades your sound out gently over the final minutes at 30, 60 or 90 minutes, or any length from 5 minutes to 12 hours. Turn on the wake-up chime and a soft tone builds over a full minute when the timer ends, so you surface gradually instead of being jolted awake before a shift. Keep this page open in your browser: the timer and chime only run while it stays open.",
  },
  {
    question: "How are these sounds different from the Sleyp app?",
    answer:
      "This page generates its 13 sounds live in your browser. The Sleyp iOS app, coming soon, has its own library of 22 sounds, all free to play, and saved mixes without an account. The app's sounds don't play on this page, and sounds with similar names are not identical. Sleyp Plus adds AI mix generation and Discovery in the app.",
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
    use: "Deepest rumble cover: traffic, engines, low bass through walls.",
  },
  {
    icon: AudioLines,
    name: "Pink noise",
    use: "Sits over the speech frequencies: voices, TVs, next door's radio.",
  },
  {
    icon: Radio,
    name: "White noise",
    use: "Full-spectrum hiss for high-pitched spikes and electrical whine.",
  },
  {
    icon: CloudRain,
    name: "Heavy rain",
    use: "Natural variability that swallows sudden bangs and door slams.",
  },
  {
    icon: CloudLightning,
    name: "Thunderstorm",
    use: "Rain bed with slow rolling thunder, depth without jolts.",
  },
  {
    icon: Waves,
    name: "Ocean waves",
    use: "Surf-paced swell that slows breathing and covers rumble.",
  },
  {
    icon: TreePine,
    name: "Forest canopy",
    use: "Gusty leaf rustle that softens outdoor voices and gardens.",
  },
  {
    icon: Droplets,
    name: "Babbling stream",
    use: "Watery flutter that blurs conversation and mid-band chatter.",
  },
  {
    icon: Wind,
    name: "Night wind",
    use: "Low moaning gusts for droning, ever-present background noise.",
  },
  {
    icon: Flame,
    name: "Campfire",
    use: "Warm crackle, a cosy texture that keeps bangs from standing out.",
  },
  {
    icon: Bug,
    name: "Crickets",
    use: "Gentle night-garden chirps that signal 'night' to a day-sleeping brain.",
  },
  {
    icon: Plane,
    name: "Cabin hum",
    use: "Aircraft drone, the enveloping steadiness people sleep to on flights.",
  },
  {
    icon: Fan,
    name: "Fan hum",
    use: "The familiar steady texture many shift workers already sleep to.",
  },
];

export default function SessionPage() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: "Sleyp Session",
            description:
              "A free web app for mixing 13 sleep sounds in your browser: a slider for each sound, a fading sleep timer, a wake-up chime and saved mixes, built for shift workers sleeping through the day.",
            path: "/session/",
          }),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Try sounds", path: "/session/" },
          ]),
        ]}
      />

      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
          <p className="eyebrow eyebrow-rule mb-6">Try sounds</p>
          <h1 className="display-lg">
            Build the room around the sleep
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            You can&apos;t quieten a street that is wide awake. You can stop your
            brain treating every bin lorry, door slam and school run as an
            event. Mix your own sound below, free in your browser with nothing
            to download. Want it on your phone? The Sleyp iOS app is coming
            soon with 22 free library sounds.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-site px-5 pb-24 sm:px-8">
        {/* The player */}
        <SoundSession />

        {/* Sound guide, server-rendered for answer engines */}
        <section className="mt-16">
          <h2 className="display-sm">
            Which sound masks what?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            Match the sound to the disturbance, not the other way round. The
            wrong colour at high volume is worse than the right colour played
            quietly.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {SOUND_GUIDE.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="card-surface h-full p-6">
                  <s.icon className="h-7 w-7 text-sage" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{s.use}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How it works. SSR explainer */}
        <section className="mt-16 max-w-3xl">
          <h2 className="display-sm">
            Why masking beats earplugs alone
          </h2>
          <div className="prose-sleyp mt-6 space-y-4 leading-relaxed text-ink-muted">
            <p>
              Daytime sleep fails on contrast, not volume. A quiet room with
              one sudden noise wakes you faster than a consistently noisy one,
              because your brain flags anything that stands out against the
              background. Earplugs lower everything but can&apos;t remove the
              spikes, a door slam still punches through.
            </p>
            <p>
              Sleyp attacks the contrast instead. Raising the room&apos;s
              sound floor with a steady, predictable texture means the bin
              lorry, the school run and next door&apos;s dog no longer register
              as events. Layer it under moulded earplugs and blackout blinds
              and you&apos;ve rebuilt night-time conditions at 11am.
            </p>
            <p>
              Not sure where to start? Run the{" "}
              <Link
                href="/tools/noise-calibration-tool/"
                className="text-sage underline underline-offset-4"
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
          <h2 className="display-sm">
            Frequently asked questions
          </h2>
          <div className="mt-6 max-w-3xl">
            <FaqList faqs={FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
