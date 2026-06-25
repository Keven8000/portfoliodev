"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { casesData } from "@/data/casesData";
import { CaseCard } from "./CaseCard";
import { CaseDetailPanel } from "./CaseDetailPanel";

export function CasesSection() {
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);

  const activeCase = casesData.find((c) => c.id === activeCaseId) ?? null;

  return (
    <section id="cases" className="container-lp pt-24 pb-20">
      <div className="mb-12 xl:max-w-1/2 ">
        <h2 className="mt-2 text-3xl max-[480px]:text-2xl sm:text-4xl font-bold text-text-color ">
          <span className="bg-degrade bg-clip-text text-transparent !font-geist-sans">Cases entregues,</span> problemas reais resolvidos
        </h2>
        <p className="mt-3 text-surface-text sm:text-lg">
          Uma seleção de <span className="text-primary">cases</span> trabalhos feitos para clientes reais, do briefing à entrega em produção.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {casesData.map((project) => (
          <CaseCard
            key={project.id}
            project={project}
            onOpen={() => setActiveCaseId(project.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeCase && (
          <CaseDetailPanel
            project={activeCase}
            onClose={() => setActiveCaseId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}