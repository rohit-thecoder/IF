"use client";

import { useEffect, useRef } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Briefcase, Handshake, Rocket, Layers } from "lucide-react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const countedStats = [
  {
    icon: Briefcase,
    value: 50,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Projects delivered",
    coordinate: "01",
  },
  {
    icon: Handshake,
    value: 90,
    prefix: "",
    suffix: "%+",
    decimals: 0,
    label: "Client retention",
    coordinate: "02",
  },
  {
    icon: Rocket,
    value: 2.5,
    prefix: "",
    suffix: "×",
    decimals: 1,
    label: "Faster site performance",
    coordinate: "03",
  },
];

const platformTags = ["Web", "Social", "Video"];

// --- Animation Variants ---
const staggerContainer = (staggerTime) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: staggerTime },
  },
});

const slideUpVariant = (yOffset, duration, ease = [0.21, 0.85, 0.32, 1]) => ({
  hidden: { opacity: 0, y: yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease },
  },
});

// A custom Counter component to handle the numeric animation smoothly in React
const AnimatedCounter = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion by instantly setting the final value
    if (prefersReducedMotion) {
      node.textContent = stat.prefix + stat.value.toFixed(stat.decimals) + stat.suffix;
      return;
    }

    // Tween the text content from 0 to target value
    if (isInView) {
      const controls = animate(0, stat.value, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = stat.prefix + value.toFixed(stat.decimals) + stat.suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, prefersReducedMotion, stat]);

  return (
    <dd
      ref={ref}
      className="font-[family-name:var(--font-mono)] order-2 text-3xl sm:text-4xl font-semibold text-slate-900 tabular-nums"
    >
      0{stat.suffix}
    </dd>
  );
};

export default function PremiumStatsSection() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className={`${display.variable} ${mono.variable} relative w-full flex justify-center px-4 sm:px-6 py-16 sm:py-28 bg-[#F6F7FB] overflow-hidden`}
    >
      {/* ===== BLUEPRINT BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(54,83,244,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(54,83,244,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ===== CARD ===== */}
      <div className="relative z-10 w-full max-w-6xl rounded-2xl bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_30px_80px_-40px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/[0.06] px-6 sm:px-10 py-10 sm:py-14 lg:px-16 lg:py-16">
        {/* corner ticks — blueprint / schematic signature */}
        <span className="hidden sm:block absolute top-5 left-5 w-3 h-3 border-t-2 border-l-2 border-[#3653F4]/40" aria-hidden="true" />
        <span className="hidden sm:block absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-[#3653F4]/40" aria-hidden="true" />
        <span className="hidden sm:block absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-[#3653F4]/40" aria-hidden="true" />
        <span className="hidden sm:block absolute bottom-5 right-5 w-3 h-3 border-b-2 border-r-2 border-[#3653F4]/40" aria-hidden="true" />

        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16">
          {/* LEFT */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            className="lg:w-5/12 text-center lg:text-left"
          >
            <motion.span
              variants={slideUpVariant(28, 0.8)}
              className="font-[family-name:var(--font-mono)] inline-block mb-4 px-3 py-1 rounded-full border border-[#3653F4]/25 bg-[#3653F4]/[0.06] text-[#3653F4] text-[11px] font-medium tracking-[0.18em] uppercase"
            >
              Infinetic Studios
            </motion.span>

            <motion.h2
              variants={slideUpVariant(28, 0.8)}
              id="capabilities-heading"
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:[font-size:2.4rem] font-semibold text-slate-900 leading-[1.15] tracking-tight"
            >
              Built to scale. <br className="hidden lg:block" />
              Engineered to last.
            </motion.h2>

            <motion.p
              variants={slideUpVariant(28, 0.8)}
              className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              We design, build, and optimize digital systems for ambitious brands — fast, measurable, and built for long-term growth. No shortcuts. No noise. Just results.
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:w-7/12 lg:border-l lg:pl-16 pt-8 lg:pt-0 border-slate-200">
            <motion.dl
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15%" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-9"
            >
              {countedStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={slideUpVariant(24, 0.7)}
                    className="group relative flex flex-col gap-3 items-center sm:items-start text-center sm:text-left"
                  >
                    <span
                      className="font-[family-name:var(--font-mono)] absolute -top-1 right-0 sm:right-auto sm:left-full sm:-translate-x-6 text-[10px] text-slate-300 tracking-widest select-none"
                      aria-hidden="true"
                    >
                      {stat.coordinate}
                    </span>

                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#3653F4] transition-colors duration-300 group-hover:border-[#3653F4]/40 group-hover:bg-[#3653F4]/[0.06]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>

                    <dt className="order-3 text-[13px] font-medium text-slate-500">
                      {stat.label}
                    </dt>

                    <AnimatedCounter stat={stat} />
                  </motion.div>
                );
              })}

              {/* categorical stat — not counted, revealed as tags */}
              <motion.div
                variants={slideUpVariant(24, 0.7)}
                className="flex flex-col gap-3 items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#3653F4]">
                  <Layers className="w-4 h-4" aria-hidden="true" />
                </div>

                <dt className="order-3 text-[13px] font-medium text-slate-500">
                  Multi-platform expertise
                </dt>

                <motion.dd
                  variants={staggerContainer(0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="order-2 flex flex-wrap gap-1.5 justify-center sm:justify-start"
                >
                  {platformTags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={slideUpVariant(14, 0.5, "easeOut")}
                      className="font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-medium tracking-wide"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.dd>
              </motion.div>
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}