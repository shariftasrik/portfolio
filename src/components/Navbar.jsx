import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { TbLetterT } from "react-icons/tb";
import { FiSun, FiMoon } from "react-icons/fi";
import { RiEarthFill } from "react-icons/ri";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, data } = useContext(LanguageContext);
  const NAVIGATION_LINKS = data.NAVIGATION_LINKS;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50 
        bg-(--color-bg)/20 backdrop-blur-lg
      "
    >
      <div className="w-full h-20 flex items-center justify-between px-4">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer ml-10"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.15, rotate: -5 }}
            transition={{ duration: 0.3 }}
            className="
              w-10 h-10 rounded-full
              bg-linear-to-br 
              from-(--color-accent)
              to-(--color-accent-soft)
              flex items-center justify-center
            "
          >
            <TbLetterT className="text-(--color-bg) text-2xl" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-semibold tracking-wide text-(--color-text) text-4xl"
          >
            {language === "bn" ? "তাশরীক" : "Tasrik"}
          </motion.span>
        </div>

        {/* CENTER */}
        <nav className="hidden md:flex items-center gap-10 text-lg absolute left-1/2 -translate-x-1/2">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-(--color-text)
                hover:text-(--color-accent)
                tracking-wide transition
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 mr-10">

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-md hover:bg-(--color-card) transition"
          >
            {theme === "dark" ? (
              <FiSun className="text-orange-400" />
            ) : (
              <FiMoon className="text-(--color-accent)" />
            )}
          </button>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="text-xl p-2 rounded-md hover:bg-(--color-card) transition"
          >
            <RiEarthFill
              className={
                language === "bn"
                  ? "text-(--color-accent)"
                  : "text-(--color-text)"
              }
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <button
          className="md:hidden text-3xl text-(--color-text)"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
            md:hidden 
            bg-(--color-bg)/95 backdrop-blur-lg 
            border-t border-(--color-accent-soft)
            px-6 py-4 space-y-4
          "
        >
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                block text-(--color-text)
                hover:text-(--color-accent)
                text-base transition
              "
            >
              {link.label}
            </a>
          ))}

          {/* Theme Switch */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-(--color-text) hover:text-(--color-accent)"
          >
            {theme === "dark" ? (
              <>
                <FiSun className="text-yellow-300" /> Light Mode
              </>
            ) : (
              <>
                <FiMoon className="text-(--color-accent)" /> Dark Mode
              </>
            )}
          </button>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-(--color-text) hover:text-(--color-accent)"
          >
            <RiEarthFill
              className={
                language === "bn"
                  ? "text-(--color-accent)"
                  : "text-(--color-text)"
              }
            />
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>
      )}
    </header>
  );
}
