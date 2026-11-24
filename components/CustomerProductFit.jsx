"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Film,
  PenTool,
  ArrowUpRight,
  MoveRight,
  Award,
  Play,
  Eye,
} from "lucide-react";
import Link from "next/link";

/* ---------------------------------------------------------------------- */
/*  TOKENS                                                                */
/*  Ink/paper base + one accent per craft. The accent is never decorative */
/*  — it always marks which discipline a piece of content belongs to.     */
/* ---------------------------------------------------------------------- */

const DISPLAY_FONT = '"Archivo Black","Helvetica Neue",Arial,sans-serif';
const MONO_FONT =
  '"JetBrains Mono","SFMono-Regular",Menlo,Consolas,monospace';
const BODY_FONT = '"Inter",-apple-system,"Segoe UI",Roboto,sans-serif';

const INK = "#14171A";
const PAPER = "#F1F1EC";
const LINE = "#DBDBD3";

const DISCIPLINES = [
  { key: "web", label: "Web Dev", code: "WEB", color: "#2451E0", icon: Code2 },
  { key: "app", label: "App Dev", code: "APP", color: "#8B3DFF", icon: Smartphone },
  { key: "video", label: "Video Edit", code: "VID", color: "#FF6B2C", icon: Film },
  { key: "design", label: "Graphic Design", code: "GFX", color: "#00B37A", icon: PenTool },
];

const CARDS = [
  { d: "video", title: "Frame-Accurate Editing", info: "Cuts, color grade, and motion graphics tuned to the beat." },
  { d: "web", title: "Interfaces That Convert", info: "Performance-tuned builds engineered for sub-second loads." },
  { d: "app", title: "Native-Feel App Builds", info: "iOS, Android, and cross-platform shipped from one codebase." },
  { d: "design", title: "Visual Systems", info: "Identity, layout, and type systems that hold up across every channel." },
  { d: "web", title: "One Pipeline, One Team", info: "Design, build, and edit stay in sync from brief to launch." },
  { d: "app", title: "Sprint-Speed Delivery", info: "Structured sprints and QA passes keep every deadline real." },
];

const byKey = (k) => DISCIPLINES.find((d) => d.key === k);

/* ---------------------------------------------------------------------- */
/*  FRAMER MOTION VARIANTS                                                */
/* ---------------------------------------------------------------------- */

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerItem = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const gridItem = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

/* ---------------------------------------------------------------------- */

export default function InfineticStudioConsole() {
  const [activeTab, setActiveTab] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const active = DISCIPLINES[activeTab];

  /* Scroll setup for the graph path animation */
  const graphRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: graphRef,
    offset: ["start 75%", "end center"],
  });

  /* Timecode only runs while the Video tab is on screen */
  useEffect(() => {
    if (activeTab !== 2) return;
    const id = setInterval(() => {
      setVideoTime((t) => (t + 0.1) % 42);
    }, 100);
    return () => clearInterval(id);
  }, [activeTab]);

  const formatTC = (t) => {
    const m = Math.floor(t / 60).toString().padStart(2, "0");
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    const f = Math.floor((t % 1) * 24).toString().padStart(2, "0");
    return `${m}:${s}:${f}`;
  };

  return (
    <section
      className="relative py-32 w-full overflow-hidden"
      style={{ fontFamily: BODY_FONT, background: PAPER, color: INK }}
    >
      {/* background dot grid, faded toward the header */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute h-full w-full bg-[radial-gradient(#c9c9c0_1px,transparent_1px)] [background-size:24px_24px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ---------------- HEADER ---------------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div
            variants={headerItem}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border mb-6"
            style={{ borderColor: LINE }}
          >
            <span className="flex -space-x-1">
              {DISCIPLINES.map((d) => (
                <span
                  key={d.key}
                  className="w-2 h-2 rounded-full ring-2 ring-white"
                  style={{ background: d.color }}
                />
              ))}
            </span>
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-600 ml-1"
              style={{ fontFamily: MONO_FONT }}
            >
              Studio Capabilities
            </span>
          </motion.div>

          <motion.h2
            variants={headerItem}
            className="text-5xl md:text-7xl tracking-tight mb-6 leading-[0.95]"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            Design, code,
            <br />
            frame,{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg,#2451E0,#8B3DFF,#FF6B2C,#00B37A)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ship.
            </span>
          </motion.h2>

          <motion.p variants={headerItem} className="text-lg text-slate-500 leading-relaxed">
            Four crafts, one production pipeline. Your web build, your app,
            your edit, and your visual identity move through the same team —
            so nothing gets lost in translation between rooms.
          </motion.p>
        </motion.div>

        {/* ---------------- CONSOLE (signature element) ---------------- */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          className="mb-32"
        >
          {/* discipline tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {DISCIPLINES.map((d, i) => {
              const Icon = d.icon;
              const isActive = i === activeTab;
              return (
                <button
                  key={d.key}
                  onClick={() => setActiveTab(i)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300"
                  style={{
                    borderColor: isActive ? d.color : LINE,
                    background: isActive ? `${d.color}14` : "white",
                    color: isActive ? d.color : "#64748b",
                  }}
                >
                  <Icon size={15} />
                  {d.label}
                  <span
                    className="text-[10px] tracking-wider opacity-70"
                    style={{ fontFamily: MONO_FONT }}
                  >
                    {d.code}
                  </span>
                </button>
              );
            })}
          </div>

          {/* console panel */}
          <div
            className="rounded-3xl border shadow-2xl overflow-hidden"
            style={{ background: "#101216", borderColor: "#23262b" }}
          >
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{ borderColor: "#23262b" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: active.color }} />
                <span
                  className="text-xs text-slate-400"
                  style={{ fontFamily: MONO_FONT }}
                >
                  studio/{active.key}.live
                </span>
              </div>
              <span
                className="text-[10px] tracking-widest uppercase text-slate-500"
                style={{ fontFamily: MONO_FONT }}
              >
                Craft 0{activeTab + 1} / 04
              </span>
            </div>

            <div className="p-6 sm:p-10 min-h-[340px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full flex items-center"
                >
                  {activeTab === 0 && <WebPane color={active.color} />}
                  {activeTab === 1 && <AppPane color={active.color} />}
                  {activeTab === 2 && (
                    <VideoPane color={active.color} time={videoTime} formatTC={formatTC} />
                  )}
                  {activeTab === 3 && <DesignPane color={active.color} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ---------------- CAPABILITY GRID ---------------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 relative z-20"
        >
          {CARDS.map((item, i) => {
            const d = byKey(item.d);
            return (
              <motion.div
                key={i}
                variants={gridItem}
                className="group relative bg-white p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: LINE, borderLeftWidth: 3, borderLeftColor: d.color }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${d.color}14`, color: d.color }}
                  >
                    <d.icon size={20} />
                  </div>
                  <ArrowUpRight
                    className="text-slate-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    size={20}
                  />
                </div>

                <span
                  className="text-[10px] tracking-widest uppercase font-semibold"
                  style={{ color: d.color, fontFamily: MONO_FONT }}
                >
                  {d.code}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.info}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---------------- DELIVERY METRICS ---------------- */}
        <div 
          ref={graphRef} 
          className="relative bg-[#101216] rounded-3xl p-12 lg:p-20 shadow-2xl overflow-hidden ring-1 ring-white/5"
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2451E0" />
                <stop offset="100%" stopColor="#00B37A" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,380 C200,350 350,300 500,150 S800,50 1000,20"
              fill="none"
              stroke="url(#chartGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start lg:items-center justify-between">
            <div className="max-w-xl">
              <span
                className="text-[11px] tracking-widest uppercase text-slate-500"
                style={{ fontFamily: MONO_FONT }}
              >
                rendering output<span className="dots-anim" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6" style={{ fontFamily: DISPLAY_FONT }}>
                Numbers, not vibes.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Every craft reports back the same way: what shipped, how fast,
                and how it performed once it was live.
              </p>

              <div className="flex flex-wrap gap-3">
                <div
                  className="flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-full border"
                  style={{ background: "#2451E022", borderColor: "#2451E055" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2451E0" }} />
                  On-time delivery
                </div>
                <div
                  className="flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-full border"
                  style={{ background: "#00B37A22", borderColor: "#00B37A55" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00B37A" }} />
                  Cross-craft QA
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl min-w-[160px] hover:bg-white/10 transition-colors">
                <div className="font-bold text-4xl mb-1" style={{ color: "#2451E0" }}>99.9%</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl min-w-[160px] hover:bg-white/10 transition-colors">
                <div className="font-bold text-4xl mb-1" style={{ color: "#00B37A" }}>48h</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Avg. Turnaround</div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- CTA ---------------- */}
        <div className="mt-24 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8" style={{ fontFamily: DISPLAY_FONT }}>
            Ready to build?
          </h2>
          <Link
            href="/contact"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
            style={{ background: INK, color: PAPER }}
          >
            Start a project
            <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm">
            <Award size={16} /> <span>Trusted across 40+ product launches</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dots-anim::after {
          content: "";
          animation: dots 1.4s steps(4, end) infinite;
        }
        @keyframes dots {
          0% { content: ""; }
          25% { content: "."; }
          50% { content: ".."; }
          75% { content: "..."; }
          100% { content: ""; }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes wave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  CRAFT PANES                                                           */
/* ---------------------------------------------------------------------- */

function WebPane({ color }) {
  const MONO = MONO_FONT;
  const line = "flex gap-4";
  const gutter = "text-slate-600 select-none w-4 text-right";
  return (
    <div className="w-full font-mono text-[13px] sm:text-sm leading-7" style={{ fontFamily: MONO }}>
      <div className={line}><span className={gutter}>1</span><span><span className="text-sky-400">import</span> <span className="text-pink-400">{"{"} Studio {"}"} </span><span className="text-sky-400">from</span> <span className="text-orange-300">{"'@infinetic/core'"}</span>;</span></div>
      <div className={line}><span className={gutter}>2</span><span>&nbsp;</span></div>
      <div className={line}><span className={gutter}>3</span><span><span className="text-sky-400">export function</span> <span className="text-yellow-200">Build</span>() {"{"}</span></div>
      <div className={line}><span className={gutter}>4</span><span>&nbsp;&nbsp;<span className="text-sky-400">return</span> {"<"}<span style={{ color }}>Interface</span></span></div>
      <div className={line}><span className={gutter}>5</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">speed=</span> <span className="text-pink-400">{"{"}</span><span className="text-orange-300">sub-second</span ><span className="text-pink-400">{"}"}</span></span></div>
      <div className={line}><span className={gutter}>6</span><span>&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-sky-400">a11y=</span>{"{"}<span className="text-orange-300">true</span>{"}"}</span></div>
      <div className={line}><span className={gutter}>7</span><span className="text-sky-400">&nbsp;&nbsp;/{">"}</span></div>
      <div className={line}><span className={gutter}>8</span><span>{"}"} <span style={{ animation: "blink 1s step-end infinite", color }}>▍</span></span></div>
    </div>
  );
}

function AppPane({ color }) {
  return (
    <div className="mx-auto w-[210px]">
      <div className="rounded-[2rem] border-4 border-slate-700 bg-slate-950 p-3 shadow-2xl">
        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-3" style={{ fontFamily: MONO_FONT }}>
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <div className="space-y-2">
          <div className="h-16 rounded-xl" style={{ background: `${color}22`, border: `1px solid ${color}55` }} />
          <div className="h-8 rounded-lg bg-slate-800" />
          <div className="h-8 rounded-lg bg-slate-800 w-2/3" />
          <div className="flex gap-2 pt-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full" style={{ background: i === 0 ? color : "#1f2937" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPane({ color, time, formatTC }) {
  const bars = Array.from({ length: 40 });
  const playheadPct = (time / 42) * 100;
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: color }}>
          <Play size={14} fill="white" color="white" />
        </div>
        <span className="text-white text-lg" style={{ fontFamily: MONO_FONT }}>{formatTC(time)}</span>
        <span className="text-slate-500 text-sm" style={{ fontFamily: MONO_FONT }}>/ 00:42:00</span>
      </div>

      <div className="flex items-end gap-[3px] h-16 mb-3">
        {bars.map((_, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm origin-bottom"
            style={{
              height: "100%",
              background: i % 6 === 0 ? color : "#374151",
              animation: `wave ${0.6 + (i % 5) * 0.12}s ease-in-out infinite`,
              animationDelay: `${(i % 7) * 0.08}s`,
            }}
          />
        ))}
      </div>

      <div className="relative h-1.5 rounded-full bg-slate-800">
        <div className="absolute top-0 left-0 h-full rounded-full" style={{ width: `${playheadPct}%`, background: color }} />
        <div
          className="absolute -top-1.5 w-3.5 h-3.5 rounded-full border-2 border-slate-950"
          style={{ left: `calc(${playheadPct}% - 7px)`, background: color }}
        />
      </div>
    </div>
  );
}

function DesignPane({ color }) {
  const layers = ["Logotype", "Grid / 12col", "Color Ramp", "Baseline"];
  const swatches = ["#2451E0", "#8B3DFF", "#FF6B2C", "#00B37A", "#F1F1EC"];
  return (
    <div className="w-full flex flex-col sm:flex-row gap-8 items-center">
      <div className="relative w-40 h-40 rounded-xl shrink-0" style={{ background: "#1a1d22", border: "1px solid #2a2e35" }}>
        <div className="absolute inset-6 rounded-md" style={{ border: `2px dashed ${color}88` }} />
        {["top-1.5 left-1.5", "top-1.5 right-1.5", "bottom-1.5 left-1.5", "bottom-1.5 right-1.5"].map((pos) => (
          <span key={pos} className={`absolute w-2 h-2 rounded-full ${pos}`} style={{ background: color }} />
        ))}
      </div>

      <div className="flex-1 w-full space-y-4">
        <div className="space-y-2">
          {layers.map((l) => (
            <div key={l} className="flex items-center justify-between text-sm text-slate-300 border-b pb-2" style={{ borderColor: "#23262b" }}>
              <span className="flex items-center gap-2">
                <Eye size={14} className="text-slate-500" /> {l}
              </span>
              <span className="text-[10px] text-slate-500" style={{ fontFamily: MONO_FONT }}>visible</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {swatches.map((s) => (
            <span key={s} className="w-7 h-7 rounded-full border border-white/10" style={{ background: s }} />
          ))}
        </div>
      </div>
    </div>
  );
}
