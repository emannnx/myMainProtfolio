import { useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";

/* ===================== DATA ===================== */

const codingSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "React Native",
  "Expo",
  "NativeWind",
  "Tailwind CSS",
  "Node.js",
  "Firebase",
  "REST APIs",
  "Git & GitHub",
];

const professionalSkills = [
  "Web Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Frontend Engineering",
  "Backend Integration",
  "MongoDB",
  "SQL",
  "Spring Boot",
  "API Integration",
  "Authentication & Authorization",
  "Deployment (Vercel, GitHub Pages)",
  "Performance Optimization",
  "Responsive Design",
];

/* ===================== ANIMATION ===================== */

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

/* ===================== COMPONENTS ===================== */

const SkillCard = ({ skill, index }: { skill: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      whileHover={{ y: -10, scale: 1.04 }}
      className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />

      <h4 className="relative z-10 text-center font-semibold text-gray-800">
        {skill}
      </h4>
    </motion.div>
  );
};

/* ===================== MAIN ===================== */

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-portfolio-primary/20 blur-3xl" />
      <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-6 max-w-xl text-center text-3xl font-bold md:text-4xl"
        >
          My <span className="text-portfolio-primary">Skills & Tools</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-12 max-w-2xl text-center text-gray-600"
        >
          Technologies and professional skills I use to design, build, and
          deploy modern web and mobile applications.
        </motion.p>

        {/* Tabs */}
        <Tabs defaultValue="coding" className="mx-auto max-w-5xl">
          <TabsList className="grid grid-cols-2 rounded-2xl bg-white/70 backdrop-blur-xl shadow-md">
            <TabsTrigger
              value="coding"
              className="rounded-2xl py-3 text-base data-[state=active]:bg-portfolio-primary data-[state=active]:text-white"
            >
              Coding Skills
            </TabsTrigger>
            <TabsTrigger
              value="professional"
              className="rounded-2xl py-3 text-base data-[state=active]:bg-portfolio-primary data-[state=active]:text-white"
            >
              Professional Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="coding" className="mt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {codingSkills.map((skill, i) => (
                <SkillCard key={skill} skill={skill} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="professional" className="mt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {professionalSkills.map((skill, i) => (
                <SkillCard key={skill} skill={skill} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
