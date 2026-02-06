import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientTestimonialMarquee from "@/components/client-sections/ClientTestimonialMarquee";
import AutomationBentoGridSection from "@/components/custom-ui/AutomationBentoGridSection";
import AutomationHeroSection from "@/components/custom-ui/AutomationHeroSection";
import InfoSection from "@/components/custom-ui/InfoSection";
import DigitalMarketingFeatureSection from "@/components/mvpblock-ui/DigitalMarketingFeatureSection";
import FaqSection from "@/components/mvpblock-ui/FAQSection";
import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

export default function AutomationPage() {
  return (
    <>
      {/* Automation Hero Section Start. */}
      <AutomationHeroSection />
      {/*Automation Hero Section End. */}

      {/* Digital Marketing Feature Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <DigitalMarketingFeatureSection />
      </div>
      {/* Digital Marketing Feature End */}

      


       {/* AutomationBentoGridSection Feature Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <AutomationBentoGridSection />
      </div>
      {/* AutomationBentoGridSection Feature End */}

      {/* Testimonial Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <ClientTestimonialMarquee />
      </div>
      {/* Testimonial End */}

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
