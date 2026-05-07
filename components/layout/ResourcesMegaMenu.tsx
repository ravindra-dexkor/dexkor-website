"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Code2, 
  ArrowRight,
  Search,
  Headset,
  FileText,
  Video,
  FileSearch,
  History,
  Activity,
  ChevronDown,
  GraduationCap,
  Sparkles,
  BarChart3,
  Globe,
  Database,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const learnLinks = ["Blog", "Playbooks", "Guides & Ebooks", "Webinars", "Research Reports", "Events"];
const techLinks = ["Documentation", "API Reference", "Integrations", "SDKs & Tools", "Changelog", "Status"];

const trendingNow = [
  { type: "BLOG", title: "10 Customer Success Metrics That Actually Drive Growth", time: "2 days ago", icon: BarChart3, color: "text-purple-600", bgColor: "bg-purple-50" },
  { type: "WEBINAR", title: "AI in Support: From Automation to Augmentation", time: "5 days ago", icon: Video, color: "text-emerald-600", bgColor: "bg-emerald-50 dark:bg-emerald-500/10" },
  { type: "GUIDE", title: "The Complete Guide to Onboarding That Delivers ROI", time: "1 week ago", icon: FileText, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-500/10" },
  { type: "DEVELOPER DOCS", title: "Getting Started with the DexKor API", time: "1 week ago", icon: Code2, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-500/10" },
  { type: "REPORT", title: "2026 Customer Support Benchmarks", time: "2 weeks ago", icon: Activity, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-500/10" },
];

const learningPaths = [
  "Revenue Growth",
  "Support Excellence",
  "Customer Success 101",
  "AI in Customer Operations",
  "Onboarding Best Practices"
];

const ResourcesMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-2 right-2 lg:left-6 lg:right-6 top-full mt-1 rounded-2xl bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl text-slate-900 dark:text-white transition-colors shadow-2xl z-[110] border border-slate-200/50 dark:border-white/10 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide w-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* MOBILE BACK BUTTON */}
          <div className="lg:hidden px-6 py-4 border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/5 flex items-center justify-between">
             <button 
                onClick={onClose}
                className="flex items-center gap-2 text-indigo-600 font-bold"
             >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Menu
             </button>
             <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Resources</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6">
            {/* BROWSE RESOURCES */}
            <div className="col-span-1 md:col-span-3 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Browse Resources</h3>
                <div className="space-y-4">
                    {/* Learn */}
                    <div className="group cursor-pointer">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Learn</h4>
                                    <p className="text-xs text-slate-400 dark:text-slate-500">Guides, playbooks, and insights.</p>
                                </div>
                            </div>
                            <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" />
                        </div>
                        <ul className="pl-12 grid grid-cols-1 gap-2">
                            {learnLinks.map(link => (
                                <li key={link} className="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 cursor-pointer flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technical */}
                    <div className="group cursor-pointer">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                    <Code2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Technical</h4>
                                    <p className="text-xs text-slate-400 dark:text-slate-500">Docs and developer tools.</p>
                                </div>
                            </div>
                            <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <ul className="pl-12 grid grid-cols-1 gap-2">
                            {techLinks.map(link => (
                                <li key={link} className="text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 cursor-pointer flex items-center gap-2">
                                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
              <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all pl-12">
                View all resources <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* FEATURED RESOURCE */}
            <div className="col-span-1 md:col-span-6 border-x-0 md:border-x border-slate-100 dark:border-white/5 px-0 md:px-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">Featured Resource</h3>
              
              <div className="bg-gradient-to-br from-[#f8f9ff] to-[#f0f2ff] dark:from-slate-900 dark:to-slate-900/80 rounded-3xl p-8 border border-white dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden group cursor-pointer mb-6">
                {/* Decorative background pulse */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -mr-32 -mt-32" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                    <div className="space-y-5">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">2026 Benchmark Report</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                            State of Customer<br />
                            Growth <span className="text-indigo-600">2026</span>
                        </h2>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                            Key data and insights from 500+ B2B companies on what's driving customer growth and retention.
                        </p>
                        <button className="bg-indigo-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none">
                            Read the report <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    
                    <div className="relative flex justify-center">
                        {/* Book Cover Design */}
                        <div className="w-[200px] aspect-[1/1.4] bg-[#0a0c14] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden transform group-hover:scale-[1.03] transition-transform duration-500">
                            {/* Wavy Lines SVG */}
                            <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-40">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,150 Q50,130 100,150 T200,150" />
                                    <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,160 Q50,140 100,160 T200,160" />
                                    <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,170 Q50,150 100,170 T200,170" />
                                    <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,180 Q50,160 100,180 T200,180" />
                                    <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,140 Q50,120 100,140 T200,140" />
                                </svg>
                            </div>

                            <div className="relative h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-1.5 mb-8">
                                        <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                                            <span className="text-xs text-white font-black italic">D</span>
                                        </div>
                                        <span className="text-xs font-bold text-white tracking-widest">DEXKOR</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xl font-bold text-indigo-400/80">2026</span>
                                        <h3 className="text-xl font-bold text-white leading-tight">
                                            State of<br />
                                            Customer<br />
                                            Growth
                                        </h3>
                                    </div>
                                </div>
                                <div className="space-y-1 text-xs text-slate-400 dark:text-slate-500 font-medium">
                                    <p>500+ companies</p>
                                    <p>20+ industries</p>
                                    <p>Global insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                 {[
                    { label: "Companies surveyed", val: "500+", icon: Database },
                    { label: "Industries covered", val: "20+", icon: Cpu },
                    { label: "Global regions", val: "5", icon: Globe },
                    { label: "Key benchmarks", val: "15+", icon: Sparkles },
                 ].map((stat) => (
                    <div key={stat.label} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <stat.icon className="w-3 h-3 text-indigo-400" />
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{stat.val}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight">{stat.label}</p>
                    </div>
                 ))}
              </div>

              {/* Learning Paths */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                 <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 dark:border-white/5">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">Learning Paths</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Curated paths to build your expertise.</p>
                    </div>
                 </div>
                 <div className="flex flex-wrap gap-2 mb-4">
                    {learningPaths.map(path => (
                        <button key={path} className="px-3 py-1.5 bg-white border border-slate-200/50 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-indigo-200 hover:text-indigo-600 transition-all flex items-center gap-1">
                            {path} <ArrowRight className="w-3 h-3" />
                        </button>
                    ))}
                 </div>
                 <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View all paths <ArrowRight className="w-3 h-3" />
                 </button>
              </div>
            </div>

            {/* TRENDING NOW */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">Trending Now</h3>
              <div className="space-y-3">
                {trendingNow.map((item) => (
                  <div key={item.title} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer">
                    <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", item.bgColor, item.color)}>
                        <item.icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1">
                        <span className={cn("text-xs font-bold tracking-widest", item.color)}>{item.type}</span>
                        <h5 className="text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight group-hover:text-indigo-600 transition-colors">{item.title}</h5>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{item.time}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-200 group-hover:text-indigo-400 transition-colors" />
                  </div>
                ))}
              </div>
              <button className="mt-6 text-indigo-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View all trending <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
             <div className="max-w-full mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 max-w-2xl w-full">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-600 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Can't find what you're looking for? Search our resources..."
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all text-slate-900 dark:text-white"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <button className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors font-bold text-xs">
                        <Headset className="w-4 h-4" />
                        Contact support <ArrowRight className="w-3 h-3" />
                    </button>
                    <button className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors font-bold text-xs">
                        <FileSearch className="w-4 h-4" />
                        Request a resource <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResourcesMegaMenu;
