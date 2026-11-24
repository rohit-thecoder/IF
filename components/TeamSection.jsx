"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ================= TEAM DATA =================
const teamMembers = [
  {
    id: 1,
    name: "Mohit Kumar",
    role: "Team Manager",
    image: "/mohit1.png",
    description:
      "Leads the team with a clear roadmap, keeping every project on time, on budget, and aligned with the client's vision from day one.",
  },
  {
    id: 2,
    name: "Sachin Kumar",
    role: "Social Media Manager",
    image: "/sachin1.png",
    description:
      "Builds brand presence across platforms, turning everyday content into consistent engagement and long-term audience growth.",
  },
  {
    id: 5,
    name: "Rohit Kumar",
    role: "Website Manager",
    image: "/rohit1.png",
    description:
      "Keeps every website fast, secure, and up to date, managing infrastructure so clients never have to think about it.",
  },
  {
    id: 4,
    name: "Gaurav Kumar",
    role: "Website Developer",
    image: "/Gaurav1.png",
    description:
      "Ships fast, scalable products end to end, from database architecture to pixel-perfect front-end interactions.",
  },
  {
    id: 6,
    name: "Rohan Kumar",
    role: "Marketing Manager",
    image: "/Rohan1.png",
    description:
      "Turns strategy into measurable growth, running campaigns that connect the right message with the right audience.",
  },
];

export default function PremiumTeamSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Responsive cards-per-view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1.2);
      else if (window.innerWidth < 1024) setCardsPerView(2.2);
      else setCardsPerView(4);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - Math.floor(cardsPerView));

  const goTo = (next) => {
    const clamped = Math.min(Math.max(next, 0), maxIndex);
    setIndex(clamped);

    if (!trackRef.current) return;
    const card = cardRefs.current[0];
    const gap = 24; // matches gap-6
    const cardWidth = card ? card.offsetWidth + gap : 0;

    gsap.to(trackRef.current, {
      x: -clamped * cardWidth,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    goTo(index);
  }, [cardsPerView]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".team-heading-reveal",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      );

      tl.fromTo(
        ".team-card",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f0f9ff] to-[#f0fdf4]"
    >
      {/* ================= WHITISH AMBIENT GLOWS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-sky-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[500px] bg-emerald-100/40 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        
        {/* ================= HEADING ================= */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="team-heading-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm opacity-0">
            <Sparkles size={12} className="fill-teal-600 text-teal-600" /> The Visionaries
          </div>

          <h2 className="team-heading-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-3 leading-tight opacity-0">
            Partnered with most of the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600">
              top people at each industry
            </span>
          </h2>
        </div>

        {/* ================= CAROUSEL CONTAINER ================= */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* LEFT ARROW (Responsive: visible on all viewports, adjust position for desktop) */}
          <button
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 border border-slate-200 text-slate-700 shadow-md hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition duration-300 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Track Outer Container */}
          <div className="overflow-hidden px-1 py-4">
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform"
            >
              {teamMembers.map((member, i) => (
                <div
                  key={member.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="team-card group relative shrink-0 w-[78%] sm:w-[45%] lg:w-[calc(25%-18px)] aspect-[3/4] rounded-3xl overflow-hidden border border-white/80 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] bg-white/60 backdrop-blur-md opacity-0"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Base Light Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
                  
                  {/* Hover Soft Tint Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f0fdf4]/95 via-[#ecfeff]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />

                  {/* Info Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                    <p className="text-[#0a2540] text-base md:text-lg font-bold tracking-tight">
                      {member.name}
                    </p>
                    <p className="text-teal-600 text-[11px] md:text-xs font-bold uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>

                    <p className="text-slate-600 text-xs leading-relaxed mt-2.5 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out font-medium">
                      {member.description}
                    </p>
                  </div>

                  {/* Subtle Mint/Teal Ring on Hover */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-emerald-400/30 transition duration-500 pointer-events-none z-30" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW (Responsive: visible on all viewports, adjust position for desktop) */}
          <button
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            disabled={index === maxIndex}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 border border-slate-200 text-slate-700 shadow-md hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition duration-300 disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* ================= CONTROLS & DOTS INDICATOR ================= */}
        <div className="flex justify-center items-center gap-2.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-7 bg-gradient-to-r from-teal-400 via-emerald-400 to-blue-500"
                  : "w-1.5 bg-slate-300/40 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}