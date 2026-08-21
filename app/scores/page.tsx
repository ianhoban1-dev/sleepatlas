import type { Metadata } from "next";
import { Activity, BatteryLow, RefreshCcw, Volume2 } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Sleep Atlas Score: How It Works",
  description:
    "The Sleep Atlas Score is the proprietary scoring framework for non-standard schedules: one overall number built from Rota Adaptation, Noise Impact, Circadian Recovery and Accumulated Sleep Debt.",
};

const SUB_SCORES = [
  {
    icon: RefreshCcw,
    name: "Rota Adaptation Score",
    what: "How well your body clock has settled into your current pattern.",
    inputs: "Shift pattern, rotation speed, chronotype match, consistency of sleep timing.",
  },
  {
    icon: Volume2,
    name: "Noise Impact Score",
    what: "How much your daytime sound environment is degrading your sleep.",
    inputs: "Noise source ratings, masking defences in use, physical room defences.",
  },
  {
    icon: Activity,
    name: "Circadian Recovery Score",
    what: "How effectively you transition between shift blocks and days off.",
    inputs: "Flip-flop discipline, light exposure timing, anchor sleep usage, meal timing.",
  },
  {
    icon: BatteryLow,
    name: "Accumulated Sleep Debt Score",
    what: "The gap between the sleep you need and the sleep you're banking.",
    inputs: "Logged sleep vs personal requirement across your rolling shift block.",
  },
];

const FAQS = [
  {
    question: "What is the Sleep Atlas Score?",
    answer:
      "The Sleep Atlas Score is a single 0–100 number that tells a shift worker how well they're coping with their rota. It combines four sub-scores: Rota Adaptation, Noise Impact, Circadian Recovery and Accumulated Sleep Debt, each built from quick practical inputs rather than wearables or lab data.",
  },
  {
    question: "How is the Sleep Atlas Score different from a sleep tracker score?",
    answer:
      "Wearable scores assume a normal night sleeper and judge you against a 10pm–6am world. The Sleep Atlas Score is built for non-standard schedules: it knows a 6-hour day-sleep after a night shift is a different achievement from a 6-hour night sleep, and scores you against your rota's reality.",
  },
  {
    question: "How do I improve my Sleep Atlas Score?",
    answer:
      "Each sub-score maps to a tool: fix Noise Impact with the Noise Calibration Tool and Mask AI; fix Circadian Recovery with the Rota Flip-Flop Calculator; fix Sleep Debt with the logger and recovery naps; and improve Rota Adaptation by matching tactics to your chronotype.",
  },
];

export default function ScoresPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Scores", path: "/scores/" },
          ]),
        ]}
      />
      <div className="aurora">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            One number for surviving your rota
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Fitness apps score your sleep as if you work 9-to-5. The Sleep
            Atlas Score is built for the rest of us, a 0–100 measure of how
            well you&apos;re actually coping with non-standard hours, built
            from four practical sub-scores you can influence this week.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {SUB_SCORES.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="card-surface h-full p-7">
                <s.icon className="h-8 w-8 text-indigoGlow" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl font-semibold">{s.name}</h2>
                <p className="mt-2 leading-relaxed text-ink-muted">{s.what}</p>
                <p className="mt-3 text-sm text-ink-faint">
                  <span className="font-medium text-ink-muted">Built from:</span> {s.inputs}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <section className="prose-atlas mt-16 max-w-3xl">
          <h2>How the overall score works</h2>
          <p>
            Your overall Sleep Atlas Score is a weighted blend of the four
            sub-scores, with Accumulated Sleep Debt carrying the heaviest
            weight, because debt is the component that turns into a safety
            problem fastest. Quick inputs across the tools and trackers keep
            each sub-score current; nothing requires a wearable.
          </p>
          <p>
            Free members see their live score. Premium members get the
            history: score trends across rota blocks, fatigue projections for
            upcoming shifts, and the reports that show whether a new defence
            (blackout upgrade, noise blend, flip-flop routine) actually moved
            the number.
          </p>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-5">
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
