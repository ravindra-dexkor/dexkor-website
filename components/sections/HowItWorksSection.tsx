"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Brain, 
  Zap, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  Headphones,
  TrendingUp,
  Clock,
  CircleAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

const FlowCard = ({ 
  step, 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  colorClass, 
  iconBgClass, 
  textColorClass 
}: { 
  step: string; 
  title: string; 
  subtitle: string; 
  description: string; 
  icon: any; 
  colorClass: string; 
  iconBgClass: string; 
  textColorClass: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex-1 min-w-[160px] p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm transition-all relative group"
  >
    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm", iconBgClass)}>
      <Icon className={cn("w-5 h-5", colorClass)} />
    </div>
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <span className={cn("text-xs font-bold uppercase tracking-wider", textColorClass)}>{step}</span>
      </div>
      <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">{title}</h4>
      <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{subtitle}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const FlowConnector = () => (
  <div className="hidden lg:flex items-center justify-center w-6 shrink-0 relative">
    <div className="absolute top-1/2 left-[-150%] right-[-150%] h-px bg-slate-100 dark:bg-white/5 -translate-y-1/2" />
    <motion.div 
      animate={{ x: [0, 3, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="w-6 h-6 rounded-full bg-white dark:bg-[#060b1a] border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-sm z-10"
    >
      <ChevronRight className="w-3 h-3 text-slate-300 dark:text-slate-600" />
    </motion.div>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1. SIGNAL",
      title: "Product usage dropped 18%",
      subtitle: "Usage decline detected",
      description: "Across key accounts based on historical activity patterns.",
      icon: AlertTriangle,
      colorClass: "text-red-500",
      iconBgClass: "bg-red-50 dark:bg-red-500/10",
      textColorClass: "text-red-600 dark:text-red-400"
    },
    {
      step: "2. INSIGHT",
      title: "Dexy detects churn pattern",
      subtitle: "AI identifies early churn",
      description: "Risk identified based on behavior and engagement trends.",
      icon: Brain,
      colorClass: "text-purple-500",
      iconBgClass: "bg-purple-50 dark:bg-purple-500/10",
      textColorClass: "text-purple-600 dark:text-purple-400"
    },
    {
      step: "3. ACTION",
      title: "AccountCare alerts the CSM",
      subtitle: "Automated workflow triggers",
      description: "Recommended actions and notifies the right team immediately.",
      icon: Zap,
      colorClass: "text-blue-500",
      iconBgClass: "bg-blue-50 dark:bg-blue-500/10",
      textColorClass: "text-blue-600 dark:text-blue-400"
    },
    {
      step: "4. OUTCOME",
      title: "Risk mitigated before escalation",
      subtitle: "Proactive resolution",
      description: "Retains the customer and protects revenue before it's too late.",
      icon: CheckCircle2,
      colorClass: "text-emerald-500",
      iconBgClass: "bg-emerald-50 dark:bg-emerald-500/10",
      textColorClass: "text-emerald-600 dark:text-emerald-400"
    }
  ];

  const metrics = [
    {
      icon: Headphones,
      value: "28%",
      trend: "↓",
      label: "Faster Resolution",
      description: "AI-powered routing and prioritization reduce resolution time",
      iconBg: "bg-purple-50 dark:bg-purple-500/10",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: TrendingUp,
      value: "25%",
      trend: "↑",
      label: "Expansion Revenue",
      description: "AI identifies growth opportunities across your customer base",
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Clock,
      value: "40%",
      trend: "↓",
      label: "Time-to-Value",
      description: "Automated workflows accelerate onboarding and time-to-value",
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400"
    }
  ];

  return (

    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] transition-colors duration-300 border-t border-slate-50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10 lg:mb-14">
          {/* Left Column: Text */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">How DexKor Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white mt-4 mb-4">
              From reactive operations to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                predictive execution.
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              DexKor continuously analyzes customer activity, detects patterns, and recommends the next best action—before risks become escalations.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10 dark:shadow-none">
              See Dexy in Action <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Flowchart */}
          <div className="lg:col-span-8 flex flex-col md:flex-row lg:flex-nowrap gap-2 md:overflow-x-auto lg:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <FlowCard {...step} />
                {idx < steps.length - 1 && <FlowConnector />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Area: Metrics Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-white/5">
            {metrics.map((metric, idx) => (
              <div key={idx} className={cn("flex flex-col md:flex-row items-center gap-4 text-center md:text-left", idx !== 0 && "pt-8 md:pt-0 md:pl-6 lg:pl-10")}>
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0", metric.iconBg)}>
                  <metric.icon className={cn("w-6 h-6", metric.iconColor)} />
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 mb-0.5">
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{metric.value}</span>
                    <span className={cn("text-lg font-bold", metric.trend === "↑" ? "text-emerald-500" : "text-blue-500")}>{metric.trend}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{metric.label}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
