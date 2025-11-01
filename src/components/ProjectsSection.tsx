'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, BarChart3, ChartScatter, TrendingUp, Dice5 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'NLP Research Project',
      description: 'A scholarship service I participated in during my third semester, where I learned how to do Multilabel Classification predictions with Scikitlearn in Python. The project was about predicting professor evaluations done in ITESM.',
      icon: TrendingUp,
      technologies: ['Python', 'Scikit-learn', 'Pandas','NumPy'],
      metrics: ['94% Accuracy', '22% Churn Reduction', '50ms Response Time'],
      category: 'Machine Learning',
      featured: false,
      vp: "/NLP for Student Evaluations.pdf",
      git: "https://github.com/Emiliobg06/NLP_ECOA"
    },
    {
      title: 'Digital Game for Community Service',
      description: 'Developed a React-based digital board game as part of a community service project during Summer 2025, in collaboration with the non-profit organization CIDEPO.',      icon: Dice5,
      technologies: ['React','Vercel'],
      metrics: ['99.7% Precision', '10K TPS', '$2M Saved'],
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
      metrics: ['35% Better Accuracy', '12 Regions', 'Real-time Updates'],
      category: 'Data Visualization',
      featured: false,
      vp: "/Vehicle Fuel Data Extraction.pdf",
      git: "https://github.com/Emiliobg06/Cars_inv"
    },
    {
      title: 'Football Data Extraction',
      description: 'Developed a data extraction and visualization project focused on analyzing player nationalities using data scraped from SofaScore. The project automates data collection with Python and BeautifulSoup, processes and cleans datasets with Pandas, and visualizes the distribution of nationalities across leagues using React.js.',
      icon: ChartScatter,
      technologies: ['Python','Pandas', 'React', 'Flask'],
      metrics: ['1M+ Users', '40% Engagement', '<100ms Latency'],
      category: 'Web Extraction',
      featured: false,
      vp: "https://natdistribution.vercel.app/",
      git: "https://github.com/Emiliobg06/Jugadores_x_Pais"
    }
  ];

  //const categories = ['All', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Recommender Systems'];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sky-500">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my data science projects demonstrating expertise in machine learning, 
            statistical modeling, and full-stack development.
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
                      View Project
                    </Button>
                    </a>
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
            View All Projects on GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;