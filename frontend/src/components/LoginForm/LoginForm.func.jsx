'use client';

import { useState } from 'react';
import { loginWithGoogle } from './services';

/**
 * Hook customizado para gerenciar o formulário de login
 */
export const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Realiza login com Google
   */
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      
      const result = await loginWithGoogle();
      
      // Salvar usuario_id no localStorage
      if (result.user) {
        localStorage.setItem('usuario_id', result.user.uid);
        localStorage.setItem('user_email', result.user.email);
        localStorage.setItem('user_name', result.user.displayName);
      }
      
      // Redirecionar para página de currículo
      window.location.href = '/curriculo';
    } catch (err) {
      setError(err.message || 'Erro ao fazer login com Google');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleGoogleLogin,
  };
};
