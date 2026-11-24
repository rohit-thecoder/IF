"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { Cpu, Code2, Smartphone, Film, Palette, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * ── DESIGN TOKENS ──────────────────────────────────────────────
 * Base      #F4F7FB  soft blueprint white
 * Ink       #0B1220  deep navy-black (headlines, body)
 * Muted     #64748B  slate (supporting copy)
 * Electric  #2F5FFF  primary accent — engineering / code
 * Signal    #FF5A36  secondary accent — used sparingly, "live" cues
 * Line      #D8E1EE  hairlines / grid
 */

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const CAPABILITIES = [
  {
    icon: Code2,
    tag: "01",
    title: "Web Development",
    copy: "Fast, SEO-ready websites and web platforms — built on clean architecture that scales with your business, not against it.",
  },
  {
    icon: Smartphone,
    tag: "02",
    title: "App Development",
    copy: "Native and cross-platform apps engineered for smooth performance, real retention, and App Store-ready polish.",
  },
  {
    icon: Film,
    tag: "03",
    title: "Video Editing",
    copy: "Cinematic edits, motion graphics, and reels that turn raw footage into scroll-stopping stories for your brand.",
  },
  {
    icon: Palette,
    tag: "04",
    title: "Graphic Design",
    copy: "Visual identities, brand systems, and campaign assets that make your business instantly recognisable.",
  },
];

// Reusable animation variants
const textRevealVariant = {
  hidden: { y: "100%", rotate: 2 },
  visible: { 
    y: "0%", 
    rotate: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } // equivalent to power4.out
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardRiseVariant = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.9, ease: [0.21, 0.85, 0.32, 1] } // equivalent to power3.out
  }
};

export default function PremiumAboutUs() {
  const containerRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const contentRef = useRef(null);

  // HERO SCROLL ANIMATIONS
  const { scrollYProgress: rawHeroProgress } = useScroll({
    target: heroWrapperRef,
    offset: ["start start", "end start"],
  });
  
  // Adding a slight spring to mimic GSAP's scrub: 1 smoothness
  const heroProgress = useSpring(rawHeroProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const topX = useTransform(heroProgress, [0, 1], ["0%", "-120%"]);
  const botX = useTransform(heroProgress, [0, 1], ["0%", "120%"]);
  const midScale = useTransform(heroProgress, [0, 1], [1, 1.5]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  
  // Framer Motion handles blur string interpolation perfectly
  const blurTopBot = useTransform(heroProgress, [0, 0.8], ["blur(0px)", "blur(10px)"]);
  const blurMid = useTransform(heroProgress, [0, 0.8], ["blur(0px)", "blur(20px)"]);
  const indicatorY = useTransform(heroProgress, [0, 1], ["0px", "50px"]);

  // GLASS CARD PARALLAX
  const { scrollYProgress: cardProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });
  const glassCardY = useTransform(cardProgress, [0, 1], [30, -50]);

  return (
    <div
      ref={containerRef}
      className={`${display.variable} ${body.variable} ${mono.variable} font-[family-name:var(--font-body)] relative bg-[#F4F7FB] text-[#0B1220] overflow-hidden selection:bg-blue-200 selection:text-[#0B1220]`}
    >
      {/* ARCHITECTURAL GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(#D8E1EE 1px, transparent 1px), linear-gradient(90deg, #D8E1EE 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* GLOBAL NOISE TEXTURE */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23000\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* ================= SECTION 1: HERO (Replaced GSAP Pin with Sticky CSS) ================= */}
      <div ref={heroWrapperRef} className="h-[200vh] w-full relative z-20">
        <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <h2 className="sr-only">
            Infinetic Studios — Web Development, App Development, Video Editing &amp; Graphic Design Agency in Jharkhand
          </h2>

          {/* Live-status badge */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D8E1EE] bg-white/60 backdrop-blur-md font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-[#0B1220]/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F5FFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F5FFF]" />
            </span>
            status: accepting new projects
          </div>

          <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <motion.h2 
              style={{ x: topX, opacity: heroOpacity, filter: blurTopBot }}
              className="font-[family-name:var(--font-display)] text-[12vw] 2xl:text-[14vw] font-bold tracking-tighter leading-[0.8] text-[#0B1220]/10 uppercase whitespace-nowrap will-change-transform"
            >
              Concept
            </motion.h2>
            
            <motion.div 
              style={{ scale: midScale, opacity: heroOpacity, filter: blurMid }}
              className="relative"
            >
              <h2 className="font-[family-name:var(--font-display)] text-[12vw] px-2 py-2 2xl:text-[14vw] font-bold tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-[#2F5FFF] to-[#1a3fd6] uppercase whitespace-nowrap z-20 will-change-transform">
                Engineered
              </h2>
              <div className="absolute inset-0 bg-[#2F5FFF]/30 blur-[100px] -z-10 rounded-full" />
            </motion.div>
            
            <motion.h2 
              style={{ x: botX, opacity: heroOpacity, filter: blurTopBot }}
              className="font-[family-name:var(--font-display)] text-[12vw] 2xl:text-[14vw] font-bold tracking-tighter leading-[0.8] text-[#0B1220]/10 uppercase whitespace-nowrap will-change-transform"
            >
              Into Impact.
            </motion.h2>
          </div>

          <motion.div 
            style={{ opacity: heroOpacity, y: indicatorY }}
            className="absolute bottom-12 flex flex-col items-center gap-2 z-20"
          >
            <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest uppercase text-[#64748B]">
              scroll to explore
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#2F5FFF] to-transparent" />
          </motion.div>
        </section>
      </div>

      {/* ================= SECTION 2: KINETIC MARQUEE ================= */}
      <div
        aria-hidden="true"
        className="py-8 bg-[#0B1220] -rotate-1 scale-110 z-30 border-y border-[#2F5FFF]/30 overflow-hidden relative -mt-32"
      >
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
          className="flex gap-12 whitespace-nowrap"
        >
          {/* Render 12 items to ensure the 50% translation looks perfectly seamless */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-12 text-white/90 font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl uppercase tracking-tight"
            >
              <span>Web Development</span>
              <span className="text-[#FF5A36] text-2xl">✦</span>
              <span>App Development</span>
              <span className="text-[#FF5A36] text-2xl">✦</span>
              <span className="font-[family-name:var(--font-body)] font-normal italic text-[#a9bcff]">Video Editing</span>
              <span className="text-[#FF5A36] text-2xl">✦</span>
              <span>Graphic Design</span>
              <span className="text-[#FF5A36] text-2xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= SECTION 3: MANIFESTO ================= */}
      <section ref={contentRef} aria-labelledby="manifesto-heading" className="relative z-10 min-h-screen py-32 px-6 flex items-center pt-48">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: Editorial text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="mb-8 overflow-hidden">
              <motion.div 
                variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2F5FFF]/30 bg-white/50 backdrop-blur-md text-[#2F5FFF] font-[family-name:var(--font-mono)] text-xs tracking-widest shadow-sm"
              >
                <span className="text-[#FF5A36]">~/</span>about/manifesto.md
              </motion.div>
            </div>

            <h2
              id="manifesto-heading"
              className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-12 text-[#0B1220]"
            >
              <div className="overflow-hidden pb-2"><motion.div variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>We don&apos;t just</motion.div></div>
              <div className="overflow-hidden pb-2"><motion.div variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F5FFF] to-[#7a3bff]">code.</motion.div></div>
              <div className="overflow-hidden pb-2"><motion.div variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-[#0B1220]/25">We architect</motion.div></div>
              <div className="overflow-hidden pb-2"><motion.div variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>outcomes.</motion.div></div>
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-[#64748B] leading-relaxed max-w-2xl">
              <p className="overflow-hidden">
                <motion.span variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block">
                  {`Infinetic Studios isn't just an agency — we're the build partner behind your digital presence. From `}
                  <strong className="text-[#2F5FFF] font-semibold">SEO-optimised web development</strong>
                  {` to app development, video editing, and graphic design, we engineer growth end to end.`}
                </motion.span>
              </p>
              <div className="h-[1px] w-24 bg-[#2F5FFF]/30" />
              <p className="overflow-hidden">
                <motion.span variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block">
                  Serving Jharkhand and beyond, we pair data-driven precision with high-craft creative work. The result: measurable, undeniable impact for every client we build with.
                </motion.span>
              </p>
            </div>

            <div className="mt-12 overflow-hidden pb-2">
              <motion.div variants={textRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-lg font-semibold text-[#0B1220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2F5FFF] focus-visible:outline-offset-4 rounded-sm"
                >
                  <span className="border-b-2 border-[#0B1220] group-hover:border-[#2F5FFF] group-hover:text-[#2F5FFF] transition-colors">
                    Start the Project
                  </span>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#2F5FFF]" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Glass card Parallax */}
          <div className="lg:col-span-5 relative flex justify-center items-center px-4 sm:px-0">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[140%] h-[140%] bg-gradient-to-tr from-[#2F5FFF]/20 via-[#7a3bff]/15 to-transparent blur-[90px] rounded-full" />
            </div>

            <motion.div 
              style={{ y: glassCardY }}
              className="group relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[2/2.4] lg:aspect-[6/6.2] rounded-[1.75rem] overflow-hidden border border-white/50 bg-white/40 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-700 hover:shadow-[0_35px_70px_-15px_rgba(47,95,255,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-60" />

              <div className="relative z-10 h-full p-5 sm:p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <Cpu size={30} strokeWidth={1.2} className="text-[#2F5FFF]" />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs text-[#64748B] tracking-widest border border-[#D8E1EE] rounded-full px-3 py-1">
                    ~/build.config
                  </span>
                </div>

                <div className="space-y-5">
                  <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#0B1220] leading-snug">
                    Strategy Meets <br />
                    <span className="font-[family-name:var(--font-body)] italic font-normal text-[#64748B]">Digital Craft.</span>
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Strategy", "Code", "Motion", "Design"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-md bg-white/70 border border-white font-[family-name:var(--font-mono)] text-[11px] text-[#0B1220] shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-[75%] h-[75%] opacity-20 mix-blend-multiply grayscale contrast-125 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                <Image src="/logo.png" alt="Infinetic Studios logo mark" fill className="object-contain object-bottom" priority={false} />
              </div>

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-180%] group-hover:animate-[shine_1.4s_ease-in-out]" />
            </motion.div>

            <div
              className="hidden lg:flex absolute -bottom-10 -left-10 w-20 h-20 bg-[#2F5FFF] rounded-2xl items-center justify-center text-white shadow-xl shadow-[#2F5FFF]/30 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <Code2 size={28} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CAPABILITIES ================= */}
      <section aria-labelledby="capabilities-heading" className="relative z-10 py-28 px-6 border-t border-[#D8E1EE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#2F5FFF]/30 bg-white/50 backdrop-blur-md text-[#2F5FFF] font-[family-name:var(--font-mono)] text-xs tracking-widest">
              <span className="text-[#FF5A36]">~/</span>services/index
            </div>
            <h2
              id="capabilities-heading"
              className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-tight text-[#0B1220]"
            >
              What we build.
            </h2>
            <p className="mt-4 text-lg text-[#64748B]">
              One studio, four disciplines — web development, app development, video editing, and graphic design, working from a single strategy.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CAPABILITIES.map(({ icon: Icon, tag, title, copy }) => (
              <motion.article
                key={title}
                variants={cardRiseVariant}
                className="group relative p-7 rounded-2xl border border-[#D8E1EE] bg-white/60 backdrop-blur-md transition-all duration-500 hover:border-[#2F5FFF]/40 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_-20px_rgba(47,95,255,0.3)]"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1220] flex items-center justify-center text-white group-hover:bg-[#2F5FFF] transition-colors duration-500">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[#D8E1EE] group-hover:text-[#2F5FFF]/50 transition-colors">
                    {tag}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#0B1220] mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-[#64748B]">{copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-180%) skewX(12deg); }
          100% { transform: translateX(180%) skewX(12deg); }
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </div>
  );
}
