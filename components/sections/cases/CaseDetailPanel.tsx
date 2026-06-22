"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, ExternalLink, Clock, Monitor, Smartphone } from "lucide-react";
import type { CaseProject } from "@/data/casesData";
import { techIconMap, fallbackIcon } from "@/data/techIconMap";
import Image from "next/image";

interface CaseDetailPanelProps {
  project: CaseProject;
  onClose: () => void;
}

export function CaseDetailPanel({ project, onClose }: CaseDetailPanelProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeImage = project.gallery[activeImageIndex]?.[viewMode];

  useEffect(() => {
    // 1. COMPONENTE MONTADO (O Modal abriu)
    // Trava a rolagem da página inteira
    document.body.style.overflow = "hidden";

    // 2. COMPONENTE DESMONTADO (O Modal fechou)
    // Tudo que está dentro do 'return' só vai rodar no exato milissegundo 
    // em que o componente for retirado da tela.
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  
  return (
    <>
      {/* Overlay escurecido por trás do painel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-909 bg-foreground/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Wrapper que centraliza o painel na tela */}
      <div onClick={onClose} className="fixed inset-0 z-910 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          onClick={(e) => e.stopPropagation()}
          layoutId={`case-card-${project.id}`}
          className="relative flex max-h-[680px] w-full max-w-5xl flex-col overflow-y-auto rounded-2xl bg-background shadow-2xl lg:flex-row"
        >
          <button
            onClick={onClose}
            aria-label="Fechar painel"
            className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-background/80 text-text-color backdrop-blur-sm transition-colors duration-200 hover:bg-surface/20"
          >
            <X className="size-5" />
          </button>

          {/* ── Coluna esquerda: capa + informações ── */}
          <div className="flex flex-col lg:w-[45%] lg:shrink-0">
            <motion.div
              layoutId={`case-cover-${project.id}`}
              className="relative aspect-[1440/700] w-full overflow-hidden bg-surface/10 lg:aspect-auto lg:h-56"
            >
                <Image 
                src={project.coverImage} 
                unoptimized 
                alt={project.name} 
                fill className="object-cover" 
                />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="flex flex-1 flex-col gap-6 p-6 sm:p-8"
            >
              <div>
                <div className="flex gap-2 items-center mb-6">
                  <motion.div
                    layoutId={`case-logo-${project.id}`}
                    className="relative max-w-12 aspect-[50/40] w-full overflow-hidden "
                  >
                    <Image 
                        src={project.logo} 
                        unoptimized 
                        alt={`logo ${project.name}`} 
                        fill className="max-w-12" 
                    />
                  </motion.div>            
                  <span className="w-px h-8 bg-surface opacity-60 block" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-text-color">{project.name}</h3>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {project.technologies.map((tech) => {
                    const Icon = techIconMap[tech];
                    const FallbackIcon = fallbackIcon;
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full bg-surface/10 px-3 py-1.5 text-surface-text"
                        title={tech}
                      >
                        {Icon ? (
                          <Icon color="default" size={16} />
                        ) : (
                          <FallbackIcon className="size-4" />
                        )}
                        <span className="text-xs font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="leading-relaxed text-surface-text">
                {project.fullDescription}
              </p>

              {project.highlights.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-surface pt-6">
                <div className="flex items-center gap-2 text-sm text-surface-text">
                  <Clock className="size-4" />
                  <span>Desenvolvimento: {project.developmentTime}</span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-colors duration-200 hover:bg-primary-hover"
                >
                  Visitar site
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Coluna direita: galeria interativa ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="flex flex-col gap-4 border-t border-surface p-6 sm:p-8 lg:flex-1 lg:border-l lg:border-t-0"
          >
            {/* Toggle desktop / mobile */}
            <div className="flex items-center">
              <div className="flex items-center gap-1 rounded-full bg-surface/10 p-1">
                <button
                  onClick={() => {
                    setViewMode("desktop");
                    setActiveImageIndex(0);
                  }}
                  aria-label="Ver versão desktop"
                  aria-pressed={viewMode === "desktop"}
                  className={`cursor-pointer flex items-center justify-center rounded-full p-2 transition-colors duration-200 ${
                    viewMode === "desktop"
                      ? "bg-primary text-background"
                      : "text-surface-text hover:text-text-color"
                  }`}
                >
                  <Monitor className="size-4" />
                </button>
                <button
                  onClick={() => {
                    setViewMode("mobile");
                    setActiveImageIndex(0);
                  }}
                  aria-label="Ver versão mobile"
                  aria-pressed={viewMode === "mobile"}
                  className={`cursor-pointer flex items-center justify-center rounded-full p-2 transition-colors duration-200 ${
                    viewMode === "mobile"
                      ? "bg-primary text-background"
                      : "text-surface-text hover:text-text-color"
                  }`}
                >
                  <Smartphone className="size-4" />
                </button>
              </div>
            </div>

            {/* Imagem grande + miniaturas: linha (col abaixo) no desktop, lado a lado (col ao lado) no mobile */}
            <div
              className={
                viewMode === "desktop"
                  ? "flex flex-col gap-4"
                  : "flex justify-center flex-row gap-4"
              }
            >
              {/* Imagem grande em destaque */}
              <div
                className={`relative overflow-hidden bg-surface/10  border-[6px] border-foreground/80 shadow-xl shadow-foreground/20 ${
                  viewMode === "desktop"
                    ? "aspect-[1440/700] w-full rounded-xl"
                    : "aspect-[390/800] w-full max-w-[260px] rounded-[2rem]"
                }`}
              >
                {activeImage && (
                  <Image
                    key={activeImage}
                    src={activeImage}
                    alt={`Captura de tela ${viewMode} do projeto ${project.name}`}
                    unoptimized
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Miniaturas clicáveis: linha (wrap) abaixo no desktop, coluna ao lado no mobile */}
              <div
                className={
                  viewMode === "desktop"
                    ? "flex flex-wrap gap-3"
                    : "flex flex-col gap-3"
                }
              >
                {project.gallery.map((image, index) => (
                  <button
                    key={image[viewMode]}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Mostrar imagem ${index + 1}`}
                    className={`relative overflow-hidden rounded-lg ring-2 transition-all duration-200 ${
                      viewMode === "desktop"
                        ? "aspect-[1440/700] w-24"
                        : "aspect-[390/800] w-14"
                    } ${
                      index === activeImageIndex
                        ? "ring-primary"
                        : "ring-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image[viewMode]}
                      alt={`Miniatura ${index + 1} do projeto ${project.name}`}
                      unoptimized
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}