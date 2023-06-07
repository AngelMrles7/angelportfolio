import { useEffect, useReducer, useState } from "react";
import LanguageContext from "./LanguageContext";
import { LanguageReducer } from "./LanguageReducer";
import { LanguageState } from "../../interface/LanguageInterface";
import { translations } from "../../language/translations";
import { TranslationsInterface } from "../../interface/TranslationsInterface";

interface LanguageStateProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: LanguageState = localStorage.getItem("language") || "es";
export const LanguageProvider = ({ children }: LanguageStateProps) => {
  const [languageState, dispatch] = useReducer(LanguageReducer, INITIAL_STATE);

  const [language, setLanguage] = useState(
    translations[languageState as keyof TranslationsInterface]
  );

  const toggleLanguage = () => {
    dispatch({ type: "TOGGLE_LANGUAGE", payload: "en" });
  };

  useEffect(() => {
    localStorage.setItem("language", languageState);
    setLanguage(translations[languageState as keyof TranslationsInterface]);
  }, [languageState]);

  return (
    <LanguageContext.Provider
      value={{ languageState, toggleLanguage, language }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
