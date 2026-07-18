"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Globe, TrendingUp, Video, Layers, CheckCircle2, Hexagon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PremiumAboutGallery() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // We use matchMedia to run completely different logic for Mobile vs Desktop
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // === DESKTOP HORIZONTAL SCROLL ===
        const sections = gsap.utils.toArray(".gallery-panel");
        const totalSections = sections.length;

        gsap.to(sections, {
          xPercent: -100 * (totalSections - 1),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            // Adjust the scroll distance duration based on width
            end: () => "+=" + triggerRef.current.offsetWidth, 
            snap: 1 / (totalSections - 1),
          },
        });

        // Parallax for Desktop
        gsap.utils.toArray(".parallax-img").forEach((img) => {
          gsap.to(img, {
            scale: 1.15,
            scrollTrigger: {
              trigger: img.closest(".gallery-panel"),
              start: "left right",
              end: "right left",
              containerAnimation: gsap.getById("horizontalTween"), // hypothetical ID, usually handled auto by trigger
              scrub: true,
            }
          });
        });
      });

      mm.add("(max-width: 1023px)", () => {
        // === MOBILE FADE UP ANIMATIONS ===
        const elements = gsap.utils.toArray(".mobile-fade-up");
        elements.forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  // Custom Dot Pattern for Background
  const dotPattern = {
    backgroundImage: `radial-gradient(#cbd5e1 1.5px, transparent 1.5px)`,
    backgroundSize: "32px 32px",
  };

  return (
    <div className="bg-[#f0f4f8] text-[#0f172a] font-sans overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* Background Pattern Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60" style={dotPattern} />
      
      {/* Soft Ambient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 z-0 pointer-events-none" />

      {/* --- WRAPPER --- */}
      <div ref={triggerRef} className="relative z-10 lg:flex lg:flex-nowrap lg:h-screen lg:w-[400vw]">
        
        {/* === PANEL 1: THE HERO / INTRO === */}
        <section className="gallery-panel w-full lg:w-screen min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 border-r border-slate-200/50 relative">
           
           <div className="mobile-fade-up flex items-center gap-3 mb-6">
             <div className="h-[1px] w-12 bg-slate-400"></div>
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
               01 / Introduction
             </span>
           </div>
           
           <h1 className="mobile-fade-up text-5xl md:text-7xl lg:text-[8.5rem] font-black tracking-tighter leading-[1.1] lg:leading-[0.9] text-[#0a2540] mb-8">
             DIGITAL <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-700 drop-shadow-sm">
               REVOLUTION.
             </span>
           </h1>

           <div className="mobile-fade-up max-w-xl p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg lg:shadow-none lg:bg-transparent lg:border-none lg:p-0">
             <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
               {"We don't just occupy space online."} <br/>
               <span className="text-[#0a2540] font-bold">We dominate it.</span> crafting experiences that stick.
             </p>
           </div>
           
           {/* Scroll Indicator */}
           <div className="mobile-fade-up mt-12 flex items-center gap-4 text-slate-400">
              <div className="p-3 rounded-full border border-slate-300 animate-bounce">
                <ArrowRight className="lg:rotate-0 rotate-90 text-blue-600" size={20} />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold">Start Exploring</span>
           </div>
        </section>

        {/* === PANEL 2: THE STORY (Glassmorphism Card) === */}
        <section className="gallery-panel w-full lg:w-screen min-h-screen flex items-center justify-center p-4 lg:p-0 border-r border-slate-200/50">
           <div className="w-full h-full lg:flex bg-white lg:bg-transparent rounded-[2.5rem] lg:rounded-none overflow-hidden shadow-2xl lg:shadow-none my-10 lg:my-0 border lg:border-none border-white/50">
              
              {/* Image Half */}
              <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full overflow-hidden">
                <Image 
                  src="/banner.png" 
                  alt="Team working" 
                  fill 
                  className="parallax-img object-cover transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 to-transparent lg:bg-[#0a2540]/20 lg:mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 text-white lg:hidden">
                    <p className="text-sm font-mono opacity-80">EST. 2024</p>
                </div>
              </div>

              {/* Text Half */}
              <div className="w-full lg:w-1/2 h-auto lg:h-full p-8 lg:p-24 flex flex-col justify-center bg-white/80 backdrop-blur-xl">
                 <div className="mobile-fade-up mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/80 text-blue-700 text-[10px] font-bold uppercase tracking-widest w-fit shadow-sm">
                    <Hexagon size={12} fill="currentColor" /> Infinetic Studio
                 </div>
                 
                 <h2 className="mobile-fade-up text-3xl md:text-5xl lg:text-6xl font-bold text-[#0a2540] mb-6 leading-tight">
                    Architects of the <br className="hidden lg:block"/> Future Web.
                 </h2>
                 
                 <p className="mobile-fade-up text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                    We don’t chase trends; we build trust through results, reliability, and thoughtful execution.
                 </p>
                 
                 <div className="mobile-fade-up flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full"><CheckCircle2 size={18}/></div>
                        <span className="text-sm font-bold text-[#0a2540]">Full-Service Agency</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-full"><TrendingUp size={18}/></div>
                        <span className="text-sm font-bold text-[#0a2540]">Data-Driven</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* === PANEL 3: THE EXPERTISE (Premium Dark Mode Contrast) === */}
        

        {/* === PANEL 4: THE CLOSING (CTA) === */}
        <section className="gallery-panel w-full lg:w-screen min-h-screen flex items-center justify-center relative py-24 lg:py-0">
           <div className="text-center px-6 max-w-4xl mx-auto">
              <div className="mobile-fade-up inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest">
                 Ready to Transform?
              </div>
              
              <h2 className="mobile-fade-up text-5xl md:text-7xl lg:text-[8rem] font-black text-[#0a2540] tracking-tighter mb-10 leading-[0.9]">
                 {"LET'S BUILD"} <br/> 
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">THE FUTURE.</span>
              </h2>
              
              <div className="mobile-fade-up">
                  <button className="group relative px-10 py-5 bg-[#0a2540] text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl shadow-blue-900/20 hover:scale-105 transition-transform duration-300">
                     <span className="relative z-10 flex items-center gap-2">Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform"/></span>
                     <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                  </button>
              </div>
              
           </div>
           
           {/* Footer-like bottom bar for the last slide */}
           
        </section>

      </div>
    </div>
  );
}