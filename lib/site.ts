/**
 * Sleep Atlas: central site configuration.
 * Single source of truth for brand, URLs, and the founder E-E-A-T profile.
 * Everything (schema, copy, footer) reads from here.
 */

export const SITE = {
  name: "Sleep Atlas",
  tagline: "Master your rota. Eliminate shift fatigue. Reclaim your sleep.",
  url: "https://sleepatlas.co.uk", // update when domain is confirmed
  description:
    "Sleep Atlas is the sleep intelligence and fatigue management platform built exclusively for shift workers, night workers and rotating rota professionals. Rota calculators, sleep debt trackers, the Mask AI noise-masking engine and 40 years of real shift-floor experience.",
  locale: "en_GB",
} as const;

export const FOUNDER = {
  name: "The Sleep Atlas Founder",
  displayName: "Founder, Sleep Atlas",
  yearsOfShiftWork: 40,
  bio: "Forty years of high-intensity shift work: the King's Regiment (1986–1989), industrial night production at Jacobs Biscuits, high-security landings with HM Prison Service at Strangeways, Walton and Guys Marsh, and heavy logistics shifts at Budweiser UK. Every tool and article on Sleep Atlas is built from what actually works when the alarm goes off at 4:45pm and the street outside is wide awake.",
  roles: [
    { org: "The King's Regiment", role: "Soldier", period: "1986–1989" },
    { org: "Jacobs Biscuits", role: "Industrial manufacturing shifts", period: "" },
    {
      org: "HM Prison Service",
      role: "High-security settings. Strangeways, Walton, Guys Marsh",
      period: "",
    },
    { org: "Budweiser UK", role: "Heavy logistics & industrial production", period: "" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "/tools/", label: "Tools" },
  { href: "/mask-ai/", label: "Mask AI" },
  { href: "/trackers/", label: "Trackers" },
  { href: "/scores/", label: "Scores" },
  { href: "/resources/", label: "Resources" },
  { href: "/shop/", label: "Shop" },
  { href: "/pricing/", label: "Pricing" },
] as const;
