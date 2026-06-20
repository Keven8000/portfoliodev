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
        <div className="lg:flex-1 z-50 flex items-center justify-end gap-2">
          <ThemeButton />

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="lg:hidden relative z-50 flex flex-col justify-center items-center size-10 rounded-full hover:bg-primary/10 active:bg-primary/15 active:scale-90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span
              className={`absolute block h-[2px] w-5 rounded-full bg-foreground transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 rounded-full bg-foreground transition-all duration-200 ease-in-out ${
                menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute block h-[2px] w-5 rounded-full bg-foreground transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Nav mobile ── */}
      {/* Overlay com fade, fora do fluxo do header para não empurrar layout */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`lg:hidden fixed top-0 right-0 z-40 h-screen w-[80%] max-[440px]:w-full max-w-[320px] max-[440px]:max-w-full bg-background shadow-[-8px_0_30px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex flex-col h-full pb-8 px-6">
          {/*mt-[10px] por causa do top-2.5 no header e pt-4 pois é o py-4 que themebutton e menu hamburguer tem*/}
          <Link 
            onClick={() => setMenuOpen(false)}
            href="#inicio" 
            className="mt-[10px] pt-4 flex items-center gap-3"
          >
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
            </div>
          </Link>          
          <ul className="flex flex-col gap-1 pt-14">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ease-out ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-4 py-3.5 text-lg font-medium rounded-xl text-text-color !font-mono hover:text-primary hover:bg-primary/8 active:bg-primary/15 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-auto pt-6 border-t border-surface/20 text-xs text-surface-text transition-all duration-300 ease-out ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: menuOpen ? "260ms" : "0ms" }}
          >
            João Pessoa, PB — Developer
          </div>
        </div>
      </nav>
    </header>
  );
}