"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import {
  Code2,
  Smartphone,
  Search,
  MonitorSmartphone,
  Image as ImageIcon,
  Video,
  Camera,
  Palette,
  Zap,
  Sparkles,
} from "lucide-react";

// Each service gets its own accent so the glow reads as intentional,
// not decorative noise — color = category identity.
const collaborations = [
  {
    name: "Web Development",
    desc: "Fast, scalable & SEO-first websites",
    icon: Code2,
    accent: "#3B82F6", // blue
  },
  {
    name: "App Development",
    desc: "High-performance Android & iOS apps",
    icon: Smartphone,
    accent: "#8B5CF6", // violet
  },
  {
    name: "SEO Optimization",
    desc: "Ranking-focused technical SEO",
    icon: Search,
    accent: "#06B6D4", // cyan
  },
  {
    name: "Responsive UI",
    desc: "Pixel-perfect all-device layouts",
    icon: MonitorSmartphone,
    accent: "#6366F1", // indigo
  },
  {
    name: "Thumbnail Design",
    desc: "High CTR YouTube thumbnails",
    icon: ImageIcon,
    accent: "#F59E0B", // amber
  },
  {
    name: "Ad Shoot",
    desc: "Professional brand shoots",
    icon: Camera,
    accent: "#EC4899", // pink
  },
  {
    name: "Video Editing",
    desc: "Retention-focused editing",
    icon: Video,
    accent: "#EF4444", // red
  },
  {
    name: "Graphic Design",
    desc: "Clean, modern visual systems",
    icon: Palette,
    accent: "#A855F7", // purple
  },
  {
    name: "Brand Identity",
    desc: "Positioning that scales",
    icon: Zap,
    accent: "#0EA5E9", // sky
  },
];

export default function CollaborationComponent() {
  const trackRef = useRef(null);
  
  // Framer motion state for marquee
  const xTranslation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Infinite marquee logic replacing GSAP scroll loop
  useAnimationFrame((time, delta) => {
    if (!trackRef.current) return;

    // Total scrollable width divided by 2 because we duplicated the array
    const totalWidth = trackRef.current.scrollWidth / 2;
    
    // GSAP original duration was 30 seconds for totalWidth
    const baseSpeed = totalWidth / 30; // pixels per second
    
    // Hovering slows down timeScale to 0.25 (25% speed)
    const currentSpeed = isHovered ? baseSpeed * 0.25 : baseSpeed;
    const moveBy = currentSpeed * (delta / 1000);

    let newX = xTranslation.get() - moveBy;

    // Seamless loop back to start
    if (newX <= -totalWidth) {
      newX += totalWidth;
    }

    xTranslation.set(newX);
  });

  const list = [...collaborations, ...collaborations];

  return (
    <section className="relative py-40 bg-gradient-to-br from-[#f4f9ff] via-white to-[#ecf6ff] overflow-hidden">
      {/* BACKGROUND (Animated with Framer Motion) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, margin: "-10%" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(191,219,254,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(191,219,254,0.6)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_1.2px,transparent_1.2px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
        {/* soft ambient color pools */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* EYEBROW BADGE */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-15%" }}
          className="flex justify-center mb-8"
        >
          <div className="group inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl border border-blue-200/70 px-5 py-2 shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-300">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Our Capabilities
            </span>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-15%" }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
              real Growth
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            We combine engineering, design, and strategy to build digital products
            that grow like real analytics.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            ref={trackRef}
            style={{ x: xTranslation }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-10 py-16 whitespace-nowrap w-max"
          >
            {list.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 60, opacity: 0, scale: 0.92 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: (i % collaborations.length) * 0.06, ease: "easeOut" }}
                  viewport={{ once: false, margin: "-10%" }}
                  className="group relative min-w-[280px] text-center"
                >
                  {/* card */}
                  <div
                    className="relative rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-200/70 px-8 py-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-transparent"
                    style={{
                      boxShadow: `0 8px 30px -12px rgba(15,23,42,0.12)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 1px ${item.accent}55, 0 20px 50px -12px ${item.accent}66, 0 0 60px -10px ${item.accent}55`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 8px 30px -12px rgba(15,23,42,0.12)`;
                    }}
                  >
                    {/* icon glow badge */}
                    <div className="relative mx-auto mb-8 w-24 h-24 flex items-center justify-center">
                      <div
                        className="absolute inset-0 rounded-3xl opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-50"
                        style={{ background: item.accent }}
                      />
                      <div
                        className="relative w-24 h-24 rounded-3xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${item.accent}1A, ${item.accent}05)`,
                          borderColor: `${item.accent}33`,
                        }}
                      >
                        <Icon
                          size={34}
                          strokeWidth={1.75}
                          style={{ color: item.accent }}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-800">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 max-w-[220px] mx-auto leading-relaxed">
                      {item.desc}
                    </p>

                    {/* thin accent underline that grows on hover */}
                    <div
                      className="mx-auto mt-6 h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{ background: item.accent }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}