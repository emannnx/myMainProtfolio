
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroimage from '../assets/heroimage.jpg'
import profilehero from '../assets/profilehero.jpg'
import codeimage from '../assets/codeimage.png'



const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:py-36 min-h-screen flex items-center bg-gradient-to-b from-portfolio-secondary/20 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="px-4 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-sm font-medium mb-6 inline-block"
            >
              Software Engineer
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading"
            >
              Hi, I'm <span className="text-portfolio-primary">Iman</span> <br/>Olabode Bello
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-gray-600 mb-8 max-w-lg text-lg"
            >
              Software Engineer proficient in HTML, CSS, JavaScript, TypeScript, React, React-Native, and Spring Boot, with a strong passion for creating dynamic and engaging user experiences.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-5"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                href="#contact" 
                className="btn-primary flex items-center group"
              >
                Hire Me <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-500" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                href="#contact" 
                className="btn-secondary"
              >
                Let's Talk
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="mt-10 flex space-x-5"
            >
              {[
                { icon: "/lovable-uploads/442bdbda-2fb9-485d-8240-c9266afa143c.png", label: "Connect with me", href: "https://www.linkedin.com/in/iman-olabode-bello-0870b422a/" },
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  href={link.href}
                  className="inline-flex items-center text-sm text-gray-500 hover:text-portfolio-primary transition-colors duration-500"
                >
                  <span className="opacity-60 hover:opacity-100 transition-opacity duration-500">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-5 bg-portfolio-primary/5 rounded-full blur-3xl"
              ></motion.div>
              <motion.div 
                animate={{ 
                  y: [-10, 0, -10],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-portfolio-accent rounded-full blur-xl"
              ></motion.div>
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-portfolio-secondary rounded-full blur-xl opacity-80"
              ></motion.div>
              
              <motion.div 
                initial={{ rotate: 3 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 bg-white p-3 rounded-2xl shadow-xl"
              >
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={profilehero}
                  alt="Iman Olabode Bello" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg"
                >
                  <div className="flex items-center space-x-2 px-3 py-1">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="block w-3 h-3 bg-green-500 rounded-full"
                    ></motion.span>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
