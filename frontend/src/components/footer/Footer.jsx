'use client';

import React from "react";
import { useFooter } from "./Footer.func";

export default function Footer() {
  const { year } = useFooter();
  
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-[var(--color-text-light)] transition-colors duration-300">
      © {year} PDFix — Todos os direitos reservados
    </footer>
  );
}
