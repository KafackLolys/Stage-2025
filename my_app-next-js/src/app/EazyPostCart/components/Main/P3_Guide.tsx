import React from "react";


const P3_Guide = () => {
    return (
        <section className="bg-[#F5FBFF] flex flex-col items-center justify-center w-full py-20">
            <h1 className="text-[25px] md:text-[50px] text-[#02304C] capitalize text-center font-semibold leading-tight">
                Concevez en quelques minutes, publiez <br /> vos cartes postales en quelques <br /> secondes.
            </h1>
            <p className="mt-6 text-center text-[#4D5159] text-[14px] md:text-[16px]">Libérez tout le potentiel de <b className="font-semibold text-black"> InstaCard</b> avec des modèles. Découvrez des milliers de design et de catégories.</p>
            <div className="grid mt-9 sm:mt-12 w-full sm:grid-cols-2 md:flex flex-wrap sm:flex-nowrap text-white md:h-[340px] h-auto">
                <span className="xl:w-[33.4%] relative md:h-[300px] h-auto">
                    <img src="EazyPostCart/images/STEP 01.jpg" alt="STEP 01" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">ÉTAPE 01</p>
                        <p className="text-[24px] font-semibold">Sélectionnez un modèle</p>
                        <p className="text-[14px]">Choisissez parmi une variété de modèles à partir de nos conceptions disponibles ou commencez à partir de zéro.</p>
                    </div>
                </span>
                <span className="xl:w-[22.2%] relative md:h-[300px] h-auto">
                    <img src="EazyPostCart/images/STEP 02.jpg" alt="STEP 02" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">ÉTAPE 02</p>
                        <p className="text-[24px] font-semibold">Ajoutez vos photos</p>
                    </div>
                </span>
                <span className="xl:w-[22.2%] relative md:h-[300px] h-auto">
                    <img src="EazyPostCart/images/STEP 03.jpg" alt="STEP 03" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">ÉTAPE 03</p>
                        <p className="text-[24px] font-semibold">Inclure un message personnalisé</p>
                    </div>
                </span>
                <span className="xl:w-[22.2%] relative md:h-[300px] h-auto">
                    <img src="EazyPostCart/images/STEP 04.jpg" alt="STEP 04" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/60 to-transparent text-white break-words">
                        <p className="text-[14px]">ÉTAPE 04</p>
                        <p className="text-[24px] font-semibold">Envoyez votre carte postale à n'importe qui</p>
                    </div>
                </span>
            </div>
        </section>
    );
};
export default P3_Guide;