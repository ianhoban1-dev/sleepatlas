import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing: Free Tools & Premium Fatigue Intelligence",
  description:
    "Sleep Atlas core calculators, resources and Mask AI's core noise layers are free. Premium adds 10 extra Mask AI sound layers, personal saved mixes, the wake-up fade-in alarm, saved tracking, advanced fatigue projections and historical Sleep Atlas Score reporting.",
};

const FREE = [
  "All five rota & recovery calculators",
  "Mask AI white, pink & brown noise",
  "Sleep timer with gentle fade-out (30/60/90 min)",
  "Shift journal (this browser)",
  "Full resource hub access",
  "Live Sleep Atlas Score",
];

const PREMIUM = [
  "Everything in Free",
  "10 extra Mask AI layers, rain, thunderstorm, ocean waves, forest, stream, wind, campfire, crickets, cabin hum & fan",
  "Personal mixes, save any layer combination, reapply in one tap",
  "Personal blend questionnaire, tuned to your street",
  "Custom timer lengths + wake-up fade-in alarm",
  "Saved shift profiles & rota patterns",
  "Advanced fatigue projections for upcoming blocks",
  "Historical Sleep Atlas Score reporting",
];

const FAQS = [
  {
    question: "How much does Sleep Atlas Premium cost?",
    answer:
      "Premium launches at £4.99/month or £39/year. Founding members who join the early-access list lock the launch price permanently.",
  },
  {
    question: "Do I need Premium to use the calculators?",
    answer:
      "No. Every calculator, the resource hub, Mask AI's white, pink and brown noise and the basic sleep timer are free forever. Premium unlocks the other 10 sound layers, personal saved mixes, the blend questionnaire, the wake-up fade-in alarm, and saved data projected forwards over time.",
  },
  {
    question: "Can I cancel Sleep Atlas Premium anytime?",
    answer:
      "Yes, subscriptions are managed through Stripe and can be cancelled in one click from your account. You keep Premium until the end of the paid period.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing/" },
          ]),
        ]}
      />
      <div className="aurora">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Free to survive. Premium to master.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            The tools that keep you safe stay free. Premium is for turning
            months of shift data into foresight.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-surface h-full p-8">
              <h2 className="font-display text-2xl font-semibold">Free</h2>
              <p className="mt-2 font-display text-4xl font-bold">
                £0
                <span className="text-base font-normal text-ink-faint"> forever</span>
              </p>
              <ul className="mt-6 space-y-3">
                {FREE.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-teal-glow" aria-hidden="true" />
                    <span className="text-ink-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/tools/"
                className="mt-8 block rounded-xl border border-white/15 px-6 py-3.5 text-center font-semibold text-ink transition-colors hover:border-indigoGlow/50 hover:bg-white/[0.04]"
              >
                Start with the tools
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-surface relative h-full border-indigoGlow/40 bg-gradient-to-br from-night-800 to-indigoGlow-deep/20 p-8 shadow-glow">
              <span className="absolute -top-3 right-6 rounded-full bg-dawn px-3 py-1 text-xs font-bold uppercase tracking-wider text-night-950">
                Launching soon
              </span>
              <h2 className="font-display text-2xl font-semibold">Premium</h2>
              <p className="mt-2 font-display text-4xl font-bold">
                £4.99
                <span className="text-base font-normal text-ink-faint">
                  /month · £39/year
                </span>
              </p>
              <ul className="mt-6 space-y-3">
                {PREMIUM.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-indigoGlow-soft" aria-hidden="true" />
                    <span className="text-ink-muted">{f}</span>
                  </li>
                ))}
              </ul>
              {/* Stripe checkout replaces this link once keys are added */}
              <Link
                href="/account/"
                className="mt-8 block w-full rounded-xl bg-indigoGlow px-6 py-3.5 text-center font-semibold text-night-950 transition-all duration-200 hover:bg-indigoGlow-soft hover:shadow-glow"
                aria-describedby="premium-note"
              >
                Become a founding member
              </Link>
              <p id="premium-note" className="mt-3 text-center text-xs text-ink-faint">
                Payments open at launch, founding members activate Premium
                free now and lock this price for life.
              </p>
            </div>
          </Reveal>
        </div>

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
