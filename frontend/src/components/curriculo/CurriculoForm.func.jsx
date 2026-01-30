'use client';

import { useState, useEffect } from 'react';
import {
  salvarDadosPessoais,
  adicionarCompetencia,
  adicionarExperiencia,
  adicionarFormacao,
  gerarPDF,
} from './services';
import { verificarPagamento } from '../Payment/services';

/**
 * Hook customizado para gerenciar o formulário de currículo
 */
export const useCurriculoForm = () => {
  // Estado de pagamento
  const [pagamentoAtivo, setPagamentoAtivo] = useState(false);
  const [verificandoPagamento, setVerificandoPagamento] = useState(true);

  // Estados para dados pessoais
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    endereco: '',
    idade: '',
    linkedin_url: ''
  });

  // Estados para listas
  const [competencias, setCompetencias] = useState([]);
  const [experiencias, setExperiencias] = useState([]);
  const [formacoes, setFormacoes] = useState([]);

  // Estados de UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Verificar pagamento ao montar o componente
  useEffect(() => {
    async function checkPagamento() {
      try {
        const resultado = await verificarPagamento();
        setPagamentoAtivo(resultado);
      } catch (err) {
        console.error('Erro ao verificar pagamento:', err);
      } finally {
        setVerificandoPagamento(false);
      }
    }
    checkPagamento();
  }, []);

  /**
   * Atualiza campo de dados pessoais
   */
  const handleDadosPessoaisChange = (field, value) => {
    setDadosPessoais(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * Adiciona nova competência à lista
   */
  const handleAdicionarCompetencia = async (competencia) => {
    try {
      setLoading(true);
      const novaCompetencia = await adicionarCompetencia(competencia);
      setCompetencias(prev => [...prev, novaCompetencia]);
      setSuccess('Competência adicionada com sucesso!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Adiciona nova experiência à lista
   */
  const handleAdicionarExperiencia = async (experiencia) => {
    try {
      setLoading(true);
      const novaExperiencia = await adicionarExperiencia(experiencia);
      setExperiencias(prev => [...prev, novaExperiencia]);
      setSuccess('Experiência adicionada com sucesso!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Adiciona nova formação à lista
   */
  const handleAdicionarFormacao = async (formacao) => {
    try {
      setLoading(true);
      const novaFormacao = await adicionarFormacao(formacao);
      setFormacoes(prev => [...prev, novaFormacao]);
      setSuccess('Formação adicionada com sucesso!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Salva dados pessoais
   */
  const handleSalvarDadosPessoais = async () => {
    try {
      setLoading(true);
      setError('');
      await salvarDadosPessoais(dadosPessoais);
      setSuccess('Dados salvos com sucesso!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Gera PDF do currículo localmente (apenas para usuários pagos)
   */
  const handleGerarPDF = async () => {
    try {
      setLoading(true);
      setError('');

      // Verificar se o usuário pagou
      if (!pagamentoAtivo) {
        setError('Você precisa fazer o pagamento para baixar o currículo completo');
        setTimeout(() => {
          window.location.href = '/pagamento';
        }, 2000);
        return;
      }
      
      // Preparar dados para o PDF
      const dadosCompletos = {
        dadosPessoais,
        competencias,
        experiencias,
        formacoes,
      };

      // Gerar PDF completo localmente
      const { gerarPDFLocal, downloadPDF } = await import('./services');
      const pdfBlob = await gerarPDFLocal(dadosCompletos, false);
      
      // Fazer download
      const filename = `curriculo-${dadosPessoais.nome?.replace(/\s+/g, '-').toLowerCase() || 'usuario'}.pdf`;
      downloadPDF(pdfBlob, filename);
      
      setSuccess('Currículo gerado com sucesso!');
    } catch (err) {
      setError(err.message || 'Erro ao gerar currículo');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Visualiza o PDF antes de baixar (modo preview com limitações)
   */
  const handleVisualizarPDF = async () => {
    try {
      setLoading(true);
      setError('');
      
      const dadosCompletos = {
        dadosPessoais,
        competencias,
        experiencias,
        formacoes,
      };

      const { gerarPDFLocal } = await import('./services');
      // Sempre gerar em modo preview para visualização
      const pdfBlob = await gerarPDFLocal(dadosCompletos, true);
      
      // Abrir em nova aba para visualização
      const url = window.URL.createObjectURL(pdfBlob);
      window.open(url, '_blank');
      
      if (!pagamentoAtivo) {
        setSuccess('Prévia limitada aberta! Faça o pagamento para desbloquear o currículo completo.');
      } else {
        setSuccess('Prévia do currículo aberta!');
      }
    } catch (err) {
      setError(err.message || 'Erro ao visualizar currículo');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Limpa mensagens de erro e sucesso
   */
  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  return {
    // Estados
    dadosPessoais,
    competencias,
    experiencias,
    formacoes,
    loading,
    error,
    success,
    pagamentoAtivo,
    verificandoPagamento,

    // Handlers
    handleDadosPessoaisChange,
    handleAdicionarCompetencia,
    handleAdicionarExperiencia,
    handleAdicionarFormacao,
    handleSalvarDadosPessoais,
    handleGerarPDF,
    handleVisualizarPDF,
    clearMessages,
  };
};
