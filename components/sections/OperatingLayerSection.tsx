"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket, BarChart3, Headphones, Users,
  GitMerge, Zap, Plug, ShieldCheck, BarChart2,
  TrendingUp, Clock, Heart, Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ReactFlow, ReactFlowProvider, Handle, Position,
  type NodeTypes, type Node, type Edge,
  BaseEdge, getSmoothStepPath, type EdgeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

/* ── Product Node ─────────────────────────────────────────────── */
const ProductNode = ({ data }: { data: { icon: React.ElementType; logo?: string; color: string; title: string; sub: string } }) => {
  const Icon = data.icon;
  return (
    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 elevation-2 w-[230px]">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 overflow-hidden" >
        {data.logo ? (
          <img src={data.logo} alt={data.title} className="w-full h-full object-contain p-1.5"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        ) : (
          <Icon className="w-4 h-4 text-white" />
        )}
      </div>
      <div>
        <p className="font-bold text-xs text-slate-900 dark:text-white leading-tight">{data.title}</p>
        <p className="text-xs text-slate-700 dark:text-slate-700 leading-tight mt-0.5">{data.sub}</p>
      </div>
      <Handle type="source" position={Position.Bottom} className="!w-2 !h-2 !bg-blue-400 !border-0 !opacity-70" />
    </div>
  );
};

/* ── Dexy AI Hub Node ─────────────────────────────────────────── */
const DexyNode = ({ data }: { data: Record<string, never> }) => (
  <div className="relative flex flex-col items-center bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-500/30 rounded-2xl px-5 py-3 elevation-3 glow-3 w-[300px]">
    <Handle type="target" position={Position.Top} className="!w-2 !h-2 !bg-blue-400 !border-0 !opacity-70" />
    {/* Orbit rings */}
    <div className="absolute -inset-2 rounded-2xl border border-blue-200/30 dark:border-blue-500/10 pointer-events-none" />
    <div className="flex items-center gap-3 mb-2">
      <div className="relative w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
        <div className="absolute inset-0 rounded-full border border-blue-300/40 animate-ping opacity-20" />
        <img src="/images/Dexy_AI_LOGO.svg" alt="Dexy AI" className="w-11 h-11 rounded-full"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        {/* <span className="text-white font-black text-base absolute">D</span> */}
      </div>
      <div>
        <p className="font-extrabold text-sm text-slate-900 dark:text-white tracking-wide">DEXY AI</p>
        <p className="text-xs text-slate-700 dark:text-slate-700">Embedded Intelligence Layer</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-x-5 gap-y-1 border-t border-slate-100 dark:border-white/5 pt-2 w-full">
      {["AI Signals & Insights", "Workflow Automation", "Unified Data Model", "Predictive Actions"].map((f) => (
        <div key={f} className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          <span className="text-xs text-slate-700 dark:text-slate-700">{f}</span>
        </div>
      ))}
    </div>
  </div>
);

const nodeTypes: NodeTypes = {
  product: ProductNode as NodeTypes[string],
  dexy: DexyNode as NodeTypes[string],
};

/* ── Animated dashed edge ─────────────────────────────────────── */
const AnimatedEdge = (props: EdgeProps) => {
  const [path] = getSmoothStepPath({
    sourceX: props.sourceX, sourceY: props.sourceY,
    targetX: props.targetX, targetY: props.targetY,
    sourcePosition: props.sourcePosition,
    targetPosition: props.targetPosition,
    borderRadius: 12,
  });
  return (
    <BaseEdge path={path} style={{
      stroke: "#93c5fd", strokeWidth: 1.5,
      strokeDasharray: "5 4", opacity: 0.8,
    }} />
  );
};
const edgeTypes = { animated: AnimatedEdge };

/* ── Flow nodes & edges ───────────────────────────────────────── */
const GAP = 280;
const START_X = 0;
const TOP_Y = 0;
const HUB_Y = 130;
const HUB_X = 385; // Center of the 4 nodes (total width 1070) - half of DexyNode width (150)

const flowNodes: Node[] = [
  { id: "sales", type: "product", position: { x: START_X + GAP * 0, y: TOP_Y }, draggable: false, selectable: false, data: { icon: Rocket, logo: "/logos/saleshub.svg", color: "#3b82f6", title: "SalesHub", sub: "Win pipeline. Forecast growth." } },
  { id: "onboard", type: "product", position: { x: START_X + GAP * 1, y: TOP_Y }, draggable: false, selectable: false, data: { icon: BarChart3, logo: "/logos/onbaordhub.svg", color: "#10b981", title: "OnboardHub", sub: "Accelerate implementation." } },
  { id: "help", type: "product", position: { x: START_X + GAP * 2, y: TOP_Y }, draggable: false, selectable: false, data: { icon: Headphones, logo: "/logos/helpdesk.svg", color: "#f97316", title: "HelpDesk", sub: "Resolve faster. Scale support." } },
  { id: "account", type: "product", position: { x: START_X + GAP * 3, y: TOP_Y }, draggable: false, selectable: false, data: { icon: Users, logo: "/logos/accountcare.svg", color: "#8b5cf6", title: "AccountCare", sub: "Retain customers. Expand revenue." } },
  { id: "dexy", type: "dexy", position: { x: HUB_X, y: HUB_Y }, draggable: false, selectable: false, data: {} },
];

const flowEdges: Edge[] = ["sales", "onboard", "help", "account"].map((id) => ({
  id: `e-${id}`, source: id, target: "dexy", type: "animated", animated: true,
}));

/* ── Compact React Flow panel ─────────────────────────────────── */
const FlowPanel = () => (
  <div style={{ height: 310 }} className="w-full">
    <ReactFlow
      nodes={flowNodes} edges={flowEdges}
      nodeTypes={nodeTypes} edgeTypes={edgeTypes}
      fitView fitViewOptions={{ padding: 0.06 }}
      panOnDrag={false} zoomOnScroll={false} zoomOnPinch={false}
      zoomOnDoubleClick={false} preventScrolling={false}
      nodesDraggable={false} nodesConnectable={false} elementsSelectable={false}
      proOptions={{ hideAttribution: true }}
      className="!bg-transparent"
    />
  </div>
);

/* ── Feature pillars ──────────────────────────────────────────── */
const pillars = [
  { icon: GitMerge, label: "Unified Customer Timeline", sub: "360° view of every interaction across teams and channels" },
  { icon: Zap, label: "AI Signals & Automation", sub: "Proactive insights and automations across the customer lifecycle" },
  { icon: Plug, label: "APIs & Webhooks", sub: "Connect with your stack. Extend without limits." },
  { icon: ShieldCheck, label: "Security & Compliance", sub: "Enterprise-grade security and data governance." },
  { icon: BarChart2, label: "Analytics & Forecasting", sub: "Real-time insights. Smarter decisions." },
];

/* ── Stats ────────────────────────────────────────────────────── */
const stats = [
  { icon: Clock, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-500/10", val: "2.4 hrs", label: "Avg Resolution Time", delta: "↓ 28%" },
  { icon: Activity, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-500/10", val: "18 days", label: "Time to Value", delta: "↓ 40%" },
  { icon: Heart, color: "text-violet-600", bg: "bg-violet-50 dark:bg-violet-500/10", val: "82", label: "Avg Health Score", delta: "↑ 32%" },
  { icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-500/10", val: "$6.7M", label: "Expansion Revenue", delta: "↑ 25%" },
  { icon: ShieldCheck, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-500/10", val: "99.9%", label: "Platform Uptime (SLA)", delta: "" },
];

/* ── Main Section ─────────────────────────────────────────────── */
const OperatingLayerSection = () => (
  <section className="relative w-full py-12 lg:py-16 bg-white dark:bg-[#02040a] border-t border-slate-100 dark:border-white/5 text-slate-900 dark:text-white overflow-hidden">

    {/* Subtle grid bg */}
    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)] opacity-30 dark:opacity-[0.05]" />

    <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-5">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">One Operating Layer</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[-0.04em] mb-4">
          Every team works in one system.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">Every customer lives in one timeline.</span>
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-700 font-medium leading-[1.65]">
          From pipeline to onboarding, support to renewal—<br className="hidden md:block" />
          every interaction, every workflow, every signal in one shared operating layer.
        </p>
      </motion.div>

    </div>

    {/* React Flow — OUTSIDE max-w-7xl to span full section width */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full relative z-10"
    >
      <ReactFlowProvider>
        <FlowPanel />
      </ReactFlowProvider>
    </motion.div>

    {/* Pillars + Stats — back inside max-w-7xl */}
    <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-6 mt-2">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 elevation-1 overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-white/5">
          {pillars.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-start gap-3 px-4 py-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{label}</p>
                <p className="text-xs text-slate-700 dark:text-slate-700 mt-0.5 leading-snug">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 elevation-1 overflow-hidden"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-white/5">
          {stats.map(({ icon: Icon, color, bg, val, label, delta }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-4">
              <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", bg)}>
                <Icon className={cn("w-4 h-4", color)} />
              </div>
              <div>
                <p className={cn("text-2xl font-bold leading-none", color)}>{val}</p>
                <p className="text-xs text-slate-700 dark:text-slate-700 mt-0.5">{label}</p>
                {delta && <p className={cn("text-xs font-bold mt-0.5", delta.startsWith("↑") ? "text-emerald-500" : "text-orange-500")}>{delta}</p>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default OperatingLayerSection;
