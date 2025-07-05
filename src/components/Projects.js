import { useState } from 'react';
import DashboardImg from './assets/Dashboard.png';
import uniChatImg from './assets/uni-chat.png';
import KBImg from './assets/KB.PNG';
import ATSImg from './assets/ATS.png';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Customer Satisfaction Survey Dashboard',
            description: 'The Customer Satisfaction Survey Dashboard is a powerful and intuitive web-based platform designed to collect, visualize, and analyze customer feedback with ease. Gain real-time insights through dynamic dashboards and enhance your decision-making process.',
            image: DashboardImg,
            link: 'https://github.com/veerendra4401/customer-Satisfation-Survey-Dashboard-.git',
            tech: ['React', 'Node.js', 'Springboot', 'MySQL', 'Axios', 'HTML/CSS	'],
        },
        {
            id: 2,
            title: 'Uni-Chat',
            description: 'This project is a full-stack chat application designed for seamless real-time communication. The frontend is built with React.js, while the backend uses Node.js, Express.js, and Socket.IO for real-time messaging.',
            image: uniChatImg,
            link: 'https://github.com/veerendra4401/Uni-chat.git',
            tech: ['React', 'Socket.IO', 'Node.js', 'Express', 'MongoDB'],
        },
        {
            id: 3,
            title: 'Knowledge Base Platform',
            description: 'A modern, Confluence-like knowledge base platform built with React, Express.js, and MySQL. This platform enables teams to create, collaborate, and organize their knowledge with powerful features like real-time editing, version control, and advanced privacy controls.',
            image: KBImg,
            link: 'https://github.com/veerendra4401/Frigga-Cloud-Labs.git',
            tech: [
                'React 18',
                'TypeScript',
                'React Router',
                'React Quill',
                'Tailwind CSS',
                'Node.js',
                'Express.js',
                'MySQL',
                'JWT',
                'bcryptjs',
                'Express Validator',
                'CORS',
                'Database:',
                'MySQL 8.0+',

            ],
        },
        {
            id: 4,
            title: 'ATS Resume Parser',
            description: 'An intelligent resume parsing tool that uses Java and NLP techniques to extract structured candidate data from resumes. Features include skill and keyword extraction, JSON/XML export, and MySQL integration for storing parsed information.',
            image: ATSImg,
            link: 'https://github.com/veerendra4401/ATS-Resume-Parser.git',
            tech: ['React', 'Java', 'JavaScript', 'Stanford NLP / Regex', 'Spring Boot', 'REST APIs', 'MySQL', 'Natural Language Processing (NLP)'],
        },
        
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Featured Projects
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="relative h-48 sm:h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary-color dark:text-primary-light hover:text-secondary-color dark:hover:text-secondary-color transition-colors duration-300"
                                    >
                                        View Project
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
                </div>
                </div>
            </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
