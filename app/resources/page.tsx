import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { ARTICLES, CATEGORIES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Shift Work Sleep Resources: Practical Guides",
  description:
    "Deeply practical guides for shift workers: 4-on/4-off survival, daytime sleep optimisation, noise defence, rotating rotas, night shift nutrition and family life balancing, from 40 years on the shift floor.",
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/" },
        ])}
      />
      <div className="aurora">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            The resource hub
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            No recycled 'sleep hygiene tips'. Every guide here answers a
            question shift workers actually ask, from someone who spent forty
            years needing the answers to work.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        {/* Categories */}
        <section aria-label="Article categories">
          <h2 className="font-display text-xl font-semibold text-ink-muted">
            Browse by category
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <span className="inline-block rounded-full border border-white/10 bg-night-800 px-4 py-2 text-sm text-ink-muted">
                  {cat.name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Articles */}
        <section className="mt-12" aria-label="Latest articles">
          <div className="grid gap-4 md:grid-cols-3">
            {ARTICLES.map((article, i) => (
              <Reveal key={article.slug} delay={i * 60}>
                <Link
                  href={`/resources/${article.slug}/`}
                  className="card-surface card-hover flex h-full flex-col p-7"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-indigoGlow-soft">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    {article.category}
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-snug">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {article.description}
                  </p>
                  <p className="mt-4 text-xs text-ink-faint">
                    {article.readMinutes} min read
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <p className="mt-14 max-w-2xl leading-relaxed text-ink-muted">
          More guides land here every week across all six categories. The
          fastest way to put any of them into practice is the{" "}
          <Link href="/tools/" className="text-indigoGlow underline underline-offset-4">
            tools hub
          </Link>
          .
        </p>
      </div>
    </>
  );
}
