"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight, Copy, CheckCircle2, Phone } from "lucide-react";
import { SiGithub, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { useState } from "react";
import { contactType, contactData } from "@/data/contactdata";


function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState<keyof contactType | null>(null);

  // Função para copiar para a área de transferência
  const handleCopy = (info: keyof contactType) => {
    if(info === 'whatsapp')  {
      navigator.clipboard.writeText(contactData.whatsapp.number);
    } else {
      navigator.clipboard.writeText(contactData[info]);
    }
    setCopied(info);
    setTimeout(() => setCopied(null), 2000); // Volta o ícone normal após 2s
  };

  return (
    <section id="contato" className="py-24 bg-background transition-colors duration-300">
      <div className="container-lp">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-surface/10 border border-surface/20 rounded-3xl p-8 px-4 sm:px-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Efeito visual decorativo de fundo (opcional, usa a cor primária bem suave) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:items-center">
            
            {/* Coluna da Esquerda: Chamada Principal */}
            <div className="lg:flex-[1.4] flex flex-col gap-6">
              <h2 className="text-3xl max-[480px]:text-2xl sm:text-4xl xl:text-[40px] font-bold text-foreground leading-tight">
                Aberto para novas <span className="bg-degrade bg-clip-text text-transparent !font-geist-sans">oportunidades</span>
              </h2>
              <p className="sm:text-lg text-surface-text leading-relaxed">
                Disponível para novas oportunidades, participação em projetos e parcerias profissionais. Entre em contato para conversarmos sobre como posso contribuir com sua equipe ou negócio.
              </p>

              {/* Botão Principal: WhatsApp */}
              <div className="mt-4 hidden lg:block">
                <a 
                  href={contactData.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-background font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-primary/30"
                >
                  <SiWhatsapp className="size-6" />
                  <span>Chamar no WhatsApp</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Coluna da Direita: Outras Formas de Contato */}
            <div className="lg:flex-1 flex flex-col gap-4">
              
              {/* E-mail (Com botão de copiar) */}
              <div className="group flex items-center justify-between p-4 rounded-2xl bg-background border border-surface/30 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="flex items-center justify-center size-12 rounded-full bg-surface/10 text-text-color group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Mail className="size-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-bold text-text-color">E-mail Profissional</span>
                    <a href={`mailto:${contactData.email}`} className="text-surface-text text-sm hover:text-primary transition-colors truncate">
                      {contactData.email}
                    </a>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy('email')}
                  aria-label="Copiar e-mail"
                  className="cursor-pointer p-2 rounded-lg hover:bg-surface/10 text-surface-text hover:text-text-color transition-colors"
                >
                  {copied === "email" ? <CheckCircle2 className="size-5 text-green-500" /> : <Copy className="size-5" />}
                </button>
              </div>

              <div className="group flex items-center justify-between p-4 rounded-2xl bg-background border border-surface/30 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="flex items-center justify-center size-12 rounded-full bg-surface/10 text-text-color group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Phone className="size-5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-bold text-text-color">Número para contato</span>
                    <p className="text-surface-text text-sm truncate">
                      {contactData.whatsapp.displayNumber}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => handleCopy('whatsapp')}
                  aria-label="Copiar número"
                  className="cursor-pointer p-2 rounded-lg hover:bg-surface/10 text-surface-text hover:text-text-color transition-colors"
                >
                  {copied === "whatsapp" ? <CheckCircle2 className="size-5 text-green-500" /> : <Copy className="size-5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a 
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-background border border-surface/30 hover:border-[#0A66C2]/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center size-12 rounded-full bg-surface/10 text-text-color group-hover:bg-[#0A66C2]/10 group-hover:text-[#0A66C2] transition-colors">
                  <LinkedinIcon className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-color">LinkedIn</span>
                  <span className="text-surface-text text-sm group-hover:text-text-color transition-colors">
                    Conecte-se comigo
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-background border border-surface/30 hover:border-text-color/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center size-12 rounded-full bg-surface/10 text-text-color group-hover:bg-foreground group-hover:text-background transition-colors">
                  <SiGithub className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-color">GitHub</span>
                  <span className="text-surface-text text-sm group-hover:text-text-color transition-colors">
                    Veja meus repositórios
                  </span>
                </div>
              </a>

            </div>
            <div className="block lg:hidden">
              <a 
                href={contactData.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-background font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-primary/30"
              >
                <SiWhatsapp className="size-6" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}