"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  Settings, 
  ShieldCheck, 
  Globe, 
  Star, 
  Lock, 
  Rocket,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const NextStepSection = () => {
  const cards = [
    {
      label: "FOR GTM & CX LEADERS",
      title: "Business Leaders",
      icon: Users,
      desc: "See how DexKor unifies sales, onboarding, support, and success.",
      cta: "Book Strategy Demo",
      color: "purple",
      theme: {
        bg: "bg-purple-50 dark:bg-purple-500/10",
        border: "border-purple-100 dark:border-purple-500/20",
        iconBg: "bg-purple-100 dark:bg-purple-500/20",
        icon: "text-purple-600 dark:text-purple-400",
        button: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20",
        label: "bg-purple-100/50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
      }
    },
    {
      label: "FOR OPS & IMPLEMENTATION",
      title: "Operations Teams",
      icon: Settings,
      desc: "Explore workflows, integrations, migration, and rollout.",
      cta: "Explore Platform",
      color: "blue",
      theme: {
        bg: "bg-blue-50 dark:bg-blue-500/10",
        border: "border-blue-100 dark:border-blue-500/20",
        iconBg: "bg-blue-100 dark:bg-blue-500/20",
        icon: "text-blue-600 dark:text-blue-400",
        button: "bg-blue-600 hover:bg-blue-500 shadow-blue-500/20",
        label: "bg-blue-100/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
      }
    },
    {
      label: "FOR IT & SECURITY",
      title: "Technical Buyers",
      icon: ShieldCheck,
      desc: "Review APIs, architecture, compliance, and deployment.",
      cta: "Visit Trust Center",
      color: "teal",
      theme: {
        bg: "bg-teal-50 dark:bg-teal-500/10",
        border: "border-teal-100 dark:border-teal-500/20",
        iconBg: "bg-teal-100 dark:bg-teal-500/20",
        icon: "text-teal-600 dark:text-teal-400",
        button: "bg-teal-700 hover:bg-teal-600 shadow-teal-500/20",
        label: "bg-teal-100/50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400",
      }
    }
  ];

  const pillars = [
    { icon: Globe, title: "Built in India", desc: "Engineering excellence" },
    { icon: Star, title: "Global customers", desc: "Across 20+ countries" },
    { icon: Lock, title: "Enterprise-grade", desc: "Security & reliability" },
    { icon: Rocket, title: "AI-native platform", desc: "Built for what's next" },
  ];

  return (
    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Choose Your Next Step</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
            However you evaluate software— <br />
            <span className="text-blue-600 dark:text-blue-500">DexKor is ready.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto font-medium">
            Whether you're exploring, comparing, validating security, or planning migration—start where your team needs to.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center",
                card.theme.bg,
                card.theme.border
              )}
            >
              <div className={cn(
                "px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-8",
                card.theme.label
              )}>
                {card.label}
              </div>

              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110",
                card.theme.iconBg
              )}>
                <card.icon className={cn("w-8 h-8", card.theme.icon)} />
              </div>

              <h4 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {card.title}
              </h4>
              
              <div className="w-12 h-0.5 bg-slate-200 dark:bg-white/10 mb-6" />

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-10 flex-grow">
                {card.desc}
              </p>

              <button className={cn(
                "w-full px-4 py-2 sm:px-5 sm:py-2 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg",
                card.theme.button
              )}>
                {card.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Closing Tagline */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16 lg:mb-24">
            <div className="flex items-center gap-3 py-4 px-6 bg-blue-50/50 dark:bg-blue-500/5 rounded-full border border-blue-100 dark:border-blue-500/10">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    No pressure. No hard sell. Just clarity.
                </span>
            </div>
        </div>

        {/* Bottom Pillars */}
        <div className="pt-12 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <pillar.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-1">
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest leading-none">{pillar.title}</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-500 font-medium leading-tight">{pillar.desc}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default NextStepSection;
