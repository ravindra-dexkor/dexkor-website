"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#02040a] transition-colors duration-300 flex flex-col font-sans overflow-hidden">
      <Navbar />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bfdbfe_1px,transparent_1px),linear-gradient(to_bottom,#bfdbfe_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.12]" />
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]" 
        />
      </div>

      <main className="flex-grow relative z-10 pt-10 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2.5 text-[10px] font-black text-slate-700 hover:text-blue-600 dark:text-slate-700 dark:hover:text-blue-400 transition-all uppercase tracking-[0.2em] group"
            >
              <div className="w-6 h-6 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back to Home
            </Link>
          </motion.div>

          {/* Header Section */}
          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20 bg-blue-50/50 dark:bg-blue-500/5 backdrop-blur-sm">
                <Shield className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">Legal</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                {title.split(' ').map((word, i, arr) => (
                  <span key={i} className={cn(i >= arr.length - 1 && "text-blue-600 dark:text-blue-400")}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              {lastUpdated && (
                <p className="text-xs font-bold text-slate-700 dark:text-slate-700 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Last Updated: {lastUpdated}
                </p>
              )}
            </motion.div>
          </header>
          
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-white dark:bg-[#0a0e1a]/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none 
              prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-xl md:prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-700 dark:prose-p:text-slate-700 prose-p:text-base prose-p:leading-relaxed prose-p:mb-6 prose-p:font-medium
              prose-li:text-slate-700 dark:prose-li:text-slate-700 prose-li:text-base prose-li:font-medium
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline prose-a:font-bold hover:prose-a:text-blue-500 transition-all border-b border-blue-600/20 hover:border-blue-600
              prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold"
            >
              {children}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalLayout;
