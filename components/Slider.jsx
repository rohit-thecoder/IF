"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Globe, 
  Video, 
  Users, 
  Palette, 
  Megaphone, 
  PlusCircle 
} from "lucide-react";

// GSAP Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Slider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const headerRef = useRef(null);

  const services = [
    { name: "Web Development", icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Video Editing", icon: <Video className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Social Media Management", icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Poster Designing", icon: <Palette className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Ad Creation", icon: <Megaphone className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: "And More", icon: <PlusCircle className="w-6 h-6 md:w-8 md:h-8" /> },
  ];

  const duplicatedServices = [...services, ...services, ...services];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Entrance Animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      // 2. Continuous Smooth Scroll Animation
      const slider = sliderRef.current;
      const scrollWidth = slider.scrollWidth / 3;

      gsap.to(slider, {
        x: `-=${scrollWidth}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % scrollWidth)
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white py-20 overflow-hidden relative">
      
      {/* --- CENTERED HEADING --- */}
      <div className="flex flex-col items-center mb-20 px-6">
        <div ref={headerRef} className="text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#0a2540] tracking-tight uppercase italic">
            What We <span className="text-blue-600">Offer</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* --- GSAP SLIDER CONTAINER --- */}
      <div className="relative flex items-center group">
        
        {/* PREMIUM GRADIENT MASK (Fade effect edges par) */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(to_right,white_0%,transparent_30%,transparent_70%,white_100%)]"></div>

        {/* Scrolling Content */}
        <div
          ref={sliderRef}
          className="flex whitespace-nowrap gap-12 md:gap-20 items-center py-6"
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-5 transition-all duration-500 cursor-pointer"
            >
              {/* Icon - Professional Size */}
              <div className="text-blue-600 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Service Text - Professional Font Size */}
              <span className="text-2xl md:text-4xl font-bold tracking-tight text-[#0a2540] opacity-30 hover:opacity-100 transition-opacity duration-500">
                {service.name}
              </span>

              {/* Dot Separator */}
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600/20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;