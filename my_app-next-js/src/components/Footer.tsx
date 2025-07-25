import React from 'react';
import Langue from './NavBar/Langue';

const Footer = () => {
    return( 
    <footer className="relative w-full px-4 sm:px-6 py-8 sm:py-10 overflow-hidden text-gray-300 bg-[url('/images/footer.jpg')] bg-cover bg-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between mx-auto max-w-6xl">
            <div className="space-y-4 w-[170px]">
                <img alt="logo instacard" loading="lazy" width="90" height="90" decoding="async" data-nimg="1" className="w-[70px] sm:w-[90px] h-auto" src="images/payment-methods 1.webp" />
                <p className="text-white text-xs sm:text-sm">Votre soutien commence par une carte !</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-[70px]">
                <div>
                    <h3 className="font-semibold text-white text-xs sm:text-sm">Liens utiles</h3>
                    <div className="flex flex-col space-y-2 sm:space-y-3 mt-2 text-xs sm:text-sm">
                        <a className="hover:text-gray-400" href="">Fonctionnalités clés</a>
                        <a className="hover:text-gray-400" href="">Comment ça marche</a>
                        <a className="hover:text-gray-400" href="">Soutenir une cause</a>
                        <a className="hover:text-gray-400" href="">Politique de confidentialité</a>
                        <a className="hover:text-gray-400" href="">Conditions d'utilisation</a>
                        <a className="hover:text-gray-400" href="#">Paramètres de cookies</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-white text-xs sm:text-sm">À propos</h3>
                    <div className="flex flex-col space-y-2 sm:space-y-3 mt-2 text-xs sm:text-sm">
                        <a className="hover:text-gray-400" href="">Notre équipe</a>
                        <a className="hover:text-gray-400" href="">Contactez-nous</a>
                        <a className="hover:text-gray-400" href="#faq">FAQ</a>
                    </div>
                </div>
            <div>
                <h3 className="font-semibold text-white text-xs sm:text-sm">Mon compte</h3>
                <div className="flex flex-col space-y-2 sm:space-y-3 mt-2 text-xs sm:text-sm">
                    <a className="hover:text-gray-400" href="/login">Connexion/Inscription</a>
                    <div id="lang-menu" className="text-black font-semibold group relative w-full sm:w-[160px]">
                        <Langue />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-white text-[13px] sm:text-[13px]">Paiement sécurisé</h3>
                <div className="flex flex-col h-full">
                    <div className="mt-2">
                        <a href="">
                            <img alt="Icon" loading="lazy" width="132" height="40" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-[100px] sm:w-[132px] h-auto" src="images/payment-methods 1.webp" />
                        </a>
                    </div>
                    <div className="flex flex-col items-center mt-4 sm:mt-[63px]">
                        <a className="font-semibold text-white text-[11px] sm:text-[12px]" href="">Suivez-nous</a>
                        <div className="flex justify-center space-x-3 sm:space-x-5 mt-2">
                            <a href="">
                                <img alt="Icon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-5 sm:w-6 h-5 sm:h-6" src="images/icon1.webp" />
                            </a>
                            <a href="">
                                <img alt="Icon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="cursor-pointer hover:text-gray-400 w-5 sm:w-6 h-5 sm:h-6" src="images/icon2.webp" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    );
}
export default Footer;