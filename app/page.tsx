import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProkerSection from "@/components/ProkerSection";
import TimelineSection from "@/components/TimelineSection";
import ProfileDesaSection from "@/components/ProfileDesaSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F8F5] text-stone-800 selection:bg-[#387D41]/20 selection:text-[#163E1F]">
      <ScrollProgress />
      <Navbar />
      <main className="grow">
        <HeroSection />
        
        <ScrollReveal>
          <ProkerSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <TimelineSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ProfileDesaSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <TeamSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
