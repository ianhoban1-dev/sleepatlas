import { permanentRedirect } from "next/navigation";

/**
 * The noise-masking engine is now simply the SLEYP session, at /session/.
 * This route is kept so old links and search results keep working.
 */
export default function MaskAiRedirect() {
  permanentRedirect("/session/");
}
