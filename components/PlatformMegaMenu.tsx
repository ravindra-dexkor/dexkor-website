"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Rocket, 
  LifeBuoy, 
  Users, 
  Sparkles, 
  Clock, 
  Zap, 
  ShieldCheck, 
  FileText, 
  Globe,
  Settings,
  Database,
  ArrowRight,
  PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const coreModules = [
  {
    title: "SalesHub",
    description: "Manage pipeline, forecast revenue, and drive expansion.",
    icon: BarChart3,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    title: "OnboardHub",
    description: "Streamline implementation, track milestones, and accelerate adoption.",
    icon: Rocket,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  {
    title: "HelpDesk",
    description: "Deliver omnichannel support, meet SLAs, and automate resolutions.",
    icon: LifeBuoy,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
  },
  {
    title: "AccountCare",
    description: "Monitor health, prevent churn, and maximize renewals.",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-500/10",
  },
];

const intelligenceLayer = [
  { title: "Ask Dexy", description: "Get answers from your customer data." },
  { title: "Auto QA", description: "Automatically review and score interactions." },
  { title: "Predictive Signals", description: "Identify risks and opportunities early." },
  { title: "Workflow Copilot", description: "Recommend next best actions." },
];

const platformFoundation = [
  { title: "Unified Timeline", icon: Clock },
  { title: "Integrations", icon: Zap },
  { title: "Workflow Automation", icon: Settings },
  { title: "Security & Compliance", icon: ShieldCheck },
  { title: "Analytics & Reporting", icon: Database },
  { title: "APIs & SDKs", icon: FileText },
];

const PlatformMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-2 right-2 lg:left-6 lg:right-6 top-full mt-2 rounded-2xl bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl text-slate-900 dark:text-white transition-colors shadow-2xl z-[110] border border-slate-200/50 dark:border-white/10 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide w-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* MOBILE BACK BUTTON */}
          <div className="lg:hidden px-6 py-4 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex items-center justify-between">
             <button 
                onClick={onClose}
                className="flex items-center gap-2 text-blue-600 font-bold"
             >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Menu
             </button>
             <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Platform</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
            {/* CORE MODULES */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Core Modules</h3>
              <div className="space-y-4">
                {coreModules.map((module) => (
                  <div key={module.title} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-sm", module.bgColor)}>
                      <module.icon className={cn("w-4.5 h-4.5", module.color)} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-[13px] group-hover:text-blue-600 transition-colors">{module.title}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="text-blue-600 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  View all modules <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* INTELLIGENCE LAYER */}
            <div className="col-span-1 md:col-span-4 border-l-0 md:border-l border-slate-100 dark:border-white/5 pl-0 md:pl-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Intelligence Layer</h3>
              
              <div className="bg-purple-50/50 dark:bg-purple-500/10 rounded-xl p-3 mb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">Dexy AI</span>
                    <span className="text-xs font-bold bg-purple-200 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded uppercase">Powered by AI</span>
                  </div>
                </div>
                <div className="space-y-3 ml-11">
                  {intelligenceLayer.map((item) => (
                    <div key={item.title}>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full" />
                        <span className="font-semibold text-xs text-slate-900 dark:text-slate-200">{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 mt-6">Platform Foundation</h3>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-2">
                {platformFoundation.map((item) => (
                  <div key={item.title} className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-6 h-6 bg-blue-50 dark:bg-blue-500/10 rounded flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <item.icon className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium group-hover:text-blue-600 transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="text-blue-600 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Explore all capabilities <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* PLATFORM SPOTLIGHT */}
            <div className="col-span-1 md:col-span-5 border-l-0 md:border-l border-slate-100 dark:border-white/5 pl-0 md:pl-8 flex flex-col">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Platform Spotlight</h3>
              
              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full uppercase">Live Preview</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  Everything connected.<br />
                  <span className="text-blue-600">One unified timeline.</span>
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-sm">
                  See every customer interaction, across every channel and team, in a single AI-powered workspace.
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-semibold cursor-pointer group">
                  <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Watch how it works (2:15)</span>
                </div>

                <div className="mt-3 flex-1 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 overflow-hidden relative group cursor-pointer">
                  <div className="p-4 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                     </div>
                     <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">Unified Timeline</span>
                  </div>
                  <div className="p-2">
                    {/* Placeholder for dashboard image */}
                    <div className="aspect-video bg-white rounded-lg shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center overflow-hidden">
                       <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=50&w=700" 
                        alt="Dashboard Preview" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       />
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                   <button className="w-full bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-indigo-600 px-4 py-2 sm:px-5 sm:py-2 rounded-full text-[15px] font-bold transition-colors border border-slate-100 dark:border-white/5">
                      Explore the Platform →
                   </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
             <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-200/50">
                      <ShieldCheck className="w-6 h-6 text-blue-600" />
                   </div>
                   <div>
                      <h4 className="font-bold text-sm">Enterprise-grade by design</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Built with security, scalability, and reliability at the core.</p>
                   </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                   {[
                     { label: "SOC 2 Type II", icon: ShieldCheck },
                     { label: "ISO 27001 Certified", icon: ShieldCheck },
                     { label: "GDPR Compliant", icon: ShieldCheck },
                     { label: "99.9% Uptime SLA", icon: Clock },
                   ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                         <item.icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                         <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{item.label}</span>
                      </div>
                   ))}
                   <button className="ml-4 text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Visit Security Center <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlatformMegaMenu;
