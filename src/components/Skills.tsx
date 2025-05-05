
import { useState, useEffect, useRef } from 'react';
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";

const codingSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 50 },
  { name: "Java", level: 40 },
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 80 }
];

const professionalSkills = [
  { name: "Web Design", level: 95 },
  { name: "Web Development", level: 67 },
  { name: "MongoDB", level: 90 },
  { name: "SQL", level: 95 },
  { name: "Spring Boot", level: 75 },
  { name: "React ", level: 70 }
];

const SkillBar = ({ skill, index }) => {
  const [shown, setShown] = useState(false);
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setShown(true);
      }, index * 150);
    }
  }, [isInView, index]);
  
  return (
    <motion.div 
      ref={skillRef}
      initial={{ opacity: 0, y: 20 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8"
    >
      <div className="flex justify-between mb-2">
        <h4 className="font-medium">{skill.name}</h4>
        <span className="text-portfolio-primary font-semibold">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress transition-all duration-500 ease-out"
          style={{ width: shown ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </motion.div>
  );
};

const TechBadge = ({ tech, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.5 }
      }}
      className="bg-white p-5 rounded-xl shadow-md border border-gray-100"
    >
      <span className="font-medium text-gray-800">{tech}</span>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-heading text-center mx-auto"
        >
          My <span className="text-portfolio-primary">Skills</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto mt-12"
        >
          <Tabs defaultValue="coding" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 bg-portfolio-secondary/20">
              <TabsTrigger value="coding" className="text-lg py-3">
                Coding Skills
              </TabsTrigger>
              <TabsTrigger value="professional" className="text-lg py-3">
                Professional Skills
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="coding" className="bg-white p-8 rounded-2xl shadow-lg">
              <div>
                {codingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professional" className="bg-white p-8 rounded-2xl shadow-lg">
              <div>
                {professionalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            "HTML", "CSS", "JavaScript", "React", 
            "MongoDB", "SQL", "Tailwind CSS", "Spring Boot",
            "React-Native","mySQl","Spring","Figma Designing", "Git", "Java", "Responsive Design"
          ].map((tech, index) => (
            <TechBadge key={index} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
