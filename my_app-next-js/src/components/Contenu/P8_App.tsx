import React from 'react';
const P8_App = () => {
  return (
    <div className="flex flex-col items-center mb-[60px] max-w-[1236px] mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center py-6 sm:py-8">
        <h1 className="text-[20px] sm:text-[24px] font-bold text-[#292723]">Découvrez l'application EazyPostcard.</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">L'application qui transforme vos moments en souvenirs inoubliables.</p>
      </header>
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden w-full">
        <div className="flex items-end justify-center w-full md:w-1/2 bg-[#E7F9FF] ">
          <img alt="Mockup App" loading="lazy" width="600" height="600" decoding="async" data-nimg="1" className="w-full max-w-[500px] h-auto" src="images/apphone.webp" />
        </div>
        <div className="bg-pink-100 w-full md:w-1/2 p-4 sm:p-6 lg:p-8">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] text-[#111D54] font-bold mb-4 sm:mb-8 leading-tight">Téléchargez EazyPostcard et commencez à créer</h2>
          <ul className="font-semibold list-disc pl-5 space-y-2 text-[#111D54] text-sm sm:text-base">
            <li>Des milliers de modèles à personnaliser</li>
            <li>Personnalisation illimitée avec vos textes, photos, stickers, etc.</li>
            <li>Expédié directement chez votre destinataire</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
            <a href="" className="flex items-center justify-center hover:bg-gray-800 transition">
              <img alt="App Store" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="w-[120px] sm:w-[140px]" src="images/appstore.webp" />
            </a>
            <a href="" className="flex items-center justify-center hover:bg-gray-800 transition">
              <img alt="Google Play" loading="lazy" width="120" height="40" decoding="async" data-nimg="1" className="w-[120px] sm:w-[140px]" src="images/googleplay.webp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default P8_App;