import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const PAGE_SIZE = 3;

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const { language, data } = useContext(LanguageContext);

  const PROJECTS = data.PROJECTS;

  const categories =
    language === "en"
      ? ["All", "Development", "AI/ML"]
      : ["সকল", "ডেভেলপমেন্ট", "AI/ML"];

  const categoryMap = {
    All: "All",
    Development: "Development",
    "AI/ML": "AI/ML",
    সকল: "All",
    ডেভেলপমেন্ট: "Development",
  };

  const TEXT = {
    selectedWorks: language === "en" ? "Selected Works" : "নির্বাচিত কাজ",
    projects: language === "en" ? "Projects" : "প্রজেক্টসমূহ",
    subtext:
      language === "en"
        ? "Projects I've designed and developed recently."
        : "সাম্প্রতিক সময়ে ডিজাইন ও ডেভেলপ করা কিছু প্রজেক্ট।",
    preview: language === "en" ? "Preview" : "প্রিভিউ",
    code: language === "en" ? "Code" : "কোড",
    previous: language === "en" ? "Previous" : "পেছনে",
    next: language === "en" ? "Next" : "পরবর্তী",
    close: language === "en" ? "Close" : "বন্ধ করুন",
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openProject, setOpenProject] = useState(null);
  const [page, setPage] = useState(1);

  // FILTERED PROJECTS
  const selectedKey = categoryMap[activeCategory];

  const filtered =
    selectedKey === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedKey);

  // PAGINATION
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginatedProjects = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      id="work"
      className="mt-20"
    >
      <h3 className="text-(--color-accent) text-sm mb-1 tracking-wider">
        {TEXT.selectedWorks}
      </h3>

      <h1 className="text-3xl font-bold text-(--color-text) mb-2">
        {TEXT.projects}
      </h1>

      <p className="text-(--color-text)/70 mb-6">{TEXT.subtext}</p>

      {/* CATEGORY */}
      <div className="flex gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`
              px-4 py-2 rounded-full border transition 
              ${
                activeCategory === cat
                  ? "bg-(--color-accent) text-(--color-bg) border-(--color-accent)"
                  : "border-(--color-text)/40 text-(--color-text)/70 hover:border-(--color-accent)"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.map((project, i) => (
          <motion.div
            key={project.name}
            onClick={() => setOpenProject(project)}
            className="
              relative rounded-xl 
              bg-(--color-card) 
              border border-(--color-accent-soft)
              p-3 overflow-hidden group cursor-pointer
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {/* Image */}
            <div className="relative h-44 w-full rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-(--color-text)">
                {project.name}
              </h2>

              <p className="text-xs text-(--color-text)/60 mb-2">
                {project.year} · {project.madeAt}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      text-[10px] px-2 py-1 rounded-full 
                      bg-(--color-bg) text-(--color-text)/80
                      border border-(--color-text)/20
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4 pointer-events-auto">
              {project.preview && (
                <a
                  href={project.preview}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    flex items-center gap-2 px-3 py-1.5 rounded-md 
                    bg-(--color-accent) text-(--color-bg) text-sm
                  "
                >
                  <FiExternalLink /> {TEXT.preview}
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="
                  flex items-center gap-2 px-3 py-1.5 rounded-md 
                  bg-(--color-card) text-(--color-text) text-sm
                  border border-(--color-text)/30
                "
              >
                <FaGithub /> {TEXT.code}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      {filtered.length > PAGE_SIZE && (
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className={`
              px-5 py-2 rounded-lg border text-sm transition 
              ${
                page === 1
                  ? "opacity-40 cursor-not-allowed border-(--color-text)/30"
                  : "border-(--color-accent) text-(--color-accent) hover:bg-(--color-accent) hover:text-(--color-bg)"
              }
            `}
          >
            {TEXT.previous}
          </button>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className={`
              px-5 py-2 rounded-lg border text-sm transition 
              ${
                page === totalPages
                  ? "opacity-40 cursor-not-allowed border-(--color-text)/30"
                  : "border-(--color-accent) text-(--color-accent) hover:bg-(--color-accent) hover:text-(--color-bg)"
              }
            `}
          >
            {TEXT.next}
          </button>
        </div>
      )}

      <AnimatePresence>
        {openProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-999 flex justify-center items-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="
                bg-(--color-card) p-6 rounded-xl max-w-xl 
                border border-(--color-text)/20
              "
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold text-(--color-text) mb-3">
                {openProject.name}
              </h2>

              <p className="text-(--color-text)/70 mb-4">
                {openProject.longDescription}
              </p>

              <button
                className="
                  px-4 py-2 bg-(--color-accent) 
                  text-(--color-bg) rounded-lg
                "
                onClick={() => setOpenProject(null)}
              >
                {TEXT.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}