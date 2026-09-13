import type { Metadata } from "next";
import Link from "next/link";
import {
  BatteryCharging,
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
      <div className="field-wash">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
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

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {TOOLS.map((tool, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={tool.slug} delay={i * 60}>
                <Link
                  href={`/tools/${tool.slug}/`}
                  className="card-surface card-hover block h-full p-7"
                >
                  <Icon className="h-8 w-8 text-sage" aria-hidden="true" />
                  <h2 className="mt-4 font-display text-2xl font-semibold">
                    {tool.name}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    {tool.description}
                  </p>
                  <span className="mt-5 inline-block font-medium text-sage">
                    Open calculator →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
