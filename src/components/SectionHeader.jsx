import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {eyebrow && (
        <p
          className="
            text-xs font-semibold uppercase tracking-[0.2em] mb-2 
            text-(--color-accent)
          "
        >
          {eyebrow}
        </p>
      )}

      <h1
        className="
          text-3xl sm:text-4xl font-semibold tracking-tight mb-2 
          text-(--color-text)
        "
      >
        {title}
      </h1>

      {subtitle && (
        <p className="text-sm max-w-xl text-(--color-text)/70">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
