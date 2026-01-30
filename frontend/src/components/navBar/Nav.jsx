"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-center backdrop-blur-xl backdrop-saturate-150 bg-white/60 dark:bg-slate-900/60 border-b border-white/20 dark:border-white/10"
    >
      <div className="max-w-6xl w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-violet-500 rounded-md flex items-center justify-center text-white font-bold">
            PDF
          </div>
          <span className="font-semibold text-[var(--color-text)]">PDFix</span>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            className="text-violet-600 font-medium hover:text-violet-700 transition-colors"
            href="/"
          >
            Início
          </Link>
          <Link
            className="text-[var(--color-text-light)] hover:text-violet-600 transition-colors"
            href="/curriculo"
          >
            Criar Currículo
          </Link>
          <Link
            className="px-4 py-2 rounded-md border border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white transition-all duration-300"
            href="/login"
          >
            Começar Grátis
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
