import { useState } from 'react';
import Navbar from '../components/NavBar';
import { courses } from "../../constants/index";

const Courses = () => {
    const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

    return (
        <main>
            <Navbar />
            <section id="courses" className="flex flex-col items-center min-h-screen">
                {/* Pinned Header */}
                <div className="flex flex-col items-center sticky top-0 z-10 mt-34 md:mt-27 px-8 w-full">
                    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                        <img src='/text/LEARNER.png' className="w-54 mb-6" />
                        <p className="text-center font-mono text-gray-800 max-w-3xl mx-auto leading-relaxed">
                            They say that engineers have two states: god complex or impostor
                            syndrome. I'm always trying to learn new things to justify the former.
                            Here are my favourite resources and reflections on them thus far.
                        </p>
                        <p className="text-center font-mono text-gray-800 mt-4 max-w-3xl mx-auto leading-relaxed">
                            Why am I showing you this? For one, so you know how I know what I know (kinda. A lot of it is also
                            staring at official documentation for hours and learning from my very talented peers & profs).
                            For two, so I can document how I learn what I learn.
                        </p>
                    </div>
                </div>

                {/* Scrollable Courses Grid */}
                <div className="w-full px-8 py-8">
                    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-amber-950 w-80 h-80 relative"
                                onMouseEnter={() => setHoveredCourse(course.id)}
                                onMouseLeave={() => setHoveredCourse(null)}
                            >
                                <div className="p-6 h-full flex flex-col">
                                    {/* Course Image Container - Fixed rectangular frame */}
                                    <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center mb-4">
                                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={course.image}
                                                alt={course.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </a>
                                    </div>

                                    {/* Hover Bar / Reflection - Separate thick bar */}
                                    <div className="flex-1 relative">
                                        <div className="absolute bottom-0 left-0 right-0">
                                            <div className="bg-amber-50 text-black rounded-4xl overflow-hidden border border-amber-950">
                                                {hoveredCourse === course.id ? (
                                                    <div className="p-4 space-y-3">
                                                        <div className="flex items-center text-sm font-medium">
                                                            read more →
                                                        </div>
                                                        <p className="text-sm leading-relaxed text-black">
                                                            {course.reflection}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center h-12 text-sm font-medium">
                                                        read more →
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Courses;