import { useEffect, useReducer, useState } from "react";
import LanguageContext from "./LanguageContext";
import { LanguageReducer } from "./LanguageReducer";
import { LanguageState } from "../../interface/LanguageInterface";
import { en } from "../../language/en";
import { es } from "../../language/es";

interface LanguageStateProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: LanguageState = localStorage.getItem("language") || "es";

export const LanguageProvider = ({ children }: LanguageStateProps) => {
  const [languageState, dispatch] = useReducer(LanguageReducer, INITIAL_STATE);

  const [language, setLanguage] = useState(es);

  const toggleLanguage = () => {
    dispatch({ type: "TOGGLE_LANGUAGE", payload: "en" });
  };

  useEffect(() => {
    localStorage.setItem("language", languageState);
    setLanguage(languageState === "en" ? en : es);
  }, [languageState]);

  return (
    <LanguageContext.Provider
      value={{ languageState, toggleLanguage, language }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
