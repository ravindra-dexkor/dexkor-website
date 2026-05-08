"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Activity, CheckCircle2, Code2,
  ArrowRight, Globe, Building2, Cloud, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Trust Card (right 2×2 grid) ────────────────────────────────── */
const TrustCard = ({
  title, icon: Icon, features, index,
}: {
  title: string; icon: React.ElementType; features: string[]; index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 + index * 0.1, duration: 0.45, ease: "easeOut" }}
    className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
  >
    {/* Icon + title */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-500/20">
        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h3>
    </div>

    {/* Feature list */}
    <ul className="space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{f}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

/* ── Bottom pillar bar ───────────────────────────────────────────── */
const pillars = [
  { icon: Globe,     label: "API-First" },
  { icon: Building2, label: "Enterprise-Ready" },
  { icon: Cloud,     label: "Global Deployment" },
  { icon: Sparkles,  label: "AI-Native" },
];

/* ── Trust cards data ────────────────────────────────────────────── */
const trustCards = [
  {
    title: "Security",
    icon: ShieldCheck,
    features: ["Role-based access", "SSO / SAML", "Encryption at rest", "Audit logs"],
  },
  {
    title: "Reliability",
    icon: Activity,
    features: ["99.9% uptime", "Real-time monitoring", "Auto failover", "Incident visibility"],
  },
  {
    title: "Compliance",
    icon: CheckCircle2,
    features: ["SOC 2 ready", "GDPR aligned", "DPA support", "Regional hosting"],
  },
  {
    title: "Extensibility",
    icon: Code2,
    features: ["REST APIs", "Webhooks", "Custom workflows", "Open integrations"],
  },
];

/* ── Main Section ────────────────────────────────────────────────── */
const TrustSection = () => (
  <section className="relative w-full py-12 lg:py-20 bg-white dark:bg-[#030712] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 overflow-hidden">

    {/* Grid-line background — same as Hero */}
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.4] dark:opacity-[0.07]" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">

      {/* ── Main 2-col layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-10 lg:mb-12">

        {/* LEFT — sticky header */}
        <motion.div
          initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="lg:col-span-4 lg:sticky lg:top-32"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Enterprise Trust</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight mb-4">
            Enterprise-grade<br />by design.<br />
            <span className="text-blue-600 dark:text-blue-400">Not added later.</span>
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 max-w-sm">
            Security, compliance, reliability, extensibility, and AI governance—built into DexKor from day one.
          </p>

          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-blue-500/20 group">
            Explore Trust Center
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* RIGHT — 2×2 card grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustCards.map((card, idx) => (
            <TrustCard key={idx} {...card} index={idx} />
          ))}
        </div>
      </div>

      {/* ── Bottom pillar bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.3 }}
        className="rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 overflow-hidden"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/5">
          {pillars.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.1 + idx * 0.08 }}
              className="flex items-center justify-center gap-3 py-5 px-4"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default TrustSection;
