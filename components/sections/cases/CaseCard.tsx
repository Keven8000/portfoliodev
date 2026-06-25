"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { CaseProject } from "@/data/casesData";
import { techIconMap, fallbackIcon } from "@/data/techIconMap";
import Image from 'next/image';

interface CaseCardProps {
  project: CaseProject;
  onOpen: () => void;
}

export function CaseCard({ project, onOpen }: CaseCardProps) {
  return (
    <motion.article
      layoutId={`case-card-${project.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-surface/15 bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Espaço reservado para a imagem de capa */}
      <motion.div
        layoutId={`case-cover-${project.id}`}
        className="relative aspect-[1440/700] w-full overflow-hidden bg-surface/10"
      >
        <Image 
            src={project.coverImage} 
            unoptimized 
            alt={project.name} 
            fill className="object-cover" 
        />
      </motion.div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className="flex items-center gap-2 mb-6"> {/* Adicionei items-center e ajustei o gap */}
            <motion.div
              layoutId={`case-logo-${project.id}`}
              className="relative flex items-center justify-center w-14 h-10  " 
            >
              <Image 
                  src={project.logo} 
                  unoptimized 
                  alt={`logo ${project.name}`} 
                  width={64} // Força uma largura base para o NextJS
                  height={64} // Força uma altura base
                  className="w-full h-full object-contain" 
              />
            </motion.div>            
            <span className="w-[1.5px] h-8 bg-surface opacity-60 block " aria-hidden="true" />
            <h3 className="text-2xl font-bold text-text-color">{project.name}</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-surface-text">
            {project.shortDescription}
          </p>
        </div>

        {/* Ícones das tecnologias */}
        <div className="flex flex-wrap items-center gap-3">
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

        <button
          onClick={onOpen}
          className="cursor-pointer mt-auto flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-hover"
        >
          Saber mais
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}