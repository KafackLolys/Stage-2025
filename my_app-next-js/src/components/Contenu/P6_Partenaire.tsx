import React from 'react';
import styles from '../css/slide_P6_Partenaire.module.css';



const slides = [
    'images/graphiscan.webp',
    'images/digiprint.webp',
    'images/actionprinting.webp',
    'images/dhh.webp',
    'images/perthcbd.webp',
    'images/gpconcept.webp',
    'images/graphiscan.webp',
    'images/digiprint.webp',
    'images/actionprinting.webp',
    'images/dhh.webp',
    'images/perthcbd.webp',
    'images/gpconcept.webp',
    'images/graphiscan.webp',
    'images/digiprint.webp',
    'images/actionprinting.webp',
    'images/dhh.webp',
    'images/perthcbd.webp',
    'images/gpconcept.webp',
];

const P6_Partenaire = () => {
    return (
        <div className='w-full bg-[#FAF9F7]'>
            <div className="max-w-[1632px] flex justify-center items-center h-[200px] mb-4 w-full">
                <div className="relative flex justify-center items-center mx-auto border-2 border-transparent w-full max-w-[1632px] h-full min-h-[200px] sm:min-h-[120px]">
                    <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full max-w-[1432px] h-[48px] min-h-[120px]">
                        <img alt="Logo 1" loading="lazy" width={124} height={40} decoding="async" data-nimg="1" className="w-[80px] sm:w-[100px] h-[28px] sm:h-[32px] mx-auto" src="images/logoInstacard.webp" />
                        <img alt="Logo 2" loading="lazy" width={124} height={40} decoding="async" data-nimg="1" className="w-[80px] sm:w-[100px] h-[28px] sm:h-[32px] mx-auto" src="images/logo2.webp" />
                        <img alt="Logo 3" loading="lazy" width={124} height={40} decoding="async" data-nimg="1" className="w-[80px] sm:w-[100px] h-[28px] sm:h-[32px] mx-auto" src="images/logo3.webp" />
                        <img alt="Logo 4" loading="lazy" width={124} height={40} decoding="async" data-nimg="1" className="w-[80px] sm:w-[100px] h-[28px] sm:h-[32px] mx-auto" src="images/phenix.webp" />
                        <img alt="Logo 5" loading="lazy" width={124} height={40} decoding="async" data-nimg="1" className="w-[130px] sm:w-[160px] h-[68px] sm:h-[36px] mx-auto" src="images/zenithis.webp"></img>
                    </div>
                </div>
            </div>
            <div className={`${styles.slider    } max-w-[1632px] flex justify-center items-center overflow-hidden mx-auto w-full h-[120px] mb-12`}>
                <div className={`${styles.slideTrack}`}>
                    {slides.concat(slides).map((src, index) => (
                        <div className={`${styles.slide}`} key={index}>
                            <img alt="Action Printing" loading="lazy" width="124" height="70" decoding="async" data-nimg="1" className="w-[80px] sm:w-[100px] h-auto mx-auto" src={src} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default P6_Partenaire;