import i18n from "i18next";
import {
  CHANGE_LANGUAGE,
  LanguageActionTypes,
} from "@/redux/language/languageActions";

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

export default (state = defaultState, action: LanguageActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(payload);
      return { ...state, language: payload };

    default:
      return state;
  }
};
