import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import RotaVisualizer from "@/components/RotaVisualizer";
import JsonLd from "@/components/JsonLd";
import AppCta from "@/components/AppCta";
import SleypMark from "@/components/SleypMark";
import SessionPreview from "@/components/SessionPreview";
import ToolBento from "@/components/ToolBento";
import WaveLines from "@/components/WaveLines";
import FaqList from "@/components/FaqList";
import { faqSchema } from "@/lib/schema";
import { FOUNDER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sleyp | Your Sleep Environment: Personalised Sleep Sounds",
  description:
    "Sleyp is a sleep sound app for people whose sleep is hard-won. Try free sounds in your browser today, with the iOS app coming soon, plus shift-work tools built on forty years of experience.",
};

const HOME_FAQS = [
  {
    question: "What is Sleyp?",
    answer:
      "Sleyp helps you sleep against the noise. Mix sounds like brown noise, rain and ocean waves, set a timer that fades out, and save the mixes that work for your room. You can try it free in your browser today, and the Sleyp iOS app is coming soon. Alongside it sit calculators and trackers built for rotating and night rotas.",
  },
  {
    question: "Who is Sleyp for?",
    answer:
      "Anyone sleeping against the clock: 4-on/4-off patterns, rotating days and nights, permanent nights, early starts, splits and on-call rotas, from prison officers and nurses to warehouse, factory and logistics crews. It works just as well for anyone on a loud street.",
  },
  {
    question: "Is Sleyp free?",
    answer:
      "Yes. The browser version, every calculator and the whole resource hub are free. The Sleyp iOS app is coming soon with 22 free library sounds and saved mixes without an account. Sleyp Plus adds AI mix generation and Discovery.",
  },
  {
    question: "Is there a Sleyp app?",
    answer:
      "The Sleyp iOS app is coming soon to the App Store, with 22 free library sounds, saved mixes without an account, and Sleyp Plus for AI mix generation and Discovery. Until then, you can try Sleyp free in your browser.",
  },
  {
    question: "Are the browser sounds the same as the app's?",
    answer:
      "No. The browser version has 13 sounds generated live in your browser. The app has its own library of 22 sounds. The app's sounds don't play on the website, and sounds with similar names are not identical.",
  },
];

const PRINCIPLES = [
  {
    n: "13",
    title: "Sounds to mix",
    body: "Brown, pink and white noise through to rain, ocean, forest and campfire, mixed live in your browser. Free, with nothing to download.",
  },
  {
    n: "0",
    title: "Hard stops",
    body: "The timer fades out rather than cutting to silence, so the end of the sound never becomes the thing that wakes you.",
  },
  {
    n: "22",
    title: "Free sounds in the app",
    body: "The Sleyp iOS app is coming soon with 22 free library sounds and saved mixes, even without an account.",
  },
];

const SESSION_POINTS = [
  "Brown, pink and white noise, plus rain, ocean, forest, campfire and more",
  "A slider for each of the 13 sounds, so you set the mix",
  "Save mixes in this browser and bring them back after every shift",
  "A sleep timer that fades out, with an optional wake-up chime",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* ---- Hero: the promise on the left, the product on the right ---- */}
      <section className="atmosphere relative">
        <WaveLines className="top-1/3 h-[70%] opacity-70" />
        <div className="shell grid items-center gap-16 pb-24 pt-14 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-32 lg:pt-24">
          <div>
            <SleypMark settle className="h-11 w-auto text-sage" title="Sleyp" />
            <p className="rise rise-1 mt-8">
              <Link href="/#app" className="pill transition-colors hover:border-sage/40 hover:text-ink">
                <span className="pill-dot" />
                The Sleyp iOS app is coming soon
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </p>
            <h1 className="display-xl rise rise-2 mt-6">
              Your sleep
              <br />
              <em>environment.</em>
            </h1>
            <p className="lede rise rise-3 mt-7 max-w-xl">
              A personalised sound environment, built around the room you
              actually sleep in, so the bin lorry, the letterbox and the
              neighbour&apos;s drill stop arriving as events.
            </p>
            <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-3">
              <Link href="/session/" className="btn-primary btn-lg">
                Try Sleyp free
                <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
              <Link href="/tools/" className="btn-secondary btn-lg">
                Explore the tools
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-faint">
              {["Free in your browser", "Nothing to download", "iOS app coming soon"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sage" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <SessionPreview className="mx-auto w-full max-w-xl lg:mr-0" />
        </div>
      </section>

      {/* ---- Credentials: where the know-how was earned ---- */}
      <section aria-label="Founder background" className="border-y border-ink/[0.07] bg-paper/70">
        <div className="shell flex flex-col items-center gap-5 py-9 md:flex-row md:justify-between">
          <p className="eyebrow shrink-0">Forty years on the shift floor</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-end">
            {FOUNDER.roles.map((role) => (
              <li key={role.org} className="font-serif text-xl text-ink-muted md:text-2xl">
                {role.org}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- The idea, said once, large ---- */}
      <section className="shell section-y">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow eyebrow-rule">Why Sleyp exists</p>
          <h2 className="display-md mt-6">
            The street doesn&apos;t care that you finished at 7am.{" "}
            <span className="text-ink-faint">
              Sleyp builds the room around the sleep, not the sleep around
              the room.
            </span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-px overflow-hidden rounded-panel border border-ink/[0.08] bg-ink/[0.08] md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="bg-cream p-8 md:p-10">
              <p className="tabular font-serif text-6xl leading-none text-sage-deep">{p.n}</p>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- The session, on the dark surface: the product leads ---- */}
      <section className="on-deep relative isolate overflow-hidden">
        <WaveLines tone="cream" className="opacity-100" />
        <div className="shell section-y grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow eyebrow-rule">Try sounds</p>
            <h2 className="display-lg mt-5">
              Build the room around <em>the sleep.</em>
            </h2>
            <p className="lede mt-6 max-w-lg">
              Mix 13 sounds, save the mix, and set a timer that fades
              out rather than stopping dead. Free in your browser, with
              nothing to download.
            </p>
            <Link href="/session/" className="btn-light btn-lg mt-9">
              Try sounds
              <ArrowRight className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ul className="panel-deep divide-y divide-cream/10">
              {SESSION_POINTS.map((point, i) => (
                <li key={point} className="flex gap-5 p-6">
                  <span className="tabular font-mono text-xs text-sand">0{i + 1}</span>
                  <span className="leading-relaxed text-cream/90">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---- Rota visualiser ---- */}
      <section className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow eyebrow-rule">Before the room, the rota</p>
            <h2 className="display-md mt-5">
              What is your rota <em>doing to you?</em>
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Every shift pattern hits the body clock differently. Pick yours
              and see the baseline impact, rota adaptation, typical weekly
              sleep debt and fatigue risk, before any countermeasures.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <RotaVisualizer />
          </Reveal>
        </div>
      </section>

      {/* ---- Tools, as a bento ---- */}
      <section className="border-t border-ink/[0.07] bg-paper/60">
        <div className="shell section-y">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-rule">The tools</p>
              <h2 className="display-md mt-5">
                Specialist tools, <em>not generic advice.</em>
              </h2>
              <p className="mt-5 leading-relaxed text-ink-muted">
                Five calculators engineered for the realities of shift work:
                commutes, caffeine timing, flip-flop weekends, noisy daytime
                streets and mismatched body clocks.
              </p>
            </div>
            <Link href="/tools/" className="link-arrow shrink-0">
              All tools <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <ToolBento />
          </Reveal>
        </div>
      </section>

      {/* ---- Founder, editorial ---- */}
      <section className="shell section-y">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow eyebrow-rule">Where this comes from</p>
            <blockquote className="mt-6">
              <p className="display-md">
                &ldquo;Advice written for 9-to-5 sleepers collapses on contact
                with a <em className="whitespace-nowrap">4-on/4-off</em> <em>rota.</em>&rdquo;
              </p>
              <footer className="mt-6 font-display text-sm text-ink-faint">
                {FOUNDER.displayName}, {FOUNDER.yearsOfShiftWork} years of shift work
              </footer>
            </blockquote>
            <p className="mt-10 max-w-2xl leading-relaxed text-ink-muted">{FOUNDER.bio}</p>
          </Reveal>
          <Reveal delay={120}>
            <ol className="relative space-y-8 border-l border-ink/10 pl-8">
              {FOUNDER.roles.map((role) => (
                <li key={role.org} className="relative">
                  <span
                    className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-sage ring-4 ring-cream"
                    aria-hidden="true"
                  />
                  {role.period && (
                    <p className="tabular font-mono text-xs text-ink-faint">{role.period}</p>
                  )}
                  <p className="mt-1 font-serif text-2xl leading-tight text-ink">{role.org}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{role.role}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ---- Shop and app, as a pair ---- */}
      <section id="app" className="shell scroll-mt-24 pb-20 md:pb-28">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="card-surface flex h-full flex-col p-8 md:p-10">
              <p className="eyebrow eyebrow-rule">The shop</p>
              <h2 className="display-sm mt-5">The kit that earns its place</h2>
              <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
                Blackout blinds, moulded earplugs, sleep masks and noise
                machines, chosen for people who sleep days, not for gadget
                lovers.
              </p>
              <ul className="mb-10 mt-8 flex flex-wrap gap-2">
                {["Blackout blinds", "Moulded earplugs", "Sleep masks", "Noise machines"].map((k) => (
                  <li key={k} className="rounded-full bg-mist px-3.5 py-1.5 font-display text-xs font-medium text-ink-muted">
                    {k}
                  </li>
                ))}
              </ul>
              <Link href="/shop/" className="btn-secondary btn-lg mt-auto self-start">
                Browse the marketplace
                <ArrowRight className="arrow" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="on-deep relative isolate flex h-full flex-col overflow-hidden rounded-soft p-8 md:p-10">
              <WaveLines tone="cream" lines={6} animate={false} />
              <p className="eyebrow eyebrow-rule">The app</p>
              <h2 className="display-sm mt-5">Take Sleyp with you</h2>
              <p className="mt-4 max-w-md leading-relaxed text-deep-haze">
                The Sleyp iOS app is coming soon with 22 free library sounds
                and saved mixes, even without an account. Sleyp Plus adds AI
                mix generation and Discovery. Try Sleyp free in your browser
                while you wait.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                <Link href="/session/" className="btn-light btn-lg">
                  Try Sleyp free
                  <ArrowRight className="arrow" aria-hidden="true" />
                </Link>
                <AppCta className="!text-deep-haze" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- FAQ (server-rendered, matches schema) ---- */}
      <section className="border-t border-ink/[0.07]">
        <div className="shell section-y grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow eyebrow-rule">Questions</p>
            <h2 className="display-md mt-5">
              Frequently asked <em>questions</em>
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-muted">
              Straight answers about what Sleyp is, who it is for and what
              stays free.
            </p>
          </div>
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>

      {/* ---- Closing band ---- */}
      <section className="shell pb-24 md:pb-32">
        <div className="on-deep relative isolate overflow-hidden rounded-panel px-6 py-20 text-center md:px-16 md:py-28">
          <WaveLines tone="cream" />
          <SleypMark className="mx-auto h-10 w-auto text-sand" />
          <h2 className="display-lg mx-auto mt-8 max-w-3xl">
            Your sleep. Your sound. <em>Your mix.</em>
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl">
            Free in your browser, tonight. Nothing to download, no account
            needed.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/session/" className="btn-light btn-lg">
              Try Sleyp free
              <ArrowRight className="arrow" aria-hidden="true" />
            </Link>
            <Link href="/pricing/" className="btn-ghost-light btn-lg">
              What&apos;s in the app
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
