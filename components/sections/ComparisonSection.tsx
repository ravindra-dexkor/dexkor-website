"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  TrendingDown, AlertTriangle, Clock, Database, Users2,
  Users, Target, Zap, TrendingUp, Layers,
  X, Check, ArrowRight, BarChart3, ShieldAlert, DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

const leftItems = [
  { icon: TrendingDown, title: "Missed expansion signals",       sub: "Growth opportunities go unnoticed." },
  { icon: AlertTriangle,title: "Escalations discovered too late", sub: "Issues surface after damage is done." },
  { icon: Clock,        title: "Onboarding delays",              sub: "Slow starts lead to churn risk." },
  { icon: Database,     title: "Fragmented customer data",       sub: "Incomplete context. Poor decisions." },
  { icon: Users,        title: "Reactive, manual processes",     sub: "Teams stuck in firefighting mode." },
];

const rightItems = [
  { icon: Users2,    title: "One shared customer timeline",  sub: "Everyone works with the same context." },
  { icon: Target,    title: "Predictive risk detection",     sub: "AI identifies issues before they escalate." },
  { icon: Zap,       title: "AI-guided workflows",           sub: "The right actions. At the right time." },
  { icon: TrendingUp,title: "Real-time expansion signals",   sub: "Surfaced early. Acted on faster." },
  { icon: Layers,    title: "Unified data. Smarter decisions.", sub: "Complete view. Better outcomes." },
];

const stats = [
  { icon: Clock,       val: "-28%", label: "Longer time-to-value" },
  { icon: ShieldAlert, val: "+23%", label: "Higher churn risk" },
  { icon: TrendingDown,val: "-29%", label: "Lower expansion" },
  { icon: DollarSign,  val: "-18%", label: "Revenue impact" },
];

/* ─── Main ───────────────────────────────────────────────── */
const ComparisonSection = () => {
  const containerRef    = useRef<HTMLDivElement>(null);
  const centerRef       = useRef<HTMLDivElement>(null);
  const leftRefs        = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs       = useRef<(HTMLDivElement | null)[]>([]);
  const [lPaths, setLP] = useState<string[]>([]);
  const [rPaths, setRP] = useState<string[]>([]);
  const [svgH,   setSH] = useState(0);
  const [svgW,   setSW] = useState(0);

  const calc = useCallback(() => {
    const con = containerRef.current;
    const cen = centerRef.current;
    if (!con || !cen) return;

    const cRect = con.getBoundingClientRect();
    const eRect = cen.getBoundingClientRect();
    const cx = eRect.left + eRect.width  / 2 - cRect.left;
    const cy = eRect.top  + eRect.height / 2 - cRect.top;
    const cr = eRect.width / 2;

    setSW(con.offsetWidth);
    setSH(con.offsetHeight);

    setLP(leftRefs.current.map(r => {
      if (!r) return "";
      const b = r.getBoundingClientRect();
      const x = b.left + b.width / 2 - cRect.left;
      const y = b.top  + b.height / 2 - cRect.top;
      const mx = (x + cx - cr) / 2;
      return `M ${x},${y} C ${mx},${y} ${mx},${cy} ${cx - cr},${cy}`;
    }).filter(Boolean));

    setRP(rightRefs.current.map(r => {
      if (!r) return "";
      const b = r.getBoundingClientRect();
      const x = b.left + b.width / 2 - cRect.left;
      const y = b.top  + b.height / 2 - cRect.top;
      const mx = (cx + cr + x) / 2;
      return `M ${cx + cr},${cy} C ${mx},${cy} ${mx},${y} ${x},${y}`;
    }).filter(Boolean));
  }, []);

  useEffect(() => {
    const t = setTimeout(calc, 150);
    const obs = new ResizeObserver(calc);
    if (containerRef.current) obs.observe(containerRef.current);
    window.addEventListener("resize", calc);
    return () => { clearTimeout(t); obs.disconnect(); window.removeEventListener("resize", calc); };
  }, [calc]);

  return (
    <section className="relative w-full py-12 lg:py-20 bg-slate-50/60 dark:bg-[#02040a] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.4] dark:opacity-[0.07]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Cost of Waiting</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight mb-4">
            Every disconnected customer moment<br />
            is <span className="text-blue-600 dark:text-blue-400">revenue left behind.</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            While teams switch between tools, customers wait, risks escalate,<br className="hidden md:block" />
            renewals slip, and expansion opportunities disappear.
          </p>
        </motion.div>

        {/* Comparison diagram */}
        <div ref={containerRef} className="relative">

          {/* SVG curves — desktop only */}
          {svgW > 0 && (
            <svg className="absolute inset-0 pointer-events-none z-20 hidden lg:block overflow-visible" width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`}>
              {lPaths.map((d, i) => (
                <motion.path key={`l${i}`} d={d} fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" opacity="0"
                  animate={{ opacity: 0.55 }} transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }} />
              ))}
              {rPaths.map((d, i) => (
                <motion.path key={`r${i}`} d={d} fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0"
                  animate={{ opacity: 0.55 }} transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }} />
              ))}
            </svg>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px_1fr] gap-4 lg:gap-0 items-center">

            {/* LEFT — Without DexKor */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-2xl border border-red-200 dark:border-red-500/20 bg-white dark:bg-white/[0.02] p-5 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/10 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Without DexKor</span>
              </div>
              <div className="space-y-3">
                {leftItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{item.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.sub}</p>
                    </div>
                    <div ref={el => { leftRefs.current[i] = el; }}
                      className="w-6 h-6 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center shrink-0 z-30">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CENTER hub */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-4 z-30 py-2">
              <div ref={centerRef} className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full border border-blue-200/50 dark:border-blue-500/20" />
                <div className="absolute w-16 h-16 rounded-full border border-blue-200/30 dark:border-blue-500/10" />
                <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <div className="absolute inset-0 rounded-full border border-blue-300/40 animate-ping opacity-20" />
                  <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <div className="text-center leading-snug">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">FROM</p>
                <p className="text-xs font-black text-red-500 uppercase tracking-wide">REACTIVE</p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">TO</p>
                <p className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wide">PREDICTIVE</p>
              </div>
            </div>

            {/* RIGHT — With DexKor */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-2xl border border-blue-200 dark:border-blue-500/20 bg-white dark:bg-white/[0.02] p-5 shadow-sm"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">With DexKor</span>
              </div>
              <div className="space-y-3">
                {rightItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div ref={el => { rightRefs.current[i] = el; }}
                      className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0 z-30">
                      <Check className="w-3 h-3 text-blue-500" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{item.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }}
          className="rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-white/5">
            {/* Left label */}
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-snug">
                Disconnected moments don't just slow teams down—<br />
                <span className="font-extrabold text-slate-900 dark:text-white">they show up in your numbers.</span>
              </p>
            </div>
            {/* Right stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100 dark:divide-white/5">
              {stats.map(({ icon: Icon, val, label }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold leading-none text-slate-900 dark:text-white">{val}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA banner */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.25 }}
          className="rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0">
              <img src="/images/logo.png" alt="DexKor" className="w-7 h-7 object-contain" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
            <p className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
              The teams that win tomorrow<br />
              <span className="text-blue-600 dark:text-blue-400">stop stitching tools today.</span>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-blue-500/20">
              See DexKor Live <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-white/10 hover:border-blue-400 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-full transition-all">
              Talk to our team <ArrowRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonSection;
