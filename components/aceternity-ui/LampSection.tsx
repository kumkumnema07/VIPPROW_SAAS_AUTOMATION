"use client";

import PrimaryHeading from "../ui/heading/PrimaryHeading";

export function LampSection() {
  return (
    <section className="relative overflow-hidden py-40">
      
      {/* 🌞 Blue Gradient Sun */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2">
        <div className="h-[500px] w-[600px] rounded-full 
          bg-gradient-to-b from-blue-500/60 via-blue-400/30 to-transparent
          blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <PrimaryHeading
          heading="Empower Your Workflow with AI"
          des="Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to streamline your operations."
        />
      </div>

    </section>
  );
}
