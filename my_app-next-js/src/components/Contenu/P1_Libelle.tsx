import React from 'react';

const P1_Libelle = () => {
    return( 
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-[#E7F9FF] to-[#F9FBFF]">
        <h1 className="text-center text-[28px] sm:text-[36px] md:text-[48px] font-bold text-black">
            Vos cartes postales, un écho pour
            <br />les causes qui comptent.
        </h1>
        <p className="text-center text-black font-normal text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] mt-4 max-w-[690px]">
            Un simple message peut réchauffer un cœur…
            <br />et un don peut changer une vie. Personnalisez votre carte
            <br />postale, soutenez la cause qui vous tient à cœur et contribuez à
            <br />son financement.
        </p>
        {/* cart */}
        <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            <div className="bg-[#2D65AF] w-full max-w-[236px] h-auto min-h-[287px] text-white rounded-[32px] flex flex-col justify-end p-4 transform sm:-translate-y-24">
                <img alt="traits" loading="lazy" width="236" height="287" decoding="async" data-nimg="1" className="w-full h-auto rounded-[32px]" src="images/traits.webp"></img>
                <p className="mt-4 text-base sm:text-lg md:text-[20px]">Soutenez les causes qui vous tiennent à cœur.</p>
                <a className="text-xs sm:text-sm md:text-[13px] bg-[#FFFFFF1A] text-white border border-white px-4 sm:px-6 py-2 sm:py-3 rounded-[12px] font-semibold mt-4 text-center block hover:bg-white hover:text-[#2D65AF] transition-colors" href="/soutenir_cause">Explorer les causes</a>
            </div>
            <img alt="Campagne" loading="lazy" width="236" height="287" decoding="async" data-nimg="1" className="w-full max-w-[236px] h-auto aspect-[236/287] object-cover rounded-[32px]" src="images/event.webp"></img>
            <div className="sm:mt-[66px] bg-[#0B99FF] w-full max-w-[236px] h-auto min-h-[220px] text-white p-4 rounded-[32px] flex flex-col justify-end text-center">
                <p className="mb-6 text-base sm:text-lg md:text-[20px] font-[400]">Engagez-vous en un clic avec EazyCause.</p>
                <a className="text-xs sm:text-sm md:text-[14px] bg-[#FFFFFF1A] text-[#FEFEFE] border-white border px-4 sm:px-[24px] py-2 sm:py-[12px] rounded-[12px] font-[600] hover:bg-white hover:text-[#0B99FF] transition-colors" href="">Créer une cause</a>
            </div>
            <img alt="cause" loading="lazy" width="236" height="287" decoding="async" data-nimg="1" className="w-full max-w-[236px] h-auto aspect-[236/287] object-cover rounded-[32px]" src="images/cause.webp"></img>
            <div className="bg-[#6359F5] w-full max-w-[236px] h-auto min-h-[287px] text-white rounded-[32px] flex flex-col justify-end p-4 transform sm:-translate-y-24">
                <p className="text-base sm:text-lg md:text-[20px]">Quand vos mots deviennent des actes.</p>
                <button className="text-xs sm:text-sm md:text-[13px] text-white border bg-[#FFFFFF1A] border-white px-4 sm:px-6 py-2 sm:py-3 rounded-[12px] font-semibold mt-4 hover:bg-white hover:text-[#6359F5] transition-colors">Explorer l'impact</button>
            </div>
        </div>
    </div>
    );
}
export default P1_Libelle;