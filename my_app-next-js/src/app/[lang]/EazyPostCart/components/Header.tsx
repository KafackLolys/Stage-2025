'use client';
import React, { useEffect, useState } from 'react';
import About from './Header/About';
import Langue from './Header/Langue';
import styles from '../styles/Header.module.css';
import { useTranslation } from 'next-i18next';
import '@/app/utils/18n';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 400); // 400px de scroll avant de fixer
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    //
    const [responsive, setResponsive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [showInput, setShowInput] = useState(false);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };
    //Translation
    const { t } = useTranslation('common');
    return (
        <header className={`${styles.couleurFond} shadow ${isFixed ? 'fixed top-0 z-30' : 'relative'} w-full`}>
            <nav className='w-full xl:flex hidden justify-between items-center py-4 px-[5%]'>
                {/* Logo */}
                <a href=''>
                    <img src="/EazyPostCart/images/logo1.png" alt="LogoEazyPostCart" className='w-20 h-auto' />
                </a>
                <div className='flex items-center gap-x-6'>
                    {/* Search Bar */}
                    <div className='flex items-center border border-[#ECEAE1] rounded-full p-0'>
                        <button type='button' className='rounded-tl-full hover:shadow duration-300 hover:bg-white rounded-bl-full pl-8 pr-3 h-10 cursor-pointer'>
                            <img src="/EazyPostCart/images/search.png" alt="Search" className='w-6 h-6' />
                        </button>
                        <input type="search" className="border-l-2 border-[#ECEAE1] pl-2 py-1 rounded-tr-full rounded-br-full" name="search" id="search" placeholder={t('search_placeholder')} />
                    </div>
                    {/* Menu */}
                    <div className='flex items-center gap-x-4 border-l-2 border-r-2 border-l-[#ECEAE1] border-r-[#ECEAE1] px-4'>
                        <button type='button' className='cursor-pointer flex items-center rounded-2xl py-2 px-4 hover:text-[#1199ff] duration-300'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <path d="M13.18 9.16732H10.4867C9.14667 9.16732 8.5 8.54732 8.5 7.26732V2.73398C8.5 1.45398 9.15333 0.833984 10.4867 0.833984H13.18C14.52 0.833984 15.1667 1.45398 15.1667 2.73398V7.26732C15.1667 8.54732 14.5133 9.16732 13.18 9.16732ZM10.4867 1.83398C9.64 1.83398 9.5 2.06065 9.5 2.73398V7.26732C9.5 7.94065 9.64 8.16732 10.4867 8.16732H13.18C14.0267 8.16732 14.1667 7.94065 14.1667 7.26732V2.73398C14.1667 2.06065 14.0267 1.83398 13.18 1.83398H10.4867Z" fill="currentColor" />
                                <path d="M13.18 15.166H10.4867C9.14667 15.166 8.5 14.546 8.5 13.266V12.066C8.5 10.786 9.15333 10.166 10.4867 10.166H13.18C14.52 10.166 15.1667 10.786 15.1667 12.066V13.266C15.1667 14.546 14.5133 15.166 13.18 15.166ZM10.4867 11.166C9.64 11.166 9.5 11.3927 9.5 12.066V13.266C9.5 13.9393 9.64 14.166 10.4867 14.166H13.18C14.0267 14.166 14.1667 13.9393 14.1667 13.266V12.066C14.1667 11.3927 14.0267 11.166 13.18 11.166H10.4867Z" fill="currentColor" />
                                <path d="M5.51301 15.1673H2.81967C1.47967 15.1673 0.833008 14.5473 0.833008 13.2673V8.73398C0.833008 7.45398 1.48634 6.83398 2.81967 6.83398H5.51301C6.85301 6.83398 7.49967 7.45398 7.49967 8.73398V13.2673C7.49967 14.5473 6.84634 15.1673 5.51301 15.1673ZM2.81967 7.83398C1.97301 7.83398 1.83301 8.06065 1.83301 8.73398V13.2673C1.83301 13.9407 1.97301 14.1673 2.81967 14.1673H5.51301C6.35967 14.1673 6.49967 13.9407 6.49967 13.2673V8.73398C6.49967 8.06065 6.35967 7.83398 5.51301 7.83398H2.81967Z" fill="currentColor" />
                                <path d="M5.51301 5.83398H2.81967C1.47967 5.83398 0.833008 5.21398 0.833008 3.93398V2.73398C0.833008 1.45398 1.48634 0.833984 2.81967 0.833984H5.51301C6.85301 0.833984 7.49967 1.45398 7.49967 2.73398V3.93398C7.49967 5.21398 6.84634 5.83398 5.51301 5.83398ZM2.81967 1.83398C1.97301 1.83398 1.83301 2.06065 1.83301 2.73398V3.93398C1.83301 4.60732 1.97301 4.83398 2.81967 4.83398H5.51301C6.35967 4.83398 6.49967 4.60732 6.49967 3.93398V2.73398C6.49967 2.06065 6.35967 1.83398 5.51301 1.83398H2.81967Z" fill="currentColor" />
                            </svg>
                            InstaWall
                        </button>
                        <button type='button' className='cursor-pointer flex items-center rounded-2xl py-2 px-4 hover:text-[#1199ff] duration-300'>

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className='mr-2'>
                                <path d="M2.33297 13.6676C2.8863 14.2209 3.77964 14.2209 4.33297 13.6676L12.9996 5.00094C13.553 4.4476 13.553 3.55427 12.9996 3.00094C12.4463 2.4476 11.553 2.4476 10.9996 3.00094L2.33297 11.6676C1.77964 12.2209 1.77964 13.1143 2.33297 13.6676Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0068 5.99414L10.0068 3.99414" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.66699 1.62732L6.66699 1.33398L6.37366 2.33398L6.66699 3.33398L5.66699 3.04065L4.66699 3.33398L4.96033 2.33398L4.66699 1.33398L5.66699 1.62732Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 5.62732L4 5.33398L3.70667 6.33398L4 7.33398L3 7.04065L2 7.33398L2.29333 6.33398L2 5.33398L3 5.62732Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13 8.95935L14 8.66602L13.7067 9.66602L14 10.666L13 10.3727L12 10.666L12.2933 9.66602L12 8.66602L13 8.95935Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {t('my_creations')}
                        </button>
                        <About />
                        <Langue />
                    </div>
                    <button type='button' className='cursor-pointer rounded-xl border border-[#0A7CCE] text-[#0A7CCE] py-2 px-6 hover:bg-[#0A7CCE] hover:text-white transition duration-300'>{t('connect_button')}</button>
                </div>
            </nav>

            {/* __________________________Sur petit écran ____________________________________________*/}

            <nav className='xl:hidden w-full flex items-center justify-between h-[74px] pl-5 pr-[20%]'>
                <a href=''>
                    <img src="/EazyPostCart/images/logo1.png" alt="LogoEazyPostCart" className='w-20 h-auto' />
                </a>
                {/* Bouton Rechercher */}
                <button type='button' className='rounded hover:shadow hover:shadow-gray-400 duration-300 hover:bg-white p-3 h-10 cursor-pointer' onClick={() => setShowInput(v => !v)}>
                    <img src="/EazyPostCart/images/search.png" alt="Search" className='w-6 h-6' />
                </button>
                {showInput && (
                    <input
                        type="search"
                        maxLength={100}
                        className="absolute top-20 w-[90%] border border-gray-300 bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 left-1/2 transform -translate-x-1/2"
                        placeholder={t('search_placeholder')}
                        autoFocus
                    />
                )}
                <div><Langue /></div>
                {/* Bouton burger visible seulement en mobile */}
                <button
                    className="xl:hidden absolute top-6 right-4 z-50"
                    onClick={() => setResponsive(true)}
                    aria-label="Ouvrir le menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                </button>
                {/* Menu xl */}
                <div
                    className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-50 flex flex-col items-center transition-transform duration-300 ease-in-out transform ${responsive ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <button
                        className="absolute top-8 right-4 text-3xl"
                        onClick={() => setResponsive(false)}
                        aria-label="Fermer le menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                    </button>
                    <nav className="flex flex-col gap-6 w-full px-6 mt-20">
                        {/* InstaWall */}
                        <button type='button' className='cursor-pointer flex items-center rounded-2xl py-2 px-4 hover:text-[#1199ff] duration-300'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <path d="M13.18 9.16732H10.4867C9.14667 9.16732 8.5 8.54732 8.5 7.26732V2.73398C8.5 1.45398 9.15333 0.833984 10.4867 0.833984H13.18C14.52 0.833984 15.1667 1.45398 15.1667 2.73398V7.26732C15.1667 8.54732 14.5133 9.16732 13.18 9.16732ZM10.4867 1.83398C9.64 1.83398 9.5 2.06065 9.5 2.73398V7.26732C9.5 7.94065 9.64 8.16732 10.4867 8.16732H13.18C14.0267 8.16732 14.1667 7.94065 14.1667 7.26732V2.73398C14.1667 2.06065 14.0267 1.83398 13.18 1.83398H10.4867Z" fill="currentColor" />
                                <path d="M13.18 15.166H10.4867C9.14667 15.166 8.5 14.546 8.5 13.266V12.066C8.5 10.786 9.15333 10.166 10.4867 10.166H13.18C14.52 10.166 15.1667 10.786 15.1667 12.066V13.266C15.1667 14.546 14.5133 15.166 13.18 15.166ZM10.4867 11.166C9.64 11.166 9.5 11.3927 9.5 12.066V13.266C9.5 13.9393 9.64 14.166 10.4867 14.166H13.18C14.0267 14.166 14.1667 13.9393 14.1667 13.266V12.066C14.1667 11.3927 14.0267 11.166 13.18 11.166H10.4867Z" fill="currentColor" />
                                <path d="M5.51301 15.1673H2.81967C1.47967 15.1673 0.833008 14.5473 0.833008 13.2673V8.73398C0.833008 7.45398 1.48634 6.83398 2.81967 6.83398H5.51301C6.85301 6.83398 7.49967 7.45398 7.49967 8.73398V13.2673C7.49967 14.5473 6.84634 15.1673 5.51301 15.1673ZM2.81967 7.83398C1.97301 7.83398 1.83301 8.06065 1.83301 8.73398V13.2673C1.83301 13.9407 1.97301 14.1673 2.81967 14.1673H5.51301C6.35967 14.1673 6.49967 13.9407 6.49967 13.2673V8.73398C6.49967 8.06065 6.35967 7.83398 5.51301 7.83398H2.81967Z" fill="currentColor" />
                                <path d="M5.51301 5.83398H2.81967C1.47967 5.83398 0.833008 5.21398 0.833008 3.93398V2.73398C0.833008 1.45398 1.48634 0.833984 2.81967 0.833984H5.51301C6.85301 0.833984 7.49967 1.45398 7.49967 2.73398V3.93398C7.49967 5.21398 6.84634 5.83398 5.51301 5.83398ZM2.81967 1.83398C1.97301 1.83398 1.83301 2.06065 1.83301 2.73398V3.93398C1.83301 4.60732 1.97301 4.83398 2.81967 4.83398H5.51301C6.35967 4.83398 6.49967 4.60732 6.49967 3.93398V2.73398C6.49967 2.06065 6.35967 1.83398 5.51301 1.83398H2.81967Z" fill="currentColor" />
                            </svg>
                            InstaWall
                        </button>
                        {/* My Creations */}
                        <button type='button' className='cursor-pointer flex items-center rounded-2xl py-2 px-4 hover:text-[#1199ff] duration-300'>

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className='mr-2'>
                                <path d="M2.33297 13.6676C2.8863 14.2209 3.77964 14.2209 4.33297 13.6676L12.9996 5.00094C13.553 4.4476 13.553 3.55427 12.9996 3.00094C12.4463 2.4476 11.553 2.4476 10.9996 3.00094L2.33297 11.6676C1.77964 12.2209 1.77964 13.1143 2.33297 13.6676Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0068 5.99414L10.0068 3.99414" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.66699 1.62732L6.66699 1.33398L6.37366 2.33398L6.66699 3.33398L5.66699 3.04065L4.66699 3.33398L4.96033 2.33398L4.66699 1.33398L5.66699 1.62732Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 5.62732L4 5.33398L3.70667 6.33398L4 7.33398L3 7.04065L2 7.33398L2.29333 6.33398L2 5.33398L3 5.62732Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13 8.95935L14 8.66602L13.7067 9.66602L14 10.666L13 10.3727L12 10.666L12.2933 9.66602L12 8.66602L13 8.95935Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {t('my_creations')}
                        </button>
                        {/* About */}
                        <div>
                            <button
                                className="flex items-center py-2 px-4 justify-between w-full"
                                onClick={() => toggleDropdown('about')}
                            >
                                {t('about')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 transition-transform duration-300 ${openDropdown === 'about' ? 'rotate-180' : ''}`}><path d="m18 15-6-6-6 6"></path></svg>
                            </button>
                            {openDropdown === 'about' && (
                                <div className='flex flex-col items-start w-full gap-y-2 bg-gray-200'>
                                    <a href="" className='hover:text-[#1199ff] duration-300 border-b-1 border-black w-full py-1 pl-1'>Link 1</a>
                                    <a href="" className='hover:text-[#1199ff] duration-300 w-full py-1 pl-1'>Link 2</a>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <a className="mt-4 rounded-[12px] w-full border border-black px-4 py-3 text-sm font-medium text-black hover:text-white hover:bg-black duration-300 text-center touch-manipulation" style={{ minHeight: 44 }} href="">
                                {t('connect_button')}
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
            </nav>
        </header>
    );
}
export default Header;