"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ArrowUpRight,
  Globe
} from "lucide-react";

const FinalCTASection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const beamOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const beamWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-10 lg:py-16 bg-white dark:bg-[#02040a] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">

      {/* 1. ADVANCED 3D PERSPECTIVE GRID */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[150%] h-[600px] pointer-events-none z-0" style={{ perspective: "1000px" }}>
        <div
          className="absolute inset-0 w-full h-full border-t border-blue-500/10 dark:border-blue-500/20"
          style={{
            transform: "rotateX(65deg)",
            background: "linear-gradient(to bottom, rgba(59,130,246,0.1) 0%, transparent 50%)",
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        
        {/* Moving Grid Lines (Vertical Beams) */}
        <div className="absolute inset-0 flex justify-around px-20 overflow-hidden" style={{ transform: "rotateX(65deg)" }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[1px] h-full bg-gradient-to-b from-blue-500/20 to-transparent"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* 2. REFINED HORIZON BEAM */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none z-10">
        <motion.div
          style={{ opacity: beamOpacity, width: beamWidth }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent [mask-image:linear-gradient(to_right,white_0%,white_40%,transparent_45%,transparent_55%,white_60%,white_100%)]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-blue-400/10 blur-xl rounded-full"
        />
        <motion.div
          className="absolute top-[-1px] left-0 w-40 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-md z-20"
          animate={{ x: ["-100%", "1000%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full bg-gradient-to-b from-blue-600/5 to-transparent blur-[120px] opacity-30 dark:opacity-40" />
      </div>

      {/* 3. MULTI-DIRECTIONAL FLOATING PARTICLES - Fixed positions for Hydration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{ 
                left: `${(i * 10) + 5}%`, 
                bottom: "-10%" 
            }}
            animate={{
              y: [0, -800],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-2xl shadow-blue-500/40 flex items-center justify-center relative border border-white/20 z-10">
            <img src="/images/logo.png" alt="DexKor" className="w-full h-full object-contain invert brightness-0" />
          </div>
          <div className="absolute inset-[-10px] bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
        </motion.div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Conclusion</span>
        </div>

        <div className="mb-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-2"
          >
            Customer success doesn't <br />
            start at onboarding.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 bg-[length:200%_auto] animate-shimmer">
              It starts where most tools stop.
            </h3>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto font-medium mb-12"
        >
          DexKor unifies every signal, every workflow, and every customer-facing team—so growth doesn't depend on disconnected systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16"
        >
          {[
            { label: "Predict.", icon: TrendingUp },
            { label: "Act.", icon: Zap },
            { label: "Grow.", icon: ArrowUpRight },
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-3 group cursor-default">
                <div className="w-10 h-10 rounded-full border border-blue-500/20 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/5 transition-all">
                  <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white">{item.label}</span>
              </div>
              {idx < 2 && <div className="w-px h-6 bg-slate-200 dark:bg-white/10 hidden md:block" />}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:scale-125 transition-transform" />
          <button className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/30 active:scale-95 group">
            See DexKor Live <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="mt-16 flex items-center gap-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-blue-500/70" />
            Built in India
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
          <span>Designed for global B2B teams</span>
        </div>

      </div>

    </section>
  );
};

export default FinalCTASection;
