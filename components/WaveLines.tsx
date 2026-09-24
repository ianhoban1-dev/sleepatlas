/**
 * Decorative background linework drawn in the same language as the mark:
 * thin, round-capped waves. It is texture, never the logo, and carries no
 * content, so it is hidden from assistive tech.
 *
 * Each line is periodic over 360 units and the SVG is twice the visible
 * width, so translating it by -50% loops seamlessly (CSS only, GPU-cheap).
 */
function wavePath(y: number, amp: number, period = 360, width = 2880) {
  let d = `M 0,${y}`;
  for (let x = 0; x < width; x += period) {
    const q = period / 4;
    d += ` C ${x + q},${y + amp} ${x + q * 2 - q / 2},${y + amp} ${x + q * 2},${y}`;
    d += ` C ${x + q * 3 - q / 2},${y - amp} ${x + q * 3 + q / 2},${y - amp} ${x + period},${y}`;
  }
  return d;
}

export default function WaveLines({
  className = "",
  lines = 9,
  tone = "sage",
  animate = true,
}: {
  className?: string;
  lines?: number;
  tone?: "sage" | "cream";
  animate?: boolean;
}) {
  const stroke = tone === "cream" ? "rgba(245,243,237,0.09)" : "rgba(93,135,134,0.16)";
  const gap = 560 / (lines + 1);
  return (
    <div className={`wave-lines overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 2880 600"
        preserveAspectRatio="none"
        className={`h-full w-[200%] max-w-none ${animate ? "animate-wave-flow" : ""}`}
        fill="none"
      >
        {Array.from({ length: lines }, (_, i) => {
          const y = 20 + gap * (i + 1);
          const amp = 10 + ((i * 7) % 5) * 4;
          return (
            <path
              key={i}
              d={wavePath(y, amp)}
              stroke={stroke}
              strokeWidth={1.25}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
    </div>
  );
}
