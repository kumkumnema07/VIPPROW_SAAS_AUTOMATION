import { BackgroundRippleEffect } from "@/components/aceternity-ui/BackgroundRippleEffec";
import { AnimatedSVGCard } from "@/components/aceternity-ui/card/AnimatedSVGCard";
import CompanyStory from "@/components/aceternity-ui/sections/CompanyStory";
import { CTA } from "@/components/magic-ui/CTA";
import { PartnerBrandMarquee } from "@/components/magic-ui/PartnerBrandMarquee";
import MissionSection from "@/components/ui/cards/MissionSection";
import OurVisionSection from "@/components/ui/cards/OurVisionSection";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import ServiceCardGrid from "@/components/ui/ServiceCardGrid";

export default function CompanyPage() {
  return (
    <>
      <BackgroundRippleEffect />
      <PartnerBrandMarquee />

      {/* Company Story Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CompanyStory />
      <ServiceCardGrid />
      </div>
      {/* Company Story End */}

      {/* Services Start */}
      
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

      {/* Vision Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <OurVisionSection />
      </div>
      {/* Vision End */}

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
      {/* CTA End */}
    </>
  );
}
