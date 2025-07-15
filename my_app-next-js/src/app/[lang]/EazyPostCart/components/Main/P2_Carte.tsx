'use client';
import React, { useState } from "react";
import { useTranslation } from 'next-i18next';
import "@/app/utils/18n";

const P2_Carte = () => {
    //Translation
    const { t } = useTranslation('common');
    type Cart = {
        id: number;
        label: string;
        image: string;
    };
    const populaires: Cart[] = [
        { id: 1, label: "Carte Postale", image: "/EazyPostCart/images/populaires.png" },
        { id: 2, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275401.png" },
        { id: 3, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275400.png" },
        { id: 4, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275393.png" },
        { id: 5, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275398.png" },
        { id: 6, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275397.png" }
    ];
    const voyages: Cart[] = [
        { id: 1, label: "Carte Postale", image: "/EazyPostCart/images/voyages.png" },
        { id: 2, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275401.png" },
        { id: 3, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275400.png" },
        { id: 4, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275393.png" },
        { id: 5, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275398.png" },
        { id: 6, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275397.png" }
    ];
    const famille: Cart[] = [
        { id: 1, label: "Carte Postale", image: "/EazyPostCart/images/famille.png" },
        { id: 2, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275401.png" },
        { id: 3, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275400.png" },
        { id: 4, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275393.png" },
        { id: 5, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275398.png" },
        { id: 6, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275397.png" }
    ];
    const fetesReligieuses: Cart[] = [
        { id: 1, label: "Carte Postale", image: "/EazyPostCart/images/fetesReligieuses.png" },
        { id: 2, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275401.png" },
        { id: 3, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275400.png" },
        { id: 4, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275393.png" },
        { id: 5, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275398.png" },
        { id: 6, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275397.png" }
    ];
    const nouvelAn: Cart[] = [
        { id: 1, label: "Carte Postale", image: "/EazyPostCart/images/nouvelAn.png" },
        { id: 2, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275401.png" },
        { id: 3, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275400.png" },
        { id: 4, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275393.png" },
        { id: 5, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275398.png" },
        { id: 6, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275397.png" }
    ];
    const soutiens: Cart[] = [
        { id: 1, label: "Carte Postale", image: "/EazyPostCart/images/soutiens.png" },
        { id: 2, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275401.png" },
        { id: 3, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275400.png" },
        { id: 4, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275393.png" },
        { id: 5, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275398.png" },
        { id: 6, label: "Carte Postale", image: "/EazyPostCart/images/Frame 1171275397.png" }
    ];
    const [activeCategory, setActiveCategory] = useState<'populaires' | 'voyages' | 'famille' | 'fetesReligieuses' | 'nouvelAn' | 'soutiens'>('populaires');
    const getCategoryData = () => {
        switch (activeCategory) {
            case 'voyages': return voyages;
            case 'famille': return famille;
            case 'fetesReligieuses': return fetesReligieuses;
            case 'nouvelAn': return nouvelAn;
            case 'soutiens': return soutiens;
            default: return populaires;
        }
    };
    return (
        <section className="lex flex-col items-center justify-center w-full py-12">
            <h1 className="text-[25px] md:text-[50px] capitalize text-center font-semibold leading-tight">
                Partagez vos <span className="bg-gradient-to-r from-[#0B99FF] to-[#0062A8] bg-clip-text text-transparent">moments</span> créez des<br /><span className="bg-gradient-to-r from-[#0B99FF] to-[#0062A8] bg-clip-text text-transparent">souvenirs</span> inoubliables.
            </h1>
            <p className="mt-6 text-center text-[#4D5159] text-[14px] md:text-[16px] px-2">Dans un monde où nos plus beaux instants restent figés dans nos téléphones, EazyPostCard vous permet de leur <br /> donner une seconde vie. <b className="font-semibold text-black">Avec EazyPostCard, transformez vos photos en véritables cartes postales et envoyez-les à <br /> travers le monde, en quelques clics.</b></p>
            {/*Catégorie de cart*/}
            <div className="mt-12 w-full text-[#9EB4C4]">
                {/* Menu desktop */}
                <nav className="hidden md:flex flex-row px-3 items-center justify-center">
                    <button type="button" onClick={() => setActiveCategory('populaires')} className={`${activeCategory === 'populaires' ? 'border-b-2 border-[#1092ED] bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] font-semibold text-[#1092ED]' : 'border-b-2 border-[#D3D3D3] hover:border-[#1092ED] hover:bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] hover:font-semibold hover:text-[#1092ED]'} px-6 py-3 duration-300`}>Populaires</button>
                    <button type="button" onClick={() => setActiveCategory('voyages')} className={`${activeCategory === 'voyages' ? 'border-b-2 border-[#1092ED] bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] font-semibold text-[#1092ED]' : 'border-b-2 border-[#D3D3D3] hover:border-[#1092ED] hover:bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] hover:font-semibold hover:text-[#1092ED]'} px-6 py-3 duration-300`}>Voyages</button>
                    <button type="button" onClick={() => setActiveCategory('famille')} className={`${activeCategory === 'famille' ? 'border-b-2 border-[#1092ED] bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] font-semibold text-[#1092ED]' : 'border-b-2 border-[#D3D3D3] hover:border-[#1092ED] hover:bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] hover:font-semibold hover:text-[#1092ED]'} px-6 py-3 duration-300`}>Famille</button>
                    <button type="button" onClick={() => setActiveCategory('fetesReligieuses')} className={`${activeCategory === 'fetesReligieuses' ? 'border-b-2 border-[#1092ED] bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] font-semibold text-[#1092ED]' : 'border-b-2 border-[#D3D3D3] hover:border-[#1092ED] hover:bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] hover:font-semibold hover:text-[#1092ED]'} px-6 py-3 duration-300`}>Fêtes Religieuses</button>
                    <button type="button" onClick={() => setActiveCategory('nouvelAn')} className={`${activeCategory === 'nouvelAn' ? 'border-b-2 border-[#1092ED] bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] font-semibold text-[#1092ED]' : 'border-b-2 border-[#D3D3D3] hover:border-[#1092ED] hover:bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] hover:font-semibold hover:text-[#1092ED]'} px-6 py-3 duration-300`}>Nouvel An</button>
                    <button type="button" onClick={() => setActiveCategory('soutiens')} className={`${activeCategory === 'soutiens' ? 'border-b-2 border-[#1092ED] bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] font-semibold text-[#1092ED]' : 'border-b-2 border-[#D3D3D3] hover:border-[#1092ED] hover:bg-gradient-to-t from-[#0B99FF26] to-[#0B99FF00] hover:font-semibold hover:text-[#1092ED]'} px-6 py-3 duration-300`}>Soutiens</button>
                </nav>
                {/* Menu mobile */}
                <div className="md:hidden flex justify-center mt-4">
                    <select
                        value={activeCategory}
                        onChange={e => setActiveCategory(e.target.value as any)}
                        className="border border-[#1092ED] rounded px-4 py-2 text-[#1092ED] font-semibold bg-white shadow focus:outline-none w-96 mx-2"
                    >

                        <option value="populaires">Populaires</option>
                        <option value="voyages">Voyages</option>
                        <option value="famille">Famille</option>
                        <option value="fetesReligieuses">Fêtes Religieuses</option>
                        <option value="nouvelAn">Nouvel An</option>
                        <option value="soutiens">Soutiens</option>
                    </select>
                </div>
            </div>
            {/*Multi-page*/}
            <div className="flex flex-wrap items-center justify-center mt-12 ">
                {getCategoryData().map((carte) => (
                    <div key={carte.id} className="w-96 hover:shadow-xl transition duration-300 cursor-pointer">
                        <img src={carte.image} alt={carte.label} className="w-full h-auto rounded-t-lg" />
                    </div>
                ))}
                <div className="flex justify-center w-full mt-8">
                    <button type="button" className="px-4 py-2 text-white bg-[#0A7CCE] rounded-lg hover:bg-[#0B99FF] duration-300 flex items-center">
                        Afficher tous les designs
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="ml-3">
                            <path d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z" fill="#ffffff" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
export default P2_Carte;