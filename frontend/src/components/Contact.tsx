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

    return (
        <div className="min-h-screen flex items-center justify-center p-8 font-serif">
            <div className="relative w-full max-w-7xl">

                {/* Left Side Content */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-8 text-right">
                    <div className="space-y-4">
                        <h2 className="text-5xl text-gray-800 mb-6">CONTACT ME TODAY</h2>

                        <div className="space-y-2 text-2xl">
                            <div className="flex items-center space-x-3">
                                <span className="bg-yellow-400 px-2 py-1 italic">EMAIL (OFFICIAL)</span>
                                <span>|</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.email} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-500 transition-colors">GMAIL</a>
                                <span>|</span>
                                <a href={socialLinks.discord} className="hover:text-blue-600 transition-colors">DISCORD</a>
                                <span>|</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.github} className="hover:text-gray-600 transition-colors">GITHUB</a>
                                <span>|</span>
                                <a href={socialLinks.linkedin} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">LINKEDIN</a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <span className="bg-gray-200 px-2 py-1">EMAIL (OFFICIAL)</span>
                                <span>|</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.email} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">GMAIL</a>
                                <span>|</span>
                                <a href={socialLinks.discord} className="hover:text-blue-600 transition-colors">DISCORD</a>
                                <span>|</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.github} className="hover:text-gray-600 transition-colors">GITHUB</a>
                                <span>|</span>
                                <a href={socialLinks.linkedin} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">LINKEDIN</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Card Circle */}
                <div className="flex items-center justify-center">
                    <div className="relative">
                        {/* Rotating Cards Background */}
                        <div className="w-96 h-96 relative">
                            {contactCards.map((card, index) => {
                                const angle = (index * 360) / contactCards.length - (currentIndex * 360) / contactCards.length;
                                const radius = 140;
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;

                                return (
                                    <div
                                        key={`${card.id}-${index}`}
                                        className={`absolute w-20 h-28 transition-all duration-1000 ease-in-out ${isAnimating ? 'opacity-60' : 'opacity-100'
                                            }`}
                                        style={{
                                            transform: `translate(${x + 140}px, ${y + 140}px) rotate(${angle + 90}deg)`,
                                            transformOrigin: 'center'
                                        }}
                                    >
                                        <img
                                            src={card.src}
                                            alt={card.alt}
                                            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Center Resume Button */}
                        <button
                            onClick={handleResumeClick}
                            className={`absolute top-1/2 left-16/34 -translate-x-1/2 -translate-y-1/2 
                         w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center text-center
                         hover:shadow-xl transition-all duration-300 hover:scale-105
                         ${isAnimating ? 'animate-pulse' : ''}`}
                            disabled={isAnimating}
                        >
                            <span className="text-sm font-mono text-gray-700">click</span>
                            <span className="text-sm font-mono text-gray-700">for</span>
                            <span className="text-sm font-mono text-gray-700">resume</span>
                        </button>
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-5xl text-gray-800 mb-6">OR TOMORROW.</h2>

                        <div className="space-y-2 text-2xl">
                            <div className="flex items-center space-x-3">
                                <span className="bg-yellow-400 px-2 py-1 italic">EMAIL (OFFICIAL) | GMAIL | DISCORD </span>
                                <span>|</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.github} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">GITHUB</a>
                                <span>|</span>
                                <a href={socialLinks.linkedin} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">LINKEDIN</a>
                                <span>| EMAIL (OFFICIAL) </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.github} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">GITHUB</a>
                                <span>|</span>
                                <a href={socialLinks.linkedin} className="hover:text-blue-600 transition-colors">LINKEDIN</a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <span className="bg-gray-200 px-2 py-1">EMAIL (OFFICIAL)</span>
                                <span>|</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.email} className="hover:text-gray-600 transition-colors">GMAIL</a>
                                <span>|</span>
                                <a href={socialLinks.discord} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">DISCORD</a>
                                <span>|</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <a href={socialLinks.github} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">GITHUB</a>
                                <span>|</span>
                                <a href={socialLinks.linkedin} className="bg-yellow-400 px-2 py-1 italic hover:bg-yellow-400 transition-colors">LINKEDIN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;