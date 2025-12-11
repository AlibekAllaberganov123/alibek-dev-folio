import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const name = "ALIBEK";
  const letters = name.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="absolute inset-0 grid-background opacity-30" />

          <div className="relative flex flex-col items-center">
            <div className="flex overflow-hidden">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground"
                  initial={{ opacity: 0, y: 50, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{ display: "inline-block", transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="h-[2px] bg-gradient-to-r from-primary via-secondary to-accent mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />

            <motion.p
              className="text-muted-foreground text-sm md:text-base mt-4 font-mono tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              FRONTEND ENGINEER
            </motion.p>
          </div>

          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-muted-foreground/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-muted-foreground/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
