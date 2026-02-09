'use client';

import { useState } from 'react';
import { FaUser, FaFilePdf, FaEye, FaLock } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import { useCurriculoForm } from "./CurriculoForm.func";

export default function CurriculoForm() {
  const {
    dadosPessoais,
    competencias,
    experiencias,
    formacoes,
    loading,
    error,
    success,
    pagamentoAtivo,
    verificandoPagamento,
    handleDadosPessoaisChange,
    handleAdicionarCompetencia,
    handleAdicionarExperiencia,
    handleAdicionarFormacao,
    handleVisualizarPDF,
    handleGerarPDF,
  } = useCurriculoForm();

  // Estados locais para formulários
  const [competenciaForm, setCompetenciaForm] = useState({
    nome_competencia: '',
    categoria: '',
    nivel_proficiencia: '',
    descricao: '',
  });

  const [experienciaForm, setExperienciaForm] = useState({
    titulo_cargo: '',
    empresa: '',
    localidade: '',
    data_inicio: '',
    data_fim: '',
    atual: false,
    sobre: '',
  });

  const [formacaoForm, setFormacaoForm] = useState({
    curso: '',
    instituicao: '',
    nivel: '',
    data_inicio: '',
    data_conclusao: '',
    cursando: false,
  });

  const inputClass = "w-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg p-3 text-sm transition-colors duration-300";
  const labelClass = "text-sm font-medium text-[var(--color-text)] dark:text-gray-300 block mb-2";
  const sectionClass = "bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-6 shadow mb-6 transition-colors duration-300";

  return (
    <main className="max-w-3xl mx-auto px-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      {/* Alerta de pagamento */}
      {!verificandoPagamento && !pagamentoAtivo && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400 dark:border-yellow-600 px-4 py-3 rounded mb-4 flex items-center gap-3">
          <FaLock className="text-2xl text-yellow-800 dark:text-yellow-300" />
          <div className="flex-1">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200">Acesso Limitado</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">Você pode visualizar uma prévia, mas precisa fazer o pagamento para baixar o currículo completo.</p>
          </div>
          <button
            onClick={() => window.location.href = '/pagamento'}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Fazer Pagamento
          </button>
        </div>
      )}

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
              value={dadosPessoais.nome}
              onChange={(e) => handleDadosPessoaisChange('nome', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              className={inputClass}
              placeholder="Digite seu email"
              name="email"
              type="email"
              value={dadosPessoais.email}
              onChange={(e) => handleDadosPessoaisChange('email', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Telefone</label>
            <input
              className={inputClass}
              placeholder="(00) 00000-0000"
              name="telefone"
              value={dadosPessoais.telefone}
              onChange={(e) => handleDadosPessoaisChange('telefone', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Endereço</label>
            <input
              className={inputClass}
              placeholder="Rua, número, bairro, cidade"
              name="endereco"
              value={dadosPessoais.endereco}
              onChange={(e) => handleDadosPessoaisChange('endereco', e.target.value)}
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
              value={dadosPessoais.idade}
              onChange={(e) => handleDadosPessoaisChange('idade', e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>LinkedIn</label>
            <input
              className={inputClass}
              placeholder="https://linkedin.com/in/seu-perfil"
              name="linkedin_url"
              type="url"
              value={dadosPessoais.linkedin_url}
              onChange={(e) => handleDadosPessoaisChange('linkedin_url', e.target.value)}
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
          <button 
            onClick={() => {
              if (competenciaForm.nome_competencia) {
                handleAdicionarCompetencia(competenciaForm);
                setCompetenciaForm({
                  nome_competencia: '',
                  categoria: '',
                  nivel_proficiencia: '',
                  descricao: '',
                });
              } else {
                alert('Por favor, preencha pelo menos o nome da competência!');
              }
            }}
            className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors font-semibold"
          >
            + Adicionar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Tipo da Competência</label>
            <input
              className={inputClass}
              name="nome_competencia"
              placeholder="Ex: Proativo"
              value={competenciaForm.nome_competencia}
              onChange={(e) => setCompetenciaForm({...competenciaForm, nome_competencia: e.target.value})}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Categoria</label>
            <input
              className={inputClass}
              name="categoria"
              placeholder="Ex: Social"
              value={competenciaForm.categoria}
              onChange={(e) => setCompetenciaForm({...competenciaForm, categoria: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Nível de Proficiência</label>
            <input
              className={inputClass}
              name="nivel_proficiencia"
              placeholder="Ex: Avançado"
              value={competenciaForm.nivel_proficiencia}
              onChange={(e) => setCompetenciaForm({...competenciaForm, nivel_proficiencia: e.target.value})}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className={labelClass}>Descrição</label>
          <textarea
            className={`${inputClass} min-h-30`}
            name="descricao"
            placeholder="Detalhe sua competência, certificações, projetos, etc."
            value={competenciaForm.descricao}
            onChange={(e) => setCompetenciaForm({...competenciaForm, descricao: e.target.value})}
          />
        </div>

        {/* Lista de competências adicionadas */}
        {competencias.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-[var(--color-text)]">Competências Adicionadas:</p>
            {competencias.map((comp, index) => (
              <div key={comp.id || index} className="bg-violet-50 dark:bg-violet-900/20 p-3 rounded border border-violet-200 dark:border-violet-700">
                <p className="font-semibold text-[var(--color-text)]">{comp.nome_competencia}</p>
                {comp.categoria && <p className="text-sm text-[var(--color-text-light)]">{comp.categoria}</p>}
                {comp.nivel_proficiencia && <p className="text-xs text-[var(--color-text-light)]">Nível: {comp.nivel_proficiencia}</p>}
              </div>
            ))}
          </div>
        )}
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
          <button 
            onClick={() => {
              if (experienciaForm.titulo_cargo && experienciaForm.empresa) {
                handleAdicionarExperiencia(experienciaForm);
                setExperienciaForm({
                  titulo_cargo: '',
                  empresa: '',
                  localidade: '',
                  data_inicio: '',
                  data_fim: '',
                  atual: false,
                  sobre: '',
                });
              } else {
                alert('Por favor, preencha pelo menos o cargo e a empresa!');
              }
            }}
            className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors font-semibold"
          >
            + Adicionar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Cargo</label>
            <input
              className={inputClass}
              name="titulo_cargo"
              placeholder="Ex: Desenvolvedor"
              value={experienciaForm.titulo_cargo}
              onChange={(e) => setExperienciaForm({...experienciaForm, titulo_cargo: e.target.value})}
            />
          </div>
          <div>
            <label className={labelClass}>Empresa</label>
            <input
              className={inputClass}
              name="empresa"
              placeholder="Nome da empresa"
              value={experienciaForm.empresa}
              onChange={(e) => setExperienciaForm({...experienciaForm, empresa: e.target.value})}
            />
          </div>
          <div>
            <label className={labelClass}>Localidade</label>
            <input
              className={inputClass}
              name="localidade"
              placeholder="Cidade, Estado"
              value={experienciaForm.localidade}
              onChange={(e) => setExperienciaForm({...experienciaForm, localidade: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Data de Início</label>
            <input
              className={inputClass}
              name="data_inicio"
              type="date"
              value={experienciaForm.data_inicio}
              onChange={(e) => setExperienciaForm({...experienciaForm, data_inicio: e.target.value})}
            />
          </div>
          <div>
            <label className={labelClass}>Data de Término</label>
            <input
              className={inputClass}
              name="data_fim"
              type="date"
              value={experienciaForm.data_fim}
              onChange={(e) => setExperienciaForm({...experienciaForm, data_fim: e.target.value})}
              disabled={experienciaForm.atual}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="atual"
            checked={experienciaForm.atual}
            onChange={(e) => setExperienciaForm({...experienciaForm, atual: e.target.checked})}
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
            value={experienciaForm.sobre}
            onChange={(e) => setExperienciaForm({...experienciaForm, sobre: e.target.value})}
          />
        </div>

        {/* Lista de experiências adicionadas */}
        {experiencias.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-[var(--color-text)]">Experiências Adicionadas:</p>
            {experiencias.map((exp, index) => (
              <div key={exp.id || index} className="bg-violet-50 dark:bg-violet-900/20 p-3 rounded border border-violet-200 dark:border-violet-700">
                <p className="font-semibold text-[var(--color-text)]">{exp.titulo_cargo}</p>
                <p className="text-sm text-[var(--color-text-light)]">{exp.empresa} • {exp.localidade}</p>
                {exp.atual && <p className="text-xs text-violet-600">Emprego Atual</p>}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Seção para Formação Acadêmica */}
      <section className={sectionClass}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-[#8E51FF]">
              <FaUserGraduate />
            </div>
            <h2 className="text-2xl font-bold text-[#8E51FF]">Formação Acadêmica</h2>
          </div>
          <button 
            onClick={() => {
              if (formacaoForm.curso && formacaoForm.instituicao) {
                handleAdicionarFormacao(formacaoForm);
                setFormacaoForm({
                  curso: '',
                  instituicao: '',
                  nivel: '',
                  data_inicio: '',
                  data_conclusao: '',
                  cursando: false,
                });
              } else {
                alert('Por favor, preencha pelo menos o curso e a instituição!');
              }
            }}
            className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors font-semibold"
          >
            + Adicionar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Curso</label>
            <input
              className={inputClass}
              name="curso"
              placeholder="Ex: Ciência da Computação"
              value={formacaoForm.curso}
              onChange={(e) => setFormacaoForm({...formacaoForm, curso: e.target.value})}
            />
          </div>
          <div>
            <label className={labelClass}>Instituição</label>
            <input
              className={inputClass}
              name="instituicao"
              placeholder="Nome da instituição"
              value={formacaoForm.instituicao}
              onChange={(e) => setFormacaoForm({...formacaoForm, instituicao: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Nível</label>
            <select
              className={inputClass}
              name="nivel"
              value={formacaoForm.nivel}
              onChange={(e) => setFormacaoForm({...formacaoForm, nivel: e.target.value})}
            >
              <option value="">Selecione...</option>
              <option value="Ensino Fundamental">Ensino Fundamental</option>
              <option value="Ensino Médio">Ensino Médio</option>
              <option value="Técnico">Técnico</option>
              <option value="Graduação">Graduação</option>
              <option value="Pós-graduação">Pós-graduação</option>
              <option value="Mestrado">Mestrado</option>
              <option value="Doutorado">Doutorado</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Data de Início</label>
            <input
              className={inputClass}
              name="data_inicio"
              type="date"
              value={formacaoForm.data_inicio}
              onChange={(e) => setFormacaoForm({...formacaoForm, data_inicio: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
          <div>
            <label className={labelClass}>Data de Conclusão</label>
            <input
              className={inputClass}
              name="data_conclusao"
              type="date"
              value={formacaoForm.data_conclusao}
              onChange={(e) => setFormacaoForm({...formacaoForm, data_conclusao: e.target.value})}
              disabled={formacaoForm.cursando}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="cursando"
              checked={formacaoForm.cursando}
              onChange={(e) => setFormacaoForm({...formacaoForm, cursando: e.target.checked})}
              className="w-4 h-4 border-gray-300 rounded accent-[#8E51FF]"
            />
            <label className={labelClass}>Cursando atualmente</label>
          </div>
        </div>

        {/* Lista de formações adicionadas */}
        {formacoes.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-[var(--color-text)]">Formações Adicionadas:</p>
            {formacoes.map((form, index) => (
              <div key={form.id || index} className="bg-violet-50 dark:bg-violet-900/20 p-3 rounded border border-violet-200 dark:border-violet-700">
                <p className="font-semibold text-[var(--color-text)]">{form.curso}</p>
                <p className="text-sm text-[var(--color-text-light)]">{form.instituicao} • {form.nivel}</p>
                {form.cursando && <p className="text-xs text-violet-600">Cursando</p>}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Botão único original ao final */}
      <div className="mb-6">
        <button 
          onClick={handleVisualizarPDF}
          disabled={loading || verificandoPagamento}
          className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-white dark:!text-white font-semibold py-4 rounded-xl transition-colors duration-300"
          style={{ color: '#ffffff' }}
        >
          <FaEye />
          {loading ? 'Gerando...' : 'Visualizar Currículo →'}
        </button>
        <p className="text-xs text-[var(--color-text-light)] dark:text-gray-300 text-center mt-2">
          {pagamentoAtivo 
            ? 'Visualize uma prévia do seu currículo antes de baixar' 
            : '⚠️ Visualização limitada - Faça o pagamento para acesso completo'}
        </p>
      </div>

      {/* Botões de ação - Download só aparece se pagou */}
      <div className="flex justify-center mb-12">
        {pagamentoAtivo ? (
          <button 
            onClick={handleGerarPDF}
            disabled={loading || verificandoPagamento}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300"
          >
            <FaFilePdf />
            {loading ? 'Gerando...' : 'Baixar Currículo PDF'}
          </button>
        ) : (
          <button 
            onClick={() => window.location.href = '/pagamento'}
            className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300"
          >
            <FaLock />
            Desbloquear Download Completo
          </button>
        )}
      </div>
    </main>
  );
}
