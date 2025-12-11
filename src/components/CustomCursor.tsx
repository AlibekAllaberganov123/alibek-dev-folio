import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-foreground"
          animate={{
            width: isHovering ? 60 : 12,
            height: isHovering ? 60 : 12,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-foreground/30"
          animate={{
            width: isHovering ? 80 : 32,
            height: isHovering ? 80 : 32,
            opacity: isHovering ? 0.5 : 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        />
      </motion.div>

      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
