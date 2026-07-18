"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Zap, Cpu, Layers, Code2, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function PremiumAboutUs() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- PHASE 1: HERO DECONSTRUCTION ---
      // Instead of just moving apart, we scale and blur for a cinematic exit
      const introTL = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=120%", 
          pin: true,
          scrub: 1,
        }
      });

      introTL
        .to(".hero-text-top", { xPercent: -120, opacity: 0, filter: "blur(10px)" }, 0)
        .to(".hero-text-mid", { scale: 1.5, opacity: 0, filter: "blur(20px)" }, 0)
        .to(".hero-text-bot", { xPercent: 120, opacity: 0, filter: "blur(10px)" }, 0)
        .to(".hero-scroll-indicator", { opacity: 0, y: 50 }, 0)
        // Reveal the marquee smoothly as hero exits
        .fromTo(marqueeRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.5);


      // --- PHASE 2: EDITORIAL TEXT REVEAL (The "Mask" Effect) ---
      // This looks much more premium than simple fades
      const textLines = gsap.utils.toArray(".reveal-text-line");
      textLines.forEach((line) => {
        gsap.fromTo(line.querySelector(".reveal-inner"), 
          { yPercent: 100, rotate: 2 },
          { 
            yPercent: 0, 
            rotate: 0, 
            duration: 1, 
            ease: "power4.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            }
          }
        );
      });

      // --- PHASE 3: THE GLASS CARD LEVITATION ---
      gsap.to(".glass-card", {
        y: -30,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // --- PHASE 4: INFINITE MARQUEE LOOP ---
      // Creates constant kinetic energy
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#F4F7FB] text-[#0f172a] font-sans overflow-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* --- ARCHITECTURAL GRID BACKGROUND --- */}
      {/* Adds a 'blueprint' feel which implies precision */}
      <div className=" inset-0 pointer-events-none opacity-[0.4]" 
           style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
      </div>

      {/* --- GLOBAL NOISE (Subtle Texture) --- */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>


      {/* ================= SECTION 1: HERO OVERLAY ================= */}
      <section ref={heroRef} className="h-screen w-full relative flex flex-col items-center justify-center z-20">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="hero-text-top text-[12vw] 2xl:text-[14vw] font-black tracking-tighter leading-[0.8] text-[#94a3b8]/20 uppercase whitespace-nowrap will-change-transform">
            We Break
          </h1>
          <div className="hero-text-mid relative">
            <h1 className="text-[12vw] px-2 py-2 2xl:text-[14vw] font-black tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-indigo-700 uppercase whitespace-nowrap z-20 will-change-transform">
              The Rules
            </h1>
            {/* Glow behind the main text */}
            <div className="absolute inset-0 bg-blue-400/30 blur-[100px] -z-10 rounded-full"></div>
          </div>
          <h1 className="hero-text-bot text-[12vw] 2xl:text-[14vw] font-black tracking-tighter leading-[0.8] text-[#94a3b8]/20 uppercase whitespace-nowrap will-change-transform">
            To Build.
          </h1>
        </div>

        <div className="hero-scroll-indicator absolute bottom-12 flex flex-col items-center gap-2 z-20">
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">Scroll to Initialize</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
        </div>
      </section>


      {/* ================= SECTION 2: INFINITE LOOP BAR ================= */}
      {/* Professional divider that keeps visual interest high */}
      <div ref={marqueeRef} className="py-8 bg-[#0f172a] -rotate-1 scale-110 z-30 border-y border-blue-500/30 overflow-hidden relative">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="flex items-center gap-12 text-white/90 font-bold text-4xl uppercase tracking-tight">
               <span>Strategy</span>
               <span className="text-blue-500 text-2xl">✦</span>
               <span className="font-serif italic text-blue-200">Execution</span>
               <span className="text-blue-500 text-2xl">✦</span>
               <span>Dominance</span>
               <span className="text-blue-500 text-2xl">✦</span>
             </div>
           ))}
        </div>
      </div>


      {/* ================= SECTION 3: THE MANIFESTO (Content) ================= */}
      <section ref={contentRef} className="relative z-10 min-h-screen py-32 px-6 flex items-center">
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
           
           {/* LEFT COLUMN: Editorial Text */}
           <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="mb-8 overflow-hidden">
                <div className="reveal-text-line inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white/50 backdrop-blur-md text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                   <span>System Override</span>
                </div>
              </div>

              {/* Animated Headlines (Masking Effect) */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-12 text-[#0f172a]">
                 <div className="reveal-text-line overflow-hidden pb-2"><div className="reveal-inner">We start the</div></div>
                 <div className="reveal-text-line overflow-hidden pb-2"><div className="reveal-inner text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Motion.</div></div>
                 <div className="reveal-text-line overflow-hidden pb-2"><div className="reveal-inner text-slate-300">Your value is</div></div>
                 <div className="reveal-text-line overflow-hidden pb-2"><div className="reveal-inner">Our devotion.</div></div>
              </h2>

              <div className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                 <p className="reveal-text-line overflow-hidden"><span className="reveal-inner block">
                    {`Infinetic Studios isn't just an agency. We are the architects of your digital reality. From`} <strong className="text-blue-700">SEO-dominance</strong> to cinematic production, we engineer growth.
                 </span></p>
                 <div className="h-[1px] w-24 bg-blue-300/50"></div>
                 <p className="reveal-text-line overflow-hidden"><span className="reveal-inner block">
                    Serving Jharkhand and beyond, we combine data-driven precision with high-art creativity. The result? Measurable, undeniable impact.
                 </span></p>
              </div>

              {/* Call to Action Button */}
              <div className="mt-12 reveal-text-line overflow-hidden">
                <button className="reveal-inner group flex items-center gap-3 text-lg font-semibold text-[#0f172a]">
                   <Link href={"/contact"} className="border-b-2 border-[#0f172a] group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">Start the Project</Link>
                   <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-blue-600" />
                </button>
              </div>
           </div>


           {/* RIGHT COLUMN: The Premium Glass Card */}
           <div className="lg:col-span-5 relative flex justify-center perspective-1000 px-4 sm:px-0 items-center">


  {/* Soft Gradient Backdrop */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[140%] h-[140%] bg-gradient-to-tr from-blue-200/40 via-purple-200/30 to-transparent blur-[90px] rounded-full" />
  </div>

  {/* Main Glass Card */}
  <div className="group relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[2/2.4] lg:aspect-[6/6.2] rounded-[1.75rem] overflow-hidden border border-white/50 bg-white/40 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.15)] transition-all duration-700 hover:shadow-[0_35px_70px_-15px_rgba(59,130,246,0.25)]">

    {/* Inner Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-60" />

    {/* Content */}
    <div className="relative z-10 p-5 sm:p-5 flex flex-col justify-between ">

      {/* Header */}
      <div className="flex items-start justify-between">
        <Cpu size={30} strokeWidth={1.2} className="text-blue-600" />
        <span className="font-mono text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest border border-slate-300/50 rounded-full px-3 py-1">
          Manifesto v2.0
        </span>
      </div>

      {/* Body */}
      <div className="space-y-5">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
          Strategy Meets <br />
          <span className="font-serif italic font-normal text-slate-500">
            Digital Craft.
          </span>
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["System Thinking", "Precision", "Scale"].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-md bg-white/70 border border-white text-[11px] font-semibold text-slate-700 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Background Texture */}
    <div className="absolute bottom-0 right-0 w-[75%] h-[75%] opacity-20 mix-blend-multiply grayscale contrast-125 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
      <Image
        src="/logo.png"
        alt="Abstract Texture"
        fill
        className="object-contain object-bottom"
        priority={false}
      />
    </div>

    {/* Hover Shine */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-180%] group-hover:animate-shine" />
  </div>

  {/* Floating Accent (Desktop Only) */}
  <div className="hidden lg:flex absolute -bottom-10 -left-10 w-20 h-20 bg-blue-600 rounded-2xl items-center justify-center text-white shadow-xl shadow-blue-600/30 animate-bounce"
       style={{ animationDuration: "3s" }}>
    <Code2 size={28} />
  </div>

</div>

        </div>
      </section>
    </div>
  );
}