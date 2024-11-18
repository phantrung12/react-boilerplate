import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import vi from './vi.json';
import { convertLanguageJsonToObject } from './translations';
import { LocalStorageService } from '~/services';

export const translationsJson = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

convertLanguageJsonToObject(en);

i18next.use(initReactI18next).init({
  resources: translationsJson,
  fallbackLng: LocalStorageService.get<string>(LocalStorageService.LANGUAGE) || 'en',
  debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
