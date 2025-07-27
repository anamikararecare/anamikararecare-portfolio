import { useState } from 'react';
import Navbar from '.././components/NavBar';
import { socialLinks, dreams } from '../../constants/index';

const Future = () => {

    const [currentDream, setCurrentDream] = useState(dreams[0]);

    const spinDream = () => {
        const randomIndex = Math.floor(Math.random() * dreams.length);
        setCurrentDream(dreams[randomIndex]);
    };

    return (
        <main>
            <Navbar />
            <section id="future" className="flex flex-col items-center px-6 py-36 md:py-28">
                {/* Main Title */}
                <img src='/text/DREAMER.png' className="w-80 mb-6" />

                {/* Right now section */}
                <div className="w-full text-center md:max-w-none max-w-sm flex flex-col items-center mb-8">
                    <img src='/text/right_now.png' className="w-34 mb-6" />

                    <p className="text-md font-mono leading-relaxed mb-3 text-gray-800 break-words whitespace-normal">
                        I've spent the last year fascinated by some of the most exciting waves in
                        technology today -- machine learning, AI workflows, web development, and even
                        hardware electronic communications. I can't get enough of it, and want to see
                        how far we can take this tech to create beautiful and USEFUL products.
                    </p>

                    <p className="text-md font-mono leading-relaxed mb-8 text-gray-800">
                        Looking ahead, I'm eager to intern at companies building cutting-edge tools
                        and experiences in these spaces.
                    </p>

                    <a
                        href="/#contact"
                        className="inline-block rounded-xl bg-black text-amber-50 px-8 py-2 hover:bg-amber-50 hover:text-black border border-black transition-colors font-medium"
                    >
                        Specific Roles
                    </a>
                </div>

                {/* Maybe later section */}
                <div className="w-full max-w-sm md:max-w-none flex flex-col items-center text-wrap mb-8">
                    <img src='/text/maybe_later.png' className="w-43 mb-6" />

                    <p className="text-md font-mono leading-relaxed text-gray-800 text-center">
                        I'm flattered you scrolled this far.<br />
                        Click to see some of my longer-term aspirations.
                    </p>
                </div>

                {/* Dream generator section */}
                <div className="w-full max-w-sm md:max-w-none text-center">
                    <button
                        onClick={spinDream}
                        className="rounded-xl bg-black text-amber-50 px-8 py-2 hover:bg-amber-50 hover:text-black border border-black transition-colors font-medium"
                    >
                        Spin!
                    </button>

                    <div className="mt-5 mb-6 p-4">
                        <img
                            src={currentDream.image}
                            alt="Dream visualization"
                            className="w-120 h-auto object-cover mx-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <p className="text-md font-mono leading-relaxed mb-7 text-gray-800">
                        {currentDream.description}
                    </p>
                    <p className="text-md font-mono leading-relaxed mb-7 text-gray-800">
                        {currentDream.subtitle}
                    </p>

                    {/* Social media icons section */}
                    <div className="p-3 rounded-lg border-t-1">
                        <p className="text-sm mb-4 text-gray-700">
                            Did something resonate?<br />
                            Let's connect!
                        </p>

                        <ul className="flex flex-row items-center justify-center px-6 py-4 mb-2">
                            {socialLinks.map((link) => (
                                <li key={link.id} className="w-15 pl-4">
                                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                                        <img src={link.image} alt={link.id} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Future;