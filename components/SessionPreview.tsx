import SleypMark from "@/components/SleypMark";

/**
 * A static, server-rendered picture of a Sleyp session: the product shown
 * as product, the way Linear and Cal.com lead with real UI. It is an
 * illustration (labelled as such for screen readers), not a working player;
 * the real mixer lives at /session/.
 */

const LAYERS = [
  { name: "Rain, steady", level: 72, free: false },
  { name: "Brown noise", level: 54, free: true },
  { name: "Cabin hum", level: 31, free: false },
  { name: "Wind, distant", level: 18, free: false },
];

const BARS = [38, 62, 48, 84, 70, 100, 58, 80, 44, 68, 54, 90, 64, 42, 74, 56, 36, 60];

export default function SessionPreview({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} role="img" aria-label="Illustration of a Sleyp session: four sound layers mixed together, with a sleep timer fading out.">
      {/* Main window */}
      <div className="frame">
        <div className="frame-bar">
          <span className="frame-dot" />
          <span className="frame-dot" />
          <span className="frame-dot" />
          <span className="ml-3 flex items-center gap-2 font-display text-xs font-medium text-ink-faint">
            <SleypMark className="h-3 w-auto text-sage" />
            getsleyp.com/session
          </span>
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">Tonight&apos;s mix</p>
              <p className="mt-1.5 font-serif text-[1.75rem] leading-none text-ink sm:text-3xl">
                Afternoon, <em className="text-sage-deep">quiet street</em>
              </p>
            </div>
            <span className="pill shrink-0">
              <span className="pill-dot" /> Playing
            </span>
          </div>

          {/* Live-feeling spectrum */}
          <div className="mt-6 flex h-20 items-end gap-[5px] rounded-2xl bg-mist/70 px-4 pb-4 pt-5">
            {BARS.map((h, i) => (
              <span
                key={i}
                className={`flex-1 origin-bottom animate-equalize rounded-full ${
                  i % 4 === 1 ? "bg-sage" : i % 4 === 3 ? "bg-sage/60" : "bg-soft"
                }`}
                style={{
                  height: `${h}%`,
                  animationDelay: `${(i * 0.11).toFixed(2)}s`,
                  animationDuration: `${(1.5 + (i % 5) * 0.3).toFixed(2)}s`,
                }}
              />
            ))}
          </div>

          <ul className="mt-5 divide-y divide-ink/[0.06]">
            {LAYERS.map((layer) => (
              <li
                key={layer.name}
                className="grid grid-cols-[1fr_minmax(72px,120px)_40px] items-center gap-4 py-3"
              >
                <span className="flex items-center gap-2 font-display text-sm font-medium text-ink">
                  {layer.name}
                  {!layer.free && (
                    <span className="hidden rounded-full bg-sand/25 px-1.5 sm:inline py-px text-[10px] font-semibold uppercase tracking-wider text-sand-ink">
                      Premium
                    </span>
                  )}
                </span>
                <span className="relative h-1 rounded-full bg-soft">
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-sage"
                    style={{ width: `${layer.level}%` }}
                  />
                  <span
                    className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-sage shadow-press"
                    style={{ left: `${layer.level}%` }}
                  />
                </span>
                <span className="tabular text-right font-mono text-xs text-ink-faint">
                  {layer.level}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-between rounded-2xl border border-ink/[0.07] bg-paper px-4 py-3">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 36 36" className="h-9 w-9 -rotate-90" aria-hidden="true">
                <circle cx="18" cy="18" r="15" fill="none" stroke="#D9E4E2" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#5D8786"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="94.2"
                  strokeDashoffset="30"
                />
              </svg>
              <div>
                <p className="font-display text-xs text-ink-faint">Sleep timer</p>
                <p className="tabular font-mono text-sm font-medium text-ink">1:24:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-l border-ink/[0.07] pl-4">
              <div className="flex h-7 w-16 items-end gap-[3px]" aria-hidden="true">
                {[12, 20, 30, 42, 56, 70, 86, 100].map((h, i) => (
                  <span key={i} className="flex-1 rounded-sm bg-sand/80" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div>
                <p className="font-display text-xs text-ink-faint">Wake-up fade-in</p>
                <p className="tabular font-mono text-sm font-medium text-ink">14:15</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating detail: layers count */}
      <div className="absolute -right-3 -top-7 hidden rounded-2xl bg-deep px-4 py-3 text-cream shadow-lift sm:block lg:-right-8">
        <p className="font-serif text-3xl leading-none">13</p>
        <p className="mt-1 font-display text-[11px] font-medium text-deep-haze">layers, generated live</p>
      </div>
    </div>
  );
}
