'use client';

import React from 'react';

const Bouton = () => {

    return (
        <div className="">
            <a className="rounded-[12px] bg-[#292723] px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors" href="">
                Soutenir une cause
            </a>
            <a className="ml-4 rounded-[12px] bg-[#0B99FF] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors" href="">
                Créer une campagne
            </a>
            <a className="ml-4 rounded-[12px] border border-black px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 transition-colors" href="">
                Connexion
            </a>
        </div>
    );
};

export default Bouton;