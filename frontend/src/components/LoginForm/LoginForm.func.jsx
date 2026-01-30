'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginWithEmailPassword, loginWithGoogle } from './services';

/**
 * Hook customizado para gerenciar o estado e lógica do formulário de login
 */
export const useLoginForm = () => {
  const router = useRouter();
  
  // Estados do formulário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Handler para submissão do formulário de login
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError('');

      const data = await loginWithEmailPassword(email, password);
      
      console.log('Login realizado com sucesso:', data);
      
      // Redirecionar para a página de currículo ou dashboard
      router.push('/curriculo');
    } catch (err) {
      setError(err.message || 'Erro ao fazer login. Verifique suas credenciais.');
      console.error('Erro no login:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handler para login com Google
   */
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      
      const { result, data } = await loginWithGoogle();
      
      console.log('Login com Google realizado:', result.user);
      console.log('Dados do backend:', data);
      
      // Redirecionar para a página de currículo ou dashboard
      router.push('/curriculo');
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      
      // Se o usuário cancelou o login (fechou a janela)
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        setError('');
        router.refresh(); // Recarrega a página atual
      } else {
        setError('Erro ao fazer login com Google. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Toggle para mostrar/ocultar senha
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    // Estados
    email,
    password,
    showPassword,
    rememberMe,
    loading,
    error,
    
    // Setters
    setEmail,
    setPassword,
    setRememberMe,
    
    // Handlers
    handleSubmit,
    handleGoogleLogin,
    togglePasswordVisibility,
  };
};
