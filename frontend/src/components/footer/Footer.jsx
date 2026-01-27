import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-zinc-400">
      © {new Date().getFullYear()} PDFix — Todos os direitos reservados
    </footer>
  );
}
