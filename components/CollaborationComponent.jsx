"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CollaborationComponent() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  const collaborations = [
    { name: "Web Development", desc: "Fast, scalable & SEO-first websites", icon: Code2 },
    { name: "App Development", desc: "High-performance Android & iOS apps", icon: Smartphone },
    { name: "SEO Optimization", desc: "Ranking-focused technical SEO", icon: Search },
    { name: "Responsive UI", desc: "Pixel-perfect all-device layouts", icon: MonitorSmartphone },
    { name: "Thumbnail Design", desc: "High CTR YouTube thumbnails", icon: ImageIcon },
    { name: "Ad Shoot", desc: "Professional brand shoots", icon: Camera },
    { name: "Video Editing", desc: "Retention-focused editing", icon: Video },
    { name: "Graphic Design", desc: "Clean, modern visual systems", icon: Palette },
    { name: "Brand Identity", desc: "Positioning that scales", icon: Zap },
  ];

  useEffect(() => {
  const ctx = gsap.context(() => {
    // reset visibility (important for route changes)
    gsap.set([titleRef.current, ...itemsRef.current], {
      opacity: 1,
      y: 0,
      scale: 1,
    });
    gsap.set(bgRef.current, { opacity: 1, scale: 1 });

    const scrollEl = scrollRef.current;

    const loop = gsap.to(scrollEl, {
      x: `-=${scrollEl.scrollWidth / 2}`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    scrollEl.addEventListener("mouseenter", () => loop.timeScale(0.25));
    scrollEl.addEventListener("mouseleave", () => loop.timeScale(1));

    gsap.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    itemsRef.current.forEach((el, i) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        scale: 0.92,
        delay: i * 0.06,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    });

    gsap.fromTo(
      bgRef.current,
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      }
    );

    ScrollTrigger.refresh();
  }, containerRef);

  return () => ctx.revert(); // ✅ THIS IS ENOUGH
}, []);


  const list = [...collaborations, ...collaborations];

  return (
    <section
      ref={containerRef}
      className="relative py-40 bg-gradient-to-br from-[#f4f9ff] via-white to-[#ecf6ff]"
    >
      {/* BACKGROUND */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(191,219,254,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(191,219,254,0.6)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_1.2px,transparent_1.2px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div ref={titleRef} className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Capabilities</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            We combine engineering, design, and strategy to build digital products
            that grow like real analytics.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-24 py-16 whitespace-nowrap">
            {list.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className="group min-w-[280px] text-center"
                >
                  <div className="mx-auto mb-10 w-40 h-40 rounded-[28px] bg-white/80 backdrop-blur-xl border border-blue-100 shadow-xl flex items-center justify-center transition-all duration-700 group-hover:scale-110">
                    <Icon size={56} className="text-slate-700 group-hover:text-blue-600 transition-all" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-500 max-w-[240px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
