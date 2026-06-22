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
    <section id="cases" className="container-lp py-20">
      <div className="mb-12 max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Cases
        </span>
        <h2 className="mt-2 text-3xl font-bold text-text-color sm:text-4xl">
          Projetos entregues, problemas reais resolvidos
        </h2>
        <p className="mt-3 text-surface-text">
          Uma seleção de trabalhos feitos para clientes reais, do briefing à entrega em produção.
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