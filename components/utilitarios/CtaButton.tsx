"use client";

export interface CtaButtonProps {
  text: string;
  href?: string;
}

export function CtaButton({ text, href = "#contato" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center py-3 px-8 rounded-3xl shadow-lg overflow-hidden group bg-primary w-fit cursor-pointer"
    >
      {/* 1. Camada Base: Texto inicial que fica por baixo */}
      <span className="relative z-10 text-text-color font-medium">
        {text}
      </span>

      {/* 2. Camada Hover: Expande a largura de 0 para 100% e ativa as bordas coloridas.
          border-x-0 no estado inicial evita o "traço fantasma" que aparecia mesmo
          com w-0, já que border-transparent ainda ocupa espaço de borda em alguns casos. */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-0 border-x-0 border-transparent bg-primary-hover transition-all duration-500 ease-in-out z-20 overflow-hidden group-hover:w-full group-hover:border-x-2"
      >
        {/* 3. Texto Sobreposto: Muda a cor da fonte e fica perfeitamente centralizado */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-background font-medium">
          {text}
        </span>
      </div>
    </a>
  );
}