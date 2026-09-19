/**
 * The SLEYP mark: three thin waves on a 120 x 96 grid, stroke 8, round caps.
 * Drawn as strokes so it takes `currentColor` and recolours with the type
 * around it. Nothing is ever added to it — no fourth wave, no gradient,
 * no enclosing shape. See FIELD-Brand/README.md for the construction spec.
 * Unchanged from the FIELD mark: the wave/sound motif carries across the rename.
 */
export default function SleypMark({
  className = "",
  settle = false,
  title,
}: {
  className?: string;
  /** Play the three-wave settle once on mount. Splash and hero only. */
  settle?: boolean;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 96"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={8}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <g className={settle ? "wave-settle" : undefined}>
        <path d="M 4,14 C 22,25 42,25 60,15 C 78,5 98,5 116,11" />
        <path d="M 4,48 C 22,59 42,59 60,49 C 78,39 98,39 116,45" />
        <path d="M 4,82 C 22,93 42,93 60,83 C 78,73 98,73 116,79" />
      </g>
    </svg>
  );
}

/**
 * The SLEYP wordmark, drawn as geometric paths rather than set in a font,
 * so it is identical everywhere regardless of what loads.
 * 380 x 100, cap height 100, stroke 11, built on the same monoline grid
 * as the FIELD wordmark it replaces (verticals, horizontals, simple arcs).
 */
export function SleypWordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={11}
      role="img"
      aria-label="Sleyp"
    >
      <path d="M 47,20 C 47,8 37,2 25,2 C 13,2 5,10 5,22 C 5,34 15,40 30,47 C 45,54 55,60 55,78 C 55,90 47,98 35,98 C 23,98 13,92 13,80" />
      <path d="M 80.5,0 V 100" />
      <path d="M 75,94.5 H 127" />
      <path d="M 150.5,0 V 100" />
      <path d="M 145,5.5 H 203" />
      <path d="M 145,52 H 195" />
      <path d="M 145,94.5 H 203" />
      <path d="M 215,0 L 243,44 L 271,0" />
      <path d="M 243,44 V 100" />
      <path d="M 304.5,0 V 100" />
      <path d="M 299,5.5 H 335 C 355,5.5 365,16 365,29 C 365,42 355,52.5 335,52.5 H 299" />
    </svg>
  );
}
