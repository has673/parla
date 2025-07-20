"use client";
import { useLanguage } from "../src/Context/LanguageContext";

const languages = [
  { code: "en", label: "English" },

  { code: "tr", label: "Turkish" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const selectedLang = languages.find((lang) => lang.code === language);

  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 bg-white">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="text-sm text-[#429AFF] font-medium bg-white focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
