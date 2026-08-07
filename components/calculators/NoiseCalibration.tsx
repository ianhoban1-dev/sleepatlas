"use client";

import { useState } from "react";
import { Volume2, Waves, Wind } from "lucide-react";

const SOURCES = [
  { key: "traffic", label: "Constant traffic / road rumble", band: "low" },
  { key: "bangs", label: "Intermittent bangs (doors, bins, deliveries)", band: "transient" },
  { key: "voices", label: "Voices, TV, neighbours, kids", band: "mid" },
  { key: "high", label: "High-pitched sounds (birds, alarms, brakes)", band: "high" },
] as const;

type SourceKey = (typeof SOURCES)[number]["key"];

const PLANS = {
  low: {
    icon: Waves,
    colour: "Brown noise",
    why: "Your dominant problem is low-frequency rumble. Brown noise concentrates its energy in the same low band and masks engines and road noise at comfortable volume.",
  },
  mid: {
    icon: Wind,
    colour: "Pink noise",
    why: "Voices and mid-band household noise are your main intrusion. Pink noise balances energy across speech frequencies and blurs conversation into the background.",
  },
  high: {
    icon: Volume2,
    colour: "White noise",
    why: "Sharp, high-pitched transients dominate your environment. White noise's flat spectrum covers high-frequency spikes better than warmer colours.",
  },
  transient: {
    icon: Waves,
    colour: "Brown noise base + rain layer",
    why: "Unpredictable bangs are best beaten by raising the background floor with a deep brown-noise bed, with a rain layer adding natural variability that stops the brain re-alerting.",
  },
} as const;

export default function NoiseCalibration() {
  const [scores, setScores] = useState<Record<SourceKey, number>>({
    traffic: 3,
    bangs: 2,
    voices: 2,
    high: 1,
  });

  const impact = Object.values(scores).reduce((a, b) => a + b, 0); // /20
  const impactPct = (impact / 20) * 100;

  const bandTotals: Record<string, number> = {};
  SOURCES.forEach((s) => {
    bandTotals[s.band] = (bandTotals[s.band] ?? 0) + scores[s.key];
  });
  const topBand = (Object.entries(bandTotals).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    "low") as keyof typeof PLANS;
  const plan = PLANS[topBand];

  const physical =
    scores.bangs >= 3
      ? "Door seals and a draught excluder are your best value physical upgrade — most transient noise enters around the door."
      : scores.traffic >= 3
        ? "Heavy layered curtains or secondary glazing film target the low-frequency energy coming through the window."
        : "Moulded earplugs under the masking bed give you a second defence layer for the worst days.";

  return (
    <div className="card-surface p-6 md:p-8">
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-ink-muted">
          Rate each noise source around your daytime sleep (0 = none, 5 = severe)
        </legend>
        <div className="space-y-5">
          {SOURCES.map((s) => (
            <div key={s.key}>
              <label htmlFor={s.key} className="mb-1 block text-sm text-ink">
                {s.label}: <span className="font-semibold text-indigoGlow-soft">{scores[s.key]}</span>
              </label>
              <input
                id={s.key}
                type="range"
                min={0}
                max={5}
                value={scores[s.key]}
                onChange={(e) =>
                  setScores({ ...scores, [s.key]: Number(e.target.value) })
                }
                aria-valuetext={`${scores[s.key]} out of 5`}
              />
            </div>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 rounded-xl bg-night-700 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-wider text-ink-muted">
            Noise Impact Score
          </p>
          <p className="font-display text-4xl font-bold">
            {impact}
            <span className="text-lg text-ink-faint">/20</span>
          </p>
        </div>
        <div
          className="mt-4 h-2 w-full overflow-hidden rounded-full bg-night-600"
          role="img"
          aria-label={`Noise impact score ${impact} out of 20`}
        >
          <div
            className="h-full rounded-full bg-indigoGlow transition-all duration-300"
            style={{ width: `${impactPct}%` }}
          />
        </div>

        <div className="mt-6 flex items-start gap-3">
          <plan.icon className="mt-1 h-6 w-6 shrink-0 text-teal-glow" aria-hidden="true" />
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              Recommended defence: {plan.colour}
            </p>
            <p className="mt-2 leading-relaxed text-ink-muted">{plan.why}</p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              <strong className="text-ink">Physical layer:</strong> {physical}
            </p>
            <p className="mt-3 text-sm text-ink-faint">
              Volume rule: keep the masking bed under ~60dB at the pillow —
              raise the floor, don&apos;t fight the peaks.
            </p>
          </div>
        </div>
      </div>

      <a
        href="/mask-ai/"
        className="mt-6 inline-block rounded-xl bg-teal-glow px-6 py-3 font-semibold text-night-950 transition-opacity hover:opacity-90"
      >
        Open this blend in Mask AI →
      </a>
    </div>
  );
}
