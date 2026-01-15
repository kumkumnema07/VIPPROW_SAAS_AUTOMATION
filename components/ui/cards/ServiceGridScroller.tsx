"use client";

import { useState } from "react";
import GlassBottomCard from "./GlassBottomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";

/* ------------------ DATA ------------------ */

const TABS = ["Digital", "Software", "Product", "Other"] as const;

type TabKey = (typeof TABS)[number];

const SERVICES: Record<TabKey, any[]> = {
  Digital: [
    {
      image: "/assets/images/services/marketing.jpg",
      title: "Digital Marketing",
      subtitle: "Growth-driven campaigns",
      tag: "Growth",
    },
    {
      image: "/assets/images/services/seo.jpg",
      title: "SEO Optimization",
      subtitle: "Search visibility",
      tag: "SEO",
    },
    {
      image: "/assets/images/services/branding.jpg",
      title: "Brand Identity",
      subtitle: "Visual branding",
      tag: "Brand",
    },
    {
      image: "/assets/images/services/marketing.jpg",
      title: "Digital Marketing",
      subtitle: "Growth-driven campaigns",
      tag: "Growth",
    },
    {
      image: "/assets/images/services/seo.jpg",
      title: "SEO Optimization",
      subtitle: "Search visibility",
      tag: "SEO",
    },
    {
      image: "/assets/images/services/branding.jpg",
      title: "Brand Identity",
      subtitle: "Visual branding",
      tag: "Brand",
    },
    {
      image: "/assets/images/services/marketing.jpg",
      title: "Digital Marketing",
      subtitle: "Growth-driven campaigns",
      tag: "Growth",
    },
    {
      image: "/assets/images/services/seo.jpg",
      title: "SEO Optimization",
      subtitle: "Search visibility",
      tag: "SEO",
    },
    {
      image: "/assets/images/services/branding.jpg",
      title: "Brand Identity",
      subtitle: "Visual branding",
      tag: "Brand",
    },
    {
      image: "/assets/images/services/marketing.jpg",
      title: "Digital Marketing",
      subtitle: "Growth-driven campaigns",
      tag: "Growth",
    },
    {
      image: "/assets/images/services/seo.jpg",
      title: "SEO Optimization",
      subtitle: "Search visibility",
      tag: "SEO",
    },
    {
      image: "/assets/images/services/branding.jpg",
      title: "Brand Identity",
      subtitle: "Visual branding",
      tag: "Brand",
    },
  ],

  Software: [
    {
      image: "/assets/images/services/development.jpg",
      title: "Web Development",
      subtitle: "Scalable applications",
      tag: "Dev",
    },
    {
      image: "/assets/images/services/software.jpg",
      title: "Custom Software",
      subtitle: "Enterprise solutions",
      tag: "Tech",
    },
    {
      image: "/assets/images/services/development.jpg",
      title: "Web Development",
      subtitle: "Scalable applications",
      tag: "Dev",
    },
    {
      image: "/assets/images/services/software.jpg",
      title: "Custom Software",
      subtitle: "Enterprise solutions",
      tag: "Tech",
    },
    {
      image: "/assets/images/services/development.jpg",
      title: "Web Development",
      subtitle: "Scalable applications",
      tag: "Dev",
    },
    {
      image: "/assets/images/services/software.jpg",
      title: "Custom Software",
      subtitle: "Enterprise solutions",
      tag: "Tech",
    },
    {
      image: "/assets/images/services/development.jpg",
      title: "Web Development",
      subtitle: "Scalable applications",
      tag: "Dev",
    },
    {
      image: "/assets/images/services/software.jpg",
      title: "Custom Software",
      subtitle: "Enterprise solutions",
      tag: "Tech",
    },
    {
      image: "/assets/images/services/development.jpg",
      title: "Web Development",
      subtitle: "Scalable applications",
      tag: "Dev",
    },
    {
      image: "/assets/images/services/software.jpg",
      title: "Custom Software",
      subtitle: "Enterprise solutions",
      tag: "Tech",
    },
  ],

  Product: [
    {
      image: "/assets/images/services/design.jpg",
      title: "UI / UX Design",
      subtitle: "Product experiences",
      tag: "Design",
    },
    {
      image: "/assets/images/services/product.jpg",
      title: "Product Strategy",
      subtitle: "From idea to launch",
      tag: "Product",
    },
    {
      image: "/assets/images/services/design.jpg",
      title: "UI / UX Design",
      subtitle: "Product experiences",
      tag: "Design",
    },
    {
      image: "/assets/images/services/product.jpg",
      title: "Product Strategy",
      subtitle: "From idea to launch",
      tag: "Product",
    },
    {
      image: "/assets/images/services/design.jpg",
      title: "UI / UX Design",
      subtitle: "Product experiences",
      tag: "Design",
    },
    {
      image: "/assets/images/services/product.jpg",
      title: "Product Strategy",
      subtitle: "From idea to launch",
      tag: "Product",
    },
    {
      image: "/assets/images/services/design.jpg",
      title: "UI / UX Design",
      subtitle: "Product experiences",
      tag: "Design",
    },
    {
      image: "/assets/images/services/product.jpg",
      title: "Product Strategy",
      subtitle: "From idea to launch",
      tag: "Product",
    },
    {
      image: "/assets/images/services/design.jpg",
      title: "UI / UX Design",
      subtitle: "Product experiences",
      tag: "Design",
    },
    {
      image: "/assets/images/services/product.jpg",
      title: "Product Strategy",
      subtitle: "From idea to launch",
      tag: "Product",
    },
  ],

  Other: [
    {
      image: "/assets/images/services/consulting.jpg",
      title: "Consulting",
      subtitle: "Expert guidance",
      tag: "Advisor",
    },
    {
      image: "/assets/images/services/support.jpg",
      title: "Support & Maintenance",
      subtitle: "Ongoing assistance",
      tag: "Care",
    },
    {
      image: "/assets/images/services/consulting.jpg",
      title: "Consulting",
      subtitle: "Expert guidance",
      tag: "Advisor",
    },
    {
      image: "/assets/images/services/support.jpg",
      title: "Support & Maintenance",
      subtitle: "Ongoing assistance",
      tag: "Care",
    },
    {
      image: "/assets/images/services/consulting.jpg",
      title: "Consulting",
      subtitle: "Expert guidance",
      tag: "Advisor",
    },
    {
      image: "/assets/images/services/support.jpg",
      title: "Support & Maintenance",
      subtitle: "Ongoing assistance",
      tag: "Care",
    },
    {
      image: "/assets/images/services/consulting.jpg",
      title: "Consulting",
      subtitle: "Expert guidance",
      tag: "Advisor",
    },
    {
      image: "/assets/images/services/support.jpg",
      title: "Support & Maintenance",
      subtitle: "Ongoing assistance",
      tag: "Care",
    },
    {
      image: "/assets/images/services/consulting.jpg",
      title: "Consulting",
      subtitle: "Expert guidance",
      tag: "Advisor",
    },
    {
      image: "/assets/images/services/support.jpg",
      title: "Support & Maintenance",
      subtitle: "Ongoing assistance",
      tag: "Care",
    },
  ],
};

/* ------------------ COMPONENT ------------------ */

export default function ServiceGridScroller() {
  const [activeTab, setActiveTab] = useState<TabKey>("Digital");

  return (
    <section className="relative py-20 bg-black overflow-hidden max-w-7xl mx-auto">
      {/* ---------- GLASS TAB BAR (ANIMATED) ---------- */}
      <div className="px-2 md:px-0 mb-10 flex justify-center">
        <div
          className="
      relative inline-flex gap-5 p-1
      rounded-full
      bg-white/5
      backdrop-blur-2xl backdrop-saturate-150
      border border-white/15
      shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]
    "
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-4 py-2 rounded-3xl text-sm font-medium cursor-pointer"
              >
                {/* GLASS SLIDING PILL */}
                {isActive && (
                  <motion.span
                    layoutId="glass-tab-indicator"
                    className="
                absolute inset-0 rounded-3xl
                bg-blue-800/30
                backdrop-blur-xl
                border border-blue-400/30
                shadow-lg
              "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* TAB TEXT */}
                <motion.span
                  className="relative z-10 block"
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {tab}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------- SWIPER (ANIMATED) ---------- */}
      <div className="relative px-6 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // animate on tab change
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={24}
              grabCursor
              loop
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="!overflow-visible"
            >
              {SERVICES[activeTab].map((service, index) => (
                <SwiperSlide key={index} className="!w-[260px] md:!w-[280px]">
                  {/* CARD STAGGER ANIMATION */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <GlassBottomCard {...service} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
