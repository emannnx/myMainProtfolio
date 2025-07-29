
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";
import healthhub from '../assets/Healthhub.png'
import fgclothings from '../assets/fgclothings.png'
import fransispets from '../assets/fransispet.png'
import emanninsite from '../assets/emanninsite.png'
import springImage from '../assets/SpringBoot.jpg'

const projects = [
  {
    id: 1,
    title: "An Healthcare system website",
    image: healthhub,
    description: "A modern and interactive website to manage healthcare services, appointments, and patient information.",
    tags: ["React-js", "Spring Boot", "CSS"],
    link: "https://healthhub-healthcare.netlify.app/",
    github: "https://github.com/emannnx/HealthCareSystems"
  },
  {
    id: 2,
    title: "E-Commerce lookbook platform (FGClothings)",
    image: fgclothings,
    description: "A full-featured e-commerce lookbook platform for checking out a type of native wear you are interested in.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://fg-clothings.netlify.app/",
    github: "https://github.com/emannnx/FGClothing"
  },
  {
    id: 3,
    title: "fransispets Admin Dashboard",
    image: fransispets,
    description: "A comprehensive admin dashboard with data visualization and management features.",
    tags: ["TypeScript", "CSS"],
    link: "https://francispet.netlify.app/",
    github: "https://github.com/emannnx/FrancisPetLocal"
  },
  {
    id: 4,
    title: "Emannx-inisite AI",
    image: emanninsite,
    description: "An artificial intelligence-powered website that takes in an image or snaps provides personalized recommendations and insights.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://emannx-insight.netlify.app/",
    github: "https://github.com/emannnx"
  },
    {
    id: 5,
    title: "Nutrition Guide",
    image: springImage,
    description: "Nutrition Guide is a web application that provides users with personalized nutrition plans and dietary advice.",
    tags: [ "Spring Boot"],
    link: "https://nutritional-guide.onrender.com",
    github: "https://github.com/emannnx/NutritionGuide"
  },
    {
    id: 6,
    title: "Mood Tracker",
    image: springImage,
    description: "Mood Tracker springboot application.",
    tags: [ "Spring Boot"],
    link: "https://mood-tracker-1zvf.onrender.com",
    github: "https://github.com/emannnx/Mood-Tracker"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-xl border-none bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-portfolio-dark/80 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="font-semibold text-xl text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={18} className="text-white" />
              </a>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="pt-5 px-2">
        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">My <span className="text-portfolio-primary">Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.slice(0, visibleProjects).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={loadMore}
              className="btn-secondary inline-flex items-center"
            >
              Load More Projects <Eye size={18} className="ml-2" />
            </button>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/emannnx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-portfolio-primary hover:text-portfolio-dark transition-colors font-medium"
          >
            View All Projects on GitHub <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
