"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ================= TEAM DATA =================
const teamMembers = [
  {
    id: 1,
    name: "Mohit Kumar",
    role: "Team Manager",
    image: "/Mohit.jpg",
    positionClass: "top-[10%] left-[8%] xl:left-[12%]",
  },
  {
    id: 2,
    name: "Sachin Kumar",
    role: "Social Media Manager",
    image: "/Sachin.jpg",
    positionClass: "top-[42%] left-[6%] xl:left-[10%]",
  },
  {
    id: 3,
    name: "Ranjeet Verma",
    role: "Graphic Designer",
    image: "/Ranjeet.jpg",
    positionClass: "bottom-[12%] left-[8%] xl:left-[12%]",
  },
  {
    id: 4,
    name: "Gaurav Kumar",
    role: "Full Stack Developer",
    image: "/Gaurav.png",
    positionClass: "top-[10%] right-[8%] xl:right-[12%]",
  },
  {
    id: 5,
    name: "Rohit Kumar",
    role: "Website Manager",
    image: "/Rohit1.jpg",
    positionClass: "top-[42%] right-[6%] xl:right-[10%]",
  },
  {
    id: 6,
    name: "Rohan Kumar",
    role: "Marketing Manager",
    image: "/Rohan.jpg",
    positionClass: "bottom-[12%] right-[8%] xl:right-[12%]",
  },
];

const servicesList = [
  "Web Development",
  "SEO Strategy",
  "Brand Identity",
  "Video Production",
  "UI/UX Design",
  "Engagement",
];

export default function PremiumTeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".center-text-reveal", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".floater-card", {
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
      });

      teamMembers.forEach((_, i) => {
        gsap.to(`.float-anim-${i}`, {
          y: -10,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative lg:h-screen bg-[#f8fafc] overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-200/40 rounded-full blur-[140px]" />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative z-10 hidden lg:flex h-full max-w-[1600px] mx-auto px-6 items-center justify-center">

        {/* CENTER CONTENT */}
        <div className="center-content relative z-40 text-center max-w-3xl p-12 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white/50">
          <div className="center-text-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} /> The Visionaries
          </div>

          <h2 className="center-text-reveal text-6xl font-black text-[#0a2540] mb-6 leading-tight">
            Meet The <br />
            <span className="italic font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Architects
            </span>
          </h2>

          <p className="center-text-reveal text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            A focused team building scalable, high-impact digital products.
          </p>

          <div className="center-text-reveal flex flex-wrap justify-center gap-3 mb-10">
            {servicesList.map((service, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border rounded-full text-xs font-bold text-slate-600 flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 size={12} className="text-blue-500" /> {service}
              </span>
            ))}
          </div>

          <button className="center-text-reveal px-8 py-4 bg-[#0a2540] text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition">
            Start Your Project <ArrowRight size={18} />
          </button>
        </div>

        {/* FLOATING CIRCULAR IMAGES */}
        <div className="absolute inset-0 z-50">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`floater-card float-anim-${index} absolute ${member.positionClass} w-50 h-50`}
            >
              <div className="group relative w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0a2540]/75 opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Name + Role */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 px-2">
                  <p className="text-white text-xs font-semibold leading-tight">
                    {member.role}
                  </p>
                  <p className="text-blue-300 text-[11px] mt-1">
                    {member.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="relative z-10 lg:hidden px-4 pt-20 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-[#0a2540] mb-3">Our Team</h2>
          <p className="text-slate-600 text-base">
            A small, focused group of specialists.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <p className="mt-2 text-sm font-semibold text-[#0a2540]">
                {member.name}
              </p>
              <p className="text-xs text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
