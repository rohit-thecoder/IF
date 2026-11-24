"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { pacifico } from "../app/font";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false); // Added this to prevent errors from your onClick functions
  const pathname = usePathname();
  
  const socialIcons = [FaInstagram];
  
  const isActive = (item) => {
    if (item === "Home") return pathname === "/";
    return pathname.startsWith(`/${item.toLowerCase()}`);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Services", "Clients", "Contact"];

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
            onClick={() => setLoading(true)}
            href="/"
            className="flex items-center gap-2 group transition-transform hover:scale-105 cursor-pointer"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-blue-100 group-hover:border-blue-500 transition-colors bg-white p-1 shadow-sm">
              <Image
                src="/logo.png"
                alt="Infinetic Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className={`${pacifico.className} text-2xl tracking-wide text-[#0a2540]`}>
              Infinetic Studios
            </span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <ul
              className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-gray-100/50 backdrop-blur-md border border-white/50" : "bg-transparent"
              }`}
            >
              {menuItems.map((item) => (
                <li key={item}>
                  <Link
                    onClick={() => setLoading(true)}
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className={`
                      relative group flex items-center gap-2 px-5 py-2 rounded-full
                      font-semibold text-sm transition-all duration-300 cursor-pointer
                      ${
                        isActive(item)
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }
                    `}
                  >
                    {/* Bubble Background */}
                    <span
                      className={`
                        absolute inset-0 rounded-full bg-white shadow-sm
                        transition-all duration-300
                        ${
                          isActive(item)
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }
                      `}
                    ></span>

                    {/* Dot + Text */}
                    <span className="relative z-10 flex items-center gap-2">
                      <span
                        className={`
                          w-1.5 h-1.5 rounded-full bg-blue-600 transition-opacity
                          ${
                            isActive(item)
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }
                        `}
                      ></span>
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="tel:+916202041591" // Fixed space in tel link
              className={`px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 cursor-pointer block ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                  : "bg-[#0a2540] text-white hover:bg-blue-600 shadow-md"
              }`}
            >
              Call Now
            </a>
          </div>

          {/* HAMBURGER (Animated) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-3xl text-[#0a2540] focus:outline-none cursor-pointer group relative z-[60]"
          >
            <div className="space-y-1.5 flex flex-col items-end">
              <span className="block w-8 h-0.5 bg-current rounded-full transition-all group-hover:w-6"></span>
              <span className="block w-8 h-0.5 bg-current rounded-full"></span>
              <span className="block w-5 h-0.5 bg-current rounded-full transition-all group-hover:w-8"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* ================= PREMIUM MOBILE MENU (Slide-in Drawer) ================= */}
      
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-[#0a2540]/40 backdrop-blur-sm z-[90] transition-opacity duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/95 backdrop-blur-2xl z-[100] shadow-[-20px_0_40px_rgba(0,0,0,0.1)] border-l border-white/50 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header inside Drawer */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={36} 
              height={36} 
              className="rounded-full bg-blue-50/50 p-1 border border-blue-100" 
            />
            <span className={`${pacifico.className} text-xl text-[#0a2540]`}>Infinetic studios</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#0a2540] transition-all cursor-pointer active:scale-95"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => {
                setOpen(false);
                setLoading(true);
              }}
              className={`group flex items-center justify-between text-2xl font-bold tracking-tight transition-all duration-300 ${
                isActive(item)
                  ? "text-blue-600"
                  : "text-[#0a2540] hover:text-blue-600"
              }`}
              style={{
                transitionDelay: `${open ? index * 50 : 0}ms`,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0
              }}
            >
              <span className="flex items-center gap-4">
                <span 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive(item) 
                      ? "bg-blue-600 scale-100" 
                      : "bg-transparent scale-0 group-hover:bg-blue-300 group-hover:scale-100"
                  }`}
                ></span>
                {item}
              </span>
              <span 
                className={`text-blue-600 text-lg transition-all duration-300 ${
                  isActive(item) 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Section (Socials & CTA) */}
        <div className="px-8 pb-10 pt-6 bg-gray-50/50 mt-auto border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
            Connect With Us
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                target="_blank"
                href="https://www.instagram.com/infinetic_studios?igsh=bjJ1bXQ5NTRjMGVq"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0a2540] border border-gray-200 shadow-sm hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>

          <Link
            onClick={() => setLoading(true)}
            href="/contact"
            className="w-full flex items-center justify-center bg-[#0a2540] text-white py-4 rounded-xl text-lg font-semibold shadow-lg shadow-[#0a2540]/20 hover:bg-blue-600 hover:shadow-blue-600/30 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Grab Now
          </Link>
        </div>
      </div>
    </>
  );
}