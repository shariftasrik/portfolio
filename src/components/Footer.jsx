import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

// React Icon Packs
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function Footer() {
  const { language, data } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const FOOTER = data.FOOTER_CONTENT;

  // Resolve dynamic icons
  const getIconComponent = (iconName) => {
    return (
      RiIcons[iconName] ||
      SiIcons[iconName] ||
      MdIcons[iconName] ||
      null
    );
  };

  return (
    <footer
      className="
        w-full 
        border-t border-(--color-accent-soft) 
        py-6 px-4 mt-16 
        text-(--color-text)
      "
    >
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-3 
        items-center gap-6
      ">

        {/* LEFT */}
        <div className="flex justify-center sm:justify-start gap-5">
          {FOOTER.socialLinks.map((item, index) => {
            const IconComponent = getIconComponent(item.icon);

            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="
                  hover:scale-110 
                  transition-transform 
                  opacity-80 hover:opacity-100
                "
              >
                {IconComponent && (
                  <IconComponent
                    size={24}
                    className="text-(--color-text)"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          <RiCodeSSlashLine
            className="
              text-(--color-accent)
              text-2xl
              drop-shadow-[0_0_10px_var(--color-accent)]
            "
          />
        </div>

        {/* RIGHT */}
        <div className="
          text-(--color-text)/70 
          text-sm 
          text-center sm:text-right
        ">
          {FOOTER.footerText}
        </div>

      </div>
    </footer>
  );
}
