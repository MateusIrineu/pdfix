'use client';

import { useEffect } from 'react';
import { trackPageView } from './services';

/**
 * Hook customizado para HomePage
 */
export const useHomePage = () => {
  useEffect(() => {
    // Track page view quando componente monta
    trackPageView();
  }, []);

  return {
    // Futuras funcionalidades podem ser adicionadas aqui
  };
};
