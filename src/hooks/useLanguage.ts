import { useContext } from "react";
import LanguageContext from "../context/language/LanguageContext";

export const useLanguage = () => {
  const { languageState, toggleLanguage, language } =
    useContext(LanguageContext);

  return {
    languageState,
    toggleLanguage,
    language,
  };
};
