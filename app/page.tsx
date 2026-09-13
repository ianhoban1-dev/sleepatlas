import type { Metadata } from "next";
import Link from "next/link";
import {
  BatteryCharging,
  CalendarClock,
  Compass,
  Gauge,
  RefreshCcw,
  Volume2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import RotaVisualizer from "@/components/RotaVisualizer";
import JsonLd from "@/components/JsonLd";
import FieldMark, { FieldWordmark } from "@/components/FieldMark";
import { faqSchema } from "@/lib/schema";
import { SITE, FOUNDER } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "FIELD — Your personal soundscape",
  description:
    "FIELD builds a sound field around the room you actually sleep in. Thirteen layered sounds generated live in your browser, a timer that fades rather than stops, and tools built on forty years of shift work.",
};

const HOME_FAQS = [
  {
    question: "What is FIELD?",
    answer:
      "FIELD is a sound and sleep-environment tool for people whose sleep is hard-won. It generates thirteen layered sounds live in your browser, mixes them into a sound field tuned to your room, and fades out on a timer instead of stopping dead. Alongside it sit calculators and trackers built for rotating and night rotas.",
  },
  {
    question: "Who is FIELD for?",
    answer:
      "Anyone sleeping against the clock: 4-on/4-off patterns, rotating days and nights, permanent nights, early starts, splits and on-call rotas, from prison officers and nurses to warehouse, factory and logistics crews. It works just as well for anyone on a loud street.",
  },
  {
    question: "Is FIELD free?",
    answer:
      "White, pink and brown noise, the basic timer, every calculator and the whole resource hub are free and stay free. Premium adds ten more sound layers, personal saved mixes, a custom timer with a wake-up fade-in, saved tracking data and historical FIELD Score reporting.",
  },
];

const toolIcons = [CalendarClock, RefreshCcw, BatteryCharging, Volume2, Compass];

const LAYER_PREVIEW = [
  { name: "Rain, steady", level: 72 },
  { name: "Brown noise", level: 48 },
  { name: "Cabin hum", level: 31 },
  { name: "Wind, distant", level: 18 },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* ---- Hero: the mark settles, then the promise. Nothing else competes. ---- */}
      <section className="field-wash relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-28">
          <div className="max-w-3xl">
            <FieldMark
              settle
              className="h-16 w-auto text-sage sm:h-20"
              title="FIELD"
            />
            <h1 className="mt-9 animate-fade-up font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-[3.75rem]">
              Your personal soundscape.
            </h1>
            <p className="mt-7 max-w-xl text-lg font-light leading-relaxed text-ink-muted">
              Daytime sleep fails for a reason you can hear. FIELD builds a
              sound field around the room you actually sleep in, so the bin
              lorry, the letterbox and the neighbour&apos;s drill stop arriving
              as events.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/session/" className="btn-primary px-6 py-3.5 text-base">
                Start a session
              </Link>
              <Link href="/tools/" className="btn-secondary px-6 py-3.5 text-base">
                See the tools
              </Link>
            </div>
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-faint">
              Thirteen layers
              <span aria-hidden="true">·</span>
              Nothing to download
              <span aria-hidden="true">·</span>
              Core sounds free forever
            </p>
          </div>
        </div>
      </section>

      {/* ---- The session. The product leads. ---- */}
      <section className="border-y border-ink/[0.07] bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <Reveal>
            <div>
              <p className="eyebrow">The session</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                Build the room around the sleep
              </h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                The street doesn&apos;t care that you finished at 7am. FIELD
                masks traffic, neighbours and deliveries with thirteen sounds
                generated live in your browser — brown noise and heavy rain
                through to ocean, forest and campfire. Mix them, save the mix,
                and set a timer that fades out rather than stopping dead.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Premium adds a blend tuned to your street by three quick
                questions, and a wake-up fade-in that lifts you instead of
                jolting you.
              </p>
              <Link href="/session/" className="btn-primary mt-7 px-6 py-3.5 text-base">
                Start a session
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-surface overflow-hidden">
              <div className="flex items-center gap-3 border-b border-ink/[0.07] px-6 py-4">
                <FieldMark className="h-3.5 w-auto text-sage" />
                <span className="eyebrow">Afternoon, quiet street</span>
              </div>
              <div className="px-6 py-7">
                <div
                  className="mx-auto flex h-16 items-end justify-center gap-1.5"
                  aria-hidden="true"
                >
                  {[42, 68, 55, 90, 74, 100, 62, 84, 48, 72, 58, 38].map((h, i) => (
                    <span
                      key={i}
                      className={`w-2 origin-bottom animate-equalize rounded-full ${
                        i % 3 === 1 ? "bg-sage" : "bg-soft"
                      }`}
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.13}s`,
                        animationDuration: `${1.4 + (i % 4) * 0.35}s`,
                      }}
                    />
                  ))}
                </div>
                <ul className="mt-7 border-t border-ink/[0.07]">
                  {LAYER_PREVIEW.map((layer) => (
                    <li
                      key={layer.name}
                      className="grid grid-cols-[1fr_88px_44px] items-center gap-4 border-b border-ink/[0.05] py-3"
                    >
                      <span className="font-display text-sm">{layer.name}</span>
                      <span className="h-[3px] overflow-hidden rounded-full bg-soft">
                        <span
                          className="block h-full rounded-full bg-sage"
                          style={{ width: `${layer.level}%` }}
                        />
                      </span>
                      <span className="tabular text-right font-mono text-xs text-ink-faint">
                        {layer.level}%
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-ink-faint">
                  An example mix, shown to illustrate the layout.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Founder: the reason FIELD is credible, not the subject ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="eyebrow">Where this comes from</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
              Forty years on the shift floor
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted">{FOUNDER.bio}</p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              FIELD exists because advice written for 9-to-5 sleepers collapses
              on contact with a 4-on/4-off rota. Everything here was tested
              where it counts: on the landings, on the line, and on the drive
              home at dawn.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-2">
            <ul className="card-surface space-y-4 p-6">
              {FOUNDER.roles.map((role) => (
                <li key={role.org} className="flex items-start gap-3">
                  <span className="mt-2.5 h-px w-4 shrink-0 bg-sage" aria-hidden="true" />
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

      {/* ---- Rota visualiser: supporting, not leading ---- */}
      <section className="border-t border-ink/[0.07] bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow">Before the room, the rota</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                What is your rota doing to you?
              </h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Every shift pattern hits the body clock differently. Pick yours
                and see the baseline impact, rota adaptation, typical weekly
                sleep debt and fatigue risk — before any countermeasures.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <RotaVisualizer />
          </Reveal>
        </div>
      </section>

      {/* ---- Tools ---- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <p className="eyebrow">The tools</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Specialist tools, not generic advice
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            Five calculators engineered for the realities of shift work:
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
                  <Icon className="h-7 w-7 text-sage" aria-hidden="true" />
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
                  <span className="mt-4 inline-block text-sm font-medium text-sage-deep">
                    Open calculator →
                  </span>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={300}>
            <Link
              href="/scores/"
              className="card-surface card-hover block h-full bg-soft/40 p-6"
            >
              <Gauge className="h-7 w-7 text-sand-ink" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                The FIELD Score
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                One number for how well you&apos;re surviving your rota, built
                from adaptation, noise, recovery and debt.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-sand-ink">
                How it works →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- Gear ---- */}
      <section className="border-t border-ink/[0.07] bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <Reveal>
            <p className="eyebrow">The shop</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
              The kit that earns its place
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
              Blackout blinds, moulded earplugs, sleep masks and noise
              machines, chosen for people who sleep days — not for gadget
              lovers.
            </p>
            <Link href="/shop/" className="btn-secondary mt-6 px-6 py-3.5 text-base">
              Browse the marketplace
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- FAQ (server-rendered, matches schema) ---- */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-3xl font-medium tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-4">
          {HOME_FAQS.map((faq) => (
            <div key={faq.question} className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Sign-off: the wordmark, quiet ---- */}
      <section className="border-t border-ink/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-16 sm:px-6">
          <FieldMark className="h-8 w-auto text-sage" />
          <FieldWordmark className="h-5 w-auto text-ink" />
          <p className="text-sm text-ink-faint">{SITE.tagline}</p>
        </div>
      </section>
    </>
  );
}
