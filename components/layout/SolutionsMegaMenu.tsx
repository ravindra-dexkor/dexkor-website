"use client";

import React, { useState } from "react";
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
  Layers,
  Monitor,
  ShieldCheck,
  Zap,
  Activity,
  ShoppingCart,
  AlertCircle,
  TrendingDown,
  DollarSign,
  MessageCircle,
  CheckCircle2,
  CheckCircle,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

const useCases = [
  {
    id: "cs",
    title: "Customer Success",
    description: "Improve retention, health scores, and drive expansion.",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    id: "support",
    title: "Support Operations",
    description: "Streamline tickets, automate workflows, and improve CSAT.",
    icon: Headset,
    color: "text-slate-700 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
  {
    id: "onboarding",
    title: "Onboarding",
    description: "Accelerate implementation, drive adoption, and reduce time to value.",
    icon: Rocket,
    color: "text-slate-700 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
  {
    id: "revops",
    title: "Revenue Operations",
    description: "Unify customer data, forecast accurately, and drive growth.",
    icon: BarChart3,
    color: "text-slate-700 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
  {
    id: "leadership",
    title: "Executive Leadership",
    description: "Real-time visibility, actionable insights, and outcome reporting.",
    icon: Target,
    color: "text-slate-700 dark:text-slate-300",
    bgColor: "bg-slate-50 dark:bg-white/5",
  },
];

const industries = [
  { id: "saas", name: "SaaS", icon: Layers },
  { id: "fintech", name: "FinTech", icon: Building2 },
  { id: "it", name: "IT / ITeS", icon: Monitor },
  { id: "services", name: "Services", icon: Users },
  { id: "logistics", name: "Logistics", icon: Truck },
  { id: "ecommerce", name: "D2C / E-commerce", icon: ShoppingBag },
  { id: "healthcare", name: "Healthcare", icon: Heart, disabled: true },
];

const industryContent: Record<string, any> = {
  saas: {
    tag: "FOR SAAS TEAMS",
    headline: "Scale customer success. Reduce churn. Drive expansion.",
    description: "DexKor helps SaaS teams centralize customer data, predict risks early, and take action that drives measurable growth.",
    stats: [
      { label: "Churn reduction", val: "28%", icon: TrendingUp, color: "text-blue-600" },
      { label: "Expansion revenue", val: "35%", icon: BarChart3, color: "text-blue-500" },
      { label: "Faster to value", val: "40%", icon: Clock, color: "text-orange-500" },
    ],
    buttonText: "Explore solutions for SaaS",
    image: "/images/DexKor Customer success analytics dashboard.png",
    imageTitle: "Customer Overview"
  },
  fintech: {
    tag: "FOR FINTECH TEAMS",
    headline: "Monitor transactions. Detect risks early. Ensure compliance.",
    description: "DexKor helps FinTech teams track transactions, surface risk signals, and maintain compliance across every interaction.",
    stats: [
      { label: "Risk detection accuracy", val: "42%", icon: ShieldCheck, color: "text-emerald-600" },
      { label: "Faster incident response", val: "35%", icon: Zap, color: "text-blue-500" },
      { label: "Fraud escalation reduction", val: "28%", icon: Activity, color: "text-red-500" },
    ],
    buttonText: "Explore solutions for FinTech",
    image: "/images/DexKor Finance dashboard for transaction monitoring.png",
    imageTitle: "Transaction Monitoring"
  },
  it: {
    tag: "FOR IT / ITES TEAMS",
    headline: "Deliver exceptional service. Improve SLAs. Increase customer loyalty.",
    description: "DexKor helps IT/ITeS teams unify ticketing data, monitor service health, and drive proactive customer success.",
    stats: [
      { label: "Faster Ticket Resolution", val: "32%", icon: Clock, color: "text-blue-600" },
      { label: "SLA Compliance Improvement", icon: ShieldCheck, val: "28%", color: "text-emerald-500" },
      { label: "Customer Satisfaction Increase", val: "24%", icon: TrendingUp, color: "text-purple-500" },
    ],
    buttonText: "Explore solutions for IT / ITeS",
    image: "/images/DexKor IT service overview dashboard interface.png",
    imageTitle: "IT Service Overview"
  },
  services: {
    tag: "FOR SERVICES TEAMS",
    headline: "Stronger relationships. Better delivery. Long-term growth.",
    description: "DexKor helps Services teams centralize client data, track engagement health, and deliver outcomes that drive retention and expansion.",
    stats: [
      { label: "Improvement in Client Retention", val: "30%", icon: TrendingUp, color: "text-emerald-600" },
      { label: "Increase in Upsell Revenue", val: "25%", icon: Zap, color: "text-blue-500" },
      { label: "Faster Resolution of Issues", val: "35%", icon: Clock, color: "text-orange-500" },
    ],
    buttonText: "Explore solutions for Services",
    image: "/images/services_preview.png",
    imageTitle: "Client Success Overview"
  },
  logistics: {
    tag: "FOR LOGISTICS TEAMS",
    headline: "Optimize deliveries. Reduce delays. Delight customers.",
    description: "DexKor helps logistics teams unify shipment data, identify exceptions early, and maintain on-time delivery performance.",
    stats: [
      { label: "Improvement in On-time Delivery", val: "23%", icon: Truck, color: "text-blue-600" },
      { label: "Reduction in Delivery Delays", val: "32%", icon: AlertCircle, color: "text-orange-500" },
      { label: "Lower Logistics Costs", val: "18%", icon: TrendingDown, color: "text-emerald-600" },
    ],
    buttonText: "Explore solutions for Logistics",
    image: "/images/Logistics overview dashboard UI DexKor.png",
    imageTitle: "Logistics Overview"
  },
  ecommerce: {
    tag: "FOR D2C / E-COMMERCE TEAMS",
    headline: "Delight customers. Increase retention. Drive repeat purchases.",
    description: "DexKor helps D2C brands understand customer behavior, improve support experiences, and grow LTV.",
    stats: [
      { label: "Increase in Repeat Purchases", val: "28%", icon: ShoppingCart, color: "text-emerald-600" },
      { label: "Improvement in Retention Rate", val: "32%", icon: Users, color: "text-blue-500" },
      { label: "Growth in Customer LTV", val: "25%", icon: DollarSign, color: "text-orange-500" },
    ],
    buttonText: "Explore solutions for D2C / E-commerce",
    image: "/images/Logistics overview dashboard UI DexKor.png",
    imageTitle: "Customer Success Overview"
  }
};

const useCaseContent: Record<string, any> = {
  support: {
    tag: "FOR SUPPORT TEAMS",
    headline: "Deliver omnichannel support. Resolve faster. Delight every customer.",
    description: "DexKor helps support teams unify conversations, automate workflows, and resolve issues faster across every channel.",
    stats: [
      { label: "Faster First Response", val: "35%", icon: Clock, color: "text-blue-600" },
      { label: "Increase in CSAT", val: "32%", icon: CheckCircle2, color: "text-emerald-500" },
      { label: "Reduction in Ticket Volume", val: "28%", icon: TrendingDown, color: "text-indigo-500" },
    ],
    buttonText: "Explore solutions for Support Operations",
    image: "/images/DexKor Support operations dashboard overview.png",
    imageTitle: "Support Operations Overview"
  },
  onboarding: {
    tag: "FOR IMPLEMENTATION TEAMS",
    headline: "Accelerate onboarding. Drive adoption. Achieve time to value faster.",
    description: "DexKor helps implementation teams plan, track, and deliver projects on time while keeping stakeholders aligned at every step.",
    stats: [
      { label: "Faster Time to Value", val: "35%", icon: Clock, color: "text-blue-600" },
      { label: "Improvement in On-time Delivery", val: "30%", icon: CheckCircle2, color: "text-emerald-500" },
      { label: "Increase in Adoption", val: "25%", icon: Users, color: "text-indigo-500" },
    ],
    buttonText: "Explore solutions for Onboarding",
    image: "/images/onboarding_preview.png",
    imageTitle: "Implementation Overview"
  },
  revops: {
    tag: "FOR REVENUE TEAMS",
    headline: "Unify data. Align teams. Accelerate revenue. Drive predictable growth.",
    description: "DexKor helps revenue teams connect CRM, automate processes, and deliver insights that drive pipeline, performance, and revenue.",
    stats: [
      { label: "Increase in Win Rate", val: "28%", icon: Activity, color: "text-blue-600" },
      { label: "Improvement in Forecast Accuracy", val: "32%", icon: CheckCircle2, color: "text-emerald-500" },
      { label: "Increase in Revenue", val: "40%", icon: TrendingUp, color: "text-indigo-500" },
    ],
    buttonText: "Explore solutions for Revenue Operations",
    image: "/images/DexKor Revenue operations dashboard overview.png",
    imageTitle: "Revenue Operations Overview"
  },
  leadership: {
    tag: "FOR EXECUTIVE LEADERS",
    headline: "See what matters. Act with confidence. Drive sustainable growth.",
    description: "DexKor gives CXOs a unified real-time view of customers, operations, and growth—so you can make smarter decisions and lead with impact.",
    stats: [
      { label: "Unified view of customers & ops", val: "360°", icon: Eye, color: "text-blue-600" },
      { label: "Data-driven decisions", val: "Faster", icon: TrendingUp, color: "text-emerald-500" },
      { label: "Measurable business impact", val: "Better", icon: Target, color: "text-indigo-500" },
    ],
    buttonText: "Explore solutions for Executive Leadership",
    image: "/images/DexKor Executive Overiview.png",
    imageTitle: "Executive Overview"
  }
};

const SolutionsMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [selectedUseCase, setSelectedUseCase] = useState<string>("cs");
  const [selectedIndustry, setSelectedIndustry] = useState("saas");

  // Determine which content to show
  const activeContent = selectedUseCase && selectedUseCase !== "cs" && useCaseContent[selectedUseCase]
    ? useCaseContent[selectedUseCase]
    : industryContent[selectedIndustry];

  const industrySelectionEnabled = selectedUseCase === "cs";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-2 right-2 lg:left-6 lg:right-6 top-full mt-1 rounded-[32px] bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl text-slate-900 dark:text-white transition-colors shadow-2xl z-[110] border border-slate-200/50 dark:border-white/10 overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide w-auto"
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

          <div className="max-w-full mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-4">

            {/* COLUMN 1: BROWSE BY USE CASE */}
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">BROWSE BY USE CASE</h3>
              <div className="space-y-1">
                {useCases.map((useCase) => (
                  <div
                    key={useCase.id}
                    onClick={() => setSelectedUseCase(useCase.id)}
                    className={cn(
                      "group flex items-start gap-4 p-3 rounded-2xl transition-all cursor-pointer relative",
                      selectedUseCase === useCase.id ? "bg-white dark:bg-white/10 shadow-sm" : "hover:bg-white/50 dark:hover:bg-white/5"
                    )}
                  >
                    {selectedUseCase === useCase.id && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />
                    )}
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all",
                      selectedUseCase === useCase.id ? "bg-blue-50 text-blue-600" : "bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 group-hover:bg-blue-50"
                    )}>
                      <useCase.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={cn("font-bold text-sm transition-colors", selectedUseCase === useCase.id ? "text-blue-600" : "text-slate-700 dark:text-slate-200 group-hover:text-blue-600")}>
                          {useCase.title}
                        </span>
                        <ChevronRight className={cn("w-4 h-4 text-slate-300 transition-all", selectedUseCase === useCase.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0")} />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight font-medium">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pl-3 pt-4 border-t border-slate-100 dark:border-white/5">
                <button className="text-blue-600 text-xs font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View all use cases <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* COLUMN 2 & 3: EXPLORE BY INDUSTRY & CONTENT */}
            <div className="col-span-1 md:col-span-9 flex flex-col">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">EXPLORE BY INDUSTRY</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
                {industries.map((industry) => (
                  <div
                    key={industry.id}
                    onClick={() => {
                      if (industrySelectionEnabled && !industry.disabled) {
                        setSelectedIndustry(industry.id);
                      }
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center p-2 rounded-2xl border transition-all gap-2 relative overflow-hidden",
                      industrySelectionEnabled ? "cursor-pointer" : "cursor-default",
                      selectedIndustry === industry.id && industrySelectionEnabled
                        ? "border-blue-200 bg-white dark:bg-white/10 shadow-lg dark:shadow-none"
                        : "border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-transparent hover:border-blue-100 hover:bg-white",
                      (industry.disabled || !industrySelectionEnabled) && "opacity-40 grayscale",
                      !industrySelectionEnabled && "hover:border-slate-200 hover:bg-slate-50/50"
                    )}
                  >
                    {/* {industry.disabled && industrySelectionEnabled && (
                      <div className="absolute top-1 right-0 left-0 text-center">
                         <span className="text-xs font-black bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded uppercase tracking-widest">Coming Soon</span>
                      </div>
                    )} */}
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-sm",
                      selectedIndustry === industry.id && industrySelectionEnabled ? "bg-blue-600 text-white" : "bg-white dark:bg-white/5 text-slate-400"
                    )}>
                      <industry.icon className="w-5 h-5" />
                    </div>
                    <span className={cn("text-xs font-black text-center uppercase tracking-tighter", selectedIndustry === industry.id && industrySelectionEnabled ? "text-blue-600" : "text-slate-500 dark:text-slate-400")}>
                      {industry.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* DYNAMIC FEATURED CONTENT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedUseCase || selectedIndustry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/50 dark:bg-slate-900/40 rounded-[32px] p-4 border border-slate-200 dark:border-white/5 relative overflow-hidden flex-1 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-6 space-y-2">
                      <span className="text-xs font-black bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">{activeContent.tag}</span>
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                        {activeContent.headline.split('.').map((part: string, i: number) => (
                          <React.Fragment key={i}>
                            {part}{i < activeContent.headline.split('.').length - 1 && "."}
                          </React.Fragment>
                        ))}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {activeContent.description}
                      </p>

                      <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-200/50 dark:border-white/5">
                        {activeContent.stats.map((stat: any) => (
                          <div key={stat.label}>
                            <div className="flex items-center gap-1.5 mb-1">
                              <stat.icon className={cn("w-4 h-4", stat.color)} />
                              <span className="text-sm font-black">{stat.val}</span>
                            </div>
                            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider leading-tight">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-xs font-black  tracking-widest flex items-center gap-2 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                        {activeContent.buttonText} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="lg:col-span-6 relative">
                      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 max-h-[320px] flex flex-col">
                        <div className="p-2 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 shrink-0">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          </div>
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{activeContent.imageTitle}</span>
                        </div>
                        <div className="p-1 flex-1 min-h-0">
                          <img
                            src={activeContent.image}
                            alt={activeContent.imageTitle}
                            className="rounded-xl shadow-sm w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* FOOTER BAR */}
          <div className="bg-white dark:bg-white/5 border-t border-slate-200 dark:border-white/10">
            <div className="max-w-full mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100 dark:border-blue-500/20">
                  <Sparkles className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900 dark:text-white leading-tight">Not sure where to start?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1">Tell us about your goals and we'll recommend the right solution</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-10">
                <button className="text-blue-600 text-xs font-black  tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Talk to our solution experts <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-4 border-l border-slate-200 dark:border-white/10 pl-10">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">
                    Trusted by <span className="text-slate-900 dark:text-white">500+</span> teams<br />
                    across <span className="text-slate-900 dark:text-white">20+</span> countries
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
