"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import PlatformMegaMenu from "./PlatformMegaMenu";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import CustomersMegaMenu from "./CustomersMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Platform", hasMenu: true },
    { name: "Solutions", hasMenu: true },
    { name: "Customers", hasMenu: true },
    { name: "Resources", hasMenu: true },
    { name: "Company", hasMenu: true },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full bg-black text-white z-[100] border-b border-white/5"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
             <span className="text-white font-black text-xl italic">D</span>
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">Dexkor</span>
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
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-400 py-2 relative",
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
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                   />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden sm:block text-sm font-semibold hover:text-blue-400 transition-colors">
            Login
          </Link>
          <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all group shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
            See DexKor Live
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-white"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setActiveMenu(null);
            }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MEGA MENUS */}
      <PlatformMegaMenu 
        isOpen={activeMenu === "Platform"} 
        onClose={() => setActiveMenu(null)}
      />
      <SolutionsMegaMenu 
        isOpen={activeMenu === "Solutions"} 
        onClose={() => setActiveMenu(null)}
      />
      <CustomersMegaMenu 
        isOpen={activeMenu === "Customers"} 
        onClose={() => setActiveMenu(null)}
      />
      <ResourcesMegaMenu 
        isOpen={activeMenu === "Resources"} 
        onClose={() => setActiveMenu(null)}
      />
      <CompanyMegaMenu 
        isOpen={activeMenu === "Company"} 
        onClose={() => setActiveMenu(null)}
      />

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black z-[90] lg:hidden p-6 space-y-6 overflow-y-auto">
            {!activeMenu && (
              <>
                {navItems.map((item) => (
                    <div key={item.name} className="border-b border-slate-800 pb-4">
                        <button 
                          onClick={() => item.hasMenu && setActiveMenu(item.name)}
                          className="flex items-center justify-between w-full text-lg font-semibold"
                        >
                            {item.name}
                            {item.hasMenu && <ChevronDown className="w-5 h-5" />}
                        </button>
                    </div>
                ))}
                <Link href="/login" className="block text-lg font-semibold border-b border-slate-800 pb-4">
                    Login
                </Link>
              </>
            )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
