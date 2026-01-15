import { ClientCardCarousel } from "@/components/aceternity-ui/ClientCardCarousel";
import { HeroHighlightSection } from "@/components/aceternity-ui/HeroHighlightSection";
import { CTA } from "@/components/magic-ui/CTA";
import GlassBottomCard from "@/components/ui/cards/GlassBottomCard";
import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
import EditorialGrid from "@/components/ui/EditorialGrid";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

export default function ServicesPage() {
  return (
    <>
      <HeroHighlightSection />

      {/* Service Tab Grid Start. */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <ServiceGridScroller />
      </div>
      {/* Service Tab Grid End. */}

      {/* Client Cards Start */}
      <div className="max-w-7xl mx-auto">
        <ClientCardCarousel />
      </div>
      {/* Client Cards End */}

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
      {/* CTA End */}
    </>
  );
}
