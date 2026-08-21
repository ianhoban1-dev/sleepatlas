import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/lib/schema";
import type { ToolDef } from "@/lib/tools";

/**
 * Shared server-rendered layout for every calculator page.
 * All explainer text, how-it-works steps and FAQ answers land in the
 * initial HTML (strict DOM-first). The interactive calculator is passed
 * in as a client-component child.
 */
export default function ToolPageLayout({
  tool,
  children,
}: {
  tool: ToolDef;
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema({
            name: tool.name,
            description: tool.description,
            path: `/tools/${tool.slug}/`,
          }),
          faqSchema(tool.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools/" },
            { name: tool.name, path: `/tools/${tool.slug}/` },
          ]),
        ]}
      />

      <div className="aurora">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-faint">
            <Link href="/tools/" className="hover:text-ink">
              Tools
            </Link>{" "}
            / <span className="text-ink-muted">{tool.shortName}</span>
          </nav>
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            {tool.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        {/* Interactive calculator (client) */}
        <section aria-label={`${tool.name} interactive calculator`}>
          {children}
        </section>

        {/* Server-rendered explainer */}
        <section className="prose-atlas mt-14">
          <h2>Why this matters on a real rota</h2>
          {tool.explainer.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            How the calculator works
          </h2>
          <ol className="mt-6 space-y-4">
            {tool.howItWorks.map((step, i) => (
              <li key={step.slice(0, 40)} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigoGlow/15 font-display text-sm font-semibold text-indigoGlow"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="leading-relaxed text-ink-muted">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ, server-rendered, mirrors the FAQPage schema exactly */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-5">
            {tool.faqs.map((faq) => (
              <div key={faq.question} className="card-surface p-6">
                <h3 className="font-display text-lg font-semibold">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 rounded-xl border border-white/[0.06] bg-night-900 p-5 text-sm leading-relaxed text-ink-faint">
          Sleep Atlas tools are lifestyle and operational-safety aids for shift
          workers, built from real-world experience. They are not medical
          devices or diagnostic tools. If fatigue or sleep problems are
          affecting your health, speak to your GP.
        </p>
      </div>
    </>
  );
}
