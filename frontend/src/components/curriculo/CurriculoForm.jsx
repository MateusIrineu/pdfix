export default function CurriculoForm() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-3">Criar Currículo</h1>
      <p className="text-center text-sm text-slate-500 mb-8">Preencha os dados abaixo para gerar seu currículo profissional.</p>

      <section className="bg-white rounded-xl p-6 shadow mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">👤</div>
          <h2 className="text-2xl font-bold text-slate-900">Dados do Cliente</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600 block mb-2">Nome</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="Nome completo" name="nome" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Email</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="Digite seu email" name="email" type="email" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Senha</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="Digite sua senha" name="senha" type="password" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Telefone</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="(00) 00000-0000" name="telefone" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600 block mb-2">Endereço</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="Rua, número, bairro, cidade" name="endereco" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Idade</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="Idade" name="idade" type="number" min="0" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">LinkedIn</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" placeholder="https://linkedin.com/in/seu-perfil" name="linkedin_url" type="url" />
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🧾</div>
            <h2 className="text-2xl font-bold text-slate-900">Competências</h2>
          </div>
          <button className="text-sm text-violet-600">+ Adicionar</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className="text-sm text-slate-600 block mb-2">Tipo da Competência</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="nome_competencia" placeholder="Ex: Proativo" required />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Categoria</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="categoria" placeholder="Ex: Social" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className="text-sm text-slate-600 block mb-2">Nível de Proficiência</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="nivel_proficiencia" placeholder="Ex: Avançado" />
          </div>
          {/* <div>
            <label className="text-sm text-slate-600 block mb-2">Anos de Experiência</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="anos_experiencia" type="number" min="0" placeholder="Ex: 5" />
          </div> */}
        </div>
        <div className="mb-4">
          <label className="text-sm text-slate-600 block mb-2">Descrição</label>
          <textarea className="w-full border border-gray-200 rounded-lg p-3 text-sm min-h-30" name="descricao" placeholder="Detalhe sua competência, certificações, projetos, etc." />
        </div>

      </section>
      <section className="bg-white rounded-xl p-6 shadow mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🧾</div>
            <h2 className="text-2xl font-bold text-slate-900">Experiências</h2>
          </div>
          <button className="text-sm text-violet-600">+ Adicionar</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
          <div>
            <label className="text-sm text-slate-600 block mb-2">Cargo</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="titulo_cargo" placeholder="Ex: Desenvolvedor" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Empresa</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="empresa" placeholder="Nome da empresa" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Localidade</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="localidade" placeholder="Cidade, Estado" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className="text-sm text-slate-600 block mb-2">Data de Início</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="data_inicio" type="date" />
          </div>
          <div>
            <label className="text-sm text-slate-600 block mb-2">Data de Término</label>
            <input className="w-full border border-gray-200 rounded-lg p-3 text-sm" name="data_fim" type="date" />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" name="atual" className="w-4 h-4 border-gray-300 rounded" />
          <label className="text-sm text-slate-600">Emprego atual</label>
        </div>
        <div className="mb-4">
          <label className="text-sm text-slate-600 block mb-2">Sobre</label>
          <textarea className="w-full border border-gray-200 rounded-lg p-3 text-sm min-h-30" name="sobre" placeholder="Descrição das atividades, conquistas, etc." />
        </div>

      </section>

      <div className="mb-12">
        <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 rounded-xl">Visualizar Currículo →</button>
      </div>

      
    </main>
  )
}
