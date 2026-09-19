import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { ARTICLES, getArticle, type ArticleBlock } from "@/lib/articles";
import { FOUNDER } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.datePublished,
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "ul":
      return (
        <ul>
          {block.items?.map((item) => <li key={item.slice(0, 40)}>{item}</li>)}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: article.title,
            description: article.description,
            slug: article.slug,
            datePublished: article.datePublished,
            category: article.category,
          }),
          faqSchema(article.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/" },
            { name: article.title, path: `/resources/${article.slug}/` },
          ]),
        ]}
      />

      <div className="sleyp-wash">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-faint">
            <Link href="/resources/" className="hover:text-ink">
              Resources
            </Link>{" "}
            / <span className="text-ink-muted">{article.category}</span>
          </nav>
          <h1 className="font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-ink-faint">
            By {FOUNDER.displayName} · {article.readMinutes} min read ·
            Published {article.datePublished}
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        {/* Quick answer, inverted pyramid, AEO-first */}
        <div className="card-surface border-sage/30 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-sage-deep">
            Quick answer
          </p>
          <p className="mt-2 leading-relaxed text-ink">{article.quickAnswer}</p>
        </div>

        <div className="prose-sleyp mt-10">
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* FAQ, mirrors the FAQPage schema */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-5">
            {article.faqs.map((faq) => (
              <div key={faq.question} className="card-surface p-6">
                <h3 className="font-display text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Author authority box */}
        <aside className="card-surface mt-14 p-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-soft">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            About the author
          </p>
          <p className="mt-3 leading-relaxed text-ink-muted">{FOUNDER.bio}</p>
        </aside>

        <p className="mt-10 text-sm leading-relaxed text-ink-muted">
          Want the sounds without the setup?{" "}
          <Link href="/session/" className="underline underline-offset-4 hover:text-ink">
            Try Sleyp free in your browser
          </Link>
          , and take it with you in the Sleyp app when it reaches the App Store.
        </p>

        <p className="mt-6 rounded-xl border border-ink/[0.06] bg-paper p-5 text-sm leading-relaxed text-ink-faint">
          Sleyp guides cover lifestyle, performance and operational
          safety for people working non-traditional hours. They are not
          medical advice. If sleep problems are affecting your health, speak
          to your GP.
        </p>
      </article>
    </>
  );
}
