import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/Hero"; 

export default function Home() {
  return (
    <main className="overflow-x-clip ">
      <Header/> 
      <HeroSection/>
      <div className=" w-1 h-[5000px] bg-amber-500">

      </div>
    </main>
  );
} 
