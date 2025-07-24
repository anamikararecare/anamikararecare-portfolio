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
    }, [])

    return (
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
    )
}

export default Hero