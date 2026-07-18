"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Handshake, Rocket, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PremiumStatsSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        statRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: <Briefcase className="w-4 h-4" />,
      value: "50+",
      label: "Projects Delivered",
    },
    {
      icon: <Handshake className="w-4 h-4" />,
      value: "90%+",
      label: "Client Retention",
    },
    {
      icon: <Rocket className="w-4 h-4" />,
      value: "2.5× Faster",
      label: "Website Performance",
    },
    {
      icon: <Layers className="w-4 h-4" />,
      value: "Web • Social • Video",
      label: "Multi-Platform Expertise",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center px-4 sm:px-6 py-16 sm:py-28 bg-white overflow-hidden"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.12]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(59,130,246,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.35) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage:
                "radial-gradient(circle at center, black 35%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 35%, transparent 75%)",
            }}
          />
        </div>

        <div className="absolute -top-32 -left-32 w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-blue-300/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-indigo-300/25 blur-[120px]" />
      </div>

      {/* ===== CARD ===== */}
      <div className="relative z-10 w-full max-w-6xl rounded-3xl sm:rounded-[3.2rem] bg-gradient-to-b from-[#f9fbff] to-[#eef4ff] shadow-[0_40px_120px_-40px_rgba(15,23,42,0.25)] px-6 sm:px-10 py-10 sm:py-14 lg:px-18 lg:py-18">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16">
          {/* LEFT */}
          <div
            ref={leftRef}
            className="lg:w-5/12 text-center lg:text-left"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold tracking-widest uppercase">
              Infinetic Studios
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
              Let’s build something <br />
              that stands the test of scale.
            </h3>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              We partner with ambitious brands to design, develop, and optimize
              digital systems that are fast, scalable, and built for long-term
              growth. No shortcuts. No noise. Just results.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10 lg:border-l lg:pl-16 pt-8 lg:pt-0 border-slate-200">
            {stats.map((item, i) => (
              <div
                key={i}
                ref={(el) => (statRefs.current[i] = el)}
                className="group flex flex-col gap-2 sm:gap-3 items-center sm:items-start text-center sm:text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur border border-blue-100 text-blue-600 shadow-sm group-hover:shadow-md transition-all duration-300">
                  {item.icon}
                </div>

                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  {item.value}
                </div>

                <div className="text-sm font-medium text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
