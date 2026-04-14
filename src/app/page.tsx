import type { Metadata } from "next";

import siteConfig from "@/content/site.config";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeInformationSections } from "@/components/sections/HomeInformationSections";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    description: siteConfig.siteDescription,
    path: "/",
  });
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeInformationSections />
    </>
  );
}
