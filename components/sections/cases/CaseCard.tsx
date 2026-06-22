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
          className="mt-auto flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-hover"
        >
          Saber mais
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}