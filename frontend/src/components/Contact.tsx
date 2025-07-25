import React, { useState } from 'react';
import { contactCards, socialLinks } from '../../constants/index';

const Contact: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleResumeClick = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % contactCards.length);
            setIsAnimating(false);
        }, 300);
    };

    // Generate repeated contact patterns based on screen height
    const generateContactLines = (isLeft: boolean) => {
        const patterns = [
            { text: 'EMAIL (OFFICIAL)', highlighted: true, link: null },
            { text: '|', highlighted: false, link: null },
            { text: 'GMAIL', highlighted: true, link: socialLinks.email },
            { text: '|', highlighted: false, link: null },
            { text: 'DISCORD', highlighted: Math.random() > 0.5, link: socialLinks.discord },
            { text: '|', highlighted: false, link: null },
            { text: 'GITHUB', highlighted: Math.random() > 0.5, link: socialLinks.github },
            { text: '|', highlighted: false, link: null },
            { text: 'LINKEDIN', highlighted: true, link: socialLinks.linkedin },
            { text: '|', highlighted: false, link: null }
        ];

        // Calculate how many repetitions we need to fill the circle height (600px)
        const repetitions = Math.ceil(600 / 30); // ~30px per line
        const lines = [];

        for (let i = 0; i < repetitions; i++) {
            const patternIndex = i % patterns.length;
            const item = patterns[patternIndex];

            lines.push(
                <div key={i} className={`text-lg leading-7 ${isLeft ? 'text-left' : 'text-right'}`}>
                    {item.link ? (
                        <a
                            href={item.link}
                            className={`${item.highlighted ? 'bg-yellow-300 hover:bg-yellow-400' : 'hover:text-blue-600'} 
                         ${item.highlighted ? 'px-2 py-1 font-semibold' : ''} transition-colors`}
                        >
                            {item.text}
                        </a>
                    ) : (
                        <span className={`${item.highlighted ? 'bg-yellow-300 px-2 py-1 font-semibold' :
                            item.text === '|' ? '' : 'bg-gray-200 px-2 py-1'}`}>
                            {item.text}
                        </span>
                    )}
                </div>
            );
        }

        return lines;
    };

    return (
        <div className="min-h-screen flex items-center justify-center font-serif overflow-hidden">
            <div className="relative w-full h-screen flex items-center justify-center">

                {/* Left Side Content - Behind cards */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-left">CONTACT ME TODAY</h2>
                        <div className="space-y-1">
                            {generateContactLines(true)}
                        </div>
                    </div>
                </div>

                {/* Center Card Circle - Above text */}
                <div className="relative z-20">
                    {/* Rotating Cards */}
                    <div className="w-[600px] h-[600px] relative">
                        {contactCards.map((card, index) => {
                            const angle = (index * 360) / contactCards.length - (currentIndex * 360) / contactCards.length;
                            const radius = 220;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;

                            return (
                                <div
                                    key={`${card.id}-${index}`}
                                    className={`absolute w-24 h-32 transition-all duration-1000 ease-in-out ${isAnimating ? 'opacity-60' : 'opacity-100'
                                        }`}
                                    style={{
                                        transform: `translate(${x + 288}px, ${y + 284}px) rotate(${angle + 90}deg)`,
                                        transformOrigin: 'center'
                                    }}
                                >
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                        className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                        onError={(e) => {
                                            e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="96" height="128" xmlns="http://www.w3.org/2000/svg">
                          <rect width="96" height="128" fill="#f3f4f6" stroke="#d1d5db" stroke-width="2" rx="8"/>
                          <text x="48" y="70" text-anchor="middle" fill="#6b7280" font-size="10">${card.alt}</text>
                        </svg>
                      `)}`;
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Center Resume Button */}
                    <button
                        onClick={handleResumeClick}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-40 h-40 bg-white rounded-full shadow-2xl border-4 border-gray-200
                       flex flex-col items-center justify-center text-center
                       hover:bg-gray-50 transition-all duration-300 hover:scale-105
                       ${isAnimating ? 'animate-pulse' : ''}`}
                        disabled={isAnimating}
                    >
                        <span className="text-lg font-semibold text-gray-700">click</span>
                        <span className="text-lg font-semibold text-gray-700">for</span>
                        <span className="text-lg font-semibold text-gray-700">resume</span>
                    </button>
                </div>

                {/* Right Side Content - Behind cards */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-right">OR TOMORROW.</h2>
                        <div className="space-y-1">
                            {generateContactLines(false)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;