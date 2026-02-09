import ClientCTA from "@/components/client-sections/ClientCTA";
import DigitalMarketingDetailsHeroSection from "@/components/custom-ui/DigitalMarketingDetailsHeroSection";
import FaqSection from "@/components/mvpblock-ui/FAQSection";

export default function SaasArticleDetails() {
  return (
    <>
      <DigitalMarketingDetailsHeroSection />

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
