import { Translation } from "./TranslationsInterface";

export type LanguageState = string | "en" | "es";

export type LanguageAction = {
  type: "TOGGLE_LANGUAGE";
  payload: string;
};

export type LanguageContextProps = {
  languageState: LanguageState;
  toggleLanguage: () => void;
  language: Translation;
};
