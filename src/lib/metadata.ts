import type { Metadata } from "next";

import siteConfig from "@/content/site.config";

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const base = siteConfig.url.replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export function buildPageMetadata(input: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = input.title
    ? `${input.title} · ${siteConfig.siteName}`
    : siteConfig.siteName;
  const description = input.description ?? siteConfig.siteDescription;
  const url = input.path ? absoluteUrl(input.path) : siteConfig.url;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale.replace("_", "-"),
      url,
      siteName: siteConfig.siteName,
      title: pageTitle,
      description,
      images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}
