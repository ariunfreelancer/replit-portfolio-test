import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
