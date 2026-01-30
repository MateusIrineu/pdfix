/**
 * Obtém o tema salvo no localStorage
 * @returns {string|null} 'dark', 'light' ou null
 */
export const getSavedTheme = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('theme');
};

/**
 * Salva o tema no localStorage
 * @param {string} theme - 'dark' ou 'light'
 */
export const saveTheme = (theme) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
};

/**
 * Verifica se o sistema operacional está em dark mode
 * @returns {boolean} True se estiver em dark mode
 */
export const getSystemTheme = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Aplica o dark mode no documento
 */
export const applyDarkMode = () => {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.add('dark');
};

/**
 * Remove o dark mode do documento
 */
export const removeDarkMode = () => {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.remove('dark');
};
