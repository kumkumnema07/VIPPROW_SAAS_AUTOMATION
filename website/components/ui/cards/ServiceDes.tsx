"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ServiceDes() {
  return (
    <section className="relative py-10 px-6 md:px-16 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_0_80px_-15px_rgba(139,92,246,0.35)]">
            <Image
              src="/assets/company/vipprow_services.png"
              alt="Company Vision"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-neutral-400"></span>

          <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter">
            Digital Marketing
          </h2>


          

          <div className="mt-10 mb-10 space-y-6 text-neutral-400 leading-relaxed font-heading text-sm">
            <p>
              Vipprow helps businesses grow online with result-driven digital
              marketing strategies that increase visibility, engagement, and
              lead generation. From social media marketing and paid ads to SEO,
              every approach is focused on attracting the right audience and
              driving real business growth.
            </p>
            <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter text-white">
              Software Development
            </h2>

            <p>
              Vipprow builds powerful, scalable, and user-friendly digital
              solutions including websites, e-commerce platforms, mobile apps,
              and custom software. Each product is designed to deliver high
              performance, smooth user experience, and long-term reliability.
            </p>

            <h2 className="mt-4 text-4xl md:text-4xl font-semibold font-heading leading-tighter text-white">
              Business Automation (AI)
            </h2>

            <p>
              Vipprow empowers businesses with AI-driven automation tools like
              Croissix, CRM systems, and WhatsApp automation to streamline
              operations and improve efficiency. These smart solutions help save
              time, manage leads effectively, and scale business growth faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- SUB COMPONENT ----------------- */

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
        <ArrowUpRight className="h-4 w-4 text-blue-500" />
      </h4>
      <p className="mt-2 text-sm text-neutral-400 max-w-md">{description}</p>
    </div>
  );
}
