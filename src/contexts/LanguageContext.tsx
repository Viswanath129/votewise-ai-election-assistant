'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '@/data/translations';
import type { SupportedLanguage } from '@/types';

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationType;
  availableLanguages: { code: SupportedLanguage; name: string; flag: string }[];
}

const availableLanguages = [
  { code: 'en' as SupportedLanguage, name: 'English', flag: '🇮🇳' },
  { code: 'hi' as SupportedLanguage, name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te' as SupportedLanguage, name: 'తెలుగు', flag: '🇮🇳' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('votewise-language', lang);
    }
  }, []);

  // Load saved language on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('votewise-language') as SupportedLanguage;
      if (saved && availableLanguages.some(l => l.code === saved)) {
        setLanguageState(saved);
      }
    }
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default during SSR to prevent errors
    if (typeof window === 'undefined') {
      return { 
        language: 'en' as SupportedLanguage, 
        setLanguage: () => {}, 
        t: translations.en, 
        availableLanguages 
      };
    }
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
