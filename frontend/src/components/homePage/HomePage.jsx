import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen from-white via-zinc-50 to-white font-sans text-zinc-800">
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
          Crie currículos que <span className="text-violet-600">impressionam</span> recrutadores
        </h1>
        <p className="mt-6 text-zinc-500 max-w-2xl mx-auto">
          Chega de enviar currículos por e-mail ou papel. Com o PDFix, você gera documentos profissionais prontos para download e compartilhamento.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a className="bg-violet-600 text-white px-6 py-3 rounded-full shadow hover:opacity-95" href="/curriculo">Criar Currículo Grátis →</a>
          <a className="text-zinc-600 self-center" href="#">Já tenho conta</a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Por que escolher o PDFix?</h2>
        <p className="text-center text-zinc-500 max-w-2xl mx-auto mb-8">Desenvolvido para profissionais que querem criar currículos profissionais sem perder tempo.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-violet-50 rounded-md flex items-center justify-center text-violet-600 mb-4">⏱️</div>
            <div className="font-semibold">Menos de 2 minutos</div>
            <div className="text-sm text-zinc-400 mt-2">Crie currículos profissionais rapidamente, sem complicação.</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-violet-50 rounded-md flex items-center justify-center text-violet-600 mb-4">📱</div>
            <div className="font-semibold">100% Mobile</div>
            <div className="text-sm text-zinc-400 mt-2">Funciona perfeitamente no celular, ideal para usar em campo.</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-violet-50 rounded-md flex items-center justify-center text-violet-600 mb-4">🔌</div>
            <div className="font-semibold">Download Fácil</div>
            <div className="text-sm text-zinc-400 mt-2">Download em PDF e compartilhamento fácil.</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-violet-50 rounded-md flex items-center justify-center text-violet-600 mb-4">👁️</div>
            <div className="font-semibold">Visual Profissional</div>
            <div className="text-sm text-zinc-400 mt-2">PDFs elegantes que transmitem credibilidade aos seus clientes.</div>
          </div>
        </div>
      </section>

      {/* How it works / Steps */}
      <section className="bg-zinc-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-2">Como funciona</h3>
          <p className="text-zinc-500 mb-8">Em 4 passos simples você tem um currículo profissional pronto para compartilhar.</p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              ["01","Preencha","Dados pessoais, educação e experiências"],
              ["02","Visualize","Preview do currículo"],
              ["03","Ajuste","Formate e escolha template"],
              ["04","Envie","Baixe e compartilhe"],
            ].map(([num,title,desc])=> (
              <div key={num} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">{num}</div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-zinc-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purple CTA */}
      <section className="bg-gradient-to-r from-violet-600 to-violet-500 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl text-white font-extrabold">Comece agora e impressione recrutadores</div>
          <div className="mt-20">
            <a className="bg-white text-violet-600 px-6 py-3 rounded-full shadow font-semibold" href="#">Criar Meu Primeiro Currículo →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
