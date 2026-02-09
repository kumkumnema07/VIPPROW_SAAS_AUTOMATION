"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import DarkVeil from "../react-bits/DarkVeil";
import PrimaryHeading from "../ui/heading/PrimaryHeading";

export function HeroHighlightSection() {
  return (
   <section className="relative w-full h-[40vh] md:h-[600px] overflow-hidden">
      {/* Background Shader */}
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.9}
        scanlineFrequency={2}
        warpAmount={8}
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-4">
        <PrimaryHeading
          heading="Our Services"
          des="Ask your AI Agent for real-time"
        />
      </div>
    </section>


    // <HeroHighlight>
    //   <motion.h1
    //     initial={{
    //       opacity: 0,
    //       y: 20,
    //     }}
    //     animate={{
    //       opacity: 1,
    //       y: [20, -5, 0],
    //     }}
    //     transition={{
    //       duration: 0.5,
    //       ease: [0.4, 0.0, 0.2, 1],
    //     }}
    //     className="text-3xl px-2 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-3xl leading-normal lg:leading-snug text-center mx-auto font-heading"
    //   >
    //     Everything is far away. Everything
    //     is a<br/>
    //     <Highlight className="text-black dark:text-white font-heading">
    //       Vipprow.
    //     </Highlight>
    //   </motion.h1>
    // </HeroHighlight>

   
  );
}
