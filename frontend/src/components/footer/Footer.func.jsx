'use client';

import { getCurrentYear } from './services';

/**
 * Hook customizado para Footer
 */
export const useFooter = () => {
  const year = getCurrentYear();

  return {
    year,
  };
};
