import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Heart, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Kod yozishni sevaman",
    description: "Har bir qator kod mening ijodim",
  },
  {
    icon: Rocket,
    title: "Tez o'rganaman",
    description: "Yangi texnologiyalarga ochiqman",
  },
  {
    icon: Heart,
    title: "Ishni sevib qilaman",
    description: "Har bir loyiha qalbimdan o'tadi",
  },
  {
    icon: Zap,
    title: "Energiya to'la",
    description: "16 yoshlik determinatsiya",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
            >
              Men haqimda
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Kim bo'laman <span className="gradient-text">men?</span>
            </motion.h2>
          </div>

          {/* About content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card p-6 md:p-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Salom! Men{" "}
                  <span className="text-primary font-semibold">
                    Alibek Allaberganov
                  </span>
                  , 16 yoshda frontend development yo'nalishida rivojlanayapman.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Kodlashni o'rganishni boshlaganimdan beri har kuni o'z ustimda
                  ishlayapman. Men tez o'rganaman, yangi texnologiyalarga
                  qiziqaman va har bir loyihani qalbimdan sevib qilaman.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mening maqsadim — zamonaviy, foydalanuvchilarga qulay va
                  chiroyli veb-saytlar yaratish. Kelajakda katta texnologiya
                  kompaniyalarida ishlash va o'z startapimni ochish orzuim bor.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "16", label: "Yoshim" },
                  { value: "7+", label: "Skillar" },
                  { value: "∞", label: "Motivatsiya" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 glass-card"
                  >
                    <div className="text-2xl md:text-3xl font-bold neon-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group glass-card p-5 text-center neon-border-hover cursor-default"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
