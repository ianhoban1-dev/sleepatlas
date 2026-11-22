import type { Metadata } from "next";
import { Mail } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const SUPPORT_EMAIL = "support@getsleyp.com";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Need help with Sleyp, your sound mixes, or Sleyp Plus? Email support@getsleyp.com and we'll get back to you.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Sleyp Contact & Support",
            url: `${SITE.url}/contact/`,
            mainEntity: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: SUPPORT_EMAIL,
                availableLanguage: "English",
              },
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact/" },
          ]),
        ]}
      />
      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
          <p className="eyebrow eyebrow-rule mb-6">Contact</p>
          <h1 className="display-lg">Sleyp support</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Need help with Sleyp, your sound mixes, or Sleyp Plus? Email us and
            we&apos;ll get back to you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-site px-5 pb-24 sm:px-8">
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="card-surface card-hover flex max-w-xl items-center gap-4 p-7"
        >
          <Mail className="h-7 w-7 shrink-0 text-sand-ink" aria-hidden="true" />
          <div>
            <h2 className="font-display text-xl font-semibold">Email support</h2>
            <p className="mt-1 text-ink-muted">{SUPPORT_EMAIL}</p>
          </div>
        </a>
      </div>
    </>
  );
}
