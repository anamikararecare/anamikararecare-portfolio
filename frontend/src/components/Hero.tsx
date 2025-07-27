import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('h1', { type: 'chars, words' });

        // Hero intro animation
        gsap.from(heroSplit.chars, {
            yPercent: 150,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        // Animate info card on scroll
        gsap.from('.info-card', {
            scrollTrigger: {
                trigger: '.info-card',
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            },
            y: 100,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out'
        });

        // Scroll indicator entrance
        gsap.from('.scroll-indicator', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            delay: 2
        });

        // Scroll indicator floating effect
        gsap.to('.scroll-indicator', {
            y: -10,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: 3
        });
    }, []);

    return (
        <>
            <section id="hero" className="flex relative py-20 md:py-10 w-screen">
                {/* Text Container */}
                <div className="flex flex-col md:flex-row items-center justify-between px-5 w-screen m-12">
                    <h1 className="text-2xl md:text-[1.5vw] mt-1 mb-4 md:mb-0">hey there!</h1>
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="/cards/hero_card.png" alt="hero-card" className="w-full max-w-xs md:max-w-none" />
                    </div>
                    <h2 className="text-2xl md:text-[1.5vw] mt-1">i'm anamika</h2>
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
                            <div className="space-y-1 p-6 font-mono text-2xl text-gray-800">
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

                            <div className="text-right font-mono text-2xl text-gray-800 pr-6 pb-6">
                                <div>curious</div>
                                <div>about:</div>
                                <div>everything</div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <a href="/#about">
                        <div className="scroll-indicator w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                            < img src="/icons/scroll_arrow_icon.png" />
                        </div>
                    </a>

                </div>
            </section>
        </>
    )
}

export default Hero