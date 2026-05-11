"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import PlatformMegaMenu from "./PlatformMegaMenu";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import CustomersMegaMenu from "./CustomersMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Platform", hasMenu: true },
    { name: "Solutions", hasMenu: true },
    { name: "Customers", hasMenu: true },
    // { name: "Resources", hasMenu: true },
    { name: "Company", hasMenu: true },
  ];

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
        isScrolled ? "top-4 px-4" : "top-0 px-0"
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-in-out",
          isScrolled
            ? "max-w-7xl rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-3xl border border-slate-200/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            : "max-w-full bg-white/10 dark:bg-black/10  border-b border-transparent"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500",
          isScrolled ? "h-14" : "h-16"
        )}>
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/images/DxLogo.svg" alt="DexKor" className="h-6 w-auto object-contain dark:brightness-0 dark:invert" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="h-full flex items-center"
                onMouseEnter={() => item.hasMenu && setActiveMenu(item.name)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-blue-400 py-2 relative",
                    activeMenu === item.name && "text-blue-400"
                  )}
                >
                  {item.name}
                  {item.hasMenu && (
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeMenu === item.name && "rotate-180")} />
                  )}
                  {activeMenu === item.name && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-[-20px] left-0 w-full h-0.5 bg-blue-500 rounded-full"
                    />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 sm:gap-5">
            <ThemeToggle />
            {/* <Link href="/login" className="hidden sm:block text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Login
            </Link> */}
            <Link 
              href="https://calendly.com/richard-dexkor/dexkor-demo-call-with-founder"
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all group shadow-lg shadow-blue-500/20"
            >
              <span className="hidden sm:inline">Book a demo</span>
              <span className="sm:hidden">Book a demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden text-slate-900 dark:text-white"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (isMobileMenuOpen) setActiveMenu(null);
              }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MEGA MENUS */}
      <AnimatePresence>
        {activeMenu === "Platform" && (
          <PlatformMegaMenu isOpen={true} onClose={() => setActiveMenu(null)} />
        )}
        {activeMenu === "Solutions" && (
          <SolutionsMegaMenu isOpen={true} onClose={() => setActiveMenu(null)} />
        )}
        {activeMenu === "Customers" && (
          <CustomersMegaMenu isOpen={true} onClose={() => setActiveMenu(null)} />
        )}
        {activeMenu === "Resources" && (
          <ResourcesMegaMenu isOpen={true} onClose={() => setActiveMenu(null)} />
        )}
        {activeMenu === "Company" && (
          <CompanyMegaMenu isOpen={true} onClose={() => setActiveMenu(null)} />
        )}
      </AnimatePresence>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-white dark:bg-black z-[90] lg:hidden p-6 pt-24 space-y-6 overflow-y-auto transition-colors duration-300">
          {!activeMenu && (
            <>
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-slate-100 dark:border-white/5 pb-4">
                  <button
                    onClick={() => item.hasMenu && setActiveMenu(item.name)}
                    className="flex items-center justify-between w-full text-lg font-bold"
                  >
                    {item.name}
                    {item.hasMenu && <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              ))}
              {/* <Link href="/login" className="block text-lg font-bold border-b border-slate-100 dark:border-white/5 pb-4">
                Login
              </Link> */}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
