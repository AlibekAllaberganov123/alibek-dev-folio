import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-6xl md:text-7xl font-bold neon-text"
            animate={{
              textShadow: [
                "0 0 10px hsl(185 100% 50% / 0.8), 0 0 20px hsl(185 100% 50% / 0.6)",
                "0 0 20px hsl(185 100% 50% / 1), 0 0 40px hsl(185 100% 50% / 0.8), 0 0 60px hsl(185 100% 50% / 0.6)",
                "0 0 10px hsl(185 100% 50% / 0.8), 0 0 20px hsl(185 100% 50% / 0.6)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            AA
          </motion.div>
          
          {/* Orbiting ring */}
          <motion.div
            className="absolute -inset-8 border-2 border-primary/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-12 border border-secondary/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="flex items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-sm tracking-wider uppercase">Loading</span>
          <motion.span
            className="flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-48 h-0.5 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
