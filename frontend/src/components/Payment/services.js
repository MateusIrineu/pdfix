/**
 * Serviços relacionados ao pagamento
 */

const API_URL = 'http://localhost:3001/api';

/**
 * Verifica se o usuário tem pagamento ativo
 * @returns {Promise<boolean>}
 */
export async function verificarPagamento() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
      return false;
    }

    // Verificar no localStorage (cache local)
    const pagamentoCache = localStorage.getItem('pagamento_ativo');
    if (pagamentoCache) {
      const { ativo, expiracao } = JSON.parse(pagamentoCache);
      if (ativo && new Date(expiracao) > new Date()) {
        return true;
      }
    }

    // Verificar no backend
    const response = await fetch(`${API_URL}/pagamento/verificar/${user.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      
      // Cachear resultado por 1 hora
      if (data.ativo) {
        const expiracao = new Date();
        expiracao.setHours(expiracao.getHours() + 1);
        localStorage.setItem('pagamento_ativo', JSON.stringify({
          ativo: true,
          expiracao: expiracao.toISOString(),
        }));
      }
      
      return data.ativo;
    }

    return false;
  } catch (error) {
    console.error('Erro ao verificar pagamento:', error);
    return false;
  }
}

/**
 * Processa o pagamento do usuário
 * @param {Object} dadosPagamento - Dados do pagamento
 * @returns {Promise<Object>}
 */
export async function processarPagamento(dadosPagamento) {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
      throw new Error('Usuário não autenticado');
    }

    const response = await fetch(`${API_URL}/pagamento/processar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        usuario_id: user.id,
        ...dadosPagamento,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao processar pagamento');
    }

    const data = await response.json();
    
    // Atualizar cache local
    const expiracao = new Date();
    expiracao.setHours(expiracao.getHours() + 1);
    localStorage.setItem('pagamento_ativo', JSON.stringify({
      ativo: true,
      expiracao: expiracao.toISOString(),
    }));

    return data;
  } catch (error) {
    console.error('Erro ao processar pagamento:', error);
    throw error;
  }
}

/**
 * Limpa o cache de pagamento
 */
export function limparCachePagamento() {
  localStorage.removeItem('pagamento_ativo');
}

/**
 * Simula pagamento (para desenvolvimento/teste)
 * @returns {Promise<boolean>}
 */
export async function simularPagamento() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const expiracao = new Date();
      expiracao.setHours(expiracao.getHours() + 24); // 24 horas de acesso
      localStorage.setItem('pagamento_ativo', JSON.stringify({
        ativo: true,
        expiracao: expiracao.toISOString(),
      }));
      resolve(true);
    }, 2000); // Simula delay de processamento
  });
}

/**
 * Obtém os planos disponíveis
 * @returns {Array}
 */
export function obterPlanos() {
  return [
    {
      id: 'basico',
      nome: 'Plano Básico',
      preco: 19.90,
      descricao: 'Gere 1 currículo profissional em PDF',
      recursos: [
        '1 currículo em PDF',
        'Templates profissionais',
        'Download imediato',
        'Suporte por email',
      ],
    },
    {
      id: 'premium',
      nome: 'Plano Premium',
      preco: 49.90,
      destaque: true,
      descricao: 'Currículos ilimitados por 30 dias',
      recursos: [
        'Currículos ilimitados',
        'Todos os templates',
        'Edição ilimitada',
        'Suporte prioritário',
        'Validade de 30 dias',
      ],
    },
    {
      id: 'empresarial',
      nome: 'Plano Empresarial',
      preco: 199.90,
      descricao: 'Para equipes e recrutadores',
      recursos: [
        'Até 50 usuários',
        'Currículos ilimitados',
        'API de integração',
        'Suporte 24/7',
        'Treinamento incluso',
      ],
    },
  ];
}
