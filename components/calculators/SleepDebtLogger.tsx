"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, OctagonAlert, TriangleAlert } from "lucide-react";

const BANDS = [
  {
    max: 2,
    label: "Green",
    icon: CheckCircle2,
    color: "text-teal-glow",
    bar: "bg-teal-glow",
    action: "You're operating normally. Protect tonight's sleep and keep the streak.",
  },
  {
    max: 5,
    label: "Amber",
    icon: AlertTriangle,
    color: "text-dawn-soft",
    bar: "bg-dawn-soft",
    action:
      "Measurable slowdown in reaction time and mood. Bank a 90-minute recovery nap before your next shift and cut evening screen time.",
  },
  {
    max: 8,
    label: "Red",
    icon: TriangleAlert,
    color: "text-dawn",
    bar: "bg-dawn",
    action:
      "Performance is comparable to alcohol impairment. Treat driving with real caution, avoid safety-critical extras, and make your next off-day a managed recovery day.",
  },
  {
    max: Infinity,
    label: "Critical",
    icon: OctagonAlert,
    color: "text-red-400",
    bar: "bg-red-400",
    action:
      "This debt level is a safety issue. Do not drive if avoidable. Recovery sleep is now a requirement, not a preference, and consider flagging fatigue to your supervisor.",
  },
];

export default function SleepDebtLogger() {
  const [need, setNeed] = useState(8);
  const [days, setDays] = useState<number[]>([6, 5.5, 6, 7]);

  const debt = days.reduce((sum, slept) => sum + Math.max(0, need - slept), 0);
  const band = BANDS.find((b) => debt < b.max) ?? BANDS[BANDS.length - 1];
  const pct = Math.min(100, (debt / 10) * 100);

  return (
    <div className="card-surface p-6 md:p-8">
      <div>
        <label htmlFor="need" className="mb-2 block text-sm font-medium text-ink-muted">
          Your nightly requirement: <span className="text-ink">{need}h</span>
        </label>
        <input
          id="need"
          type="range"
          min={6}
          max={10}
          step={0.5}
          value={need}
          onChange={(e) => setNeed(Number(e.target.value))}
          aria-valuetext={`${need} hours`}
        />
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-ink-muted">
          Actual sleep this block (hours per day)
        </legend>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {days.map((val, i) => (
            <div key={i}>
              <label htmlFor={`day-${i}`} className="mb-1 block text-xs text-ink-faint">
                Day {i + 1}: <span className="text-ink">{val}h</span>
              </label>
              <input
                id={`day-${i}`}
                type="range"
                min={0}
                max={12}
                step={0.5}
                value={val}
                onChange={(e) => {
                  const next = [...days];
                  next[i] = Number(e.target.value);
                  setDays(next);
                }}
                aria-valuetext={`${val} hours on day ${i + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={() => setDays([...days, need])}
            disabled={days.length >= 14}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm text-ink-muted transition-colors hover:border-indigoGlow/50 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
          >
            + Add day
          </button>
          <button
            type="button"
            onClick={() => setDays(days.slice(0, -1))}
            disabled={days.length <= 1}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm text-ink-muted transition-colors hover:border-indigoGlow/50 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
          >
            − Remove day
          </button>
        </div>
      </fieldset>

      <div className="mt-8 rounded-xl bg-night-700 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-wider text-ink-muted">
            Accumulated sleep debt
          </p>
          <p className="font-display text-4xl font-bold">
            {debt.toFixed(1)}
            <span className="text-lg text-ink-faint">h</span>
          </p>
        </div>
        <div
          className="mt-4 h-2 w-full overflow-hidden rounded-full bg-night-600"
          role="img"
          aria-label={`Sleep debt ${debt.toFixed(1)} hours, ${band.label} band`}
        >
          <div
            className={`h-full rounded-full transition-all duration-300 ${band.bar}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className={`mt-4 flex items-center gap-2 font-display text-xl font-semibold ${band.color}`}>
          <band.icon className="h-5 w-5" aria-hidden="true" />
          {band.label} band
        </p>
        <p className="mt-2 leading-relaxed text-ink-muted">{band.action}</p>
      </div>

      <p className="mt-4 text-xs text-ink-faint">
        Premium members can save rolling blocks and see historical fatigue
        trends. Data currently stays in your browser.
      </p>
    </div>
  );
}
