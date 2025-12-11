import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern online shopping experience with smooth animations and intuitive UX",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Creative portfolio showcasing projects with unique interactions",
    tech: ["Next.js", "TypeScript", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Analytics dashboard with real-time data visualization",
    tech: ["React", "Chart.js", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Landing Page",
    description: "High-converting landing page with micro-interactions",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
  onSelect,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
  onSelect: () => void;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative ${isEven ? "md:ml-0" : "md:ml-auto"}`}
      initial={{ opacity: 0, x: isEven ? -100 : 100, rotate: isEven ? -5 : 5 }}
      animate={
        isInView ? { opacity: 1, x: 0, rotate: isEven ? -2 : 2 } : {}
      }
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{ maxWidth: "600px" }}
    >
      <motion.div
        className="brutalist-card overflow-hidden cursor-pointer group"
        onClick={onSelect}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute top-4 left-4 z-10">
          <span className="text-6xl md:text-8xl font-display font-bold text-foreground/5 group-hover:text-primary/10 transition-colors duration-500">
            0{index + 1}
          </span>
        </div>

        <div className="p-6 md:p-8 pt-16 md:pt-20 relative z-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mt-3 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-muted/50 text-muted-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
            <span>View details</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
};

const ProjectOverlay = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto brutalist-card"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <motion.h2
            className="text-4xl md:text-6xl font-display font-bold gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono bg-muted text-foreground border border-border"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href={project.liveUrl}
              className="ghost-button flex items-center gap-2 text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="ghost-button flex items-center gap-2 text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              Source Code
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary tracking-widest">
              03 — WORK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectOverlay
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
