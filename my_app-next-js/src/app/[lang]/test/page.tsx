'use client';

import { useTranslation } from 'next-i18next';

export default function TestPage() {
  const { t } = useTranslation('common');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page de Test</h1>
      <p className="text-gray-600">Langue actuelle : {t('welcome')}</p>
      <p className="text-gray-600">Description : {t('description')}</p>
    </div>
  );
} 