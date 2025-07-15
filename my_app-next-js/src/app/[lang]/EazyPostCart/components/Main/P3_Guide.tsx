import React from "react";
import { useTranslation } from 'next-i18next';
import "@/app/utils/18n";
const P3_Guide = () => {
    //Translation
        const { t } = useTranslation('common');
    return (
        <section className="bg-[#F5FBFF] flex flex-col items-center justify-center w-full py-20">
            <h1 className="text-[25px] md:text-[50px] text-[#02304C] capitalize text-center font-semibold leading-tight md:w-[868px]">
                {t('p3_guide.header.title')}
            </h1>
            <p className="mt-6 text-center text-[#4D5159] text-[14px] md:text-[16px]">{t('p3_guide.header.description1')} <b className="font-semibold text-black"> {t('p3_guide.header.description2')}</b> {t('p3_guide.header.description3')}</p>
            <div className="grid mt-9 sm:mt-12 w-full sm:grid-cols-2 md:flex flex-wrap sm:flex-nowrap text-white md:h-[340px] h-auto">
                <span className="xl:w-[33.4%] relative md:h-[300px] h-auto">
                    <img src="/EazyPostCart/images/STEP 01.jpg" alt="STEP 01" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">{t('p3_guide.steps.step1.title')}</p>
                        <p className="text-[24px] font-semibold">{t('p3_guide.steps.step1.subtitle')}</p>
                        <p className="text-[14px]">{t('p3_guide.steps.step1.description')}</p>
                    </div>
                </span>
                <span className="xl:w-[22.2%] relative md:h-[300px] h-auto">
                    <img src="/EazyPostCart/images/STEP 02.jpg" alt="STEP 02" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">{t('p3_guide.steps.step2.title')}</p>
                        <p className="text-[24px] font-semibold">{t('p3_guide.steps.step2.subtitle')}</p>
                    </div>
                </span>
                <span className="xl:w-[22.2%] relative md:h-[300px] h-auto">
                    <img src="/EazyPostCart/images/STEP 03.jpg" alt="STEP 03" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">{t('p3_guide.steps.step3.title')}</p>
                        <p className="text-[24px] font-semibold">{t('p3_guide.steps.step3.subtitle')}</p>
                    </div>
                </span>
                <span className="xl:w-[22.2%] relative md:h-[300px] h-auto">
                    <img src="/EazyPostCart/images/STEP 04.jpg" alt="STEP 04" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">{t('p3_guide.steps.step4.title')}</p>
                        <p className="text-[24px] font-semibold">{t('p3_guide.steps.step4.subtitle')}</p>
                    </div>
                </span>
            </div>
        </section>
    );
};
export default P3_Guide;