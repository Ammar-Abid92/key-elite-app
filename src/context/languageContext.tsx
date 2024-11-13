import {createContext, useContext, useState} from 'react';
import {en, sp} from '../languageConfig/languageConfig';
import {getItem, setItem} from '@Service/storageService';

export const LanguageContext = createContext({
  I18n: en,
  changeLanguage: (lang: typeof en | typeof sp) => {},
});

import {ReactNode} from 'react';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({children}: LanguageProviderProps) => {
  const localLang = getItem('language');

  const [I18n, setI18n] = useState<any>(localLang ?? en);

  const changeLanguage = (lang: typeof en | typeof sp) => {
    setI18n(lang);
    setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{I18n, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
