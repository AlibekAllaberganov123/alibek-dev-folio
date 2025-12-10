import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Shaxsiy portfolio veb-sayt - zamonaviy dizayn, silliq animatsiyalar va to'liq responsiv.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce UI",
    description:
      "Online do'kon uchun foydalanuvchi interfeysi - mahsulotlar, savatcha va checkout sahifalari.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "Ob-havo ma'lumotlarini ko'rsatuvchi ilova - API integratsiya va chiroyli UI.",
    tech: ["JavaScript", "CSS", "API"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Task Manager",
    description:
      "Vazifalarni boshqarish ilovasi - CRUD operatsiyalari va localStorage bilan.",
    tech: ["React", "CSS", "LocalStorage"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />

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
              className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
            >
              Ishlarim
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Mening <span className="neon-text">Loyihalarim</span>
            </motion.h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group glass-card overflow-hidden ${
                  project.featured ? "md:col-span-1" : ""
                }`}
              >
                {/* Card header with gradient */}
                <div className="h-32 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 grid-background opacity-20" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Folder className="w-10 h-10 text-primary/50" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More projects link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub'da ko'proq ko'ring
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
