'use client';
import { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'es';

const LanguageContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
}>({
  lang: 'en',
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);