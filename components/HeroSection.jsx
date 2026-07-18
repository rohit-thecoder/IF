"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function HeroSection() {
  const containerRef = useRef(null);
  const typingRef = useRef(null);

  // --- 3D TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", { y: 60, opacity: 0, duration: 1 })
        .from(".hero-desc", { y: 40, opacity: 0, duration: 0.9 }, "-=0.6")
        .fromTo(".hero-cta", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .from(".hero-rating", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".laptop-container", { scale: 0.8, opacity: 0, duration: 1.2, ease: "back.out(1.7)" }, "-=1");

      gsap.to(".cta-arrow", { x: 6, duration: 1.2, repeat: -1, yoyo: true, ease: "power1.inOut" });

      const text = "With over 5 years of experience, Infinetic Studios delivers high-quality website development, creative design, and social media management services to help businesses grow online across Jharkhand.";
      let index = 0;
      typingRef.current.innerHTML = "";
      const type = () => {
        if (index < text.length) {
          typingRef.current.innerHTML += text[index++];
          gsap.delayedCall(0.02, type);
        }
      };
      gsap.delayedCall(1.4, type);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={containerRef} className="relative min-h-screen -mt-8 md:mt-0 md:pt-14  overflow-hidden bg-gradient-to-b from-[#f9fbff] via-[#f0f7ff] to-[#e4efff]">
        
        {/* --- PREMIUM DUAL-GRID BACKGROUND --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
              backgroundSize: '30px 30px',
              maskImage: 'radial-gradient(circle at 20% 30%, black, transparent 60%)',
              WebkitMaskImage: 'radial-gradient(circle at 20% 30%, black, transparent 60%)'
            }}
          />
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(circle at 85% 20%, black, transparent 65%)',
              WebkitMaskImage: 'radial-gradient(circle at 85% 20%, black, transparent 65%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="relative order-2 lg:order-1">
            <h1 className="hero-title text-5xl md:text-6xl font-bold leading-tight text-[#0a2540]">
              Your trusted <br />
              <span className="text-blue-600">BRAND</span> <br />
              in <span className="relative inline-block">
                JHARKHAND
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <p ref={typingRef} className="hero-desc mt-8 text-base md:text-lg text-gray-600 max-w-xl min-h-[72px] leading-relaxed font-medium"></p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/contact" className="group hero-cta inline-flex items-center gap-4 bg-[#0a2540] hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
                Book Now
                <HiArrowRight className="cta-arrow text-2xl transition-transform group-hover:translate-x-1" />
              </Link>
              
              <div className="hero-rating flex flex-col gap-1">
                <div className="flex text-blue-500 text-lg">
                  {"★★★★★".split("").map((s, i) => <span key={i} className="drop-shadow-sm">{s}</span>)}
                </div>
                <p className="text-xs font-bold text-[#0a2540]/50 tracking-wider uppercase">Best Rated Agency 2026</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: THE MACBOOK PRO */}
          <div 
            className="laptop-container relative order-1 lg:order-2 flex justify-center items-center perspective-[2000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Glow */}
            <div className="absolute w-[80%] h-[70%] bg-blue-400/20 blur-[120px] rounded-full animate-pulse"></div>

            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[620px] z-10"
            >
              {/* MacBook Shell (Metallic Silver Finish) */}
              <div className="relative bg-[#d1d5db] rounded-[2rem] p-[1.2%] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/30">
                
                {/* Screen (Black Bezel with Notch) */}
                <div className="relative aspect-[16/10] bg-black rounded-[1.2rem] overflow-hidden flex items-center justify-center border-[6px] border-[#111]">
                  
                  {/* The Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#111] rounded-b-xl z-30 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#222]"></div>
                    <div className="w-1 h-1 rounded-full bg-blue-500/20"></div>
                  </div>
                  
                  {/* Camera */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-zinc-800 z-30"></div>
                  
                  {/* Display Content */}
                  <div className="relative w-full h-full bg-white overflow-hidden">
                    <Image
                      src="/if.png"
                      alt="Mac Preview"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-[4s]"
                      priority
                    />
                    {/* Screen Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 z-20 pointer-events-none"></div>
                  </div>
                </div>
              </div>
              
              {/* MacBook Hinge & BaseDetail */}
              <div 
                style={{ transform: "translateZ(-30px)" }}
                className="relative -mt-1 mx-auto w-[105%] -left-[2.5%] h-5 bg-gradient-to-b from-[#9ca3af] to-[#4b5563] rounded-b-[2.5rem] shadow-2xl flex justify-center"
              >
                 <div className="w-[20%] h-1 bg-[#1a202c] rounded-b-full opacity-20"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}