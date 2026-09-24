import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Gauge,
  CalendarClock,
  Compass,
  RefreshCcw,
  Volume2,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Shift Work Sleep Tools & Rota Calculators",
  description:
    "Free calculators built for shift workers: night shift recovery countdowns, rota flip-flop planning, sleep debt logging, noise calibration and chronotype matching.",
};

const icons = [CalendarClock, RefreshCcw, BatteryCharging, Volume2, Compass];

export default function ToolsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/" },
        ])}
      />
      <div className="sleyp-wash">
        <div className="mx-auto max-w-site px-5 py-16 sm:px-8 md:py-24">
          <p className="eyebrow eyebrow-rule mb-6">The tools</p>
          <h1 className="display-lg">
            Tools built for the rota you actually work
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Every calculator here answers one hard, specific question shift
            workers ask, when to cut caffeine, how to flip back for the
            weekend, how much debt you&apos;re carrying, what noise defence to
            deploy, and whether your body clock fits your pattern.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-site px-5 pb-24 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={tool.slug} delay={i * 60}>
                <Link
                  href={`/tools/${tool.slug}/`}
                  className="group card-surface card-hover flex h-full flex-col p-7 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-sage-deep transition-colors group-hover:bg-soft">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="tabular font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-8 font-serif text-[1.875rem] font-normal leading-[1.08] tracking-[-0.015em]">
                    {tool.name}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                    {tool.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 font-display text-sm font-medium text-sage-deep">
                    Open calculator
                    <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={TOOLS.length * 60}>
            <Link
              href="/scores/"
              className="group on-deep card-hover flex h-full flex-col rounded-soft p-7 md:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream/10 text-sand">
                <Gauge className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-8 font-serif text-[1.875rem] font-normal leading-[1.08] tracking-[-0.015em] text-cream">
                The Sleyp Score
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-deep-haze">
                Every tool feeds one number for how well you are surviving
                your rota: adaptation, noise, recovery and sleep debt.
              </p>
              <span className="mt-7 inline-flex items-center gap-1.5 font-display text-sm font-medium text-sand">
                How it works
                <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  );
}
