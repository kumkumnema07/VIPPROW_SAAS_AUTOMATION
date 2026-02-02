import DigitalMarketingHeroSection from "@/components/custom-ui/DigitalMarketingHeroSection";
import InfoSection from "@/components/custom-ui/InfoSection";
import { CTA } from "@/components/magic-ui/CTA";
import { TestimonialMarquee } from "@/components/magic-ui/Testimonials";
import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Digital Markting Hero Section Start. */}
      <DigitalMarketingHeroSection />
      {/* Digital Markting Hero Section End. */}

      {/* Info Section Start */}
      <InfoSection />
      {/* Info Section End */}

      {/* Services Start */}
      <ServiceGridScroller />
      {/* Services End */}

      {/* Testimonial Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
        />
        <TestimonialMarquee />
      </div>
      {/* Testimonial End */}

      {/* CTA Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <CTA />
      </div>
      {/* CTA End */}
    </>
  );
}
