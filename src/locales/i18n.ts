import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./pt";
import en from "./en";

const resources = {
  en,
  pt,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",
    ns: ["login", "home", "common"],
    defaultNS: "login",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
