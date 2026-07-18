"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  Phone, Mail, MapPin, ArrowUpRight, Send, CheckCircle2, 
  Loader2, PhoneCall, ShieldCheck, Clock 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import FaqSection from "./FaqSection";

gsap.registerPlugin(ScrollTrigger);

export default function PremiumContact() {
  const containerRef = useRef(null);
  const formRef = useRef();
  
  // --- STATES ---
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // --- ANIMATIONS ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Header Animation
      gsap.from(".reveal-text", {
        scrollTrigger: { trigger: ".header-section", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Form Container Animation
      gsap.from(".form-card", {
        scrollTrigger: { trigger: ".form-section", start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // --- EMAIL JS LOGIC ---
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Replace with your actual EmailJS keys
    emailjs.sendForm(
      'service_8o7aa8c', 
      'template_4rh1ana', 
      formRef.current, 
      'pF9X6Fk1Q0ijsSNRR'
    )
      .then((result) => {
          setLoading(false);
          setSuccess(true);
          e.target.reset(); // Clear form
          
          // Reset success state after 5 seconds to allow new submission
          setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
          setLoading(false);
          setError(true);
      });
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#f8fafc] overflow-hidden font-sans selection:bg-blue-200 text-[#0f172a]">
      
      {/* --- FLOATING 'CALL NOW' BUTTON --- */}
      <motion.a 
        href="tel:+916202041591" 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative flex items-center gap-3 bg-[#0a2540] text-white pl-5 pr-2 py-2 rounded-full shadow-2xl hover:shadow-blue-900/40 transition-all cursor-pointer overflow-hidden border border-white/10 ring-4 ring-white/50">
           <div className="absolute inset-0 bg-blue-500/20 animate-pulse rounded-full"></div>
           <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-300">Urgent?</span>
              <span className="text-sm font-bold">Call Now</span>
           </div>
           <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <PhoneCall size={18} className="animate-bounce" />
           </div>
        </div>
      </motion.a>

      {/* --- BACKGROUND ENGINE (Whitish Blue + Grid/Dots) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* 1. Grid (Linear Gradient) */}
        <div className="absolute inset-0 opacity-[0.07]" 
             style={{ backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>

        {/* 2. Dots (Radial Gradient) */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: 'radial-gradient(#0a2540 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
        </div>

        {/* 3. Vignette Mask (Opacity Low to High - Focus Center) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_80%)]"></div>
        
        {/* 4. Top Blue Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/30 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6 py-24 lg:py-32">
        
        {/* --- HEADER SECTION --- */}
        <div className="header-section text-center mb-16 max-w-3xl mx-auto">
           <div className="reveal-text inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 rounded-full shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0a2540] uppercase">Accepting New Projects</span>
           </div>

           <h1 className="reveal-text text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#0a2540] mb-6 tracking-tight">
             Start Your <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
               Digital Transformation.
             </span>
           </h1>

           <p className="reveal-text text-lg text-slate-500 leading-relaxed font-medium">
             {`Ready to elevate your brand? We help ambitious businesses scale through design, technology, and strategy. Fill out the form below, and let's create something extraordinary.`}
           </p>
        </div>

        {/* --- FORM SECTION --- */}
        <div className="form-section relative">
           
           {/* Decorative Elements */}
           <div className="absolute -top-10 -left-10 text-blue-200 animate-pulse hidden lg:block"><ShieldCheck size={80} strokeWidth={0.5} /></div>
           <div className="absolute -bottom-10 -right-10 text-indigo-200 hidden lg:block"><Send size={80} strokeWidth={0.5} className="-rotate-12"/></div>

           <div className="form-card bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white/50 backdrop-blur-sm overflow-hidden p-8 lg:p-14 relative">
              
              {/* --- TRUST BAR (Top of Form) --- */}
              <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50/80 rounded-2xl p-4 mb-10 border border-blue-100 gap-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                       <Clock size={20} />
                    </div>
                    <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-blue-800">Fast Response Promise</p>
                       <p className="text-sm font-medium text-slate-600">Our team will reach out to you <span className="text-[#0a2540] font-bold decoration-blue-400 underline decoration-2 underline-offset-2">within 24 hours</span>.</p>
                    </div>
                 </div>
                 <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200">
                          {/* Placeholder avatars for 'Team Members' */}
                          <img src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} alt="Agent" className="w-full h-full rounded-full object-cover" />
                       </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-[#0a2540] flex items-center justify-center text-[10px] font-bold text-white pl-1">+5</div>
                 </div>
              </div>

              {/* --- ACTUAL FORM --- */}
              <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="group relative">
                       <input 
                         type="text" name="user_name" required 
                         className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-[#0a2540] font-medium focus:outline-none focus:border-blue-600 focus:bg-blue-50/30 transition-all peer placeholder-transparent rounded-t-lg"
                         placeholder="Name"
                       />
                       <label className="font-medium absolute left-4 top-4 text-slate-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-600 pointer-events-none font-bold uppercase tracking-wide">
                          Your Name
                       </label>
                    </div>

                    {/* Phone */}
                    <div className="group relative">
                       <input 
                         type="tel" name="user_phone" required 
                         className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-[#0a2540] font-medium focus:outline-none focus:border-blue-600 focus:bg-blue-50/30 transition-all peer placeholder-transparent rounded-t-lg"
                         placeholder="Phone"
                       />
                       <label className="font-medium absolute left-4 top-4 text-slate-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-600 pointer-events-none font-bold uppercase tracking-wide">
                          Phone Number
                       </label>
                    </div>
                 </div>

                 {/* Email */}
                 <div className="group relative">
                    <input 
                      type="email" name="user_email" required 
                      className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-[#0a2540] font-medium focus:outline-none focus:border-blue-600 focus:bg-blue-50/30 transition-all peer placeholder-transparent rounded-t-lg"
                      placeholder="Email"
                    />
                    <label className="font-medium absolute left-4 top-4 text-slate-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-600 pointer-events-none font-bold uppercase tracking-wide">
                       Email Address
                    </label>
                 </div>

                 {/* Interested In (Chip Selection) */}
                 <div className="pt-2">
                    <label className="block font-medium text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">I am interested in</label>
                    <div className="flex flex-wrap gap-3">
                       {['Website Development', 'Social Media Marketing', 'Video Editing', 'Graphic Designing', 'App Development', 'Other'].map((service) => (
                          <label key={service} className="cursor-pointer relative">
                             <input type="checkbox" name="services" value={service} className="peer sr-only" />
                             <span className="inline-block px-5 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 bg-white hover:border-blue-300 peer-checked:bg-[#0a2540] peer-checked:text-white peer-checked:border-[#0a2540] peer-checked:shadow-lg transition-all duration-300">
                                {service}
                             </span>
                          </label>
                       ))}
                    </div>
                 </div>

                 {/* Project Details */}
                 <div className="group relative">
                    <textarea 
                      name="message" rows="4" required
                      className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-[#0a2540] font-medium focus:outline-none focus:border-blue-600 focus:bg-blue-50/30 transition-all peer placeholder-transparent rounded-t-lg resize-none"
                      placeholder="Details"
                    ></textarea>
                    <label className="font-medium absolute left-4 top-4 text-slate-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-600 pointer-events-none font-bold uppercase tracking-wide">
                       Tell us about your project
                    </label>
                 </div>

                 {/* Submit Button (Animated State) */}
                 <div className="pt-6 ">
                    <button 
                      type="submit" 
                      disabled={loading || success}
                      className={`w-full cursor-pointer py-5 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-500 shadow-xl flex items-center justify-center gap-3 overflow-hidden relative
                        ${success ? "bg-green-500 text-white shadow-green-500/30" : "bg-[#0a2540] text-white hover:bg-blue-700 shadow-blue-900/20"}
                        ${loading ? "cursor-wait opacity-80" : ""}
                      `}
                    >
                       <AnimatePresence mode="wait">
                          {loading ? (
                             <motion.div 
                                key="loader"
                                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                                className="flex items-center gap-2"
                             >
                                <Loader2 className="animate-spin" size={18} /> Sending Request...
                             </motion.div>
                          ) : success ? (
                             <motion.div 
                                key="success"
                                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                                className="flex items-center gap-2"
                             >
                                <CheckCircle2 size={20} /> Proposal Sent Successfully!
                             </motion.div>
                          ) : (
                             <motion.div 
                                key="default"
                                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                                className="flex cursor-pointer items-center gap-2"
                             >
                                Send Proposal <ArrowUpRight size={16} />
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </button>
                 </div>

                 {/* Footer Note */}
                 <p className="text-center text-xs text-slate-400 mt-4">
                    Your data is secure. We hate spam as much as you do.
                 </p>

                 {/* Error Message */}
                 {error && (
                    <p className="text-red-500 text-xs text-center font-bold bg-red-50 py-2 rounded-lg mt-2">
                       Oops! Something went wrong. Please call us directly.
                    </p>
                 )}

              </form>
           </div>
           <FaqSection />
        </div>

      </div>
    </section>
  );
}