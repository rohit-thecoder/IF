'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

// ---------------- DATA ----------------
const reviews = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Operations Manager",
    company: "The True India",
    rating: 5,
    review:
      "Their understanding of content, audience psychology, and growth strategy is exceptional. Results were visible within weeks.",
    image:
      "https://images.unsplash.com/photo-1562847198-622638acc04b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Ankita Sharma",
    role: "Community Lead",
    company: "Shraddha Kapoor Fan Page",
    rating: 4,
    review:
      "Strong grasp on engagement and posting rhythm. Growth was consistent and organic.",
    image:
      "https://images.unsplash.com/photo-1624610806703-99c0852c31c0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Kumar Shilpi",
    role: "Principle",
    company: "Daffodil International School",
    rating: 5,
    review:
      "Professional handling of our Instagram presence. Visual consistency improved parent engagement.",
    image: "/kshilpi.jpg",
  },
  {
    id: 4,
    name: "Amit Kumar",
    role: "Director",
    company: "Secure Services",
    rating: 4,
    review:
      "Their digital marketing guidance helped us improve visibility and attract better leads.",
    image:
      "https://images.unsplash.com/photo-1727278465739-b3b5266e18de?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Kumar Shilipi",
    role: "Manager",
    company: "Amnour International School",
    rating: 5,
    review:
      "Excellent management of our website. Visual branding improved parent engagement, Totally Worth It!",
    image: "/kshilpi.jpg",
  },
];

// ---------------- SEO: aggregate rating (JSON-LD) ----------------
const avgRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Infinetic Studios",
  url: "https://www.infineticstudios.com",

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    reviewCount: reviews.length,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Infinetic Studios",
      url: "https://www.infineticstudios.com",
    },
    author: {
      "@type": "Person",
      name: r.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: "5",
    },
    reviewBody: r.review,
  })),
};

// ---------------- STARS ----------------
const RatingStars = ({ rating }) => (
  <div
    className="flex gap-1.5 justify-center mb-6"
    role="img"
    aria-label={`Rated ${rating} out of 5 stars`}
  >
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        aria-hidden="true"
        className={`w-4 h-4 transition-all duration-500 ${
          i < rating
            ? "text-[#C6A15B] drop-shadow-[0_0_6px_rgba(198,161,91,0.45)] scale-105"
            : "text-white/10"
        }`}
      />
    ))}
  </div>
);

// ---------------- 3D CARD COMPONENT ----------------
// Extracted to manage local Framer Motion useMotionValues cleanly without re-rendering parent
const TestimonialCard = ({ item }) => {
  const shouldReduceMotion = useReducedMotion();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform mouse position to rotation angles (-6 to 6 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full p-10 bg-[#111114] rounded-2xl border border-white/[0.06]
      transition-[box-shadow,border-color,opacity,transform] duration-700 will-change-transform
      hover:border-[#C6A15B]/30
      opacity-90 scale-[0.96]
      [&.swiper-slide-active]:opacity-100
      [&.swiper-slide-active]:scale-100
      [&.swiper-slide-active]:border-[#C6A15B]/40
      [&.swiper-slide-active]:shadow-[0_30px_80px_-20px_rgba(198,161,91,0.18)]"
    >
      {/* large watermark quotation mark — signature element */}
      <span
        aria-hidden="true"
        className="absolute -top-2 left-8 text-[#C6A15B]/10 select-none pointer-events-none"
        style={{ fontFamily: "'Fraunces', serif", fontSize: "6rem", lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <div className="mb-8 flex justify-center">
        <div className="w-12 h-12 rounded-full border border-[#C6A15B]/40 flex items-center justify-center">
          <FaQuoteLeft className="text-lg text-[#C6A15B]" aria-hidden="true" />
        </div>
      </div>

      <blockquote
        className="text-lg leading-relaxed text-white/75 mb-8 text-center min-h-32"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
      >
        {item.review}
      </blockquote>

      <div>
        
        <RatingStars rating={item.rating} />
      </div>

      <div className="flex items-center justify-center gap-5">
        {/* medallion frame — double gold ring around the avatar */}
        <div className="relative w-16 h-16 rounded-full p-[3px] bg-gradient-to-br from-[#C6A15B] via-[#8A6D3B] to-[#C6A15B]">
          <div className="w-full h-full rounded-full p-[2px] bg-[#0A0A0D]">
            <img
              src={item.image}
              alt={`${item.name}, ${item.role} at ${item.company}`}
              loading="lazy"
              className={`w-full h-full rounded-full object-cover
              ${item.id === 3 || item.id === 5 || item.id === 2 ? "object-[center_1%]" : "object-center"}`}
            />
          </div>
        </div>
        <div className="text-left" >
          <h3 className="font-semibold text-[#F3EFE6] text-base tracking-wide">
            {item.name}
          </h3>
          <p className="text-[#C6A15B] text-sm mt-0.5">{item.role}</p>
          <p className="text-white/35 text-xs mt-1">{item.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ---------------- MAIN COMPONENT ----------------
const TestimonialCarousel = () => {
  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } // Equivalent to power4.out
    },
  };

  const ruleVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 1, ease: "easeInOut" } 
    },
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Structured data for SEO — lets search engines surface star ratings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <section
        aria-label="Client testimonials"
        className="relative py-32 overflow-hidden bg-[#0A0A0D] font-inter"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Restrained luxury backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(198,161,91,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(198,161,91,0.06) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(circle at center, black 15%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 15%, transparent 75%)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-[radial-gradient(circle,rgba(198,161,91,0.10),transparent_70%)] blur-2xl" />
          {/* film-grain texture */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-18%" }} // trigger top 82%
            className="text-center mb-20"
          >
            <motion.span variants={itemVariants} className="inline-flex flex-col items-center gap-3 mb-8">
              <span className="text-[#C6A15B] text-xs font-semibold tracking-[0.35em] uppercase">
                Client Testimonials
              </span>
              <motion.span 
                variants={ruleVariants}
                className="block w-16 h-px bg-[#C6A15B]/60 origin-left" 
              />
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#F3EFE6] leading-[1.1]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Voices of Trust <span className="italic text-[#C6A15B]">&</span> Excellence
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="mt-6 text-lg lg:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
            >
              Real stories from leaders who transformed their digital presence with us.
            </motion.p>
          </motion.div>

          {/* Swiper Carousel */}
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-12%" }} // trigger top 88%
            transition={{ duration: 1.3, ease: [0.19, 1, 0.22, 1] }} // Equivalent to expo.out
            className="relative"
          >
            <button
              aria-label="Previous testimonial"
              className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] backdrop-blur-md border border-[#C6A15B]/25 text-[#F3EFE6] hover:bg-[#C6A15B] hover:text-[#0A0A0D] hover:border-[#C6A15B] hover:scale-110 transition-all duration-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
            >
              <FaChevronLeft className="text-lg group-hover:-translate-x-0.5 transition" />
            </button>
            <button
              aria-label="Next testimonial"
              className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] backdrop-blur-md border border-[#C6A15B]/25 text-[#F3EFE6] hover:bg-[#C6A15B] hover:text-[#0A0A0D] hover:border-[#C6A15B] hover:scale-110 transition-all duration-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
            >
              <FaChevronRight className="text-lg group-hover:translate-x-0.5 transition" />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              centeredSlides
              loop
              speed={1100}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass:
                  "swiper-pagination-bullet !w-2 !h-2 !bg-white/20 !rounded-full",
                bulletActiveClass: "!bg-[#C6A15B] !scale-[1.8] !shadow-[0_0_10px_rgba(198,161,91,0.7)]",
              }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 1.8, spaceBetween: 30 },
                1024: { slidesPerView: 2.5, spaceBetween: 40 },
                1280: { slidesPerView: 3, spaceBetween: 50 },
              }}
              className="pb-16"
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                  {/* Render extracted framer motion card */}
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination flex justify-center gap-3 mt-4" />
          </motion.div>
        </div>

        <div className="w-full flex justify-center mt-16 relative z-10">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-[#C6A15B] font-medium tracking-wide hover:text-[#F3EFE6] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded"
          >
            <span className="relative">
              Explore Services
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TestimonialCarousel;