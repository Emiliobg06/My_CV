'use client';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
//import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="bg-gradient-to-br from-white to-sky-50">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;