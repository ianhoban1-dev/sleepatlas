import Link from "next/link";
import SleypMark, { SleypWordmark } from "@/components/SleypMark";
import { SITE, FOUNDER } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

const PRODUCT = [
  { href: "/session/", label: "Session" },
  { href: "/scores/", label: "Sleyp Score" },
  { href: "/trackers/", label: "Trackers" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/#app", label: "The app" },
];

const LEARN = [
  { href: "/resources/", label: "Resources" },
  { href: "/shop/", label: "Shop" },
  { href: "/account/", label: "Account" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-deep-haze">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-charcoal text-cream">
      <div className="shell pb-10 pt-20 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <SleypMark className="h-[18px] w-auto text-sage-soft" />
              <span className="font-display text-[17px] font-semibold tracking-[0.1em]">SLEYP</span>
            </div>
            <p className="mt-5 max-w-xs font-serif text-2xl leading-snug text-cream">
              {SITE.tagline}.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-deep-haze">
              Built on {FOUNDER.yearsOfShiftWork} years of real shift-floor
              experience: military, prisons, factories and heavy logistics.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-8 md:pl-8">
            <Column title="Product" links={PRODUCT} />
            <Column
              title="Tools"
              links={TOOLS.map((t) => ({ href: `/tools/${t.slug}/`, label: t.shortName }))}
            />
            <Column title="Learn" links={LEARN} />
          </div>
        </div>

        <div className="mt-16 rounded-soft border border-cream/10 bg-cream/[0.03] p-6">
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-deep-haze">
            A note on what we are
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-deep-haze">
            Sleyp is a lifestyle, performance and operational-safety resource
            for people who work non-traditional hours. It is not a medical
            service. If sleep problems are affecting your health, speak to
            your GP.
          </p>
        </div>

        {/* Oversized wordmark sign-off */}
        <SleypWordmark className="mt-20 h-auto w-full text-[#2B3634]" />

        <div className="mt-8 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-deep-haze sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Sleyp. All rights reserved.</p>
          <p>Made in the UK, for the people who keep it running at night.</p>
        </div>
      </div>
    </footer>
  );
}
