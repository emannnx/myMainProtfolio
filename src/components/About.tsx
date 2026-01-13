import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import heroimage from "../assets/heroimage.jpg";
import profilehero from "../assets/profilehero.jpg";
import pexels from "../assets/pexels-pixabay-356056.jpg";
import pexel from "../assets/image.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">
          About <span className="text-portfolio-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16 mt-12">
          <div className="w-full md:w-2/5 order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-portfolio-primary rounded-2xl transform rotate-6" />
              <div className="relative z-10">
                <img
                  src={pexel}
                  alt="Iman Olabode Bello"
                  className="rounded-2xl w-full max-w-md mx-auto object-cover shadow-lg border-4 border-white"
                />

                {/* Experience badge overlaying the image */}
                <div className="absolute bottom-4 right-4 z-20 p-3 bg-white/95 rounded-xl shadow-xl">
                  <div className="flex flex-col items-center px-3 py-1.5">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                      Experience
                    </span>
                    <span className="text-lg font-bold text-portfolio-primary">
                      3+
                    </span>
                    <span className="text-[10px]">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 order-1 md:order-2">
            <div className="glass-card p-8 relative">
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary">
                Software Engineer
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I’m a Software Engineer with a professional background in MMS
                Software Engineering from NIIT, and hands-on experience building
                modern web and mobile applications using HTML, CSS, JavaScript,
                TypeScript, React, Next.js, Express.Js, React Native, Spring-Boot, and Java. I focus on developing
                reliable, scalable, and user-centered solutions that balance
                performance, functionality, and clean design.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                My technical toolkit includes Tailwind CSS for crafting
                responsive and visually appealing interfaces, strong UI/UX
                design principles for intuitive user flows, and Java for
                structured backend development. I work extensively with Firebase
                for authentication, real-time databases, and secure user
                management, enabling seamless end-to-end application
                functionality.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                In addition to frontend and backend development, I have
                experience deploying and maintaining applications using GitHub,
                custom domains, and modern hosting platforms. I excel at
                translating complex ideas and designs into fully functional,
                production-ready digital products. Driven by continuous
                learning, I enjoy collaborating on forward-thinking projects
                that push the boundaries of web and mobile development while
                delivering real-world impact.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/emannnx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-portfolio-dark text-white rounded-xl hover:bg-black transition-all duration-500 shadow-md"
                >
                  <Github size={18} className="mr-2" />
                  GitHub Profile
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-2.5 text-portfolio-dark bg-portfolio-secondary/30 rounded-xl hover:bg-portfolio-secondary/50 transition-all duration-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Frontend Development",
              description:
                "Creating responsive and intuitive user interfaces with React, React Native, and Tailwind CSS.",
            },
            {
              title: "UI/UX Design",
              description:
                "Designing visually appealing and user-friendly interfaces that deliver exceptional experiences.",
            },
            {
              title: "Backend Development",
              description:
                "Working with Java and database technologies to create robust backend solutions.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="bg-portfolio-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-portfolio-primary text-xl font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
