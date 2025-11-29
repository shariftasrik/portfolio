import { TbRocket } from "react-icons/tb";
import { motion } from "framer-motion";

export default function FloatingCTA({ visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        w-[50%] max-w-4xl
        rounded-2xl px-8 py-6
        bg-linear-to-br from-white/5 to-white/10
        backdrop-blur-xl border border-white/10
        flex items-center justify-between
        shadow-xl
        z-50
        pointer-events-auto
      "
    >
      {/* Floating animation */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex items-center gap-4"
      >
        <TbRocket className="text-accent text-4xl" />
        
        <div>
          <h2 className="text-xl font-semibold text-text">
            Turn Your Idea Into Reality
          </h2>
          <p className="text-(--color-text-soft)">
            Let’s collaborate and bring your project to life.
          </p>
        </div>
      </motion.div>

      <a
        href="#contact"
        className="
          px-6 py-3 rounded-full font-medium text-white
          bg-linear-to-r from-blue-500 to-purple-500
          hover:brightness-110 transition
        "
      >
        Start →
      </a>
    </motion.div>
  );
}
