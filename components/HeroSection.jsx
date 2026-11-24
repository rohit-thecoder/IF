"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function HeroSection() {
  // --- 3D TILT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    // Disable 3D effect on small screens to save performance
    if (window.innerWidth < 1024) return;
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

  const heroText =
    "Website development agency in Bokaro, Jharkhand. With over 5 years of experience, Infinetic Studios delivers custom websites, mobile apps, video editing, graphic design and social media management across Jharkhand and India.";

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f9fbff] via-[#f0f7ff] to-[#e4efff]"
      aria-label="Infinetic Studios - Website Development Company in Bokaro, Jharkhand"
    >
      <div className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        
        {/* --- PREMIUM DUAL-GRID BACKGROUND --- */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
              backgroundSize: "30px 30px",
              maskImage: "radial-gradient(circle at 20% 30%, black, transparent 60%)",
              WebkitMaskImage: "radial-gradient(circle at 20% 30%, black, transparent 60%)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-full h-full opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(circle at 85% 20%, black, transparent 65%)",
              WebkitMaskImage: "radial-gradient(circle at 85% 20%, black, transparent 65%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="relative order-2 lg:order-1">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#0a2540]"
            >
              <span className="sr-only">Web Development, App Development, Video Editing and Creative Agency in Bokaro, Jharkhand and India: </span>
              Your trusted <br />
              <span className="text-blue-600">BRAND</span> <br />
              in{" "}
              <span className="relative inline-block">
                JHARKHAND
                <svg
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 text-blue-200"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* SEO Optimized Text Block (No span mapping) */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-8 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed font-medium"
            >
              {heroText}
            </motion.p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 bg-[#0a2540] hover:bg-blue-600 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-blue-900/10 transition-colors duration-300 hover:-translate-y-1"
                  aria-label="Contact Infinetic Studios for website development in Jharkhand"
                >
                  Contact Now
                  <motion.span
                    animate={{ x: 5 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="flex items-center"
                  >
                    <HiArrowRight className="text-xl md:text-2xl transition-transform" aria-hidden="true" />
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-1"
              >
                <div
                  className="flex text-blue-500 text-lg md:text-xl"
                  role="img"
                  aria-label="4 out of 5 star rating"
                >
                  {"★★★★".split("").map((s, i) => (
                    <span key={i} className="drop-shadow-sm" aria-hidden="true">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-bold text-[#0a2540]/60 tracking-wider uppercase">
                  Best Web Services
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT CONTENT: THE MACBOOK PRO */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center items-center perspective-[1500px] w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Glow */}
            <div
              className="absolute w-[80%] h-[70%] bg-blue-400/20 blur-[100px] md:blur-[120px] rounded-full animate-pulse"
              aria-hidden="true"
            ></div>

            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[620px] z-10"
            >
              {/* MacBook Shell (Metallic Silver Finish) */}
              <div className="relative bg-[#d1d5db] rounded-2xl md:rounded-[2rem] p-[2%] md:p-[1.2%] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/30">
                
                {/* Screen (Black Bezel with Notch) */}
                <div className="relative aspect-[16/10] bg-black rounded-xl md:rounded-[1.2rem] overflow-hidden flex items-center justify-center border-[4px] md:border-[6px] border-[#111]">
                  
                  {/* The Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-28 h-3 md:h-5 bg-[#111] rounded-b-lg md:rounded-b-xl z-30 flex items-center justify-center gap-1 md:gap-2"
                    aria-hidden="true"
                  >
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#222]"></div>
                    <div className="w-[3px] h-[3px] md:w-1 md:h-1 rounded-full bg-blue-500/20"></div>
                  </div>
                  
                  {/* Camera */}
                  <div
                    className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] md:w-1 md:h-1 rounded-full bg-zinc-800 z-30"
                    aria-hidden="true"
                  ></div>
                  
                  {/* Display Content */}
                  <div className="relative w-full h-full bg-white overflow-hidden">
                    <Image
                      src="/if.png"
                      alt="Infinetic Studios website portfolio preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 620px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-[4s]"
                      priority
                    />
                    {/* Screen Glare */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 z-20 pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* MacBook Hinge & BaseDetail */}
              <div
                style={{ transform: "translateZ(-20px)" }}
                className="relative -mt-[2px] md:-mt-1 mx-auto w-[105%] -left-[2.5%] h-3 md:h-5 bg-gradient-to-b from-[#9ca3af] to-[#4b5563] rounded-b-xl md:rounded-b-[2.5rem] shadow-2xl flex justify-center"
                aria-hidden="true"
              >
                <div className="w-[20%] h-[2px] md:h-1 bg-[#1a202c] rounded-b-full opacity-20"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
