/**
 * The FIELD mark: three thin waves on a 120 x 96 grid, stroke 8, round caps.
 * Drawn as strokes so it takes `currentColor` and recolours with the type
 * around it. Nothing is ever added to it — no fourth wave, no gradient,
 * no enclosing shape. See FIELD-Brand/README.md for the construction spec.
 */
export default function FieldMark({
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
 * The FIELD wordmark, drawn as geometric paths rather than set in a font,
 * so it is identical everywhere regardless of what loads.
 * 373 x 100, cap height 100, stroke 11, 30-unit tracking.
 */
export function FieldWordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 373 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={11}
      role="img"
      aria-label="FIELD"
    >
      <path d="M 5.5,0 V 100" />
      <path d="M 0,5.5 H 58" />
      <path d="M 0,52 H 48" />
      <path d="M 93.5,0 V 100" />
      <path d="M 134.5,0 V 100" />
      <path d="M 129,5.5 H 187" />
      <path d="M 129,52 H 179" />
      <path d="M 129,94.5 H 187" />
      <path d="M 222.5,0 V 100" />
      <path d="M 217,94.5 H 269" />
      <path d="M 304.5,0 V 100" />
      <path d="M 299,5.5 H 335 C 355,5.5 367.5,25 367.5,50 C 367.5,75 355,94.5 335,94.5 H 299" />
    </svg>
  );
}
