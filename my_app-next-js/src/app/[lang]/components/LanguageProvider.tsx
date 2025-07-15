'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/18n';
import { useEffect } from 'react';
import { use } from 'react';

interface LanguageProviderProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default function LanguageProvider({ children, params }: LanguageProviderProps) {
  const resolvedParams = use(params);
  
  useEffect(() => {
    // Initialiser la langue basée sur l'URL
    const lang = resolvedParams.lang;
    if (['fr', 'en', 'es', 'it'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [resolvedParams.lang]);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 