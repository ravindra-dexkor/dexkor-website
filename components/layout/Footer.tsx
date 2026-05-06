"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  Quote,
  Compass,
  BookOpen,
  Code,
  Scale,
  Activity,
  ShieldAlert,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

// Custom Brand SVGs to match the image exactly
const SocialIcons = {
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
};

const Footer = () => {
  const linkColumns = [
    {
      title: "EXPLORE",
      icon: Compass,
      links: [
        "Interactive Product Tour",
        "ROI Calculator",
        "Migration Guide",
        "Customer Stories",
        "Executive Briefing"
      ]
    },
    {
      title: "LEARN",
      icon: BookOpen,
      links: [
        "Customer Growth Playbooks",
        "Benchmarks",
        "Industry Reports",
        "Webinars",
        "Blog"
      ]
    },
    {
      title: "BUILD",
      icon: Code,
      links: [
        "API Docs",
        "Developer Hub",
        "Release Notes",
        "Webhooks",
        "System Status"
      ]
    },
    {
      title: "COMPARE",
      icon: Scale,
      subtitle: "Compare DexKor with:",
      links: [
        "Freshdesk",
        "Zendesk",
        "Kapture",
        "HubSpot",
        "Salesforce"
      ]
    }
  ];

  const logoNames = ["uniphore", "Shiprocket", "mintifi", "leadsquared", "Chargebee", "yellow.ai"];

  return (
    <footer className="relative w-full bg-slate-50 dark:bg-[#02040a] text-slate-900 dark:text-white pt-16 pb-10 overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
      
      {/* 3D LIT DATA GLOBE VISUALIZATION */}
      <div className="absolute top-[180px] left-[-250px] lg:left-[-150px] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 800 800" className="w-full h-full opacity-30 dark:opacity-50">
                <defs>
                   <radialGradient id="globe-grad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="transparent" />
                   </radialGradient>
                </defs>
                <ellipse cx="400" cy="400" rx="300" ry="80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-500/20" />
                <ellipse cx="400" cy="400" rx="280" ry="70" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-500/10" strokeDasharray="10,10" />
                <ellipse cx="400" cy="400" rx="80" ry="300" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-500/20" />
                <circle cx="400" cy="400" r="300" stroke="url(#globe-grad)" strokeWidth="40" fill="none" className="opacity-30" />
                <circle cx="400" cy="400" r="301" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-500/20" />
            </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/20 blur-[120px] rounded-full" />
      </div>

      {/* FUTURISTIC GENERATED GLOBE (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] pointer-events-none z-[1] opacity-60 dark:opacity-90 mix-blend-screen overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          <img 
            src="/images/futuristic_data_globe.png" 
            alt="Data Globe" 
            className="w-full h-full object-contain"
          />
          {/* Edge softening masks */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#02040a] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-[#02040a] via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: Links & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-xl shadow-blue-500/30 flex items-center justify-center border border-white/20">
                <img src="/images/logo.png" alt="DexKor" className="w-full h-full object-contain invert brightness-0" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">DEXKOR</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
                One operating system. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Every customer moment.
                </span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed max-w-sm">
                AI-native B2B customer experience suite built for teams that refuse reactive growth.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {[SocialIcons.LinkedIn, SocialIcons.X, SocialIcons.YouTube, SocialIcons.GitHub].map((Icon, idx) => (
                <button key={idx} className="w-9 h-9 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-600/20 hover:border-blue-500/50 transition-all text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-white shadow-sm">
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {linkColumns.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-white/5 pb-2 group">
                   <col.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform" />
                   {/* Column heading: xs is the minimum — no sub-xs here */}
                   <h4 className="text-xs font-black uppercase tracking-[0.2em]">{col.title}</h4>
                </div>
                <ul className="space-y-2.5 pt-1">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href="#" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center justify-between group">
                        {link}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* COMPACT MIDDLE BAR: Live Stats & Partners */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 mb-12 border-t border-slate-200 dark:border-white/5 pt-10">
          
          {/* Compact Cloud Stats */}
          <div className="lg:w-1/3 min-w-[320px] p-5 rounded-2xl bg-white dark:bg-[#080b12] border border-slate-200 dark:border-white/10 relative overflow-hidden group shadow-lg">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  {/* "DEXKOR CLOUD LIVE" label: minimum xs */}
                  <span className="text-xs font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase">DEXKOR CLOUD LIVE</span>
                </div>
                <span className="text-xs font-black text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 uppercase tracking-tight">Live</span>
             </div>
             
             <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "2.4k", label: "Workflows", Icon: Activity },
                  { val: "187", label: "Risks", Icon: ShieldAlert },
                  { val: "93", label: "Opptys", Icon: Zap }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                     <span className="text-xl font-black text-slate-900 dark:text-white leading-none mb-1">{stat.val}</span>
                     <span className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Compact Partners Cloud */}
          <div className="flex-grow p-5 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col justify-center space-y-4">
             <h4 className="text-xs font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] text-center">TRUSTED BY INNOVATIVE TEAMS</h4>
             <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-40 hover:opacity-100 transition-opacity">
                {logoNames.map((name) => (
                  <span key={name} className="text-xs font-black text-slate-900 dark:text-white tracking-widest italic">{name.toUpperCase()}</span>
                ))}
             </div>
          </div>
        </div>

        {/* COMPACT BOTTOM BANNER: Quote & Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-center border-t border-slate-200 dark:border-white/5 pt-10">
           
           {/* Founder Quote */}
           <div className="flex items-center gap-5">
              <Quote className="w-8 h-8 text-blue-600/20 dark:text-blue-600/10 shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed italic max-w-md">
                  "Customer success starts where most tools stop."
                </p>
                <div className="flex items-center gap-3 border-l border-slate-200 dark:border-white/10 sm:pl-4">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-0.5">
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 overflow-hidden">
                        <img src="/images/richard.png" alt="R" className="w-full h-full object-cover" />
                      </div>
                   </div>
                   <div className="flex flex-col">
                      {/* Name: minimum xs — was text-[11px] */}
                      <h5 className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 italic leading-none">Richard Samuel</h5>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">CEO</span>
                   </div>
                </div>
              </div>
           </div>

           {/* Compact Action Bar */}
           <div className="flex items-center justify-center lg:justify-end gap-6">
              <div className="hidden sm:flex flex-col items-end text-right">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">Ready to see DexKor?</h4>
                <p className="text-xs text-slate-500 font-medium">Book a personalized walkthrough.</p>
              </div>
              <button className="bg-slate-900 dark:bg-indigo-600/10 border border-slate-900 dark:border-indigo-500/20 hover:bg-slate-800 dark:hover:bg-indigo-500/20 text-white dark:text-indigo-400 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg active:scale-95">
                Schedule a Demo <ArrowRight className="w-3.5 h-3.5" />
              </button>
           </div>
        </div>

        {/* LEGAL & BADGES */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10">
                    <img src="/images/logo.png" alt="D" className="w-4 h-4 invert dark:invert brightness-0 opacity-40" />
                 </div>
                 {/* Copyright: minimum xs */}
                 <div className="text-xs font-bold text-slate-400 dark:text-slate-600 tracking-widest uppercase">
                    © 2026 DEXKORCRM. All rights reserved.
                 </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600/50" />
                  India
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  <div className="w-4 h-4 flex items-center justify-center border border-slate-300 dark:border-slate-700 rounded-full text-xs">IN</div>
                  Global B2B
                </div>
              </div>
           </div>

           <div className="flex items-center gap-8">
              {[
                { icon: ShieldCheck, title: "SOC 2" },
                { icon: CheckCircle2, title: "GDPR" },
                { icon: ShieldCheck, title: "Ready" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                   <badge.icon className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-blue-500 transition-colors" />
                   <span className="text-xs font-black text-slate-900 dark:text-white tracking-tight uppercase">{badge.title}</span>
                </div>
              ))}
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
