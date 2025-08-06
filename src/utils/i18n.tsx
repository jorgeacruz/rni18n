
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// Importing translation files
import pt from "./pt.json";
import en from "./en.json";
import sp from "./spain.json";

// Initializing i18next with the translation files
i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: "en",
    fallbackLng: "en",
    resources: {
        pt: pt,
        en: en,
        sp: sp
    },
    react: {
        useSuspense: false,
    },
    interpolation: { 
        escapeValue: false, 
    }
});

export default i18next;