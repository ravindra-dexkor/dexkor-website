"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Clock,
  TrendingUp,
  Eye,
  ShieldCheck,
  ArrowRight,
  Lock,
  Code,
  Sparkles,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const MetricCard = ({
  value,
  title,
  description,
  icon: Icon,
  delay,
  colorClass,
  bgColorClass,
  isTextIcon = false
}: {
  value: string;
  title: string;
  description: string;
  icon: any;
  delay: number;
  colorClass: string;
  bgColorClass: string;
  isTextIcon?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group p-4 rounded-2xl bg-white dark:bg-[#060b1a]/40 border border-slate-100 dark:border-white/5 hover:border-blue-500/20 dark:hover:border-white/10 transition-all duration-300 shadow-sm dark:shadow-none flex flex-col gap-4"
  >
    <div className="flex items-center gap-4">
      <div className="relative shrink-0">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center relative z-10 border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-[#0a1128] shadow-sm",
          bgColorClass
        )}>
          {isTextIcon ? (
            <span className={cn("font-bold text-lg", colorClass)}>{Icon}</span>
          ) : (
            <Icon className={cn("w-5 h-5", colorClass)} />
          )}
        </div>
        {/* Subtle Glow */}
        <div className={cn(
          "absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
          bgColorClass.replace("bg-", "bg-").replace("/10", "")
        )} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className={cn("text-3xl md:text-4xl font-black tracking-tighter", colorClass)}>
          {value.replace("%", "").replace("x", "")}
        </span>
        <span className={cn("text-xl font-bold", colorClass)}>
          {value.includes("%") ? "%" : "x"}
        </span>
      </div>
    </div>
    <div className="space-y-1">
      <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  </motion.div>
);

const OutcomesSection = () => {
  const metrics = [
    {
      value: "28%",
      title: "Faster Resolution",
      description: "AI-powered routing and prioritization.",
      icon: Zap,
      colorClass: "text-blue-600 dark:text-blue-400",
      bgColorClass: "bg-blue-50 dark:bg-blue-500/10",
      delay: 0.1
    },
    {
      value: "40%",
      title: "Faster Time-to-Value",
      description: "Accelerated onboarding workflows.",
      icon: Clock,
      colorClass: "text-purple-600 dark:text-purple-400",
      bgColorClass: "bg-purple-50 dark:bg-purple-500/10",
      delay: 0.2
    },
    {
      value: "25%",
      title: "Expansion Revenue",
      description: "Opportunity signals identified early.",
      icon: TrendingUp,
      colorClass: "text-emerald-600 dark:text-emerald-400",
      bgColorClass: "bg-emerald-50 dark:bg-emerald-500/10",
      delay: 0.3
    },
    {
      value: "32%",
      title: "Pipeline Visibility",
      description: "Shared customer intelligence.",
      icon: Eye,
      colorClass: "text-cyan-600 dark:text-cyan-400",
      bgColorClass: "bg-cyan-50 dark:bg-cyan-500/10",
      delay: 0.4
    },
    {
      value: "18%",
      title: "Risk Reduction",
      description: "Early churn detection.",
      icon: ShieldCheck,
      colorClass: "text-rose-600 dark:text-rose-400",
      bgColorClass: "bg-rose-50 dark:bg-rose-500/10",
      delay: 0.5
    },
    {
      value: "3x",
      title: "Operational Efficiency",
      description: "One system. Fewer handoffs.",
      icon: "3x",
      isTextIcon: true,
      colorClass: "text-amber-600 dark:text-amber-400",
      bgColorClass: "bg-amber-50 dark:bg-amber-500/10",
      delay: 0.6
    }
  ];

  const features = [
    { icon: Shield, title: "Enterprise-ready", desc: "Built for scale and security" },
    { icon: Lock, title: "SOC 2 Ready", desc: "Security you can trust" },
    { icon: Code, title: "API-first", desc: "Extend without limits" },
    { icon: Sparkles, title: "AI-native", desc: "Intelligence at every layer" }
  ];

  return (
    <section className="relative w-full py-10 lg:py-16 bg-slate-50/50 dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden border-t border-slate-100 dark:border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-5 mb-10 lg:mb-14 max-w-3xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Real Business Outcomes</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight">
            Measured in outcomes.<br />
            <span className="text-blue-600 dark:text-blue-500">Not activity.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-xl mx-auto">
            DexKor helps customer-facing teams reduce risk, accelerate time-to-value, improve retention, and unlock expansion—across the entire customer lifecycle.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} {...metric} />
          ))}
        </div>

        {/* Separator Pill */}
        <div className="flex items-center justify-center mb-8">
            <div className="relative group px-8 py-3 rounded-full border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#060b1a]/40 flex items-center gap-3 overflow-hidden shadow-sm dark:shadow-none">
                {/* Animated Inner Light */}
                <motion.div 
                    animate={{ x: [-200, 400] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-12"
                />
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-500 relative z-10" />
                <span className="text-slate-900 dark:text-white font-bold text-sm relative z-10">Every signal becomes an outcome.</span>
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>
        </div>

        {/* Footer Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center border-t border-slate-100 dark:border-white/5 pt-8">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 group lg:justify-center">
              <div className="w-10 h-10 rounded-xl bg-blue-600/5 dark:bg-blue-600/10 border border-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-500" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{item.desc}</p>
              </div>
              {idx < features.length - 1 && <div className="hidden lg:block w-px h-6 bg-slate-100 dark:bg-white/10 ml-6" />}
            </div>
          ))}
          
          <div className="lg:pl-6 flex flex-col gap-1.5">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all whitespace-nowrap shadow-xl shadow-blue-600/20 active:scale-95 group">
              See Customer Stories <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-slate-400 dark:text-slate-500 text-center font-bold uppercase tracking-wider">Real customers. Real results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
