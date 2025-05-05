
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "A modern and interactive portfolio website to showcase skills and projects.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/emannnx"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    description: "A full-featured e-commerce platform with user authentication and product management.",
    tags: ["React", "JavaScript", "CSS"],
    link: "#",
    github: "https://github.com/emannnx"
  },
  {
    id: 3,
    title: "Content Management System",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive CMS for managing digital content with user roles and permissions.",
    tags: ["JavaScript", "MongoDB", "Node.js"],
    link: "#",
    github: "https://github.com/emannnx"
  },
  {
    id: 4,
    title: "Admin Dashboard",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive admin dashboard with data visualization and management features.",
    tags: ["JavaScript", "CSS", "MongoDB"],
    link: "#",
    github: "https://github.com/emannnx"
  },
  {
    id: 5,
    title: "Social Media App(Facebook, Amazon, Youtube)",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    description: "A social networking platform with real-time messaging and content sharing.",
    tags: ["React", "Firebase", "CSS"],
    link: "#",
    github: "https://github.com/emannnx"
  },
  {
    id: 6,
    title: "Weather Application",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    description: "A weather forecasting app with location-based data and interactive visuals.",
    tags: ["JavaScript", "API", "CSS"],
    link: "#",
    github: "https://github.com/emannnx"
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
