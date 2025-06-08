export default function Certifications() {
    const certificationCategories = {
        "Technical Expertise": [
            {
                title: "Certified in Web Development",
                issuer: "Internshala Trainings",
                date: "2023",
                link: "https://trainings.internshala.com/verify-certificate/?certificate_number=f6afguqfwze",
                imgPath: "/assets/certificates/Internshala.png",
                skills: ["HTML", "CSS", "JavaScript", "React", "Full Stack"]
            },
            {
                title: "Certified in Python Programming",
                issuer: "Codetantra",
                date: "2023",
                link: "https://jyothishmathi.codetantra.com/cert/certificate.jsp?certId=CT635-tnDkIH4-cf6",
                imgPath: "/assets/certificates/python.png",
                skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"]
            },
            {
                title: "Certified in Core Java",
                issuer: "Internshala",
                date: "2025",
                link: "https://trainings.internshala.com/verify-certificate/?certificate_number=fvhdbk7tl0u",
                imgPath: "/assets/certificates/java.png",
                skills: ["Java", "OOP", "Core Concepts", "Backend Development"]
            }
        ],
        "Artificial Intelligence & Innovation": [
            {
                title: "Certified in AI & Prompt Engineering",
                issuer: "VaultofCodes",
                date: "2025",
                imgPath: "/assets/certificates/VaultofCodes.png",
                skills: ["AI", "Prompt Engineering", "LLMs", "Innovation"]
            },
            {
                title: "Certified in Artificial Intelligence and Data Analytics with a focus on Green Skills",
                issuer: "Edunet Foundation",
                date: "2025",
                imgPath: "/assets/certificates/edunet.png",
                skills: ["AI", "Data Analytics", "Green Technology", "Sustainability"]
            }
        ],
        "Professional Growth": [
            {
                title: "Certified in TCS Career Edge",
                issuer: "TCS",
                date: "2024",
                imgPath: "/assets/certificates/tcs.png",
                skills: ["Professional Skills", "Career Development", "Industry Best Practices", "Leadership"]
            }
        ]
    };

    return (
        <section id="certifications" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Professional Certifications
                    </h2>
                    <p className="text-black max-w-2xl mx-auto">
                        Showcasing my expertise through industry-recognized certifications in web development, programming, AI, and professional skills.
                    </p>
                </div>

                <div className="space-y-16">
                    {Object.entries(certificationCategories).map(([category, certifications]) => (
                        <div key={category} className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <h3 className="text-2xl font-semibold text-black">
                                    {category}
                                </h3>
                                <div className="flex-1 h-px bg-gray-200"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
                                    >
                                        <div className="relative h-48">
                                            <img
                                                src={cert.imgPath}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h4 className="text-lg font-semibold text-black line-clamp-2">
                                                    {cert.title}
                                                </h4>
                                                <span className="text-sm text-gray-700 whitespace-nowrap ml-2">
                                                    {cert.date}
                                                </span>
                                            </div>
                                            <p className="text-black mb-4">
                                                {cert.issuer}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {cert.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-2 py-1 text-xs rounded-full bg-gray-100 text-black"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-primary-color hover:text-secondary-color transition-colors duration-300"
                                                >
                                                    View Certificate
                                                    <svg
                                                        className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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
                                            )}
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
