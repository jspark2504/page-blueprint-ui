import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import siteConfig from "@/content/site.config";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { buildPageMetadata } from "@/lib/metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildPageMetadata({});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.siteName,
  url: siteConfig.url,
  description: siteConfig.siteDescription,
  inLanguage: siteConfig.locale.replace("_", "-"),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.organizationJsonLd.name,
  url: siteConfig.url,
  description: siteConfig.organizationJsonLd.description,
  email: siteConfig.contact.email,
  sameAs: siteConfig.organizationJsonLd.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <JsonLd id="ld-json-website" data={websiteJsonLd} />
        <JsonLd id="ld-json-organization" data={orgJsonLd} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
