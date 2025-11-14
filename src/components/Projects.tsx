import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Eye } from "lucide-react";

// Images
import healthhub from "../assets/Healthhub.png";
import fgclothings from "../assets/fgclothings.png";
import fransispets from "../assets/fransispet.png";
import emanninsite from "../assets/emanninsite.png";
import springImage from "../assets/SpringBoot.jpg";
import ramoniktravel from "../assets/ramoniktravel.png";
import nexx from "../assets/nexx.png";
import sushiman from '../assets/sushiman.png'
import xspace from '../assets/x-space.png'
import profilehero from '../assets/profilehero.jpg'

const projects = [
  {
    id: 1,
    title: "Ramonik Travels & Tours",
    image: ramoniktravel,
    description:
      "Ramonik Travel creates seamless, personalized travel experiences that turn every journey into an unforgettable adventure.",
    tags: ["React", "Spring Boot", "CSS"],
    link: "https://ramoniktravel.com/",
    github: "https://github.com/emannnx/Ramonik-World-Connect.git",
  },
  {
    id: 2,
    title: "NEXX Global",
    image: nexx,
    description:
      "NEXX Global delivers forward-thinking digital solutions that help businesses and individuals grow, connect, and thrive.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://www.nexxglobal.net/",
    github: "https://github.com/emannnx/N.EXX---Smart-Crypto-Trading-for-All",
  },
  {
    id: 3,
    title: "FransisPets Admin Dashboard",
    image: fransispets,
    description:
      "A comprehensive admin dashboard with data visualization and management features.",
    tags: ["TypeScript", "CSS"],
    link: "https://francis-pet-emannx.vercel.app/",
    github: "https://github.com/emannnx/FrancisPetLocal",
  },
  {
    id: 4,
    title: "Emannx-Insite AI",
    image: emanninsite,
    description:
      "An AI-powered website that processes images and provides personalized recommendations and insights.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://emannx-insight.vercel.app/",
    github: "https://github.com/emannnx/Emannx-Insight",
  },
  {
    id: 5,
    title: "Sushiman",
    image: sushiman,
    description:
      "Sushiman delivers fresh, handcrafted sushi and Japanese-inspired meals with a commitment to quality, flavor, and exceptional customer experience.",
    tags: ["HTML", "JavaScript", "CSS"],
    link: "https://sushiman-emannx.vercel.app/",
    github: "https://github.com/emannnx/Sushiman-emannx",
  },
  {
    id: 6,
    title: "X-Space",
    image: xspace,
    description:
      "X-Space delivers innovative digital solutions designed to help individuals and businesses connect, create, and thrive in a fast-evolving tech landscape.",
    tags: ["React (TypeScript)", "Supabase", "CSS"],
    link: "https://x-space-emannx.vercel.app/",
    github: "https://github.com/emannnx/x-space-emannx",
  },
  {
    id: 7,
    title: "HealthHub – Healthcare System",
    image: healthhub,
    description:
      "A modern and interactive platform for managing healthcare services, appointments, and patient information.",
    tags: ["React", "Firebase", "CSS"],
    link: "https://health-care-systems-nine.vercel.app/",
    github: "https://github.com/emannnx/HealthCareSystems",
  },
  {
    id: 8,
    title: "Nutrition Guide",
    image: springImage,
    description:
      "A web application that provides personalized nutrition plans and dietary recommendations.",
    tags: ["Spring Boot"],
    link: "https://nutritional-guide.onrender.com",
    github: "https://github.com/emannnx/NutritionGuide",
  },
  {
    id: 9,
    title: "Mood Tracker",
    image: springImage,
    description:
      "A Spring Boot application for tracking daily mood and overall emotional wellness.",
    tags: ["Spring Boot"],
    link: "https://mood-tracker-1zvf.onrender.com",
    github: "https://github.com/emannnx/Mood-Tracker",
  },
];


const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-transparent border-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl h-56">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-portfolio-dark/80 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="font-semibold text-xl text-white mb-2">
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <Github size={18} className="text-white" />
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="pt-5 px-2">
        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">
          My <span className="text-portfolio-primary">Projects</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More */}
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

        {/* GitHub Link */}
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
