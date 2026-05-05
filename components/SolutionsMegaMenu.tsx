"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Headset, 
  Rocket, 
  BarChart3, 
  Target,
  ArrowRight,
  Building2,
  Truck,
  GraduationCap,
  ShoppingBag,
  Heart,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Clock,
  MessageCircle,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const useCases = [
  {
    title: "Customer Success",
    description: "Improve retention, health scores, and drive expansion.",
    icon: Users,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
    active: true,
  },
  {
    title: "Support Operations",
    description: "Streamline tickets, automate workflows, and improve CSAT.",
    icon: Headset,
    color: "text-slate-600 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
  {
    title: "Onboarding",
    description: "Accelerate implementation, drive adoption, and reduce time to value.",
    icon: Rocket,
    color: "text-slate-600 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
  {
    title: "Revenue Operations",
    description: "Unify customer data, forecast accurately, and drive growth.",
    icon: BarChart3,
    color: "text-slate-600 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
  {
    title: "Executive Leadership",
    description: "Real-time visibility, actionable insights, and outcome reporting.",
    icon: Target,
    color: "text-slate-600 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
];

const industries = [
  { name: "SaaS", icon: Layers, active: true, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-500/10" },
  { name: "Fintech", icon: Building2, color: "text-slate-600 dark:text-slate-300", bgColor: "bg-slate-50 dark:bg-white/5" },
  { name: "Logistics", icon: Truck, color: "text-slate-600 dark:text-slate-300", bgColor: "bg-slate-50 dark:bg-white/5" },
  { name: "EdTech", icon: GraduationCap, color: "text-slate-600 dark:text-slate-300", bgColor: "bg-slate-50 dark:bg-white/5" },
  { name: "D2C / E-commerce", icon: ShoppingBag, color: "text-slate-600 dark:text-slate-300", bgColor: "bg-slate-50 dark:bg-white/5" },
  { name: "Healthcare", icon: Heart, color: "text-slate-600 dark:text-slate-300", bgColor: "bg-slate-50 dark:bg-white/5" },
];

const SolutionsMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
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
             <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Solutions</span>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
            {/* BROWSE BY USE CASE */}
            <div className="col-span-1 md:col-span-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Browse by Use Case</h3>
              <div className="space-y-1">
                {useCases.map((useCase) => (
                  <div 
                    key={useCase.title} 
                    className={cn(
                        "group flex items-start gap-4 p-3 rounded-xl transition-all cursor-pointer relative",
                        useCase.active ? "bg-slate-50 dark:bg-white/5" : "hover:bg-slate-50 dark:hover:bg-white/5/50"
                    )}
                  >
                    {useCase.active && (
                       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-full" />
                    )}
                    <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        useCase.active ? "bg-white text-indigo-600 shadow-sm" : "bg-slate-100 dark:bg-white/10 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:bg-indigo-500/10"
                    )}>
                      <useCase.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={cn("font-bold text-sm transition-colors", useCase.active ? "text-indigo-600" : "text-slate-700 dark:text-slate-200 group-hover:text-indigo-600")}>
                            {useCase.title}
                        </span>
                        <ChevronRight className={cn("w-4 h-4 text-slate-300 transition-all", useCase.active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0")} />
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pl-3">
                <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  View all use cases <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* EXPLORE BY INDUSTRY */}
            <div className="col-span-1 md:col-span-8 flex flex-col">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Explore by Industry</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {industries.map((industry) => (
                  <div 
                    key={industry.name}
                    className={cn(
                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer gap-2",
                        industry.active ? "border-indigo-100 bg-indigo-50 dark:bg-indigo-500/10/50 shadow-sm" : "border-slate-100 dark:border-white/5 hover:border-indigo-100 hover:bg-slate-50 dark:hover:bg-white/5"
                    )}
                  >
                    <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                        industry.active ? "bg-white text-indigo-600 shadow-sm" : "bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                    )}>
                        <industry.icon className="w-5 h-5" />
                    </div>
                    <span className={cn("text-[11px] font-bold text-center", industry.active ? "text-indigo-600" : "text-slate-600 dark:text-slate-300")}>
                        {industry.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* FEATURED CONTENT */}
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-100 dark:border-white/5 relative overflow-hidden flex-1 group cursor-pointer">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full uppercase">For SaaS Teams</span>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                            Scale customer success.<br />
                            Reduce churn. <span className="text-indigo-600">Drive expansion.</span>
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                            DexKor helps SaaS teams centralize customer data, predict risks early, and take action that drives measurable growth.
                        </p>

                        <div className="grid grid-cols-3 gap-4 py-2 border-y border-slate-200/50/50">
                            {[
                                { label: "Churn reduction", val: "28%", icon: TrendingUp, color: "text-indigo-600" },
                                { label: "Expansion revenue", val: "35%", icon: BarChart3, color: "text-blue-500" },
                                { label: "Faster to value", val: "40%", icon: Clock, color: "text-orange-500" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="flex items-center gap-1">
                                        <stat.icon className={cn("w-3 h-3", stat.color)} />
                                        <span className="text-sm font-bold">{stat.val}</span>
                                    </div>
                                    <p className="text-[9px] text-slate-400 dark:text-slate-500 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all">
                            Explore solutions for SaaS <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="hidden lg:block relative">
                         <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl dark:shadow-none border border-slate-100 dark:border-white/5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                             <div className="p-3 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-white/5/50">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Customer Health Overview</span>
                             </div>
                             <div className="p-3">
                                <img 
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                                    alt="Health Dashboard" 
                                    className="rounded-lg shadow-sm w-full h-full object-cover"
                                />
                             </div>
                         </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
             <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center shadow-sm border border-slate-200/50 dark:border-slate-800">
                      <Sparkles className="w-6 h-6 text-indigo-600" />
                   </div>
                   <div>
                      <h4 className="font-bold text-sm">Not sure where to start?</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-sm">Tell us about your goals and we'll recommend the right solution for your team.</p>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
                   <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Talk to our solution experts <ArrowRight className="w-4 h-4" />
                   </button>
                   
                   <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

                   <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                         {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Avatar" />
                            </div>
                         ))}
                      </div>
                      <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                         Trusted by <span className="font-bold text-slate-900 dark:text-white">500+</span> teams<br />
                         across <span className="font-bold text-slate-900 dark:text-white">20+</span> countries
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionsMegaMenu;
