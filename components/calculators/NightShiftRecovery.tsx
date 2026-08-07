"use client";

import { useState } from "react";
import { Coffee, Home, Lamp, Sunset } from "lucide-react";

function addMinutes(time: string, mins: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = (h * 60 + m + mins + 24 * 60) % (24 * 60);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(
    total % 60
  ).padStart(2, "0")}`;
}

export default function NightShiftRecovery() {
  const [shiftEnd, setShiftEnd] = useState("07:00");
  const [commute, setCommute] = useState(30);

  const caffeineCutoff = addMinutes(shiftEnd, -360);
  const arriveHome = addMinutes(shiftEnd, commute);
  const windDownStart = addMinutes(arriveHome, 30);
  const lightsOut = addMinutes(shiftEnd, Math.min(commute + 90, 120));

  const rows = [
    {
      icon: Coffee,
      label: "Last caffeine",
      time: caffeineCutoff,
      note: "6 hours before shift end — anything later is still active at bedtime.",
    },
    {
      icon: Sunset,
      label: "Light defence zone begins",
      time: shiftEnd,
      note: "Sunglasses on from the moment you step outside. Morning light is the enemy.",
    },
    {
      icon: Home,
      label: "Wind-down starts",
      time: windDownStart,
      note: `Home by ${arriveHome}. Light meal, dim lights, no screens brighter than they need to be.`,
    },
    {
      icon: Lamp,
      label: "Lights out",
      time: lightsOut,
      note: "Target: asleep within 90 minutes of leaving work, in a dark, masked room.",
    },
  ];

  return (
    <div className="card-surface p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="shift-end" className="mb-2 block text-sm font-medium text-ink-muted">
            Shift end time
          </label>
          <input
            id="shift-end"
            type="time"
            value={shiftEnd}
            onChange={(e) => setShiftEnd(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-night-700 px-4 py-3 text-ink"
          />
        </div>
        <div>
          <label htmlFor="commute" className="mb-2 block text-sm font-medium text-ink-muted">
            Door-to-door commute: <span className="text-ink">{commute} min</span>
          </label>
          <input
            id="commute"
            type="range"
            min={5}
            max={120}
            step={5}
            value={commute}
            onChange={(e) => setCommute(Number(e.target.value))}
            aria-valuetext={`${commute} minutes`}
          />
        </div>
      </div>

      <ol className="mt-8 space-y-4">
        {rows.map((row) => (
          <li key={row.label} className="flex items-start gap-4 rounded-xl bg-night-700 p-4">
            <row.icon className="mt-1 h-5 w-5 shrink-0 text-indigoGlow" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-ink">{row.label}</p>
                <p className="font-display text-2xl font-semibold text-indigoGlow-soft">
                  {row.time}
                </p>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{row.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
