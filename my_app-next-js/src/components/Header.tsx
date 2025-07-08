"use client";
import React, { useState } from 'react';
import Langue from './NavBar/Langue';
import Accueil from './NavBar/Accueil';
import Causes from './NavBar/Causes';
import A_propos from './NavBar/A_propos';
import Bouton from './NavBar/Bouton';
const Header = () => {
    const [responsive, setResponsive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <header className='px-2 pt-2 pb-5 bg-gradient-to-r from-[#E7F9FF] to-[#F9FBFF]'>
            <nav className='w-full justify-between items-center px-[3%] xl:flex hidden'>
                <a href=''>
                    <img src="images/logo_cause.webp" alt="logo" className="w-12" />
                </a>
                <ul className='list-none flex'>
                    <li><Accueil /></li>
                    <li><Causes /></li>
                    <li><A_propos /></li>
                </ul>
                <Langue />
                <Bouton />
            </nav>
            {/* Sur petit écran */}
            {/* Barre logo + Langue */}
                <div className="xl:hidden w-full flex items-center justify-center px-[3%] h-[72px] bg-gradient-to-r from-[#E7F9FF] to-[#F9FBFF]">
                    <a href="">
                        <img src="images/logo_cause.webp" alt="logo" className="w-12 absolute left-4 top-6" />
                    </a>
                    <div className=""><Langue /></div>
                </div>
            {/* Bouton burger visible seulement en mobile */}
            <button
                className="xl:hidden absolute top-8 right-4 z-50"
                onClick={() => setResponsive(true)}
                aria-label="Ouvrir le menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
            {/* Menu xl */}
            <div
                className={`xl:hidden fixed top-0 right-0 h-screen w-[280px] bg-white z-50 flex flex-col items-center transition-transform duration-300 ease-in-out transform ${responsive ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    className="absolute top-8 right-4 text-3xl"
                    onClick={() => setResponsive(false)}
                    aria-label="Fermer le menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
                <nav className="flex flex-col gap-6 w-full px-6 mt-20">
                    {/*Accueil */}
                    <div>
                        <button
                            className="flex items-center w-full justify-between py-2"
                            onClick={() => toggleDropdown('accueil')}
                        >
                            Accueil
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 transition-transform duration-300 ${openDropdown === 'accueil' ? 'rotate-180' : ''}`}><path d="m18 15-6-6-6 6"></path></svg>
                        </button>
                        {openDropdown === 'accueil' && (
                            <ul className="pl-4 py-2 space-y-2 bg-gray-200">
                                <li  className='py-3'><a href="">Fonctionnalités clés</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Comment ça marche</a></li>
                            </ul>
                        )}
                    </div>
                    {/*Causes */}
                    <div>
                        <button
                            className="flex items-center w-full justify-between py-2"
                            onClick={() => toggleDropdown('causes')}
                        >
                            Causes
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 transition-transform duration-300 ${openDropdown === 'causes' ? 'rotate-180' : ''}`}><path d="m18 15-6-6-6 6"></path></svg>
                        </button>
                        {openDropdown === 'causes' && (
                            <ul className="pl-4 py-2 space-y-2 bg-gray-200">
                                <li  className='py-3'><a href="">Éducation</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Humanitaire</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Politique</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Environnement</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Artiste</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Business</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Autres</a></li>
                            </ul>
                        )}
                    </div>
                    {/*A_propos */}
                    <div>
                        <button
                            className="flex items-center w-full justify-between py-2"
                            onClick={() => toggleDropdown('apropos')}
                        >
                            A_propos
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 transition-transform duration-300 ${openDropdown === 'apropos' ? 'rotate-180' : ''}`}><path d="m18 15-6-6-6 6"></path></svg>
                        </button>
                        {openDropdown === 'apropos' && (
                            <ul className="pl-4 py-2 space-y-2 bg-gray-200">
                                <li  className='py-3'><a href="">Notre équipe</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">Contactez-nous</a><hr className='border-t-1 border-gray-400' /></li>
                                <li  className='py-3'><a href="">FAQ</a></li>
                            </ul>
                        )}
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <a className=" mt-4 w-full rounded-[12px] bg-[#292723] px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors" href="">
                            Soutenir une cause
                        </a>
                        <a className=" mt-4 w-full rounded-[12px] bg-[#0B99FF] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors" href="">
                            Créer une campagne
                        </a>
                        <a className="mt-4 rounded-[12px] w-full border border-black px-4 py-3 text-sm font-medium text-black hover:bg-gray-300 transition-colors text-center touch-manipulation" style={{ minHeight: 44 }} href="">
                            Connexion
                        </a>
                    </div>
                </nav>
            </div>
            {/* Optionnel : overlay pour fermer en cliquant à l'extérieur */}
            {responsive && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 xl:hidden"
                    onClick={() => setResponsive(false)}
                />
            )}
        </header>
    );
}
export default Header;