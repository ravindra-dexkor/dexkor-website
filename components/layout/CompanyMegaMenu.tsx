"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Target,
  Users,
  Handshake,
  ShieldCheck,
  FileText,
  Lock,
  ArrowRight,
  Quote,
  Star,
  Globe,
  RefreshCw,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const aboutLinks = [
  { title: "About DexKor", description: "Learn about our platform, our story, and what drives us.", icon: Building2, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-500/10" },
  { title: "Our Mission", description: "Transform how B2B companies grow through customer success.", icon: Target, color: "text-emerald-600", bgColor: "bg-emerald-50 dark:bg-emerald-500/10" },
  { title: "Careers", description: "Join a team that's building the future of customer growth.", icon: Users, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-500/10" },
  { title: "Partners", description: "Work with us to deliver more value to customers, together.", icon: Handshake, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-500/10" },
];

const trustLinks = [
  { title: "Security Center", description: "Enterprise-grade security built for trust.", icon: ShieldCheck, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-500/10" },
  { title: "Compliance", description: "SOC 2, ISO 27001, GDPR and more.", icon: FileText, color: "text-slate-700 dark:text-slate-300", bgColor: "bg-slate-50 dark:bg-white/5" },
  { title: "Privacy", description: "Your data is yours. Always private, always protected.", icon: Lock, color: "text-emerald-600", bgColor: "bg-emerald-50 dark:bg-emerald-500/10" },
  { title: "Terms of Service", description: "Read our terms and responsible use policies.", icon: FileText, color: "text-slate-700 dark:text-slate-300", bgColor: "bg-slate-50 dark:bg-white/5" },
];

const founders = [
  {
    name: "Richard Samuel",
    role: "Co-founder & CEO, DexKor",
    quote: "Customer success doesn't start at onboarding. It starts with understanding.",
    description: "DexKor was built to help modern B2B teams turn every customer interaction into lasting growth. One relationship at a time.",
    image: "/images/richard.png",
    signature: "Richard"
  },
  {
    name: "Shashank Srivastava",
    role: "Co-founder & CTO, DexKor",
    quote: "Engineering is not just about code; it's about solving real-world human problems.",
    description: "We are building a world-class infrastructure that scales with our customers' ambitions, ensuring data is always actionable.",
    image: "/images/shashank.png",
    signature: "Shashank"
  },
  {
    name: "Neshat Ghazali",
    role: "Co-founder & COO, DexKor",
    quote: "Operations is the backbone of trust. We deliver consistency at scale.",
    description: "Our focus is on creating a seamless experience for every partner and customer, making growth predictable and sustainable.",
    image: "/images/neshat.png",
    signature: "Neshat"
  }
];

const CompanyMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [currentFounder, setCurrentFounder] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentFounder((prev) => (prev + 1) % founders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-2 right-2 lg:left-6 lg:right-6 top-full mt-1 rounded-2xl bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl text-slate-900 dark:text-white transition-colors shadow-2xl z-[110] border border-slate-200/50 dark:border-white/10 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide w-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* MOBILE BACK BUTTON */}
          <div className="lg:hidden px-6 py-4 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-indigo-600 font-bold"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Menu
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Company</span>
          </div>

          <div className="max-w-full mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8">
            {/* ABOUT DEXKOR */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">About DexKor</h3>
              <div className="space-y-4">
                {aboutLinks.map((item) => (
                  <div key={item.title} className="group flex items-start gap-4 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors", item.bgColor, item.color)}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 transition-colors">{item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-indigo-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all pl-2">
                View all company <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* TRUST & COMPLIANCE */}
            <div className="col-span-1 md:col-span-3 border-l-0 md:border-l border-slate-100 dark:border-white/5 pl-0 md:pl-12">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">Trust & Compliance</h3>
              <div className="space-y-4">
                {trustLinks.map((item) => (
                  <div key={item.title} className="group flex items-start gap-4 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors", item.bgColor, item.color)}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 transition-colors">{item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-indigo-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all pl-2">
                View trust center <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* FOUNDER CAROUSEL SECTION */}
            <div className="col-span-1 md:col-span-6 bg-[#f8f9ff] dark:bg-slate-900/50 rounded-[32px] border border-indigo-50 dark:border-white/5 relative overflow-hidden group flex flex-col">
              {/* Decorative Dots Background */}
              <div className="absolute top-8 right-8 w-20 h-20 opacity-10">
                <div className="grid grid-cols-6 gap-1.5">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-indigo-600 rounded-full" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="px-4 pt-4 flex-1">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em]">From Our Founder</span>

                  <div className="mt-2 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFounder}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:flex-row gap-6"
                      >
                        <div className="flex-1 py-4 flex flex-col justify-between min-h-[280px]">
                          <div className="space-y-4">
                            <Quote className="w-8 h-8 text-indigo-600 fill-indigo-600/10" />
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                              {founders[currentFounder].quote.split('starts').map((part, i) => (
                                <React.Fragment key={i}>
                                  {i > 0 && <span className="text-indigo-600">starts</span>}
                                  {part}
                                </React.Fragment>
                              ))}
                            </h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-xs">
                              {founders[currentFounder].description}
                            </p>
                          </div>

                          <div>
                            <div className="font-serif text-2xl text-slate-400 dark:text-slate-500 mb-0.5 italic opacity-60">
                              {founders[currentFounder].signature}
                            </div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white">{founders[currentFounder].name}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{founders[currentFounder].role}</p>
                          </div>
                        </div>

                        <div className="w-full lg:w-2/5 relative flex items-end">
                          <div className="w-full aspect-[4/5] overflow-hidden rounded-t-[32px] bg-indigo-100 dark:bg-slate-800 shadow-2xl dark:shadow-none">
                            <img
                              src={founders[currentFounder].image}
                              alt={founders[currentFounder].name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          {/* Carousel Indicators */}
                          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                            {founders.map((_, i) => (
                              <div
                                key={i}
                                className={cn(
                                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                  currentFounder === i ? "bg-indigo-600 w-4" : "bg-slate-50/80"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="p-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border-t border-slate-100 dark:border-white/5">
                  <button className="w-full text-indigo-600 py-1.5 text-xs font-bold flex items-center justify-center gap-2 group">
                    Meet the leadership team <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-100 dark:border-white/5 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 border border-indigo-100">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xs leading-tight">Proudly building the future<br />of customer growth</h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Trusted by innovative teams around the world.</p>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-between border-x-0 lg:border-x border-slate-100 dark:border-white/5 px-0 lg:px-8">
                {[
                  { label: "Customers", val: "500+", icon: Users },
                  { label: "Countries", val: "20+", icon: Globe },
                  { label: "Customer retention", val: "98%", icon: RefreshCw },
                  { label: "G2 rating", val: "4.8", icon: Star },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <stat.icon className="w-3.5 h-3.5 text-indigo-500" />
                      <span className="text-sm font-black text-slate-800 dark:text-slate-100">{stat.val}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 flex flex-col items-end gap-3">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.1em]">Backed by leading investors</span>
                <div className="flex items-center gap-6 opacity-30 grayscale contrast-125">
                  <span className="text-sm font-black text-slate-900 dark:text-white tracking-tighter">Accel</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-1">
                    <div className="w-3 h-3 bg-slate-900 rotate-45" /> Lightspeed
                  </span>
                  <span className="text-sm font-black text-slate-900 dark:text-white tracking-tighter">matrix</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-1">
                    <Star className="w-3 h-3 fill-slate-900" /> SaaStr Fund
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-50 flex justify-center items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-medium">
              <Lock className="w-3 h-3" />
              DexKor is committed to building a secure, inclusive, and transparent company.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompanyMegaMenu;
