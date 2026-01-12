import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import Header from "./components/ui/Header";
import { StarsBackgroundVipprow } from "@/components/ui/backgrounds-stars";
// import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      {/* Content */}
      <div>
        {/* <StarsBackground /> */}
        <h1 className="font-heading z-10 text-4xl font-bold text-black dark:text-white">
        <StarsBackgroundVipprow />
          VIPPROW
        </h1>
      </div>

      {/* Bottom SVG */}
      <img
        src="/assets/images/logo/brand_outline.svg"
        alt="Brand Outline"
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[95%] opacity-20 dark:opacity-50"
      />

      {/* Bottom Fade Overlay */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 h-52 w-full
          bg-gradient-to-t
          from-zinc-50 via-zinc-50/80 to-transparent
          dark:from-black dark:via-black/50
        "
      />
    </div>
  );
}
