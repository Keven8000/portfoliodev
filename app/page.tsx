import { HeroSection } from "@/components/sections/Hero"; 
import { CasesSection } from "@/components/sections/cases/CasesSection";
import { EducationTechSection } from "@/components/sections/EducationTechSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-clip "> 
      <HeroSection/>
      <CasesSection/>
      <EducationTechSection/>
      <ContactSection/>
    </main>
  );
} 
