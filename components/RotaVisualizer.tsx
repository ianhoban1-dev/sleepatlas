"use client";

import { useState } from "react";
import { Activity, BatteryLow, Brain, Lightbulb } from "lucide-react";

/**
 * Homepage interactive rota visualizer.
 * Baseline impact metrics are indicative lifestyle/performance figures,
 * not medical measurements. The surrounding page content is fully
 * server-rendered; this widget is a progressive enhancement.
 */

type RotaKey = "4on4off" | "rotating" | "permNights" | "earlies" | "splits";

interface RotaProfile {
  label: string;
  adaptation: number; // /100, how well a typical body clock settles
  weeklyDebtHours: number;
  fatigueRisk: "Low" | "Moderate" | "High" | "Severe";
  note: string;
}

const ROTAS: Record<RotaKey, RotaProfile> = {
  "4on4off": {
    label: "4-on / 4-off (days & nights)",
    adaptation: 58,
    weeklyDebtHours: 6,
    fatigueRisk: "High",
    note: "The 4-off block is your recovery weapon, but only if the first off-day is a managed flip, not a write-off.",
  },
  rotating: {
    label: "Rotating days / nights",
    adaptation: 46,
    weeklyDebtHours: 8,
    fatigueRisk: "Severe",
    note: "Fast rotation never lets the body clock settle. Anchor sleep and strict light control are non-negotiable.",
  },
  permNights: {
    label: "Permanent nights",
    adaptation: 66,
    weeklyDebtHours: 5,
    fatigueRisk: "Moderate",
    note: "Stability is your advantage, the danger is flipping to family hours every weekend and losing it.",
  },
  earlies: {
    label: "Permanent earlies (4–6am starts)",
    adaptation: 72,
    weeklyDebtHours: 4,
    fatigueRisk: "Moderate",
    note: "The threat is the evening: social life pushes bedtime late while the alarm never moves.",
  },
  splits: {
    label: "Split / on-call shifts",
    adaptation: 50,
    weeklyDebtHours: 7,
    fatigueRisk: "High",
    note: "Fragmented sleep needs planned nap architecture, two anchored blocks beat four accidental ones.",
  },
};

const riskColor: Record<RotaProfile["fatigueRisk"], string> = {
  Low: "text-good",
  Moderate: "text-sand-ink",
  High: "text-warn",
  Severe: "text-warn",
};

export default function RotaVisualizer() {
  const [rota, setRota] = useState<RotaKey>("4on4off");
  const p = ROTAS[rota];

  return (
    <div className="frame p-6 md:p-8">
      <label
        htmlFor="rota-select"
        className="eyebrow mb-3 block"
      >
        Select your shift pattern
      </label>
      <select
        id="rota-select"
        value={rota}
        onChange={(e) => setRota(e.target.value as RotaKey)}
        className="mb-6 w-full rounded-xl border border-ink/10 bg-mist px-4 py-3.5 font-display font-medium text-ink hover:border-sage/40"
      >
        {(Object.keys(ROTAS) as RotaKey[]).map((key) => (
          <option key={key} value={key}>
            {ROTAS[key].label}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-ink/[0.06] bg-paper p-5">
          <div className="flex items-center gap-2 text-ink-muted">
            <Brain className="h-4 w-4 text-sage" aria-hidden="true" />
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em]">Rota adaptation</span>
          </div>
          <p className="tabular mt-3 font-serif text-5xl leading-none">
            {p.adaptation}
            <span className="ml-0.5 font-body text-base text-ink-faint">/100</span>
          </p>
          <div
            className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-soft"
            role="img"
            aria-label={`Rota adaptation score ${p.adaptation} out of 100`}
          >
            <div
              className="h-full rounded-full bg-deep transition-all duration-300"
              style={{ width: `${p.adaptation}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-ink/[0.06] bg-paper p-5">
          <div className="flex items-center gap-2 text-ink-muted">
            <BatteryLow className="h-4 w-4 text-sand-ink" aria-hidden="true" />
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em]">Typical weekly debt</span>
          </div>
          <p className="tabular mt-3 font-serif text-5xl leading-none">
            {p.weeklyDebtHours}
            <span className="ml-0.5 font-body text-base text-ink-faint">h</span>
          </p>
          <p className="mt-4 text-xs text-ink-faint">unmanaged baseline</p>
        </div>

        <div className="rounded-2xl border border-ink/[0.06] bg-paper p-5">
          <div className="flex items-center gap-2 text-ink-muted">
            <Activity className="h-4 w-4 text-good" aria-hidden="true" />
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.14em]">Fatigue risk</span>
          </div>
          <p className={`mt-3 font-serif text-4xl leading-none sm:text-[2.75rem] ${riskColor[p.fatigueRisk]}`}>
            {p.fatigueRisk}
          </p>
          <p className="mt-4 text-xs text-ink-faint">without countermeasures</p>
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-ink-muted">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
        {p.note}
      </p>
    </div>
  );
}
