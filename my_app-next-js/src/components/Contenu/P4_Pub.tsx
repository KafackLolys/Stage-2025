import React from 'react';

const P4_Pub = () => {
    return( 
    <div className="mb-8 relative min-h-[500px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[16px] sm:text-[28px] font-semibold text-[#000000] ">
            En quelques minutes, transformez votre message en un
            <br />acte concret et rejoignez le mouvement EazyCause.
        </p>
        <p className="text-[66px] sm:text-[140px] font-meduim text-black  tracking-[-6.65px] leading-[166.33px]">+ 5.000</p>
        <p className="text-[26px]  sm:text-[33px] font-semibold text-black mt-2">Nous ont déjà rejoints</p>
        <a className="mt-4 sm:mt-6 text-[16px] sm:text-[14px] cursor-pointer bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-[14px] shadow-lg hover:bg-gray-800 transition-colors" href="/login">Créer ma campagne maintenant !</a>
        <div className="absolute pointer-events-none top-20 left-10 w-[5rem] sm:w-[7rem] h-[8rem] sm:h-[11rem] bg-[#D9D9D9] rounded-[28px] hidden sm:block"></div>
        <div className="absolute pointer-events-none top-20 right-40 w-[5rem] sm:w-[7rem] h-[8rem] sm:h-[11rem] bg-[#D9D9D9] rounded-[28px] hidden sm:block"></div>
        <div className="absolute pointer-events-none bottom-0 left-40 w-[5rem] sm:w-[7rem] h-[8rem] sm:h-[11rem] bg-[#D9D9D9] rounded-[28px] hidden sm:block"></div>
        <div className="absolute pointer-events-none bottom-0 right-20 w-[5rem] sm:w-[7rem] h-[8rem] sm:h-[11rem] bg-[#D9D9D9] rounded-[28px] hidden sm:block"></div>
        <img src="images/vector2.webp" alt="Red Point" className="absolute pointer-events-none top-0 right-0 h-[20px] w-[100px] sm:w-auto" />
        <img src="images/redPoint.svg" alt="Red Point" className="absolute pointer-events-none top-2 left-0 h-[20px]  opacity-80 w-[100px] sm:w-auto" />
        <img src="images/redPoint2.svg" alt="Red Point" className="absolute pointer-events-none bottom-0 right-0 opacity-80 w-[80px] sm:w-auto" />
        <img src="images/vector1.webp" alt="Red Point" className="absolute left-0 pointer-events-none bottom-0 w-full" />
    </div>
    );
}
export default P4_Pub;