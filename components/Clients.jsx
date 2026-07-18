"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";
import {
  ArrowUpRight,
  Globe,
  Instagram,
  Youtube, // Added Youtube Icon
  TrendingUp,
  Trophy,
  Users,
  Activity,
  Zap,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clients = [
  {
    id: "01",
    name: "The True India",
    industry: "Content Creator",
    description:
      "We partnered with The True India to scale their digital presence across platforms. Our content strategy and optimization helped the channel cross 8M+ total views, with 25K+ subscribers on YouTube and 35K+ followers on Instagram, building a strong and loyal audience base.",
    reviewScore: 5,
    reviewText: "Massive Organic Growth",
    tags: ["Content Strategy", "YouTube Growth", "Instagram Reach"],
    color: "bg-blue-600",
    imgAlign: "left",
    imageSrc: "/thetrueindia.jpg",
    // Website, YouTube, Instagram
    socials: {
      website: "https://www.thetrueindia.com",
      youtube: "https://www.youtube.com/@The_true_india",
      instagram: "https://www.instagram.com/the.true.india/#",
    },
  },
  {
    id: "02",
    name: "Shraddha Kapoor Fan Page",
    industry: "Entertainment & Fan Community",
    description:
      "We supported the growth of a high-engagement fan community by optimizing video content and posting strategy. The channel achieved 26M+ YouTube views with a highly engaged base of 20K+ subscribers.",
    reviewScore: 5,
    reviewText: "High Engagement",
    tags: ["YouTube Growth", "Shorts Strategy", "Audience Retention"],
    color: "bg-pink-600",
    imgAlign: "right",
    imageSrc: "/shraddha.webp",
    // YouTube
    socials: { youtube: "https://www.youtube.com/@ShraddhaKapoorFanPage" },
  },
  {
    id: "03",
    name: "Daffodil International School, Jharkhand",
    industry: "Education Institution",
    description:
      "We manage and optimize Instagram content for Daffodil International School, focusing on consistent posting, visual quality, and community engagement to strengthen their online presence among parents and students.",
    reviewScore: 4.9,
    reviewText: "Consistent Branding",
    tags: ["Instagram Management", "Content Design", "Engagement"],
    color: "bg-indigo-600",
    imgAlign: "left",
    imageSrc: "/daffodial.png",
    // Instagram
    socials: {
      instagram:
        "https://www.instagram.com/daffodilsbksc?igsh=MWVpMm95ZWtjdDVqNQ==",
    },
  },
  {
    id: "04",
    name: "Amnour International School, Bihar",
    industry: "Education Institution",
    description:
      "As a web development consultant, we guided Amnour International School in building a clean, informative, and trust-focused website that reflects the institution’s academic values.",
    reviewScore: 5,
    reviewText: "Professional Guidance",
    tags: ["Web Consulting", "School Website", "UX Planning"],
    color: "bg-orange-600",
    imgAlign: "right",
    imageSrc: "/amnour.png",
    // Website
    socials: { website: "https://www.amnourschool.com/" },
  },
  {
    id: "05",
    name: "Eklavya Sports, Art & Culture Academy",
    industry: "Sports, Art & Culture",
    description:
      "We handled reels production and ad creatives to promote Eklavya Academy’s activities. The focus was on high-energy visuals and storytelling to attract students and parents.",
    reviewScore: 5,
    reviewText: "Creative Impact",
    tags: ["Reels Creation", "Ad Creatives", "Visual Storytelling"],
    color: "bg-emerald-600",
    imgAlign: "left",
    imageSrc: "/eklavya.jpeg",
    // Instagram
    socials: {
      instagram: "https://www.instagram.com/esac_academy?igsh=ZmF2enR1MzI0NWx1",
    },
  },
  {
    id: "06",
    name: "Indian Academy",
    industry: "Education & Training",
    description:
      "We provided social media consultancy and graphic design support for Indian Academy, focusing on YouTube visuals and consistent brand identity across educational content.",
    reviewScore: 4.8,
    reviewText: "Strong Visual Identity",
    tags: ["Social Media Consulting", "Graphic Design", "YouTube"],
    color: "bg-teal-600",
    imgAlign: "right",
    imageSrc: "/indian.jpeg",
    // YouTube
    socials: {
      youtube: "https://youtube.com/@indianacademy?si=o-HEJ1JOpoteNjsg",
    },
  },
  {
    id: "07",
    name: "Secure Services",
    industry: "Security & Facility Services",
    description:
      "As a digital marketing consultant, we helped Secure Services strengthen their online visibility through targeted campaigns and performance-driven marketing strategies.",
    reviewScore: 3.8,
    reviewText: "Result-Oriented Marketing",
    tags: ["Digital Marketing", "Lead Generation", "Brand Visibility"],
    color: "bg-slate-700",
    imgAlign: "left",
    imageSrc: "/secure.jpeg",
    // Instagram
    socials: {
      instagram:
        "https://www.instagram.com/secureservices.bksc?igsh=OHhmaGIwdWp1NTdj",
    },
  },
  {
    id: "08",
    name: "Sarkari Naukari",
    industry: "Government Job Portal",
    description:
      " we manage and maintain a government job information website. Our focus is on timely updates, structured content, and reliable user experience for aspirants seeking verified sarkari naukari information.",
    reviewScore: 4.5,
    reviewText: "Reliable & Trust-Focused",
    tags: ["Government Job Website", "Content Management", "User Trust"],
    color: "bg-slate-700",
    imgAlign: "right",
    imageSrc:
      "/sarkari.png",
    // Website
    socials: { website: "https://sarkarinaukari.live/" },
  },
];

export default function ClientSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO REVEAL
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 85%",
        },
      });

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title-line",
          {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
            skewY: 5,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        );

      // 2. CLIENT ROWS
      clients.forEach((client, index) => {
        const row = document.querySelector(`.client-row-${index}`);
        const imageWrapper = row?.querySelector(".image-wrapper-reveal");
        const imageInner = row?.querySelector(".image-inner-scale");
        const content = row?.querySelector(".content-stagger");
        const giantNum = row?.querySelector(".giant-number");

        if (row && imageWrapper) {
          const rowTl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
          });

          rowTl
            .fromTo(
              imageWrapper,
              { clipPath: "inset(0% 100% 0% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.4,
                ease: "expo.out",
              }
            )
            .fromTo(
              imageInner,
              { scale: 1.3 },
              { scale: 1, duration: 1.6, ease: "power2.out" },
              "<"
            )
            .from(
              content,
              {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
              },
              "-=1"
            )
            .from(
              giantNum,
              {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
              },
              "-=1.2"
            );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 lg:py-48 bg-[#f8fafc] overflow-hidden text-[#0f172a]"
    >
      {/* --- BACKGROUND (High to Low Fade) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot Pattern with Gradient Mask */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.25] [mask-image:linear-gradient(to_bottom,black_10%,transparent_80%)]"></div>

        {/* Grid Lines with Gradient Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.3] [mask-image:linear-gradient(to_bottom,black_10%,transparent_80%)]"></div>

        {/* Top Vignette */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* --- HERO HEADER --- */}
        <div className="section-header mb-40 flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="hero-badge inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
              Selected Works 2024-25
            </span>
          </div>

          <div className="relative mb-8">
            <Trophy className="absolute -top-12 -left-12 w-16 h-16 text-yellow-500/10 rotate-[-15deg] hidden lg:block" />
            <TrendingUp className="absolute -top-12 -right-12 w-16 h-16 text-green-500/10 rotate-[15deg] hidden lg:block" />

            <h2
              ref={titleRef}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#0a2540] leading-[0.9]"
            >
              <div className="overflow-hidden pb-7">
                <span className="hero-title-line block">{"We don't just"} </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-title-line block text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-indigo-900 pb-2">
                  deliver
                </span>
              </div>
              <div className="">
                <span className="hero-title-line block text-4xl md:text-6xl lg:text-7xl mt-4 font-light text-slate-400">
                  We push you higher.
                </span>
              </div>
            </h2>
          </div>

          <p className="hero-desc text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Real brands. Real growth. The kind of numbers that make competitors
            uncomfortable.
          </p>
        </div>

        {/* --- CLIENTS LIST --- */}
        <div className="flex flex-col gap-40 lg:gap-60">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`client-row-${index} relative flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                client.imgAlign === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* GIANT BACKGROUND NUMBER */}
              <div
                className={`giant-number absolute top-1/2 -translate-y-1/2 -z-10 font-black text-[12rem] lg:text-[20rem] leading-none text-slate-100/50 select-none pointer-events-none ${
                  client.imgAlign === "left"
                    ? "right-0 lg:right-20"
                    : "left-0 lg:left-20"
                }`}
              >
                {client.id}
              </div>

              {/* IMAGE COLUMN */}
              <div className="w-full lg:w-7/12 group perspective-1000">
                <div className="image-wrapper-reveal relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-slate-200/50">
                  <div className="image-inner-scale relative w-full h-full">
                    <Image
                      src={client.imageSrc}
                      alt={client.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="content-stagger w-full lg:w-5/12 relative">
                <div className={`w-12 h-1 ${client.color} mb-8`} />

                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-5xl md:text-6xl font-bold text-[#1a1c1f] tracking-tight mb-2">
                      {client.name}
                    </h3>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                      {client.industry}
                    </p>
                  </div>

                  {/* REVIEW SECTION */}
                  <div className="py-6 border-y border-slate-200/60">
                    <div className="flex flex-col gap-2">
                      {/* Stars */}
                      <div className="flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < Math.floor(client.reviewScore)
                                ? "fill-[#0a2540] text-[#0a2540]"
                                : "text-slate-300"
                            }`}
                            strokeWidth={0}
                          />
                        ))}
                        <span className="ml-3 text-xl font-bold text-[#0a2540]">
                          {client.reviewScore}{" "}
                          <span className="text-slate-400 text-sm font-semibold">
                            / 5.0
                          </span>
                        </span>
                      </div>
                      <p className="text-lg font-serif italic text-slate-600">
                        {client.reviewText}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {client.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {client.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-md border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* --- SOCIAL LINKS: Specific per client + Reduced Distance --- */}
                  <div className="pt-6 flex items-center gap-3">
                    {client.socials.website && (
                      <Link
                        href={client.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-[#0a2540] hover:border-[#0a2540] transition-all duration-300"
                        title="Website"
                      >
                        <Globe className="w-5 h-5" />
                      </Link>
                    )}

                    {client.socials.youtube && (
                      <Link
                        href={client.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-600 transition-all duration-300"
                        title="Youtube"
                      >
                        <Youtube className="w-5 h-5" />
                      </Link>
                    )}

                    {client.socials.instagram && (
                      <Link
                        href={client.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-pink-600 hover:border-pink-600 transition-all duration-300"
                        title="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-48 relative border-t border-slate-200 pt-28 text-center overflow-hidden">
          {/* --- Soft Glow Background --- */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-blue-100/60 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

          {/* --- Floating Icon Background --- */}
          <div className="absolute inset-0 pointer-events-none -z-10 opacity-20">
            <TrendingUp className="absolute top-20 left-[15%] w-12 h-12 text-blue-600 animate-pulse" />
            <Star className="absolute bottom-24 left-[25%] w-10 h-10 text-indigo-500 animate-pulse delay-300" />
            <Users className="absolute top-32 right-[20%] w-14 h-14 text-blue-500 animate-pulse delay-700" />
            <Activity className="absolute bottom-16 right-[30%] w-12 h-12 text-indigo-600 animate-pulse delay-500" />
          </div>

          {/* --- Social Proof --- */}
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-blue-600 mb-6">
            +10 More Clients Choose Us
          </p>
          {/* --- Headline --- */}
          <h3 className="text-5xl md:text-7xl font-bold text-[#0a2540] tracking-tight mb-8 leading-[1.05]">
            Why so late? <br />
            <span
  
  className="text-transparent  bg-clip-text pt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"
>
  Start Your Journey
</span>
          </h3>

          {/* --- Short Supporting Line --- */}
          <p className="text-slate-500 text-lg mb-14 max-w-xl mx-auto">
            Trusted by brands. Built for growth.
          </p>

          {/* --- CTA Button --- */}
          <button className="group relative inline-flex items-center justify-center px-14 py-6 bg-[#0a2540] text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] shadow-2xl shadow-blue-900/30">
            {/* Button Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>

            <Link href={"/contact"} className="relative cursor-pointer z-10 font-bold text-lg tracking-widest uppercase flex items-center gap-4">
              Start Your Journey
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
