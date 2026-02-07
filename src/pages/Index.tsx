import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
