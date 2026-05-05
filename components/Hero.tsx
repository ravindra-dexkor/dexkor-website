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
    <section className="relative h-[calc(100vh-80px)] mt-20 overflow-hidden bg-black text-white flex items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col justify-between h-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center flex-1">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest"
            >
               AI-Native Customer Experience Suite
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              One operating system<br />
              for the entire<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">customer journey.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm lg:text-base text-slate-400 max-w-md leading-relaxed"
            >
              DexKor unifies sales, onboarding, support, and customer success into one AI-native platform powered by Dexy AI.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                See DexKor Live <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all group">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Play className="w-2.5 h-2.5 fill-white" />
                </div>
                Watch 2-min Overview
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-2"
            >
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> Enterprise-ready
               </div>
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5 text-blue-500" /> SOC 2 Type II
               </div>
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-blue-500" /> Built for global teams
               </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL - AI ORBIT */}
          <div className="relative h-full flex flex-col justify-center items-center scale-90 lg:scale-100">
             {/* Central Hub */}
             <div className="relative z-20 flex items-center justify-center">
                <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-44 h-44 rounded-full bg-blue-600/10 border border-blue-500/20 flex flex-col items-center justify-center backdrop-blur-xl relative"
                >
                   <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[ping_3s_linear_infinite]" />
                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] mb-2 overflow-hidden bg-slate-900 border border-blue-500/30">
                      <img src="/images/dexy_ai.png" alt="Dexy AI" className="w-full h-full object-cover" />
                   </div>
                   <span className="font-black text-xs tracking-widest uppercase">Dexy AI</span>
                   <span className="text-[8px] text-slate-400 mt-0.5 uppercase tracking-tighter">Embedded Intelligence</span>
                </motion.div>
             </div>

             {/* Orbiting Nodes */}
             <div className="absolute inset-0 z-10">
                {/* SalesHub */}
                <Node 
                    title="SalesHub" 
                    desc="Win and grow revenue" 
                    stat="+32% Pipeline" 
                    icon={BarChart3} 
                    className="top-[-5%] left-[-5%]" 
                    delay={0}
                />
                {/* OnboardHub */}
                <Node 
                    title="OnboardHub" 
                    desc="Accelerate time to value" 
                    stat="-40% Onboarding" 
                    icon={Users} 
                    className="top-[-5%] right-[-5%]" 
                    delay={0.2}
                    color="violet"
                />
                {/* HelpDesk */}
                <Node 
                    title="HelpDesk" 
                    desc="Deliver exceptional support" 
                    stat="-28% Resolution" 
                    icon={Headset} 
                    className="bottom-[15%] left-[-5%]" 
                    delay={0.4}
                    color="cyan"
                />
                {/* AccountCare */}
                <Node 
                    title="AccountCare" 
                    desc="Drive retention and expansion" 
                    stat="+25% Expansion" 
                    icon={Heart} 
                    className="bottom-[15%] right-[-5%]" 
                    delay={0.6}
                    color="orange"
                />
                
                {/* Connection Lines (Simulated with simple SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
                    <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        d="M100,100 L200,200 M300,100 L200,200 M100,250 L200,200 M300,250 L200,200" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        fill="none" 
                        className="text-blue-500"
                    />
                </svg>
             </div>
          </div>
        </div>

        {/* Floating Notifications */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 pb-4">
            <Notification icon={TrendingUp} text="Expansion opportunity detected" color="emerald" />
            <Notification icon={AlertTriangle} text="Health score dropped" color="amber" />
            <Notification icon={CheckCircle2} text="SLA recovered successfully" color="blue" />
            <Notification icon={Smile} text="Customer sentiment improved" color="purple" />
        </div>

        {/* TRUST SECTION */}
        <div className="pt-6 border-t border-white/5">
            <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
                Trusted by modern B2B teams replacing fragmented stacks
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-30 scale-90">
                <ComparisonLogo name="HubSpot" />
                <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
                <ComparisonLogo name="freshworks" />
                <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
                <ComparisonLogo name="zendesk" />
                <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
                <ComparisonLogo name="Gainsight" />
                <ArrowRight className="w-3 h-3 text-slate-600 hidden md:block" />
                <div className="text-xl font-black tracking-tighter text-blue-500 opacity-100">DEXKOR</div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Node = ({ title, desc, stat, icon: Icon, className, delay, color = "blue" }) => {
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
            className={cn("absolute w-48 p-4 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md shadow-2xl", className)}
        >
            <div className="flex items-start gap-3">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border", colors[color])}>
                    <Icon className="w-4 h-4" />
                </div>
                <div>
                    <h4 className="font-bold text-xs">{title}</h4>
                    <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">{desc}</p>
                    <div className={cn("mt-2 inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full", colors[color])}>
                        {stat}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Notification = ({ icon: Icon, text, color }) => {
    const colors = {
        emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
        amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
        blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
        purple: "text-purple-400 bg-purple-400/10 border-purple-400/20"
    };
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className={cn("flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-sm transition-all cursor-pointer", colors[color])}
        >
            <Icon className="w-3 h-3" />
            <span className="text-[9px] font-bold uppercase tracking-wide">{text}</span>
        </motion.div>
    );
};

const ComparisonLogo = ({ name }) => (
    <div className="text-lg font-bold tracking-tight text-white">{name}</div>
);

export default Hero;

