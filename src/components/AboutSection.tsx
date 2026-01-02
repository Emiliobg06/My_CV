import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';

const AboutSection = () => {
  const { lang, toggleLang } = useLanguage();
  const skills = [
    "Python", "R", "SQL","Scikit-learn",
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Docker", "AWS", "Azure", "Git",
    "Machine Learning", "Statistical Analysis", "Data Mining", "Frontend Development","React", "Power BI", "Power Apps", "SwiftUI",
    "Problem Solving", "Critical Thinking", "Communication", "Prompt Engineering"
  ];

  const educ = {
    en:{
      major: "B.S. in Computer Science and Technology",
      school: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      period: "August 2023 - June 2027"
    },
    es:{
      major: "Ingeniería en Tecnologías Computacionales",
      school: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      period: "Agosto 2023 - Junio 2027"
    }
  };

  const exp1 = {
    en: {
      title: "Data Entry (Temporary)",
      company: "Grupo de Asesores Morales",
      period: "December 2024-January 2025",
      description:
        "Temporary position entering survey data collected at SADM offices.",
    },
    es: {
      title: "Capturista de Datos (Temporal)",
      company: "Grupo de Asesores Morales",
      period: "Diciembre 2024-Enero 2025",
      description:
      "Posición temporal en la que capturé datos de encuestas recolectadas en oficinas de agua y drenaje.",
    }
  };

  const exp2 = {
    en: {
      title: "Bilingual customer service agent",
      company: "Teleperformance",
      period: "June 2023-August 2023",
      description:
        "A job where I developed strong communicational skills and abilities to work as a customer service agent for an internet company.",
    },
    es: {
      title: "Agente de servicio al cliente bilingüe",
      company: "Teleperformance",
      period: "Junio 2023-Agosto 2023",
      description:
      "Un trabajo en el que desarrollé habilidades de comunicación solidas para trabajar como agente de servicio al cliente para una empresa de internet.",
    }
  };

  if (lang === 'es') {
    var edu = [educ.es];
    var experiences = [exp1.es, exp2.es];
  } else{
    var edu = [educ.en];
    var experiences = [exp1.en, exp2.en];
  }


  const contenido = {
    en: {
      abt: "About me",
      desc1: "I live in Monterrey, Mexico, I am 19 years old and I like learning by myself, as well as doing projects on my own related to my interests like football, cars with everything I know, like software development, data extraction, etc. I have year and a half of experience with projects in machine learning, data analysis, and software development. I have some other projects done with community service, scholarships and school projects.",
      tech: "Technical Skills",
      edu: "Education",
      exp: "Experience"
    },

    es: {
      abt: "Sobre mi",
      desc1: "Vivo en Monterrey, Mexico , tengo 19 años y me gusta aprender por mi cuenta, así como involucrar mis gustos como lo es el futbol y los carros con lo que se hacer de desarrollo de software, extracción de datos, etc. Tengo un año y medio de experiencia en proyectos de aprendizaje de máquina, análisis de datos y desarrollo de software. Tengo otros proyectos realizados con servicio social, becario y proyectos escolares.",
      tech: "Habilidades técnicas",
      edu: "Educación",
      exp: "Experiencia"
    }
  }

  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-sky-500">
              {contenido[lang].abt}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {contenido[lang].desc1}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-16 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              {contenido[lang].tech}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 rounded-xl shadow-sm hover:scale-105 transition"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              {contenido[lang].edu}
            </h3>
            <div className="grid gap-6">
              {edu.map((education, index) => (
                <Card
                  key={index}
                  className="portfolio-card shadow-md border border-muted/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {education.major}
                        </h4>
                        <p className="text-accent font-medium text-sky-500">{education.school}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full">
                        {education.period}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              {contenido[lang].exp}
            </h3>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="portfolio-card shadow-md border border-muted/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-accent font-medium text-sky-500">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;