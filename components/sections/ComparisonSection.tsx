"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  X, 
  Check, 
  ArrowRight, 
  AlertCircle, 
  Clock, 
  Database, 
  Zap, 
  Users, 
  Target, 
  ShieldCheck, 
  Globe, 
  Sparkles,
  Headset,
  TrendingUp,
  CircleOff
} from "lucide-react";
import { cn } from "@/lib/utils";

const ComparisonSection = () => {
  const withoutDexKor = [
    { icon: CircleOff, text: "Missed expansion signals", color: "text-red-500" },
    { icon: AlertCircle, text: "Escalations discovered too late", color: "text-red-500" },
    { icon: Clock, text: "Onboarding delays", color: "text-red-500" },
    { icon: Database, text: "Fragmented customer data", color: "text-red-500" },
  ];

  const withDexKor = [
    { icon: Users, text: "One shared customer timeline", color: "text-blue-500" },
    { icon: Target, text: "Predictive risk detection", color: "text-blue-500" },
    { icon: Zap, text: "AI-guided workflows", color: "text-blue-500" },
    { icon: TrendingUp, text: "Real-time expansion signals", color: "text-blue-500" },
  ];

  const pillars = [
    { icon: ShieldCheck, title: "Enterprise-ready", desc: "Built for scale and security" },
    { icon: Globe, title: "Global deployment", desc: "Available where you operate" },
    { icon: Sparkles, title: "AI-native platform", desc: "Intelligence at every layer" },
    { icon: Headset, title: "Customer-obsessed", desc: "Your success is our mission" },
  ];

  return (
    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-10 lg:mb-14">
          <span className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-widest block">
            — THE COST OF WAITING
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
            Every disconnected customer moment <br />
            is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">revenue left behind.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
            While teams switch between tools, customers wait, risks escalate, renewals slip, and expansion opportunities disappear.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 items-center mb-12 lg:mb-20">
          
          {/* WITHOUT DEXKOR */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-3xl bg-red-50/50 dark:bg-white/[0.02] border border-red-100 dark:border-white/5 relative group"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-500" />
              </div>
              <span className="font-bold text-xs tracking-widest text-red-500 uppercase">WITHOUT DEXKOR</span>
            </div>

            <div className="space-y-6">
              {withoutDexKor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-red-100 dark:border-white/5 flex items-center justify-center shrink-0 transition-colors group-hover/item:border-red-500/30 shadow-sm dark:shadow-none">
                    <item.icon className="w-5 h-5 text-red-500/70 group-hover/item:text-red-500 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER ARROW ANIMATION */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-10 lg:py-0 relative z-20">
             <div className="relative w-full flex flex-col items-center">
                {/* Motion Lines */}
                <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-20 h-12 flex flex-col justify-between opacity-30">
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
                      animate={{ x: [0, 40], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                  ))}
                </div>

                {/* Main Arrow */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58 25L30 2L30 15L2 15L2 35L30 35L30 48L58 25Z" fill="url(#arrow-grad)" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="arrow-grad" x1="2" y1="25" x2="58" y2="25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1d4ed8" />
                        <stop offset="1" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Transition Text */}
                <div className="mt-6 text-center">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">FROM</div>
                  <div className="text-xs font-black text-red-500 uppercase tracking-tighter">REACTIVE</div>
                  <div className="h-4 w-px bg-white/10 mx-auto my-1" />
                  <div className="text-xs font-black text-blue-500 uppercase tracking-tighter">PREDICTIVE</div>
                </div>
             </div>
          </div>

          {/* WITH DEXKOR */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-3xl bg-blue-50/50 dark:bg-blue-600/[0.03] border border-blue-100 dark:border-blue-500/20 relative group shadow-sm dark:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-blue-500" />
              </div>
              <span className="font-bold text-xs tracking-widest text-blue-500 uppercase">WITH DEXKOR</span>
            </div>

            <div className="space-y-6">
              {withDexKor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-blue-500/5 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0 transition-all group-hover/item:scale-110 group-hover/item:bg-blue-500/20">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-white dark:bg-white/[0.03] rounded-[2rem] p-6 md:p-8 border border-slate-100 dark:border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-500/[0.03] dark:shadow-none"
        >
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center shrink-0 shadow-lg dark:shadow-none border border-slate-100 dark:border-white/10 p-2">
              <img src="/images/logo.png" alt="DexKor Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
              The teams that win tomorrow <br />
              <span className="text-blue-600 dark:text-blue-500">stop stitching tools</span> today.
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto relative z-10">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/20">
              See DexKor Live <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
              Talk to our team <ArrowRight className="w-4 h-4 opacity-50" />
            </button>
          </div>

          {/* Decorative background beam - only subtle in light mode */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/5 dark:from-blue-500/[0.02] to-transparent skew-x-12 pointer-events-none" />
        </motion.div>

        {/* Bottom Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-center shrink-0">
                <pillar.icon className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{pillar.title}</h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium leading-tight">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
