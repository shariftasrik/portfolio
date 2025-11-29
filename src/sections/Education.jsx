import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Education() {
  const { theme } = useContext(ThemeContext);
  const { language, data } = useContext(LanguageContext);

  const EDUCATION = data.EDUCATION;

  const TEXT = {
    eyebrow: language === "en" ? "Background" : "শিক্ষাগত ব্যাকগ্রাউন্ড",
    title: language === "en" ? "Education" : "শিক্ষা",
    subtitle:
      language === "en"
        ? "Building on my science-based education as I grow in Development and Engineering."
        : "ডেভেলপমেন্ট এবং ইঞ্জিনিয়ারিংয়ে এগিয়ে যেতে আমার বিজ্ঞানভিত্তিক শিক্ষার ভিত্তিকে আরও মজবুত করছি।",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader
        eyebrow={TEXT.eyebrow}
        title={TEXT.title}
        subtitle={TEXT.subtitle}
      />

      <div className="space-y-6">
        {EDUCATION.map((item, idx) => (
          <motion.article
            key={item.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="
              relative overflow-hidden 
              rounded-2xl p-6 
              bg-(--color-card) 
              border border-(--color-accent-soft)
              backdrop-blur-xl 
              transition-all duration-300 
              hover:border-(--color-accent)/60 
              hover:shadow-[0_0_20px_var(--color-accent)]
            "
          >
            <div
              className="
                absolute inset-0 opacity-0 
                bg-linear-to-br from-(--color-accent)/10 to-transparent 
                rounded-2xl pointer-events-none 
                transition-opacity duration-300 
                group-hover:opacity-100
              "
            />

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-(--color-accent)">
                  {item.degree}
                </h2>
                <p className="text-sm text-(--color-text)/70">
                  {item.school}
                </p>
              </div>

              <div className="text-xs text-right text-(--color-text)/60">
                <p className="text-(--color-accent)">{item.period}</p>
                <p>{item.location}</p>
              </div>
            </div>

            <p className="text-sm text-(--color-text)/80 leading-relaxed">
              {item.details}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
