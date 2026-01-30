import { FaUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";

export default function CurriculoForm() {
  const inputClass = "w-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg p-3 text-sm transition-colors duration-300";
  const labelClass = "text-sm text-[var(--color-text-light)] block mb-2";
  const sectionClass = "bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-6 shadow mb-6 transition-colors duration-300";

  return (
    <main className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-[#8E51FF] mb-3">
        Criar Currículo
      </h1>
      <p className="text-center text-sm text-[var(--color-text-light)] mb-8">
        Preencha os dados abaixo para gerar seu currículo profissional.
      </p>
      {/* Seção para o dados pessoais do usuario */}
      <section className={sectionClass}>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-3xl text-[#8E51FF]">
            <FaUser />
          </div>
          <h2 className="text-2xl font-bold text-[#8E51FF]">Dados Pessoais</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nome</label>
            <input
              className={inputClass}
              placeholder="Nome completo"
              name="nome"
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              className={inputClass}
              placeholder="Digite seu email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className={labelClass}>Senha</label>
            <input
              className={inputClass}
              placeholder="Digite sua senha"
              name="senha"
              type="password"
            />
          </div>
          <div>
            <label className={labelClass}>
              Telefone
            </label>
            <input
              className={inputClass}
              placeholder="(00) 00000-0000"
              name="telefone"
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>
              Endereço
            </label>
            <input
              className={inputClass}
              placeholder="Rua, número, bairro, cidade"
              name="endereco"
            />
          </div>
          <div>
            <label className={labelClass}>Idade</label>
            <input
              className={inputClass}
              placeholder="Idade"
              name="idade"
              type="number"
              min="0"
            />
          </div>
          <div>
            <label className={labelClass}>
              LinkedIn
            </label>
            <input
              className={inputClass}
              placeholder="https://linkedin.com/in/seu-perfil"
              name="linkedin_url"
              type="url"
            />
          </div>
        </div>
      </section>
      {/* Seção para dados de competências */}
      <section className={sectionClass}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-[#8E51FF]">
              <CgNotes />
            </div>
            <h2 className="text-3xl font-bold text-[#8E51FF]">Competências</h2>
          </div>
          <button className="text-sm text-violet-600">+ Adicionar</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>
              Tipo da Competência
            </label>
            <input
              className={inputClass}
              name="nome_competencia"
              placeholder="Ex: Proativo"
              required
            />
          </div>
          <div>
            <label className={labelClass}>
              Categoria
            </label>
            <input
              className={inputClass}
              name="categoria"
              placeholder="Ex: Social"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>
              Nível de Proficiência
            </label>
            <input
              className={inputClass}
              name="nivel_proficiencia"
              placeholder="Ex: Avançado"
            />
          </div>
          {/* <div>
            <label className={labelClass}>Anos de Experiência</label>
            <input className={inputClass} name="anos_experiencia" type="number" min="0" placeholder="Ex: 5" />
          </div> */}
        </div>
        <div className="mb-4">
          <label className={labelClass}>Descrição</label>
          <textarea
            className={`${inputClass} min-h-30`}
            name="descricao"
            placeholder="Detalhe sua competência, certificações, projetos, etc."
          />
        </div>
      </section>
      {/* Seção para dados de experiências */}
      <section className={sectionClass}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-[#8E51FF] ">
              <FaUserGraduate />
            </div>
            <h2 className="text-2xl font-bold text-[#8E51FF] ">Experiências</h2>
          </div>
          <button className="text-sm text-violet-600">+ Adicionar</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Cargo</label>
            <input
              className={inputClass}
              name="titulo_cargo"
              placeholder="Ex: Desenvolvedor"
            />
          </div>
          <div>
            <label className={labelClass}>Empresa</label>
            <input
              className={inputClass}
              name="empresa"
              placeholder="Nome da empresa"
            />
          </div>
          <div>
            <label className={labelClass}>
              Localidade
            </label>
            <input
              className={inputClass}
              name="localidade"
              placeholder="Cidade, Estado"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>
              Data de Início
            </label>
            <input
              className={inputClass}
              name="data_inicio"
              type="date"
            />
          </div>
          <div>
            <label className={labelClass}>
              Data de Término
            </label>
            <input
              className={inputClass}
              name="data_fim"
              type="date"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="atual"
            className="w-4 h-4 border-gray-300 rounded accent-[#8E51FF]"
          />
          <label className={labelClass}>Emprego atual</label>
        </div>
        <div className="mb-4">
          <label className={labelClass}>Sobre</label>
          <textarea
            className={`${inputClass} min-h-30`}
            name="sobre"
            placeholder="Descrição das atividades, conquistas, etc."
          />
        </div>
      </section>

      <div className="mb-12">
        <button className="w-full bg-violet-600 hover:bg-violet-700 cursor-pointer text-white font-semibold py-4 rounded-xl transition-colors duration-300">
          Visualizar Currículo →
        </button>
      </div>
    </main>
  );
}
