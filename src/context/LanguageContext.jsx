import { createContext, useState } from "react";

import * as DATA_EN from "../data/data";
import * as DATA_BN from "../data/data_bangla";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  const data = language === "en" ? DATA_EN : DATA_BN;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}
