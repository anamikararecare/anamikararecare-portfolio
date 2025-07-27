import { useState } from 'react';
import { contactCards, socialLinks } from '../../constants/index';


const Contact = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);


    /** Rotate the ring one card over */
    const handleResumeClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % contactCards.length);
            setIsAnimating(false);
        }, 300);
    };


    /**
     * Build exactly one line per card,
     * so we can space 15 lines evenly inside our 600px height.
     */
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
            { text: '|', highlighted: false, link: null },
        ];


        return contactCards.map((_, idx) => {
            const { text, highlighted, link } = patterns[idx % patterns.length];
            const classes = highlighted
                ? 'px-2 py-1 font-semibold bg-yellow-300 hover:bg-yellow-400 transition-colors'
                : text === '|'
                    ? ''
                    : 'hover:text-blue-600 transition-colors';


            return (
                <div key={idx} className={`text-lg leading-7 ${isLeft ? 'text-left' : 'text-right'}`}>
                    {link ? (
                        <a href={link} className={classes}>
                            {text}
                        </a>
                    ) : (
                        <span className={classes}>{text}</span>
                    )}
                </div>
            );
        });
    };


    return (
        <div className="min-h-screen flex items-center justify-center font-serif overflow-hidden">
            <div className="relative w-full h-screen flex items-center justify-center">


                {/* LEFT: “CONTACT ME TODAY” */}
                <div
                    className="
            absolute left-8 top-1/2 -translate-y-1/2 z-10
            h-[600px] flex flex-col items-start
          "
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        CONTACT ME TODAY
                    </h2>
                    <div className="flex-1 flex flex-col justify-between">
                        {generateContactLines(true)}
                    </div>
                </div>


                {/* CENTER: rotating cards + “click for resume” */}
                <div className="relative z-20">
                    <div className="w-[600px] h-[600px] relative">
                        {contactCards.map((card, index) => {
                            const angle =
                                (index * 360) / contactCards.length -
                                (currentIndex * 360) / contactCards.length;
                            const radius = 220;
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;


                            return (
                                <div
                                    key={`${card.id}-${index}`}
                                    className={`
                    absolute w-24 h-32 transition-all duration-1000 ease-in-out
                    ${isAnimating ? 'opacity-60' : 'opacity-100'}
                  `}
                                    style={{
                                        transform: `translate(${x + 288}px, ${y + 284}px) rotate(${angle +
                                            90}deg)`,
                                        transformOrigin: 'center',
                                    }}
                                >
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                        className="
                      w-full h-full object-cover rounded-lg shadow-lg
                      hover:shadow-xl transition-shadow
                    "
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


                    <button
                        onClick={handleResumeClick}
                        disabled={isAnimating}
                        className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-40 h-40 bg-white rounded-full shadow-2xl border-4 border-gray-200
              flex flex-col items-center justify-center text-center
              hover:bg-gray-50 transition-all duration-300 hover:scale-105
              ${isAnimating ? 'animate-pulse' : ''}
            `}
                    >
                        <span className="text-lg font-semibold text-gray-700">click</span>
                        <span className="text-lg font-semibold text-gray-700">for</span>
                        <span className="text-lg font-semibold text-gray-700">resume</span>
                    </button>
                </div>


                {/* RIGHT: “OR TOMORROW.” */}
                <div
                    className="
            absolute right-8 top-1/2 -translate-y-1/2 z-10
            h-[600px] flex flex-col items-end
          "
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-right">
                        OR TOMORROW.
                    </h2>
                    <div className="flex-1 flex flex-col justify-between">
                        {generateContactLines(false)}
                    </div>
                </div>


            </div>
        </div>
    );
};


export default Contact;
