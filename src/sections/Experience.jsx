import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export default function ExperienceSection() {
  const { theme } = useContext(ThemeContext);
  const { language, data } = useContext(LanguageContext);

  const EXPERIENCES = data.EXPERIENCES;

  const TEXT = {
    eyebrow: language === "en" ? "Career" : "ক্যারিয়ার",
    title: language === "en" ? "Experience" : "অভিজ্ঞতা",
    subtitle:
      language === "en"
        ? "Connecting real-world engineering with modern development practice."
        : "বাস্তব জীবনের ইঞ্জিনিয়ারিং অভিজ্ঞতাকে আধুনিক ডেভেলপমেন্ট প্র্যাকটিসের সাথে যুক্ত করা।",
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-12"
    >
      <SectionHeader
        eyebrow={TEXT.eyebrow}
        title={TEXT.title}
        subtitle={TEXT.subtitle}
      />

      <div className="relative">
        <div
          className="
            absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 
            bg-linear-to-b from-(--color-accent) 
            via-purple-500 to-blue-500 
            rounded-full opacity-60
          "
        />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-center ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className="
                  absolute left-1/2 -translate-x-1/2 
                  w-4 h-4 rounded-full 
                  bg-(--color-accent)
                  shadow-[0_0_12px_var(--color-accent)]
                "
              />

              <div
                className="
                  w-[90%] md:w-[40%] 
                  bg-(--color-card) 
                  border border-(--color-accent-soft)
                  text-(--color-text)
                  rounded-2xl p-6 
                  backdrop-blur-xl
                  shadow-lg hover:shadow-xl 
                  hover:border-(--color-accent)/60 
                  transition-all duration-300
                "
              >
                <p className="text-(--color-accent) text-sm font-semibold mb-2">
                  {exp.yearRange}
                </p>

                <h3 className="text-lg font-semibold text-(--color-text)">
                  {exp.title}
                </h3>

                <p className="text-sm text-(--color-text)/60">
                  {exp.company}
                </p>

                <p className="text-xs text-(--color-text)/50 mb-4">
                  {exp.location}
                </p>

                <ul className="space-y-2 text-sm text-(--color-text)/80">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                {exp.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1 text-xs rounded-full 
                          bg-(--color-bg) 
                          text-(--color-text)/80 
                          border border-(--color-text)/20
                          hover:text-(--color-accent) 
                          hover:border-(--color-accent)/60
                          hover:bg-(--color-bg)/70
                          transition-all duration-200
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
