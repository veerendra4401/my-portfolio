import { 
    FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, 
    FaDatabase, FaGitAlt, FaNode, FaDocker, FaAws,
    FaFigma, FaTrello, FaJira, FaSlack
} from "react-icons/fa";
import { 
    SiTailwindcss, SiExpress, SiMongodb, SiPostgresql,
    SiSpring, SiRedux, SiTypescript, SiPostman
} from "react-icons/si";
import { useEffect, useState } from 'react';

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('skills');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const skillCategories = {
        "Programming Languages": [
            { name: "Python", icon: <FaPython className="text-primary-color icon-glow" />, level: 90 },
            { name: "Java", icon: <FaJava className="text-secondary-color icon-glow" />, level: 85 },
            { name: "JavaScript", icon: <FaJs className="text-accent-warning icon-glow" />, level: 95 },
            { name: "TypeScript", icon: <SiTypescript className="text-primary-color icon-glow" />, level: 85 }
        ],
        "Frontend Development": [
            { name: "React", icon: <FaReact className="text-accent-info icon-glow" />, level: 95 },
            { name: "Redux", icon: <SiRedux className="text-secondary-color icon-glow" />, level: 85 },
            { name: "HTML5", icon: <FaHtml5 className="text-accent-error icon-glow" />, level: 95 },
            { name: "CSS3", icon: <FaCss3Alt className="text-accent-info icon-glow" />, level: 90 },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-primary-color icon-glow" />, level: 90 }
        ],
        "Backend Development": [
            { name: "Node.js", icon: <FaNode className="text-accent-success icon-glow" />, level: 90 },
            { name: "Express", icon: <SiExpress className="text-text-primary icon-glow" />, level: 85 },
            { name: "MongoDB", icon: <SiMongodb className="text-accent-success icon-glow" />, level: 85 },
            { name: "Spring", icon: <SiSpring className="text-accent-success icon-glow" />, level: 75 }
        ],
        "DevOps & Tools": [
            { name: "Git", icon: <FaGitAlt className="text-accent-error icon-glow" />, level: 88 },
            { name: "Postman", icon: <SiPostman className="text-accent-warning icon-glow" />, level: 85 },
        ]
    };

    return (
        <section id="skills" className="py-20 bg-bg-primary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/5 to-secondary-color/10" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-color/10 rounded-full filter blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-color/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Technical Skills
                    </h2>
                    <p className="text-gray-600">
                        A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
                    </p>
                </div>

                <div className="space-y-16">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div 
                            key={category} 
                            className={`space-y-8 transform transition-all duration-1000 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                        >
                            <div className="flex items-center space-x-4">
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {category}
                                </h3>
                                <div className="flex-1 h-px bg-gray-200"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="card bg-card-bg rounded-xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="text-2xl transform transition-transform group-hover:scale-110">
                                                {skill.icon}
                                            </div>
                                            <h4 className="text-lg font-semibold text-text-primary">
                                                {skill.name}
                                            </h4>
                                        </div>
                                        <div className="relative pt-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-sm text-text-secondary">
                                                    Proficiency
                                                </div>
                                                <div className="text-sm font-semibold text-text-primary">
                                                    {skill.level}%
                                                </div>
                                            </div>
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-bg-secondary">
                                                <div
                                                    style={{ width: `${isVisible ? skill.level : 0}%` }}
                                                    className="transition-all duration-1000 ease-out shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary-color to-secondary-color"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}