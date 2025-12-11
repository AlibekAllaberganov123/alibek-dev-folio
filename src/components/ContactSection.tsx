import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary tracking-widest">
              04 — CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Have a project in mind? Let's build something amazing together.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 bg-transparent border-2 border-border/50 focus:border-primary/50 outline-none text-foreground placeholder:text-muted-foreground transition-colors duration-300 font-medium"
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary group-focus-within:w-full transition-all duration-500" />
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 bg-transparent border-2 border-border/50 focus:border-primary/50 outline-none text-foreground placeholder:text-muted-foreground transition-colors duration-300 font-medium"
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary group-focus-within:w-full transition-all duration-500" />
              </motion.div>
            </div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <textarea
                placeholder="Your message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full px-6 py-4 bg-transparent border-2 border-border/50 focus:border-primary/50 outline-none text-foreground placeholder:text-muted-foreground transition-colors duration-300 resize-none font-medium"
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary group-focus-within:w-full transition-all duration-500" />
            </motion.div>

            <motion.div
              className="flex justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                type="submit"
                className="ghost-button flex items-center gap-3 text-foreground font-medium text-lg"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Let's talk
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          <motion.div
            className="text-center mt-16 pt-16 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground text-sm">
              Or reach me directly at{" "}
              <a
                href="mailto:hello@alibek.dev"
                className="text-foreground hover:gradient-text transition-all duration-300 font-medium"
              >
                hello@alibek.dev
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
