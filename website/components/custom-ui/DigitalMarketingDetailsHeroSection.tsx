"use client";

import Beams from "../Beams";
import PrimaryHeading from "../ui/heading/PrimaryHeading";

export default function DigitalMarketingDetailsHeroSection() {
  return (
    <>
      <section className="relative w-full h-[40vh] md:h-[600px] overflow-hidden">
        {/* Background Shader */}
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
          <PrimaryHeading
            heading="Services Detail Page"
            des="Ask your AI Agent for real-time"
          />
        </div>
      </section>
    </>
  );
}
