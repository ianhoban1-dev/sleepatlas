import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import FaqList from "@/components/FaqList";
import AppCta from "@/components/AppCta";

export const metadata: Metadata = {
  title: "The Sleyp app: Free and Plus",
  description:
    "The Sleyp iOS app is coming soon with 22 free library sounds and saved mixes without an account. Sleyp Plus adds AI mix generation and Discovery. The browser version, calculators and resources are free.",
};

const FREE = [
  "22 library sounds, all free to play",
  "Saved mixes, even without an account",
];

const PLUS = [
  "Everything in Free",
  "AI mix generation",
  "Discovery",
];

const ON_THIS_SITE = [
  "13 sounds to mix in your browser, with a fading sleep timer and wake-up chime",
  "Saved mixes, kept in your browser",
  "All five rota and recovery calculators",
  "Shift journal (kept in this browser)",
  "The full resource hub",
];

const FAQS = [
  {
    question: "What does the Sleyp app include for free?",
    answer:
      "The Sleyp iOS app is coming soon with 22 library sounds, all free to play, and saved mixes without an account.",
  },
  {
    question: "What does Sleyp Plus add?",
    answer:
      "Sleyp Plus adds AI mix generation and Discovery in the app. Plus details will be shared when the app launches.",
  },
  {
    question: "Are the browser sounds the same as the app's?",
    answer:
      "No. The browser version has 13 sounds generated live in your browser, and the app has its own library of 22 sounds. The app's sounds don't play on the website, and sounds with similar names are not identical.",
  },
  {
    question: "Do I need an account to use the calculators or the browser sounds?",
    answer:
      "No. Every calculator, the resource hub and the browser sounds are free to use without an account.",
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
            { name: "The app", path: "/pricing/" },
          ]),
        ]}
      />
      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 text-center sm:px-8 md:py-24">
          <p className="eyebrow eyebrow-rule mb-6">The app</p>
          <h1 className="display-lg">
            Free to start. Plus when you want more.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            The Sleyp iOS app is coming soon. Everything on this website is
            free to use today.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-surface flex h-full flex-col p-8 md:p-10">
              <h2 className="font-display text-xl font-semibold">Free</h2>
              <p className="mt-4 font-serif text-5xl leading-none">
                22 sounds
                <span className="ml-2 font-body text-base text-ink-faint">in the Sleyp app</span>
              </p>
              <ul className="mb-10 mt-8 space-y-3">
                {FREE.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-good" aria-hidden="true" />
                    <span className="text-ink-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-4">
                <AppCta />
                <Link href="/session/" className="btn-secondary btn-lg">
                  Try sounds in your browser
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="on-deep relative flex h-full flex-col rounded-soft p-8 shadow-frame md:p-10">
              <span className="absolute right-6 top-6 rounded-full bg-sand px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-deep">
                Coming soon
              </span>
              <h2 className="font-display text-xl font-semibold text-cream">Sleyp Plus</h2>
              <p className="mt-4 font-serif text-5xl leading-none text-cream">
                More in the app
              </p>
              <ul className="mb-10 mt-8 space-y-3">
                {PLUS.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sand" aria-hidden="true" />
                    <span className="text-cream/90">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-sm text-deep-haze">
                Plus details will be shared when the app launches.
              </p>
            </div>
          </Reveal>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="display-sm">Free on this website</h2>
          <ul className="mt-6 space-y-3">
            {ON_THIS_SITE.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-good" aria-hidden="true" />
                <span className="text-ink-muted">{f}</span>
              </li>
            ))}
          </ul>
        </section>

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
