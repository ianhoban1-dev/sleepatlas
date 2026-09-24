import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ShiftJournal from "@/components/ShiftJournal";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import FaqList from "@/components/FaqList";

export const metadata: Metadata = {
  title: "Shift Journal & Sleep Debt Trackers",
  description:
    "Log every shift and every sleep in one place. The Sleyp shift journal tracks sleep hours, quality and disturbances across your rota so patterns become visible before fatigue becomes a problem.",
};

const FAQS = [
  {
    question: "Why should shift workers keep a sleep journal?",
    answer:
      "Because patterns invisible day-to-day become obvious across a rota block. A journal shows which shifts, noise events and habits are stealing your sleep, turning guesswork into a fixable list. Most people find one repeat offender within two weeks of logging.",
  },
  {
    question: "What should I record in a shift sleep journal?",
    answer:
      "The minimum that works: date, shift type, hours actually slept, a quality rating out of five, and a one-line note about anything that disturbed you. Thirty seconds a day is enough to surface your patterns.",
  },
];

export default function TrackersPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Trackers", path: "/trackers/" },
          ]),
        ]}
      />
      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
          <p className="eyebrow eyebrow-rule mb-6">Trackers</p>
          <h1 className="display-lg">
            Your shift journal
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Thirty seconds after every sleep. That&apos;s all it takes to see
            which shifts, streets and habits are robbing you, and which
            defences are actually working.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <ShiftJournal />

        <section className="mt-16">
          <h2 className="display-sm">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqList faqs={FAQS} />
          </div>
        </section>

        <p className="mt-12 leading-relaxed text-ink-muted">
          Want the numbers version? The{" "}
          <a
            href="/tools/sleep-debt-fatigue-logger/"
            className="text-sage underline underline-offset-4"
          >
            Sleep Debt &amp; Fatigue Logger
          </a>{" "}
          converts your logged hours into a rolling debt total and a
          plain-English fatigue band.
        </p>
      </div>
    </>
  );
}
