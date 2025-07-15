import React from 'react';
import LangueFooter from './Footer/LangueFooter';
import { useTranslation } from 'next-i18next';
import "@/app/utils/18n";

const Footer = () => {
    const { t } = useTranslation('common');

    return( 
        <footer className="relative w-full px-4 sm:px-6 py-8 sm:py-10 overflow-hidden text-gray-300 bg-[url('/images/footer.jpg')] bg-cover bg-center">
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mx-auto max-w-6xl">
                <div className="space-y-4 w-[170px]">
                    <img alt={t('footer.logo_alt')} loading="lazy" width="90" height="90" decoding="async" data-nimg="1" className="w-[101px] sm:w-[90px] h-auto" src="/EazyPostCart/images/Group.png" />
                    <p className="text-white text-[13.67px] sm:text-sm">{t('footer.description')}</p>
                </div>
                <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-[70px]">
                    <div>
                        <h3 className="font-semibold text-white text-[13.89px] sm:text-sm">{t('footer.useful_links.title')}</h3>
                        <div className="flex flex-col font-light space-y-2 sm:space-y-3 mt-2 text-[13.67px] sm:text-sm">
                            <a className="hover:text-gray-400" href="">{t('footer.useful_links.links.0')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.useful_links.links.1')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.useful_links.links.2')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.useful_links.links.3')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.useful_links.links.4')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.useful_links.links.5')}</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white text-[13.89px] sm:text-sm">{t('footer.about.title')}</h3>
                        <div className="flex flex-col font-light space-y-2 sm:space-y-3 mt-2 text-[13.67px] sm:text-sm">
                            <a className="hover:text-gray-400" href="">{t('footer.about.links.0')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.about.links.1')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.about.links.2')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.about.links.3')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.about.links.4')}</a>
                            <a className="hover:text-gray-400" href="">{t('footer.about.links.5')}</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white text-[13.89px] sm:text-sm">{t('footer.account.title')}</h3>
                        <div className="flex flex-col font-light space-y-2 sm:space-y-3 mt-2 text-[13.67px] sm:text-sm">
                            <a className="hover:text-gray-400" href="/login">{t('footer.account.login')}</a>
                            <div id="lang-menu" className="text-black font-semibold group relative w-full sm:w-[160px]">
                                <LangueFooter />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white text-[13px] sm:text-[13px]">{t('footer.secure_payment.title')}</h3>
                        <div className="flex flex-col h-full">
                            <div className="mt-2">
                                <a href="">
                                    <img alt="Icon" loading="lazy" width="132" height="40" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-[100px] sm:w-[132px] h-auto" src="/EazyPostCart/images/payment-methods 1.png" />
                                </a>
                            </div>
                            <div className="flex flex-col items-center mt-4 sm:mt-[63px]">
                                <a className="font-semibold text-white text-[11px] sm:text-[12px]" href="">{t('footer.secure_payment.follow_us')}</a>
                                <div className="flex justify-center space-x-3 sm:space-x-5 mt-2">
                                    <a href="">
                                        <img alt="Icon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-5 sm:w-6 h-5 sm:h-6" src="/EazyPostCart/images/X Logo.png" />
                                    </a>
                                    <a href="">
                                        <img alt="Icon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-5 sm:w-6 h-5 sm:h-6" src="/EazyPostCart/images/YouTube Logo.png" />
                                    </a>
                                    <a href="">
                                        <img alt="Icon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-5 sm:w-6 h-5 sm:h-6" src="/EazyPostCart/images/Instagram Logo.png" />
                                    </a>
                                    <a href="">
                                        <img alt="Icon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-5 sm:w-6 h-5 sm:h-6" src="/EazyPostCart/images/LinkedIn Logo.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;