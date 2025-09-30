import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: "es",           // default language
    fallbackLng: "es",   // fallback if translation missing
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // optional: prevents auto-detecting browser language
      // remove this if not using i18next-browser-languagedetector
    },
    react: {
      useSuspense: false, // optional: avoids flicker
    },
  });

export default i18n;
