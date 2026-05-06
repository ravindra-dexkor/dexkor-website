"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Heart,
  Headphones,
  Rocket,
  BarChart3,
  LayoutGrid,
  ArrowRight,
  ShieldCheck,
  User,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const TeamCard = ({
  title,
  description,
  icon: Icon,
  indicator,
  indicatorValue,
  isUp,
  colorClass,
  glowColor,
  delay
}: {
  title: string;
  description: string;
  icon: any;
  indicator: string;
  indicatorValue?: string;
  isUp?: boolean;
  colorClass: string;
  glowColor: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative p-6 rounded-2xl bg-white dark:bg-[#060b1a] border border-slate-100 dark:border-white/5 hover:border-slate-200 dark:hover:border-white/10 transition-all shadow-sm hover:shadow-xl"
  >
    <div className="flex items-start gap-5">
      {/* Icon Container */}
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center shrink-0 relative",
        "bg-white dark:bg-[#0a1128] shadow-inner border border-slate-100 dark:border-white/5"
      )}>
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: glowColor }}
        />
        <Icon className={cn("w-6 h-6 relative z-10", colorClass)} />
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-slate-900 dark:text-white text-base">{title}</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>

    {/* Indicator */}
    <div className="mt-6 flex items-center gap-1.5 pt-4 border-t border-slate-50 dark:border-white/5">
      {isUp ? (
        <ArrowUpRight className={cn("w-3.5 h-3.5", colorClass)} />
      ) : (
        <ArrowDownRight className={cn("w-3.5 h-3.5", colorClass)} />
      )}
      <span className={cn("text-xs font-bold uppercase tracking-wider", colorClass)}>
        {indicator}
      </span>
    </div>
  </motion.div>
);

const OrbitalGraphic = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Central Node */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center relative z-20 shadow-[0_0_50px_rgba(37,99,235,0.4)]"
      >
        <img src="/images/logo.png" alt="Logo" className="w-12 h-12 invert" />

        {/* Pulsing Rings */}
        <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/50 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute -inset-8 rounded-full border border-blue-500/10" />
        <div className="absolute -inset-16 rounded-full border border-blue-500/5" />
      </motion.div>

      {/* Orbiting Icons */}
      {[
        { top: '15%', left: '15%', delay: 0 },
        { top: '10%', right: '20%', delay: 1 },
        { bottom: '20%', left: '20%', delay: 2 },
        { bottom: '15%', right: '15%', delay: 3 },
      ].map((pos, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            y: { repeat: Infinity, duration: 3 + idx, ease: "easeInOut", delay: pos.delay }
          }}
          className="absolute z-10 p-2 rounded-full bg-white dark:bg-[#0a1128] border border-slate-100 dark:border-white/10 shadow-lg"
          style={pos}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <User className="w-4 h-4 text-slate-400 dark:text-slate-500" />
          </div>
        </motion.div>
      ))}

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};

const TeamsSection = () => {
  const teams = [
    {
      title: "Revenue Teams",
      description: "Identify expansion opportunities before competitors do.",
      icon: TrendingUp,
      indicator: "Pipeline visibility",
      isUp: true,
      colorClass: "text-blue-500",
      glowColor: "#3b82f6",
      delay: 0.1
    },
    {
      title: "Customer Success",
      description: "Detect churn risks before customers escalate.",
      icon: Heart,
      indicator: "Churn signals",
      isUp: false,
      colorClass: "text-emerald-500",
      glowColor: "#10b981",
      delay: 0.2
    },
    {
      title: "Support Operations",
      description: "Resolve faster with AI-guided workflows.",
      icon: Headphones,
      indicator: "Resolution time",
      isUp: false,
      colorClass: "text-purple-500",
      glowColor: "#a855f7",
      delay: 0.3
    },
    {
      title: "Onboarding Teams",
      description: "Accelerate implementation and time-to-value.",
      icon: Rocket,
      indicator: "Project delays",
      isUp: false,
      colorClass: "text-orange-500",
      glowColor: "#f97316",
      delay: 0.4
    },
    {
      title: "Leadership",
      description: "See revenue, risk, and retention in one place.",
      icon: BarChart3,
      indicator: "Forecast accuracy",
      isUp: true,
      colorClass: "text-blue-600",
      glowColor: "#2563eb",
      delay: 0.5
    },
    {
      title: "RevOps",
      description: "Align data, automation, and execution.",
      icon: LayoutGrid,
      indicator: "Process efficiency",
      isUp: true,
      colorClass: "text-teal-500",
      glowColor: "#14b8a6",
      delay: 0.6
    }
  ];

  return (
    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10 lg:mb-14">
          <div className="space-y-6 max-w-xl">
            <span className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-widest block">— BUILT FOR EVERY TEAM</span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white mt-4">
              One platform.<br />
              Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">customer-facing team.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              From revenue to retention, DexKor gives every team one shared customer timeline, one intelligence layer, and one source of truth.
            </p>
          </div>

          <OrbitalGraphic />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {teams.map((team, idx) => (
            <TeamCard key={idx} {...team} />
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-slate-900 dark:bg-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              No silos. No blind spots. No handoff failures.
            </h3>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap shadow-xl shadow-blue-500/20">
            Explore Use Cases <ArrowRight className="w-4 h-4" />
          </button>

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
        </motion.div>

      </div>

      {/* Section Background Decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 dark:via-white/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default TeamsSection;
