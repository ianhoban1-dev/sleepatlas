/**
 * JSON-LD schema engine.
 * Every route type gets deep, nested schema automatically:
 *  - Articles nest the founder profile as verified author (E-E-A-T)
 *  - Tool pages get WebApplication + FAQPage simultaneously
 *  - Shop items link back to the Organization node
 */
import { SITE, FOUNDER } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const FOUNDER_ID = `${SITE.url}/#founder`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    slogan: SITE.tagline,
    founder: founderPerson(),
  };
}

export function founderPerson() {
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: FOUNDER.displayName,
    description: FOUNDER.bio,
    knowsAbout: [
      "Shift fatigue management",
      "Rota adaptation",
      "Daytime sleep optimisation",
      "Sleep debt management",
      "Body clock resetting",
      "Night shift recovery",
    ],
    hasOccupation: FOUNDER.roles.map((r) => ({
      "@type": "Occupation",
      name: r.role,
      description: `${r.org}${r.period ? ` (${r.period})` : ""}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function webApplicationSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any (web browser)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    publisher: { "@id": ORG_ID },
    author: { "@id": FOUNDER_ID },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE.url}/resources/${opts.slug}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    articleSection: opts.category,
    inLanguage: "en-GB",
    author: founderPerson(),
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/resources/${opts.slug}`,
    },
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    category: opts.category,
    brand: { "@type": "Brand", name: "Curated by FIELD" },
    // Deep-link every item node back to the primary Organization
    subjectOf: { "@type": "WebPage", url: `${SITE.url}/shop/` },
    manufacturer: undefined,
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "GBP",
      seller: { "@id": ORG_ID },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
