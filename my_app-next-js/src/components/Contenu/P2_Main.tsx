import React from 'react';

const p2_Main = () => {
    return(
    <div className="max-w-[1232px] mx-auto px-4" id="features">
        <section className="flex flex-col justify-center items-center w-full py-8 md:py-10">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col sm:flex-row items-center bg-[#A8FFC266] rounded-[15px] p-4 gap-4 sm:gap-6">
                        <img src="images/g8.webp" alt="Agrandir" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[170px] md:h-[170px]" />
                        <div className="flex flex-col text-center sm:text-left">
                            <h3 className="text-[#000] font-semibold text-[18px] sm:text-[20px] md:text-[24px] leading-tight">Un message qui a du sens</h3>
                            <p className="text-[#000] font-normal mt-2 sm:mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">Envoyez une carte postale pour exprimer votre soutien, votre gratitude ou votre solidarité.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center bg-[#E6E4FF] rounded-[15px] p-4 gap-4 sm:gap-6">
                        <img src="images/g8g.webp" alt="Agrandir" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[170px] md:h-[170px]" />
                        <div className="flex flex-col text-center sm:text-left">
                            <h3 className="text-[#000] font-semibold text-[18px] sm:text-[20px] md:text-[24px] leading-tight">Un impact réel</h3>
                            <p className="text-[#000] font-normal mt-2 sm:mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">Une partie du prix de chaque carte postale est directement reversée à la cause choisie.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center bg-[#C0E5FF] rounded-[15px] p-4 gap-4 sm:gap-6">
                        <img src="images/amico.webp" alt="Agrandir" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[170px] md:h-[170px]" />
                        <div className="flex flex-col text-center sm:text-left">
                            <h3 className="text-[#000] font-semibold text-[18px] sm:text-[20px] md:text-[24px] leading-tight">Des campagnes pour tous</h3>
                            <p className="text-[#000] font-normal mt-2 sm:mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">Créez votre propre campagne et mobilisez votre entourage en quelques minutes.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center bg-[#FFDDC7] rounded-[15px] p-4 gap-4 sm:gap-6">
                        <img src="images/bro.webp" alt="Agrandir" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[170px] md:h-[170px]" />
                        <div className="flex flex-col text-center sm:text-left">
                            <h3 className="text-[#000] font-semibold text-[18px] sm:text-[20px] md:text-[24px] leading-tight">Simple, rapide et efficace</h3>
                            <p className="text-[#000] font-normal mt-2 sm:mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">Choisissez une cause, personnalisez votre carte, et nous l'envoyons pour vous.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <div id="commentMarche" className="flex justify-center items-center my-8 sm:my-12 md:my-16">
            <div className="rounded-[30px] sm:rounded-[60px] p-4 sm:p-6 md:p-8 w-full bg-gradient-to-l from-[#DFF0E4] to-[#A6D5E8]">
                <div className="w-full max-w-3xl mx-auto text-center">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[33px] font-semibold mb-3 sm:mb-4 text-[#000000]">Créer une cause sur EazyCause ne prend que quelques clics</h2>
                    <p className="text-[#000000] text-[16px] sm:text-[18px] md:text-[24px] leading-relaxed">Engagez-vous, sensibilisez, mobilisez. Envoyez des cartes postales personnalisées pour soutenir des causes universelles et faites la différence.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 mt-6 md:mt-8">
                    <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                        <img src="images/phon1.png" alt="Étape 1" className="w-48 sm:w-56 md:w-64" />
                        <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-tight tracking-[-0.5px] max-w-[285px]">Créer ou choisir un modèle de carte via l'explorateur</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 md:translate-y-9">
                        <img src="images/phon2.webp" alt="Étape 2" className="w-48 sm:w-56 md:w-64 md:-translate-y-6" />
                        <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-tight tracking-[-0.5px] max-w-[285px]">Personnaliser votre message, votre voix</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 sm:space-y-12">
                        <img src="images/phon3.webp" alt="Étape 3" className="w-48 sm:w-56 md:w-64" />
                        <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-tight tracking-[-0.5px] max-w-[285px]">On se charge de la livrer à la bonne adresse</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="apropos" className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 px-4">
            <h2 className="text-[18px] sm:text-xl md:text-2xl font-semibold text-center sm:text-left">Quelques causes qui peuvent vous intéresser</h2>
        </div>
    </div>
    );
}
export default p2_Main;