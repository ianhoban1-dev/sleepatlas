import { permanentRedirect } from "next/navigation";

/**
 * The noise-masking feature is now Mask AI, built natively into
 * Sleep Atlas at /mask-ai/. This route is kept so old links keep working.
 */
export default function LullaiRedirect() {
  permanentRedirect("/mask-ai/");
}
