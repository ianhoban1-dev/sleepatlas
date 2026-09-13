/**
 * FIELD: central site configuration.
 * Single source of truth for brand, URLs, and the founder E-E-A-T profile.
 * Everything (schema, copy, footer) reads from here.
 */

export const SITE = {
  name: "FIELD",
  tagline: "Your personal soundscape.",
  url: "https://sleepatlas-one.vercel.app", // placeholder: swap when the FIELD domain is live
  description:
    "FIELD builds a sound field around the room you actually sleep in. Thirteen layered sounds generated live in your browser, a sleep timer that fades rather than stops, and tools built on forty years of shift work.",
  locale: "en_GB",
} as const;

export const FOUNDER = {
  name: "The FIELD Founder",
  displayName: "Founder, FIELD",
  yearsOfShiftWork: 40,
  bio: "Forty years of high-intensity shift work: the King's Regiment (1986–1989), industrial night production at Jacobs Biscuits, high-security landings with HM Prison Service at Strangeways, Walton and Guys Marsh, and heavy logistics shifts at Budweiser UK. Everything in FIELD is built from what actually works when the alarm goes off at 4:45pm and the street outside is wide awake.",
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

/**
 * The session leads. Everything else supports it.
 */
export const NAV_LINKS = [
  { href: "/session/", label: "Session" },
  { href: "/tools/", label: "Tools" },
  { href: "/trackers/", label: "Trackers" },
  { href: "/scores/", label: "Score" },
  { href: "/resources/", label: "Resources" },
  { href: "/shop/", label: "Shop" },
  { href: "/pricing/", label: "Pricing" },
] as const;
