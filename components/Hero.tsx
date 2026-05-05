"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Lock,
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Smile,
  BarChart3,
  Users,
  Headset,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100dvh] lg:h-screen pt-[100px] lg:pt-[10px] pb-12 lg:pb-0 overflow-hidden bg-indigo-50 dark:bg-[#040814] text-slate-900 dark:text-white flex flex-col justify-center transition-colors duration-300">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-bold text-blue-400 uppercase tracking-widest"
            >
              AI-Native Customer Experience Suite
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white"
            >
              One operating system<br />
              for the entire<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">customer journey.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed"
            >
              DexKor unifies sales, onboarding, support, and customer success into one AI-native platform powered by Dexy AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                See DexKor Live <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all group shadow-sm dark:shadow-none">
                <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-white/20 transition-colors">
                  <Play className="w-2 h-2 fill-slate-900 dark:fill-white ml-0.5" />
                </div>
                Watch 2-min Overview
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-5 pt-2"
            >
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-blue-500" /> Enterprise-ready
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                <Lock className="w-3 h-3 text-blue-500" /> SOC 2 Type II
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                <Globe className="w-3 h-3 text-blue-500" /> Built for global teams
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL - AI ORBIT */}
          <div className="relative h-[360px] flex flex-col justify-center items-center scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 mt-8 lg:mt-0">
            {/* Central Hub */}
            <div className="relative z-20 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 rounded-full bg-blue-600/10 border border-blue-500/20 flex flex-col items-center justify-center backdrop-blur-xl relative"
              >
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[ping_3s_linear_infinite]" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-2 overflow-hidden bg-white dark:bg-[#040814] border border-slate-200 dark:border-blue-500/30">
                  <img src="/images/dexy_ai.png" alt="Dexy AI" className="w-full h-full object-cover" />
                </div>
                <span className="font-black text-xs tracking-widest uppercase text-slate-900 dark:text-blue-50">Dexy AI</span>
                <span className="text-[7px] text-slate-500 dark:text-slate-400 mt-0.5 uppercase tracking-tighter">Embedded Intelligence</span>
              </motion.div>
            </div>

            {/* Orbiting Nodes */}
            <div className="absolute inset-0 z-10">
              <Node title="SalesHub" desc="Win and grow revenue" stat="+32% Pipeline" icon={BarChart3} className="top-[0%] left-[-10%]" delay={0} />
              <Node title="OnboardHub" desc="Accelerate time to value" stat="-40% Onboarding" icon={Users} className="top-[0%] right-[-10%]" delay={0.2} color="violet" />
              <Node title="HelpDesk" desc="Deliver exceptional support" stat="-28% Resolution" icon={Headset} className="bottom-[5%] left-[-10%]" delay={0.4} color="cyan" />
              <Node title="AccountCare" desc="Drive retention and expansion" stat="+25% Expansion" icon={Heart} className="bottom-[5%] right-[-10%]" delay={0.6} color="orange" />

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                {/* Background subtle lines */}
                <path
                  d="M60,100 L200,200 M340,100 L200,200 M60,280 L200,200 M340,280 L200,200"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-blue-500/10"
                />
                
                {/* Animated light dots */}
                {[
                  { x1: 60, y1: 100, x2: 200, y2: 200, delay: 0 },
                  { x1: 340, y1: 100, x2: 200, y2: 200, delay: 1.5 },
                  { x1: 60, y1: 280, x2: 200, y2: 200, delay: 0.75 },
                  { x1: 340, y1: 280, x2: 200, y2: 200, delay: 2.25 },
                ].map((line, i) => (
                  <motion.circle
                    key={i}
                    r="2.5"
                    className="fill-blue-400"
                    style={{ filter: "drop-shadow(0 0 4px #60a5fa)" }}
                    initial={{ cx: line.x1, cy: line.y1, opacity: 0 }}
                    animate={{ 
                       cx: [line.x1, line.x2], 
                       cy: [line.y1, line.y2], 
                       opacity: [0, 1, 1, 0] 
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: line.delay }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section (Notifications + Trust) */}
        <div className="w-full mt-16 lg:mt-12 flex flex-col items-center">
          {/* Floating Notifications */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-6">
            <Notification icon={TrendingUp} text="Expansion opportunity detected" color="emerald" />
            <Notification icon={AlertTriangle} text="Health score dropped" color="amber" />
            <Notification icon={CheckCircle2} text="SLA recovered successfully" color="blue" />
            <Notification icon={Smile} text="Customer sentiment improved" color="purple" />
          </div>

          {/* TRUST SECTION */}
          <div className="w-full pt-8 lg:pt-6 border-t border-slate-200 dark:border-white/5">
            <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 lg:mb-4">
              Trusted by modern B2B teams replacing fragmented stacks
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 opacity-40 lg:scale-90">
              <ComparisonLogo name="HubSpot" />
              <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
              <ComparisonLogo name="freshworks" />
              <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
              <ComparisonLogo name="zendesk" />
              <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
              <ComparisonLogo name="Gainsight" />
              <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
              <div className="text-xl sm:text-2xl font-black tracking-tighter text-blue-500 opacity-100">DEXKOR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface NodeProps {
  title: string;
  desc: string;
  stat: string;
  icon: React.ElementType;
  className?: string;
  delay: number;
  color?: "blue" | "violet" | "cyan" | "orange";
}

const Node = ({ title, desc, stat, icon: Icon, className, delay, color = "blue" }: NodeProps) => {
  const colors = {
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    violet: "text-violet-500 bg-violet-500/10 border-violet-500/20",
    cyan: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    orange: "text-orange-500 bg-orange-500/10 border-orange-500/20"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={cn("absolute w-48 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 backdrop-blur-md shadow-2xl dark:shadow-2xl", className)}
    >
      <div className="flex items-start gap-3">
        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border", colors[color])}>
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-xs text-slate-900 dark:text-white">{title}</h4>
          <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">{desc}</p>
          <div className={cn("mt-2 inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full", colors[color])}>
            {stat}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface NotificationProps {
  icon: React.ElementType;
  text: string;
  color: "emerald" | "amber" | "blue" | "purple";
}

const Notification = ({ icon: Icon, text, color }: NotificationProps) => {
  const colors = {
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    purple: "text-purple-400 bg-purple-400/10 border-purple-400/20"
  };
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-transparent backdrop-blur-sm transition-all cursor-pointer", colors[color])}
    >
      <Icon className="w-3 h-3" />
      <span className="text-[9px] font-bold uppercase tracking-wide">{text}</span>
    </motion.div>
  );
};

interface ComparisonLogoProps {
  name: string;
}

const ComparisonLogo = ({ name }: ComparisonLogoProps) => (
  <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{name}</div>
);

export default Hero;

