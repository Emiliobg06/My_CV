'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, BarChart3, ChartScatter, TrendingUp, Dice5 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProjectsSection = () => {
  const { lang, toggleLang } = useLanguage();

  const contenido = {
    en: {
      title: "Featured projects",
      desc: "A showcase of my data science projects demonstrating expertise in machine learning, statistical modeling, and full-stack development.",
      proj: "View project",
      api: "Open API",
      git: "View all projects on GitHub"
    },

    es: {
      title: "Proyectos destacados",
      desc: "Algunos de mis proyectos de ciencia de datos que muestran mi experiencia en aprendizaje de máquina, modelado estadístico y desarrollo full-stack.",
      proj: "Ver proyecto",
      api: "Despertar API",
      git: "Ver todos los proyectos en GitHub"
    }
  }
  const projectsen = [
    {
      title: 'NLP Research Project',
      description: 'A scholarship service I participated in during my third semester, where I learned how to do Multilabel Classification predictions with Scikitlearn in Python. The goal was to predict professor evaluation outcomes at ITESM based on student feedback data.',
      icon: TrendingUp,
      technologies: ['Python', 'Scikit-learn', 'Pandas','NumPy'],
      category: 'Machine Learning',
      featured: false,
      vp: "/NLP for Student Evaluations.pdf",
      git: "https://github.com/Emiliobg06/NLP_ECOA"
    },
    {
      title: 'Digital Game for Community Service',
      description: 'Developed a React-based digital board game as part of a community service project during Summer 2025, in collaboration with the non-profit organization CIDEPO.',      icon: Dice5,
      technologies: ['React','Vercel'],
      category: 'Front-end Development',
      featured: false,
      vp: "https://pagcidepo.vercel.app/",
      git: "https://github.com/Emiliobg06/pagcidepo"
    },
    {
      title: 'Cars Investigation',
      description: 'A project I did on my own, where I extracted data from an American Fuel API, using web scraping techniques with Python and BeautifulSoup. I then analyzed and managed the data using Pandas and visualized it with Seaborn and Matplotlib.',
      icon: BarChart3,
      technologies: ['Python', 'Pandas', 'BeautifulSoup', 'Seaborn', 'Matplotlib'],
      category: 'Data Visualization and Extraction',
      featured: false,
      vp: "/Vehicle Fuel Data Extraction.pdf",
      git: "https://github.com/Emiliobg06/Cars_inv"
    },
    {
      title: 'Football Data Extraction',
      description: 'Developed a data extraction and visualization project focused on analyzing player nationalities using data scraped from SofaScore. The project automates data collection with Python and BeautifulSoup, processes and cleans datasets with Pandas, and visualizes the distribution of nationalities across leagues using React.js. (Click Open API before viewing the project)',
      icon: ChartScatter,
      technologies: ['Python','Pandas', 'React', 'Flask'],
      category: 'Web Extraction',
      featured: false,
      vp: "https://natdistribution.vercel.app/",
      git: "https://github.com/Emiliobg06/Jugadores_x_Pais",
      api: "https://api-jugadores-8wlm.onrender.com/report"
    }
  ];

  const projectses = [
    {
      title: 'Proyecto de Investigación en NLP',
      description:  'Un servicio becario en el que participé durante mi tercer semestre donde aprendí a hacer un modelo de predicción de clasificación con más de una etiqueta utilizando Scikitlearn en Python. El objetivo era predecir las etiquetas de las evaluaciones de los profesores en el ITESM basándose en los datos de retroalimentación de los estudiantes.',
      icon: TrendingUp,
      technologies: ['Python', 'Scikit-learn', 'Pandas','NumPy'],
      category: 'Aprendizaje de máquina',
      featured: false,
      vp: "/NLP for Student Evaluations.pdf",
      git: "https://github.com/Emiliobg06/NLP_ECOA"
    },
    {
      title: 'Juego Digital para Servicio Social',
      description: 'Desarrollé un juego digital basado en React como parte de un proyecto de servicio social durante el verano de 2025, en colaboración con la organización CIDEPO.',
      icon: Dice5,
      technologies: ['React','Vercel'],
      category: 'Desarrollo Front-end',
      featured: false,
      vp: "https://pagcidepo.vercel.app/",
      git: "https://github.com/Emiliobg06/pagcidepo"
    },
    {
      title: 'Investigación de Autos',
      description: 'Un proyecto que hice por mi cuenta donde extraje datos de una API de datos de combustible en Estados Unidos, utilizando técnicas de web scraping y ETL con Python y BeautifulSoup. Luego analicé los datos utilizando Pandas y los visualicé con Seaborn y Matplotlib.',
      icon: BarChart3,
      technologies: ['Python', 'Pandas', 'BeautifulSoup', 'Seaborn', 'Matplotlib'],
      category: 'Visualización y Extracción de Datos',
      featured: false,
      vp: "/Vehicle Fuel Data Extraction.pdf",
      git: "https://github.com/Emiliobg06/Cars_inv"
    },
    {
      title: 'Extracción de Datos de Fútbol',
      description: 'Otro proyecto que hice por mi cuenta de extracción y visualización de datos enfocado en analizar las nacionalidades de los jugadores usando datos extraídos de SofaScore. El proyecto automatiza la recolección de datos con Python y BeautifulSoup, procesa y limpia conjuntos de datos con Pandas, y visualiza la distribución de nacionalidades a través de ligas nacionales de futbol usando React.js. (Haz clic en Despertar API antes de ver el proyecto)',
      icon: ChartScatter,
      technologies: ['Python','Pandas', 'React', 'Flask'],
      category: 'Extracción Web',
      featured: false,
      vp: "https://natdistribution.vercel.app/",
      git: "https://github.com/Emiliobg06/Jugadores_x_Pais",
      api: "https://api-jugadores-8wlm.onrender.com/report"
    }
  ];

  if (lang === 'en') {
    var projects = projectsen;
  } else {
    var projects = projectses;
  }



  //const categories = ['All', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Recommender Systems'];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sky-500">
            {contenido[lang].title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {contenido[lang].desc}
          </p>
        </div>

        {/* Category Filters 
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              className={
                category === 'All'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-white px-5'
                  : 'border border-gray-300 text-gray-700 bg-white hover:border-sky-400 hover:text-sky-500'
              }
            >
              {category}
            </Button>
          ))}
        </div>
        */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className={`shadow-sm border border-gray-200 hover:shadow-md transition rounded-2xl ${
                  project.featured ? 'ring-2 ring-sky-100' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-sky-50 rounded-lg">
                      <IconComponent className="h-6 w-6 text-sky-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {project.category}
                        </Badge>
                        {project.featured && (
                          <Badge className="bg-sky-500 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Key Metrics 
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex}
                        className="text-center p-2 bg-sky-50 rounded-lg"
                      >
                        <div className="text-sm font-semibold text-sky-500">
                          {metric.split(' ')[0]}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                  */}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-sky-100 text-sky-700 border border-sky-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <a href={project.vp} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-400 text-white hover:shadow-md"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {contenido[lang].proj}
                    </Button>
                    </a>
                    {project.api && (
                      <a href={project.api} target="_blank" rel="noopener noreferrer">
                        <Button 
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-400 text-white hover:shadow-md"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {contenido[lang].api}
                          </Button>
                          </a>
                        )}
                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-gray-300 hover:border-sky-400">
                      <Github className="h-4 w-4" />
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="https://github.com/Emiliobg06" target="_blank"
      rel="noopener noreferrer" className="hover:text-sky-500 transition-transform transform hover:scale-110">
          <Button 
            size="lg"
            variant="outline"
            className="border-sky-400 text-sky-500 hover:bg-sky-500 hover:text-white px-8"
          >
            {contenido[lang].git}
            <Github className="ml-2 h-4 w-4" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;