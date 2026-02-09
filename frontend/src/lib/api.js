import axios from 'axios';

// Configuração base da API
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token se necessário no futuro
api.interceptors.request.use(
  (config) => {
    // Aqui você pode adicionar token de autenticação se necessário
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erro com resposta do servidor
      console.error('Erro da API:', error.response.data);
    } else if (error.request) {
      // Erro de rede
      console.error('Erro de conexão:', error.message);
    } else {
      console.error('Erro:', error.message);
    }
    return Promise.reject(error);
  }
);

// ============================================
// COMPETÊNCIAS
// ============================================
export const competenciasAPI = {
  criar: (data) => api.post('/competencias', data),
  listar: () => api.get('/competencias'),
  atualizar: (competencia_id, data) => api.patch(`/competencias/${competencia_id}`, data),
  deletar: () => api.delete('/competencias'), // Deleta todas
};

// ============================================
// EXPERIÊNCIAS PROFISSIONAIS
// ============================================
export const experienciasAPI = {
  criar: (data) => api.post('/experiencia', data),
  listar: () => api.get('/experiencia'),
  atualizar: (experiencia_id, data) => api.patch(`/experiencia/${experiencia_id}`, data),
  deletar: (experiencia_id) => api.delete(`/experiencia/${experiencia_id}`),
  deletarTodas: () => api.delete('/experiencia'),
};

// ============================================
// FORMAÇÃO ACADÊMICA
// ============================================
export const formacaoAPI = {
  criar: (data) => api.post('/formacao', data),
  listar: () => api.get('/formacao'),
  buscarPorId: (formacao_id) => api.get(`/formacao/${formacao_id}`),
  atualizar: (formacao_id, data) => api.patch(`/formacao/${formacao_id}`, data),
  deletar: (formacao_id) => api.delete(`/formacao/${formacao_id}`),
  deletarTodas: () => api.delete('/formacao'),
};

// ============================================
// USUÁRIOS (caso necessário)
// ============================================
export const usuariosAPI = {
  criar: (data) => api.post('/usuarios', data),
  listar: () => api.get('/usuarios'),
  buscarPorId: (id) => api.get(`/usuarios/${id}`),
  atualizar: (id, data) => api.patch(`/usuarios/${id}`, data),
  deletar: (id) => api.delete(`/usuarios/${id}`),
};

// ============================================
// DADOS PESSOAIS
// ============================================
export const dadosPessoaisAPI = {
  criar: (data) => api.post('/dados-pessoais', data),
  listar: () => api.get('/dados-pessoais'),
  buscarPorId: (dados_pessoais_id) => api.get(`/dados-pessoais/${dados_pessoais_id}`),
  buscarPorUsuario: (usuario_id) => api.get(`/dados-pessoais/usuario/${usuario_id}`),
  atualizar: (dados_pessoais_id, data) => api.patch(`/dados-pessoais/${dados_pessoais_id}`, data),
  deletar: (dados_pessoais_id) => api.delete(`/dados-pessoais/${dados_pessoais_id}`),
  deletarPorUsuario: (usuario_id) => api.delete(`/dados-pessoais/usuario/${usuario_id}`),
};

export default api;
