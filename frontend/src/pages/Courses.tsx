import { useState } from 'react';
import Navbar from '../components/NavBar';

const courses = [
    {
        id: '1',
        name: 'Course 1',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        reflection: 'This course taught me the fundamentals of web development and how to think about user experience from a technical perspective. The hands-on projects really helped solidify the concepts.'
    },
    {
        id: '2',
        name: 'Course 2',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        reflection: 'An incredible deep dive into algorithms and data structures. The problem-solving approach they taught here has changed how I approach complex coding challenges in my daily work.'
    },
    {
        id: '3',
        name: 'Course 3',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
        reflection: 'Machine learning concepts became much clearer through this course. The practical applications and real-world examples made abstract concepts tangible and applicable.'
    },
    {
        id: '4',
        name: 'Course 4',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
        reflection: 'This design course opened my eyes to the importance of user-centered design. Every project now starts with understanding the user journey and pain points.'
    },
    {
        id: '5',
        name: 'Course 5',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
        reflection: 'Database design and optimization techniques that I learned here have been invaluable in my professional projects. The performance improvements speak for themselves.'
    },
    {
        id: '6',
        name: 'Course 6',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
        reflection: 'Mobile development principles and responsive design patterns. This course taught me to think mobile-first and consider all device types from the beginning.'
    }
];

const Courses = () => {
    const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

    return (
        <main>
            <Navbar />
            <section id="courses" className="flex flex-col items-center min-h-screen">
                {/* Pinned Header */}
                <div className="flex flex-col items-center sticky top-0 z-10 mt-34 md:mt-27 px-8 w-full">
                    <div className="w-full max-w-4xl mx-auto">
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
                                        <img
                                            src={course.image}
                                            alt={course.name}
                                            className="w-full h-full object-cover"
                                        />
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