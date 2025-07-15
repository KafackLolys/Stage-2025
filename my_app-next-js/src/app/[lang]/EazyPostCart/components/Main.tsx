import React from "react";
import P1_Introduction from "./Main/P1_Introduction";
import P2_Carte from "./Main/P2_Carte";
import P3_Guide from "./Main/P3_Guide";
import P4_CauseInstaWall from "./Main/P4_CauseInstaWall";

const Main = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <P1_Introduction />
            <P2_Carte />
            <P3_Guide />
            <P4_CauseInstaWall />
        </main>
    );
};

export default Main;