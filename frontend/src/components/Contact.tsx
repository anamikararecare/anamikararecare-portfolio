import React, { useState, useRef, useEffect } from 'react';
import { contactCards, socialLinks } from '../../constants/index';


const TEXT_PATTERN = 'EMAIL (OFFICIAL) | GMAIL | DISCORD | GITHUB | LINKEDIN | EMAIL (OFFICIAL) | GMAIL | DISCORD';


const PatternPanel: React.FC<{ side: 'left' | 'right'; }> = ({ side }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [reps, setReps] = useState(0);


    useEffect(() => {
        const updateReps = () => {
            if (!ref.current) return;
            const height = 128;
            // approx line-height for text-2xl in tailwind is arnd 32px:
            const lineHeight = 32;
            setReps(Math.ceil(height / lineHeight) + 2);
        };


        updateReps();
        window.addEventListener('resize', updateReps);
        return () => window.removeEventListener('resize', updateReps);
    }, []);


    return (
        <div
            ref={ref}
            className={`absolute ${side}-0 w-130 h-96 overflow-hidden z-0 py-14`}
        >
            {Array.from({ length: reps }).map((_, i) => (
                <div
                    key={i}
                    className="text-2xl italic whitespace-wrap mb-2 text-gray-500 hover:text-gray-800 hover:bg-amber-300"
                >
                    {TEXT_PATTERN}
                </div>
            ))}
        </div>
    );
};


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
        <div id="contact" className="min-h-screen flex items-center justify-center p-8 font-serif">
            <div className="relative w-full max-w-7xl">
                {/* repeating text panels */}
                <PatternPanel side="left" />
                <PatternPanel side="right" />


                {/* Left-side static header & links */}
                <div className="absolute left-0 z-10 space-y-8 text-right">
                    <img src='/text/CONTACTMETODAY.png' />
                    {/* links incoming */}
                </div>


                {/* rotating ring of cards + resume button */}
                <div className="pointer-events-none relative z-20 flex items-center justify-center">
                    {/* ring of cards */}
                    <div className="w-96 h-96 relative">
                        {contactCards.map((card, index) => {
                            const angle =
                                (index * 360) / contactCards.length -
                                (currentIndex * 360) / contactCards.length;
                            const radius = 140;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;
                            return (
                                <div
                                    key={`${card.id}-${index}`}
                                    className={`absolute w-20 h-28 transition-all duration-1000 ease-in-out ${isAnimating ? 'opacity-60' : 'opacity-100'
                                        }`}
                                    style={{
                                        transform: `translate(${x + 140}px, ${y + 140}px) rotate(${angle + 90
                                            }deg)`,
                                        transformOrigin: 'center',
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
                    {/* centre resume button */}
                    <button
                        onClick={handleResumeClick}
                        disabled={isAnimating}
                        className={`pointer-events-auto
                            absolute top-1/2 left-49/100
                            -translate-x-1/2 -translate-y-1/2
                            w-32 h-32 bg-white rounded-full
                            flex flex-col items-center justify-center text-center
                            hover:shadow-xl transition-all duration-300
                            hover:scale-105
                            ${isAnimating ? 'animate-pulse' : ''}
                            `}
                    >
                        <span className="text-sm font-mono text-gray-700">click</span>
                        <span className="text-sm font-mono text-gray-700">for</span>
                        <span className="text-sm font-mono text-gray-700">resume</span>
                    </button>
                </div>


                {/* right-side static header & links */}
                <div className="absolute right-0 top-1 z-10 space-y-8">
                    <img src='/text/ORTOMORROW.png' />
                    {/* links incoming */}
                </div>

                <ul className="flex flex-row items-center justify-center px-6 mt-12 border-t-2">
                    {socialLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.link} target="_blank" rel="noopener noreferrer">
                                <img src={link.image} alt={link.id} className="w-25 p-5 hover:scale-110 opacity-80 hover:opacity-100" />
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};


export default Contact;




