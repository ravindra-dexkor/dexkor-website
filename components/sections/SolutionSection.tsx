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
  title, desc, stat, statColor, icon: Icon, logo, iconBg, iconColor, delay, position
}: {
  title: string; desc: string; stat: string; statColor: string;
  icon: React.ElementType; logo?: string; iconBg: string; iconColor: string;
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
        <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0 overflow-hidden", iconBg)}>
          {logo ? (
            <img src={logo} alt={title} className="w-6 h-6 object-contain p-1"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          ) : (
            <Icon className={cn("w-4 h-4", iconColor)} />
          )}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-xs text-slate-900 dark:text-white leading-tight">{title}</p>
          <p className="text-[10px] text-slate-700 dark:text-slate-700 leading-tight mt-0.5">{desc}</p>
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
  {
    icon: GitMerge,
    label: "Shared customer context",
    sub: "360° view across every team",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-500/10"
  },
  {
    icon: Zap,
    label: "Trigger actions automatically",
    sub: "End-to-end workflow automation",
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-500/10"
  },
  {
    icon: Plug,
    label: "Connect your existing stack",
    sub: "APIs & integrations built for flexibility",
    color: "text-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-500/10"
  },
  {
    icon: BarChart2,
    label: "Real-time business signals",
    sub: "Analytics & reporting that drive decisions",
    color: "text-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-500/10"
  },
  {
    icon: ShieldCheck,
    label: "Enterprise-grade trust",
    sub: "Security, compliance & data protection",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-500/10"
  },
];

/* ─── 8 spoke positions (SVG %) ──────────────────────────────── */
const spokes = [
  { x1: "12%", y1: "12%", x2: "50%", y2: "50%", delay: 0.0 },  // TL
  { x1: "50%", y1: "4%", x2: "50%", y2: "50%", delay: 0.3 },  // TC
  { x1: "88%", y1: "12%", x2: "50%", y2: "50%", delay: 0.6 },  // TR
  { x1: "96%", y1: "50%", x2: "50%", y2: "50%", delay: 0.9 },  // RC
  { x1: "88%", y1: "88%", x2: "50%", y2: "50%", delay: 1.2 },  // BR
  { x1: "50%", y1: "96%", x2: "50%", y2: "50%", delay: 1.5 },  // BC
  { x1: "12%", y1: "88%", x2: "50%", y2: "50%", delay: 1.8 },  // BL
  { x1: "4%", y1: "50%", x2: "50%", y2: "50%", delay: 2.1 },  // LC
];

/* ─── 8 Hub cards — content from reference image ────────────── */
const hubCards = [
  // TL — OnboardHub
  {
    title: "OnboardHub", desc: "Accelerate implementation.",
    stat: "↑ 40% faster", statColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10",
    icon: BarChart3, logo: "/logos/onbaordhub.svg", iconBg: "bg-emerald-50 dark:bg-emerald-500/10", iconColor: "text-emerald-600",
    position: "top-0 left-0", delay: 0.4,
  },
  // TC — SalesHub
  {
    title: "SalesHub", desc: "Win pipeline. Forecast growth.",
    stat: "+32% Pipeline", statColor: "text-blue-600 bg-blue-50 dark:bg-blue-500/10",
    icon: Rocket, logo: "/logos/saleshub.svg", iconBg: "bg-blue-50 dark:bg-blue-500/10", iconColor: "text-blue-600",
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
    icon: Users, logo: "/logos/accountcare.svg", iconBg: "bg-purple-50 dark:bg-purple-500/10", iconColor: "text-purple-600",
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
    title: "HelpDesk", desc: "Resolve faster. Scale support.",
    stat: "+28% CSAT", statColor: "text-orange-600 bg-orange-50 dark:bg-orange-500/10",
    icon: Headphones, logo: "/logos/helpdesk.svg", iconBg: "bg-orange-50 dark:bg-orange-500/10", iconColor: "text-orange-600",
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

            <h2 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[-0.04em] mb-5">
              One platform.<br />Every team.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">One customer journey.</span>
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-700 leading-[1.65] font-medium max-w-md mb-6">
              From first touch to renewal, every team works from the same customer context, powered by AI, automation, and real-time intelligence.            </p>
            <ul className="space-y-2.5 mb-8">
              {["One customer timeline across every team, support, and growth", " AI automates workflows before issues escalate", " Real-time signals across onboarding, support, and growth"].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />{item}
                </li>
              ))}
            </ul>

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
                  <img src="/images/Dexy_AI_LOGO.svg" alt="Dexy AI" className="w-16 h-16 rounded-full"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  {/* <span className="text-white font-black text-xl absolute">D</span> */}
                </div>
                <span className="text-[9px] text-slate-700 dark:text-slate-700 text-center leading-none px-2">
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
        <div className="rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-white/5">
            {/* Header */}
            <div className="px-8 py-6 flex flex-col justify-center">
              <p className="text-xl font-bold text-slate-900 dark:text-white leading-[1.2]">
                Built for scale.<br />
                Powered by <span className="text-blue-600">one<br />operating layer.</span>
              </p>
            </div>
            {/* Foundation Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-x divide-slate-100 dark:divide-white/5">
              {foundations.map(({ icon: Icon, label, sub, color, bg }) => (
                <div key={label} className="flex flex-col gap-4 px-6 py-6 border-b sm:border-b-0 border-slate-100 dark:border-white/5">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", bg)}>
                    <Icon className={cn("w-5 h-5", color)} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-tight">{label}</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-700 leading-[1.65] font-medium">{sub}</p>
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
