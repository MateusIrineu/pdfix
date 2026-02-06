import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

/**
 * Realiza login com Google
 * @returns {Promise<Object>} Resultado do login
 */
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error);
    
    // Mensagens de erro mais amigáveis
    if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('Login cancelado. Por favor, tente novamente.');
    } else if (error.code === 'auth/popup-blocked') {
      throw new Error('Pop-up bloqueado. Por favor, permita pop-ups para este site.');
    } else if (error.code === 'auth/cancelled-popup-request') {
      throw new Error('Solicitação de login cancelada.');
    } else {
      throw new Error('Erro ao fazer login. Por favor, tente novamente.');
    }
  }
};

/**
 * Realiza logout
 * @returns {Promise<void>}
 */
export const logout = async () => {
  try {
    await auth.signOut();
    localStorage.removeItem('usuario_id');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    window.location.href = '/';
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw error;
  }
};

/**
 * Verifica se o usuário está autenticado
 * @returns {Promise<Object|null>} Usuário atual ou null
 */
export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    });
  });
};
