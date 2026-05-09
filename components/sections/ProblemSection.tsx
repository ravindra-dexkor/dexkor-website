"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import {
  TrendingDown, Database, Clock, Users,
  AlertTriangle, ArrowRight, Zap, X,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Tool Data ─────────────────────────────────────────────── */
const TOOLS = [
  { id: "hubspot", label: "HubSpot", logo: "/logos/hubspot.png", color: "#ff7a59" },
  { id: "rocket", label: "Rocketlane", logo: "/logos/rocketlene.png", color: "#6366f1" },
  { id: "zendesk", label: "Zendesk", logo: "/logos/zendesk.png", color: "#03363d" },
  { id: "freshworks", label: "Freshworks", logo: "/logos/freshworks.png", color: "#22c55e" },
  { id: "gainsight", label: "Gainsight", logo: "/logos/gainsight.jpg", color: "#00b4e6" },
  { id: "zoho", label: "Zoho", logo: "/logos/zoho.png", color: "#e42527" },
  { id: "jira", label: "Jira", logo: "/logos/jira.png", color: "#0052cc" },
];

const LINE_COLORS = [
  "#ff7a59", "#818cf8", "#06b6d4", "#22c55e",
  "#f59e0b", "#f43f5e", "#3b82f6",
];

/* ─── SVG Connector Visualization ───────────────────────────── */
const ConnectorDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [pillPositions, setPillPositions] = useState<{ cx: number; cy: number }[]>([]);
  const [dims, setDims] = useState({ w: 800, h: 340 });
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [warningHovered, setWarningHovered] = useState(false);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Measure positions */
  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setDims({ w: rect.width, h: rect.height });

    const positions = pillRefs.current.map((el) => {
      if (!el) return { cx: 0, cy: 0 };
      const r = el.getBoundingClientRect();
      const cr = containerRef.current!.getBoundingClientRect();
      return {
        cx: r.left - cr.left + r.width / 2,
        cy: r.top - cr.top + r.height,
      };
    });
    setPillPositions(positions);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* Target convergence point — near the warning card */
  const TARGET = { x: dims.w / 2, y: dims.h - 88 };

  /* Generate control points for a bezier path */
  const getControlPoints = (i: number, from: { cx: number; cy: number }) => {
    const x1 = from.cx, y1 = from.cy + 4;
    const x4 = TARGET.x, y4 = TARGET.y;
    const offset = (i - TOOLS.length / 2) * 28;
    return {
      x1, y1, x4, y4,
      cx1: x1 + offset * 0.4,
      cy1: y1 + (y4 - y1) * 0.35,
      cx2: x4 + offset * -0.6,
      cy2: y1 + (y4 - y1) * 0.65,
    };
  };

  /* Generate a zig-zag bezier path */
  const makePath = (i: number, from: { cx: number; cy: number }) => {
    const { x1, y1, x4, y4, cx1, cy1, cx2, cy2 } = getControlPoints(i, from);
    return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x4} ${y4}`;
  };

  /* Point on cubic bezier at parameter t */
  const bezierPoint = (cp: ReturnType<typeof getControlPoints>, t: number) => {
    const { x1, y1, x4, y4, cx1, cy1, cx2, cy2 } = cp;
    const mt = 1 - t;
    return {
      x: mt ** 3 * x1 + 3 * mt ** 2 * t * cx1 + 3 * mt * t ** 2 * cx2 + t ** 3 * x4,
      y: mt ** 3 * y1 + 3 * mt ** 2 * t * cy1 + 3 * mt * t ** 2 * cy2 + t ** 3 * y4,
    };
  };

  /* Split path into first half and second half */
  const makeSplitPaths = (i: number, from: { cx: number; cy: number }) => {
    const cp = getControlPoints(i, from);
    const { x1, y1, x4, y4, cx1, cy1, cx2, cy2 } = cp;
    // De Casteljau subdivision at t=0.5
    const p01 = { x: (x1 + cx1) / 2, y: (y1 + cy1) / 2 };
    const p12 = { x: (cx1 + cx2) / 2, y: (cy1 + cy2) / 2 };
    const p23 = { x: (cx2 + x4) / 2, y: (cy2 + y4) / 2 };
    const p012 = { x: (p01.x + p12.x) / 2, y: (p01.y + p12.y) / 2 };
    const p123 = { x: (p12.x + p23.x) / 2, y: (p12.y + p23.y) / 2 };
    const mid = { x: (p012.x + p123.x) / 2, y: (p012.y + p123.y) / 2 };
    const firstHalf = `M ${x1} ${y1} C ${p01.x} ${p01.y}, ${p012.x} ${p012.y}, ${mid.x} ${mid.y}`;
    const secondHalf = `M ${mid.x} ${mid.y} C ${p123.x} ${p123.y}, ${p23.x} ${p23.y}, ${x4} ${y4}`;
    return { firstHalf, secondHalf, mid };
  };

  return (
    <div ref={containerRef} className="relative w-full select-none" style={{ minHeight: 340 }}>

      {/* Pills row */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 px-2 pt-2 pb-0 relative z-10">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.id}
            ref={(el) => { pillRefs.current[i] = el; }}
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            onMouseEnter={() => { setHoveredTool(i); measure(); }}
            onMouseLeave={() => setHoveredTool(null)}
            title={tool.label}
            className={cn(
              "flex items-center justify-center h-11 rounded-xl bg-white dark:bg-slate-900",
              "border shadow-sm cursor-default transition-all duration-200 shrink-0 px-3 py-1",
              hoveredTool === i
                ? "border-slate-400 shadow-md scale-105"
                : "border-slate-200 dark:border-white/15"
            )}
            style={{ boxShadow: hoveredTool === i ? `0 0 0 2px ${LINE_COLORS[i]}40` : undefined }}
          >
            {tool.logo ? (
              <img src={tool.logo} alt={tool.label} className="h-8 w-22 object-contain" />
            ) : (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                style={{ background: tool.color }}
              >
                {tool.label[0]}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* SVG connector lines */}
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none overflow-visible"
        width={dims.w}
        height={dims.h}
        viewBox={`0 0 ${dims.w} ${dims.h}`}
      >
        <defs>
          {TOOLS.map((_, i) => (
            <filter key={i} id={`glow-${i}`}>
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>

        {pillPositions.length === TOOLS.length && TOOLS.map((_, i) => {
          const from = pillPositions[i];
          const { firstHalf, secondHalf, mid } = makeSplitPaths(i, from);
          const isHovered = hoveredTool === i;
          const isWarning = warningHovered;
          const color = LINE_COLORS[i];
          const strokeColor = isWarning ? "#ef4444" : color;

          return (
            <g key={i}>
              {/* First half: solid line */}
              <motion.path
                d={firstHalf}
                fill="none"
                stroke={strokeColor}
                strokeWidth={isHovered ? 2 : 1.5}
                strokeDasharray="none"
                opacity={isHovered ? 0.9 : isWarning ? 0.7 : 0.55}
                filter={isHovered ? `url(#glow-${i})` : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: isHovered ? 0.9 : 0.55 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                style={{ transition: "stroke 0.2s, opacity 0.2s, stroke-width 0.2s" }}
              />

              {/* Second half: dotted line */}
              <motion.path
                d={secondHalf}
                fill="none"
                stroke={strokeColor}
                strokeWidth={isHovered ? 2 : 1.5}
                strokeDasharray="4 6"
                opacity={isHovered ? 0.7 : isWarning ? 0.6 : 0.35}
                filter={isHovered ? `url(#glow-${i})` : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: isHovered ? 0.7 : 0.35 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + i * 0.08, ease: "easeOut" }}
                style={{ transition: "stroke 0.2s, opacity 0.2s, stroke-width 0.2s" }}
              />

              {/* X break badge at midpoint */}
              {isInView && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.06, duration: 0.3 }}
                >
                  <circle
                    cx={mid.x}
                    cy={mid.y}
                    r={9}
                    fill="white"
                    stroke="#fca5a5"
                    strokeWidth="1.5"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(239,68,68,0.3))" }}
                  />
                  <text
                    x={mid.x}
                    y={mid.y + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="900"
                    fill="#ef4444"
                  >×</text>
                </motion.g>
              )}
            </g>
          );
        })}

        {/* Large X at convergence point */}
        {isInView && (
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
          >
            <circle
              cx={TARGET.x}
              cy={TARGET.y}
              r={14}
              fill="#fef2f2"
              stroke="#ef4444"
              strokeWidth="2"
              style={{ filter: "drop-shadow(0 2px 6px rgba(239,68,68,0.4))" }}
            />
            <text
              x={TARGET.x}
              y={TARGET.y + 5}
              textAnchor="middle"
              fontSize="14"
              fontWeight="900"
              fill="#ef4444"
            >×</text>
          </motion.g>
        )}
      </svg>

      {/* Warning card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
        onMouseEnter={() => setWarningHovered(true)}
        onMouseLeave={() => setWarningHovered(false)}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-0 z-10",
          "flex items-center gap-4 px-6 py-3 rounded-2xl",
          "border transition-all duration-300 cursor-default",
          "bg-red-50 dark:bg-red-500/5 border-red-100 dark:border-red-500/20",
          warningHovered && "shadow-lg shadow-red-200/50 dark:shadow-red-900/30 scale-[1.01]"
        )}
        style={{ minWidth: 360, maxWidth: "calc(100% - 32px)" }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 2.5, duration: 0.6 }}
          className="w-10 h-10 rounded-xl bg-white dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center shrink-0"
        >
          <AlertTriangle className="w-5 h-5 text-red-500" />
        </motion.div>
        <div>
          <p className="font-bold text-sm text-slate-900 dark:text-white">Every handoff creates risk.</p>
          <p className="text-xs text-slate-700 dark:text-slate-700 mt-0.5 font-medium">
            Lost context. Delayed responses. Missed renewals. Frustrated customers.
          </p>
        </div>
      </motion.div>

    </div>
  );
};

/* ─── Problem card ──────────────────────────────────────────── */
const ProblemCard = ({
  icon: Icon, iconColor, iconBg, title, desc
}: {
  icon: React.ElementType; iconColor: string; iconBg: string; title: string; desc: string;
}) => (
  <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 elevation-1 transition-all">
    <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", iconBg)}>
      <Icon className={cn("w-4 h-4", iconColor)} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-700 dark:text-slate-700 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

/* ─── Main Section ──────────────────────────────────────────── */
const ProblemSection = () => {
  return (
    <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-8">

        {/* ── ROW 1: Header + Stat Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 dark:text-white mb-4">
              Your tools manage stages.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">Your customers experience <br /> one journey.</span>
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-700 leading-[1.65] max-w-lg font-medium">
              Sales. Onboarding. Support. Success.<br />
              Different tools. Different data. Different handoffs.<br />
              One customer caught in the middle.
            </p>
          </div>

          {/* Stat card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm w-full lg:w-[400px] shrink-0"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
              <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-snug">
                <span className="text-blue-600 dark:text-blue-400 font-extrabold">80%+</span> of enterprise data remains unstructured and scattered across disconnected systems.
              </p>
              <a 
                href="https://www.idc.com/resource-center/blog/ai-cant-run-on-stale-data-why-enterprises-are-rethinking-their-architecture/?utm_source=dexkor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3"
              >
                <img src="/logos/IDC-Logo-BeaconBlue.svg" alt="IDC" className="h-4 w-auto opacity-90 hover:opacity-100 transition-opacity dark:invert dark:brightness-200" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── ROW 2: Custom Connector Visualization ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] items-stretch gap-0">
          <div className="pr-8 py-4 border-r border-slate-100 dark:border-white/5 flex flex-col justify-center">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">What your<br />teams use today</h3>
            <ul className="space-y-2">
              {["Multiple tools.", "Disconnected data.", "Fragmented context."].map(text => (
                <li key={text} className="text-xs text-slate-700 dark:text-slate-700 font-medium">{text}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 overflow-hidden px-4 pb-6">
            <ConnectorDiagram />
          </div>
        </div>


        {/* ── Title + Subtitle ── */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 dark:text-white">
            Disconnected tools don't just slow teams.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-blue-600 dark:text-blue-400 mb-3">
            They hurt revenue.
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-700 font-medium max-w-md leading-[1.65]">
            Fragmented systems create gaps across your customer lifecycle—<br />
            and the cost shows up everywhere.
          </p>
        </div>

        {/* ── ROW 4: Impact Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              icon: TrendingDown, iconColor: "text-red-500", iconBg: "bg-red-50 dark:bg-red-500/10",
              title: "Missed Revenue",
              desc: "Renewals delayed, expansion opportunities lost.",
              stat: "18%", statLabel: "leakage", statColor: "text-red-500",
            },
            {
              icon: Database, iconColor: "text-orange-500", iconBg: "bg-orange-50 dark:bg-orange-500/10",
              title: "Broken Visibility",
              desc: "Disconnected systems hide critical customer signals.",
              stat: "80%", statLabel: "fragmented data", statColor: "text-orange-500",
            },
            {
              icon: Clock, iconColor: "text-red-500", iconBg: "bg-red-50 dark:bg-red-500/10",
              title: "Escalation Chaos",
              desc: "Reactive workflows increase SLA pressure and costs.",
              stat: "24%", statLabel: "higher support cost", statColor: "text-red-500",
            },
            {
              icon: Users, iconColor: "text-violet-500", iconBg: "bg-violet-50 dark:bg-violet-500/10",
              title: "Customer Friction",
              desc: "Inconsistent experiences reduce trust and loyalty.",
              stat: "2.3x", statLabel: "higher churn risk", statColor: "text-violet-500",
            },
          ].map(({ icon: Icon, iconColor, iconBg, title, desc, stat, statLabel, statColor }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow gap-4"
            >
              {/* Top: icon + text side by side */}
              <div className="flex items-start gap-3">
                <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5", iconBg)}>
                  <Icon className={cn("w-4 h-4", iconColor)} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{title}</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-700 leading-relaxed font-medium">{desc}</p>
                </div>
              </div>
              {/* Bottom: stat badge */}
              <div className={cn("inline-flex items-baseline gap-1 px-2.5 py-1 rounded-full text-xs font-bold w-fit", statColor, "bg-current/5")}
                style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}>
                <span className="text-sm font-extrabold">{stat}</span>{statLabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── ROW 5: Cost of Disconnected Systems ── */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-5 pb-1">
            <h3 className="text-3xl font-semibold text-slate-600 dark:text-slate-700">The cost of disconnected systems</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-0">
            {/* Stats — individual cards + arrows */}
            <div className="flex-1 flex flex-col lg:flex-row items-stretch gap-0 p-4 lg:gap-0">
              {[
                {
                  icon: Clock, val: "32%", valColor: "text-blue-600",
                  iconBg: "bg-blue-50 dark:bg-blue-500/10", iconColor: "text-blue-500",
                  arrowColor: "#93c5fd",
                  label: "Slower onboarding",
                  sub: "Manual handoffs and rework delay customer time-to-value.",
                },
                {
                  icon: TrendingDown, val: "18%", valColor: "text-orange-500",
                  iconBg: "bg-orange-50 dark:bg-orange-500/10", iconColor: "text-orange-500",
                  arrowColor: "#fdba74",
                  label: "Revenue leakage",
                  sub: "Delayed actions and missed signals lead to lost revenue.",
                },
                {
                  icon: Zap, val: "24%", valColor: "text-red-500",
                  iconBg: "bg-red-50 dark:bg-red-500/10", iconColor: "text-red-500",
                  arrowColor: "#fca5a5",
                  label: "Higher support costs",
                  sub: "Reactive tickets, escalations and SLA breaches drive costs up.",
                },
                {
                  icon: Users, val: "2.3x", valColor: "text-violet-600",
                  iconBg: "bg-violet-50 dark:bg-violet-500/10", iconColor: "text-violet-500",
                  arrowColor: "#c4b5fd",
                  label: "Higher churn risk",
                  sub: "Poor experiences increase churn and reduce LTV.",
                },
              ].map(({ icon: Icon, val, valColor, iconBg, iconColor, arrowColor, label, sub }, idx, arr) => (
                <div key={label} className="flex items-center flex-1 min-w-0">
                  {/* Stat card */}
                  <div className="flex-1 flex flex-col gap-3 p-4 rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm min-w-0">
                    {/* Circular icon */}
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", iconBg)}>
                      <Icon className={cn("w-4 h-4", iconColor)} strokeWidth={2} />
                    </div>
                    {/* Big number */}
                    <p className={cn("text-3xl font-bold leading-none", valColor)}>{val}</p>
                    {/* Label + description */}
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">{label}</p>
                      <p className="text-xs text-slate-700 dark:text-slate-700 leading-[1.65]">{sub}</p>
                    </div>
                  </div>

                  {/* Colored dashed arrow connector */}
                  {idx < arr.length - 1 && (
                    <div className="hidden lg:flex shrink-0 items-center mx-1">
                      <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                        <line x1="0" y1="6" x2="30" y2="6" stroke={arrowColor} strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
                        <polyline points="26,2 34,6 26,10" fill="none" stroke={arrowColor} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* DexKor CTA Panel */}
            <div className="lg:w-[260px] shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/5 px-6 py-6 flex flex-col justify-center gap-4 bg-blue-50 dark:bg-blue-500/5">
              {/* Logo row */}
              <div className="flex items-center gap-2">
                {/* Blue logo for light, white logo for dark */}
                <img
                  src="/images/logowhite.png"
                  alt="DexKor"
                  className="h-8 bg-[#1E4D92] p-2 rounded-sm w-auto object-contain block dark:hidden"
                />
                <img
                  src="/images/logowhite.png"
                  alt="DexKor"
                  className="h-6 w-auto object-contain hidden dark:block"
                />
                {/* <span className="text-sm font-black text-slate-900 dark:text-white tracking-widest uppercase">DEXKOR</span> */}
              </div>

              {/* Copy */}
              <div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-700 leading-snug mb-2">
                  This is what disconnected systems cost.
                </p>
                <p className="text-base font-extrabold text-blue-600 dark:text-blue-400 leading-snug">
                  DexKor fixes it—with<br />one unified platform.
                </p>
              </div>

              {/* CTA button */}
              <a
                href="https://calendly.com/richard-dexkor/dexkor-demo-call-with-founder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-3 rounded-full transition-all active:scale-95 shadow-md shadow-blue-500/20 w-full"
              >
                <span>See how DexKor replaces your stack</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default ProblemSection;
