import { permanentRedirect } from "next/navigation";

/**
 * Lullai became the built-in noise-masking engine, which is now simply
 * the SLEYP session at /session/. Kept so old links keep working.
 */
export default function LullaiRedirect() {
  permanentRedirect("/session/");
}
