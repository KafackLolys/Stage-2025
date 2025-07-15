'use client';
import React, { useState } from "react";
import ExempleCauses from "./ExempleCauses";


const P4_CauseInstaWall = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full py-12 px-[5%]">
            {/*Part 1 Causes*/}
            <div className="flex flex-col md:flex-row w-full md:gap-x-6 gap-y-6">
                <div className="text-white w-full md:w-[498px] md:h-[460px] flex flex-col rounded-[10px] p-10 bg-gradient-to-tr from-[#0062A8] to-[#0B99FF]">
                    <div className="flex w-full items-center justify-between">
                        <span className="text-xl md:text-3xl font-semibold">Des causes qui nous interpellent tous!</span>
                        <img src="EazyPostCart/images/wavy cirle 2.svg" alt="wavy cirle" className="w-14 md:w-[101px] h-auto" />
                    </div>
                    <p className="text-[14px] md:text-[16px]">
                        Des cartes postales engagées, envoyées collectivement, pour sensibiliser et mobiliser autour de causes universelles, transformant chaque message en un acte concret et impactant.
                    </p>
                    <div className="flex mt-6">
                        <span className="pr-9">
                            <b className="text-[20px] md:text-[30px] font-bold">300+</b>
                            <p className="text-[14px] md:text-[16px]">causes</p>
                        </span>
                        <span className="border-l border-white px-6 md:px-9">
                            <b className="text-[20px] md:text-[30px] font-bold">2000+</b>
                            <p className="text-[14px] md:text-[16px]">participants</p>
                        </span>
                        <span className="border-l border-white px-6 md:px-9">
                            <b className="text-[20px] md:text-[30px] font-bold">10+</b>
                            <p className="text-[14px] md:text-[16px]">pays</p>
                        </span>
                    </div>
                    <a href="" className="flex items-center justify-center mt-8 bg-white hover:bg-[#02304C] text-[#02304C] hover:text-white duration-300 rounded-[8px] w-full h-[46px]">Parcourir plus de 1000 causes</a>
                </div>
                <div className="text-white flex-1 h-[460px] flex flex-col rounded-[10px]">
                    <ExempleCauses />
                </div>
            </div>
            {/*Part 2 InstaWall*/}
            <div className="flex flex-col md:flex-row w-full h:auto mt-16 md:gap-x-14 gap-y-10">
                <div className="flex flex-col ju gap-y-7 md:w-[454px] md:h-[374px]">
                    <div className="text-[20px] md:text-3xl font-semibold capitalize text-[#292723]">Bien plus qu’une carte postale: <br /> un réseau social <span className="text-[#0A7CCE]">unique</span>!</div>
                    <img src="EazyPostCart/images/art 1.png" alt="wavy cirle" className="w-[90%] md:w-full h-auto" />
                </div>
                <div className="flex flex-col justify-between flex-1 h-full rounded-[10px] border-1 border-[#97CBF0] bg-[#EBF6FF] p-7 md:p-10">
                    <span className="font-semibold text-[16px] md:text-[24px]">Découvrez InstaWall, l’espace où vos souvenirs prennent une nouvelle dimension.</span>
                    <div className="flex flex-row flex-wrap gap-y-4 justify-between">
                        <div>
                            <span className="flex gap-2 items-center md:w-[30%] w-full">
                                <img src="EazyPostCart/images/app-icon.png" alt="" />
                                <p className="capitalize text-[12px] md:text-[14px] font-semibold">Partagez Vos <br /> Moments</p>
                            </span>
                            <p className="text-[#3F5D70] text-[12px] md:text-[14px] mt-4"><b className="font-semibold">Partagez</b> vos photos de <br /> voyage et inspirez la <br /><b className="font-semibold"> communauté</b>.</p>
                        </div>
                        <div className="border-t-1 md:border-t-0 md:border-l-1 border-[#97CBF0] py-3 md:pl-8 md:w-[250px] w-full">
                            <span className="flex gap-2 items-center">
                                <img src="EazyPostCart/images/app-icon2.png" alt="" />
                                <p className="capitalize text-[12px] md:text-[14px] font-semibold">Connectez Par le <br /> Contenu</p>
                            </span>
                            <p className="text-[#3F5D70] text-[12px] md:text-[14px] mt-4"><b className="font-semibold">Likez, commentez et <br /> échangez</b> avec d’autres <br /> passionnés.</p>
                        </div>
                        <div className="border-t-1 md:border-t-0 md:border-l-1 border-[#97CBF0] py-3 md:pl-8 md:w-[250px] w-full">
                            <span className="flex gap-2 items-center">
                                <img src="EazyPostCart/images/app-icon3.png" alt="" />
                                <p className="capitalize text-[12px] md:text-[14px] font-semibold">Vendez Votre Art</p>
                            </span>
                            <p className="text-[#3F5D70] text-[12px] md:text-[14px] mt-4"><b className="font-semibold">Achetez ou vendez</b> des <br /> images pour les <br /> transformer en cartes ou <br /> tirages d’art.</p>
                        </div>
                    </div>
                    <a href="" className="flex items-center font-semibold justify-center rounded-[6px] h-9 md:h-[46px] md:mt-6 px-4 py-[12.5px] bg-white hover:bg-[#97CBF0] text-[#02304C] border-1 border-[#97CBF0] duration-300">
                        Explorez EazyWall
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="ml-3">
                            <path d="M21.0303 6.59283C21.3232 6.29994 21.3232 5.82506 21.0303 5.53217L16.2574 0.759199C15.9645 0.466306 15.4896 0.466306 15.1967 0.759199C14.9038 1.05209 14.9038 1.52697 15.1967 1.81986L19.4393 6.0625L15.1967 10.3051C14.9038 10.598 14.9038 11.0729 15.1967 11.3658C15.4896 11.6587 15.9645 11.6587 16.2574 11.3658L21.0303 6.59283ZM0.5 6.0625V6.8125H20.5V6.0625V5.3125H0.5V6.0625Z" fill="#02304C" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
export default P4_CauseInstaWall;