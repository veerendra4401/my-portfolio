import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-2xl group-hover:text-primary-color dark:group-hover:text-primary-light transition-colors duration-300" />,
            url: 'https://github.com/veerendra4401',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-2xl group-hover:text-primary-color dark:group-hover:text-primary-light transition-colors duration-300" />,
            url: 'https://www.linkedin.com/in/veerendra-thogiti/',
        },
        {
            name: 'Email',
            icon: <FaEnvelope className="text-2xl group-hover:text-primary-color dark:group-hover:text-primary-light transition-colors duration-300" />,
            url: 'mailto:thogitiveerendra5@gmail.com',
        }
    ];

    return (
        <section id="contact" className="py-20 bg-bg-primary dark:bg-bg-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-color/5 to-secondary-color/10 dark:from-primary-color/10 dark:to-secondary-color/20" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-color/10 dark:bg-primary-color/20 rounded-full filter blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-color/10 dark:bg-secondary-color/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">
                            Connect With Me
                        </span>
                    </h2>
                    <p className="text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
                        Let's connect and discuss opportunities for collaboration or just have a friendly chat about technology.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Social Links & Info */}
                    <div className="space-y-8">
                        <div className="card bg-card-bg dark:bg-opacity-20 dark:backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl dark:shadow-primary-color/10 transition-all duration-300">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col items-center justify-center p-6 rounded-lg bg-bg-secondary dark:bg-bg-dark-secondary hover:bg-primary-color/10 dark:hover:bg-primary-color/20 transition-all duration-300"
                                    >
                                        {link.icon}
                                        <span className="mt-3 text-sm text-text-secondary dark:text-text-dark-secondary group-hover:text-primary-color dark:group-hover:text-primary-light transition-colors duration-300">
                                            {link.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="card bg-card-bg dark:bg-opacity-20 dark:backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl dark:shadow-primary-color/10 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-text-primary dark:text-text-dark-primary mb-6">
                                Location
                            </h3>
                            <p className="text-text-secondary dark:text-text-dark-secondary">
                                Based in Hyderabad, India
                            </p>
                            <p className="text-text-secondary dark:text-text-dark-secondary mt-2">
                                Available for remote work worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
