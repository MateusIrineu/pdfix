import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Realiza login com email e senha
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 * @returns {Promise<Object>} Dados do usuário logado
 */
export const loginWithEmailPassword = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha: password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao fazer login');
    }

    const data = await response.json();
    
    // Salvar token no localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

/**
 * Realiza login com Google
 * @returns {Promise<Object>} Resultado do login com Google
 */
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    
    // Após login com Google, enviar para o backend para criar/atualizar usuário
    const idToken = await result.user.getIdToken();
    
    const response = await fetch(`${API_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`
      },
      body: JSON.stringify({
        email: result.user.email,
        nome: result.user.displayName,
        photoURL: result.user.photoURL,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao autenticar com Google');
    }

    const data = await response.json();
    
    // Salvar token no localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }

    return { result, data };
  } catch (error) {
    console.error('Erro no login com Google:', error);
    throw error;
  }
};

/**
 * Realiza logout do usuário
 */
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/**
 * Verifica se o usuário está autenticado
 * @returns {boolean} True se estiver autenticado
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

/**
 * Obtém o token do usuário
 * @returns {string|null} Token ou null
 */
export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Obtém os dados do usuário
 * @returns {Object|null} Dados do usuário ou null
 */
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
