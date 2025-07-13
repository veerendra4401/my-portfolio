import { useEffect, useState } from 'react';
import yourPhoto from './assets/your-photo.jpg';


export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialLinks = [
        { icon: 'github', url: 'https://github.com/veerendra4401', label: 'GitHub' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/in/thogiti-veerendra/', label: 'LinkedIn' },
        { icon: 'Gmail', url: 'mailto:veerendrathogiti@gmail.com', label: 'Gmail' }
    ];

    return (
        <section
            id="hero"
            className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/10 to-secondary-color/10" />
                <div className="absolute top-20 left-0 w-72 h-72 bg-primary-color/20 rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary-color/20 rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className={`space-y-8 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="space-y-4">
                            <h4 className="text-xl font-medium text-gray-600">
                                Hi there 👋, I'm
                            </h4>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                                <span>Thogiti Veerendra</span>
                            </h1>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
                                Full Stack Developer
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                Passionate about creating beautiful, user-friendly applications that solve real-world problems.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                            href="#contact"
                            className="btn px-8 py-3 rounded-full bg-gray-100 text-gray-700 font-semibold hover:transform hover:scale-105 transition-all duration-300"
                            >
                            Get in Touch
                            </a>
                            <a
                                href="#projects"
                                className="btn px-8 py-3 rounded-full bg-gray-100 text-gray-700 font-semibold hover:transform hover:scale-105 transition-all duration-300"
                            >
                                View Projects
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 justify-center lg:justify-start">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    className="text-gray-600 hover:text-primary-color transition-colors duration-300"
                                    aria-label={link.label}
                                >
                                    {link.icon === 'github' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    )}
                                    {link.icon === 'linkedin' && (
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className={`relative transform transition-all duration-1000 flex justify-center items-center ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative w-full max-w-lg mx-auto flex justify-center items-center">
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                            <img
                                src={yourPhoto}
                                alt="Thogiti Veerendra"
                                className="relative rounded-full w-80 h-80 object-cover transform hover:scale-110 hover:rotate-6 transition-all duration-500 animate-bounce-slow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}