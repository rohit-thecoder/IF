"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Code2, Search, Palette, Video, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function HeroAbout() {
  const containerRef = useRef(null);
  const typingRef = useRef(null);
  const imageRef = useRef(null);
  const gridRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------- HEADING ANIMATION (We Combine) ---------- */
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      /* ---------- TEXT TYPING ---------- */
      gsap.fromTo(
        typingRef.current,
        { text: "" },
        {
          text:
            "Infinetic Studios is a digital-first agency based in Jharkhand, delivering scalable, trustworthy, and performance-driven digital solutions. We specialize in web development, social media management, graphic design, video editing, and SEO for businesses across Jharkhand.",
          duration: 10,
          ease: "none",
          delay: 0.8,
        }
      );

      /* ---------- IMAGE REVEAL ---------- */
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
      });

      /* ---------- GRID OPACITY FLOW ---------- */
      gsap.fromTo(
        gridRef.current,
        { opacity: 0.15 },
        {
          opacity: 0.45,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden bg-[#f8fafc]"
    >

      {/* ---------------- BACKGROUND ---------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* DOT GRID */}
        <div
          ref={gridRef}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 1.4px, transparent 1.4px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 55%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 55%, black 100%)",
          }}
        />

        {/* SQUARE GRID */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent 10%, black 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 10%, black 75%)",
          }}
        />

        {/* CIRCULAR DOT LAYER (NEW) */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)",
            backgroundSize: "20px 20px",
            maskImage:
              "linear-gradient(to bottom, transparent 20%, black 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 20%, black 85%)",
          }}
        />

        {/* GLOW */}
        <div className="absolute -top-[30%] -left-[20%] w-[700px] h-[700px] bg-blue-200/40 rounded-full blur-[140px]" />

        {/* MOBILE ICONS */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-10 opacity-20 lg:hidden">
          <Code2 size={30} />
          <Search size={30} />
          <Palette size={30} />
          <Video size={30} />
          <Layers size={30} />
        </div>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* TEXT */}
          <div className="text-center lg:text-left">
            <p
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-tight text-[#0a2540]"
            >
              We Combine <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Innovation & Creativity
              </span>
            </p>

            <h1
              ref={typingRef}
              className="mt-6 min-h-[95px] text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
            />

            <div className="mt-10 flex justify-center lg:justify-start">
              <button className="px-8 py-4 rounded-full bg-[#0a2540] text-white font-semibold shadow-xl hover:scale-105 transition-all">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="relative w-full h-[360px] sm:h-[460px] lg:h-[620px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team working together"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
