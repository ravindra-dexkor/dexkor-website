"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import {
  ReactFlow,
  ReactFlowProvider,
  Handle,
  Position,
  type NodeTypes,
  type Node,
  type Edge,
  BaseEdge,
  getBezierPath,
  type EdgeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  TrendingDown, Database, Clock, Users,
  AlertTriangle, ChevronDown, ArrowRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Custom Nodes ──────────────────────────────────────────── */

// Tool pill node — logo is optional: pass data.logo as an img src or leave undefined for initial badge
const ToolNode = ({ data }: { data: { label: string; logo?: string; color?: string } }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/15 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap select-none">
    {/* Brand logo — swap src for a real image when available */}
    {data.logo ? (
      <img src={data.logo} alt={data.label} className="w-4 h-4 object-contain" />
    ) : (
      <div
        className="w-4 h-4 rounded-sm flex items-center justify-center text-[9px] font-black text-white shrink-0"
        style={{ background: data.color ?? "#64748b" }}
      >
        {data.label[0]}
      </div>
    )}
    {data.label}
    <Handle type="source" position={Position.Bottom} className="!w-2 !h-2 !bg-slate-300 dark:!bg-slate-600 !border-0" />
  </div>
);

// Impact card node
const ImpactNode = ({ data }: { data: { label: string; sub: string } }) => (
  <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/20 w-[560px] select-none">
    <Handle type="target" position={Position.Top} className="!w-2 !h-2 !bg-red-300 !border-0" />
    <div className="w-9 h-9 rounded-xl bg-white dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center shrink-0">
      <AlertTriangle className="w-4 h-4 text-red-500" />
    </div>
    <div>
      <p className="font-bold text-sm text-slate-900 dark:text-white">{data.label}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{data.sub}</p>
    </div>
  </div>
);

const nodeTypes: NodeTypes = {
  tool: ToolNode as NodeTypes[string],
  impact: ImpactNode as NodeTypes[string],
};

/* ─── Custom Edge: dashed converging line ───────────────────── */
const DashedEdge = ({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }: EdgeProps) => {
  const [edgePath] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  return (
    <BaseEdge
      path={edgePath}
      style={{
        stroke: "#94a3b8",
        strokeWidth: 1.5,
        strokeDasharray: "5 5",
        opacity: 0.6,
      }}
    />
  );
};

const edgeTypes = { dashed: DashedEdge };

/* ─── Flow graph data ───────────────────────────────────────── */
const toolLabels = ["HubSpot", "rocketlane", "zendesk", "freshworks", "Gainsight", "Zoho", "slack", "Jira"];
const TOOL_Y = 0;
const IMPACT_Y = 160;
const FLOW_WIDTH = 900;
const GAP = FLOW_WIDTH / toolLabels.length;

// Brand colors for initial badge (replace with real logo srcs later)
const toolColors: Record<string, string> = {
  HubSpot: "#ff7a59", rocketlane: "#6366f1", zendesk: "#03363d",
  freshworks: "#22c55e", Gainsight: "#00b4e6", Zoho: "#e42527",
  slack: "#611f69", Jira: "#0052cc",
};

const initialNodes: Node[] = [
  ...toolLabels.map((label, i): Node => ({
    id: `tool-${i}`,
    type: "tool",
    position: { x: i * GAP, y: TOOL_Y },
    data: { label, color: toolColors[label] /* swap: logo: "/logos/hubspot.svg" */ },
    draggable: false,
    selectable: false,
  })),
  {
    id: "impact",
    type: "impact",
    position: { x: FLOW_WIDTH / 2 - 280, y: IMPACT_Y },
    data: {
      label: "Broken handoffs. Silos of data. No unified view.",
      sub: "Teams operate in isolation. Context is lost. Customers feel the gaps.",
    },
    draggable: false,
    selectable: false,
  },
];

const initialEdges: Edge[] = toolLabels.map((_, i): Edge => ({
  id: `e-tool-${i}`,
  source: `tool-${i}`,
  target: "impact",
  type: "dashed",
  animated: true, // running dashed line — native React Flow animation
}));

/* ─── Flow Panel (no controls, no bg) ──────────────────────── */
const ToolFlowPanel = () => {
  return (
    <div style={{ height: 280 }} className="w-full">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        className="!bg-transparent"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      />
    </div>
  );
};

/* ─── Problem card ──────────────────────────────────────────── */
const ProblemCard = ({
  icon: Icon, iconColor, iconBg, title, desc
}: {
  icon: React.ElementType; iconColor: string; iconBg: string; title: string; desc: string;
}) => (
  <div className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
    <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", iconBg)}>
      <Icon className={cn("w-4 h-4", iconColor)} />
    </div>
    <div>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

/* ─── Main Section ──────────────────────────────────────────── */
const ProblemSection = () => {
  return (
    <section className="relative w-full py-10 lg:py-16 bg-slate-50/50 dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-8">

        {/* ── ROW 1: Header + Stat Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Problem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-4">
              Point solutions manage stages.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">They don't manage the journey.</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
              Most B2B companies still rely on separate tools for sales, onboarding,
              support, and customer success—creating broken handoffs, fragmented
              intelligence, and revenue leakage as they scale.
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
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 leading-none mb-1">80%+</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-snug">
                of enterprise data remains unstructured and scattered across disconnected systems.
              </p>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-2">— IDC</p>
            </div>
          </motion.div>
        </div>

        {/* ── ROW 2: Fragmented Stack label */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] items-start gap-0">
          <div className="p-5 pt-2">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Fragmented<br className="hidden lg:block" /> Tool Stack</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium mt-1">Disconnected tools.<br />Disconnected data.</p>
          </div>

          {/* ReactFlow panel — tools converging to impact */}
          <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden px-4 pt-4 pb-0">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 lg:hidden">The Impact</p>
            <ReactFlowProvider>
              <ToolFlowPanel />
            </ReactFlowProvider>
          </div>
        </div>

        {/* ── ROW 3: THE IMPACT label (desktop — shown as left label) */}
        {/* <div className="hidden lg:grid grid-cols-[180px_1fr] -mt-6"> */}
        <div className="p-0">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">The Impact</p>
        </div>
        <div />
        {/* </div> */}

        {/* ── ROW 4: 4 Problem Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <ProblemCard
            icon={TrendingDown} iconColor="text-red-500" iconBg="bg-red-50 dark:bg-red-500/10"
            title="Revenue Leakage"
            desc="Opportunities missed, renewals at risk, and expansion delayed."
          />
          <ProblemCard
            icon={Database} iconColor="text-orange-500" iconBg="bg-orange-50 dark:bg-orange-500/10"
            title="Fragmented Data"
            desc="Scattered customer data leads to inaccurate insights and reporting."
          />
          <ProblemCard
            icon={Clock} iconColor="text-red-500" iconBg="bg-red-50 dark:bg-red-500/10"
            title="Reactive Operations"
            desc="Teams respond late, escalations increase, and SLAs are impacted."
          />
          <ProblemCard
            icon={Users} iconColor="text-blue-500" iconBg="bg-blue-50 dark:bg-blue-500/10"
            title="Poor Customer Experience"
            desc="Inconsistent experiences across touchpoints erode trust and loyalty."
          />
        </div>

        {/* ── Divider ── */}
        {/* <div className="flex items-center justify-center py-1">
          <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center shadow-sm">
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div> */}

        {/* ── ROW 5: The Result ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-0">
          <div className="pb-5 flex items-start pt-5">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">The Result</p>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100 dark:divide-white/5">
              {[
                { icon: Clock, val: "32%", label: "Slower onboarding", sub: "due to manual handoffs" },
                { icon: TrendingDown, val: "18%", label: "Revenue leakage", sub: "from delayed actions" },
                { icon: Users, val: "24%", label: "Higher support costs", sub: "from reactive operations" },
                { icon: Zap, val: "2.3x", label: "Higher churn risk", sub: "from poor experiences" },
              ].map(({ icon: Icon, val, label, sub }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold leading-none text-blue-600">{val}</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white mt-1">{label}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-[220px] shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/5 px-5 py-5 flex flex-col justify-center bg-slate-50/80 dark:bg-white/[0.02]">
              <p className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug mb-0.5">One platform. One journey.</p>
              <p className="text-sm font-extrabold text-blue-600 dark:text-blue-400 leading-snug mb-3">Better outcomes at scale.</p>
              <button className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all group">
                See how DexKor solves this
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
