"use client";
import { PartnerBrandMarquee } from "@/components/magic-ui/PartnerBrandMarquee";
import HeroSection from "./components/ui/HeroSection";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import { BentoGridSection } from "@/components/aceternity-ui/BentoGrid";
import { TestimonialMarquee } from "@/components/magic-ui/Testimonials";
import EditorialGrid from "@/components/ui/EditorialGrid";
import { CTA } from "@/components/magic-ui/CTA";
import MultiSectionScroller from "@/components/ui/MultiSectionScroller";
import ServiceCardGrid from "@/components/ui/ServiceCardGrid";

export default function Home() {
  return (
    <>
      <div className="bg-transparent">
        <HeroSection />
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

        {/* Bento Grid Start */}
        <div className="pt-20">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <BentoGridSection />
        </div>
        {/* Bento Grid End */}

        {/* Testimonial Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <TestimonialMarquee />
        </div>
        {/* Testimonial End */}

        {/* Editorial Grid Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <PrimaryHeading
            heading="Empower Your Workflow with AI"
            des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insghts to streamline your operations."
          />
          <EditorialGrid itemsPerPage={3} />
        </div>
        {/* Editorial Grid End */}

        {/* CTA Start */}
        <div className="pt-20 max-w-7xl mx-auto">
          <CTA />
        </div>
        {/* CTA End */}
      </div>
    </>
  );
}
