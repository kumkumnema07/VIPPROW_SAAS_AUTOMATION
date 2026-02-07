import { BackgroundRippleEffect } from "@/components/aceternity-ui/BackgroundRippleEffec";
import CompanyStory from "@/components/aceternity-ui/sections/CompanyStory";
import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientPartnerBrandMarquee from "@/components/client-sections/ClientPartnerBrandMarquee";
import MissionSection from "@/components/ui/cards/MissionSection";
import OurVisionSection from "@/components/ui/cards/OurVisionSection";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import ServiceCardGrid from "@/components/ui/ServiceCardGrid";

export default function CompanyPage() {
  return (
    <>
      <BackgroundRippleEffect />
      <ClientPartnerBrandMarquee />

      {/* Company Story Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CompanyStory />
        <ServiceCardGrid />
      </div>
      {/* Company Story End */}

      {/* Mission Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading=" Systematic Innovation for the Future."
          des="Our approach focuses on building reliable frameworks that turn innovation into everyday execution, improving efficiency and long-term performance..."
        />
        <MissionSection />
      </div>
      {/* Mission End */}

      {/* Vision Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Growth Is Built, Not Boosted"
          des="Vipprow creates structured, data-driven growth systems powered by performance marketing and automation."
        />
        <OurVisionSection />
      </div>
      {/* Vision End */}

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <ClientCTA />
      </div>
      {/* CTA End */}
    </>
  );
}
