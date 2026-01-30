'use client';

import { useState, useEffect } from 'react';
import { isAuthenticated, getUser, logout } from './services';

/**
 * Hook customizado para Navbar
 */
export const useNav = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar autenticação ao montar
    const isAuth = isAuthenticated();
    setAuthenticated(isAuth);
    
    if (isAuth) {
      const userData = getUser();
      setUser(userData);
    }
  }, []);

  /**
   * Handler para logout
   */
  const handleLogout = () => {
    logout();
  };

  return {
    user,
    authenticated,
    handleLogout,
  };
};
