'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  //const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              DataSci Portfolio
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Transforming data into actionable insights through innovative 
              machine learning solutions and advanced analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">
              Connect
            </h4>
            <div className="space-y-3">
              <a 
                className="flex items-center space-x-2 text-secondary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>emiliobarragang@gmail.com</span>
              </a>
              
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/Emiliobg06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/emilio-barrag%C3%A1n-godoy-29b66b312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section 
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} [Your Name]. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1 text-secondary-foreground/60 text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;