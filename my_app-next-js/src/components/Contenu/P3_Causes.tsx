"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from '../css/cause_P3.module.css'; // Assure-toi d'importer le CSS module

const P3_Causes = () => {
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
            },
            {
                id: 10,
                title: "Aide aux réfugiés",
                description: "Fournir un soutien matériel et psychologique aux personnes déplacées.",
                image: "images/refugies.png",
                participants: 15
            },
            {
                id: 11,
                title: "Sensibilisation au handicap",
                description: "Promouvoir l’inclusion des personnes en situation de handicap.",
                image: "images/handicap.png",
                participants: 7
            },
            {
                id: 12,
                title: "Zéro gaspillage alimentaire",
                description: "Réduire le gaspillage et redistribuer les invendus.",
                image: "images/gaspillage.png",
                participants: 18
            },
            {
                id: 13,
                title: "Mobilité verte en ville",
                description: "Encourager les transports doux comme le vélo ou la marche.",
                image: "images/mobilite_verte.png",
                participants: 6
            },
            {
                id: 14,
                title: "Accès aux soins médicaux",
                description: "Faciliter les soins pour les zones rurales ou pauvres.",
                image: "images/sante.png",
                participants: 13
            },
            {
                id: 15,
                title: "Soutien à la parentalité",
                description: "Accompagner les jeunes parents et familles monoparentales.",
                image: "images/parentalite.png",
                participants: 4
            },
            {
                id: 16,
                title: "Préservation des langues locales",
                description: "Sauver les langues en voie de disparition.",
                image: "images/langues.png",
                participants: 10
            },
            {
                id: 17,
                title: "Accès à l’électricité pour tous",
                description: "Développer des sources d’énergie propres dans les zones isolées.",
                image: "images/electricite.png",
                participants: 16
            },
            {
                id: 18,
                title: "Solidarité intergénérationnelle",
                description: "Créer des ponts entre les jeunes et les aînés.",
                image: "images/intergenerationnel.png",
                participants: 7
            },
            {
                id: 19,
                title: "Défense des droits numériques",
                description: "Lutter pour la protection des données personnelles en ligne.",
                image: "images/droits_numeriques.png",
                participants: 5
            },
            {
                id: 20,
                title: "Autonomisation des femmes",
                description: "Promouvoir l’entrepreneuriat féminin et l’éducation des filles.",
                image: "images/autonomisation.png",
                participants: 19
            },
            {
                id: 21,
                title: "Prévention des catastrophes",
                description: "Éduquer et préparer les populations aux urgences climatiques.",
                image: "images/catastrophes.png",
                participants: 3
            },
            {
                id: 22,
                title: "Culture et patrimoine local",
                description: "Protéger l’histoire et les savoir-faire des communautés.",
                image: "images/patrimoine.png",
                participants: 12
            }
        ];

    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Pagination
    const causesPerPage = 4; // nombre de causes visibles par "page"
    const totalPages = 5; // nombre de cercles/pages (fixe à 5)
    const [currentPage, setCurrentPage] = useState(0);

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
            const speed = 0.15;
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

    // Fonction pour aller à une page
    const goToPage = (page: number) => {
        setCurrentPage(page);
        setIsPaused(true);
        if (scrollRef.current) {
            const offset = page * causesPerPage * 320; // 320 = largeur d'une carte + marge (ajuste si besoin)
            scrollRef.current.scrollTo({
                left: offset,
                behavior: 'smooth',
            });
        }
        setTimeout(() => setIsPaused(false), 3000);
    };

    const handleScroll = (direction: 'left' | 'right') => {
        setIsPaused(true); // Met en pause le défilement auto
        if (scrollRef.current) {
            const offset = 320; // largeur d'une carte + marge (ajuste si besoin)
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -offset : offset,
                behavior: 'smooth',
            });
        }
        // Relance le défilement auto après 3 secondes
        setTimeout(() => setIsPaused(false), 3000);
    };

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Boutons de navigation */}
            <div className="flex justify-end items-center mb-4 gap-2">
                <button
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Précédent"
                    onClick={() => handleScroll('left')}
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Suivant"
                    onClick={() => handleScroll('right')}
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
            {/* Carrousel défilant automatique + manuel */}
            <div
                ref={scrollRef}
                className={`flex overflow-x-auto ${styles['no-scrollbar']}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[...causes, ...causes].map((cause, idx) => (
                    <div
                        key={idx}
                        className="ml-10 w-[280px] xs:w-[320px] sm:w-[450px] flex-shrink-0"
                    >
                        <div className="bg-card text-card-foreground shadow rounded-2xl overflow-hidden sm:p-2 flex flex-col h-full min-h-[300px] sm:min-h-[340px] border border-transparent hover:border-gray-200">
                            <img alt={cause.title} loading="lazy" width="320" height="320" className="w-full hover:scale-105 h-[160px] xs:h-[180px] sm:h-[200px] md:h-[250px] !rounded-2xl object-cover" src={cause.image} />
                            <div className="p-4 pt-0 sm:p-4 flex flex-col flex-grow">
                                <h3 className="text-sm xs:text-base sm:text-lg font-semibold line-clamp-2">{cause.title}</h3>
                                <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 flex-grow line-clamp-3">{cause.description}</p>
                                <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 xs:gap-3 sm:gap-0 mt-2 sm:mt-3">
                                    <div className="flex items-center w-full xs:w-auto">
                                        <div className="flex -space-x-1.5 xs:-space-x-2">
                                            <img alt="Avatar 2" className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-white hover:scale-105" src="images/group1.jpeg" />
                                            <img alt="Avatar 3" className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-white hover:scale-105" src="images/group2.jpeg" />
                                        </div>
                                        <span className="text-[10px] xs:text-xs hover:scale-105 sm:text-sm text-gray-700 ml-1.5 xs:ml-2">+{cause.participants} carte(s) envoyée(s)</span>
                                    </div>
                                    <a className="w-full xs:w-auto flex items-center justify-center bg-black text-white text-[10px] xs:text-xs sm:text-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg hover:bg-blue-600 hover:scale-105 hover:shadow-lg" target="_blank" href="">
                                        Participer
                                        <img alt="soutenir" className="ml-1.5 xs:ml-2 w-3 h-3 xs:w-4 xs:h-4" src="images/soutenir.webp" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination cercles */}
            <div className="flex justify-center items-center gap-3 mt-6">
                {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToPage(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer
                            ${currentPage === idx ? 'bg-blue-500' : 'bg-gray-300'}
                        `}
                        aria-label={`Aller à la page ${idx + 1}`}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center py-4 xs:py-6 sm:py-8">
                <a className="flex items-center gap-1.5 xs:gap-2 text-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-[8px] xs:rounded-[10px] sm:rounded-[12px] bg-[#0B99FF] hover:bg-[#0980d9] transition-colors hover:scale-105 duration-300" href="">
                    <span className="text-[10px] xs:text-xs sm:text-sm font-medium">voir plus</span>
                    <span className="text-lg xs:text-xl sm:text-2xl">+</span>
                </a>
            </div>
        </div>
    );
}

export default P3_Causes;