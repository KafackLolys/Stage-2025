'use client';

import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTranslation } from 'next-i18next';

export default function EazyPostCart() {
    const { t } = useTranslation('common');
    
    return (
        <div className="flex flex-col w-full">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}