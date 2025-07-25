import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('h1', { type: 'chars, words' });

        gsap.from(heroSplit.chars, {
            yPercent: 150,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        // Animate the info card
        gsap.from('.info-card', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            delay: 1.5
        })

        // Animate the scroll indicator
        gsap.from('.scroll-indicator', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            delay: 2
        })

        // Add floating animation to scroll indicator
        gsap.to('.scroll-indicator', {
            y: -10,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: 3
        })
    }, [])

    return (
        <>
            {/* Original Hero Section */}
            <section id="hero" className="flex relative z-10 min-h-dvh w-full">
                {/* Text Container */}
                <div className="w-full flex items-center justify-between px-5">
                    <h1 className="leading-none md:text-[1.5vw] mt-1 md:mt-14">hey there!</h1>
                    <div className="absolute left-3/7 my--50">
                        <img src="/cards/hero_card.png" alt="hero-card" className="w-full max-w-md" />
                    </div>
                    <h2 className="leading-none md:text-[1.5vw] mt-1 md:mt-14">i'm anamika</h2>
                </div>
            </section>

            {/* New Section Below Hero */}
            <section className="w-full px-5 py-16">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    {/* Information Card */}
                    <div className="info-card relative max-w-md w-full mb-16">
                        {/* PNG Background */}
                        <img
                            src="/cards/info_card_blank.png"
                            alt="info card background"
                            className="w-full h-auto"
                        />

                        {/* Text Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="space-y-1 font-mono text-2xl leading-relaxed text-gray-800">
                                <div>currently:</div>
                                <div>Y2</div>
                                <div>Industrial</div>
                                <div>& Systems</div>
                                <div>Engineering</div>
                                <div>and</div>
                                <div>Economics</div>
                                <div>student in</div>
                                <div>NUS</div>
                            </div>

                            <div className="text-right font-mono text-2xl leading-relaxed text-gray-800">
                                <div>curious</div>
                                <div>about:</div>
                                <div>everything</div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 13l3 3 7-7" />
                            <path d="M7 6l3 3 7-7" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero