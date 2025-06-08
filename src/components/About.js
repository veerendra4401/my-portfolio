// About.js
export default function About() {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "SpringBoot"] },
        { category: "Tools", items: ["Git", "VS Code", "Postman"] },
        { category: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"] }
    ];

    return (
        <section id="about" className="py-20 section-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-color/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-color/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-info/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-2xl mx-auto">
                            <img
                                src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                                alt="About me"
                                className="w-full h-full object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 icon-glow"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    About Me
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    I'm a passionate self-taught programmer with a love for creating innovative solutions. Through my journey of learning from amazing teachers on YouTube and Internshala Trainings, I've developed a strong foundation in web development and a keen eye for detail.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    I enjoy experimenting with new technologies, building projects that solve real-world problems, and continuously expanding my knowledge in the ever-evolving world of web development.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Skills & Expertise
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {skills.map((skillGroup, index) => (
                                        <div
                                            key={index}
                                            className="skill-card"
                                        >
                                            <h4 className="text-lg font-semibold text-gray-700 mb-4">
                                                {skillGroup.category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skillGroup.items.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-sm rounded-full text-gray-700 hover:bg-primary-color/10 transition-all duration-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="flex flex-wrap gap-4 mt-8">
                                <a
                                    href="#contact"
                                    className="btn-primary inline-flex items-center px-6 py-3 rounded-full text-black font-semibold btn-hover"
                                >
                                    Get in Touch
                                    <svg
                                        className="w-5 h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#projects"
                                    className="glass-effect inline-flex items-center px-6 py-3 rounded-full text-black font-semibold hover:bg-primary-color/5 transition-all duration-300"
                                >
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}