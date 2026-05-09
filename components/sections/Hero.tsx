"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Play, ShieldCheck, FileCheck, Globe, Award,
  Users, MessageSquare, BarChart3, Headset, Heart, TrendingUp,
  Plus, Search, Bell, ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Hub Card ──────────────────────────────────────────────── */
const HubCard = ({
  title, desc, stat, statColor, icon: Icon, iconBg, iconColor, delay,
  position
}: {
  title: string; desc: string; stat: string; statColor: string;
  icon: React.ElementType; iconBg: string; iconColor: string;
  delay: number; position: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className={cn(
      "absolute bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-3 w-[155px] elevation-2",
      position
    )}
  >
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center gap-2.5">

        <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0", iconBg)}>
          <Icon className={cn("w-4 h-4", iconColor)} />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-xs text-slate-900 dark:text-white leading-tight">{title}</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{desc}</p>
        </div>
      </div>
      <div className={cn("mt-1.5 inline-flex text-[10px] font-bold px-1.5 py-0.5 rounded-full", statColor)}>
        {stat}
      </div>
    </div>
  </motion.div>
);

/* ─── Mini Dashboard ─────────────────────────────────────────── */
const MiniDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.6 }}
    className="w-full bg-white dark:bg-[#0a0e1a] rounded-2xl border border-slate-200 dark:border-white/10 elevation-3 overflow-hidden"
    style={{ maxHeight: 210 }}
  >
    {/* Titlebar */}
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/5">
      {/* <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
        <span className="text-white font-black text-xs italic"><img src="./images/logo.png" alt="DexKor" /></span>
      </div> */}
      {/* <span className="text-xs font-black text-slate-900 dark:text-white tracking-widest uppercase">DEXKOR</span> */}
      <img src="/images/logowhite.png" alt="Dexkor Logo" className="bg-blue-600 rounded-md px-2 py-1 h-5" />

      <div className="ml-auto flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-slate-400" />
        <Bell className="w-3.5 h-3.5 text-slate-400" />
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-white text-[9px] font-black">AR</span>
        </div>
      </div>
    </div>

    <div className="flex h-full" style={{ height: 175 }}>
      {/* Sidebar */}
      <div className="w-28 border-r border-slate-100 dark:border-white/5 py-2 shrink-0 bg-white dark:bg-[#0a0e1a]">
        {["Dashboards", "Customers", "Convo", "Tickets", "Reports", "Insights"].map((item, i) => (
          <div key={item} className={cn("flex items-center gap-2 px-3 py-1.5 cursor-pointer",
            i === 0 ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600" : "text-slate-500 dark:text-slate-500 hover:bg-slate-50"
          )}>
            <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", i === 0 ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600")} />
            <span className="text-[9px] font-bold">{item}</span>
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 p-3 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-900 dark:text-white">Executive Overview</span>
          <div className="flex items-center gap-1 text-[9px] text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full">
            Last 30 days <ChevronDown className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-5 gap-2 mb-2">
          {[
            { label: "Total Sales", val: "$24.8M", trend: "+18.7%", up: true },
            { label: "Gross Margin", val: "64.2%", trend: "+2.6%", up: true },
            { label: "NPS Score", val: "72", trend: "+6 pts", up: true },
            { label: "Retention", val: "91.5%", trend: "+3.4%", up: true },
            { label: "CSAT", val: "4.6/5", trend: "+0.4", up: true },
          ].map((k) => (
            <div key={k.label} className="bg-slate-50 dark:bg-white/5 rounded-lg p-1.5">
              <p className="text-[8px] text-slate-500 dark:text-slate-400 leading-none mb-0.5">{k.label}</p>
              <p className="text-[10px] font-black text-slate-900 dark:text-white leading-none">{k.val}</p>
              <p className="text-[8px] text-emerald-500 font-bold mt-0.5">{k.trend}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-3 gap-2">
          {/* Sales Trend */}
          <div className="bg-slate-50 dark:bg-white/5 rounded-lg p-1.5">
            <p className="text-[8px] font-bold text-slate-500 mb-1">Sales Trend</p>
            <svg viewBox="0 0 80 30" className="w-full h-8">
              <polyline points="0,25 15,20 30,22 45,10 60,12 75,5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
              <polyline points="0,25 15,20 30,22 45,10 60,12 75,5 75,30 0,30" fill="url(#blueGrad)" opacity="0.2" />
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Tickets by Channel */}
          <div className="bg-slate-50 dark:bg-white/5 rounded-lg p-1.5">
            <p className="text-[8px] font-bold text-slate-500 mb-1">Tickets by Channel</p>
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 30 30" className="w-8 h-8 shrink-0">
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#e2e8f0" strokeWidth="6" />
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#6366f1" strokeWidth="6"
                  strokeDasharray="27 75" strokeDashoffset="0" />
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#3b82f6" strokeWidth="6"
                  strokeDasharray="19 75" strokeDashoffset="-27" />
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#a855f7" strokeWidth="6"
                  strokeDasharray="15 75" strokeDashoffset="-46" />
              </svg>
              <div className="space-y-0.5">
                {[["Email", "36%", "#6366f1"], ["Chat", "26%", "#3b82f6"], ["Phone", "20%", "#a855f7"]].map(([l, v, c]) => (
                  <div key={l} className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c }} />
                    <span className="text-[7px] text-slate-500">{l}</span>
                    <span className="text-[7px] font-bold text-slate-700 dark:text-slate-300 ml-auto">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Customer Health */}
          <div className="bg-slate-50 dark:bg-white/5 rounded-lg p-1.5">
            <p className="text-[8px] font-bold text-slate-500 mb-1">Customer Health</p>
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 30 30" className="w-8 h-8 shrink-0">
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#e2e8f0" strokeWidth="6" />
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#22c55e" strokeWidth="6"
                  strokeDasharray="43 75" strokeDashoffset="0" />
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#f59e0b" strokeWidth="6"
                  strokeDasharray="20 75" strokeDashoffset="-43" />
                <circle cx="15" cy="15" r="12" fill="transparent" stroke="#ef4444" strokeWidth="6"
                  strokeDasharray="11 75" strokeDashoffset="-63" />
              </svg>
              <div className="space-y-0.5">
                {[["Healthy", "58%", "#22c55e"], ["At Risk", "27%", "#f59e0b"], ["Churn", "15%", "#ef4444"]].map(([l, v, c]) => (
                  <div key={l} className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c }} />
                    <span className="text-[7px] text-slate-500">{l}</span>
                    <span className="text-[7px] font-bold text-slate-700 dark:text-slate-300 ml-auto">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ─── Main Hero ──────────────────────────────────────────────── */
const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  return (
    <section className="relative w-full h-[90dvh] min-h-[650px] flex flex-col overflow-hidden bg-white dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300">

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bfdbfe_1px,transparent_1px),linear-gradient(to_bottom,#bfdbfe_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-20" />
      </div>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 relative z-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 lg:gap-10 items-center w-full">

          {/* LEFT */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                AI-Native Customer Experience Platform
              </span>
            </motion.div> */}

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-3xl lg:text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white"
            >

              AI-native{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">support</span> platform for the entire customer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">lifecycle.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md font-medium"
            >
              DexKor unifies every customer touchpoint from acquisition and onboarding to support, success, and expansion, to reduce churn, increase retention, and drive growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="flex items-center gap-3"
            >
              <a href="https://calendly.com/richard-dexkor/dexkor-demo-call-with-founder" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25">
                Book Demo <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-slate-700 dark:fill-white ml-0.5" />
                </div>
                Watch 3-min Overview
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="flex flex-wrap items-center gap-8 pt-1 mt-4"
            >
              {[
                { icon: ShieldCheck, label: "SOC 2", sub: "Compliant" },
                { icon: FileCheck, label: "GDPR", sub: "Ready" },
                { icon: Award, label: "ISO 27001", sub: "Compliant" },
                { icon: Globe, label: "Built for", sub: "Global Teams" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-slate-500 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{label}</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">{sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-start mt-4 gap-6 pt-1 border-t border-slate-100 dark:border-white/5"
            >
              {[
                { icon: Users, val: "500+", label: "users trust us" },
                { icon: MessageSquare, val: "1M+", label: "customer interactions handled monthly" },
                { icon: ShieldCheck, val: "99.99%", label: "platform uptime (SLA)" },
              ].map(({ icon: Icon, val, label }) => (
                <div key={val} className="flex items-start  gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-slate-900 dark:text-white leading-none">{val}</p>
                    <p className="text-xs text-slate-500 leading-tight mt-0.5 min-w-[150px] max-w-[150px]">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex flex-col gap-3 relative">

            {/* AI Hub diagram */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-[260px] select-none"
            >
              {/* Connection SVG */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <defs>
                  <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
                    <circle cx="2" cy="2" r="1.5" fill="#3b82f6" />
                  </marker>
                </defs>

                {/* Dashed circular orbit (stretched to ellipse by preserveAspectRatio="none") */}
                <circle cx="50" cy="50" r="43.3" fill="none" stroke="#60a5fa" strokeWidth="0.3" strokeDasharray="2 3" opacity="0.6" className="dark:stroke-white/10" />

                {/* Lines from cards to center */}
                <line x1="17" y1="22" x2="50" y2="50" stroke="#60a5fa" strokeWidth="0.3" strokeDasharray="2 2" markerEnd="url(#dot)" opacity="0.6" />
                <line x1="83" y1="22" x2="50" y2="50" stroke="#60a5fa" strokeWidth="0.3" strokeDasharray="2 2" markerEnd="url(#dot)" opacity="0.6" />
                <line x1="17" y1="78" x2="50" y2="50" stroke="#60a5fa" strokeWidth="0.3" strokeDasharray="2 2" markerEnd="url(#dot)" opacity="0.6" />
                <line x1="83" y1="78" x2="50" y2="50" stroke="#60a5fa" strokeWidth="0.3" strokeDasharray="2 2" markerEnd="url(#dot)" opacity="0.6" />

                {/* Rotating orbit dots along the ellipse */}
                <motion.g
                  initial={{ rotate: 225 }} // Starts exactly at SalesHub (top-left)
                  animate={{ rotate: 225 + 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50px 50px" }}
                >
                  {/* The dot on the circle radius (43.3) */}
                  <circle cx="93.3" cy="50" r="1" fill="#2563eb" style={{ filter: "drop-shadow(0 0 2px #3b82f6)" }} />
                  <circle cx="6.7" cy="50" r="0.6" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 2px #60a5fa)" }} />
                </motion.g>

                {/* Animated traveling dots (center connections) */}
                {[
                  { x1: 17, y1: 22, x2: 50, y2: 50, delay: 0 },
                  { x1: 83, y1: 22, x2: 50, y2: 50, delay: 1 },
                  { x1: 17, y1: 78, x2: 50, y2: 50, delay: 0.5 },
                  { x1: 83, y1: 78, x2: 50, y2: 50, delay: 1.5 },
                ].map((p, i) => (
                  <motion.circle
                    key={i} r="0.8" fill="#3b82f6"
                    style={{ filter: "drop-shadow(0 0 2px #60a5fa)" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [p.x1, p.x2], cy: [p.y1, p.y2], opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: p.delay, repeatDelay: 1 }}
                  />
                ))}
              </svg>

              {/* Center hub */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-[150px] h-[150px] rounded-full bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-500/30 elevation-3 glow-3 flex flex-col items-center justify-center gap-1 relative">
                  <div className="absolute inset-0 rounded-full border border-blue-300/40 dark:border-blue-500/20 scale-110 animate-ping opacity-20" />
                  <div className="w-25 h-25 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-0.5">
                    {/* <span className="text-white font-black text-xl italic">D</span> */}
                    <img src="/images/Dexy_AI_LOGO.svg" alt="Dexkor Logo" className="w-25 h-25 rounded-full" />
                  </div>
                  {/* <span className="text-xs font-black text-slate-900 dark:text-white tracking-wider">DEXY AI</span> */}
                  {/* <span className="text-[9px] text-slate-500 dark:text-slate-400 text-center leading-none px-2">Embedded Intelligence<br/>Across the Journey</span> */}
                </div>
              </motion.div>

              {/* 4 cards */}
              <HubCard title="SalesHub" desc="Win and grow revenue" stat="+ 32% Pipeline" statColor="text-blue-600 bg-blue-50 dark:bg-blue-500/10"
                icon={BarChart3} iconBg="bg-blue-50 dark:bg-blue-500/10" iconColor="text-blue-600" delay={0.4} position="top-0 left-0" />
              <HubCard title="OnboardHub" desc="Accelerate time to value" stat="+ 40% Onboarding" statColor="text-violet-600 bg-violet-50 dark:bg-violet-500/10"
                icon={Users} iconBg="bg-violet-50 dark:bg-violet-500/10" iconColor="text-violet-600" delay={0.5} position="top-0 right-0" />
              <HubCard title="AccountCare" desc="Drive retention and expansion" stat="+ 25% Expansion" statColor="text-orange-600 bg-orange-50 dark:bg-orange-500/10"
                icon={Heart} iconBg="bg-orange-50 dark:bg-orange-500/10" iconColor="text-orange-600" delay={0.7} position="bottom-0 right-0" />
              <HubCard title="HelpDesk" desc="Deliver exceptional support" stat="+ 28% Resolution" statColor="text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10"
                icon={Headset} iconBg="bg-emerald-50 dark:bg-emerald-500/10" iconColor="text-emerald-600" delay={0.6} position="bottom-0 left-0" />

            </motion.div>

            {/* Dashboard preview */}
            <MiniDashboard />
          </div>
        </div>
      </div>

      {/* ── Bottom replacement bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full border-t border-slate-200 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02] backdrop-blur-sm py-3 px-6 relative z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-between">
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0">
            Replace <span className="text-pink-500">6+</span> disconnected tools<br className="hidden sm:block" />
            with one AI-native operating system.
          </p>
          <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
            {[
              { name: "Asana", src: "/logos/asana.png" },
              { name: "Freshdesk", src: "/logos/freshdesk.png" },
              { name: "Freshworks", src: "/logos/freshworks.png" },
              { name: "Gainsight", src: "/logos/gainsight.jpg" },
              { name: "Zendesk", src: "/logos/zendesk.png" },
              { name: "Zoho", src: "/logos/zoho.png" },
              { name: "Jira", src: "/logos/jira.png" },
            ].map((logo, i, arr) => (
              <React.Fragment key={logo.name}>
                <div className="flex items-center justify-center w-22 h-8 bg-white dark:bg-white/5 rounded-md border border-slate-200 dark:border-white/10 shadow-sm p-0 px-2 hover:scale-110 transition-transform">
                  <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" title={logo.name} />
                </div>
                {i < arr.length - 1 && <Plus className="w-2.5 h-2.5 text-slate-500 dark:text-slate-700 shrink-0" />}
              </React.Fragment>
            ))}
            <motion.div
              className="mr-8 ml-8"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
            </motion.div>
            <div className="flex items-center gap-1.5 bg-blue-600 px-3 py-1 rounded-full">
              {/* <span className="text-white font-black text-xs tracking-wider">DEXKOR</span> */}
              <img src="/images/logowhite.png" alt="Dexkor Logo" className=" h-4" />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 9999 }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsVideoModalOpen(false)}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 z-10 ring-1 ring-white/10"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 group"
            >
              <span className="sr-only">Close video</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/L_rz59tkQFg?si=lCj1Mm4uLKB2K0cS?autoplay=1"
              title="DexKor Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full bg-slate-900"
            ></iframe>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
