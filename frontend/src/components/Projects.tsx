import { projects, skills, langs } from "../../constants/index";

const Projects = () => {

    return (
        <section id="projects" className="w-full">
            <div className="max-w-7xl mx-auto flex h-screen">
                {/* Left Sidebar - Pinned */}
                <div className="w-[30%] p-8 border-r border-gray-200 overflow-y-auto">
                    <div className="sticky top-0">
                        <h1 className="text-4xl font-serif mb-6 text-black italic">BUILDER</h1>
                        <p className="text-gray-700 mb-8 leading-relaxed text-md font-mono">
                            My favourite thing about engineering?
                            The insatiable drive to keep creating better systems everywhere.
                            Here are some things I've worked on.
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={`px-2 py-1 rounded text-xs font-medium ${langs.includes(skill)
                                            ? 'bg-amber-950 text-amber-50'
                                            : 'bg-amber-50 text-amber-950 stroke-amber-950'
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
                <div className="flex-1 overflow-y-auto p-8 bg-white">
                    <div className="space-y-12">
                        {projects.map((project) => (
                            <div key={project.id} className="space-y-6">
                                {/* Project Header */}
                                <div className="flex justify-between items-start ">
                                    <div className="flex items-baseline gap-4">
                                        <h2 className="text-5xl font-mono font-bold text-black">{project.title}</h2>
                                        <span className="text-gray-600 text-lg font-mono">{project.year}</span>
                                    </div>
                                    <a
                                        href={project.visitLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors"
                                    >
                                        Visit
                                    </a>
                                </div>

                                {/* Project Preview Image */}
                                <div className="w-full max-w-4xl">
                                    <img
                                        src={project.image}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-amber-950 text-amber-50 px-3 py-1 rounded text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 font-mono leading-relaxed max-w-4xl">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;