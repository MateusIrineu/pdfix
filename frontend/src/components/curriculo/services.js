const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Cria um novo currículo
 * @param {Object} curriculoData - Dados do currículo
 * @returns {Promise<Object>} Currículo criado
 */
export const criarCurriculo = async (curriculoData) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_URL}/curriculo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(curriculoData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao criar currículo');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao criar currículo:', error);
    throw error;
  }
};

/**
 * Salva dados pessoais do usuário
 * @param {Object} dadosPessoais - Dados pessoais
 * @returns {Promise<Object>} Usuário atualizado
 */
export const salvarDadosPessoais = async (dadosPessoais) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_URL}/usuario/perfil`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(dadosPessoais),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao salvar dados pessoais');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao salvar dados pessoais:', error);
    throw error;
  }
};

/**
 * Adiciona uma competência
 * @param {Object} competencia - Dados da competência
 * @returns {Promise<Object>} Competência criada
 */
export const adicionarCompetencia = async (competencia) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_URL}/competencias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(competencia),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao adicionar competência');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao adicionar competência:', error);
    throw error;
  }
};

/**
 * Adiciona uma experiência profissional
 * @param {Object} experiencia - Dados da experiência
 * @returns {Promise<Object>} Experiência criada
 */
export const adicionarExperiencia = async (experiencia) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_URL}/experiencia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(experiencia),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao adicionar experiência');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao adicionar experiência:', error);
    throw error;
  }
};

/**
 * Adiciona uma formação acadêmica
 * @param {Object} formacao - Dados da formação
 * @returns {Promise<Object>} Formação criada
 */
export const adicionarFormacao = async (formacao) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await fetch(`${API_URL}/formacao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formacao),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao adicionar formação');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao adicionar formação:', error);
    throw error;
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
