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
  const pathname = usePathname();
  const socialIcons = [
  FaInstagram,
];
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

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/70 backdrop-blur-lg shadow-sm border-b border-white/20"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
          onClick={() => setLoading(true)}
            href="/"
            className="flex items-center gap-2 group transition-transform hover:scale-100 cursor-pointer"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-blue-100 group-hover:border-blue-500 transition-colors bg-white p-1">
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
                scrolled ? "bg-gray-200/30 backdrop-blur-md" : "bg-transparent"
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
  href="tel:+91 6202041591"   // ← apna number yahan daalo
  className={`px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 cursor-pointer block ${
    scrolled
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
      : "bg-[#0a2540] text-white hover:bg-blue-600 shadow-md"
  }`}
>
  Call Now
</a>

          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-3xl text-[#0a2540] focus:outline-none cursor-pointer group"
          >
            <div className="space-y-1.5">
              <span className="block w-8 h-0.5 bg-current transition-all group-hover:w-6"></span>
              <span className="block w-8 h-0.5 bg-current"></span>
              <span className="block w-5 h-0.5 bg-current transition-all group-hover:w-8"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#0a2540]/90 backdrop-blur-2xl"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative w-full h-full max-w-lg bg-gradient-to-br from-blue-700 to-blue-500 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between px-8 py-8">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full bg-white p-1" />
                <span className={`${pacifico.className} text-2xl text-white`}>Infinetic Studios</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 cursor-pointer active:scale-90"
              >
                ✕
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="relative z-10 flex flex-col items-center gap-6 mt-10">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => {setOpen(false);
                     setLoading(true) }}
                  className={`text-4xl font-bold transition-all transform cursor-pointer
                    ${
                      isActive(item)
                        ? "text-white scale-110"
                        : "text-white/90 hover:text-white hover:scale-110"
                    }
                  `}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Bottom */}
            <div className="relative z-10 mt-auto px-8 pb-12">
  {/* Divider */}
  <div className="w-full h-px bg-white/20 mb-8"></div>

  {/* Social Icons */}
  <div className="flex justify-center gap-5">
    {socialIcons.map((Icon, i) => (
      <a
        key={i}
        target="_blank"
        href="https://www.instagram.com/infinetic_studios?igsh=bjJ1bXQ5NTRjMGVq"
        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-white hover:text-blue-700 transition-all duration-500 cursor-pointer"
      >
        <Icon className="text-lg" />
      </a>
    ))}
  </div>

  {/* CTA Button */}
  <Link
  onClick={() => setLoading(true)}
  href="/contact"
  className="
    mt-10 w-full block text-center
    bg-white text-blue-700
    py-5 rounded-2xl
    text-lg font-bold
    shadow-xl
    hover:bg-blue-50
    active:scale-95
    transition-transform
    cursor-pointer
  "
>
  Grab Now
</Link>
</div>
          </div>
        </div>
      )}
    </>
  );
}
