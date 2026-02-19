"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function ServiceHighlighted() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center md:text-justify">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-neutral-400">
            
          </span>

          <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter">
            Digital Marketing & Brand Growth
          </h2>

          <div className="mt-10 mb-10 space-y-6 text-neutral-400 leading-relaxed font-heading text-sm">
            <p>
              Vipprow provides result-driven digital marketing solutions to help
              businesses grow faster and build a powerful online presence. From
              social media marketing and performance advertising to lead
              generation and brand awareness, every strategy is designed to
              deliver measurable results. With a strong focus on targeting the
              right audience, Vipprow helps increase engagement, boost
              visibility, and generate consistent business growth..
            </p>


            
            <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter text-white">
              SEO & Website Development
            </h2>

            <p>
              Vipprow specializes in advanced SEO and high-performance website
              development to ensure long-term digital success. By improving
              search engine rankings and creating fast, responsive, and
              user-friendly websites, businesses can attract quality traffic and
              convert visitors into customers. Whether it’s a business website,
              e-commerce store, or landing page, every solution is optimized for
              performance and scalability.
            </p>

            <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter text-white">
              Automation, AI & Business Solutions
            </h2>

            <p>
              Beyond marketing, Vipprow empowers businesses with smart
              technologies like CRM systems, WhatsApp automation, AI-powered
              marketing (Croissix), and custom software solutions. These tools
              streamline operations, enhance customer management, and automate
              workflows for better efficiency. With expert consulting and growth
              strategies, Vipprow acts as a complete digital partner—helping
              brands scale smarter and achieve long-term success.
            </p>
          </div>

         

         

          
        </div>

        {/* RIGHT CARD */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
            <Image
              src="/assets/company/kumkum.png"
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
                <p className="text-sm text-white/70">
                  Powered by Data. Driven by Performance.
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
