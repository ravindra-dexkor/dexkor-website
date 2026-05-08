"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3, Users, Headphones, Rocket,
  CheckCircle2, ArrowRight, PlayCircle,
  ShieldCheck, Zap, GitMerge, BarChart2, Plug,
  TrendingUp, Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── HubCard — exact same as Hero ──────────────────────────── */
const HubCard = ({
  title, desc, stat, statColor, icon: Icon, iconBg, iconColor, delay, position
}: {
  title: string; desc: string; stat: string; statColor: string;
  icon: React.ElementType; iconBg: string; iconColor: string;
  delay: number; position: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className={cn(
      "absolute bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-3 shadow-lg w-[152px]",
      position
    )}
  >
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-2">
        <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0", iconBg)}>
          <Icon className={cn("w-4 h-4", iconColor)} />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-xs text-slate-900 dark:text-white leading-tight">{title}</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{desc}</p>
        </div>
      </div>
      <div className={cn("mt-1 inline-flex text-[10px] font-bold px-1.5 py-0.5 rounded-full", statColor)}>
        {stat}
      </div>
    </div>
  </motion.div>
);

/* ─── Foundation bar ─────────────────────────────────────────── */
const foundations = [
  { icon: GitMerge,    label: "Unified Timeline",     sub: "360° view across teams" },
  { icon: Zap,         label: "Workflow Automation",   sub: "End-to-end automation" },
  { icon: Plug,        label: "APIs & Integrations",   sub: "Connect your stack" },
  { icon: BarChart2,   label: "Analytics & Reporting", sub: "Real-time insights" },
  { icon: ShieldCheck, label: "Security & Compliance", sub: "Enterprise-grade" },
];

/* ─── 8 spoke positions (SVG %) ──────────────────────────────── */
const spokes = [
  { x1: "12%", y1: "12%", x2: "50%", y2: "50%", delay: 0.0 },  // TL
  { x1: "50%", y1: "4%",  x2: "50%", y2: "50%", delay: 0.3 },  // TC
  { x1: "88%", y1: "12%", x2: "50%", y2: "50%", delay: 0.6 },  // TR
  { x1: "96%", y1: "50%", x2: "50%", y2: "50%", delay: 0.9 },  // RC
  { x1: "88%", y1: "88%", x2: "50%", y2: "50%", delay: 1.2 },  // BR
  { x1: "50%", y1: "96%", x2: "50%", y2: "50%", delay: 1.5 },  // BC
  { x1: "12%", y1: "88%", x2: "50%", y2: "50%", delay: 1.8 },  // BL
  { x1: "4%",  y1: "50%", x2: "50%", y2: "50%", delay: 2.1 },  // LC
];

/* ─── 8 Hub cards — content from reference image ────────────── */
const hubCards = [
  // TL — OnboardHub
  {
    title: "OnboardHub",  desc: "Accelerate implementation.",
    stat: "↑ 40% faster",  statColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10",
    icon: BarChart3, iconBg: "bg-emerald-50 dark:bg-emerald-500/10", iconColor: "text-emerald-600",
    position: "top-0 left-0", delay: 0.4,
  },
  // TC — SalesHub
  {
    title: "SalesHub",    desc: "Win pipeline. Forecast growth.",
    stat: "+32% Pipeline", statColor: "text-blue-600 bg-blue-50 dark:bg-blue-500/10",
    icon: Rocket,  iconBg: "bg-blue-50 dark:bg-blue-500/10", iconColor: "text-blue-600",
    position: "top-0 left-1/2 -translate-x-1/2", delay: 0.5,
  },
  // TR — Pipeline KPI
  {
    title: "Pipeline Generated", desc: "$28.4M",
    stat: "↑ 32% vs last 30 days", statColor: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10",
    icon: TrendingUp, iconBg: "bg-indigo-50 dark:bg-indigo-500/10", iconColor: "text-indigo-600",
    position: "top-0 right-0", delay: 0.6,
  },
  // RC — AccountCare
  {
    title: "AccountCare", desc: "Retain customers. Expand revenue.",
    stat: "+25% Expansion", statColor: "text-purple-600 bg-purple-50 dark:bg-purple-500/10",
    icon: Users, iconBg: "bg-purple-50 dark:bg-purple-500/10", iconColor: "text-purple-600",
    position: "top-1/2 right-0 -translate-y-1/2", delay: 0.7,
  },
  // BR — Expansion Revenue KPI
  {
    title: "Expansion Revenue", desc: "$6.7M",
    stat: "↑ 25% vs last 30 days", statColor: "text-violet-600 bg-violet-50 dark:bg-violet-500/10",
    icon: BarChart2, iconBg: "bg-violet-50 dark:bg-violet-500/10", iconColor: "text-violet-600",
    position: "bottom-0 right-0", delay: 0.8,
  },
  // BC — HelpDesk
  {
    title: "HelpDesk",    desc: "Resolve faster. Scale support.",
    stat: "+28% CSAT",    statColor: "text-orange-600 bg-orange-50 dark:bg-orange-500/10",
    icon: Headphones, iconBg: "bg-orange-50 dark:bg-orange-500/10", iconColor: "text-orange-600",
    position: "bottom-0 left-1/2 -translate-x-1/2", delay: 0.9,
  },
  // BL — Resolution Time KPI
  {
    title: "Resolution Time", desc: "2.4 hrs",
    stat: "↓ 28% vs last 30 days", statColor: "text-orange-600 bg-orange-50 dark:bg-orange-500/10",
    icon: Clock, iconBg: "bg-orange-50 dark:bg-orange-500/10", iconColor: "text-orange-600",
    position: "bottom-0 left-0", delay: 1.0,
  },
  // LC — Time to Value KPI
  {
    title: "Time to Value", desc: "18 days",
    stat: "↓ 40% vs last 30 days", statColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10",
    icon: Zap, iconBg: "bg-emerald-50 dark:bg-emerald-500/10", iconColor: "text-emerald-600",
    position: "top-1/2 left-0 -translate-y-1/2", delay: 1.1,
  },
];

/* ─── Main Section ───────────────────────────────────────────── */
const SolutionSection = () => {
  return (
    <section className="relative w-full py-12 lg:py-20 bg-white dark:bg-[#030712] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Main 2-col grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 lg:mb-16">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.05] tracking-tight mb-5">
              One platform.<br />Every team.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">One customer journey.</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-md mb-6">
              DexKor unifies sales, onboarding, support, and customer success on a single AI-native platform—so every team works from the same data, in the same flow.
            </p>
            <ul className="space-y-2.5 mb-8">
              {["Shared customer context", "AI-powered automation", "Real-time visibility across the journey"].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />{item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-blue-500/20">
                See how it works <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
                <PlayCircle className="w-5 h-5 text-slate-400" />Watch 2-min overview
              </button>
            </div>
          </motion.div>

          {/* RIGHT — Hub diagram (Hero pattern, 8 cards) */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="hidden lg:block relative select-none"
            style={{ height: 440 }}
          >
            {/* SVG spoke lines + animated traveling dots */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                <marker id="sdot" markerWidth="4" markerHeight="4" refX="2" refY="2">
                  <circle cx="2" cy="2" r="1.5" fill="#93c5fd" />
                </marker>
              </defs>
              {spokes.map((s, i) => (
                <line key={i}
                  x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
                  stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 4"
                  markerEnd="url(#sdot)"
                />
              ))}
              {spokes.map((s, i) => (
                <motion.circle
                  key={i} r="3" fill="#3b82f6"
                  style={{ filter: "drop-shadow(0 0 4px #60a5fa)" }}
                  initial={{ opacity: 0 }}
                  animate={{ cx: [s.x1, s.x2], cy: [s.y1, s.y2], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: s.delay, repeatDelay: 1 }}
                />
              ))}
            </svg>

            {/* Center hub */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-[150px] h-[150px] rounded-full bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-500/30 shadow-2xl flex flex-col items-center justify-center gap-1 relative">
                <div className="absolute inset-0 rounded-full border border-blue-300/40 dark:border-blue-500/20 scale-110 animate-ping opacity-20" />
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-0.5 relative">
                  <img src="/images/dexy_ai.svg" alt="Dexy AI" className="w-16 h-16 rounded-full"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  {/* <span className="text-white font-black text-xl absolute">D</span> */}
                </div>
                <span className="text-[9px] text-slate-500 dark:text-slate-400 text-center leading-none px-2">
                  Embedded Intelligence<br />Across the Journey
                </span>
              </div>
            </motion.div>

            {/* 8 HubCards */}
            {hubCards.map((card) => (
              <HubCard key={card.title} {...card} />
            ))}
          </motion.div>
        </div>

        {/* ── Foundation bar ── */}
        <div className="rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/5">
            <div className="px-6 py-5 flex items-center lg:w-52">
              <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">Built on a unified operating foundation</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-slate-200 dark:divide-white/5">
              {foundations.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3 px-4 py-4">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{label}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 leading-snug">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
