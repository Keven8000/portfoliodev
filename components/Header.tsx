"use client";

import { ThemeButton } from "@/components/ThemeButton";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Cases", href: "#cases" },
  { label: "Projetos", href: "#projetos" },
  { label: "Educação & Tecnologias", href: "#educacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="container-lp sticky top-2.5 z-50 text-text-color transition-colors duration-300">
      <div
        className={`flex items-center justify-between gap-4 transition-all duration-300 ease-in-out py-4 ${
          isScrolled
            ? "px-6 bg-background/50 backdrop-blur-[100px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-[15px]"
            : "bg-transparent"
        }`}
      >
        {/* ── Perfil (Esquerda) ── */}
        {/* flex-1 garante que ocupe o mesmo espaço que a div da direita */}
        <div className="lg:flex-1 flex justify-start">
          <Link href="#inicio" className="flex items-center gap-3">
            <Image
              src="/keven-perfil.webp"
              alt="Foto de perfil"
              width={40}
              height={40}
              priority
              className="rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background object-cover"
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold tracking-tight">Keven </span>
              <p className="gap-1 text-xs text-surface-text ">
                João Pessoa, <span className="font-semibold text-nowrap">PB <span className="max-[480px]:hidden">— Developer</span></span>
              </p>
            </div>
          </Link>
        </div>

        {/* ── Nav desktop (Centro) ── */}
        {/* Sem absolute. Alterado de md:flex para lg:flex para evitar quebra de texto */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-3.5 py-2 text-base font-medium rounded-lg text-text-color !font-mono transition-colors duration-150 hover:text-primary hover:bg-primary/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 rounded-full bg-primary transition-all duration-200 group-hover:w-[calc(100%-1.75rem)]" />
            </Link>
          ))}
        </nav>

        {/* ── Ações direita (Direita) ── */}
        {/* flex-1 empurra o centro na mesma proporção do lado esquerdo */}
        <div className="lg:flex-1 flex items-center justify-end gap-2">
          <ThemeButton />

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col justify-center items-center size-9 rounded-lg hover:bg-primary/10 active:bg-primary/15 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 mt-[5px] ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 mt-[5px] ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* ── Nav mobile ── */}
      <div
        className={`lg:hidden overflow-hidden bg-background transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-72 opacity-100 border-t border-surface/20" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-2 gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium rounded-lg text-surface-text hover:text-primary hover:bg-primary/8 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}