import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Explicitly welcomes AI/answer-engine crawlers (GEO requirement).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin/", "/account/"] },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
