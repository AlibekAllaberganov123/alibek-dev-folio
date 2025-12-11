import { motion } from "framer-motion";
import { Github, Linkedin, Send, ArrowDown } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Send, href: "#", label: "Telegram" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-40" />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="overflow-hidden">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="block text-foreground">Alibek</span>
                <span className="block gradient-text">Allaberganov</span>
              </motion.h1>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-foreground font-medium">
                Frontend Engineer
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                Currently crafting pixel-perfect experiences
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative p-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="w-24 h-[1px] bg-gradient-to-r from-primary via-secondary to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-24 right-12 hidden lg:block">
        <motion.div
          className="w-32 h-32 border border-border/30"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
