import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const circleVariants = {
  animate: (i) => ({
    scale: [1, 1.2, 1],
    transition: {
      duration: 2 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export default function BlurBg() {
  const { theme } = useContext(ThemeContext);

  const initialX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const initialY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

  const mouseX = useMotionValue(initialX);
  const mouseY = useMotionValue(initialY);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const lightColors = [
    "bg-[#818cf8]",
    "bg-[#93c5fd]",
    "bg-[#f9a8d4]",
    "bg-[#d8b4fe]",
    "bg-[#fde68a]",
    "bg-[#34d399]",
  ];

  const darkColors = [
    "bg-[#4f46e5]",
    "bg-[#14b8a6]",
    "bg-[#6366f1]",
    "bg-[#a855f7]",
    "bg-[#d35400]",
    "bg-[#c44569]",
  ];

  // Choose palette
  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none blur-[100px] opacity-40">
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className={`${color} w-[350px] h-[250px] rounded-full absolute`}
          style={{ x: smoothX, y: smoothY }}
          custom={i}
          variants={circleVariants}
          animate="animate"
        />
      ))}
    </div>
  );
}
