import { APP } from "@/lib/site";

/**
 * "Get the Sleyp app" call to action. Renders a real App Store link once
 * APP.storeUrl is set in lib/site.ts; until then it says the app is coming.
 */
export default function AppCta({
  className = "",
  label = "Get the Sleyp app",
}: {
  className?: string;
  label?: string;
}) {
  if (APP.storeUrl) {
    return (
      <a
        href={APP.storeUrl}
        className={`btn-secondary btn-lg ${className}`}
        rel="noopener"
      >
        {label}
      </a>
    );
  }
  return (
    <span className={`text-sm text-ink-muted ${className}`}>
      The Sleyp iOS app is coming soon to the App Store.
    </span>
  );
}
