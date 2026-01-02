'use client';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { lang, toggleLang } = useLanguage();
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
  en: {
    degree: "B.S. in Computer Science and Technology",
    desc: "I am a student in computer science interested in working in data science/engineering. Passionate about the development of AI and Machine Learning. I am currently looking for an intern job as a data engineer.",
    btn: "View my work",
  },
  es: {
    degree: "Ingeniero en Tecnologías Computacionales",
    desc: "Soy estudiante de ingeniería en tecnologías computacionales interesado en trabajar en ciencia e ingeniería de datos. Interesado por el desarrollo de inteligencia artificial y aprendizaje de máquina. Actualmente busco una oportunidad de prácticas como ingeniero de datos.",
    btn: "Ver mis proyectos",
  }
};

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Background Circles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-sky-400 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-5 h-5 bg-green-400 rounded-full opacity-70 animate-bounce delay-200"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-sky-600 rounded-full opacity-70 animate-pulse delay-500"></div>

      <div className="text-center z-10 px-4">
        {/* Name and Title */}

        <div className="absolute top-20 right-6">
          <button
          onClick={toggleLang}
          className="px-4 py-2 rounded-lg border border-sky-400 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white transition"
          >
            {lang === 'en' ? 'ES' : 'EN'}
            </button>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-sky-500">
          Emilio Barragan
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          {content[lang].degree}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {content[lang].desc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-8 hover:shadow-lg transition-all duration-300"
            onClick={scrollToAbout}
          >
            {content[lang].btn}
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Emiliobg06" target="_blank"
      rel="noopener noreferrer" className="hover:text-sky-500 transition-transform transform hover:scale-110">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/emilio-barrag%C3%A1n-godoy-29b66b312/" target="_blank"
      rel="noopener noreferrer" className="hover:text-sky-500 transition-transform transform hover:scale-110">
            <Linkedin className="h-6 w-6" />
          </a>
          {/* Social Links 
          <a href="#" className="hover:text-sky-500 transition-transform transform hover:scale-110">
            <Mail className="h-6 w-6" />
          </a>
          */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;