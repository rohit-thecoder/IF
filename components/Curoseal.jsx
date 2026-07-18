"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

// --- Original card data ---
const originalCardData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1690883794145-e96486fbe66b?q=80&w=2032&auto=format&fit=crop",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1763568258605-6783d4fad7b5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1722859352952-9e0e24886a1d?q=80&w=2143&auto=format&fit=crop",
  },
];

const cardData = [
  ...originalCardData,
  ...originalCardData.map((card) => ({ ...card, id: `${card.id}-copy` })),
];

export default function Curoseal() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const swiperRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Text reveal
      gsap.from(contentRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Swiper reveal
      gsap.from(swiperRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: swiperRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // CTA reveal
      gsap.from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative bg-white py-24 w-full overflow-hidden"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-7xl mx-auto">
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-200/15 rounded-full blur-2xl" />
              <div className="absolute bottom-32 right-32 w-72 h-72 bg-purple-200/15 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="relative max-w-5xl mx-auto text-center mb-20 px-6 z-10"
        >
          <h1
            className="text-5xl md:text-7xl font-black text-[#1e40af]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Elevate Your
          </h1>
          <h1
            className="text-5xl md:text-7xl font-black text-[#1e40af] mt-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Digital Presence
          </h1>

          <p
            className="mt-10 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Infinetic Studios is a boutique digital agency dedicated to crafting bespoke solutions for ambitious brands, startups, and visionaries.
          </p>

          
        </div>

        {/* SWIPER */}
        <div ref={swiperRef}>
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            centeredSlides
            slidesPerView="auto"
            spaceBetween={50}
            pagination={{ clickable: true }}
            className="mySwiper w-full"
          >
            {cardData.map((card) => (
              <SwiperSlide
                key={card.id}
                className="!w-[340px] md:!w-[520px] !h-[400px]"
              >
                {({ isActive }) => (
                  <div
                    className={`relative w-full h-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 ${
                      isActive ? "scale-105" : "scale-90 opacity-60"
                    }`}
                  >
                    <Image
                      src={card.imageUrl}
                      alt="Infinetic Showcase"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center mt-20 relative z-10"
        >
          <Link
            href="/services"
            className="bg-[#1e40af] text-white text-lg font-semibold px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition"
          >
            Begin Your Transformation
          </Link>
          <p className="mt-6 text-gray-500 text-sm">
            Let’s discuss your project — no obligation.
          </p>
        </div>

        {/* Pagination Style */}
        <style jsx global>{`
          .mySwiper {
            padding-top: 60px;
            padding-bottom: 100px;
          }
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #cbd5e1;
            opacity: 0.8;
            transition: all 0.4s ease;
          }
          .swiper-pagination-bullet-active {
            background: #1e40af !important;
            transform: scale(1.5);
            opacity: 1;
          }
        `}</style>
      </section>
    </>
  );
}
