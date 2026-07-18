"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Crown,
  Fingerprint,
  Target,
  Sparkles,
  MoveRight,
  Award,
  Zap,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const SYSTEM_FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const CARDS = [
  {
    icon: <Fingerprint />,
    title: "Engineered Precision",
    info: "Every interface and line of code is built with mathematical intent.",
  },
  {
    icon: <Target />,
    title: "Growth-First Thinking",
    info: "Design decisions guided by data, psychology, and conversion logic.",
  },
  {
    icon: <ShieldCheck />,
    title: "Operational Trust",
    info: "Clear timelines, transparent execution, and scalable systems.",
  },
  {
    icon: <Zap />,
    title: "Speed Architecture",
    info: "Optimized rendering patterns for sub-second load times.",
  },
  {
    icon: <Layers />,
    title: "Scalable Systems",
    info: "Modular component libraries that grow with your business.",
  },
  {
    icon: <Crown />,
    title: "Elite Standards",
    info: "We do not compromise on visual fidelity or code quality.",
  },
];

export default function InfineticPremiumGrid() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------- 1. HEADER ANIMATION ---------- */
      gsap.fromTo(
        ".header-reveal",
        { y: 30, opacity: 0, visibility: "hidden" },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".header-trigger",
            start: "top 90%", // Starts sooner to prevent blank space
          },
        }
      );

      /* ---------- 2. GRID ANIMATION (FIXED) ---------- */
      // Uses fromTo to guarantee end state is visible
      gsap.fromTo(
        ".grid-card-reveal",
        { y: 50, opacity: 0, visibility: "hidden" },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".grid-trigger",
            start: "top 85%", // Triggers when the top of the grid is near bottom of screen
          },
        }
      );

      /* ---------- 3. GRAPH DRAW ANIMATION ---------- */
      const path = pathRef.current;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: ".graph-section",
            start: "top 75%",
            end: "bottom center",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F7FA] text-slate-900 py-32 w-full overflow-hidden"
      style={{ fontFamily: SYSTEM_FONT }}
    >
      {/* ================= BACKGROUND: DOT GRID WITH OPACITY FADE ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ---------- HEADER ---------- */}
        <div className="header-trigger max-w-3xl mx-auto text-center mb-24">
          <div className="header-reveal inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-600">
              System Architecture
            </span>
          </div>

          <h1 className="header-reveal text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Precision over <br className="hidden md:block" />
            <span className="text-indigo-600">Persuasion.</span>
          </h1>

          <p className="header-reveal text-lg text-slate-500 leading-relaxed">
            We build digital products for industry leaders who require measurable
            performance, scalability, and uncompromised reliability.
          </p>
        </div>

        {/* ---------- PREMIUM GRID ---------- */}
        <div className="grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 relative z-20">
          {CARDS.map((item, i) => (
            <div
              key={i}
              className="grid-card-reveal group relative bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Container with Hover Fill Effect */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                    {item.icon}
                  </div>
                  <ArrowUpRight
                    className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    size={20}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600">
                  {item.info}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- GRAPH SECTION ---------- */}
        <div className="graph-section relative bg-slate-900 rounded-3xl p-12 lg:p-20 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
          {/* Graph Line */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M0,380 C200,350 350,300 500,150 S800,50 1000,20"
              fill="none"
              stroke="url(#chartGradient)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start lg:items-center justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Significant Results
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {`We don't deal in vague promises. Our architecture is designed to
                improve retention, lower bounce rates, and increase organic
                visibility.`}
              </p>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white bg-orange-600 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Sparkles size={14} className="text-indigo-500" /> Engagement
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-white bg-white/10 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Sparkles size={14} className="text-indigo-400" /> Branding
                </div>
              </div>
            </div>

            {/* Data Points */}
            <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl min-w-[160px] hover:bg-white/10 transition-colors">
                <div className="text-indigo-400 font-bold text-4xl mb-1">
                  99.9%
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">
                  Uptime
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl min-w-[160px] hover:bg-white/10 transition-colors">
                <div className="text-indigo-400 font-bold text-4xl mb-1">
                  2x
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">
                  Conversion Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="mt-24 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Ready to Build?
          </h2>
          <Link href={"/contact"} className="group flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1">
            Start Consultation
            <MoveRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm">
            <Award size={16} /> <span>Certified Enterprise Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}