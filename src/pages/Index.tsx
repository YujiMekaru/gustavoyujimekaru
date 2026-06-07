import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Footer from "@/components/portfolio/Footer";
import LanguageToggle from "@/components/portfolio/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
