import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: "fr", // langue par défaut
        fallbackLng: 'fr',
        ns: ['common'], // namespaces à charger
        defaultNS: 'common',
        interpolation: {
            escapeValue: false, // pour éviter les attaques XSS
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // chemin vers vos fichiers JSON
        },
        react: {
            useSuspense: false, // Important pour l'App Router
        },
    });

export default i18n;