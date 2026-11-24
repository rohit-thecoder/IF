"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Code2, Search, Palette, Video, Layers } from "lucide-react";

// GSAP Plugins Register safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function HeroAbout() {

  const containerRef = useRef(null);
  const typingRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(
    () => {
      // Heading Entry Animation
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // Premium Typing Animation
      gsap.fromTo(
        typingRef.current,
        { text: "", opacity: 0 },
        {
          text: "Infinetic Studios is a digital-first agency based in Jharkhand, delivering scalable, trustworthy, and performance-driven digital solutions. We specialize in web development, social media management, graphic design, video editing, and SEO for businesses across Jharkhand.",
          opacity: 1,
          duration: 4,
          ease: "power1.out",
          delay: 0.6,
        }
      );

      // Hero Image Reveal
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Interactive Background Glow Movement
      gsap.to(glowRef.current, {
        x: 40,
        y: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#edf2f7]"
    >
      {/* ---------------- PREMIUM BACKGROUND ---------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        
        {/* Whitish Blue Soft Ambient Glows */}
        <div 
          ref={glowRef}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-300/30 to-indigo-200/20 rounded-full blur-[130px]" 
        />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[120px]" />

        {/* Clean Abstract Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.4]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
              <stop offset="50%" stopColor="#cbd5e1" stopOpacity="1" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-100 100 C 300 300, 1000 -100, 1600 400" fill="none" stroke="url(#line-grad)" strokeWidth="1.5" />
          <path d="M0 500 C 500 200, 800 800, 1800 300" fill="none" stroke="url(#line-grad)" strokeWidth="1" />
        </svg>

        {/* MOBILE ICONS */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 opacity-10 lg:hidden text-slate-600">
          <Code2 size={24} />
          <Search size={24} />
          <Palette size={24} />
          <Video size={24} />
          <Layers size={24} />
        </div>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h2
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight leading-[1.1] text-[#0a2540] opacity-0"
            >
              We Combine <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                Innovation & Creativity
              </span>
            </h2>

            <div className="mt-6 min-h-[110px] sm:min-h-[90px] lg:min-h-[120px]">
              <p
                ref={typingRef}
                className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed opacity-0"
              >
                Infinetic Studios is a digital-first agency based in Jharkhand...
              </p>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="relative group overflow-hidden px-8 py-4 rounded-full bg-[#0a2540] text-white font-semibold shadow-lg shadow-indigo-950/10 hover:shadow-xl hover:shadow-indigo-900/20 transition-all duration-300 active:scale-98">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </button>
            </div>
          </div>

          {/* RIGHT: PREMIUM IMAGE CONTAINER */}
          <div
            ref={imageRef}
            className="relative w-full h-[380px] sm:h-[480px] lg:h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/30 backdrop-blur-md border border-white/60 p-3 opacity-0"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Infinetic Studios team collaborating on website development and digital strategy"
                fill
                priority
                className="object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/40 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
