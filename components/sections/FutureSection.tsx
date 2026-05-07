"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Headphones, 
  Rocket, 
  BrainCircuit, 
  Layers, 
  Globe,
  Quote
} from "lucide-react";
import { cn } from "@/lib/utils";

const FutureSection = () => {
  const orbits = [
    { name: "Sales", icon: TrendingUp, delay: 0 },
    { name: "Onboarding", icon: Rocket, delay: 1.5 },
    { name: "Support", icon: Headphones, delay: 3 },
    { name: "Success", icon: Users, delay: 4.5 },
  ];

  const features = [
    {
      icon: Users,
      title: "One customer timeline.",
      desc: "A unified view across the entire customer lifecycle.",
    },
    {
      icon: BrainCircuit,
      title: "One intelligence layer.",
      desc: "AI that understands, predicts, and recommends.",
    },
    {
      icon: Layers,
      title: "One operating system.",
      desc: "Built to scale teams, workflows, and outcomes.",
    },
  ];

  return (
    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - More Compact */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Future of Customer Growth</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Growth won't be managed in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">silos.</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
            The companies that win tomorrow won't manage sales, support, and success separately. <span className="text-blue-600 dark:text-blue-500">Neither should you.</span>
          </p>
        </div>

        {/* MAIN CONTENT - SIDE BY SIDE ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: ORBITAL VISUAL (Compact & Professional) */}
          <div className="relative aspect-square max-w-[400px] mx-auto lg:mx-0 w-full flex items-center justify-center">
            
            {/* Perspective Orbits (CSS skewed) */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1000px" }}>
              <div className="w-full h-full relative" style={{ transform: "rotateX(60deg)" }}>
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-slate-200 dark:border-white/10 rounded-full" />
                <div className="absolute inset-[15%] border border-slate-200 dark:border-white/5 rounded-full border-dashed" />
                <div className="absolute inset-[30%] border border-blue-500/20 dark:border-blue-500/10 rounded-full" />
                
                {/* Moving Nodes - Orbital Path Animation */}
                {orbits.map((node, i) => (
                  <motion.div
                    key={node.name}
                    className="absolute top-1/2 left-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * 6.25 }}
                    style={{ width: "100%", height: "100%", marginLeft: "-50%", marginTop: "-50%" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: "rotateX(-60deg)" }}>
                       <motion.div 
                        animate={{ 
                          y: [0, -8, 0],
                          scale: [1, 1.1, 1],
                          filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                        }}
                        transition={{ 
                          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                          scale: { duration: 25, repeat: Infinity, ease: "linear", delay: i * 6.25 },
                          filter: { duration: 25, repeat: Infinity, ease: "linear", delay: i * 6.25 }
                        }}
                        className="flex flex-col items-center gap-3"
                       >
                          {/* 3D Squarcle Container */}
                          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white dark:bg-slate-900 border-t border-x border-slate-200 dark:border-white/20 border-b-4 border-b-slate-300 dark:border-b-blue-600/50 shadow-[0_15px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_35px_rgba(37,99,235,0.1)] flex items-center justify-center group hover:border-blue-500/50 transition-all relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-transparent dark:from-blue-500/10 dark:to-transparent opacity-100" />
                             {/* Floating Icon with Shadow */}
                             <node.icon className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400 relative z-10 drop-shadow-[0_4px_4px_rgba(37,99,235,0.3)]" />
                          </div>
                          
                          <span className="text-xs font-black text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase bg-white/80 dark:bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 shadow-sm whitespace-nowrap">
                            {node.name}
                          </span>
                       </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Central Hub */}
            <div className="relative z-30">
               <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-2xl shadow-blue-500/20 flex items-center justify-center relative border border-white/20">
                  <img src="/images/logo.png" alt="DexKor" className="w-full h-full object-contain invert brightness-0" />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-black text-blue-600 dark:text-blue-500 tracking-[0.2em] uppercase italic">DEXKOR</span>
                  </div>
               </div>
               {/* Pulsing Core */}
               <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse -z-10" />
            </div>

            {/* Glowing Connections (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
               <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
               </defs>
               {/* This SVG is harder to animate with the 3D CSS orbits, so we'll use a subtle radial burst instead */}
               <circle cx="50" cy="50" r="10" fill="url(#hub-grad)" className="opacity-20" />
               <defs>
                 <radialGradient id="hub-grad">
                   <stop offset="0%" stopColor="#3b82f6" />
                   <stop offset="100%" stopColor="transparent" />
                 </radialGradient>
               </defs>
            </svg>
          </div>

          {/* RIGHT: FEATURES & CTA */}
          <div className="space-y-10 lg:space-y-12">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center border border-blue-100 dark:border-blue-500/20 shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm lg:text-base font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons & Trust Info */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                  See DexKor Live <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white px-5 py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95">
                  Talk to our team <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-500" />
                    Built in India
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span>Designed for global B2B teams</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Quote - More subtle */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-slate-100 dark:border-white/5 text-center">
            <div className="max-w-2xl mx-auto relative px-8">
                <Quote className="absolute top-0 left-0 w-8 h-8 text-blue-500/10 -translate-x-1/2 -translate-y-1/2" />
                <p className="text-sm text-slate-500 dark:text-slate-400 italic font-medium leading-relaxed">
                    “Customer success doesn't start at onboarding—it starts where most tools stop.”
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FutureSection;
