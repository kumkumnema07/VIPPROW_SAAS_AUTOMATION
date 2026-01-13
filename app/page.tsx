"use client";
import { PartnerBrandMarquee } from "@/components/magic-ui/PartnerBrandMarquee";
import HeroSection from "./components/ui/HeroSection";

export default function Home() {
  return (
    <>
    <div className="bg-black">
      <HeroSection />
      <PartnerBrandMarquee />
    </div>
    </>
  );
}
