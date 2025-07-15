'use client';

import { useTranslation } from 'next-i18next';


export default function Home() {
  const { t } = useTranslation('common');
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
      <p className="text-gray-600">{t('description')}</p>
      <div className="mt-4">
        <a href="/fr/EazyPostCart" className="text-blue-500 hover:underline">
          Aller à EazyPostCart (FR)
        </a>
      </div>
        <div className="mt-4">
        <a href="/fr/EazyCause" className="text-blue-500 hover:underline">
          Aller à Eazycause (FR)
        </a>
      </div>
    </div>
  );
}