import { experiences, Tskills, Tsubskills } from "../../constants/index";
import Navbar from '.././components/NavBar';

const Advocacy = () => {

    return (
        <main>
            <Navbar />
            <section id="advocacy">
                <div className="flex flex-col md:flex-row min-h-dvh mt-22">
                    {/* Left Sidebar - Pinned */}
                    <div className="md:w-[40%] md:left-0 md:h-dvh md:overflow-y-auto p-8">
                        <div className="md:mb-26">
                            <img src='/text/ADVOCATE.png' className="w-64 pb-4" />
                            <p className="text-black mb-4 leading-relaxed text-sm font-mono">
                                Put simply and succinctly, I am someone who wants to create things that matter to people.
                            </p>
                            <p className="text-black mb-4 leading-relaxed text-sm font-mono">
                                Throughout my childhood, this manifested as an indelible curiosity around the world,
                                and a fascination with the systems that govern us.
                                I've always been drawn to the humanities and the law for this reason.
                            </p>
                            <p className="text-black mb-4 leading-relaxed text-sm font-mono">
                                The question then is: Does this make me unfocused in my ambitions in tech?
                            </p>
                            <p className="text-black mb-4 leading-relaxed text-sm font-mono">
                                No -- I say it makes me a better engineer.
                            </p>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2">
                                {Tskills.map((skill, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className={`px-2 py-1 rounded text-sm font-mono ${Tsubskills.includes(skill)
                                                ? 'bg-amber-50 text-amber-950 border border-amber-950'
                                                : 'bg-amber-950 text-amber-50'
                                                }`}
                                        >
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Scrollable */}
                    <div className="md:w-[60%] md:overflow-y-auto md:h-dvh p-8 md:pl-8">
                        <div className="md:mt-12">
                            <div className="space-y-12">
                                {experiences.map((experience) => (
                                    <article key={experience.id} className="space-y-4">
                                        <header>
                                            <h2 className="text-2xl font-bold text-black">
                                                {experience.title} <span className="text-gray-500 text-sm font-mono">{experience.date}</span>
                                            </h2>
                                            <p className="text-gray-600 italic">{experience.subtitle}</p>
                                        </header>
                                        <ul className="space-y-2 text-sm leading-relaxed">
                                            {experience.content.map((item, index) => (
                                                <li key={index}>• {item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Advocacy;