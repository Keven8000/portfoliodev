"use client";

import { useTheme } from "./ThemeContext";

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      // p-2 cria um espaço em volta do ícone, rounded-full deixa o hover redondo
      // opacity-50 deixa ele "acinzentado" e hover:opacity-100 acende ao passar o mouse
      className="cursor-pointer p-2 rounded-full text-foreground opacity-50 hover:opacity-100 hover:bg-foreground/5 transition-all duration-300"
    >
      {theme === "light" ? (
        // Ícone da Lua (Aparece no tema claro para convidar pro escuro)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        // Ícone do Sol (Aparece no tema escuro para convidar pro claro)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}