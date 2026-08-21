"use client";

import { useState } from "react";
import { AlarmClock, BedDouble, Sun, UtensilsCrossed, XCircle } from "lucide-react";

function addMinutes(time: string, mins: number): string {
  const [h, m] = time.split(":").map(Number);
  const total = (h * 60 + m + mins + 48 * 60) % (24 * 60);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(
    total % 60
  ).padStart(2, "0")}`;
}

export default function RotaFlipFlop() {
  const [shiftEnd, setShiftEnd] = useState("07:00");
  const [targetBedtime, setTargetBedtime] = useState("22:30");

  const anchorStart = addMinutes(shiftEnd, 60);
  const anchorEnd = addMinutes(anchorStart, 240); // 4h anchor sleep
  const steps = [
    {
      icon: BedDouble,
      title: `Anchor sleep: ${anchorStart} – ${anchorEnd}`,
      body: "Four hours, no more. Set an alarm and put it across the room. This clears the worst of the debt while keeping enough sleep pressure for tonight.",
    },
    {
      icon: Sun,
      title: `Bright light immediately from ${anchorEnd}`,
      body: "Get outside or at a bright window within 15 minutes of waking. Light now tells your body clock the day has started.",
    },
    {
      icon: UtensilsCrossed,
      title: `Proper meal by ${addMinutes(anchorEnd, 60)}`,
      body: "A real daytime meal is a strong body-clock signal. Eat with the family if you can, the social cue helps too.",
    },
    {
      icon: XCircle,
      title: "No naps after 16:00",
      body: "This is where flip-flops fail. An evening doze drains the sleep pressure you need for a full first night.",
    },
    {
      icon: AlarmClock,
      title: `Bed at ${targetBedtime}, expect a slightly rough first night`,
      body: "You may wake early the first night. Hold the wake time anyway; by night two you're back on family hours.",
    },
  ];

  return (
    <div className="card-surface p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="final-end" className="mb-2 block text-sm font-medium text-ink-muted">
            Final night shift ends
          </label>
          <input
            id="final-end"
            type="time"
            value={shiftEnd}
            onChange={(e) => setShiftEnd(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-night-700 px-4 py-3 text-ink"
          />
        </div>
        <div>
          <label htmlFor="target-bed" className="mb-2 block text-sm font-medium text-ink-muted">
            Target &lsquo;normal&rsquo; bedtime
          </label>
          <input
            id="target-bed"
            type="time"
            value={targetBedtime}
            onChange={(e) => setTargetBedtime(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-night-700 px-4 py-3 text-ink"
          />
        </div>
      </div>

      <ol className="mt-8 space-y-4">
        {steps.map((step, i) => (
          <li key={step.title} className="flex items-start gap-4 rounded-xl bg-night-700 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigoGlow/15 font-display text-sm font-semibold text-indigoGlow">
              {i + 1}
            </span>
            <div>
              <p className="flex items-center gap-2 font-semibold text-ink">
                <step.icon className="h-4 w-4 text-indigoGlow" aria-hidden="true" />
                {step.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
