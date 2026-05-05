"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  ClipboardList, 
  Headset, 
  TrendingUp, 
  TrendingDown, 
  Puzzle, 
  Clock, 
  AlertTriangle,
  Cloud,
  Leaf,
  BarChart,
  CircleAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

// Running dashed line SVG
const HorizontalLine = ({ className }: { className?: string }) => (
  <div className={cn("absolute top-6 left-[60%] w-[80%] h-[2px] hidden lg:block z-0 pointer-events-none overflow-hidden", className)}>
    <svg width="100%" height="100%" preserveAspectRatio="none">
      <motion.line 
        x1="0" y1="1" x2="100%" y2="1" 
        stroke="#ef4444" 
        strokeWidth="2" 
        strokeDasharray="6 6"
        animate={{ strokeDashoffset: [0, -24] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
        opacity="0.5"
      />
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#040814] rounded-full p-0.5 z-10">
      <CircleAlert className="w-4 h-4 text-red-500 fill-red-50 dark:fill-red-950" />
    </div>
  </div>
);


const ProblemSection = () => {
  return (
    <section className="relative w-full py-10 lg:py-16 bg-slate-50/50 dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-3xl">
          <span className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-widest">— THE PROBLEM</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Point solutions manage stages.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">They don't manage the journey.</span>
          </h2>
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            Most B2B companies still rely on separate tools for sales, onboarding, support, and customer success—creating broken handoffs, fragmented intelligence, and revenue leakage as they scale.
          </p>
        </div>

        {/* TOP STAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 relative z-10">
          
          {/* Stage 1: Sales */}
          <div className="relative flex flex-col items-center text-center group">
            <HorizontalLine />
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center border border-blue-100 dark:border-blue-500/20 mb-4 shadow-sm z-10 relative">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-bold text-lg">Sales</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Win the deal</p>
            
            <div className="mt-4 w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all group-hover:border-slate-300 dark:group-hover:border-white/20">
               <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mb-3">Common tools</p>
               <div className="flex items-center justify-center gap-4">
                  {/* HubSpot Mock */}
                  <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-200 text-xs tracking-tight">
                     <span className="text-[#ff7a59]">Hub</span>Spot
                  </div>
                  {/* Salesforce Mock */}
                  <div className="flex items-center gap-1 font-bold text-[#00a1e0] text-xs tracking-tight">
                     <Cloud className="w-4 h-4 fill-[#00a1e0]" /> Salesforce
                  </div>
               </div>
            </div>
          </div>

          {/* Stage 2: Onboarding */}
          <div className="relative flex flex-col items-center text-center group">
            <HorizontalLine />
            <div className="w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20 mb-4 shadow-sm z-10 relative">
              <ClipboardList className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="font-bold text-lg">Onboarding</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Implement & activate</p>
            
            <div className="mt-4 w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all group-hover:border-slate-300 dark:group-hover:border-white/20">
               <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mb-3">Common tools</p>
               <div className="flex items-center justify-center gap-2 font-bold text-slate-800 dark:text-white text-xs tracking-tight">
                  <span className="text-blue-600">»</span> rocketlane
               </div>
            </div>
          </div>

          {/* Stage 3: Support */}
          <div className="relative flex flex-col items-center text-center group">
            <HorizontalLine />
            <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/20 mb-4 shadow-sm z-10 relative">
              <Headset className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="font-bold text-lg">Support</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Resolve & respond</p>
            
            <div className="mt-4 w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all group-hover:border-slate-300 dark:group-hover:border-white/20">
               <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mb-3">Common tools</p>
               <div className="flex items-center justify-center gap-4">
                  {/* Zendesk Mock */}
                  <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-white text-[11px] tracking-tight">
                     <div className="w-4 h-4 bg-emerald-700 rounded-sm flex items-center justify-center text-[8px] text-white">Z</div> zendesk
                  </div>
                  {/* Freshworks Mock */}
                  <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-white text-[11px] tracking-tight">
                     <Leaf className="w-3 h-3 text-emerald-500" /> freshworks
                  </div>
               </div>
            </div>
          </div>

          {/* Stage 4: Success */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center border border-purple-100 dark:border-purple-500/20 mb-4 shadow-sm z-10 relative">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-bold text-lg">Success</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Retain & expand</p>
            
            <div className="mt-4 w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all group-hover:border-slate-300 dark:group-hover:border-white/20">
               <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mb-3">Common tools</p>
               <div className="flex items-center justify-center gap-1 font-bold text-slate-800 dark:text-white text-xs tracking-tight">
                  <BarChart className="w-4 h-4 text-[#00b4e6]" /> Gainsight
               </div>
            </div>
          </div>

        </div>

        {/* DOWNWARD CONNECTIONS (Desktop only) */}
        <div className="hidden lg:block relative h-16 w-full z-0">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible text-red-500">
                {/* Paths to Card 1 (16.6%) */}
                <motion.path d="M 12.5 0 C 12.5 50, 16.6 50, 16.6 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" animate={{strokeDashoffset:[0,-12]}} transition={{repeat:Infinity, ease:"linear", duration:1}} vectorEffect="non-scaling-stroke" opacity="0.3" />
                <motion.path d="M 37.5 0 C 37.5 50, 16.6 50, 16.6 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" animate={{strokeDashoffset:[0,-12]}} transition={{repeat:Infinity, ease:"linear", duration:1}} vectorEffect="non-scaling-stroke" opacity="0.3" />
                
                {/* Paths to Card 2 (50%) */}
                <motion.path d="M 37.5 0 C 37.5 50, 50 50, 50 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" animate={{strokeDashoffset:[0,-12]}} transition={{repeat:Infinity, ease:"linear", duration:1}} vectorEffect="non-scaling-stroke" opacity="0.3" />
                <motion.path d="M 62.5 0 C 62.5 50, 50 50, 50 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" animate={{strokeDashoffset:[0,-12]}} transition={{repeat:Infinity, ease:"linear", duration:1}} vectorEffect="non-scaling-stroke" opacity="0.3" />
                
                {/* Paths to Card 3 (83.3%) */}
                <motion.path d="M 62.5 0 C 62.5 50, 83.3 50, 83.3 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" animate={{strokeDashoffset:[0,-12]}} transition={{repeat:Infinity, ease:"linear", duration:1}} vectorEffect="non-scaling-stroke" opacity="0.3" />
                <motion.path d="M 87.5 0 C 87.5 50, 83.3 50, 83.3 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" animate={{strokeDashoffset:[0,-12]}} transition={{repeat:Infinity, ease:"linear", duration:1}} vectorEffect="non-scaling-stroke" opacity="0.3" />
            </svg>

            {/* Downward Arrowheads */}
            <div className="absolute left-[16.6%] bottom-[-5px] hidden lg:block text-red-500 opacity-50 -translate-x-1/2">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <div className="absolute left-[50%] bottom-[-5px] hidden lg:block text-red-500 opacity-50 -translate-x-1/2">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <div className="absolute left-[83.3%] bottom-[-5px] hidden lg:block text-red-500 opacity-50 -translate-x-1/2">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
        </div>

        {/* BOTTOM CONSEQUENCE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mt-12 lg:mt-0">
           
           {/* Card 1 */}
           <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-xl shadow-red-500/5 dark:shadow-none flex items-start gap-5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center shrink-0">
                 <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <div>
                 <div className="text-red-500 font-bold text-xs mb-1">01</div>
                 <h4 className="font-bold text-lg mb-2">Revenue Leakage</h4>
                 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                   Poor handoffs slow onboarding, reduce service quality, and miss expansion opportunities.
                 </p>
              </div>
           </div>

           {/* Card 2 */}
           <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-xl shadow-orange-500/5 dark:shadow-none flex items-start gap-5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center shrink-0">
                 <Puzzle className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                 <div className="text-orange-500 font-bold text-xs mb-1">02</div>
                 <h4 className="font-bold text-lg mb-2">Fragmented Tools</h4>
                 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                   Every team has a tool. No team has the full customer picture.
                 </p>
              </div>
           </div>

           {/* Card 3 */}
           <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-xl shadow-red-500/5 dark:shadow-none flex items-start gap-5 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center shrink-0">
                 <Clock className="w-6 h-6 text-red-500" />
              </div>
              <div>
                 <div className="text-red-500 font-bold text-xs mb-1">03</div>
                 <h4 className="font-bold text-lg mb-2">Reactive Operations</h4>
                 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                   Risks are discovered after escalation—not when signals first appear.
                 </p>
              </div>
           </div>

        </div>

        {/* BOTTOM BANNER */}
        <div className="mt-8 lg:mt-12 w-full relative">
           {/* Center Alert Icon */}
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-50/50 dark:bg-[#02040a] px-4 z-10">
              <AlertTriangle className="w-6 h-6 text-red-500" />
           </div>
           
           <div className="w-full py-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-center shadow-sm relative z-0">
              <span className="font-bold text-sm md:text-xl text-slate-900 dark:text-white tracking-tight">
                The result? <span className="text-red-500">Lower efficiency. Weaker retention.</span> <span className="text-blue-600 dark:text-blue-400">Slower growth.</span>
              </span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
