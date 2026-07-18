"use client";

import React from "react";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#062f34] via-[#064e54] to-[#062f34] text-slate-200">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* DOT GRID (High → Low opacity) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, black 25%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 25%, transparent 90%)",
          }}
        />

        {/* GRID LINES */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            maskImage:
              "linear-gradient(to top, black 30%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 30%, transparent 90%)",
          }}
        />

        {/* CIRCULAR GLOWS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/25 rounded-full blur-[160px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">

        {/* BRAND TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7rem] font-extrabold tracking-tight text-white/10 leading-none select-none">
            INFINETIC STUDIOS
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-sm leading-relaxed">
            Infinetic Studios is a digital-first agency delivering scalable, trustworthy, and performance-driven digital solutions. We help businesses grow through strategic web development, social media management, creative design, and modern technology across Jharkhand, including Bokaro.
          </p>
        </div>

        {/* ================= GRID CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/25 pt-12">

          {/* ABOUT */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              About
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              We believe trust is built through transparency, consistency, and
              measurable outcomes. Every project is approached with clarity,
              precision, and long-term value in mind.
            </p>
          </div>

          {/* LINKS */}

<div>
      <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
        Quick Links
      </h4>

      <ul className="space-y-3 text-sm font-semibold text-white">
        <li>
          <Link
            href="/about"
            className="hover:text-[#edebeb] transition-colors duration-200 block"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            href="/services"
            className="hover:text-[#edebeb] transition-colors duration-200 block"
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            href="/clients"
            className="hover:text-[#edebeb] transition-colors duration-200 block"
          >
            Clients
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="hover:text-[#edebeb] transition-colors duration-200 block"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>

          {/* CONTACT */}
          
<div>
  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
    Connect
  </h4>

  <a
    href="mailto:infineticstudios@gmail.com"
    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition mb-4"
  >
    <Mail size={16} /> infineticstudios@gmail.com
  </a>

  <a
    href="tel:+916202041591"
    className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition mb-4"
  >
    <Phone size={16} /> +91 6202041591
  </a>

  {/* ADDRESS */}
  <div className="flex items-start gap-2 text-sm text-slate-300 mb-6">
  <MapPin size={16} className="mt-[2px]" />
  <span>
    Jodhadih More, Chas, Bokaro, Jharkhand
  </span>
</div>

  <div className="flex items-center gap-4">
    <a
      href="https://www.instagram.com/infinetic_studios?igsh=bjJ1bXQ5NTRjMGVq"
      target="_blank"
      className="hover:text-white flex items-center gap-2 text-sm transition cursor-pointer"
    >
      <Instagram size={18} /> Instagram
    </a>
  </div>
</div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-xs text-slate-400 tracking-wide">
            © {new Date().getFullYear()} Infinetic Studios. Built on trust, clarity,
            and long-term digital vision.
          </p>
        </div>
      </div>
    </footer>
  );
}
