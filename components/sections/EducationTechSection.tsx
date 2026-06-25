"use client";

import { motion } from "motion/react";
import { Download, GraduationCap, BookOpen } from "lucide-react";
import { techIconMap, fallbackIcon } from "@/data/techIconMap";
import {educationData, techCategories} from "@/data/educationdata"



// --- COMPONENTE PRINCIPAL ---

export function EducationTechSection() {
  return (
    <section id="sobre" className="py-10 sm:py-20 bg-background transition-colors duration-300">
      <div className="container-lp">
        
        {/* Cabeçalho da Seção */}
        <div className=" mb-10 sm:mb-16 xl:max-w-1/2 ">
          <h2 className="text-3xl max-[480px]:text-2xl sm:text-4xl text-foreground font-bold mb-4">
            Educação & Tecnologias
          </h2>
          <p className="text-surface-text leading-relaxed sm:text-lg">
            Minha base acadêmica e o ecossistema de ferramentas que utilizo para <span className="bg-degrade bg-clip-text text-transparent">construir e escalar soluções.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLUNA ESQUERDA: Educação e Currículo */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-surface/10 border border-surface/20 rounded-3xl py-8 px-4 sm:px-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="size-8 text-primary" />
                <h3 className="text-2xl text-foreground font-bold">Formação</h3>
              </div>

              <div className="flex flex-col gap-8">
                {educationData.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="mt-1 flex shrink-0 items-center justify-center size-8 rounded-full bg-surface/20 text-text-color">
                      <BookOpen className="size-4" />
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-text-color leading-tight mb-1">
                        {item.course}
                      </h4>
                      <p className="text-sm text-surface-text">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA do Currículo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="/curriculo.pdf" // Substitua pelo caminho real do seu PDF
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden lg:flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-2xl transition-colors duration-300 shadow-lg cursor-pointer"
              >
                <span>Baixar Currículo (PDF)</span>
                <Download className="size-5 transition-transform group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

          {/* COLUNA DIREITA: Stack de Tecnologias */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {techCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              
              return (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface/5 border border-surface/15 transition-colors duration-200 hover:border-primary/80 rounded-3xl py-8 px-4 sm:px-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CategoryIcon className="size-6 text-text-color" />
                      <h3 className="text-xl sm:text-2xl text-foreground font-bold">
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Badge visual (Profissional vs Pessoal) */}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      category.badge === "Profissional" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-surface/20 text-surface-text"
                    }`}>
                      {category.badge}
                    </span>
                  </div>

                  {/* Grid de Ícones e Nomes */}
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((tech) => {
                      const Icon = techIconMap[tech];
                      const Fallback = fallbackIcon;
                      
                      // 1. Array com os nomes das tecnologias que usam Lucide React
                      const isLucideIcon = [
                        "E-commerces", 
                        "APIs REST", 
                        "Webhooks", 
                        "TablePlus",
                        "Evolution API"
                      ].includes(tech);
                      
                      return (
                        <div 
                          key={tech}
                          className="flex items-center gap-2 px-4 py-2 bg-background border border-surface/30 rounded-xl shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-default"
                        >
                          {Icon ? (
                            // 2. O Pulo do Gato: Se for Lucide, passa um objeto vazio {}. Se for Marca, passa { color: "default" }
                            <Icon 
                              {...(isLucideIcon ? {} : { color: "default" })}
                              size={18} 
                              className="text-text-color" 
                            />
                          ) : (
                            <Fallback size={18} className="text-text-color" />
                          )}
                          <span className="text-sm font-medium text-text-color">
                            {tech}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  
                </motion.div>
                
              )
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <a 
                href="/curriculo.pdf" // Substitua pelo caminho real do seu PDF
                target="_blank"
                rel="noopener noreferrer"
                className="group flex lg:hidden items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 sm:px-14 rounded-2xl transition-colors duration-300 shadow-lg "
              >
                <span>Baixar Currículo (PDF)</span>
                <Download className="size-5 transition-transform group-hover:-translate-y-1" />
              </a>
            </motion.div>            
          </div>
            
        </div>
      </div>
    </section>
  );
}