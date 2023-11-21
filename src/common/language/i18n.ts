// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Hello: "Hello",
        Welcome: "Welcome",
        home_page: "Welcome to Home page",
        select_lang: "Select Language",
        // ... other English translations
      },
    },
    tm: {
      translation: {
        Hello: "Hello",
        Welcome: "Welcome",
        home_page: "Bash sahypa hosh geldiniz",
        select_lang: "Dil sayla",
        // ... other English translations
      },
    },
    // Add translations for other languages
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if a translation is not found
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
