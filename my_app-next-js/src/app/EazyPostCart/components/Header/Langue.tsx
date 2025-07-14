'use client';

import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

interface LangOption {
    label: string;
    flag: string;
}
type Lang = 'fr' | 'en';

const Langue: React.FC = () => {
    const { i18n } = useTranslation('common');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedLang, setSelectedLang] = useState<Lang>('fr');

    const langOptions: Record<Lang, LangOption> = {
        fr: { label: 'Français', flag: 'EazyPostCart/images/fr.png' },
        en: { label: 'English', flag: 'EazyPostCart/images/en.png' },
    };

    const handleLangChange = (lang: Lang) => {
        if (langOptions[lang]) {
            setSelectedLang(lang);
            i18n.changeLanguage(lang).catch(console.error);
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