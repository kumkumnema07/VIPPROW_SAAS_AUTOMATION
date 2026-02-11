"use client";
import PrimaryHeading from "../ui/heading/PrimaryHeading";
import Threads from "../Threads";

export function HeroHighlightSection() {
  return (
    <section className="relative w-full h-[100vh] md:h-[600px] overflow-hidden">
      {/* Background Shader */}

      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Threads
          amplitude={2}
          distance={0}
          enableMouseInteraction
          color={[30, 78, 200]}
        />
      </div>
      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
        <PrimaryHeading
          heading="Our Services"
          des="Ask your AI Agent for real-time"
        />
      </div>
    </section>
  );
}
