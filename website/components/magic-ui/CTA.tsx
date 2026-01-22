import PrimaryGlowButton from "../ui/buttons/primary-glow-button";
import SecondaryButton from "../ui/buttons/SecondaryButton";
import { DottedMap } from "../ui/dotted-map";

const markers = [
  { lat: 40.7128, lng: -74.006, size: 0.3 },
  { lat: 34.0522, lng: -118.2437, size: 0.3 },
  { lat: 51.5074, lng: -0.1278, size: 0.3 },
  { lat: -33.8688, lng: 151.2093, size: 0.3 },
  { lat: 28.6139, lng: 77.209, size: 0.3 },
];

export function CTA() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      {/* 🌍 Map */}
      <DottedMap
        markers={markers}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* 🌫 Gradient overlay (optional but helps contrast) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* 📝 CENTERED TEXT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h1 className="max-w-4xl font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            The best platform to{" "}
            <span className="text-zinc-300">grow your business</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            The most powerful tools to boost sales, hire top talent, and access
            exclusive market insights.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-row gap-4">
            <PrimaryGlowButton heading="Get Started Now" />
            <SecondaryButton heading="Book a Demo" />
          </div>
        </div>
      </div>
    </div>
  );
}
