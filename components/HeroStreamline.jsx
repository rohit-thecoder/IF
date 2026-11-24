"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Smartphone,
  Share2,
  Palette,
  Cpu,
  Zap,
  ArrowUpRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroStreamline() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 1. Header Elements Smooth Reveal
      tl.fromTo(
        ".header-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power4.out" }
      );

      // 2. Core Center Scale Up
      tl.fromTo(
        ".core-hub",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.4)" },
        "-=0.4"
      );

      // 3. Connectors Drawing One-by-One (Smooth Path Animation)
      tl.fromTo(
        ".connector-line",
        { strokeDashoffset: 120, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

      // 4. Outer Nodes Reveal right after line touches them
      tl.fromTo(
        ".service-node",
        { scale: 0.9, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
        "-=0.8"
      );

      // 5. Ambient Floating Movement for Luxury Look
      gsap.to(".float-node", {
        y: -6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.4, from: "random" },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-labelledby="about-main-heading"
      className="relative w-full py-24 lg:py-32 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] overflow-hidden antialiased"
    >
      {/* ---------------- DECORATIVE LUXURY BACKGROUND (NO DOTS) ---------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-indigo-100/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ---------- PREMIUM HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="header-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 text-blue-600 text-[11px] font-semibold uppercase tracking-widest mb-6 shadow-sm">
            <Zap size={12} className="fill-blue-600" /> Ecosystem
          </div>

          <h1 id="about-main-heading" className="header-anim font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-[#0a2540] mb-6">
            <span className="sr-only">Web development, app development, video editing and creative agency in Bokaro, Jharkhand and India: </span>
            Integrated Ecosystem <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              For Infinite Digital Growth
            </span>
          </h1>

          <p className="header-anim text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We streamline your digital presence by unifying high-performance engineering, modern design systems, and aggressive distribution models.
          </p>
        </div>

        {/* ---------- DESKTOP HUB & SPOKE (DIAGRAM) ---------- */}
        <div className="hidden lg:block relative min-h-[580px] w-full max-w-5xl mx-auto">
          
          {/* ANCHORED CENTRAL SVG CONNECTORS */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Path lines mapped cleanly to layout positions */}
            <path d="M 500 300 L 220 140" className="connector-line" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="120" strokeDashoffset="120" strokeLinecap="round" />
            <path d="M 500 300 L 220 460" className="connector-line" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="120" strokeDashoffset="120" strokeLinecap="round" />
            <path d="M 500 300 L 780 140" className="connector-line" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="120" strokeDashoffset="120" strokeLinecap="round" />
            <path d="M 500 300 L 780 460" className="connector-line" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="120" strokeDashoffset="120" strokeLinecap="round" />
          </svg>

          {/* CORE HUB */}
          <div className="core-hub absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[2.5rem] p-9 shadow-[0_25px_60px_-15px_rgba(10,37,64,0.12)] border border-slate-100/80 text-center w-72 z-10 opacity-0">
            <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0a2540]">Infinetic Core</h3>
            <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">
              Strategy • Design • Scale
            </p>
          </div>

          {/* FOUR CORNER NODES */}
          {/* Top Left */}
          <div className="service-node float-node absolute top-[60px] left-[50px] opacity-0">
            <DesktopNode
              icon={Code2}
              title="Web Development"
              desc="Next.js setups engineered for ultimate speed & conversion architecture."
            />
          </div>

          {/* Bottom Left */}
          <div className="service-node float-node absolute bottom-[60px] left-[50px] opacity-0">
            <DesktopNode
              icon={Smartphone}
              title="App Development"
              desc="Native & cross-platform applications built for clean scaling."
            />
          </div>

          {/* Top Right */}
          <div className="service-node float-node absolute top-[60px] right-[50px] opacity-0">
            <DesktopNode
              icon={Share2}
              title="Social Media Management"
              desc="Data-driven distributions and creative strategy to drive high reach."
            />
          </div>

          {/* Bottom Right */}
          <div className="service-node float-node absolute bottom-[60px] right-[50px] opacity-0">
            <DesktopNode
              icon={Palette}
              title="Graphic Design"
              desc="High-end modern brand identities, UX layouts, and visual design assets."
            />
          </div>

        </div>

        {/* ---------- MOBILE FLOW (STACKED FOR SCALABILITY) ---------- */}
        <div className="mobile-flow lg:hidden flex flex-col gap-5 mt-8 max-w-md mx-auto relative">
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-transparent opacity-40" />
          
          <MobileCard icon={Cpu} title="Infinetic Core" desc="Central strategic engine" highlight />
          <MobileCard icon={Code2} title="Web Development" desc="High performance applications" />
          <MobileCard icon={Smartphone} title="App Development" desc="Seamless mobile experiences" />
          <MobileCard icon={Share2} title="Social Media Management" desc="Content distribution & scale" />
          <MobileCard icon={Palette} title="Graphic Design" desc="Premium brand identities" />
        </div>

      </div>
    </section>
  );
}

{/* ---------- SUB-COMPONENTS ---------- */}

function DesktopNode({ icon: Icon, title, desc }) {
  return (
    <div className="group bg-white/70 backdrop-blur-md border border-white hover:border-slate-200/80 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(10,37,64,0.08)] rounded-3xl p-6 w-[290px] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={22} />
        </div>
        <ArrowUpRight size={18} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
      </div>
      <h4 className="font-bold text-[#0a2540] text-base mb-1.5">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function MobileCard({ icon: Icon, title, desc, highlight }) {
  return (
    <div
      className={`mobile-card p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative z-10 ${
        highlight
          ? "bg-[#0a2540] text-white border-transparent shadow-lg shadow-indigo-950/20"
          : "bg-white text-slate-700 border-slate-100 shadow-sm"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          highlight ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"
        }`}
      >
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-sm leading-tight">{title}</h4>
        <p className={`text-xs mt-0.5 ${highlight ? "text-slate-300" : "text-slate-400"} font-medium`}>
          {desc}
        </p>
      </div>
    </div>
  );
}
