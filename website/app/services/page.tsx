import { HeroHighlightSection } from "@/components/aceternity-ui/HeroHighlightSection";
import ClientCTA from "@/components/client-sections/ClientCTA";
import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
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

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <ClientCTA />
      </div>
      {/* CTA End */}
    </>
  );
}
