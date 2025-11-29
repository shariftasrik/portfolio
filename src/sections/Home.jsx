import { motion } from "framer-motion";
import { sectionFade } from "../animations/sectionAnimations";

import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import InfiniteScroll from "../components/InfiniteScroll.jsx";


// Page-level variants for a cinematic entrance
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

// Stronger section reveal (more “hero-like” than a soft fade)
const sectionReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

export default function Home() {

  return (
    <motion.main
      className="space-y-28"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}
      <motion.section
        id="hero"
        className="scroll-mt-24"
        variants={sectionReveal}
      >
        <Hero />
      </motion.section>

      <motion.div
        variants={sectionReveal}
        className="mt-8 mb-20 w-screen relative left-1/2 -ml-[50vw]"
      >
        <InfiniteScroll />
      </motion.div>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="scroll-mt-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="scroll-mt-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects />
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="scroll-mt-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Experience />
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        className="scroll-mt-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Education />
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="scroll-mt-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.section>
    </motion.main>
  );
}
