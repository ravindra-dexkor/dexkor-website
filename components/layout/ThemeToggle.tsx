"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors"
      title="Toggle theme"
    >
      <Moon className="h-5 w-5 scale-100 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute h-5 w-5 scale-0 transition-all duration-300 dark:scale-100 dark:rotate-0 rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
