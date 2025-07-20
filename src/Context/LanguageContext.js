"use client";
import en from "@/app/Locale/en";
import tr from "@/app/Locale/tr";
import { createContext, useContext, useState, useEffect } from "react";

const translations = { en, tr };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && translations[storedLang]) {
      setLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // ✅ translation function
  const t = (key) => {
    const keys = key.split(".");
    return (
      keys.reduce(
        (obj, k) => (obj ? obj[k] : undefined),
        translations[language]
      ) || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
