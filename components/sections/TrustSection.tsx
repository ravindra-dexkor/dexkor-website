"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Code2, 
  ArrowRight,
  Globe,
  Building2,
  Cloud,
  Sparkles,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const TrustCard = ({ 
  title, 
  icon: Icon, 
  features,
  index
}: { 
  title: string; 
  icon: any; 
  features: string[];
  index: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 shadow-sm transition-all hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/[0.02]"
  >
    <div className="flex items-center gap-4 mb-5">
      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center transition-transform group-hover:scale-110">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    
    <ul className="space-y-2.5">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const TrustSection = () => {
  const trustCards = [
    {
      title: "Security",
      icon: ShieldCheck,
      features: ["Role-based access", "SSO / SAML", "Encryption at rest", "Audit logs"]
    },
    {
      title: "Reliability",
      icon: Activity,
      features: ["99.9% uptime", "Real-time monitoring", "Auto failover", "Incident visibility"]
    },
    {
      title: "Compliance",
      icon: CheckCircle2,
      features: ["SOC 2 ready", "GDPR aligned", "DPA support", "Regional hosting"]
    },
    {
      title: "Extensibility",
      icon: Code2,
      features: ["REST APIs", "Webhooks", "Custom workflows", "Open integrations"]
    }
  ];

  const pillars = [
    { icon: Globe, label: "API-first" },
    { icon: Building2, label: "Enterprise-ready" },
    { icon: Cloud, label: "Global deployment" },
    { icon: Sparkles, label: "AI-native" }
  ];
  
  const dots = [...Array(12)];

  return (
    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] overflow-hidden transition-colors duration-300">
      
      {/* 1. Background Dot Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] dark:opacity-[0.1]"
           style={{
             backgroundImage: `radial-gradient(circle, #64748b 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />

      {/* 2. Premium Data Beams & Nodes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Horizontal Beams */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={`h-beam-${i}`}
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
            style={{ top: `${20 + i * 20}%` }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 1.5 
              }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
            />
          </div>
        ))}
        
        {/* Vertical Beams */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={`v-beam-${i}`}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
            style={{ left: `${25 + i * 25}%` }}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "200%" }}
              transition={{ 
                duration: 10 + i * 3, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 2 
              }}
              className="h-1/3 w-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
            />
          </div>
        ))}

        {/* Floating Intersecting Nodes */}
        {[...Array(8)].map((_, i) => (
           <motion.div
             key={`node-${i}`}
             className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/40"
             initial={{ opacity: 0 }}
             animate={{ 
               opacity: [0, 0.6, 0],
               scale: [0.5, 1.2, 0.5],
             }}
             transition={{ 
               duration: 4 + i, 
               repeat: Infinity, 
               delay: i * 1.2 
             }}
             style={{ 
               left: `${(i * 13) % 100}%`, 
               top: `${(i * 17) % 100}%`,
               filter: 'blur(1px) drop-shadow(0 0 4px #3b82f6)' 
             }}
           />
        ))}
      </div>

      {/* 3. Refined Background Globe Graphic */}
      <div className="absolute left-[-150px] bottom-[-150px] w-[800px] h-[800px] pointer-events-none opacity-[0.6] dark:opacity-[0.25]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-200 dark:text-blue-900/30">
          <defs>
            <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          <circle cx="100" cy="100" r="95" fill="url(#globe-glow)" />
          
          {/* Animated Globe Wireframes */}
          {[80, 65, 50].map((r, i) => (
            <motion.circle 
              key={r}
              cx="100" cy="100" r={r} fill="none" 
              stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6"
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
          
          {[1, 2, 3].map((i) => (
             <motion.ellipse 
               key={i}
               cx="100" cy="100" rx={90 - i * 10} ry={30 + i * 5} 
               fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 4"
               animate={{ rotate: 360 }}
               transition={{ duration: 30 + i * 15, repeat: Infinity, ease: "linear" }}
             />
          ))}

          {/* Pulse Nodes on Globe */}
          <motion.circle cx="80" cy="60" r="2.5" fill="#3b82f6" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="120" cy="140" r="2" fill="#3b82f6" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
          <motion.circle cx="150" cy="90" r="1.5" fill="#3b82f6" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Enterprise Trust</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white mb-5">
                Enterprise-grade <br />
                by design. <br />
                <span className="text-blue-600 dark:text-blue-500">Not added later.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                Security, compliance, reliability, extensibility, and AI governance—built into DexKor from day one.
              </p>
              <button className="group bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 dark:shadow-none">
                Explore Trust Center 
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {trustCards.map((card, idx) => (
              <TrustCard key={idx} {...card} index={idx} />
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 lg:mt-12 w-full p-1.5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/10 shadow-sm"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-white/5 bg-slate-50/50 dark:bg-transparent rounded-[22px]">
            {pillars.map((pillar, idx) => (
              <div key={idx} className={cn(
                "flex items-center justify-center gap-4 py-6 px-4",
              )}>
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-500/20">
                  <pillar.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
