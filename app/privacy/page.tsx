import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const SUPPORT_EMAIL = "support@getsleyp.com";
const LAST_UPDATED = "22 November 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sleyp handles your data across the getsleyp.com website and the Sleyp iOS app: what we collect, why, who we share it with and your rights under UK GDPR.",
  alternates: { canonical: "/privacy/" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sleyp Privacy Policy",
            url: `${SITE.url}/privacy/`,
            dateModified: "2026-11-22",
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy/" },
          ]),
        ]}
      />
      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
          <p className="eyebrow eyebrow-rule mb-6">Legal</p>
          <h1 className="display-lg">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            The short version: Sleyp collects as little as possible, never sells
            your data, and keeps your sound mixes and journal on your own device.
          </p>
          <p className="mt-4 text-sm text-ink-faint">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <Section title="Who we are">
          <p>
            Sleyp (&ldquo;we&rdquo;, &ldquo;us&rdquo;) runs the website at getsleyp.com and the
            Sleyp app for iPhone. We are based in the United Kingdom and are the
            data controller for the personal data described in this policy. You
            can contact us about privacy at any time at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sand-ink underline underline-offset-4">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="What we collect and why">
          <p>
            <strong className="text-ink">Sound mixes, settings and journal entries.</strong>{" "}
            Your saved mixes, preferences, shift journal and tracker entries are
            stored locally on your device (in the app, or in your browser&apos;s
            local storage on the website). They are not sent to our servers.
          </p>
          <p>
            <strong className="text-ink">Account details.</strong> If you create a Sleyp
            account, we hold your name, email address and plan so we can
            provide your account. Passwords are never stored in plain text.
          </p>
          <p>
            <strong className="text-ink">Sleyp Plus subscriptions.</strong> In the iOS app,
            Sleyp Plus is purchased and managed through Apple&apos;s App Store. Apple
            processes your payment; we never see or store your card details. We
            receive only the information needed to confirm your subscription is
            active.
          </p>
          <p>
            <strong className="text-ink">Support emails.</strong> If you email us, we use
            your email address and message to help you and keep a record of the
            conversation.
          </p>
          <p>
            <strong className="text-ink">Website usage data.</strong> On getsleyp.com we use
            Microsoft Clarity to understand how visitors use the site (for
            example pages visited, clicks, scrolling and device type) so we can
            improve it. Our hosting provider also records standard server logs,
            such as IP address and browser type, for security and reliability.
          </p>
          <p>
            We do not collect health records, your location, your contacts or
            your microphone audio. Sleyp is a lifestyle and sleep environment
            tool, not a medical service.
          </p>
        </Section>

        <Section title="Our lawful bases">
          <p>
            Under UK GDPR we rely on: <em>contract</em> to provide your account and
            subscription; <em>legitimate interests</em> to keep the service secure,
            answer support requests and improve Sleyp; and <em>consent</em> where
            the law requires it for analytics cookies. You can withdraw consent at
            any time.
          </p>
        </Section>

        <Section title="Cookies and similar technologies">
          <p>
            The website uses local storage to remember your mixes and settings,
            which is essential for those features to work. Microsoft Clarity sets
            cookies to measure site usage. You can block or delete cookies in your
            browser settings, and the site will still work. The iOS app does not
            use advertising identifiers and does not track you across other
            companies&apos; apps or websites.
          </p>
        </Section>

        <Section title="Who we share data with">
          <p>We never sell your personal data. We share it only with:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Apple, which handles App Store downloads, payments and subscriptions;</li>
            <li>Vercel, which hosts the website;</li>
            <li>Microsoft, which provides Clarity website analytics;</li>
            <li>our email provider, for support messages;</li>
            <li>authorities, if the law requires it.</li>
          </ul>
          <p>
            Some of these providers process data outside the UK, including in the
            United States. Where they do, transfers are protected by recognised
            safeguards such as the UK International Data Transfer Addendum or
            approved adequacy arrangements.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            Account data is kept while your account is open and deleted within
            30 days of you asking us to close it. Support emails are kept for up
            to two years. Data stored on your device stays there until you delete
            it or remove the app.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            You have the right to access, correct, delete or export your personal
            data, to object to or restrict how we use it, and to withdraw consent.
            To make a request, including deleting your account, email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sand-ink underline underline-offset-4">
              {SUPPORT_EMAIL}
            </a>
            . We will reply within one month. If you are unhappy with how we have
            handled your data, you can complain to the Information
            Commissioner&apos;s Office at ico.org.uk.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Sleyp is not directed at children under 13, and we do not knowingly
            collect personal data from them.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we change this policy, we will update the date at the top of this
            page. For significant changes we will let you know in the app or by
            email.
          </p>
          <p>
            Questions? <Link href="/contact/" className="text-sand-ink underline underline-offset-4">Contact Sleyp support</Link>.
          </p>
        </Section>
      </article>
    </>
  );
}
