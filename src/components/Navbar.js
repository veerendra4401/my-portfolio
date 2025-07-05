import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            // Update active link based on scroll position
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    setActiveLink(`#${section.id}`);
                }
            });
            // Close mobile menu on scroll
            setIsMenuOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', text: 'About' },
        { href: '#skills', text: 'Skills' },
        { href: '#projects', text: 'Projects' },
        { href: '#certifications', text: 'Certifications' },
        { href: '#resume', text: 'Resume' },
        { href: '#contact', text: 'Contact' }
    ];

    const menuVariants = {
        hidden: { 
            opacity: 0,
            height: 0,
            transition: { 
                duration: 0.3,
                ease: "easeInOut",
                when: "afterChildren"
            }
        },
        visible: { 
            opacity: 1,
            height: "auto",
            transition: { 
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md py-0' : 'bg-transparent py-2'
        } ${isMenuOpen ? 'bg-white dark:bg-gray-900 shadow-md' : ''}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div 
                        className="flex-shrink-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
                            Thogiti Veerendra
                        </h3>
                    </motion.div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                    activeLink === link.href 
                                        ? 'text-white bg-primary-color'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-color dark:hover:text-primary-light'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.text}
                                {activeLink === link.href && (
                                    <motion.span 
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-color"
                                        layoutId="activeLink"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile menu button (only visible on phone browsers) */}
                    <motion.div 
                        className="flex sm:hidden"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-color transition-all"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </motion.div>
                </div>

                {/* Mobile menu with animations */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="md:hidden"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                        >
                            <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        className={`block px-3 py-3 rounded-md text-base font-medium transition-all ${
                                            activeLink === link.href
                                                ? 'bg-primary-color text-white'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                        variants={itemVariants}
                                        onClick={() => setIsMenuOpen(false)}
                                        whileHover={{ x: 5 }}
                                    >
                                        {link.text}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}