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
  PlayCircle,
  LayoutGrid,
  Share2,
  HardDrive
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const customerJourney = [
  {
    title: "SalesHub",
    badge: "Pre-Sales",
    description: "Capture, qualify, and convert opportunities with full pipeline visibility.",
    icon: BarChart3,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    title: "CX Suite",
    badge: "Post-Sales",
    description: "Manage onboarding, support, and customer success in one unified system.",
    icon: LayoutGrid,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-500/10",
  },
  {
    title: "OnboardHub",
    badge: "Project Management",
    description: "Plan, track, and deliver implementation projects with automation.",
    icon: Rocket,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  {
    title: "HelpDesk",
    badge: "Omnichannel Support",
    description: "Provide fast, consistent support across all channels.",
    icon: LifeBuoy,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-500/10",
  },
  {
    title: "AccountCare",
    badge: "Customer Success",
    description: "Drive retention, reduce churn, and unlock expansion opportunities.",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-500/10",
  },
];

const intelligenceLayer = [
  [
    { title: "Ask Dexy", desc: "Org GPT, ask anything" },
    { title: "Dexy Studio", desc: "Build custom AI agents and train the system AI features" },
    { title: "AI Fields", desc: "Setup AI custom fields on tickets like category, subcategory, sentiment, etc." },
    { title: "Copilot", desc: "Get answers based on customer conversations" },
    { title: "Auto QA", desc: "Quality audits of all customer interactions" },
    { title: "Signals", desc: "Auto ticket categorization and triaging" }
  ],
  [
    { title: "Session IQ", desc: "Proactively identify user session insights to debug issues" },
    { title: "Bug Bridge", desc: "Identify frontend issues and send to engineering to fix before customers raise" },
    { title: "Summarization", desc: "Summarize the overall conversation" },
    { title: "AI Observation", desc: "Dexy observation of what actually happened on the ticket" },
    { title: "AI Suggestion", desc: "Dexy suggestion for agent on what should have been done" },
    { title: "Suggested Reply", desc: "Reply that can be sent to the customer based on last message" }
  ]
];

const coreCapabilities = [
  { title: "Unified Timeline", icon: Clock },
  { title: "Integrations", icon: Share2 },
  { title: "APIs & Webhooks", icon: Globe },
  { title: "Workflow Automation", icon: Settings },
  { title: "Security & Compliance", icon: ShieldCheck },
  { title: "Data & Export", icon: HardDrive },
  { title: "Analytics & Reporting", icon: Database },
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
          className="absolute left-2 right-2 lg:left-6 lg:right-6 top-full mt-1 rounded-2xl bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl text-slate-900 dark:text-white transition-colors shadow-2xl z-[110] border border-slate-200/50 dark:border-white/10 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide w-auto"
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

          <div className="max-w-full mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8">
            
            {/* COLUMN 1: CUSTOMER JOURNEY */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">CUSTOMER JOURNEY</h3>
              <div className="space-y-5">
                {customerJourney.map((module) => (
                  <div key={module.title} className="group flex items-start gap-4 p-1 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-all cursor-pointer">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110", module.bgColor)}>
                      <module.icon className={cn("w-5 h-5", module.color)} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors">{module.title}</span>
                        <span className={cn("text-xs font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter", module.bgColor, module.color)}>
                          {module.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-medium">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5">
                <button className="text-blue-600 text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore all modules <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* COLUMN 2: INTELLIGENCE & CAPABILITIES */}
            <div className="col-span-1 md:col-span-4 border-l border-slate-100 dark:border-white/5 pl-8">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">INTELLIGENCE LAYER</h3>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-50 dark:bg-purple-500/10 rounded-xl flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <span className="font-black text-lg text-slate-900 dark:text-white">Dexy AI</span>
                  <p className="text-xs text-slate-400 font-bold leading-none mt-1 uppercase">AI that understands your customers</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {intelligenceLayer.map((col, cIdx) => (
                  <div key={cIdx} className="space-y-4">
                    {col.map((item) => (
                      <div key={item.title} className="flex items-start gap-3 group cursor-pointer">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 group-hover:scale-150 transition-transform shrink-0" />
                        <div>
                          <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 transition-colors leading-none block">{item.title}</span>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6 pt-6 border-t border-slate-100 dark:border-white/5">CORE CAPABILITIES</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                {coreCapabilities.map((item) => (
                  <div key={item.title} className="flex items-center gap-2.5 group cursor-pointer">
                    <div className="w-7 h-7 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5">
                <button className="text-blue-600 text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore all capabilities <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* COLUMN 3: PLATFORM SPOTLIGHT */}
            <div className="col-span-1 md:col-span-5 border-l border-slate-100 dark:border-white/5 pl-8 flex flex-col">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">PLATFORM SPOTLIGHT</h3>
              
              <div className="flex-1 flex flex-col">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-3">
                  Everything connected.<br />
                  <span className="text-blue-600">One unified timeline.</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm font-medium leading-relaxed mb-6">
                  See every customer interaction, across every channel and team, in a single AI-powered workspace.
                </p>
                
                <div className="flex items-center gap-2.5 text-blue-600 text-xs font-black cursor-pointer group mb-6">
                  <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform fill-blue-600/10" />
                  <span className="uppercase tracking-widest">Watch how it works (2:15)</span>
                </div>

                <div className="flex-1 bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden  max-h-[320px] relative group shadow-2xl">
                   <div className="p-3 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                         <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Unified Timeline</span>
                   </div>
                   <div className="p-2 h-full">
                      <img 
                        src="/images/dashboard_preview.png" 
                        alt="Dashboard Preview" 
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                </div>

                <div className="mt-8">
                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                      Explore the Platform →
                   </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BAR: SECURITY & COMPLIANCE */}
          <div className="bg-white dark:bg-white/5 border-t border-slate-200 dark:border-white/10">
             <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100 dark:border-blue-500/20">
                      <ShieldCheck className="w-7 h-7 text-blue-600" />
                   </div>
                   <div>
                      <h4 className="font-black text-sm text-slate-900 dark:text-white leading-tight">Enterprise-grade by design</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">Built with security, scalability, and reliability</p>
                   </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                   {[
                     { label: "SOC Type II", val: "Compliant" },
                     { label: "ISO 27001", val: "Compliant" },
                     { label: "GDPR", val: "Compliant" },
                     { label: "99.99%", val: "Uptime SLA" },
                   ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                         <ShieldCheck className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                         <div className="flex flex-col">
                            <span className="text-xs font-black text-slate-900 dark:text-white leading-none mb-1">{item.label}</span>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">{item.val}</span>
                         </div>
                      </div>
                   ))}
                   <button className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all border-l border-slate-200 dark:border-white/10 pl-8">
                      Security Center <ArrowRight className="w-4 h-4" />
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
