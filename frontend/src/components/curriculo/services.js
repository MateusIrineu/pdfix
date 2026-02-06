import { competenciasAPI, experienciasAPI, formacaoAPI, usuariosAPI, dadosPessoaisAPI } from '../../lib/api';

/**
 * Obtém o usuario_id do Firebase Authentication (Google)
 * @returns {string|null} ID do usuário autenticado
 */
const getUsuarioId = () => {
  // TODO: Implementar integração com Firebase Auth
  // Por enquanto, retorna um ID mock para teste
  // Quando implementar Firebase Auth, use: firebase.auth().currentUser?.uid
  return localStorage.getItem('usuario_id') || null;
};

/**
 * Salva dados pessoais no backend (sempre cria novo registro)
 * @param {Object} dadosPessoais - Dados pessoais
 * @returns {Promise<Object>} Dados salvos
 */
export const salvarDadosPessoais = async (dadosPessoais) => {
  try {
    const usuario_id = getUsuarioId();
    if (!usuario_id) {
      throw new Error('Usuário não autenticado');
    }

    // Sempre criar novo registro (permite múltiplos currículos)
    const response = await dadosPessoaisAPI.criar({
      ...dadosPessoais,
      usuario_id,
    });

    // Também salvar no localStorage para uso offline
    localStorage.setItem('dadosPessoais', JSON.stringify(dadosPessoais));
    
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar dados pessoais:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao salvar dados pessoais');
  }
};

/**
 * Recupera dados pessoais do backend (retorna lista de todos os registros)
 * @returns {Promise<Array>} Lista de dados pessoais
 */
export const recuperarDadosPessoais = async () => {
  try {
    const usuario_id = getUsuarioId();
    if (!usuario_id) {
      // Se não estiver autenticado, tentar pegar do localStorage
      const dados = localStorage.getItem('dadosPessoais');
      return dados ? JSON.parse(dados) : null;
    }

    const response = await dadosPessoaisAPI.buscarPorUsuario(usuario_id);
    
    // Retorna lista de dados pessoais (permite múltiplos currículos)
    return response.data;
  } catch (error) {
    console.error('Erro ao recuperar dados pessoais:', error);
    
    // Fallback para localStorage
    const dados = localStorage.getItem('dadosPessoais');
    return dados ? JSON.parse(dados) : null;
  }
};

/**
 * Adiciona uma competência no backend
 * @param {Object} competencia - Dados da competência
 * @returns {Promise<Object>} Competência criada
 */
export const adicionarCompetencia = async (competencia) => {
  try {
    const usuario_id = getUsuarioId();
    if (!usuario_id) {
      throw new Error('Usuário não autenticado');
    }

    const response = await competenciasAPI.criar({
      ...competencia,
      usuario_id,
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar competência:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao adicionar competência');
  }
};

/**
 * Lista todas as competências do usuário
 * @returns {Promise<Array>} Lista de competências
 */
export const listarCompetencias = async () => {
  try {
    const response = await competenciasAPI.listar();
    return response.data;
  } catch (error) {
    console.error('Erro ao listar competências:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao listar competências');
  }
};

/**
 * Atualiza uma competência
 * @param {string} competencia_id - ID da competência
 * @param {Object} dados - Dados atualizados
 * @returns {Promise<Object>} Competência atualizada
 */
export const atualizarCompetencia = async (competencia_id, dados) => {
  try {
    const response = await competenciasAPI.atualizar(competencia_id, dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar competência:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao atualizar competência');
  }
};

/**
 * Deleta todas as competências
 * @returns {Promise<void>}
 */
export const deletarCompetencias = async () => {
  try {
    await competenciasAPI.deletar();
  } catch (error) {
    console.error('Erro ao deletar competências:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao deletar competências');
  }
};

/**
 * Adiciona uma experiência profissional no backend
 * @param {Object} experiencia - Dados da experiência
 * @returns {Promise<Object>} Experiência criada
 */
export const adicionarExperiencia = async (experiencia) => {
  try {
    const usuario_id = getUsuarioId();
    if (!usuario_id) {
      throw new Error('Usuário não autenticado');
    }

    const response = await experienciasAPI.criar({
      ...experiencia,
      usuario_id,
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar experiência:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao adicionar experiência');
  }
};

/**
 * Lista todas as experiências do usuário
 * @returns {Promise<Array>} Lista de experiências
 */
export const listarExperiencias = async () => {
  try {
    const response = await experienciasAPI.listar();
    return response.data;
  } catch (error) {
    console.error('Erro ao listar experiências:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao listar experiências');
  }
};

/**
 * Atualiza uma experiência
 * @param {string} experiencia_id - ID da experiência
 * @param {Object} dados - Dados atualizados
 * @returns {Promise<Object>} Experiência atualizada
 */
export const atualizarExperiencia = async (experiencia_id, dados) => {
  try {
    const response = await experienciasAPI.atualizar(experiencia_id, dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar experiência:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao atualizar experiência');
  }
};

/**
 * Deleta uma experiência específica
 * @param {string} experiencia_id - ID da experiência
 * @returns {Promise<void>}
 */
export const deletarExperiencia = async (experiencia_id) => {
  try {
    await experienciasAPI.deletar(experiencia_id);
  } catch (error) {
    console.error('Erro ao deletar experiência:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao deletar experiência');
  }
};

/**
 * Adiciona uma formação acadêmica no backend
 * @param {Object} formacao - Dados da formação
 * @returns {Promise<Object>} Formação criada
 */
export const adicionarFormacao = async (formacao) => {
  try {
    const usuario_id = getUsuarioId();
    if (!usuario_id) {
      throw new Error('Usuário não autenticado');
    }

    const response = await formacaoAPI.criar({
      ...formacao,
      usuario_id,
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar formação:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao adicionar formação');
  }
};

/**
 * Lista todas as formações do usuário
 * @returns {Promise<Array>} Lista de formações
 */
export const listarFormacoes = async () => {
  try {
    const response = await formacaoAPI.listar();
    return response.data;
  } catch (error) {
    console.error('Erro ao listar formações:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao listar formações');
  }
};

/**
 * Atualiza uma formação
 * @param {string} formacao_id - ID da formação
 * @param {Object} dados - Dados atualizados
 * @returns {Promise<Object>} Formação atualizada
 */
export const atualizarFormacao = async (formacao_id, dados) => {
  try {
    const response = await formacaoAPI.atualizar(formacao_id, dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar formação:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao atualizar formação');
  }
};

/**
 * Deleta uma formação específica
 * @param {string} formacao_id - ID da formação
 * @returns {Promise<void>}
 */
export const deletarFormacao = async (formacao_id) => {
  try {
    await formacaoAPI.deletar(formacao_id);
  } catch (error) {
    console.error('Erro ao deletar formação:', error);
    throw new Error(error.response?.data?.mensagem || 'Erro ao deletar formação');
  }
};

/**
 * Gera PDF localmente usando @react-pdf/renderer
 * @param {Object} dados - Dados completos do currículo
 * @param {boolean} isPreview - Se true, gera versão limitada com marca d'água
 * @returns {Promise<Blob>} PDF gerado
 */
export const gerarPDFLocal = async (dados, isPreview = false) => {
  try {
    const { pdf } = await import('@react-pdf/renderer');
    const { CurriculoPDFTemplate } = await import('./CurriculoPDFTemplate');
    const React = await import('react');
    
    const element = React.createElement(CurriculoPDFTemplate, { dados, isPreview });
    const blob = await pdf(element).toBlob();
    return blob;
  } catch (error) {
    console.error('Erro ao gerar PDF localmente:', error);
    throw error;
  }
};

/**
 * Faz download do PDF gerado
 * @param {Blob} pdfBlob - Blob do PDF
 * @param {string} filename - Nome do arquivo
 */
export const downloadPDF = (pdfBlob, filename = 'curriculo.pdf') => {
  const url = window.URL.createObjectURL(pdfBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

/**
 * Gera o PDF do currículo
 * @param {number} usuarioId - ID do usuário
 * @returns {Promise<Blob>} PDF gerado
 */
export const gerarPDF = async (usuarioId) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_URL}/curriculo/gerar-pdf/${usuarioId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao gerar PDF');
    }

    return await response.blob();
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};
