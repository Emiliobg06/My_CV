import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    "Python", "R", "SQL","Scikit-learn",
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Docker", "AWS", "Azure", "Git",
    "Machine Learning", "Statistical Analysis", "Data Mining", "Frontend Development","React", "Power BI", "Power Apps"
  ];

  const experiences = [
    {
      title: "Data Entry (Temporary)",
      company: "Grupo de Asesores Morales",
      period: "December 2024-January 2025",
      description:
        "Temporary position entering survey data collected at SADM offices.",
    },
    {
      title: "Bilingual customer service agent",
      company: "Teleperformance",
      period: "June 2023-August 2023",
      description:
        "A job where I developed strong communicational skills and abilities to work as a customer service agent for internet companies.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50 from-white to-sky-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-sky-500">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I am a passionate computer scientist with a year of experience with projects in machine learning, data analysis, 
              and software development. I have some other projects done with community service, scholarships and school projects.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-16 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Technical Skills
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

          {/* Experience */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Experience
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