"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

// --- Original image data ---
const originalCardData = [
  { id: 1, imageUrl: "video.jpg", alt: "Professional video editing showcase by Infinetic Studios" },
  { id: 2, imageUrl: "all1.jpg", alt: "Creative social media and graphic design showcase by Infinetic Studios" },
  { id: 3, imageUrl: "coding.jpg", alt: "Custom website development project by Infinetic Studios" },
  { id: 4, imageUrl: "mark.jpg", alt: "Branding and digital marketing showcase by Infinetic Studios" },
  { id: 5, imageUrl: "all.png", alt: "Infinetic Studios portfolio of digital creative services" },
];

// Duplicate the array (extra copies help the curve look full & seamless)
const cardData = [...originalCardData, ...originalCardData, ...originalCardData];

export default function Curoseal() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  // Framer motion state for marquee
  const xTranslation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // Set up staggered animation variants for the text section
  const textContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const textItemVariant = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Main animation loop (Replaces gsap.ticker & gsap continuous tween)
  useAnimationFrame((time, delta) => {
    // 1. Handle Infinite Marquee logic
    if (!isHovered && trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth / 3;
      // Calculate speed based on original GSAP duration (34s for totalWidth)
      const speed = totalWidth / 34; 
      const moveBy = speed * (delta / 1000);

      let newX = xTranslation.get() - moveBy;
      // Loop back seamlessly
      if (newX <= -totalWidth) {
        newX += totalWidth;
      }
      xTranslation.set(newX);
    }

    // 2. Handle Curved Layout logic
    if (!wrapRef.current || cardsRef.current.length === 0) return;

    const wrapRect = wrapRef.current.getBoundingClientRect();
    const centerX = wrapRect.left + wrapRect.width / 2;
    const halfWidth = wrapRect.width / 2;

    const CURVE_DEPTH = 110;
    const MAX_ROTATION = 16;
    const MAX_SCALE_DROP = 0.12;

    cardsRef.current.forEach((card) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;

      // -1 (far left) ... 0 (center) ... 1 (far right)
      let normX = (cardCenterX - centerX) / halfWidth;
      normX = Math.max(-1.3, Math.min(1.3, normX)); // clamp

      const absN = Math.min(Math.abs(normX), 1);
      const y = Math.pow(absN, 1.6) * CURVE_DEPTH;
      const rotate = normX * MAX_ROTATION;
      const scale = 1 - absN * MAX_SCALE_DROP;

      // Directly apply styles for max performance (just like GSAP)
      card.style.transform = `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`;
      card.style.transformOrigin = "top center";
    });
  });

  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Manrope:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-15%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative bg-white py-24 w-full overflow-hidden"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-7xl mx-auto">
              <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-200/15 rounded-full blur-2xl" />
              <div className="absolute bottom-32 right-32 w-72 h-72 bg-orange-200/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <motion.div
          variants={textContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="relative max-w-5xl mx-auto text-center mb-20 px-6 z-10"
        >
          {/* Badge */}
          <motion.span
            variants={textItemVariant}
            className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-5 py-2 rounded-full mb-6 tracking-wide"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Trusted by 50+ Ambitious Brands
          </motion.span>

          <motion.h2
            variants={textItemVariant}
            className="text-5xl md:text-7xl font-black text-[#1e40af]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Elevate Your
          </motion.h2>
          <motion.h2
            variants={textItemVariant}
            className="text-5xl md:text-7xl font-black mt-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-[#1e40af]">Digital </span>
            <span className="text-orange-500">Presence</span>
          </motion.h2>

          <motion.p
            variants={textItemVariant}
            className="mt-10 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Infinetic Studios creates custom digital solutions for brands,
            startups, and growing businesses.
          </motion.p>
        </motion.div>

        {/* MARQUEE IMAGE ROW (curved) */}
        <motion.div
          ref={wrapRef}
          initial={{ y: 80, opacity: 0, scale: 0.96 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-15%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative w-full overflow-x-hidden overflow-y-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Edge fade masks for premium look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            ref={trackRef}
            style={{ x: xTranslation, width: "max-content" }}
            className="flex items-start gap-8 pt-6 pb-28 will-change-transform"
          >
            {cardData.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative flex-shrink-0 w-[280px] h-[380px] md:w-[340px] md:h-[440px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 will-change-transform"
              >
                <img
                  src={card.imageUrl}
                  alt={card.alt}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mt-20 relative z-10"
        >
          <Link
            href="/services"
            aria-label="Explore Website Development, App Development and Creative Services"
            className="inline-block bg-gradient-to-r from-[#1e40af] to-[#6284f2] text-white text-lg font-semibold px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Begin Your Transformation
          </Link>
          <p
            className="mt-6 text-gray-500 text-sm"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Let&apos;s discuss your project — no obligation.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}
