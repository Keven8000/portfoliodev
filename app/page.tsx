import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/Hero"; 
import { CasesSection } from "@/components/sections/cases/CasesSection";
import { EducationTechSection } from "@/components/sections/EducationTechSection";
export default function Home() {
  return (
    <main className="overflow-x-clip ">
      <Header/> 
      <HeroSection/>
      <CasesSection/>
      <EducationTechSection/>
    </main>
  );
} 
