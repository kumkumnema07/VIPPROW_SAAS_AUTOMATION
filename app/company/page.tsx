import { BackgroundRippleEffect } from "@/components/aceternity-ui/BackgroundRippleEffec";
import { AnimatedSVGCard } from "@/components/aceternity-ui/card/AnimatedSVGCard";
import { PartnerBrandMarquee } from "@/components/magic-ui/PartnerBrandMarquee";
import MissionSection from "@/components/ui/cards/MissionSection";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import ServiceCardGrid from "@/components/ui/ServiceCardGrid";

export default function CompanyPage() {
  return (
    <>
      <BackgroundRippleEffect />
      <PartnerBrandMarquee />
      {/* Services Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <ServiceCardGrid />
      </div>
      {/* Services End */}


      {/* Mission Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <MissionSection />
      </div>
      {/* Mission End */}
    </>
  );
}
