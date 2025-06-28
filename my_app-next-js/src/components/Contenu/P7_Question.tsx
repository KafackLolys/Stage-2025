"use client";
import React, { use, useState } from 'react';

const P7_Question = () => {
    type Question = {
        id: number;
        question: string;
        answer: string;
    };
const questions: Question[] = [
  { id: 1, question: "Quel est le prix d'une carte postale solidaire ?", answer: "Le prix varie selon la destination, mais une partie est toujours reversée à la cause soutenue." },
  { id: 2, question: "Comment sont envoyées les cartes postales ?", answer: "Nous nous chargeons de l'impression et de l'envoi pour vous !" },
  { id: 3, question: "Comment puis-je être sûr que l'argent est bien reversé ?", answer: "Nous collaborons directement avec des associations et des porteurs de projets. Chaque transaction est transparente et suivie." },
  { id: 4, question: "Puis-je envoyer une carte anonymement ?", answer: "Oui, vous pouvez envoyer une carte sans afficher votre nom." },
  { id: 5, question: "À qui puis-je envoyer une carte postale EazyCause ?", answer: "Vous pouvez envoyer une carte à une personne en particulier ou à une association qui distribue les messages aux bénéficiaires." },
  { id: 6, question: "EazyCause est-il disponible dans mon pays ?", answer: "EazyCause est accessible partout dans le monde. Nos cartes peuvent être envoyées vers de nombreux pays." },
  { id: 7, question: "Quel type de visuel puis-je choisir pour ma carte ?", answer: "Vous pouvez choisir parmi nos designs solidaires ou importer vos propres images et visuels personnalisés." },
  { id: 8, question: "Comment puis-je suivre ma carte postale ?", answer: "Une notification vous informe dès que votre carte a été imprimée et expédiée." },
  { id: 9, question: "Comment contacter le support EazyCause ?", answer: "Vous pouvez nous écrire via le formulaire de contact ou par email à cause@eazypostcard.com." }
];
const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };
    return (
        <section className="  py-10 flex flex-col justify-center items-center gap-6 w-full overflow-hidden mt-[70px]" id="faq">
            <div className="relative flex md:flex-row flex-col justify-between w-full">
                <div className="pointer-events-none">
                    <img alt="decoration" width="800" height="800" decoding="async" data-nimg="1" className="hidden sm:block top-0 left-0 absolute w-[80%] md:w-[1200px] h-auto" src="images/backb.webp" />
                </div>
                <div className="space-y-6 px-4 sm:px-8 md:px-12 pt-12 md:pt-24 md:w-1/2 md:text-left text-center">
                    <h2 className="font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl">Questions posées par les utilisateurs sur EazyCause.</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Des milliers de personnes ont envoyé avec succès des cartes postales à travers le monde, et vous ?</p>
                    <div className="space-y-2 mt-6 w-full sm:w-[500px]">
                        {/*Liste de questions*/}
                        {questions.map((question) => (
                            <div key={question.id} className="shadow-sm border border-gray-200 rounded-lg">
                            <button className="flex justify-between items-center bg-white hover:bg-gray-100 px-4 py-3 w-full font-medium text-gray-800 text-sm md:text-lg text-left  cursor-pointer"
                                onClick={() => handleToggle(question.id)}>
                                <p className="text-[12px] sm:text-[13px] md:text-[14px]">{question.question}</p>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className={`${openId === question.id ? "rotate-180" : "rotate-0"}transition-transform duration-300 text-[#6F7580] text-[16px] md:text-[14px]`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                            </button>
                            {openId === question.id && (
                                <div className="bg-gray-50 px-4 py-3 text-gray-700 text-sm">{question.answer}</div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
                <div className="relative flex justify-center items-center mt-10 md:mt-0 md:w-1/2">
                    <img alt="Image utilisateur heureux" loading="lazy" width="648" height="805" decoding="async" data-nimg="1" className="rounded-lg w-full max-w-[648px] h-auto object-cover" src="images/userr.webp" />
                </div>
            </div>
        </section>
    );
}
export default P7_Question;