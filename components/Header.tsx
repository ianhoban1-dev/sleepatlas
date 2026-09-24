"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, ShieldCheck, UserRound } from "lucide-react";
import SleypMark from "@/components/SleypMark";
import { NAV_LINKS } from "@/lib/site";
import { useAuth } from "@/components/AuthProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, admin } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-ink/[0.07] bg-cream/85 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sleyp home">
          <SleypMark className="h-[18px] w-auto text-sage" />
          <span className="font-display text-[17px] font-semibold tracking-[0.1em] text-ink">
            SLEYP
          </span>
        </Link>

        {/* Grouped nav in a quiet pill (Cal.com nav-pill-group) */}
        <nav
          className="hidden items-center gap-0.5 rounded-full border border-ink/[0.07] bg-card/60 p-1 backdrop-blur lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 font-display text-[13px] font-medium transition-colors duration-150 ${
                isActive(link.href)
                  ? "bg-soft text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          {admin && (
            <Link
              href="/admin/"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 font-display text-[13px] font-semibold text-sand-ink transition-colors hover:bg-sand/15"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Admin
            </Link>
          )}
          <Link
            href="/account/"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 font-display text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <UserRound className="h-4 w-4" aria-hidden="true" />
            {user ? user.name.split(" ")[0] : "Log in"}
          </Link>
          <Link href="/session/" className="btn-primary ml-2 h-10 px-4 text-[13px]">
            Try Sleyp free
            <ArrowRight className="arrow" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-ink/[0.05] hover:text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-ink/[0.06] bg-cream px-5 pb-6 pt-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="divide-y divide-ink/[0.06]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="flex items-center justify-between py-4 font-serif text-2xl text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-sage" aria-hidden="true" />
                </Link>
              </li>
            ))}
            {admin && (
              <li>
                <Link
                  href="/admin/"
                  className="block py-4 font-display font-semibold text-sand-ink"
                  onClick={() => setOpen(false)}
                >
                  Admin
                </Link>
              </li>
            )}
            <li>
              <Link
                href="/account/"
                className="block py-4 font-display text-ink-muted"
                onClick={() => setOpen(false)}
              >
                {user ? `Account · ${user.name.split(" ")[0]}` : "Log in / sign up"}
              </Link>
            </li>
          </ul>
          <div className="mt-4 grid gap-2">
            <Link href="/session/" className="btn-primary btn-lg w-full" onClick={() => setOpen(false)}>
              Try Sleyp free
            </Link>
            {user?.plan !== "premium" && (
              <Link href="/pricing/" className="btn-secondary btn-lg w-full" onClick={() => setOpen(false)}>
                Go Premium
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
