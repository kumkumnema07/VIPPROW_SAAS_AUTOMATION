"use client";

import { GradientBars } from "@/components/ui/gradient-bars";
import { TextReveal } from "@/components/ui/text-reveal";
import PrimaryGlowButton from "../ui/buttons/primary-glow-button";
import SecondaryButton from "../ui/buttons/SecondaryButton";

export default function CTA() {
  return (
    <div className="relative h-[320px] md:h-[520px] w-full overflow-hidden rounded-2xl bg-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <GradientBars />
        <TextReveal className="font-heading text-foreground text-center text-4xl">
        Smart Automation, Real Growth!
        </TextReveal>
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-row gap-4 z-1">
          <PrimaryGlowButton heading="Get Started Now" />
          <SecondaryButton heading="Book a Demo" />
        </div>
      </div>
    </div>
  );
}
