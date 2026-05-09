"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye, Clock, Headphones, Rocket, ShieldCheck, Zap,
  ArrowRight, Sparkles, TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Sparkline SVG ──────────────────────────────────────────────── */
const Sparkline = ({ color, points }: { color: string; points: string }) => (
  <svg viewBox="0 0 120 28" className="w-full h-7" preserveAspectRatio="none">
    <polyline
      points={points}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── KPI Card ───────────────────────────────────────────────────── */
const KpiCard = ({
  icon: Icon, iconBg, iconColor,
  value, arrow, arrowColor,
  title, desc,
  sparkColor, sparkPoints,
  delay,
}: {
  icon: React.ElementType; iconBg: string; iconColor: string;
  value: string; arrow: "↑" | "↓" | ""; arrowColor: string;
  title: string; desc: string;
  sparkColor: string; sparkPoints: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.45, ease: "easeOut" }}
    className="flex flex-col gap-3 p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 elevation-1 hover:-translate-y-0.5 transition-all duration-300"
  >
    {/* Top row: icon + value + arrow */}
    <div className="flex items-center gap-2">
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/10", iconBg)}>
        <Icon className={cn("w-5 h-5", iconColor)} />
      </div>
      <span className={cn("text-3xl font-bold tracking-tight leading-none", iconColor)}>
        {value}
      </span>
      {arrow && (
        <span className={cn("text-base font-bold leading-none", arrowColor)}>{arrow}</span>
      )}
    </div>

    {/* Title + desc */}
    <div>
      <p className="font-bold text-sm text-slate-900 dark:text-white leading-snug mb-1">{title}</p>
      <p className="text-xs text-slate-700 dark:text-slate-700 leading-[1.65] font-medium">{desc}</p>
    </div>

    {/* Sparkline */}
    <div className="mt-auto pt-2 border-t border-slate-100 dark:border-white/5">
      <Sparkline color={sparkColor} points={sparkPoints} />
    </div>
  </motion.div>
);

/* ── Metrics data ───────────────────────────────────────────────── */
const metrics = [
  {
    icon: Eye, iconBg: "bg-blue-50 dark:bg-blue-500/10", iconColor: "text-blue-600 dark:text-blue-400",
    value: "32%", arrow: "↑" as const, arrowColor: "text-blue-500",
    title: "Pipeline Visibility",
    desc: "Better visibility into pipeline and customer health.",
    sparkColor: "#3b82f6",
    sparkPoints: "0,22 20,18 40,20 60,10 80,14 100,6 120,10",
    delay: 0.1,
  },
  {
    icon: Clock, iconBg: "bg-violet-50 dark:bg-violet-500/10", iconColor: "text-violet-600 dark:text-violet-400",
    value: "40%", arrow: "↓" as const, arrowColor: "text-violet-500",
    title: "Time-to-Value",
    desc: "Faster onboarding with automated workflows.",
    sparkColor: "#7c3aed",
    sparkPoints: "0,6 20,10 40,8 60,14 80,12 100,18 120,20",
    delay: 0.15,
  },
  {
    icon: Headphones, iconBg: "bg-emerald-50 dark:bg-emerald-500/10", iconColor: "text-emerald-600 dark:text-emerald-400",
    value: "28%", arrow: "↓" as const, arrowColor: "text-emerald-500",
    title: "Resolution Time",
    desc: "AI-powered routing and prioritization reduce MTTR.",
    sparkColor: "#10b981",
    sparkPoints: "0,8 20,12 40,10 60,16 80,14 100,20 120,22",
    delay: 0.2,
  },
  {
    icon: Rocket, iconBg: "bg-orange-50 dark:bg-orange-500/10", iconColor: "text-orange-600 dark:text-orange-400",
    value: "25%", arrow: "↑" as const, arrowColor: "text-orange-500",
    title: "Expansion Revenue",
    desc: "Opportunity signals identified early, revenue realized faster.",
    sparkColor: "#f97316",
    sparkPoints: "0,22 20,18 40,20 60,12 80,16 100,8 120,6",
    delay: 0.25,
  },
  {
    icon: ShieldCheck, iconBg: "bg-rose-50 dark:bg-rose-500/10", iconColor: "text-rose-600 dark:text-rose-400",
    value: "18%", arrow: "↓" as const, arrowColor: "text-rose-500",
    title: "Churn Risk",
    desc: "Early risk detection helps retain more customers.",
    sparkColor: "#f43f5e",
    sparkPoints: "0,6 20,10 40,8 60,16 80,12 100,20 120,22",
    delay: 0.3,
  },
  {
    icon: Zap, iconBg: "bg-purple-50 dark:bg-purple-500/10", iconColor: "text-purple-600 dark:text-purple-400",
    value: "3x", arrow: "" as const, arrowColor: "",
    title: "Operational Efficiency",
    desc: "One system. Fewer handoffs. More done.",
    sparkColor: "#9333ea",
    sparkPoints: "0,22 20,16 40,18 60,10 80,14 100,8 120,4",
    delay: 0.35,
  },
];

/* ── Main Section ───────────────────────────────────────────────── */
const OutcomesSection = () => (
  <section className="relative w-full py-12 lg:py-20 bg-white dark:bg-[#030712] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 overflow-hidden">

    <div className="max-w-7xl mx-auto px-6 space-y-10">

      {/* ── ROW 1: Header + Quote ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-5">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Real Business Impact</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[-0.04em] mb-4">
            Measured in outcomes.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">Not activity.</span>
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-700 font-medium leading-[1.65] max-w-md">
            DexKor helps customer-facing teams reduce risk, accelerate time-to-value, improve retention, and unlock expansion—across the entire customer lifecycle.
          </p>
        </motion.div>

        {/* RIGHT — Forrester quote card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6 relative"
        >
          {/* Big quote mark */}
          <div className="text-6xl font-black text-blue-500 leading-none mb-3" aria-hidden>❝</div>

          <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
            Only <strong className="text-slate-900 dark:text-white">3%</strong> of companies are truly customer-obsessed—
            yet those that are report <strong className="text-slate-900 dark:text-white">41% faster revenue growth</strong>,{" "}
            <strong className="text-slate-900 dark:text-white">49% faster profit growth</strong>, and{" "}
            <strong className="text-slate-900 dark:text-white">51% better customer retention</strong>.
          </p>
          <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-4">— Forrester, 2024</p>
        </motion.div>
      </div>

      {/* ── ROW 2: 6 KPI cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map((m) => (
          <KpiCard key={m.title} {...m} />
        ))}
      </div>

      {/* ── Bottom CTA bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 border-t border-slate-100 dark:border-white/5"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Every signal becomes an <span className="font-extrabold text-blue-600 dark:text-blue-400">outcome.</span>
          </p>
        </div>
        <a href="#customer-stories" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all whitespace-nowrap">
          See Customer Stories <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </motion.div>

    </div>
  </section>
);

export default OutcomesSection;
