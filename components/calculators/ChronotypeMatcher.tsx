"use client";

import { useState } from "react";
import { Bird, Moon, SunMedium } from "lucide-react";

const QUESTIONS = [
  {
    key: "freeBed",
    text: "On days off with nothing planned, when do you naturally fall asleep?",
    options: [
      { label: "Before 10:30pm", score: 0 },
      { label: "10:30pm – midnight", score: 1 },
      { label: "Midnight – 1:30am", score: 2 },
      { label: "After 1:30am", score: 3 },
    ],
  },
  {
    key: "freeWake",
    text: "And when do you naturally wake without an alarm?",
    options: [
      { label: "Before 7am", score: 0 },
      { label: "7am – 8:30am", score: 1 },
      { label: "8:30am – 10am", score: 2 },
      { label: "After 10am", score: 3 },
    ],
  },
  {
    key: "peak",
    text: "When does your brain feel sharpest?",
    options: [
      { label: "Early morning", score: 0 },
      { label: "Late morning", score: 1 },
      { label: "Evening", score: 2 },
      { label: "Late at night", score: 3 },
    ],
  },
  {
    key: "mornings",
    text: "How hard are early mornings for you, honestly?",
    options: [
      { label: "Easy — I'm up before the alarm", score: 0 },
      { label: "Fine after a few minutes", score: 1 },
      { label: "Rough for the first hour", score: 2 },
      { label: "Brutal — I'm not human until noon", score: 3 },
    ],
  },
] as const;

const ROTAS = [
  { key: "nights", label: "Permanent nights" },
  { key: "rotating", label: "Rotating days/nights" },
  { key: "fourOnOff", label: "4-on / 4-off" },
  { key: "earlies", label: "Permanent earlies" },
  { key: "splits", label: "Split / on-call" },
] as const;

type RotaKey = (typeof ROTAS)[number]["key"];

// compatibility [lark, intermediate, owl] out of 100
const COMPAT: Record<RotaKey, [number, number, number]> = {
  nights: [35, 55, 80],
  rotating: [40, 50, 55],
  fourOnOff: [55, 65, 60],
  earlies: [85, 65, 35],
  splits: [50, 60, 50],
};

const ADVICE: Record<RotaKey, [string, string, string]> = {
  nights: [
    "You're a lark on nights — the hardest combination. Non-negotiables: a 90-minute pre-shift nap, caffeine only in the first half of the shift, and total light-blocking on the commute home.",
    "Workable with discipline. Anchor your daytime sleep at the same time every day, even on days off, and guard the 4–6am trough with movement and cold water, not extra caffeine.",
    "Your natural timing is an asset on nights. Your main risk is weekend flip-flops — keep even your days off shifted 2–3 hours later than family hours rather than fully flipping.",
  ],
  rotating: [
    "Fast rotation punishes early types. Push for forward-rotating patterns (days → lates → nights), pre-load sleep before each switch, and use the flip-flop calculator on every transition.",
    "You'll cope better than most, but never freestyle a transition — run the anchor-sleep plan on every rotation and keep caffeine rules mechanical.",
    "Late nights suit you but early transitions won't. Bank sleep before day-shift blocks and treat the first early as the danger shift, not the first night.",
  ],
  fourOnOff: [
    "The 4-off block is your recovery superpower — but flip back on day one, not day two. Anchor sleep after the final night, then live on family hours.",
    "A solid fit. The pattern's regularity suits intermediate types; your job is protecting the first off-day flip and not borrowing sleep from the last on-day.",
    "Comfortable on the night halves; your risk is drifting so late on off-days that the first day shift becomes a red-eye. Cap the drift at 2 hours.",
  ],
  earlies: [
    "Near-perfect fit. Your only real threat is social pressure pushing bedtime late — treat 9pm as a hard line before 4–5am starts.",
    "Manageable with an earlier evening routine: dim lights from 8pm, no heavy meals late, and keep the weekend lie-in under 90 minutes.",
    "The toughest pattern for owls. If swaps are possible, trade towards later starts. If not: bright light immediately on waking, and protect a strict, boring evening wind-down.",
  ],
  splits: [
    "Splits suit larks better than most patterns — put your main sleep in the early night block and use the afternoon gap for a true nap, not errands.",
    "Build two anchored sleep blocks and defend them like shifts. The danger is letting the gap become chores and the sleep become leftovers.",
    "Put your main sleep late (after the second stint) and use a morning top-up. Fight the urge to socialise through the gap on heavy weeks.",
  ],
};

export default function ChronotypeMatcher() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [rota, setRota] = useState<RotaKey>("fourOnOff");

  const answered = QUESTIONS.every((q) => answers[q.key] !== undefined);
  const total = QUESTIONS.reduce((sum, q) => sum + (answers[q.key] ?? 0), 0); // 0–12
  const typeIndex = total <= 4 ? 0 : total <= 8 ? 1 : 2;
  const typeMeta = [
    { label: "Lark (early type)", icon: SunMedium, color: "text-dawn-soft" },
    { label: "Intermediate", icon: Bird, color: "text-indigoGlow-soft" },
    { label: "Owl (late type)", icon: Moon, color: "text-teal-glow" },
  ][typeIndex];
  const compat = COMPAT[rota][typeIndex];

  return (
    <div className="card-surface p-6 md:p-8">
      <div className="space-y-6">
        {QUESTIONS.map((q) => (
          <fieldset key={q.key}>
            <legend className="mb-3 text-sm font-medium text-ink">{q.text}</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {q.options.map((opt) => {
                const selected = answers[q.key] === opt.score;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setAnswers({ ...answers, [q.key]: opt.score })}
                    aria-pressed={selected}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition-all duration-150 ${
                      selected
                        ? "border-indigoGlow bg-indigoGlow/15 text-ink"
                        : "border-white/10 bg-night-700 text-ink-muted hover:border-white/25"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}

        <div>
          <label htmlFor="rota" className="mb-2 block text-sm font-medium text-ink-muted">
            Your current rota
          </label>
          <select
            id="rota"
            value={rota}
            onChange={(e) => setRota(e.target.value as RotaKey)}
            className="w-full rounded-lg border border-white/10 bg-night-700 px-4 py-3 text-ink"
          >
            {ROTAS.map((r) => (
              <option key={r.key} value={r.key}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {answered ? (
        <div className="mt-8 rounded-xl bg-night-700 p-6">
          <p className={`flex items-center gap-2 font-display text-2xl font-semibold ${typeMeta.color}`}>
            <typeMeta.icon className="h-6 w-6" aria-hidden="true" />
            {typeMeta.label}
          </p>
          <div className="mt-5">
            <div className="flex items-baseline justify-between">
              <p className="text-sm uppercase tracking-wider text-ink-muted">
                Rota compatibility
              </p>
              <p className="font-display text-3xl font-bold">
                {compat}
                <span className="text-base text-ink-faint">/100</span>
              </p>
            </div>
            <div
              className="mt-2 h-2 w-full overflow-hidden rounded-full bg-night-600"
              role="img"
              aria-label={`Rota compatibility ${compat} out of 100`}
            >
              <div
                className="h-full rounded-full bg-indigoGlow transition-all duration-300"
                style={{ width: `${compat}%` }}
              />
            </div>
          </div>
          <p className="mt-5 leading-relaxed text-ink-muted">
            {ADVICE[rota][typeIndex]}
          </p>
        </div>
      ) : (
        <p className="mt-8 rounded-xl bg-night-700 p-5 text-sm text-ink-muted">
          Answer all four questions to see your chronotype and rota
          compatibility score.
        </p>
      )}
    </div>
  );
}
