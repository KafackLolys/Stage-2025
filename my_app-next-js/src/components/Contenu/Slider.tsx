"use client";
import { useEffect, useState } from 'react';

const Slider = () => {
    const slides = [
        { id: 1, content: '🖼️ Slide 1' },
        { id: 2, content: '📸 Slide 2' },
        { id: 3, content: '🎬 Slide 3' },
        { id: 4, content: '🖼️ Slide 4' },
        { id: 5, content: '📸 Slide 5' },
        { id: 6, content: '🎬 Slide 6' },
        { id: 7, content: '🖼️ Slide 7' },
        { id: 8, content: '📸 Slide 8' },
        { id: 9, content: '🎬 Slide 9' },
        { id: 10, content: '🖼️ Slide 10' },
        { id: 11, content: '📸 Slide 11' },
        { id: 12, content: '🎬 Slide 12' }
    ];

    const [current, setCurrent] = useState(0);

    const visibleCount = 4; // 👉 nombre d'éléments visibles à la fois

    // ⏱️ Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % (slides.length - visibleCount + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // 🔘 Navigation manuelle
    const goNext = () => {
        setCurrent(prev => Math.min(prev + 1, slides.length - visibleCount));
    };

    const goPrev = () => {
        setCurrent(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            {/* overflow-hidden cache tout contenu ou élément enfant qui dépasse les limites (width/height) du conteneur. */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
                {slides.map(slide => (
                    <div key={slide.id} className="min-w-[25%] flex items-center justify-center h-64 bg-gray-200 text-3xl font-bold border-r">
                        {slide.content}
                    </div>
                ))}
            </div>

            {/* ⬅️ ⮕ Boutons */}
            <button
                onClick={goPrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full z-10"
            >‹</button>
            <button
                onClick={goNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full z-10"
            >›</button>
        </div>
    );
};

export default Slider;
