import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-mono text-primary tracking-widest">
                01 — ABOUT
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 leading-tight">
                Building the
                <br />
                <span className="gradient-text">future</span> of web
              </h2>

              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary" />
                <span className="text-muted-foreground text-sm font-mono">
                  Est. 2024
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-foreground leading-relaxed">
                16 yoshli frontend dasturchiman, lekin yoshim mening
                imkoniyatlarimni cheklamaydi.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Men zamonaviy web texnologiyalari bilan ishlashni yaxshi
                ko'raman. Har bir loyiha — bu yangi imkoniyat, yangi tajriba va
                yangi qadamdir.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Tez o'rganaman, har bir loyihani sevib qilaman va foydalanuvchi
                uchun mukammal tajriba yaratishga intilaman. Mening maqsadim —
                oddiy emas, balki yodda qoladigan veb-saytlar yaratish.
              </p>

              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                {[
                  { number: "10+", label: "Projects" },
                  { number: "1+", label: "Years exp" },
                  { number: "∞", label: "Passion" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <span className="block text-2xl md:text-3xl font-display font-bold gradient-text">
                      {stat.number}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
