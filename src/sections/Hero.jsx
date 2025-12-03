import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import Hero3D from "../components/Hero_model";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  const { data } = useContext(LanguageContext);
  const { HERO_CONTENT } = data; 

  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
      className="
        min-h-[40vh] lg:min-h-[55vh] xl:min-h-[72vh] 2xl:min-h-[78vh]
        grid grid-cols-1
        md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]
        gap-12
        items-center
        pt-4
        text-(--color-text)
      "
    >
      {/* LEFT */}
      <div>
        <div className="mb-8">
          <p className="
            text-xs font-semibold uppercase tracking-[0.2em]
            text-(--color-accent) mb-2
          ">
            🖐️ {data?.HERO_TAGLINE || "Personal Website"}
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
            <span className="block">
              {data?.HERO_HELLO || "Hi, "}{HERO_CONTENT.greeting}
              <span className="text-(--color-accent)">
                {HERO_CONTENT.name}
              </span>
            </span>
            <span className="block">{HERO_CONTENT.role}</span>
          </h1>

          <p className="text-(--color-text) opacity-90">
            {HERO_CONTENT.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#projects"
            className="
              inline-flex items-center justify-center rounded-full
              bg-(--color-accent)
              px-6 py-3 text-sm font-semibold 
              text-(--color-bg)
              hover:brightness-110 
              transition
            "
          >
            {data?.HERO_VIEW_PROJECTS || "View Projects"}
          </a>

          <a
            href={HERO_CONTENT.resumeLink}
            className="
              inline-flex items-center justify-center rounded-full
              border border-(--color-text)/40 
              px-6 py-3 text-sm font-semibold 
              text-(--color-text)
              hover:border-(--color-accent) 
              hover:text-(--color-accent)
              transition
            "
            download
          >
            {HERO_CONTENT.resumeLinkText}
          </a>
        </div>

        <div className="flex flex-wrap gap-8 text-xs text-(--color-text)/70 mb-8">
          <div>
            <p className="font-semibold text-(--color-text)">
              {data?.HERO_ROLE_LABEL || "Role"}
            </p>
            <p>{HERO_CONTENT.role}</p>
          </div>

          <div>
            <p className="font-semibold text-(--color-text)">
              {data?.HERO_EXPERIENCE_LABEL || "Experience"}
            </p>
            <p>{data?.HERO_EXPERIENCE_VALUE || "6 months"}</p>
          </div>

          <div>
            <p className="font-semibold text-(--color-text)">
              {data?.HERO_LOCATION_LABEL || "Location"}
            </p>
            <p>{data?.HERO_LOCATION_VALUE || "Dhaka, Bangladesh"}</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {HERO_CONTENT.skills.map((skill, i) => (
              <span
                key={i}
                className="
                  px-3 py-1.5 text-xs rounded-full 
                  bg-(--color-card)
                  border border-(--color-text)/30
                  text-(--color-text)
                  hover:text-(--color-accent)
                  hover:border-(--color-accent)
                  transition
                "
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* RIGHT */}
      <motion.div
        className="relative h-[350px] md:h-[450px]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Hero3D />
      </motion.div>
    </motion.section>
  );
}
