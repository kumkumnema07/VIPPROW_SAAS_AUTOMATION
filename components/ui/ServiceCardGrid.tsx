"use client";

import { AnimatedSVGCard } from "../aceternity-ui/card/AnimatedSVGCard";

export default function ServiceCardGrid() {
  return (
    <section className="py-22">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <AnimatedSVGCard/>
        <AnimatedSVGCard/>
        <AnimatedSVGCard/>
      </div>
    </section>
  );
}
