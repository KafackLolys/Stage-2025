'use client';

import React, { useState } from 'react';

const Langue = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left group ">
            <div>
                <button
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="flex justify-between w-full rounded-md bg-white border-0 h-10 px-1"
                >
                    <div className='flex items-center hover:bg-gray-50 px-2 transition cursor-pointer'>
                        <span className='pr-1'>Français</span>
                        <img src="images/flag-france.svg" alt="Français" className="h-5 w-6 mr-1" />
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="transition-transform duration-300 group-hover:rotate-180" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                    </div>
                </button>
            </div>

            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute right-0 z-10 mt-1  w-52 rounded-md bg-white shadow-sm"
                >
                    <div className="py-1 px-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="rounded-b-md flex py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <div className='flex justify-between w-full items-center hover:bg-gray-50 px-2 transition cursor-pointer'>
                                <span className='pr-1'>Français</span>
                                <img src="images/flag-france.svg" alt="Français" className="h-5 w-6 mr-1" />
                            </div>
                        </a>
                        <a href="#" className="rounded-b-md flex py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <div className='flex justify-between w-full items-center hover:bg-gray-50 px-2 transition cursor-pointer'>
                                <span className='pr-1'>English</span>
                                <img src="images/flag-USA.svg" alt="English" className="h-5 w-6 mr-1" />
                            </div>
                        </a>
                        <a href="#" className="rounded-b-md flex py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <div className='flex justify-between w-full items-center hover:bg-gray-50 px-2 transition cursor-pointer'>
                                <span className='pr-1'>Español</span>
                                <img src="images/flag-spain.svg" alt="Español" className="h-5 w-6 mr-1" />
                            </div>
                        </a>
                        <a href="#" className="rounded-b-md flex py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                            <div className='flex justify-between w-full items-center hover:bg-gray-50 px-2 transition cursor-pointer'>
                                <span className='pr-1'>Italiano</span>
                                <img src="images/flag-italy.svg" alt="Italiano" className="h-5 w-6 mr-1" />
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Langue;