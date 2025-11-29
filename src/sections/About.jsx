import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import SectionHeader from "../components/SectionHeader.jsx";
import myImg from "../assets/images/tasrik.jpg";

export default function AboutSection() {
  const { language, data } = useContext(LanguageContext);
  const ABOUT_CONTENT = data.ABOUT_CONTENT;

  /* EN / BN */
  const tabs =
    language === "en"
      ? ["Who I Am", "Skills", "Certifications", "Outside of Work"]
      : ["আমি ", "দক্ষতা", "সার্টিফিকেট", "কাজের বাইরে"];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedCategory, setSelectedCategory] = useState(
    language === "en" ? "Development" : "ডেভেলপমেন্ট"
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setActiveTab(tabs[0]);
    setSelectedCategory(language === "en" ? "Development" : "ডেভেলপমেন্ট");
    setCurrentIndex(0);
  }, [language]);

  const categoryLabels =
    language === "en"
      ? ["All", "Development", "Academic"]
      : ["সকল", "ডেভেলপমেন্ট", "একাডেমিক"];

  const categoryMap = {
    All: "All",
    Development: "Development",
    Academic: "Academic",

    সকল: "All",
    ডেভেলপমেন্ট: "ডেভেলপমেন্ট",
    একাডেমিক: "একাডেমিক",
  };

  const renderContent = () => {
    switch (activeTab) {
      // Who Am I :
      case tabs[0]: {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            <div className="space-y-4 sm:col-span-2">
              {ABOUT_CONTENT.whoIAm.split("\n").map((line, idx) => (
                <p key={idx} className="text-(--color-text)/80 leading-relaxed">
                  {line.trim()}
                </p>
              ))}
            </div>

            <div className="flex justify-center sm:justify-end sm:col-span-1">
              <img
                src={myImg}
                alt="Tasrik"
                className="
                  w-auto h-[360px] rounded-2xl object-cover
                  border border-(--color-accent-soft)
                  shadow-lg shadow-(--color-text)/20
                "
              />
            </div>
          </div>
        );
      }

      // Skills
      case tabs[1]: {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 relative">
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {ABOUT_CONTENT.techLogos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  className="h-12 w-12 transition"
                />
              ))}
            </div>

            <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px bg-(--color-text)/30"></div>

            <ul className="space-y-3 text-(--color-text)/80 text-sm ml-10">
              {ABOUT_CONTENT.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-(--color-accent) mt-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        );
      }

      // Certificates
      case tabs[2]: {
        const selectedKey = categoryMap[selectedCategory];

        const filteredCertificates =
          selectedKey === "All"
            ? ABOUT_CONTENT.certificates
            : ABOUT_CONTENT.certificates.filter(
                (c) => c.category === selectedKey
              );

        const nextSlide = () => {
          if (currentIndex < filteredCertificates.length - 1) {
            setCurrentIndex((i) => i + 1);
          }
        };

        const prevSlide = () => {
          if (currentIndex > 0) {
            setCurrentIndex((i) => i - 1);
          }
        };

        return (
          <div className="space-y-6">

            <div className="flex gap-3">
              {categoryLabels.map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    setSelectedCategory(label);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-1.5 text-sm rounded-full border transition
                    ${
                      selectedCategory === label
                        ? "border-(--color-accent) text-(--color-accent)"
                        : "border-(--color-text)/40 text-(--color-text)/70 hover:border-(--color-accent)/50"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div className="sm:col-span-2">
                <img
                  src={filteredCertificates[currentIndex]?.url}
                  className="
                    w-full h-[360px] rounded-xl
                    border border-(--color-accent-soft)
                    shadow-md shadow-(--color-text)/20
                  "
                />
              </div>

              <div className="flex flex-col gap-4 justify-center items-center">
                <a
                  href={filteredCertificates[currentIndex]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full text-center px-4 py-2 text-sm rounded-full
                    border border-(--color-accent) text-(--color-accent)
                    hover:bg-(--color-accent) hover:text-(--color-bg) transition
                  "
                >
                  {language === "en"
                    ? "View Original Certificate"
                    : "মূল সার্টিফিকেট দেখুন"}
                </a>

                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`
                    w-full text-center px-4 py-2 text-sm rounded-full border transition
                    ${
                      currentIndex === 0
                        ? "border-(--color-text)/20 text-(--color-text)/30 cursor-not-allowed"
                        : "border-(--color-text)/50 text-(--color-text)/80 hover:border-(--color-accent) hover:text-(--color-accent)"
                    }`}
                >
                  {language === "en" ? "Previous" : "পেছনে"}
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex === filteredCertificates.length - 1}
                  className={`
                    w-full text-center px-4 py-2 text-sm rounded-full border transition
                    ${
                      currentIndex === filteredCertificates.length - 1
                        ? "border-(--color-text)/20 text-(--color-text)/30 cursor-not-allowed"
                        : "border-(--color-text)/50 text-(--color-text)/80 hover:border-(--color-accent) hover:text-(--color-accent)"
                    }`}
                >
                  {language === "en" ? "Next" : "পরবর্তী"}
                </button>
              </div>
            </div>
          </div>
        );
      }

      // Outside Work
      case tabs[3]: {
        return ABOUT_CONTENT.outsideWork.map((p, i) => (
          <p key={i} className="text-(--color-text)/80 leading-relaxed">
            {p}
          </p>
        ));
      }

      default:
        return null;
    }
  };

  return (
    <section id="about" className="space-y-10 pt-4">
      <SectionHeader
        eyebrow={
          language === "en"
            ? "A little bit about who I am and what I do"
            : "আমি কে এবং কী করি — কিছু কথা"
        }
        title={language === "en" ? "About Me" : "আমার সম্পর্কে"}
        subtitle={
          language === "en"
            ? "Get to know my background, my approach to work, and what drives me as a creator."
            : "আমার ব্যাকগ্রাউন্ড, কাজের ধরন এবং আমাকে যা অনুপ্রাণিত করে — সবকিছু জানুন।"
        }
      />

      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-full border transition
              ${
                activeTab === tab
                  ? "bg-(--color-accent) text-(--color-bg) border-(--color-accent)"
                  : "border-(--color-text)/40 text-(--color-text)/70 hover:border-(--color-accent) hover:text-(--color-accent)"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          rounded-2xl
          border border-(--color-text)/20
          bg-(--color-card)
          p-6 sm:p-8 space-y-4 shadow-lg shadow-(--color-text)/10
        "
      >
        <h2 className="text-xl font-semibold text-(--color-text)">
          {activeTab}
        </h2>

        <div className="space-y-3">{renderContent()}</div>
      </motion.div>
    </section>
  );
}