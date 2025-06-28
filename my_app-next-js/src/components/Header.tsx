import React from 'react';
import Langue from './NavBar/Langue';
import Accueil from './NavBar/Accueil';
import Causes from './NavBar/Causes';
import A_propos from './NavBar/A_propos';
import Bouton from './NavBar/Bouton';
const Header = () => {
    return( 
    <header className='px-2 pt-2 pb-5  bg-gradient-to-r from-[#E7F9FF] to-[#F9FBFF]'>
        <nav className='w-full flex justify-between items-center px-[3%]'>
            <a href=''>
                <img src="images/logo_cause.webp" alt="logo" className="w-12" />
            </a>
            <ul className='list-none flex'>
                <li><Accueil /></li>
                <li><Causes /></li>
                <li><A_propos /></li>
            </ul>
            <Langue />
            <Bouton />
        </nav>
    </header>
    );
}
export default Header;