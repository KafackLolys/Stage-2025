"use client";
import React, { useEffect, useState } from 'react';
// import Slider from "./Slider"; // À utiliser si tu veux un composant réutilisable

const P5_Avis = () => {
    interface Slide {
        id: number;
        description: string;
        image: string;
        nom: string;
        pays: string;
    }

    const slides: Slide[] = [
        {
            id: 1,
            description: 'J’adore EazyCause ! <br /> Une manière simple de faire entendre sa voix.',
            nom: 'Fatou S.',
            pays: 'Dakar, Sénégal',
            image: 'images/user1.webp'
        },
        {
            id: 2,
            description: 'Grâce à EazyCause, j’ai pu mobiliser ma communauté facilement.',
            nom: 'Alioune B.',
            pays: 'Bamako, Mali',
            image: 'images/user2.webp'
        },
        {
            id: 3,
            description: 'Une plateforme intuitive, parfaite pour les jeunes leaders.',
            nom: 'Chadia M.',
            pays: 'Abidjan, Côte d’Ivoire',
            image: 'images/user3.webp'
        },
        {
            id: 4,
            description: 'Simple, rapide et efficace pour faire passer un message.',
            nom: 'Jean P.',
            pays: 'Douala, Cameroun',
            image: 'images/user4.webp'
        },
        {
            id: 5,
            description: 'J’ai vu un vrai impact depuis que j’utilise EazyCause.',
            nom: 'Mariam T.',
            pays: 'Niamey, Niger',
            image: 'images/user5.webp'
        },
        {
            id: 6,
            description: 'Des outils puissants à portée de main pour tous.',
            nom: 'Eric L.',
            pays: 'Libreville, Gabon',
            image: 'images/user6.webp'
        },
        {
            id: 7,
            description: 'Ma voix compte enfin. Merci EazyCause !',
            nom: 'Awa D.',
            pays: 'Conakry, Guinée',
            image: 'images/user7.webp'
        },
        {
            id: 8,
            description: 'Une vraie révolution pour les campagnes citoyennes.',
            nom: 'Omar N.',
            pays: 'Ouagadougou, Burkina Faso',
            image: 'images/user8.webp'
        },
        {
            id: 9,
            description: 'Très facile à utiliser, même sans compétences techniques.',
            nom: 'Stéphanie K.',
            pays: 'Lomé, Togo',
            image: 'images/user9.webp'
        },
        {
            id: 10,
            description: 'EazyCause m’a permis de sensibiliser sur une cause locale.',
            nom: 'Souleymane F.',
            pays: 'N’Djamena, Tchad',
            image: 'images/user10.webp'
        },
        {
            id: 11,
            description: 'Une plateforme qui connecte les citoyens avec les bonnes idées.',
            nom: 'Clarisse Z.',
            pays: 'Yaoundé, Cameroun',
            image: 'images/user11.webp'
        },
        {
            id: 12,
            description: 'J’ai lancé ma première campagne en quelques minutes.',
            nom: 'Tidiane C.',
            pays: 'Nouakchott, Mauritanie',
            image: 'images/user12.webp'
        },
        {
            id: 13,
            description: 'Engagement, simplicité et impact : tout est là.',
            nom: 'Nadia G.',
            pays: 'Cotonou, Bénin',
            image: 'images/user13.webp'
        }
    ];


    const [current, setCurrent] = useState(0);
    const visibleCount = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % (slides.length - visibleCount + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goNext = () => {
        setCurrent(prev => Math.min(prev + 1, slides.length - visibleCount));
    };

    const goPrev = () => {
        setCurrent(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="text-center relative">
            <h2 className="font-bold text-gray-800 text-3xl">Les gens adorent utiliser EazyCause.</h2>
            <p className="mx-auto mt-2 max-w-xl text-gray-600">
                Des milliers de personnes ont envoyé avec succès des milliers de cartes postales à travers le monde et vous ?
            </p>
            <div className="relative max-w-[1232px] mx-auto overflow-hidden mt-10">
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                <div
                    className="flex w-full transition-transform duration-500"
                    style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
                >
                    {slides.map(slide => (
                        <div key={slide.id} className="min-w-[344px] flex items-center justify-center h-[379px]">
                            <div className="relative w-[90%] mx-auto max-w-[400px] h-[309px] border border-gray-300 bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 rotate-6 hover:rotate-0 hover:scale-105">
                                <p className="text-gray-700 text-left italic" dangerouslySetInnerHTML={{ __html: slide.description }} />
                                <div className="bottom-0 left-0 absolute px-6 pb-6 w-full">
                                    <hr className="my-2 border border-gray-300 w-full" />
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <img alt="user" width="40" height="40" className="rounded-full object-cover" src={slide.image} />
                                            <div className="flex flex-col">
                                                <p className="font-bold text-left">{slide.nom}</p>
                                                <p className="text-gray-500 text-sm">{slide.pays}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 text-yellow-500">
                                            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* ⬅️ ⮕ Boutons */}
                <button
                    onClick={goPrev}
                    aria-label="Précédent"
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full z-20"
                >‹</button>
                <button
                    onClick={goNext}
                    aria-label="Suivant"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full z-20"
                >›</button>
            </div>
        </div>
    );
};

export default P5_Avis;