import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const { language, data } = useContext(LanguageContext);

  const CONTACT = data.CONTACT_CONTENT;

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const TEXT = {
    name: language === "en" ? "Name" : "নাম",
    email: language === "en" ? "Email" : "ইমেইল",

    subject: language === "en" ? "Subject" : "বিষয়",
    subjectPlaceholder:
      language === "en"
        ? "Subject of your message"
        : "মেসেজের বিষয়",

    message: language === "en" ? "Message" : "মেসেজ",
    namePlaceholder: language === "en" ? "Your name" : "আপনার নাম",
    emailPlaceholder: language === "en" ? "you@example.com" : "আপনার ইমেইল",
    messagePlaceholder:
      language === "en"
        ? "Tell me a bit about your project..."
        : "আপনার প্রজেক্ট সম্পর্কে একটু বলুন...",
    send: language === "en" ? "Send Message" : "মেসেজ পাঠান",
    sending: language === "en" ? "Sending..." : "পাঠানো হচ্ছে...",
    success:
      language === "en"
        ? "Your message has been sent successfully!"
        : "আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!",
    error:
      language === "en"
        ? "Something went wrong. Please try again."
        : "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setStatusMessage({ type: "success", text: TEXT.success });
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setStatusMessage({ type: "error", text: TEXT.error });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <SectionHeader
        eyebrow={CONTACT.headline}
        title={language === "en" ? "Contact Me" : "যোগাযোগ করুন"}
        subtitle={CONTACT.description}
      />

      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="
              border border-(--color-accent-soft) 
              rounded-2xl p-5 sm:p-6 
              bg-(--color-card)/60 
              backdrop-blur-xl space-y-4
              shadow-lg
            "
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
         >

            {/* NAME FIELD */}
            <div>
              <label className="block text-xs font-medium text-(--color-text)/70 mb-1">
                {TEXT.name}
              </label>
              <input
                name="from_name"
                type="text"
                required
                className="
                  w-full rounded-lg bg-(--color-bg) 
                  border border-(--color-accent-soft) 
                  px-3 py-2 text-sm text-(--color-text)
                  outline-none focus:border-(--color-accent)
                "
                placeholder={TEXT.namePlaceholder}
              />
            </div>

            {/* EMAIL FIELD */}
            <div>
              <label className="block text-xs font-medium text-(--color-text)/70 mb-1">
                {TEXT.email}
              </label>
              <input
                name="from_email"
                type="email"
                required
                className="
                  w-full rounded-lg bg-(--color-bg) 
                  border border-(--color-accent-soft) 
                  px-3 py-2 text-sm text-(--color-text)
                  outline-none focus:border-(--color-accent)
                "
                placeholder={TEXT.emailPlaceholder}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-(--color-text)/70 mb-1">
                {TEXT.subject}
              </label>
              <input
                name="subject"     
                type="text"
                required
                className="
                  w-full rounded-lg bg-(--color-bg) 
                  border border-(--color-accent-soft) 
                  px-3 py-2 text-sm text-(--color-text)
                  outline-none focus:border-(--color-accent)
                "
                placeholder={TEXT.subjectPlaceholder}
              />
            </div>

            {/* MESSAGE FIELD */}
            <div>
              <label className="block text-xs font-medium text-(--color-text)/70 mb-1">
                {TEXT.message}
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="
                  w-full rounded-lg bg-(--color-bg) 
                  border border-(--color-accent-soft) 
                  px-3 py-2 text-sm text-(--color-text)
                  outline-none focus:border-(--color-accent)
                  resize-none
                "
                placeholder={TEXT.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-full 
                bg-(--color-accent) text-(--color-bg)
                font-semibold text-sm py-2.5 
                hover:brightness-110 transition
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {loading ? TEXT.sending : TEXT.send}
            </button>

            {statusMessage && (
              <p
                className={`
                  text-sm mt-2 text-center ${
                    statusMessage.type === "success"
                      ? "text-(--color-accent)"
                      : "text-red-400"
                  }
                `}
              >
                {statusMessage.text}
              </p>
            )}
          </motion.form>

          {/* Contact Info */}
          <div className="space-y-6 text-sm text-(--color-text)/80">
            <div className="space-y-3">
              <p>
                <span className="text-(--color-text)/60">
                  {language === "en" ? "Email:" : "ইমেইল:"}{" "}
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-(--color-accent) hover:underline"
                >
                  {CONTACT.email}
                </a>
              </p>

              <p>
                <span className="text-(--color-text)/60">
                  {language === "en" ? "Address:" : "ঠিকানা:"}{" "}
                </span>
                {language === "en" ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"}
              </p>
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            h-[500px] rounded-2xl overflow-hidden 
            border border-(--color-accent-soft)
            shadow-lg
          "
        >
          <iframe
            title="Dhaka Map"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=23.75811,90.41086&z=18&output=embed"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
