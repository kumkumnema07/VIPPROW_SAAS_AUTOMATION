"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-neutral-400">
            OUR VISION
          </span>

          <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter">
            How we helped Hourglass
          </h2>

          <div className="mt-10 mb-10 space-y-6 text-neutral-400 leading-relaxed font-heading text-sm">
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit.
            </p>
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit.
            </p>

            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim.
            </p>
          </div>

          <span className="text-sm uppercase tracking-widest text-neutral-400">
            OUR MISSION
          </span>

          <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter">
            How we helped Hourglass
          </h2>

          <div className="mt-10 space-y-6 text-neutral-400 leading-relaxed font-heading text-sm">
            <p>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit.
            </p>

            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim.
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
            <Image
              src="/assets/images/company/mission.jpeg"
              alt="Client testimonial"
              width={800}
              height={800}
              className="h-auto w-full object-cover rounded-2xl"
              priority
            />

            {/* OVERLAY */}

            {/* GLASS OVERLAY */}
            <div
              className="
  absolute inset-x-0 bottom-0
  bg-white/10
  backdrop-blur-xl backdrop-saturate-150
  border-t border-white/20
  py-3 px-6
  flex items-end justify-between
  rounded-bl-2xl
  rounded-br-2xl
"
            >
              <div>
                <h4 className="text-md font-semibold font-heading text-white">
                  Lulu Meyers
                </h4>
                <p className="text-sm text-white/70">
                  PM, Hourglass Web Design Agency
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-md text-white font-bold font-heading italic">
                  - Vipprow
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white text-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
