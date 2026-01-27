export default function CurriculoForm() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-3">Criar Currículo</h1>
      <p className="text-center text-sm text-slate-500 mb-8">Preencha os dados abaixo para gerar seu currículo profissional.</p>

      <section className="bg-white rounded-xl p-6 shadow mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">📄</div>
          <h2 className="text-2xl font-bold text-slate-900">Sua Empresa</h2>
        </div>
        <label className="text-sm text-slate-600 block mb-2">Nome da Empresa / Profissional</label>
        <input className="w-full border border-gray-200 rounded-lg p-3 text-sm placeholder:text-slate-400" placeholder="Ex: João Eletricista" />
      </section>

      <section className="bg-white rounded-xl p-6 shadow mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">👤</div>
          <h2 className="text-2xl font-bold text-slate-900">Dados do Cliente</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600 block mb-2">Nome do Cliente</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="Nome completo" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Telefone</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="(00) 00000-0000" />
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🧾</div>
            <h2 className="text-2xl font-bold text-slate-900">Serviços</h2>
          </div>
          <button className="text-sm text-violet-600">+ Adicionar</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
          <div className="md:col-span-4">
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="Descrição do serviço 1" />
          </div>
          <div className="md:col-span-2">
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm text-right" placeholder="R$ 0,00" />
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Total</span>
          <span className="text-lg font-bold text-violet-600">R$ 0,00</span>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow mb-8">
        <label className="text-sm text-slate-600 block mb-2">Observações <span className="text-sm text-slate-400">(opcional)</span></label>
        <textarea className="w-full border border-gray-200 rounded-lg p-3 text-sm min-h-[120px] placeholder:text-slate-400" placeholder="Informações adicionais, condições de pagamento, prazo, etc." />
      </section>

      <div className="mb-12">
        <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 rounded-xl">Visualizar Currículo →</button>
      </div>
    </main>
  )
}
