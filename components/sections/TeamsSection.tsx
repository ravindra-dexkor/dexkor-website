"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Heart,
  Headphones,
  Rocket,
  BarChart3,
  LayoutGrid,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ShieldCheck,
  Zap,
  Box,
  Layers,
  Search,
  CheckCircle2,
  Users,
  Shield,
  ShieldCheckIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const TeamCard = ({
  title,
  description,
  icon: Icon,
  indicator,
  isUp,
  colorClass,
  delay
}: {
  title: string;
  description: string;
  icon: any;
  indicator: string;
  isUp?: boolean;
  colorClass: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative p-6 rounded-2xl bg-slate-50/50 dark:bg-[#060b1a]/40 border border-slate-100 dark:border-white/5 hover:border-blue-500/20 dark:hover:border-white/10 transition-all duration-300 shadow-sm dark:shadow-none"
  >
    <div className="flex items-start gap-5">
      {/* Icon Container with Circular Glow */}
      <div className="relative shrink-0">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center relative z-10 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a1128]",
          "shadow-sm dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        )}>
          <Icon className={cn("w-7 h-7", colorClass)} />
        </div>
        {/* Glow Effect */}
        <div className={cn(
          "absolute inset-0 rounded-full blur-2xl opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500",
          colorClass.includes("blue") ? "bg-blue-500" : 
          colorClass.includes("emerald") ? "bg-emerald-500" :
          colorClass.includes("purple") ? "bg-purple-500" :
          colorClass.includes("orange") ? "bg-orange-500" :
          colorClass.includes("teal") ? "bg-teal-500" : "bg-blue-500"
        )} />
      </div>

      <div className="space-y-1">
        <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{title}</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium line-clamp-2">
          {description}
        </p>
      </div>
    </div>

    {/* Bottom Indicator */}
    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5">
      {isUp ? (
        <ArrowUp className={cn("w-3.5 h-3.5", colorClass)} />
      ) : (
        <ArrowDown className={cn("w-3.5 h-3.5", colorClass)} />
      )}
      <span className={cn("text-xs font-bold uppercase tracking-wider", colorClass)}>
        {indicator}
      </span>
    </div>
  </motion.div>
);

const OrbitalGraphic = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const orbitingIcons = [
    { Icon: TrendingUp, color: "text-blue-500 dark:text-blue-400", angle: 0, radius: 80 },
    { Icon: Heart, color: "text-emerald-500 dark:text-emerald-400", angle: 60, radius: 100 },
    { Icon: Headphones, color: "text-purple-500 dark:text-purple-400", angle: 120, radius: 90 },
    { Icon: Rocket, color: "text-orange-500 dark:text-orange-400", angle: 180, radius: 110 },
    { Icon: BarChart3, color: "text-blue-600 dark:text-blue-400", angle: 240, radius: 85 },
    { Icon: Layers, color: "text-teal-500 dark:text-teal-400", angle: 300, radius: 105 },
  ];

  const lightingDots = [
    { angle: 30, radius: 80, color: "bg-blue-400" },
    { angle: 150, radius: 110, color: "bg-indigo-400" },
    { angle: 270, radius: 95, color: "bg-cyan-400" },
  ];

  return (
    <div className="relative w-full h-[300px] lg:h-[350px] flex items-center justify-center overflow-hidden lg:overflow-visible">
      {/* Central Hub */}
      <div className="relative z-20">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px rgba(37,99,235,0.1)",
              "0 0 40px rgba(37,99,235,0.3)",
              "0 0 20px rgba(37,99,235,0.1)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-24 h-24 rounded-full bg-white dark:bg-gradient-to-br dark:from-blue-600 dark:to-indigo-700 border border-slate-200 dark:border-white/20 flex items-center justify-center relative overflow-hidden shadow-xl"
        >
            {/* DexKor Logo */}
            <div className="relative z-10 w-14 h-14 flex items-center justify-center">
                <img 
                    src="/images/logo.png" 
                    alt="DexKor Logo" 
                    className="w-full h-full object-contain dark:invert" 
                />
            </div>
            {/* Animated Inner Shine */}
            <motion.div 
                animate={{ x: [-100, 200] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 dark:via-white/20 to-transparent skew-x-12"
            />
        </motion.div>
        
        {/* Decorative Rings */}
        <div className="absolute inset-0 -m-4 rounded-full border border-blue-500/10 dark:border-blue-500/20" />
        <div className="absolute inset-0 -m-8 rounded-full border border-blue-500/5 dark:border-blue-500/10" />
      </div>

      {/* Orbital Path Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full">
          <circle cx="50%" cy="50%" r="80" fill="none" stroke="currentColor" className="text-slate-200 dark:text-white/10" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="110" fill="none" stroke="currentColor" className="text-slate-200 dark:text-white/10" strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" className="text-slate-200 dark:text-white/10" strokeWidth="0.5" strokeDasharray="1 8" />
        </svg>
      </div>

      {/* Orbiting Icons */}
      {orbitingIcons.map((item, idx) => {
        const currentAngle = (item.angle + rotation) * (Math.PI / 180);
        const x = Math.cos(currentAngle) * item.radius;
        const y = Math.sin(currentAngle) * item.radius;

        return (
          <motion.div
            key={idx}
            className="absolute z-10 p-2 rounded-full bg-white dark:bg-[#0a1128] border border-slate-200 dark:border-white/10 shadow-lg"
            style={{ x, y }}
          >
            <div className={cn("w-6 h-6 flex items-center justify-center", item.color)}>
              <item.Icon className="w-4 h-4" />
            </div>
          </motion.div>
        );
      })}

      {/* Orbiting Lighting Dots */}
      {lightingDots.map((dot, idx) => {
          const currentAngle = (dot.angle + rotation * 1.5) * (Math.PI / 180);
          const x = Math.cos(currentAngle) * dot.radius;
          const y = Math.sin(currentAngle) * dot.radius;

          return (
              <motion.div
                key={`dot-${idx}`}
                className={cn(
                    "absolute z-30 w-1.5 h-1.5 rounded-full",
                    dot.color,
                    "shadow-[0_0_8px_currentColor,0_0_12px_#60a5fa,0_0_20px_#3b82f6]"
                )}
                style={{ x, y }}
              />
          );
      })}

      {/* Small floating background dots */}
      {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1],
                y: [0, -10, 0]
            }}
            transition={{ 
                repeat: Infinity, 
                duration: 2 + i, 
                delay: i * 0.5 
            }}
            className="absolute w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
            style={{ 
                top: `${20 + i * 15}%`, 
                left: `${15 + (i % 3) * 20}%` 
            }}
          />
      ))}
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
      delay: 0.1
    },
    {
      title: "Customer Success",
      description: "Detect churn risks before customers escalate.",
      icon: Heart,
      indicator: "Churn signals",
      isUp: false,
      colorClass: "text-emerald-500",
      delay: 0.2
    },
    {
      title: "Support Operations",
      description: "Resolve faster with AI-guided workflows.",
      icon: Headphones,
      indicator: "Resolution time",
      isUp: false,
      colorClass: "text-purple-500",
      delay: 0.3
    },
    {
      title: "Onboarding Teams",
      description: "Accelerate implementation and time-to-value.",
      icon: Rocket,
      indicator: "Project delays",
      isUp: false,
      colorClass: "text-orange-500",
      delay: 0.4
    },
    {
      title: "Leadership",
      description: "See revenue, risk, and retention in one place.",
      icon: BarChart3,
      indicator: "Forecast accuracy",
      isUp: true,
      colorClass: "text-blue-600 dark:text-blue-400",
      delay: 0.5
    },
    {
      title: "RevOps",
      description: "Align data, automation, and execution.",
      icon: Layers,
      indicator: "Process efficiency",
      isUp: true,
      colorClass: "text-teal-600 dark:text-teal-400",
      delay: 0.6
    }
  ];

  return (
    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden border-t border-slate-50 dark:border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10 lg:mb-14">
          <div className="space-y-6 max-w-xl text-center lg:text-left">
            <span className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-widest block">— BUILT FOR EVERY TEAM</span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.05] tracking-tight mt-4">
              One platform.<br />
              Every <span className="text-blue-600 dark:text-blue-500">customer-facing team.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
              From revenue to retention, DexKor gives every team one shared customer timeline, one intelligence layer, and one source of truth.
            </p>
          </div>

          <OrbitalGraphic />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
          className="w-full bg-slate-50/80 dark:bg-[#060b1a]/80 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-none"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/20 dark:border-blue-500/30 flex items-center justify-center shrink-0 shadow-sm dark:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <ShieldCheckIcon className="w-7 h-7 text-blue-600 dark:text-blue-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              No silos. No blind spots. No handoff failures.
            </h3>
          </div>

          <div className="flex items-center gap-4">
              <div className="hidden lg:block w-px h-12 bg-slate-200 dark:bg-white/10 mx-4" />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap shadow-xl shadow-blue-600/20 active:scale-95">
                Explore Use Cases <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamsSection;
