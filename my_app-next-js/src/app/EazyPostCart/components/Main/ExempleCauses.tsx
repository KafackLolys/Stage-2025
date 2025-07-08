"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/Causes.module.css';

const ExempleCauses = () => {
    type Cause = {
        id: number;
        title: string;
        description: string;
        image: string;
        participants: number;
    };

    const causes: Cause[] =
        [
            { id: 1, title: "Tout le monde a son mot à dire", description: "Une description où chacun peut exprimer son opinion. Ici un test de sauvegarde...", image: "images/Bannier_insta_card_1.png", participants: 0 },
            { id: 2, title: "Autre cause à soutenir", description: "Une autre description pour une cause différente.", image: "images/im1.jpg", participants: 5 },
            {
                id: 3,
                title: "Accès à l’eau potable",
                description: "Aider les communautés à obtenir une source d’eau propre et durable.",
                image: "images/im2.jpg",
                participants: 12
            },
            {
                id: 4,
                title: "Lutte contre le harcèlement scolaire",
                description: "Sensibiliser et agir pour que chaque élève se sente en sécurité.",
                image: "images/im3.jpg",
                participants: 8
            },
            {
                id: 5,
                title: "Soutien aux sans-abris",
                description: "Offrir un hébergement et des repas aux personnes dans le besoin.",
                image: "images/im4.jpg",
                participants: 20
            },
            {
                id: 6,
                title: "Protection des animaux",
                description: "Lutter contre la maltraitance animale et favoriser l’adoption.",
                image: "images/im5.jpg",
                participants: 14
            },
            {
                id: 7,
                title: "Égalité des genres",
                description: "Favoriser l'égalité des opportunités, peu importe le genre.",
                image: "images/im6.jpg",
                participants: 9
            },
            {
                id: 8,
                title: "Reboisement des forêts",
                description: "Planter des arbres pour restaurer les écosystèmes.",
                image: "images/im7.jpg",
                participants: 17
            },
            {
                id: 9,
                title: "Éducation numérique",
                description: "Apporter des outils technologiques aux écoles défavorisées.",
                image: "images/education_numerique.png",
                participants: 11
            }
        ];

    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Défilement automatique
    useEffect(() => {
        if (isPaused) return;
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let frame: number;
        let lastTimestamp = performance.now();

        const step = (timestamp: number) => {
            if (isPaused) return;
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;
            // Vitesse du scroll (px/ms)
            const speed = 0.05;
            scrollContainer.scrollLeft += speed * delta;

            // Boucle infinie : si on arrive à la fin, on revient au début
            if (
                scrollContainer.scrollLeft >=
                scrollContainer.scrollWidth / 2
            ) {
                scrollContainer.scrollLeft = 0;
            }
            frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [isPaused]);


    const handleScroll = (direction: 'left' | 'right') => {
        setIsPaused(true); // Met en pause le défilement auto
        if (scrollRef.current) {
            const offset = 320; // largeur d'une carte + marge (ajuste si besoin)
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -offset : offset,
                behavior: 'smooth',
            });
        }
        // Relance le défilement auto après 5 secondes
        setTimeout(() => setIsPaused(false), 5000);
    };

    return (
        <div className="w-auto md:w-[700px] h-[460px] relative">
            {/* Carrousel défilant automatique + manuel */}
            <div
                ref={scrollRef}
                className={`flex overflow-x-hidden ${styles['.noScrollbar']}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => {
                    setIsPaused(true); // Met en pause le défilement auto
                    // Relance le défilement auto après 3 secondes
                    setTimeout(() => setIsPaused(false), 3000);
                }}
            >
                {[...causes, ...causes].map((cause, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 hover:scale-102 transition-transform duration-300 w-72 md:w-[340px] mx-3 border-1 border-gray-200 rounded-[10px]"
                    >
                        <div className="bg-card text-card-foreground shadow rounded-[10px] sm:p-2 flex flex-col h-[350px] md:h-[400px] border border-transparent hover:border-gray-200">
                            <img alt={cause.title} loading="lazy" className="w-full  hover:scale-107 duration-300 h-[160px] rounded-[10px] object-cover" src={cause.image} />
                            <div className="flex flex-col flex-grow m-2">
                                <h3 className="text-[14px] md:text-[16px] text-black font-semibold line-clamp-2">{cause.title}</h3>
                                <p className="text-[12px] md:text-[14px] text-[#555555] flex-grow line-clamp-3">{cause.description}</p>
                                <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-3 sm:gap-0 mt-2 sm:mt-3">
                                    <div className="flex items-center w-full xs:w-auto">
                                        <div className="flex -space-x-1.5 xs:-space-x-2">
                                            <img alt="Avatar 2" className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-white hover:scale-105 duration-300" src="images/group1.jpeg" />
                                            <img alt="Avatar 3" className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-white hover:scale-105 duration-300" src="images/group2.jpeg" />
                                            <img alt="Avatar 3" className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-white hover:scale-105 duration-300" src="images/group2.jpeg" />
                                        </div>
                                        <span className="text-[11px] hover:scale-102 duration-300  text-gray-700 ml-1.5 xs:ml-2">+{cause.participants} cartes envoyées</span>
                                    </div>
                                    <div className='flex w-full items-center justify-between gap-x-3 mt-3'>
                                        <a className="w-1/2 h-8 md:h-[40px] xs:w-auto flex items-center justify-center bg-white text-[#292723] text-[12px] xs:text-xs sm:text-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-[8px] hover:scale-102 hover:shadow-lg border-2 border-[#ECEAE1]" target="_blank" href="">
                                            Détails de cause
                                        </a>
                                        <a className="w-1/2 h-8 md:h-[40px] xs:w-auto flex items-center justify-center bg-[#015B9C] text-white text-[12px] xs:text-xs sm:text-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-[8px] hover:scale-102 hover:shadow-lg border-2 border-[#ECEAE1]" target="_blank" href="">
                                            Participer
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p className="text-[#555555] text-[14px] md:text-[16px]">Vos cartes postales, un écho <br /> pour les causes qui comptent.</p>
                {/* Boutons de navigation */}
                <div className="flex justify-end items-center gap-2">
                    <button
                        className="group rounded-full p-2 cursor-pointer shadow hover:shadow-gray-500 transition"
                        aria-label="Précédent"
                        onClick={() => handleScroll('left')}
                    >
                        <svg
                            className='h-8 md:h-10 w-8 md:w-10 group-hover:scale-105 transition duration-200'
                            xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path className='stroke-[#9EB4C4] group-hover:stroke-[#015B9C] transition duration-200' d="M6.37988 12.1094L2.33322 8.06271L6.37988 4.01604" stroke="#9EB4C4 hover:#015B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path className='stroke-[#9EB4C4] group-hover:stroke-[#015B9C] transition duration-200' d="M13.667 8.0625L2.44699 8.0625" stroke="#9EB4C4" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>                    </button>
                    <button
                        className="group rounded-full p-2 cursor-pointer shadow hover:shadow-gray-500 transition"
                        aria-label="Suivant"
                        onClick={() => handleScroll('right')}
                    >
                        <svg
                            className='rotate-180 h-8 md:h-10 w-8 md:w-10 group-hover:scale-105 transition duration-200'
                            xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path className='stroke-[#9EB4C4] group-hover:stroke-[#015B9C] transition duration-200' d="M6.37988 12.1094L2.33322 8.06271L6.37988 4.01604" stroke="#9EB4C4 hover:#015B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path className='stroke-[#9EB4C4] group-hover:stroke-[#015B9C] transition duration-200' d="M13.667 8.0625L2.44699 8.0625" stroke="#9EB4C4" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ExempleCauses;