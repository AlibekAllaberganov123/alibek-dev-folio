import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "HTML5",
    level: 95,
    color: "from-orange-500 to-red-500",
    icon: "🌐",
  },
  {
    name: "CSS3",
    level: 90,
    color: "from-blue-500 to-cyan-500",
    icon: "🎨",
  },
  {
    name: "JavaScript",
    level: 85,
    color: "from-yellow-400 to-orange-500",
    icon: "⚡",
  },
  {
    name: "React.js",
    level: 80,
    color: "from-cyan-400 to-blue-500",
    icon: "⚛️",
  },
  {
    name: "Tailwind CSS",
    level: 88,
    color: "from-teal-400 to-cyan-500",
    icon: "💨",
  },
  {
    name: "Bootstrap",
    level: 85,
    color: "from-purple-500 to-violet-600",
    icon: "🅱️",
  },
  {
    name: "Git & GitHub",
    level: 75,
    color: "from-gray-600 to-gray-800",
    icon: "🐙",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 text-sm font-medium text-secondary bg-secondary/10 rounded-full mb-4"
            >
              Texnologiyalar
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Mening <span className="neon-text-green">Skillarim</span>
            </motion.h2>
          </div>

          {/* Skills grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="glass-card p-4 md:p-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <span className="ml-auto text-sm text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              ...va har kuni yangi narsalarni o'rganishda davom etmoqdaman 📚
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
