import type { Metadata } from "next";
import Link from "next/link";
import {
  AudioLines,
  BatteryCharging,
  CalendarClock,
  Compass,
  Gauge,
  Headphones,
  Moon,
  RefreshCcw,
  ShieldCheck,
  Volume2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import RotaVisualizer from "@/components/RotaVisualizer";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { SITE, FOUNDER } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Sleep Atlas — Sleep Intelligence for Shift Workers & Night Workers",
  description:
    "Master your rota, eliminate shift fatigue and reclaim your sleep. Calculators, sleep debt trackers, the Mask AI noise-masking engine and 40 years of real shift-floor experience — built exclusively for shift and night workers.",
};

const HOME_FAQS = [
  {
    question: "What is Sleep Atlas?",
    answer:
      "Sleep Atlas is a sleep intelligence and fatigue management platform built exclusively for shift workers, night workers and rotating rota professionals. It combines rota calculators, sleep debt tracking, the Mask AI noise-masking engine and practical guidance drawn from 40 years of real shift work.",
  },
  {
    question: "Who is Sleep Atlas for?",
    answer:
      "Anyone working non-traditional hours: 4-on/4-off patterns, rotating days and nights, permanent nights, early starts, splits and on-call rotas — from prison officers and nurses to warehouse, factory and logistics crews.",
  },
  {
    question: "Is Sleep Atlas free?",
    answer:
      "The core calculators, resource articles, Mask AI's white, pink and brown noise and the basic sleep timer are free. Premium adds 10 extra Mask AI sound layers, personal saved mixes, the wake-up fade-in alarm, saved tracking data, advanced fatigue projections and historical Sleep Atlas Score reporting.",
  },
];

const toolIcons = [CalendarClock, RefreshCcw, BatteryCharging, Volume2, Compass];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* ---- Hero ---- */}
      <section className="aurora relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigoGlow/30 bg-indigoGlow/10 px-4 py-1.5 text-sm text-indigoGlow-soft">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Built on 40 years of real shift work
            </p>
            <h1 className="animate-fade-up font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Master your rota.{" "}
              <span className="bg-gradient-to-r from-indigoGlow via-indigoGlow-soft to-teal-glow bg-clip-text text-transparent">
                Eliminate shift fatigue.
              </span>{" "}
              Reclaim your sleep.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {SITE.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tools/"
                className="rounded-xl bg-indigoGlow px-6 py-3.5 font-semibold text-night-950 transition-all duration-200 hover:bg-indigoGlow-soft hover:shadow-glow"
              >
                Explore the tools
              </Link>
              <Link
                href="/mask-ai/"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-ink transition-colors duration-200 hover:border-indigoGlow/50 hover:bg-white/[0.04]"
              >
                Try Mask AI noise masking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Rota visualizer ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              What is your rota doing to you?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Every shift pattern hits the body clock differently. Pick yours
              and see the baseline impact — rota adaptation, typical weekly
              sleep debt and fatigue risk — before any countermeasures are
              applied. Then use the tools below to fight back.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <RotaVisualizer />
        </Reveal>
      </section>

      {/* ---- Bento grid of tools ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Specialist tools, not generic advice
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            Five calculators engineered for the realities of shift work —
            commutes, caffeine timing, flip-flop weekends, noisy daytime
            streets and mismatched body clocks.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => {
            const Icon = toolIcons[i % toolIcons.length];
            return (
              <Reveal key={tool.slug} delay={i * 60}>
                <Link
                  href={`/tools/${tool.slug}/`}
                  className={`card-surface card-hover block h-full p-6 ${
                    i === 0 ? "lg:row-span-2" : ""
                  }`}
                >
                  <Icon className="h-8 w-8 text-indigoGlow" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {tool.tagline}
                  </p>
                  {i === 0 && (
                    <p className="mt-4 hidden text-sm leading-relaxed text-ink-muted lg:block">
                      {tool.description}
                    </p>
                  )}
                  <span className="mt-4 inline-block text-sm font-medium text-indigoGlow">
                    Open calculator →
                  </span>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={300}>
            <Link
              href="/scores/"
              className="card-surface card-hover block h-full bg-gradient-to-br from-night-800 to-indigoGlow-deep/20 p-6"
            >
              <Gauge className="h-8 w-8 text-dawn" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                The Sleep Atlas Score
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                One number that tells you how well you&apos;re surviving your
                rota — built from adaptation, noise, recovery and debt.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-dawn">
                How it works →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- Mask AI feature ---- */}
      <section className="border-y border-white/[0.06] bg-night-900">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <Reveal>
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-glow/30 bg-teal-glow/10 px-4 py-1.5 text-sm text-teal-glow">
                <Headphones className="h-4 w-4" aria-hidden="true" />
                Built-in audio engine
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Mask AI — your daytime audio defence system
              </h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                The street doesn&apos;t care that you finished at 7am. Mask AI
                masks daytime traffic, neighbours and deliveries with 13
                layered sounds — generated live in your browser — from brown
                noise and heavy rain to ocean waves, forest and campfire.
                Premium adds personal saved mixes, a blend tuned to your
                street by three quick questions, and a wake-up alarm that
                fades in gently instead of jolting you awake.
              </p>
              <Link
                href="/mask-ai/"
                className="mt-6 inline-block rounded-xl bg-teal-glow px-6 py-3.5 font-semibold text-night-950 transition-all duration-200 hover:opacity-90"
              >
                Open Mask AI
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-surface flex items-center justify-center p-10">
              <div className="text-center">
                <AudioLines
                  className="mx-auto h-20 w-20 animate-pulse-slow text-teal-glow"
                  aria-hidden="true"
                />
                <p className="mt-4 font-display text-lg font-semibold">
                  13 layers · Personal mixes · Sleep timer · Wake-up fade-in
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Plays free in your browser at{" "}
                  <span className="text-ink">/mask-ai/</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Founder authority ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Forty years on the shift floor. Not a theory in sight.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted">{FOUNDER.bio}</p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Sleep Atlas exists because the advice written for 9-to-5 sleepers
              collapses on contact with a 4-on/4-off rota. Everything here has
              been tested where it counts: on the landings, on the line, and on
              the drive home at dawn.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-2">
            <ul className="card-surface space-y-4 p-6">
              {FOUNDER.roles.map((role) => (
                <li key={role.org} className="flex items-start gap-3">
                  <Moon className="mt-1 h-4 w-4 shrink-0 text-indigoGlow" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">
                      {role.org}
                      {role.period && (
                        <span className="ml-2 text-sm font-normal text-ink-faint">
                          {role.period}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-ink-muted">{role.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---- Gear highlights ---- */}
      <section className="border-t border-white/[0.06] bg-night-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              The kit that earns its place
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
              Curated daytime-sleep gear — blackout blinds, moulded earplugs,
              sleep masks and noise machines — chosen for shift workers, not
              gadget lovers.
            </p>
            <Link
              href="/shop/"
              className="mt-6 inline-block rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-ink transition-colors duration-200 hover:border-indigoGlow/50 hover:bg-white/[0.04]"
            >
              Browse the marketplace
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- FAQ (server-rendered, matches schema) ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-6">
          {HOME_FAQS.map((faq) => (
            <div key={faq.question} className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
