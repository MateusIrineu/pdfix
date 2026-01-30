"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useThemeToggle } from "./ThemeToggle.func";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useThemeToggle();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[var(--color-bg-light)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-pointer"
      aria-label="Alternar tema"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
