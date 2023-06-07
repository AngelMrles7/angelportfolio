import {
  LanguageState,
  LanguageAction,
} from "../../interface/LanguageInterface";

export const LanguageReducer = (
  state: LanguageState,
  action: LanguageAction
): LanguageState => {
  const { payload, type } = action;
  switch (type) {
    case "TOGGLE_LANGUAGE":
      return state === payload ? "es" : "en";
    default:
      return state;
  }
};
