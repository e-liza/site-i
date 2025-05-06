import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { BASE_PATH } from './config';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en'], // ✅ Correct key instead of 'whitelist'
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${BASE_PATH}/locales/{{lng}}.json`, // ✅ Fix the incorrect path
      crossDomain: false,
      withCredentials: false,
      queryStringParams: { v: new Date().getTime() }, // 👈 Prevents caching issues
    },
    detection: {
      caches: [],
    },
  });

declare global {
  interface Window {
    changeLang: (lng: string) => void;
  }
}

window.changeLang = (lng: string) => {
  i18n.changeLanguage(lng);
};

export default i18n;
