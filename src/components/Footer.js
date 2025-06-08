// Footer.js
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-xl group-hover:text-primary-color transition-colors duration-300" />,
            url: 'https://github.com/veerendra4401'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-xl group-hover:text-primary-color transition-colors duration-300" />,
            url: 'https://www.linkedin.com/in/veerendra-thogiti/'
        },
            ];

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="bg-bg-primary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/5 to-secondary-color/10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-color/10 rounded-full filter blur-3xl animate-blob" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-color/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800">
                                Thogiti Veerendra
                            </h3>
                            <p className="text-gray-600">
                                Building innovative web solutions with modern technologies and best practices.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-800">
                                Quick Links
                            </h4>
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="text-gray-600 hover:text-primary-color transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-800">
                                Connect
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-2 rounded-full bg-bg-secondary hover:bg-primary-color/10 transition-all duration-300"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-600 text-sm">
                            © {new Date().getFullYear()} Thogiti Veerendra. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                            Made with 
                            <FaHeart className="text-red-500 mx-1 animate-pulse" />
                            By Thogiti Veerendra
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
