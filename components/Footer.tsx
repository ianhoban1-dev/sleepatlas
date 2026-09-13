import Link from "next/link";
import FieldMark from "@/components/FieldMark";
import { NAV_LINKS, SITE, FOUNDER } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <FieldMark className="h-4 w-auto text-sage" />
              <span className="font-display text-lg font-semibold tracking-[0.08em]">FIELD</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              {SITE.tagline} Built on {FOUNDER.yearsOfShiftWork} years of real
              shift-floor experience, military, prisons, factories and heavy
              logistics.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-faint">
              Platform
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-faint">
              A note on what we are
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              FIELD is a lifestyle, performance and operational-safety
              resource for people who work non-traditional hours. It is not a
              medical service. If sleep problems are affecting your health,
              speak to your GP.
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-ink/[0.06] pt-6 text-xs text-ink-faint">
          © {new Date().getFullYear()} FIELD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
