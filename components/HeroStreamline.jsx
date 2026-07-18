"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  Code2,
  Video,
  BarChart3,
  Globe,
  Zap,
  Layers,
  Cpu,
  Search,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroStreamline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header */
      gsap.from(".header-anim", {
        scrollTrigger: { trigger: ".header-anim", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* Streamline draw */
      gsap.fromTo(
        ".connector",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".diagram-desktop",
            start: "top 70%",
          },
        }
      );

      /* Nodes */
      gsap.from(".node", {
        scrollTrigger: { trigger: ".diagram-desktop", start: "top 70%" },
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      /* Core */
      gsap.from(".core", {
        scrollTrigger: { trigger: ".diagram-desktop", start: "top 70%" },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      /* Floating luxury motion */
      gsap.to(".float", {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.6, from: "random" },
      });

      /* Mobile stack */
      gsap.from(".mobile-card", {
        scrollTrigger: { trigger: ".mobile-flow", start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 lg:py-32 bg-[#f8fafc] overflow-hidden antialiased"
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-[0.28] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.3px, transparent 1.3px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ---------- HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="header-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Zap size={14} /> About Infinetic Studio
          </div>

          <h1 className="header-anim font-heading text-4xl md:text-6xl font-bold leading-tight text-[#0a2540] mb-6">
            Building Digital Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              With Clarity & Purpose
            </span>
          </h1>

          <p className="header-anim text-lg text-slate-500 leading-relaxed">
            Our team of experts blends creativity, strategy, and data to deliver
            websites, content, and campaigns that engage audiences and boost
            brand growth.
          </p>
        </div>

        {/* ---------- DESKTOP HUB & SPOKE ---------- */}
        <div className="diagram-desktop hidden lg:grid grid-cols-3 items-center gap-16 relative min-h-[520px]">
          {/* SVG CONNECTORS */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* LEFT */}
            <line x1="50%" y1="50%" x2="20%" y2="20%" className="connector" />
            <line x1="50%" y1="50%" x2="20%" y2="50%" className="connector" />
            <line x1="50%" y1="50%" x2="20%" y2="80%" className="connector" />

            {/* RIGHT */}
            <line x1="50%" y1="50%" x2="80%" y2="20%" className="connector" />
            <line x1="50%" y1="50%" x2="80%" y2="50%" className="connector" />
            <line x1="50%" y1="50%" x2="80%" y2="80%" className="connector" />

            <style jsx>{`
              .connector {
                stroke: #cbd5e1;
                stroke-width: 2;
                stroke-dasharray: 1000;
              }
            `}</style>
          </svg>

          {/* LEFT NODES */}
          <div className="flex flex-col gap-14">
            <Node icon={Code2} label="Performance" />
            <Node icon={Search} label="Research" />
            <Node icon={Video} label="Content Support" />
          </div>

          {/* CENTER CORE */}
          <div className="core bg-white rounded-[2.2rem] p-10 shadow-2xl text-center relative z-10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white">
              <Cpu size={32} />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#0a2540]">
              Infinetic Core
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Strategy • Creativity • Execution
            </p>
          </div>

          {/* RIGHT NODES */}
          <div className="flex flex-col gap-14">
            <Node icon={BarChart3} label="Impact" />
            <Node icon={Globe} label="Reach" />
            <Node icon={Layers} label="Transformation" />
          </div>
        </div>

        {/* ---------- MOBILE STREAMLINE ---------- */}
        <div className="mobile-flow lg:hidden mt-12 relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-300/60" />

          <MobileCard icon={Code2} text="Engineering" />
          <MobileCard icon={Search} text="Research" />
          <MobileCard icon={Video} text="Content Support" />
          <MobileCard icon={Cpu} text="Infinetic Core" highlight />
          <MobileCard icon={BarChart3} text="Impact" />
          <MobileCard icon={Globe} text="Reach" />
        </div>

        {/* ---------- CTA ---------- */}
        
      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function Node({ icon: Icon, label }) {
  return (
    <div className="node float bg-white/80 backdrop-blur-md border border-white shadow-xl rounded-2xl p-4 flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
        <Icon size={22} />
      </div>
      <p className="font-heading font-bold text-[#0a2540] text-base ">{label}</p>
    </div>
  );
}

function MobileCard({ icon: Icon, text, highlight }) {
  return (
    <div
      className={`mobile-card mb-6 p-4 rounded-xl border shadow-sm flex items-center gap-3 relative z-10 ${
        highlight ? "bg-[#0a2540] text-white" : "bg-white text-slate-700"
      }`}
    >
      <Icon size={20} />
      <span className="font-heading font-semibold">{text}</span>
    </div>
  );
}
