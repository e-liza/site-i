import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    whitelist: ['en'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
      crossDomain: false,
      withCredentials: false,
    },
    detection: {
      caches: [],
    },
  });

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
window.changeLang = (lng: string) => {
  i18n.changeLanguage(lng);
};

export default i18n;
