"use client";

import React from "react";
import {
  ArrowRight, Globe, ShieldCheck, BookOpen, Code2,
  Users2, Activity, Shield, Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Social icon SVGs ─────────────────────────────────────────── */
const LinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);
const YouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const GitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* ── Nav columns (matching reference image exactly) ───────────── */
const navCols = [
  {
    title: "PLATFORM", icon: Users2, color: "text-blue-600 dark:text-blue-400",
    links: ["SalesHub", "OnboardHub", "HelpDesk", "AccountCare", "Dexy AI"],
    cta: "View all modules",
  },
  {
    title: "SOLUTIONS", icon: Users2, color: "text-blue-600 dark:text-blue-400",
    links: ["Customer Success", "Support Operations", "Revenue Teams", "Leadership Teams", "Industry Use Cases"],
    cta: "See solutions",
  },
  {
    title: "RESOURCES", icon: BookOpen, color: "text-blue-600 dark:text-blue-400",
    links: ["Customer Stories", "Benchmarks", "Playbooks", "ROI Calculator", "Migration Guide"],
    cta: "Explore resources",
  },
  {
    title: "DEVELOPERS", icon: Code2, color: "text-blue-600 dark:text-blue-400",
    links: ["API Docs", "Webhooks", "Status", "Release Notes"],
    cta: "Visit developer hub",
  },
];

/* ── Integration logos (text pills, reference image shows brand logos) */
const integrations = [
  { name: "slack",    color: "#611f69", text: "slack"    },
  { name: "Jira",    color: "#0052cc", text: "Jira"     },
  { name: "Google",  color: "#4285f4", text: "G"        },
  { name: "HubSpot", color: "#ff7a59", text: "HubSpot"  },
  { name: "Teams",   color: "#6264a7", text: "Teams"    },
  { name: "WhatsApp",color: "#25d366", text: "WhatsApp" },
];

/* ── Footer stats ─────────────────────────────────────────────── */
const footerStats = [
  { icon: Users2,    val: "50K+",  label: "Customer profiles unified",         color: "text-blue-600 dark:text-blue-400",    bg: "bg-blue-50 dark:bg-blue-500/10"   },
  { icon: Activity,  val: "120K+", label: "Events processed monthly",          color: "text-emerald-600 dark:text-emerald-400",bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  { icon: Shield,    val: "99.9%", label: "Enterprise-grade reliability (Uptime)", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-500/10" },
];

/* ── Compliance badges ────────────────────────────────────────── */
const badges = [
  { icon: Shield,      label: "SOC 2",      sub: "Compliant"  },
  { icon: ShieldCheck, label: "ISO 27001",   sub: "Ready"      },
  { icon: Lock,        label: "GDPR",        sub: "Compliant"  },
];

/* ── Main Footer ──────────────────────────────────────────────── */
const Footer = () => (
  <footer className="relative w-full bg-white dark:bg-[#030712] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/5 overflow-hidden">

    {/* ── TOP: Logo/desc + 4 nav columns ── */}
    <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">

        {/* Brand column */}
        <div className="space-y-5">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
              <img src="/images/logowhite.png" alt="DexKor" className="w-7 h-7 object-contain"
                onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">DEXKOR</span>
          </div>

          {/* Tagline */}
          <div>
            <h3 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white mb-2">
              The Operating System<br />
              for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">Customer Success.</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xs">
              Unify customer data, AI insights, and execution across onboarding, support, and growth—from one intelligent platform.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {[
              { Icon: LinkedIn, color: "hover:text-[#0077b5]", bg: "hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30" },
              { Icon: XIcon,   color: "hover:text-slate-900 dark:hover:text-white", bg: "hover:bg-slate-100 dark:hover:bg-white/10" },
              { Icon: YouTube, color: "hover:text-red-600", bg: "hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-300/50 dark:hover:border-red-500/30" },
              { Icon: GitHub,  color: "hover:text-slate-900 dark:hover:text-white", bg: "hover:bg-slate-100 dark:hover:bg-white/10" },
            ].map(({ Icon, color, bg }, i) => (
              <button key={i} className={cn(
                "w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 transition-all",
                color, bg
              )}>
                <Icon />
              </button>
            ))}
          </div>
        </div>

        {/* 4 nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {navCols.map((col, ci) => (
            <div key={ci} className="space-y-3">
              {/* Column header */}
              <div className="flex items-center gap-1.5 mb-3">
                <col.icon className={cn("w-3.5 h-3.5 shrink-0", col.color)} />
                <span className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">{col.title}</span>
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <a href="#" className="text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white font-medium transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all mt-1">
                {col.cta} <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── STATS + INTEGRATIONS BAR ── */}
    <div className="border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6">
            {footerStats.map(({ icon: Icon, val, label, color, bg }) => (
              <div key={label} className="flex items-center gap-3">
                <div className={cn("w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0", bg)}>
                  <Icon className={cn("w-4 h-4", color)} />
                </div>
                <div>
                  <p className={cn("text-xl font-extrabold leading-none", color)}>{val}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 max-w-[120px] leading-snug">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Integrations */}
          <div>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
              Connects with the tools your teams already use
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {integrations.map(({ name, color, text }) => (
                <div key={name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  <div className="w-4 h-4 rounded-sm flex items-center justify-center text-white text-[8px] font-black shrink-0"
                    style={{ background: color }}>
                    {text[0]}
                  </div>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── FOUNDER QUOTE + CTA ── */}
    <div className="border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-6">

          {/* Quote */}
          <div className="flex items-start gap-4">
            {/* Large quotation mark */}
            <div className="text-5xl font-black text-blue-200 dark:text-blue-500/30 leading-none shrink-0 select-none mt-1">❝❝</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
                "We didn't build DexKor to help teams track customers.
                We built it to help them never lose one."
              </p>
              <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:dark:border-white/10 sm:pl-4 shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                  <img src="/images/richard.png" alt="Richard Samuel" className="w-full h-full object-cover"
                    onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  {/* <span className="text-white font-black text-sm">R</span> */}
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400">Richard Samuel</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Founder & CEO, DexKor</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center lg:items-end gap-2">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-blue-500/20 w-full lg:w-auto justify-center">
              Book a personalized demo <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">See DexKor in action</p>
          </div>
        </div>
      </div>
    </div>

    {/* ── BOTTOM BAR ── */}
    <div className="border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">

          {/* Copyright + location */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-500 font-medium">
            <span>© 2026 DexKorCRM Pvt. Ltd. All rights reserved.</span>
            <div className="flex items-center gap-1.5">
              <img src="/images/india-flag.svg" alt="India" className="w-5 h-3.5  object-cover" />
              <span>Built in India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Designed for Global B2B Teams</span>
            </div>
          </div>

          {/* Compliance badges */}
          <div className="flex items-center gap-5">
            {badges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-none">{label}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-none mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
