import React from "react";

export default function Nav() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-violet-500 rounded-md flex items-center justify-center text-white font-bold">PF</div>
        <span className="font-semibold">PDFix</span>
      </div>

      <nav className="flex items-center gap-6">
        <a className="text-violet-600 font-medium" href="/">Início</a>
        <a className="text-zinc-600 hover:text-violet-600" href="/curriculo">Criar Currículo</a>
        <a className="px-4 py-2 rounded-md border border-violet-500 text-violet-600" href="#">Começar Grátis</a>
      </nav>
    </header>
  );
}
