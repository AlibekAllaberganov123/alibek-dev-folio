import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML5", icon: "🌐", delay: 0 },
  { name: "CSS3", icon: "🎨", delay: 0.1 },
  { name: "JavaScript", icon: "⚡", delay: 0.2 },
  { name: "React.js", icon: "⚛️", delay: 0.3 },
  { name: "Tailwind", icon: "💨", delay: 0.4 },
  { name: "Bootstrap", icon: "🅱️", delay: 0.5 },
  { name: "Git", icon: "🔀", delay: 0.6 },
  { name: "GitHub", icon: "🐙", delay: 0.7 },
];

const SkillCard = ({
  skill,
  index,
  isInView,
}: {
  skill: (typeof skills)[0];
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: skill.delay + 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="brutalist-card p-6 md:p-8 flex flex-col items-center gap-4 cursor-pointer"
        whileHover={{
          rotateY: 10,
          rotateX: -10,
          z: 50,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="text-4xl md:text-5xl glitch floating-cube"
          data-text={skill.icon}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          {skill.icon}
        </div>

        <span className="text-sm md:text-base font-medium text-foreground group-hover:gradient-text transition-all duration-300">
          {skill.name}
        </span>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary tracking-widest">
              02 — SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          <motion.p
            className="text-center text-muted-foreground mt-12 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            ...and constantly learning more
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
