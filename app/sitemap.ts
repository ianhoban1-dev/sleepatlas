import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/tools/",
    "/mask-ai/",
    "/trackers/",
    "/scores/",
    "/resources/",
    "/shop/",
    "/pricing/",
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${SITE.url}${p}`,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...TOOLS.map((t) => ({
      url: `${SITE.url}/tools/${t.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...ARTICLES.map((a) => ({
      url: `${SITE.url}/resources/${a.slug}/`,
      lastModified: a.datePublished,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
