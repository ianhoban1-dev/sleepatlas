"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MoonStar, ShieldCheck, UserRound } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { useAuth } from "@/components/AuthProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, admin } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-night-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Sleep Atlas home">
          <MoonStar className="h-6 w-6 text-indigoGlow" aria-hidden="true" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Sleep Atlas
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors duration-150 hover:bg-white/[0.05] hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          {admin && (
            <Link
              href="/admin/"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-dawn transition-colors duration-150 hover:bg-dawn/10"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Admin
            </Link>
          )}
          <Link
            href="/account/"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors duration-150 hover:bg-white/[0.05] hover:text-ink"
          >
            <UserRound className="h-4 w-4" aria-hidden="true" />
            {user ? user.name.split(" ")[0] : "Account"}
          </Link>
          {user?.plan !== "premium" && (
            <Link
              href="/pricing/"
              className="ml-3 rounded-lg bg-indigoGlow px-4 py-2 text-sm font-semibold text-night-950 transition-all duration-200 hover:bg-indigoGlow-soft hover:shadow-glow"
            >
              Go Premium
            </Link>
          )}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink-muted hover:bg-white/[0.05] hover:text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/[0.06] bg-night-900 px-4 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-3 text-ink-muted hover:bg-white/[0.05] hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {admin && (
            <Link
              href="/admin/"
              className="block rounded-lg px-3 py-3 font-semibold text-dawn hover:bg-dawn/10"
              onClick={() => setOpen(false)}
            >
              Admin
            </Link>
          )}
          <Link
            href="/account/"
            className="block rounded-lg px-3 py-3 text-ink-muted hover:bg-white/[0.05] hover:text-ink"
            onClick={() => setOpen(false)}
          >
            {user ? `Account — ${user.name.split(" ")[0]}` : "Account"}
          </Link>
          {user?.plan !== "premium" && (
            <Link
              href="/pricing/"
              className="mt-2 block rounded-lg bg-indigoGlow px-4 py-3 text-center font-semibold text-night-950"
              onClick={() => setOpen(false)}
            >
              Go Premium
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
