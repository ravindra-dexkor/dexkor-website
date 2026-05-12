"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  GraduationCap,
  Landmark,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

const StoryCard = ({
  industry,
  company,
  image,
  icon: Icon,
  challenge,
  solution,
  outcomeValue,
  outcomeDesc,
  colorClass,
  bgColorClass,
  delay
}: {
  industry: string;
  company: string;
  image: string;
  icon: any;
  challenge: string;
  solution: string;
  outcomeValue: string;
  outcomeDesc: string;
  colorClass: string;
  bgColorClass: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-[#060b1a]/40 border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-blue-500/20 dark:hover:border-white/10"
  >
    {/* Card Header with Image Background */}
    <div className="relative h-48 w-full overflow-hidden">
      <img
        src={image}
        alt={company}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#060b1a] via-white/40 dark:via-[#060b1a]/40 to-transparent" />

      {/* Industry Info */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-md shadow-xl", bgColorClass)}>
          <Icon className={cn("w-6 h-6", colorClass)} />
        </div>
        <div className="space-y-0.5">
          <p className={cn("text-xs font-bold uppercase tracking-widest", colorClass)}>{industry}</p>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">{company}</h4>
        </div>
      </div>
    </div>

    {/* Card Body */}
    <div className="p-6 space-y-6 flex-grow">
      {/* Challenge */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-slate-700" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">CHALLENGE</span>
        </div>
        <p className="text-xs text-slate-700 dark:text-slate-400 font-medium leading-[1.65]">
          {challenge}
        </p>
      </div>

      {/* Solution */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">WITH DEXKOR</span>
        </div>
        <p className="text-xs text-slate-700 dark:text-slate-400 font-medium leading-[1.65]">
          {solution}
        </p>
      </div>

      {/* Outcome */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className={cn("w-3.5 h-3.5", colorClass)} />
          <span className={cn("text-xs font-bold uppercase tracking-wider", colorClass)}>OUTCOME</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className={cn("text-3xl font-bold tracking-tighter", colorClass)}>{outcomeValue}</span>
          <span className="text-xs text-slate-700 dark:text-slate-400 font-bold leading-tight max-w-[100px]">
            {outcomeDesc}
          </span>
        </div>
      </div>
    </div>

    {/* Card Footer */}
    <div className="p-6 pt-0 mt-auto">
      <button className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-500 hover:gap-3 transition-all group/btn">
        Read story <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  </motion.div>
);

const CustomerStoriesSection = () => {
  const stories = [
    {
      industry: "LOGISTICS SAAS",
      company: "FleetPilot",
      image: "/images/logistics_story_header.png", // Paths will need to be verified or updated
      icon: Truck,
      challenge: "Disconnected support, field operations, and SLA tracking led to delays and unhappy customers.",
      solution: "Unified mobile support, AI-powered routing, and real-time SLA visibility across teams.",
      outcomeValue: "28%",
      outcomeDesc: "faster issue resolution",
      colorClass: "text-blue-600 dark:text-blue-400",
      bgColorClass: "bg-blue-600/10 dark:bg-blue-600/20",
      delay: 0.1
    },
    {
      industry: "EDTECH",
      company: "LearnSphere",
      image: "/images/edtech_story_header.png",
      icon: GraduationCap,
      challenge: "Fragmented onboarding and student support across multiple tools created friction and drop-offs.",
      solution: "Unified WhatsApp + helpdesk workflows and automated milestone tracking.",
      outcomeValue: "40%",
      outcomeDesc: "faster time-to-value",
      colorClass: "text-emerald-600 dark:text-emerald-400",
      bgColorClass: "bg-emerald-600/10 dark:bg-emerald-600/20",
      delay: 0.2
    },
    {
      industry: "FINTECH",
      company: "PayNova",
      image: "/images/fintech_story_header.png",
      icon: Landmark,
      challenge: "Customer health signals were hidden across teams and systems, making churn hard to predict.",
      solution: "Account intelligence, predictive risk scores, and proactive playbooks for at-risk accounts.",
      outcomeValue: "18%",
      outcomeDesc: "churn risk reduction",
      colorClass: "text-purple-600 dark:text-purple-400",
      bgColorClass: "bg-purple-600/10 dark:bg-purple-600/20",
      delay: 0.3
    }
  ];

  return (
    <section id="customer-stories" className="relative w-full py-10 lg:py-16 bg-[#F8FAFF] dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="space-y-6 mb-10 lg:mb-14">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Customer Stories</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[-0.04em]">
                Built with teams<br />
                that refuse <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">reactive growth.</span>
              </h2>
              <p className="text-slate-700 dark:text-slate-400 text-sm font-medium leading-[1.65]">
                See how modern B2B teams use DexKor to unify operations, reduce churn risk, accelerate onboarding, and unlock expansion.
              </p>
            </div>
            <button className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group">
              View all stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story, idx) => (
            <StoryCard key={idx} {...story} />
          ))}
        </div>

        {/* Bottom Banner */}
        {/* <div className="w-full bg-slate-50/80 dark:bg-[#060b1a]/80 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
             <div className="w-12 h-12 rounded-full bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/20 dark:border-blue-500/30 flex items-center justify-center relative overflow-hidden shrink-0 shadow-sm">
                <div className="w-6 h-6 flex items-center justify-center font-black text-blue-600 dark:text-blue-500 italic">D</div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
               Different industries. <span className="text-blue-600 dark:text-blue-500">One operating layer.</span>
             </h3>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap shadow-xl shadow-blue-600/20 active:scale-95">
            Explore Customer Stories <ArrowRight className="w-4 h-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CustomerStoriesSection;
