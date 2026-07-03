'use client';

import React from "react";
import Link from "next/link";
import { useFooter } from "./Footer.func";

export default function Footer() {
  const { year } = useFooter();
  
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <Link 
            href="/privacidade" 
            className="text-[var(--color-text-light)] hover:text-violet-600 transition-colors"
          >
            Política de Privacidade
          </Link>
          <span className="text-[var(--color-text-light)]">•</span>
          <Link 
            href="/termos" 
            className="text-[var(--color-text-light)] hover:text-violet-600 transition-colors"
          >
            Termos de Uso
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-[var(--color-text-light)]">
          <p>© {year} PDFix — Todos os direitos reservados</p>
          <p className="text-xs mt-2">
            Conformidade com LGPD • Lei Geral de Proteção de Dados Pessoais
          </p>
        </div>
      </div>
    </footer>
  );
}
