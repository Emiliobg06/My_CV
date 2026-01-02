'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navigation = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contenido = {
    en: {
      ab: 'About',
      pr: 'Projects',
    },
    es:{
      ab: 'Acerca de mi',
      pr: 'Proyectos',
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: contenido[lang].ab, icon: User },
    { href: '#projects', label: contenido[lang].pr, icon: Code },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-14">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            Emilio Barragan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="font-medium text-foreground transition-colors duration-300 
                           hover:text-transparent hover:bg-clip-text 
                           hover:bg-gradient-to-r hover:from-sky-500 hover:to-cyan-400"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {navItems.map(({ href, label, icon: Icon }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-muted transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;