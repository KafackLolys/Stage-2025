'use client';
import React from "react";
import { useTranslation } from 'next-i18next';
import "@/app/utils/18n";

const P1_Introduction = () => {
    //Translation
    const { t } = useTranslation('common');
    return (
        <section className="flex flex-col md:flex-row items-center justify-center w-full py-12 px-4 md:px-[8%] gap-y-8 md:gap-x-12">
            <img src="/EazyPostCart/images/VideoImage.png" alt="Introduction" className="w-full max-w-[400px] md:w-[1380px] h-auto" />
            <div>
                <h1 className="text-xl md:text-4xl capitalize font-semibold">
                    {t('p1_introduction.title.rediscover')} <span className="bg-gradient-to-r from-[#0B99FF] to-[#0062A8] bg-clip-text text-transparent">{t('p1_introduction.title.the_post_cart')}</span><br /> {t('p1_introduction.title.p1')}<br /> {t('p1_introduction.title.p2')}
                </h1>
                <p className="text-[14px] md:text-[16px] mt-4 md:mt-6 text-[#4D5159]">{t('p1_introduction.description.because')} <b className="font-semibold text-black">{t('p1_introduction.description.memory')}</b> {t('p1_introduction.description.better')}<br />
                    <b className="font-semibold text-black">{t('p1_introduction.description.eazypostcard')}</b> {t('p1_introduction.description.transform')} <b className="font-semibold text-black">{t('p1_introduction.description.post_cart')}</b> {t('p1_introduction.description.a')} <br />
                    {t('p1_introduction.description.send')} <b className="font-semibold text-black">{t('p1_introduction.description.world')}</b>.
                </p>
                <button type="button" className="flex items-center mt-6 px-4 md:px-6 py-2 md:py-3 border-1 border-[#0A7CCE] bg-[#0A7CCE] text-white rounded-lg hover:shadow hover:bg-transparent hover:text-[#0A7CCE] duration-300 cursor-pointer text-sm md:text-base">
                    {t('p1_introduction.button')}
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2">
                        <g clipPath="url(#clip0_13538_26972)">
                            <path d="M21.999 5.53125H8.99902C7.89902 5.53125 6.99902 6.43125 6.99902 7.53125V16.5312C6.99902 17.0617 7.20974 17.5704 7.58481 17.9455C7.95988 18.3205 8.46859 18.5312 8.99902 18.5312H21.999C23.109 18.5312 23.999 17.6412 23.999 16.5312V7.53125C23.999 7.00082 23.7883 6.49211 23.4132 6.11704C23.0382 5.74196 22.5295 5.53125 21.999 5.53125ZM21.999 9.20125L15.499 12.5312L8.99902 9.20125V7.53125L15.499 10.8413L21.999 7.53125V9.20125ZM4.99902 16.5312C4.99902 16.7013 5.02902 16.8612 5.04902 17.0312H0.999023C0.447023 17.0312 -0.000976562 16.5813 -0.000976562 16.0312C-0.000976562 15.4812 0.447023 15.0312 0.999023 15.0312H4.99902V16.5312ZM2.99902 7.03125H5.04902C5.02902 7.20125 4.99902 7.36125 4.99902 7.53125V9.03125H2.99902C2.44902 9.03125 1.99902 8.58125 1.99902 8.03125C1.99902 7.48125 2.44902 7.03125 2.99902 7.03125ZM0.999023 12.0312C0.999023 11.4812 1.44902 11.0312 1.99902 11.0312H4.99902V13.0312H1.99902C1.44902 13.0312 0.999023 12.5813 0.999023 12.0312Z" fill="currentColor" />
                        </g>
                        <defs>
                            <clipPath id="clip0_13538_26972">
                                <rect width="24" height="24" fill="currentColor" transform="translate(-0.000976562 0.03125)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default P1_Introduction;