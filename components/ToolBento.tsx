import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { TOOLS } from "@/lib/tools";

/**
 * The tools as a bento grid. Each cell carries a small, illustrative
 * fragment of what the calculator returns (the Cal.com pattern: show the
 * product, don't describe it). Names, taglines and links come from
 * lib/tools.ts, so a new tool appears here with no layout change: any tool
 * without a bespoke fragment falls back to a plain cell.
 */

function RecoveryFragment() {
  const rows = [
    { t: "02:30", label: "Caffeine cut-off", tone: "bg-sand" },
    { t: "06:45", label: "Shades on for the drive", tone: "bg-sage/60" },
    { t: "07:30", label: "Wind-down begins", tone: "bg-sage" },
    { t: "08:10", label: "Lights out", tone: "bg-deep" },
  ];
  return (
    <ol className="relative mt-8 space-y-3.5 before:absolute before:bottom-2 before:left-[3.4rem] before:top-2 before:w-px before:bg-ink/10">
      {rows.map((r) => (
        <li key={r.t} className="relative flex items-center gap-4">
          <span className="tabular w-11 font-mono text-xs text-ink-faint">{r.t}</span>
          <span className={`relative z-10 h-2.5 w-2.5 rounded-full ring-4 ring-card ${r.tone}`} />
          <span className="font-display text-sm font-medium text-ink">{r.label}</span>
        </li>
      ))}
    </ol>
  );
}

function FlipFlopFragment() {
  const days = [
    { d: "Sun", shift: [0, 30], sleep: [42, 80] },
    { d: "Mon", shift: [0, 0], sleep: [55, 88] },
    { d: "Tue", shift: [0, 0], sleep: [88, 100] },
  ];
  return (
    <div className="mt-6 space-y-2.5">
      {days.map((day) => (
        <div key={day.d} className="flex items-center gap-3">
          <span className="w-8 font-display text-xs text-ink-faint">{day.d}</span>
          <div className="relative h-3 flex-1 rounded-full bg-mist">
            {day.shift[1] > 0 && (
              <span
                className="absolute inset-y-0 rounded-full bg-sand/70"
                style={{ left: `${day.shift[0]}%`, width: `${day.shift[1] - day.shift[0]}%` }}
              />
            )}
            <span
              className="absolute inset-y-0 rounded-full bg-sage"
              style={{ left: `${day.sleep[0]}%`, width: `${day.sleep[1] - day.sleep[0]}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DebtFragment() {
  const bars = [5.5, 6, 4.5, 5, 7.5, 8, 6.5];
  return (
    <div className="mt-6 flex h-16 items-end gap-1.5">
      {bars.map((b, i) => (
        <span
          key={i}
          className={`flex-1 rounded-md ${b < 6 ? "bg-sand/70" : "bg-sage/70"}`}
          style={{ height: `${(b / 8) * 100}%` }}
        />
      ))}
    </div>
  );
}

function NoiseFragment() {
  return (
    <div className="mt-6">
      <div className="flex h-2 overflow-hidden rounded-full">
        <span className="w-1/3 bg-soft" />
        <span className="w-1/3 bg-sage/60" />
        <span className="w-1/3 bg-sand/80" />
      </div>
      <div className="relative mt-1">
        <span className="absolute -top-4 left-[62%] h-3 w-0.5 rounded bg-deep" />
      </div>
      <div className="mt-2 flex justify-between font-mono text-[11px] text-ink-faint">
        <span>30 dB</span>
        <span>55</span>
        <span>80 dB</span>
      </div>
    </div>
  );
}

function ChronotypeFragment() {
  return (
    <div className="mt-6 flex items-center gap-4">
      <svg viewBox="0 0 64 64" className="h-16 w-16 shrink-0" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="none" stroke="#EDF2F0" strokeWidth="8" />
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="#5D8786"
          strokeWidth="8"
          strokeDasharray="163.4"
          strokeDashoffset="58"
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
        />
      </svg>
      <p className="font-display text-sm leading-snug text-ink-muted">
        Late type on a
        <br />
        <span className="font-medium text-ink">rotating rota</span>
      </p>
    </div>
  );
}

const FRAGMENTS: Record<string, () => ReactNode> = {
  "night-shift-recovery-calculator": RecoveryFragment,
  "rota-flip-flop-calculator": FlipFlopFragment,
  "sleep-debt-fatigue-logger": DebtFragment,
  "noise-calibration-tool": NoiseFragment,
  "chronotype-rota-matcher": ChronotypeFragment,
};

function Cell({
  href,
  title,
  body,
  cta,
  className = "",
  children,
}: {
  href: string;
  title: string;
  body: string;
  cta: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group card-surface card-hover relative flex flex-col overflow-hidden p-6 md:p-7 ${className}`}
    >
      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
      <div aria-hidden="true">{children}</div>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-display text-sm font-medium text-sage-deep">
        {cta}
        <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function ToolBento() {
  const [first, ...rest] = TOOLS;
  const FirstFrag = first ? FRAGMENTS[first.slug] : undefined;

  return (
    <div className="grid gap-4 md:grid-cols-6 lg:grid-rows-[auto_auto]">
      {first && (
        <Cell
          href={`/tools/${first.slug}/`}
          title={first.name}
          body={first.tagline}
          cta="Open calculator"
          className="md:col-span-6 lg:col-span-2 lg:row-span-2"
        >
          <div className="dot-grid -mx-2 mt-2 rounded-2xl px-2 pb-2">
            {FirstFrag ? <FirstFrag /> : null}
          </div>
          <p className="mt-6 hidden text-sm leading-relaxed text-ink-muted lg:block">
            {first.description}
          </p>
        </Cell>
      )}

      {rest.map((tool) => {
        const Frag = FRAGMENTS[tool.slug];
        return (
          <Cell
            key={tool.slug}
            href={`/tools/${tool.slug}/`}
            title={tool.name}
            body={tool.tagline}
            cta="Open calculator"
            className="md:col-span-3 lg:col-span-2"
          >
            {Frag ? <Frag /> : null}
          </Cell>
        );
      })}

      {/* The Score closes the grid on the dark surface */}
      <Link
        href="/scores/"
        className="group on-deep card-hover relative flex flex-col overflow-hidden rounded-soft p-6 md:col-span-6 md:flex-row md:items-center md:justify-between md:p-8 lg:col-span-6"
      >
        <div className="max-w-xl">
          <p className="eyebrow eyebrow-rule">The framework</p>
          <h3 className="mt-3 font-serif text-3xl font-normal leading-tight text-cream md:text-4xl">
            One number for how your rota is <em className="text-sand">really</em> going
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-deep-haze">
            The Sleyp Score is built from rota adaptation, noise impact,
            circadian recovery and accumulated sleep debt.
          </p>
        </div>
        <div className="mt-6 flex items-center gap-6 md:mt-0">
          <div className="text-right">
            <p className="tabular font-serif text-7xl leading-none text-cream">72</p>
            <p className="mt-1 font-display text-xs text-deep-haze">Example score</p>
          </div>
          <span className="inline-flex items-center gap-1.5 font-display text-sm font-medium text-sand">
            How it works
            <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </div>
  );
}
