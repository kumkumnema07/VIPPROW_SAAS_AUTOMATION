import { HeroHighlightSection } from "@/components/aceternity-ui/HeroHighlightSection";
import ClientCTA from "@/components/client-sections/ClientCTA";
import ClientTestimonialMarquee from "@/components/client-sections/ClientTestimonialMarquee";
import FaqSection from "@/components/mvpblock-ui/FAQSection";
import ServiceDes from "@/components/ui/cards/ServiceDes";
import ServiceGridScroller from "@/components/ui/cards/ServiceGridScroller";
import ServiceHighlighted from "@/components/ui/cards/ServiceHighlited";
import PrimaryHeading from "@/components/ui/heading/PrimaryHeading";
import ServiceCardGrid from "@/components/ui/ServiceCardGrid";

export default function ServicesPage() {
  return (
    <>
      <HeroHighlightSection />

      {/* Service Tab Grid Start. */}
      <div className="max-w-7xl mx-auto">
        <PrimaryHeading
          heading=" Services That Move Your Business Forward"
          des="Discover connected services designed to streamline operations and accelerate growth.."
        />
        <ServiceCardGrid />
        <ServiceGridScroller />
      </div>


      

      {/* Service Tab Grid End. */}
       {/*Service des 1 */}
<div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Driving Business Growth with Smart Innovation."
          des="Authentic stories from brands that achieved measurable growth through Vipprow’s strategic approach."
        />
        <ServiceDes />
      </div>
       {/*Service des 2 */}
       <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Grow Smarter. Scale Faster. With Vipprow."
          des="Your All-in-One Partner for Marketing, Technology, and Business Growth."
        />
        <ServiceHighlighted />
      </div>



      {/* Testimonial Start */}
      <div className="pt-20 max-w-7xl mx-auto">
        <PrimaryHeading
          heading="Driving Business Growth with Smart Innovation."
          des="
From Digital Marketing to AI Automation – We Power Your Growth Journey."
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
