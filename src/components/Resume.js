export default function Resume() {
    const experiences = [
        {
            title: "AI & Prompt Engineering Intern",
            company: "VaultofCodes",
            period: "2025",
            description: "Worked on cutting-edge applications of Artificial Intelligence with a focus on prompt engineering for generative AI models like GPT. Developed optimized prompts, tested model behavior across use cases, and contributed to enhancing prompt effectiveness for real-world tasks.",
            highlights: [
                "Natural Language Processing (NLP)",
                "Prompt Tuning & Optimization",
                "Prompt Engineering",
                "Generative AI (GPT, LLMs)"
            ]
        },
    ];

    const education = [
        {
            degree: "Bachelor of Technology in Electrical and Electronics Engineering",
            institution: "Jyothishmathi Institute of Technology and Science",
            period: "2021 - 2024",        
        },
        {
            degree: "Diploma in Electrical and Electronics Engineering",
            institution: "Jyothishmathi institute of Technological Sciences",
            period: "2018 - 2021",
        }
    ];

    return (
        <section id="resume" className="py-20 bg-bg-primary dark:bg-bg-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/5 to-secondary-color/10 dark:from-primary-color/10 dark:to-secondary-color/20" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-color/10 dark:bg-primary-color/20 rounded-full filter blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-color/10 dark:bg-secondary-color/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                        <span className="gradient-text">
                            Professional Journey
                        </span>
                    </h2>
                    <p className="text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
                        My professional experience and educational background in software development and web technologies.
                    </p>
                    <div className="mt-6">
                        <a
                            href="https://drive.google.com/file/d/1d32jRSNoR-k5LbV6a5Hm-Ap6gfHPPTVE/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center px-6 py-3 rounded-full text-black dark:text-white font-semibold transform hover:scale-105"
                        >
                            Download Resume
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
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="space-y-16">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                Work Experience
                            </h3>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="card bg-white dark:bg-gray-800 dark:bg-opacity-20 dark:backdrop-blur-sm rounded-xl p-6 shadow-lg group hover:shadow-xl dark:shadow-primary-color/10 transition-all duration-300"
                                >
                                    <div className="flex flex-wrap justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                                {exp.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {exp.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start text-text-secondary dark:text-text-dark-secondary group-hover:text-primary-color dark:group-hover:text-primary-light transition-colors duration-300"
                                            >
                                                <span className="mr-2 text-primary-color dark:text-primary-light">•</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                Education
                            </h3>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="card bg-white dark:bg-gray-800 dark:bg-opacity-20 dark:backdrop-blur-sm rounded-xl p-6 shadow-lg group hover:shadow-xl dark:shadow-primary-color/10 transition-all duration-300"
                                >
                                    <div className="flex flex-wrap justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {edu.institution}
                                            </p>
                                        </div>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">
                                            {edu.period}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}