'use client';

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

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
    image: "https://images.unsplash.com/photo-1562847198-622638acc04b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Ankita Sharma",
    role: "Community Lead",
    company: "Shraddha Kapoor Fan Page",
    rating: 4,
    review:
      "Strong grasp on engagement and posting rhythm. Growth was consistent and organic.",
    image: "https://images.unsplash.com/photo-1624610806703-99c0852c31c0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1727278465739-b3b5266e18de?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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


// ---------------- STARS ----------------
const RatingStars = ({ rating }) => (
  <div className="flex gap-1.5 justify-center mb-6">
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 transition-all duration-300 ${
          i < rating
            ? "text-amber-400 drop-shadow-md scale-110"
            : "text-slate-300"
        }`}
      />
    ))}
  </div>
);

// ---------------- COMPONENT ----------------
const TestimonialCarousel = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const swiperWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        swiperWrapperRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: swiperWrapperRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        ref={containerRef}
        className=" relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 font-inter"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Enhanced Background Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Multiple Circle Dots - High to Low Opacity (Center Strongest) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-indigo-400/50 via-blue-400/30 to-transparent rounded-full blur-3xl" />
          
          <div className="absolute top-20 left-10 w-[700px] h-[700px] bg-gradient-to-br from-purple-400/35 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-16 w-[600px] h-[600px] bg-gradient-to-tl from-teal-400/40 to-cyan-400/25 rounded-full blur-3xl animate-pulse delay-700" />
          
          <div className="absolute top-40 right-32 w-[500px] h-[500px] bg-gradient-to-bl from-amber-300/20 to-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-10 left-20 w-[550px] h-[550px] bg-gradient-to-tr from-violet-400/30 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500" />

          {/* Grid Pattern - High Opacity in Center, Fading to Edges */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, #cbd5e1 1px, transparent 1px),
                radial-gradient(circle at center, #cbd5e1 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 30px 30px",
              maskImage: "radial-gradient(circle at center, black 20%, rgba(0,0,0,0.4) 50%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 20%, rgba(0,0,0,0.4) 50%, transparent 80%)",
              opacity: 0.15,
            }}
          />

          {/* Additional Subtle Linear Grid for Depth */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Header */}
          <div ref={headingRef} className="text-center mb-20">
            <span className="inline-block py-3 px-8 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-lg text-indigo-700 text-sm font-bold tracking-widest uppercase mb-8">
              Client Testimonials
            </span>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Voices of Trust & Excellence
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed opacity-90">
              Real stories from leaders who transformed their digital presence with us.
            </p>
          </div>

          {/* Swiper Carousel */}
          <div ref={swiperWrapperRef} className="relative">
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-white/90 backdrop-blur-lg shadow-2xl border border-white/60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-700 hover:text-white hover:scale-110 transition-all duration-400 group">
              <FaChevronLeft className="text-xl group-hover:-translate-x-1 transition" />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-white/90 backdrop-blur-lg shadow-2xl border border-white/60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-700 hover:text-white hover:scale-110 transition-all duration-400 group">
              <FaChevronRight className="text-xl group-hover:translate-x-1 transition" />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              centeredSlides
              loop
              speed={1200}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass: "swiper-pagination-bullet !w-3 !h-3 !bg-white/60 !backdrop-blur",
                bulletActiveClass: "!bg-gradient-to-r !from-indigo-500 !to-blue-600 !scale-150 !shadow-lg",
              }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 1.8, spaceBetween: 30 },
                1024: { slidesPerView: 2.5, spaceBetween: 40 },
                1280: { slidesPerView: 3, spaceBetween: 50 },
              }}
              className="pb-20"
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="h-full p-10 bg-white/75 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-2xl 
                    transition-all duration-1000 hover:shadow-3xl hover:-translate-y-4 hover:bg-white/85
                    opacity-90 scale-95
                    [&.swiper-slide-active]:opacity-100
                    [&.swiper-slide-active]:scale-105
                    [&.swiper-slide-active]:shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)]"
                  >
                    <div className="mb-8 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <FaQuoteLeft className="text-3xl text-white" />
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed text-slate-700 italic mb-8 text-center min-h-32">
                      “{item.review}”
                    </p>

                    <RatingStars rating={item.rating} />

                    <div className="flex items-center justify-center gap-5">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-16 h-16 rounded-full object-cover ring-4 ring-white/80 shadow-xl
    ${item.id === 3 || item.id === 5 || item.id === 2 ? "object-[center_1%]" : "object-center"}`}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/25 to-transparent" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-slate-900 text-lg">
                          {item.name}
                        </h4>
                        <p className="text-indigo-600 font-semibold text-sm">
                          {item.role}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination flex justify-center gap-4 mt-8" />
          </div>
        </div>
        <div className="w-full flex justify-center mt-16">
      <Link
        href="/services"
        className="
          group inline-flex items-center gap-3
          text-blue-600 font-semibold tracking-wide
          hover:text-blue-700 transition-colors duration-300
        "
      >
        <span className="relative">
          Explore Services
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
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