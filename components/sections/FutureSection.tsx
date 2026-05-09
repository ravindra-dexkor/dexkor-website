"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, Headphones, Rocket, Users, Sparkles,
  Users2, BrainCircuit, Layers, ArrowRight, Lock, Globe, CheckCircle2, Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Features (right col) ─────────────────────────────────────── */
const features = [
  { icon: Users2,       title: "One customer timeline",  desc: "Every interaction, across every team. One complete view." },
  { icon: BrainCircuit, title: "One intelligence layer", desc: "AI that understands, predicts, and recommends." },
  { icon: Layers,       title: "One operating system",   desc: "Unified data. Connected workflows. Measurable outcomes." },
];

/* ── Stats bar ────────────────────────────────────────────────── */
const statsData = [
  { val: "50K+",  color: "text-blue-600 dark:text-blue-400",    label: "Customer Profiles Unified",          icon: TrendingUp   },
  { val: "120K+", color: "text-blue-600 dark:text-blue-400",    label: "Events Processed Monthly",           icon: Activity     },
  { val: "40+",   color: "text-violet-600 dark:text-violet-400",label: "Countries Supported",                 icon: Globe        },
  { val: "99.9%", color: "text-orange-600 dark:text-orange-400",label: "Enterprise-Grade Reliability Uptime", icon: CheckCircle2 },
];

/* ── Hub-and-spoke diagram (fixed positions, like Hero.tsx) ───── */
// Container: 420 × 380  Center: (210, 190)  Hub radius: 72px
// Pentagon: radius 145px, starting from top (270°), step 72°
const W = 460, H = 400, CX = 220, CY = 200, HUB_R = 72, R = 158;

const toDeg = (d: number) => (d * Math.PI) / 180;

// Card anchor points (pentagon, clockwise from top)
const cards = [
  { id: "sales",   icon: TrendingUp, color: "#10b981", bg: "bg-emerald-50 dark:bg-emerald-500/10", label: "SalesHub",    sub: "Win more",                angle: 225, delay: 0.3 },
  { id: "onboard", icon: Rocket,     color: "#f97316", bg: "bg-orange-50 dark:bg-orange-500/10",   label: "OnboardHub",  sub: "Launch smoothly",         angle: 315, delay: 0.4 },
  { id: "account", icon: Users,      color: "#3b82f6", bg: "bg-blue-50 dark:bg-blue-500/10",       label: "AccountCare", sub: "Retain longer",           angle: 45,  delay: 0.5 },
  { id: "help",    icon: Headphones, color: "#a855f7", bg: "bg-purple-50 dark:bg-purple-500/10",   label: "HelpDesk",    sub: "Resolve faster",          angle: 135, delay: 0.6 },
].map(c => ({
  ...c,
  // card center on orbit circle
  px: CX + R * Math.cos(toDeg(c.angle)),
  py: CY + R * Math.sin(toDeg(c.angle)),
  // hub-edge connection point (hub circle intersection along same angle)
  hx: CX + HUB_R * Math.cos(toDeg(c.angle)),
  hy: CY + HUB_R * Math.sin(toDeg(c.angle)),
}));

const CARD_W = 130, CARD_H = 84;

export const OrbitalDiagram = () => (
  <div className="relative mx-auto select-none overflow-visible" style={{ width: W, height: H }}>

    {/* SVG: dashed circle + connection lines + traveling dots */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${W} ${H}`}>
      {/* Dashed orbit ring */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" className="dark:stroke-white/10" />

      {/* Lines from each card to hub edge */}
      {cards.map(c => (
        <line key={`line-${c.id}`}
          x1={c.px} y1={c.py} x2={c.hx} y2={c.hy}
          stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65"
          className="dark:stroke-blue-500/30"
        />
      ))}

      {/* Animated traveling dots (like Hero.tsx) */}
      {cards.map((c, i) => (
        <motion.circle
          key={`dot-${c.id}`} r="3" fill="#3b82f6"
          style={{ filter: "drop-shadow(0 0 4px #60a5fa)" }}
          initial={{ opacity: 0 }}
          animate={{ cx: [c.px, c.hx], cy: [c.py, c.hy], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5, repeatDelay: 0.8 }}
        />
      ))}

      {/* Rotating orbit dots */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      >
        <circle cx={CX + R} cy={CY} r="4" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 6px #60a5fa)" }} />
        <circle cx={CX - R} cy={CY} r="3" fill="#8b5cf6" style={{ filter: "drop-shadow(0 0 6px #a78bfa)" }} />
      </motion.g>
    </svg>

    {/* Center hub */}
    <motion.div
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-500/30 rounded-full shadow-2xl shadow-blue-500/20 flex flex-col items-center justify-center text-center z-20"
      style={{ width: HUB_R * 2, height: HUB_R * 2, left: CX - HUB_R, top: CY - HUB_R }}
    >
      <div className="absolute inset-0 rounded-full border border-blue-300/30 dark:border-blue-500/20 animate-ping opacity-20" />
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-1 relative shrink-0">
        <img src="/images/Dexy_AI.svg" alt="DexKor" className="w-12 h-12 rounded-full"
          onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
        {/* <span className="text-white font-black text-lg absolute">D</span> */}
      </div>
      <p className="text-[10px] font-extrabold text-slate-900 dark:text-white tracking-wider">DEXKOR</p>
      <p className="text-[8px] text-slate-400 dark:text-slate-500 px-1.5 leading-tight mt-0.5">
        The Customer Operating System<br />for Modern B2B Teams
      </p>
    </motion.div>

    {/* 5 fixed-position cards */}
    {cards.map(c => (
      <motion.div key={c.id}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: c.delay, duration: 0.5, ease: "easeOut" }}
        className="absolute z-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-md flex flex-col items-center text-center"
        style={{ width: CARD_W, height: CARD_H, left: c.px - CARD_W / 2, top: c.py - CARD_H / 2, padding: "8px 10px" }}
      >
        <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mb-1.5", c.bg)}>
          <c.icon className="w-4 h-4" style={{ color: c.color }} />
        </div>
        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{c.label}</p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{c.sub}</p>
      </motion.div>
    ))}
  </div>
);

/* ── Main Section ─────────────────────────────────────────────── */
const FutureSection = () => (
  <section className="relative w-full py-12 lg:py-20 bg-white dark:bg-[#030712] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 overflow-hidden">
    {/* Grid bg */}
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.4] dark:opacity-[0.07]" />

    <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">

      {/* ── 3-col layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-8 lg:gap-6 items-center">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Future of Customer Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight mb-4">
            Growth won't be<br />managed in silos.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">It'll be predicted,<br />orchestrated, and<br />scaled.</span>
          </h2>
          <div className="w-8 h-0.5 bg-blue-500 mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-2">
            The companies that win tomorrow won't manage sales, onboarding, support, and success separately.
          </p>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            They'll run one customer operating system.
          </p>
        </motion.div>

        {/* CENTER */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <OrbitalDiagram />
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{f.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2.5">
            <button className="w-full inline-flex items-center justify-between px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-blue-500/20">
              Book a demo <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full inline-flex items-center justify-between px-5 py-2.5 border border-slate-200 dark:border-white/10 hover:border-blue-400 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-full transition-all">
              Talk to our team <ArrowRight className="w-4 h-4 opacity-50" />
            </button>
            <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5 pl-1">
              <Lock className="w-3 h-3" /> No credit card required
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }}
        className="rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 elevation-1 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/5">
          <div className="flex items-center gap-3 px-6 py-5 lg:w-56 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
              <Users2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-snug">
              Trusted by modern teams<br />
              <span className="font-bold text-slate-900 dark:text-white">replacing fragmented stacks</span>
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200 dark:divide-white/5">
            {statsData.map(({ val, color, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 px-5 py-4">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <Icon className={cn("w-4 h-4", color)} />
                </div>
                <div>
                  <p className={cn("text-xl font-extrabold leading-none", color)}>{val}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium leading-snug">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

export default FutureSection;
