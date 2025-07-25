import { useState } from 'react';
import Navbar from '../components/NavBar';

const Courses = () => {
    const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

    const courses = [
        {
            id: 'git',
            name: 'git teach',
            image: 'git_course.png',
            reflection: `Learning Git has been transformative for my development workflow. Understanding version control not only improved my code management but also taught me the importance of clear commit messages and collaborative development practices.`
        },
        {
            id: 'design',
            name: 'Design Systems',
            image: 'design_course.png',
            reflection: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla elementum semper. Aenean vel odio mollis, dapibus nisl sed, euismod nulla. Vivamus et feugiat lacus. Duis pulvinar velit nec lorem finibus cursus. Sed at orci vel neque semper lacinia. Aenean aliquam magna ex, eget vehicula libero tincidunt mollis. Mauris non dolor vitae justo pharetra semper sit amet sed libero.`
        },
        {
            id: 'analysis',
            name: 'Data Analysis',
            image: 'analysis_course.png',
            reflection: `Diving deep into statistical analysis and machine learning opened up new perspectives on problem-solving. The course challenged me to think critically about data interpretation and model validation, skills that extend far beyond technical applications.`
        }
    ];

    return (
        <main>
            <Navbar />
            <section id="courses" className="">
                {/* Pinned Header */}
                <div className="flex flexcol items-center sticky top-0 z-10 py-22 px-8">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-6xl font-serif italic text-center mb-6 tracking-wide">
                            LEARNER
                        </h1>
                        <p className="text-center font-mono text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            They say that engineers have two states: god complex or impostor
                            syndrome. I'm always trying to learn new things to justify the former.
                            Here are my favourite resources and reflections on them thus far.
                        </p>
                    </div>
                </div>

                {/* Scrollable Courses Grid */}
                <div className="px-8 pb-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
                                    onMouseEnter={() => setHoveredCourse(course.id)}
                                    onMouseLeave={() => setHoveredCourse(null)}
                                >
                                    {/* Course Image Container */}
                                    <div className="p-6 pb-0">
                                        <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                                            {/* Replace this div with actual image when ready */}
                                            <img
                                                src={course.image}
                                                alt={course.name}
                                                className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    {/* Hover Bar / Reflection */}
                                    <div className="relative">
                                        <div
                                            className={`bg-black text-white transition-all duration-500 ease-in-out overflow-hidden rounded-b-3xl ${hoveredCourse === course.id
                                                ? 'max-h-96 p-6'
                                                : 'max-h-14'
                                                }`}
                                        >
                                            {hoveredCourse === course.id ? (
                                                <div className="space-y-3">
                                                    <div className="flex items-center text-sm font-medium">
                                                        Hover for reflection →
                                                    </div>
                                                    <p className="text-sm leading-relaxed text-gray-200">
                                                        {course.reflection}
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center h-14 text-sm font-medium">
                                                    Hover for reflection →
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Courses;