"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    BarChart3,
    Users,
    HeadphonesIcon,
    Rocket,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Sparkles,
    Zap,
    Network
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Subcomponents ---

const HubNode = ({
    icon: Icon, title, subtitle, color, glowColor, positionClasses, delay
}: {
    icon: any, title: string, subtitle: string, color: string, glowColor: string, positionClasses: string, delay: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, type: "spring" }}
            className={cn(
                "absolute w-48 md:w-56 p-4 rounded-2xl bg-white/90 dark:bg-[#060b1a]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-2xl z-20 group hover:scale-105 transition-transform cursor-pointer",
                positionClasses,
                `hover:border-[${color}]`
            )}
        >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 30px ${glowColor}` }} />

            <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-inner" style={{ backgroundColor: color }}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{subtitle}</p>
                </div>
            </div>
        </motion.div>
    );
};

const StatChart = ({ title, value, change, positionClasses, chartColor, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
            className={cn(
                "absolute p-3 rounded-xl bg-white dark:bg-[#060b1a] border border-slate-100 dark:border-white/5 shadow-xl z-30 hidden md:block",
                positionClasses
            )}
        >
            <div className="flex items-center justify-between gap-6 mb-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{title}</span>
                <span className="text-xs font-bold text-emerald-500 flex items-center gap-0.5">
                    ↑ {change}
                </span>
            </div>
            <div className="font-mono text-lg font-bold text-slate-900 dark:text-white mb-2">{value}</div>

            {/* Fake SVG Sparkline */}
            <svg width="100" height="20" className="opacity-80">
                <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.6, duration: 1.5, ease: "easeOut" }}
                    d="M0 15 Q 10 5, 20 10 T 40 12 T 60 5 T 80 15 T 100 2"
                    fill="none"
                    stroke={chartColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </motion.div>
    );
};

const ConnectingLine = ({ x1, y1, x2, y2, color }: any) => {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
            {/* Base faint line */}
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" strokeOpacity="0.2" />

            {/* Animated glowing dot moving towards center (50%, 50%) */}
            <motion.circle r="3" fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
                <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={`M ${x1} ${y1} L ${x2} ${y2}`}
                />
            </motion.circle>
        </svg>
    );
};


// --- Main Component ---

const SolutionSection = () => {
    return (
        <section className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">

            {/* Background Decorative Rings (Visible mostly in dark mode) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 dark:border-white/5 rounded-full opacity-50 pointer-events-none hidden lg:block" />
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] border border-slate-100 dark:border-white/5 rounded-full opacity-30 pointer-events-none hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: TEXT CONTENT */}
                    <div className="lg:col-span-4 z-20 max-w-3xl">
                        <span className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-widest">— THE SOLUTION</span>

                        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                            Meet DexKor.<br />
                            One platform.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                                Four connected modules.
                            </span>
                        </h2>

                        <p className="mt-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
                            Replace disconnected sales, onboarding, support, and customer success tools with one shared operating layer—powered by Dexy AI.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: ORBITAL DIAGRAM */}
                    <div className="lg:col-span-8 relative h-[600px] md:h-[700px] w-full flex items-center justify-center">

                        {/* Connecting Lines */}
                        <div className="absolute inset-0 hidden md:block">
                            {/* Top to Center */}
                            <ConnectingLine x1="50%" y1="15%" x2="50%" y2="50%" color="#3b82f6" />
                            {/* Right to Center */}
                            <ConnectingLine x1="85%" y1="50%" x2="50%" y2="50%" color="#a855f7" />
                            {/* Bottom to Center */}
                            <ConnectingLine x1="50%" y1="85%" x2="50%" y2="50%" color="#f97316" />
                            {/* Left to Center */}
                            <ConnectingLine x1="15%" y1="50%" x2="50%" y2="50%" color="#14b8a6" />
                        </div>

                        {/* CENTRAL NODE: DEXY AI */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="absolute z-30 w-56 h-56 rounded-[2rem] bg-white dark:bg-[#060b1a] border border-blue-200 dark:border-blue-500/30 flex flex-col items-center justify-center p-6"
                            style={{
                                boxShadow: "0 0 80px rgba(59, 130, 246, 0.15), inset 0 0 40px rgba(59, 130, 246, 0.05)"
                            }}
                        >
                            {/* Robot Avatar */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 mb-4 shadow-xl shadow-blue-500/20">
                                <div className="w-full h-full bg-white dark:bg-[#040814] rounded-full flex items-center justify-center overflow-hidden">
                                    <img src="./images/dexy_ai.svg" alt="Dexy AI" className="w-20 h-20 object-contain" />
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Dexy AI</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-1 mb-4 leading-tight">
                                Embedded intelligence across the lifecycle
                            </p>

                            <div className="space-y-1.5 w-full">
                                {['Risk detected', 'Expansion identified', 'Sentiment improved', 'Workflow automated'].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                        <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* THE 4 HUB NODES */}
                        {/* 1. SalesHub (Top) */}
                        <HubNode
                            icon={BarChart3} title="SalesHub" subtitle="Win and grow revenue"
                            color="#3b82f6" glowColor="rgba(59,130,246,0.3)"
                            positionClasses="md:top-[5%] md:left-1/2 md:-translate-x-1/2 top-0 left-0 relative md:absolute mb-4 md:mb-0" delay={0.1}
                        />
                        <StatChart title="Pipeline Value" value="$28.4M" change="32%" chartColor="#3b82f6" positionClasses="top-[5%] right-[10%]" delay={0.1} />

                        {/* 2. AccountCare (Right) */}
                        <HubNode
                            icon={Users} title="AccountCare" subtitle="Retain and expand customers"
                            color="#a855f7" glowColor="rgba(168,85,247,0.3)"
                            positionClasses="md:right-[5%] md:top-1/2 md:-translate-y-1/2 top-0 right-0 relative md:absolute mb-4 md:mb-0" delay={0.2}
                        />
                        <StatChart title="Expansion Revenue" value="$6.7M" change="25%" chartColor="#a855f7" positionClasses="top-[60%] right-[5%]" delay={0.2} />

                        {/* 3. HelpDesk (Bottom) */}
                        <HubNode
                            icon={HeadphonesIcon} title="HelpDesk" subtitle="Deliver exceptional support"
                            color="#f97316" glowColor="rgba(249,115,22,0.3)"
                            positionClasses="md:bottom-[5%] md:left-1/2 md:-translate-x-1/2 bottom-0 left-0 relative md:absolute mb-4 md:mb-0" delay={0.3}
                        />
                        <StatChart title="Resolution Time" value="2.4 hrs" change="28%" chartColor="#f97316" positionClasses="bottom-[10%] right-[15%]" delay={0.3} />

                        {/* 4. OnboardHub (Left) */}
                        <HubNode
                            icon={Rocket} title="OnboardHub" subtitle="Accelerate time-to-value"
                            color="#14b8a6" glowColor="rgba(20,184,166,0.3)"
                            positionClasses="md:left-[5%] md:top-1/2 md:-translate-y-1/2 bottom-0 right-0 relative md:absolute" delay={0.4}
                        />
                        <StatChart title="Time to Value" value="18 days" change="40%" chartColor="#14b8a6" positionClasses="top-[60%] left-[5%]" delay={0.4} />
                    </div>
                </div>

                {/* FULL WIDTH BOTTOM CTA BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 w-full rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 md:p-12 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                        Every team works in one system.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                            Every customer lives in one timeline.
                        </span>
                    </h3>

                    <button className="bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 dark:shadow-none mb-10">
                        Explore the Platform <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                        {[
                            { icon: Network, label: "Unified customer data" },
                            { icon: Sparkles, label: "AI-powered insights" },
                            { icon: Zap, label: "Real-time collaboration" },
                            { icon: ShieldCheck, label: "Enterprise-grade security" }
                        ].map((tag, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#040814] border border-slate-200 dark:border-white/10 shadow-sm text-xs font-medium text-slate-600 dark:text-slate-300">
                                <tag.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                {tag.label}
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default SolutionSection;
