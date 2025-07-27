import { identityCards } from "../../constants/index";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="flex flex-col items-center min-h-screen py-20">
            <div className="relative">
                {/* Text above cards */}
                <div className="text-center mb-0 md:mb-8">
                    <p className="font-mono text-lg text-gray-600 mb-2">jack of all trades,</p>
                    <p className="font-mono text-lg text-gray-600">master of none.</p>
                </div>

                <div>
                    <p className="font-mono pb-15 text-sm text-right text-gray-500 mb-1">(maybe some)</p>
                </div>

                {/* Fanned cards container */}
                <div className="relative w-80 h-100 mx-auto">
                    {identityCards.map((card, index) => {
                        // Calculate rotation and position for each card
                        const totalCards = identityCards.length;
                        //const angleStepMobile = 60 / (totalCards - 1); // 80 degrees total spread
                        const angleStep = 80 / (totalCards - 1); // 80 degrees total spread
                        //const rotationMobile = -15 + (index * angleStep); // Start at -35 degrees
                        const rotation = -35 + (index * angleStep); // Start at -35 degrees
                        //const translateXmobile = index * 5; // Slight horizontal offset for overlap
                        const translateX = index * 40; // Slight horizontal offset for overlap
                        const translateY = Math.abs(rotation); // Slight vertical adjustment

                        return (
                            <div
                                key={card.id}
                                className="absolute top-1/2 left-1/3 w-40 h-70 md:w-72 md:h-108 transition-transform duration-300 hover:scale-110 hover:z-10"
                                style={{
                                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
                                    transformOrigin: 'center bottom',
                                    zIndex: index
                                }}
                            >
                                < Link to={card.route} >
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Text below cards */}
                <div className="font-mono text-center mt-0 md:mt-8">
                    <p className="text-lg text-gray-600">but</p>
                    <p className="text-lg text-gray-600">better than</p>
                    <p className="text-lg text-gray-600">a master</p>
                    <p className="text-lg text-gray-600">of one.</p>
                </div>
            </div>
        </section>

    )
}

export default About