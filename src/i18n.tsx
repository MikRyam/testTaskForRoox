import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales/locales';

i18next.use(initReactI18next).init({
  resources,
  lng: 'ru', // default language
  debug: false,
});

export default i18next;
