"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { 
  PenTool, ArrowUpRight, CheckCircle2, 
  Code2, Smartphone, Laptop, MousePointer2, Cpu 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register Plugin
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Website Development",
    slug: "web-development",
    description: "Build ultra-fast, highly secure, and conversion-focused digital infrastructure. We engineer custom React and Next.js applications tailored for maximum scalability, performance, and search engine visibility.",
    tags: ["Next.js", "React", "WebGL", "E-Commerce"],
    color: "bg-blue-600",
    glow: "group-hover:shadow-blue-600/40",
    imgAlign: "left", 
    imageSrc: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop",
    altText: "Enterprise Website Development services by Infinetic Studios in Bokaro Jharkhand"
  },
  {
    id: "02",
    title: "Mobile App Development",
    slug: "app-development",
    description: "Launch native and cross-platform mobile ecosystems that maximize retention. From high-performance architecture to intuitive responsive design, we develop apps optimized for speed, security, and fluid UX.",
    tags: ["React Native", "iOS & Android", "REST APIs", "Cloud Infrastructure"],
    color: "bg-indigo-600",
    glow: "group-hover:shadow-indigo-600/40",
    imgAlign: "right", 
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    altText: "Premium Mobile App Development services by Infinetic Studios in Chas Jharkhand"
  },
  {
    id: "03",
    title: "Social Media Management",
    slug: "social-media-management",
    description: "Scale your distribution networks with high-intent corporate positioning. We control data-driven organic engagement strategies across premium platforms to generate measurable qualified inbound leads.",
    tags: ["Strategy", "Community", "Analytics", "Growth"],
    color: "bg-indigo-600",
    glow: "group-hover:shadow-indigo-600/40",
    imgAlign: "left",
    imageSrc: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=2800&auto=format&fit=crop",
    altText: "Strategic Social Media Management services by Infinetic Studios in Bokaro"
  },
  {
    id: "04",
    title: "Professional Video Editing",
    slug: "video-editing",
    description: "Produce narrative-driven cinematic assets optimized for audience retention retention engineering. Turn raw product dynamic footage into high-impact visual funnels that dramatically improve acquisition metrics.",
    tags: ["Color Grading", "VFX", "Sound Design", "Storytelling"],
    color: "bg-blue-600",
    glow: "group-hover:shadow-blue-600/40",
    imgAlign: "right",
    imageSrc: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop",
    altText: "High-end Corporate Video Editing services by Infinetic Studios India"
  },
  {
    id: "05",
    title: "Graphic Designing",
    slug: "graphic-designing",
    description: "Synthesize corporate identity systems through timeless strategic typography and vector art. We build scalable design systems, marketing systems, and visual assets that establish immediate authority.",
    tags: ["Brand Identity", "UI/UX Design", "Vector Art", "Packaging"],
    color: "bg-blue-600",
    glow: "group-hover:shadow-blue-600/40",
    imgAlign: "left",
    imageSrc: "https://plus.unsplash.com/premium_photo-1661304687903-30f504d48655?q=80&w=2070&auto=format&fit=crop",
    altText: "Professional Graphic Designing and branding services by Infinetic Studios Jharkhand"
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Header Animation
      gsap.from(".hero-line", {
        scrollTrigger: { trigger: ".section-header", start: "top 80%" },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
      });

      // Rows Animation
      services.forEach((service, index) => {
        const rowSelector = `.service-row-${index}`;
        const imgSelector = `.service-img-${index}`;
        const contentSelector = `.service-content-${index}`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rowSelector,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        });

        const xOffset = 80;

        if (service.imgAlign === "left") {
          tl.from(imgSelector, { x: -xOffset, opacity: 0, scale: 0.95, duration: 1.4, ease: "power3.out" })
            .from(contentSelector, { x: xOffset, opacity: 0, duration: 1.4, ease: "power3.out" }, "-=1.2");
        } else {
          tl.from(imgSelector, { x: xOffset, opacity: 0, scale: 0.95, duration: 1.4, ease: "power3.out" })
            .from(contentSelector, { x: -xOffset, opacity: 0, duration: 1.4, ease: "power3.out" }, "-=1.2");
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-32 lg:py-40 bg-[#f8fafc] overflow-hidden font-sans antialiased text-[#0f172a]"
      aria-labelledby="services-main-heading"
    >
      
      {/* --- BACKGROUND ENGINE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: 'top center' }} />
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`, backgroundSize: '96px 96px', backgroundPosition: 'top center' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HERO HEADER --- */}
        <header className="section-header mb-32 lg:mb-40 flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="hero-line bg-blue-50/80 backdrop-blur-sm border border-blue-100 px-5 py-2 rounded-full flex items-center gap-3 mb-8 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-blue-700 uppercase">World-Class Digital Strategy</span>
          </div>
          
          {/* --- HEADLINE WRAPPER WITH DECORATIVE ICONS --- */}
          <div className="relative">
            
            {/* FLOATING DECORATIVE ICONS */}
            <div className="absolute -top-16 -left-4 lg:-left-20 text-blue-200/60 blur-[1px] hidden lg:block transform -rotate-12 pointer-events-none" aria-hidden="true">
              <Laptop className="w-20 h-20" strokeWidth={1} />
            </div>

            <div className="absolute -top-20 -right-4 lg:-right-24 text-indigo-200/50 blur-[1px] hidden lg:block transform rotate-12 pointer-events-none" aria-hidden="true">
              <Smartphone className="w-16 h-16" strokeWidth={1} />
            </div>

            <div className="absolute top-1/2 -right-32 text-pink-200/40 blur-[1px] hidden lg:block transform rotate-45 pointer-events-none" aria-hidden="true">
              <PenTool className="w-24 h-24" strokeWidth={0.5} />
            </div>

            <div className="absolute top-1/2 -left-32 text-slate-300/50 blur-[1px] hidden lg:block transform -rotate-12 pointer-events-none" aria-hidden="true">
              <Code2 className="w-24 h-24" strokeWidth={0.5} />
            </div>

            <div className="absolute -bottom-8 right-10 text-blue-400/20 hidden lg:block pointer-events-none" aria-hidden="true">
               <MousePointer2 className="w-12 h-12 fill-blue-100/20" strokeWidth={1} />
            </div>

            <div className="absolute -top-24 left-1/3 text-emerald-200/30 blur-[2px] hidden lg:block pointer-events-none animate-pulse" aria-hidden="true">
               <Cpu className="w-14 h-14" strokeWidth={1} />
            </div>

            {/* FIXED H2 NESTED INSIDE H1: Refactored into unified Semantic H1 Structure */}
            <h1 id="services-main-heading" className="hero-line relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#0a2540] leading-[1.05] mb-8">
              <span className="sr-only">Website development, mobile app development, video editing and creative services in Bokaro, Jharkhand and India: </span>
              We craft digital <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-x-8 -inset-y-4 bg-blue-600/10 blur-3xl rounded-[100%] opacity-0 lg:opacity-100 pointer-events-none"></span>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient bg-[length:200%_auto]">
                  Masterpieces.
                </span>
              </span>
            </h1>
          </div>
          
          {/* Clean, Rich Introductory Paragraph with Natural Location Placement */}
          <p className="hero-line text-lg md:text-xl text-slate-500 font-medium max-w-3xl leading-relaxed z-10 mt-2">
            Website, app, video editing, graphic design and social media services for Bokaro, Chas, Ranchi, Dhanbad, Deoghar, Jharkhand and India.
          </p>
        </header>

        {/* --- SERVICES LIST --- */}
        <div className="flex flex-col gap-32 lg:gap-44">
          {services.map((service, index) => (
            <article 
              key={index} 
              className={`service-row-${index} flex flex-col lg:flex-row items-center gap-16 lg:gap-28 ${service.imgAlign === 'right' ? 'lg:flex-row-reverse' : ''}`}
              aria-labelledby={`service-title-${index}`}
            >
              
              {/* IMAGE COLUMN WITH FIGURE SEMANTICS */}
              <figure className={`service-img-${index} w-full lg:w-1/2 perspective-1000 m-0`}>
                <div className="relative group z-10">
                   {/* Background Glow */}
                   <div className={`absolute -inset-8 ${service.color} opacity-20 blur-[60px] rounded-full group-hover:opacity-30 transition-all duration-700`} aria-hidden="true"></div>
                   
                   {/* Main Image Container */}
                   <div className={`relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/50 shadow-2xl shadow-slate-200/60 ${service.glow} transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2`}>
                      <Image 
                        src={service.imageSrc}
                        alt={service.altText}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={index <= 1 ? "eager" : "lazy"}
                        priority={index <= 1}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" aria-hidden="true"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0] transition-[background-position] duration-1000 ease-in-out group-hover:bg-[position:200%_0]" aria-hidden="true"></div>
                   </div>
                </div>
              </figure>

              {/* CONTENT COLUMN */}
              <div className={`service-content-${index} w-full lg:w-1/2`}>
                {/* ID & Category */}
                <div className="flex items-center gap-6 mb-10">
                   <span className="text-5xl md:text-6xl font-black text-slate-200 font-sans leading-none select-none" aria-hidden="true">{service.id}</span>
                   <div className={`h-px w-16 ${service.color} opacity-60`} aria-hidden="true"></div>
                   <span className={`text-xs font-bold uppercase tracking-[0.25em] ${service.color.replace('bg-', 'text-')}`}>
                      {service.title.split(' ')[0]} Ecosystem
                   </span>
                </div>
                
                <h2 id={`service-title-${index}`} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2540] mb-8 tracking-tight leading-[1.1]">
                  {service.title}
                </h2>
                
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 font-medium max-w-lg">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-12" role="list" aria-label={`${service.title} core technologies and features`}>
                  {service.tags.map((tag, i) => (
                    <div key={i} role="listitem" className="flex items-center gap-2 px-4 py-2 bg-white text-slate-600 text-[11px] font-bold uppercase tracking-widest rounded-full border border-slate-100 shadow-sm hover:border-blue-200 hover:text-blue-800 transition-colors cursor-default">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${service.color.replace('bg-', 'text-')}`} aria-hidden="true" />
                      {tag}
                    </div>
                  ))}
                </div>
                
                {/* Internal Semantic Link Action */}
                <Link 
                  href={`/services/${service.slug}`}  
                  className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[#0a2540] font-sans rounded-full hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-1"
                  aria-label={`Discuss your requirements and read more about our ${service.title} capabilities`}
                >
                  <span className="cursor-pointer mr-3 text-sm uppercase tracking-[0.15em]">Discuss Your Requirements</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
