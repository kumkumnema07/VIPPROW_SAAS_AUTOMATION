"use client";
import { PartnerBrandMarquee } from "@/components/magic-ui/PartnerBrandMarquee";
import HeroSection from "./components/ui/HeroSection";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { BentoGridThird } from "@/components/aceternity-ui/BentoGrid";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <HeroSection />
        <PartnerBrandMarquee />
        {/* Bento Grid Start */}
        <div className="py-36">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <BentoGridThird />
        </div>
        {/* Bento Grid End */}
      </div>
    </>
  );
}
