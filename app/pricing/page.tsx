import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import FaqList from "@/components/FaqList";

export const metadata: Metadata = {
  title: "Pricing: Free Tools & Premium Fatigue Intelligence",
  description:
    "Sleyp's calculators, resources and core noise layers are free. Premium adds 10 extra sound layers, personal saved mixes, the wake-up fade-in alarm, saved tracking, advanced fatigue projections and historical Sleyp Score reporting.",
};

const FREE = [
  "All five rota & recovery calculators",
  "White, pink & brown noise",
  "Sleep timer with gentle fade-out (30/60/90 min)",
  "Shift journal (this browser)",
  "Full resource hub access",
  "Live Sleyp Score",
];

const PREMIUM = [
  "Everything in Free",
  "10 extra sound layers, rain, thunderstorm, ocean waves, forest, stream, wind, campfire, crickets, cabin hum & fan",
  "Personal mixes, save any layer combination, reapply in one tap",
  "Personal blend questionnaire, tuned to your street",
  "Custom timer lengths + wake-up fade-in alarm",
  "Saved shift profiles & rota patterns",
  "Advanced fatigue projections for upcoming blocks",
  "Historical Sleyp Score reporting",
];

const FAQS = [
  {
    question: "How much does Sleyp Premium cost?",
    answer:
      "Premium launches at £4.99/month or £39/year. Founding members who join the early-access list lock the launch price permanently.",
  },
  {
    question: "Do I need Premium to use the calculators?",
    answer:
      "No. Every calculator, the resource hub, the white, pink and brown noise layers and the basic sleep timer are free forever. Premium unlocks the other 10 sound layers, personal saved mixes, the blend questionnaire, the wake-up fade-in alarm, and saved data projected forwards over time.",
  },
  {
    question: "Can I cancel Sleyp Premium anytime?",
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
      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 text-center sm:px-8 md:py-24">
          <p className="eyebrow eyebrow-rule mb-6">Pricing</p>
          <h1 className="display-lg">
            Free to sleep. Premium to tune it.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            What keeps you safe stays free. Premium is for the extra layers,
            the saved mixes, and the months of shift data behind them.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-surface flex h-full flex-col p-8 md:p-10">
              <h2 className="font-display text-xl font-semibold">Free</h2>
              <p className="mt-4 font-serif text-6xl leading-none">
                £0
                <span className="ml-1 font-body text-base text-ink-faint">forever</span>
              </p>
              <ul className="mb-10 mt-8 space-y-3">
                {FREE.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-good" aria-hidden="true" />
                    <span className="text-ink-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/tools/"
                className="btn-secondary btn-lg mt-auto w-full"
              >
                Start with the tools
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="on-deep relative flex h-full flex-col rounded-soft p-8 shadow-frame md:p-10">
              <span className="absolute right-6 top-6 rounded-full bg-sand px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-deep">
                Launching soon
              </span>
              <h2 className="font-display text-xl font-semibold text-cream">Premium</h2>
              <p className="mt-4 font-serif text-6xl leading-none text-cream">
                £4.99
                <span className="ml-1 font-body text-base text-deep-haze">
                  /month · £39/year
                </span>
              </p>
              <ul className="mb-10 mt-8 space-y-3">
                {PREMIUM.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
                    <span className="text-cream/90">{f}</span>
                  </li>
                ))}
              </ul>
              {/* Stripe checkout replaces this link once keys are added */}
              <Link
                href="/account/"
                className="btn-light btn-lg mt-auto w-full"
                aria-describedby="premium-note"
              >
                Become a founding member
              </Link>
              <p id="premium-note" className="mt-3 text-center text-xs text-deep-haze">
                Payments open at launch, founding members activate Premium
                free now and lock this price for life.
              </p>
            </div>
          </Reveal>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="display-sm">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqList faqs={FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
