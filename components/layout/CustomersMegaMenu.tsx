"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  BarChart3,
  Calculator,
  ArrowLeftRight,
  ArrowRight,
  Zap,
  TrendingDown,
  Quote,
  Cloud,
  Building2,
  Truck,
  GraduationCap,
  Heart,
  ShoppingBag,
  PlusCircle,
  PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const exploreCustomers = [
  {
    title: "Customer Stories",
    description: "Real stories from teams achieving measurable impact.",
    icon: Users,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
  },
  {
    title: "Success Metrics",
    description: "See how teams drive growth with DexKor.",
    icon: BarChart3,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  {
    title: "ROI Calculator",
    description: "Estimate the impact DexKor can drive for your business.",
    icon: Calculator,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-500/10",
  },
  {
    title: "Migration Stories",
    description: "How teams replaced fragmented stacks with DexKor.",
    icon: ArrowLeftRight,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
  },
];

const industries = [
  { name: "SaaS", icon: Cloud },
  { name: "Fintech", icon: Building2 },
  { name: "Logistics", icon: Truck },
  { name: "EdTech", icon: GraduationCap },
  { name: "Healthcare", icon: Heart },
  { name: "eCommerce", icon: ShoppingBag },
];

const CustomersMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
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
              className="flex items-center gap-2 text-blue-600 font-bold"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Menu
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400">Customers</span>
          </div>

          <div className="max-w-full mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8">
            {/* FEATURED STORY */}
            <div className="col-span-1 md:col-span-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-6">Featured Story</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-400">
                    <Truck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Logistics SaaS</span>
                  </div>

                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-[1.1]">
                    <span className="text-indigo-600">28% faster</span><br />
                    resolution.
                  </h2>

                  <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed max-w-md">
                    How a leading logistics SaaS unified support, onboarding, and success to deliver exceptional customer experiences at scale.
                  </p>

                  <div className="grid grid-cols-3 gap-6 py-4 border-y border-slate-100 dark:border-white/5">
                    {[
                      { label: "Faster resolution", val: "28%", desc: "Across all channels", icon: Zap, color: "text-indigo-600" },
                      { label: "Lower churn", val: "22%", desc: "In 6 months", icon: TrendingDown, color: "text-blue-500" },
                      { label: "Higher NPS", val: "35%", desc: "Customer satisfaction", icon: BarChart3, color: "text-emerald-500" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="flex items-center gap-1">
                          <stat.icon className={cn("w-3 h-3", stat.color)} />
                          <span className="text-lg font-bold">{stat.val}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{stat.label}</p>
                        <p className="text-xs text-slate-700 dark:text-slate-400">{stat.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* <div className="flex items-center gap-6 pt-2">
                    <button className="bg-indigo-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
                      View full story <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="text-indigo-600 text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      View all stories <ArrowRight className="w-4 h-4" />
                    </button>
                  </div> */}
                </div>

                <div className="relative group">
                  <div className="h-[320px] rounded-3xl overflow-hidden shadow-2xl relative w-full">
                    <img
                      src="./images/logistics_story_header.png"
                      alt="Logistics Story"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">
                          <Quote className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-sm font-medium leading-relaxed italic">
                          "DexKor gave us the visibility and automation we needed to scale without compromising on customer experience."
                        </p>
                      </div>
                      <div className="flex items-center gap-3 pl-14">
                        <img src="https://i.pravatar.cc/100?u=rohit" className="w-8 h-8 rounded-full border-2 border-white/20" alt="Rohit" />
                        <div>
                          <p className="text-xs font-bold">Rohit Mehta</p>
                          <p className="text-xs text-white/60">VP of Customer Success, TransloadX</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPLORE CUSTOMERS */}
            <div className="col-span-1 md:col-span-4 border-l-0 md:border-l border-slate-100 dark:border-white/5 pl-0 md:pl-10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-6">Explore Customers</h3>

              <div className="space-y-1">
                {exploreCustomers.map((item) => (
                  <div key={item.title} className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors", item.bgColor, item.color)}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 transition-colors">{item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-400 mt-0.5 leading-tight">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-2 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10/50 border border-indigo-100 flex items-center justify-between group cursor-pointer hover:bg-indigo-50 dark:bg-indigo-500/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[4, 5].map((i) => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i + 15}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-tight">
                    Trusted by <span className="text-indigo-600">500+</span><br />
                    customer-centric teams
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
              </div> */}
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-stretch justify-between gap-8">
              {/* EXPLORE BY INDUSTRY */}
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Explore by Industry</h3>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
                  {[
                    { name: "SaaS", icon: Cloud, active: false },
                    { name: "Fintech", icon: Building2 },
                    { name: "Logistics", icon: Truck },
                    { name: "EdTech", icon: GraduationCap },
                    { name: "Healthcare", icon: Heart },
                    { name: "eCommerce", icon: ShoppingBag },
                  ].map((industry) => (
                    <div key={industry.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                        industry.active ? "bg-white text-indigo-600 shadow-sm border border-indigo-100" : "bg-white border border-transparent group-hover:border-slate-200/50"
                      )}>
                        <industry.icon className={cn("w-5 h-5", industry.active ? "text-indigo-600" : "text-slate-900 dark:text-white")} />
                      </div>
                      <span className={cn("text-xs font-bold transition-colors", industry.active ? "text-indigo-600" : "text-slate-700 dark:text-slate-300 group-hover:text-indigo-600")}>
                        {industry.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VERTICAL DIVIDER */}
              <div className="hidden md:block w-px bg-slate-200 mx-4" />

              {/* TRUSTED BY */}
              <div className="flex-[0.8] flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Trusted by Innovative Companies</h3>
                  <div className="flex items-center gap-4 opacity-100  hover:grayscale-0 hover:opacity-100 transition-all duration-500 mt-4">
                    <img src="/logos/ZOPPING.png" alt="Zopping" className="h-6 w-auto object-contain" />
                    <img src="/logos/RAPISHIP.png" alt="Rapiship" className="h-6 w-auto object-contain" />
                    <img src="/logos/srd_logistics.png" alt="SRD Logistics" className="h-6 w-auto object-contain" />
                    <img src="/logos/UNICOMMERCE.jpg" alt="Unicommerce" className="h-6 w-auto object-contain" />
                    <img src="/logos/squreops.png" alt="SquareOps" className="h-6 w-auto object-contain" />
                    <img src="/logos/getnos.png" alt="GetNos" className="h-10 w-15 object-contain" />
                  </div>
                </div>
                {/* <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all mt-4">
                  View all customers <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomersMegaMenu;
