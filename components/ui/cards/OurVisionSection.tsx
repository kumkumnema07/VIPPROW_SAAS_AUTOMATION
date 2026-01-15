"use client";

import { ArrowUpRight } from "lucide-react";

export default function OurVisionSection() {
  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden">
      {/* Subtle background glow */}
      {/* <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-violet-600/10 blur-[120px]" /> */}

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-neutral-400 font-heading">
            Our Vision
          </span>

          <h2 className="mt-4 text-4xl md:text-4xl font-semibold leading-tight font-heading">
            Overflowing with meaningful experiences
          </h2>

          <p className="mt-6 text-neutral-400 max-w-xl leading-relaxed font-heading text-sm">
            We believe software should feel effortless yet powerful. Our vision
            is to build products that scale with your ambition—helping teams
            move faster, make smarter decisions, and stay focused on what
            matters most.
          </p>

          {/* Vision bullets */}
          <div className="mt-12 space-y-8">
            <VisionItem
              title="Clarity over complexity"
              description="Design systems that reduce friction and help teams stay aligned, no matter the scale."
            />
            <VisionItem
              title="Decisions backed by data"
              description="Transform real-time insights into confident actions using accessible analytics."
            />
            <VisionItem
              title="Built for long-term growth"
              description="Create platforms that evolve with your users, your business, and the future."
            />
          </div>
        </div>

        {/* RIGHT GLASS PANEL */}
        <div className="relative">
          <div
            className="
            relative rounded-2xl border border-white/15
            bg-white/5 backdrop-blur-2xl backdrop-saturate-150
            shadow-[0_0_80px_-15px_rgba(139,92,246,0.35)]
            overflow-hidden
          "
          >
            {/* RIGHT GLASS PANEL */}
            <div className="relative">
              <div
                className="
      relative overflow-hidden rounded-2xl
      border border-white/15
      bg-white/5
      backdrop-blur-2xl backdrop-saturate-150
      shadow-[0_0_80px_-15px_rgba(139,92,246,0.35)]
    "
              >
                <img
                  src="/assets/images/company/mission.jpeg"
                  alt="Product preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- SUB COMPONENTS ----------------- */

function VisionItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h4 className="font-semibold flex items-center gap-2 font-heading">
        {title}
        <ArrowUpRight className="h-4 w-4 text-violet-400" />
      </h4>
      <p className="mt-2 text-sm text-neutral-400 max-w-md">{description}</p>
    </div>
  );
}
