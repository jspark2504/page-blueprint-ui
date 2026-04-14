import type { MetadataRoute } from "next";

import siteConfig from "@/content/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const paths = [""] as const;

  return paths.map((path) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
