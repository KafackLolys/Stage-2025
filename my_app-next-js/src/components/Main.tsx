import React from 'react';
import P1_Libelle from "./Contenu/P1_Libelle";
import P2_Main from "./Contenu/P2_Main";
import P3_Causes from "./Contenu/P3_Causes";
import P4_Pub from "./Contenu/P4_Pub";
import P5_Avis from "./Contenu/P5_Avis";
import P6_Partenaire from './Contenu/P6_Partenaire';
import P7_Question from './Contenu/P7_Question';
import P8_App from './Contenu/P8_App';

const Main = () => {
    return( 
    <div className='w-full'>
        <P1_Libelle />
        <P2_Main />
        <P3_Causes />
        <P4_Pub />
        <P5_Avis />
        <P6_Partenaire />
        <P7_Question />
        <P8_App />
    </div>
    );
}
export default Main;