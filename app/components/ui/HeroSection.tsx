import { AvatarCirclesRow } from "@/components/magic-ui/AvatarCircles";
import { StarsBackgroundVipprow } from "@/components/ui/backgrounds-stars";
import PrimaryGlowButton from "@/components/ui/buttons/primary-glow-button";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function HeroSection() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans dark:bg-black">
        {/* 🌌 Stars Background */}
        <StarsBackgroundVipprow />

        {/* 🎯 Hero Content */}
        <section className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
          {/* Social Proof */}
          <div className="mb-6 flex flex-col items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
            <AvatarCirclesRow />
            <span className="whitespace-nowrap">
              Join{" "}
              <strong className="text-zinc-800 dark:text-zinc-200">
                15,725+
              </strong>{" "}
              other loving customers
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
          max-w-4xl font-heading
          text-4xl font-semibold leading-tighter
          text-zinc-900 dark:text-white
          sm:text-5xl md:text-6xl
        "
          >
            The best platform to grow your business
          </h1>

          {/* Subtitle */}
          <p
            className="
          mt-6 max-w-xl
          text-base leading-relaxed
          text-zinc-600 dark:text-zinc-400
          sm:text-md leading-tight
        "
          >
            The most powerful tools to boost sales, hire top talent, and access
            exclusive market insights.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryGlowButton heading="Get Started Now" />
            <SecondaryButton heading="Book a Demo" />
          </div>
        </section>

        {/* 🧩 Bottom Brand SVG */}
        <div className="pointer-events-none absolute bottom-24 left-0 right-0 z-0">
          <img
            src="/assets/images/logo/brand_outline.svg"
            alt="VIPPROW Brand"
            className="
            mx-auto w-[120%] max-w-none
            translate-y-1/3
            opacity-15 dark:opacity-50
            sm:w-[110%] md:w-[100%]
          "
          />
        </div>

        {/* 🌫 Bottom Fade */}
        <div
          className="
        pointer-events-none absolute bottom-0 left-0 z-10 h-20 w-full
        bg-gradient-to-t
        from-zinc-50 via-zinc-50/90 to-transparent
        dark:from-black dark:via-black/70
      "
        />
      </main>
    </>
  );
}
