import { createContext } from "react";
import { LanguageContextProps } from "../../interface/LanguageInterface";

const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps
);

export default LanguageContext;
