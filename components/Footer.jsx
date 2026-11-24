"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "Social Media Management",
  "Brand & Graphic Design",
  "Video Editing",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#031518] text-slate-300 border-t border-white/[0.04]">
      
      {/* ================= PREMIUM AMBIENT BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Soft Mesh Glows (Whitish Teal & Deep Teal Blend) */}
        <div className="absolute -top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#064e54]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        
        {/* Clean Minimal Diagonal Line Accent */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        
        {/* ================= THE NEW FOUR-COLUMN BALANCED GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.06]">
          
          {/* COLUMN 1: LEFT SIDE BRAND IDENTITY (4-Columns Width) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
  <div>
    <Link href="/" aria-label="Infinetic Studios home" className="flex items-center gap-3.5 group w-fit">
      {/* सिर्फ लोगो दिखाने के लिए कंटेनर को पूरी तरह क्लीन कर दिया है */}
      <div className="relative w-20 h-20 shrink-0">
        <Image
          src="/logo.png"
          alt="Infinetic Studios web development and creative agency logo"
          fill
          className="object-contain" // object-cover की जगह object-contain ताकि लोगो कटे नहीं और अपने असली शेप में दिखे
        />
      
                </div>
                <div className="leading-tight">
                  <p className="text-white font-extrabold text-lg tracking-tight uppercase group-hover:text-cyan-400 transition-colors duration-300">
                    Infinetic<span className="text-cyan-400">.</span>
                  </p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.25em] font-bold">
                    Studios
                  </p>
                </div>
              </Link>
              
              <p className="mt-5 text-sm text-slate-400 leading-relaxed font-medium max-w-sm">
                A digital-first agency delivering scalable, trustworthy, and performance-driven digital solutions. We engineer brand assets that dominate.
                <span className="block mt-3">Serving businesses across Bokaro Steel City, Chas, Dhanbad, Ranchi, Deoghar, Jharkhand &amp; All Over India.</span>
              </p>
            </div>

            {/* Social Links Ring Structure */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/infinetic_studios/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-sm"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION (2-Columns Width) */}
          <div className="lg:col-span-2 lg:pl-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 mb-5 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-4 after:h-[1.5px] after:bg-cyan-400">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-label={`Visit ${link.label}`}
                    className="group flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:translate-y-0 transition-all duration-200 text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CORE CAPABILITIES BUILDER (3-Columns Width) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 mb-5 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-4 after:h-[1.5px] after:bg-cyan-400">
              Core Expertise
            </h4>
            <div className="flex flex-col gap-2.5">
              {services.map((service, i) => (
                <span
                  key={i}
                  className="w-fit px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/20 hover:text-cyan-300 transition-all duration-300 cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* COLUMN 4: DIRECT CONNECT INFO (3-Columns Width) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 mb-5 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-4 after:h-[1.5px] after:bg-cyan-400">
              Direct Connect
            </h4>
            
            <div className="space-y-4">
              <a
                href="mailto:infineticstudios@gmail.com"
                aria-label="Email Infinetic Studios"
                className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                  <Mail size={14} />
                </div>
                <span className="truncate">infineticstudios@gmail.com</span>
              </a>

              <a
                href="tel:+916202041591"
                aria-label="Call Infinetic Studios"
                className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                  <Phone size={14} />
                </div>
                <span>+91 6202041591</span>
              </a>

              <div className="group flex items-start gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <span className="leading-relaxed mt-0.5">
                  Jodhadih More, Chas,<br />Bokaro, Jharkhand
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM METRICS AND BACK TO TOP ================= */}
        <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-medium tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} Infinetic Studios. Built on trust, clarity, and long-term digital vision.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="cursor-pointer group flex items-center gap-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
          >
            <span>Back to top</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-all duration-300">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
