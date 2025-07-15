'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter, usePathname } from 'next/navigation';

interface LangOption {
    label: string;
    flag: string;
}
type Lang = 'fr' | 'en' | 'es' | 'it';

const Langue: React.FC = () => {
    const { i18n, t } = useTranslation('common');
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedLang, setSelectedLang] = useState<Lang>('fr');

    // Extraire la langue actuelle de l'URL
    useEffect(() => {
        const currentLang = pathname.split('/')[1] as Lang;
        if (['fr', 'en', 'es', 'it'].includes(currentLang)) {
            setSelectedLang(currentLang);
            i18n.changeLanguage(currentLang).catch(console.error);
        }
    }, [pathname, i18n]);

    const langOptions: Record<Lang, LangOption> = {
        fr: { label: 'Français', flag: 'EazyPostCart/images/fr.png' },
        en: { label: 'English', flag: 'EazyPostCart/images/en.png' },
        es: { label: 'Español', flag: 'EazyPostCart/images/es.png' },
        it: { label: 'Italiano', flag: 'EazyPostCart/images/it.png' },
    };

    const handleLangChange = (lang: Lang) => {
        if (langOptions[lang]) {
            setSelectedLang(lang);
            i18n.changeLanguage(lang).catch(console.error);
            
            // Construire la nouvelle URL avec la langue
            const pathWithoutLang = pathname.split('/').slice(2).join('/');
            const newPath = `/${lang}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
            
            // Naviguer vers la nouvelle URL
            router.push(newPath);
            setIsOpen(false);
        }
    };

    const langOptionsKeys = Object.keys(langOptions) as Lang[];
    return (
        <div className="relative inline-block text-left group">
            <div>
                <button
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="flex justify-between w-full rounded-md border-0 h-10 px-1 hover:text-[#1199ff] bg-white"
                >
                    <div className='flex items-center px-2 transition cursor-pointer'>
                        <span className='flex items-center pr-2 text-[20px]'>
                            <img src={langOptions[selectedLang].flag} alt={langOptions[selectedLang].label} className='mr-1 h-3 w-3' />
                            {selectedLang}
                        </span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition-transform duration-300 group-hover:rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </div>
                </button>
            </div>

            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute leading-0 z-10 w-52 rounded-md shadow-sm pt-2"
                >
                    <div className='w-full bg-white'>
                        <div className="py-1 px-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {langOptionsKeys.map((lang) => (
                                <a
                                    key={lang}
                                    onClick={() => handleLangChange(lang)}
                                    className="rounded-b-md flex py-2 text-sm text-gray-700 hover:text-[#1199ff] hover:bg-gray-100 cursor-pointer"
                                    role="menuitem"
                                >
                                    <div className='w-full hover:bg-gray-50 px-2 transition'>
                                        <span className='pr-1 flex items-center'>
                                            <img src={langOptions[lang].flag} alt={langOptions[lang].label} className='mr-1 h-3 w-3' />
                                            {lang}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Langue;