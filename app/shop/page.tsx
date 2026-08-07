import type { Metadata } from "next";
import { Blinds, Ear, Eye, Speaker } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema, productSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Shift Worker Sleep Gear — Curated Marketplace",
  description:
    "Blackout blinds, moulded earplugs, contoured sleep masks and noise machines — daytime-sleep gear curated for shift workers by someone who spent 40 years needing it to work.",
};

/**
 * Affiliate hub — `href` values are placeholders until affiliate
 * programmes are confirmed. Adding a product = adding an entry here.
 */
const GEAR = [
  {
    icon: Blinds,
    name: "Total-blackout blinds & seals",
    category: "Light defence",
    pitch:
      "The single highest-impact purchase a day sleeper can make. Side-channel blackout blinds beat curtains because daylight leaks around edges, not through fabric.",
    href: "#",
  },
  {
    icon: Ear,
    name: "Custom-moulded earplugs",
    category: "Noise defence",
    pitch:
      "Foam plugs fall out by hour three. Moulded silicone stays sealed through a full day sleep and pairs perfectly with a masking bed underneath.",
    href: "#",
  },
  {
    icon: Eye,
    name: "Contoured sleep masks",
    category: "Light defence",
    pitch:
      "Zero-pressure eye cups mean you can blink, they don't smear, and they survive side-sleeping — the make-or-break for post-night-shift use.",
    href: "#",
  },
  {
    icon: Speaker,
    name: "White noise machines",
    category: "Noise defence",
    pitch:
      "A dedicated machine at the door beats a phone speaker at the bedside: it masks noise where it enters, and there's no notification risk.",
    href: "#",
  },
];

export default function ShopPage() {
  return (
    <>
      <JsonLd
        data={[
          ...GEAR.map((g) =>
            productSchema({
              name: g.name,
              description: g.pitch,
              category: g.category,
            })
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop/" },
          ]),
        ]}
      />
      <div className="aurora">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Gear that earns its place in a day sleeper&apos;s room
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Forty years of shift work teaches you exactly which kit matters
            and which is landfill. This marketplace is short on purpose — only
            categories that move your Sleep Atlas Score make the list.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {GEAR.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <a
                href={item.href}
                className="card-surface card-hover block h-full p-7"
              >
                <div className="flex items-center justify-between">
                  <item.icon className="h-8 w-8 text-dawn" aria-hidden="true" />
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wider text-ink-faint">
                    {item.category}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold">{item.name}</h2>
                <p className="mt-2 leading-relaxed text-ink-muted">{item.pitch}</p>
                <span className="mt-4 inline-block text-sm font-medium text-dawn">
                  View picks →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm leading-relaxed text-ink-faint">
          Transparency: Sleep Atlas earns a commission on some links at no
          extra cost to you. Nothing is listed that we wouldn&apos;t put in our
          own bedroom — and plenty that paid to be here wouldn&apos;t make the
          cut.
        </p>
      </div>
    </>
  );
}
