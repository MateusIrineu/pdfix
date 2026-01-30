'use client';

import { useState, useEffect } from 'react';
import { 
  getSavedTheme, 
  saveTheme, 
  getSystemTheme, 
  applyDarkMode, 
  removeDarkMode 
} from './services';

/**
 * Hook customizado para gerenciar o tema (dark/light mode)
 */
export const useThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verificar preferência salva - modo claro é o padrão
    const savedTheme = getSavedTheme();

    if (savedTheme === 'dark') {
      setDarkMode(true);
      applyDarkMode();
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      removeDarkMode();
    } else {
      // Se não há preferência salva, usar tema do sistema
      const systemDark = getSystemTheme();
      setDarkMode(systemDark);
      if (systemDark) {
        applyDarkMode();
      } else {
        removeDarkMode();
      }
    }
  }, []);

  /**
   * Alterna entre dark e light mode
   */
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      applyDarkMode();
      saveTheme('dark');
    } else {
      removeDarkMode();
      saveTheme('light');
    }
  };

  return {
    darkMode,
    toggleTheme,
  };
};
