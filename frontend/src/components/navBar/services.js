// Services para Navbar - logout e verificação de autenticação

/**
 * Realiza logout do usuário
 */
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/';
};

/**
 * Verifica se o usuário está autenticado
 * @returns {boolean} True se estiver autenticado
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

/**
 * Obtém os dados do usuário
 * @returns {Object|null} Dados do usuário ou null
 */
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
