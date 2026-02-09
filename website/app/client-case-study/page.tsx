import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientCaseStudyHeroSection from "@/components/custom-ui/ClientCaseStudyHeroSection";
import FaqSection from "@/components/mvpblock-ui/FAQSection";
import FlipCardGrid from "@/components/sections/FlipCardGrid";
import ClientCaseStudyGridScroller from "@/components/ui/cards/ClientCaseStudyGridScroller";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

export default function ClientCaseStudyPage() {
  return (
    <>
      <ClientCaseStudyHeroSection />

      {/* Top 3 Pointers Start */}
      <div className="max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <FlipCardGrid />
      </div>
      {/* Top 3 Pointers End */}

      {/* Client Category A Grid Start. */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <ClientCaseStudyGridScroller />
      </div>
      {/* Client Category A Grid End. */}

      {/* Client Category B Grid Start. */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <ClientCaseStudyGridScroller />
      </div>
      {/* Client Category B Grid End. */}

      {/* Client Category C Grid Start. */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <ClientCaseStudyGridScroller />
      </div>
      {/* Client Category C Grid End. */}

      {/* FAQ Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <FaqSection />
      </div>
      {/* FAQ End */}

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <ClientCTA />
      </div>
      {/* CTA End */}
    </>
  );
}
