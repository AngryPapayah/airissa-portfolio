import {useOutletContext} from "react-router-dom";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

function Contact() {
    const {language} = useOutletContext();

    const contactLinks = [
        {
            name: "GitHub",
            url: "https://github.com/AngryPapayah",
            icon: <FaGithub className="text-2xl"/>,
            description:
                language === "EN"
                    ? "Explore my projects, code, and experiments."
                    : "Bekijk mijn projecten, code en experimenten.",
            accent: "from-white/10 to-white/5"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/airissa-vermond-1530261b9/",
            icon: <FaLinkedin className="text-2xl"/>,
            description:
                language === "EN"
                    ? "Connect with me and follow my professional journey."
                    : "Connect met mij en volg mijn professionele ontwikkeling.",
            accent: "from-accent/30 to-accent/10"
        },
        {
            name: language === "EN" ? "Email" : "E-mail",
            url: "mailto:airissavermo@hotmail.com",
            icon: <FaEnvelope className="text-2xl"/>,
            description:
                language === "EN"
                    ? "Send me a message directly via email."
                    : "Stuur mij direct een bericht via e-mail.",
            accent: "from-white/10 to-white/5"
        }
    ];

    const text = {
        subtitle: language === "EN" ? "Contact" : "Contact",
        title: language === "EN" ? "Get in touch" : "Neem contact op",
        description:
            language === "EN"
                ? "Want to know more about my work or connect with me? You can find me on the platforms below."
                : "Wil je meer weten over mijn werk of met mij in contact komen? Je kunt mij vinden via de onderstaande platforms."
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-accent text-lg mb-3">{text.subtitle}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
                    {text.title}
                </h1>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                    {text.description}
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {contactLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-accent/30"
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${link.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                        />

                        <div className="relative z-10">
                            <div
                                className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                                {link.icon}
                            </div>

                            <h2 className="text-2xl font-semibold mb-3">
                                {link.name}
                            </h2>

                            <p className="text-white/70 leading-relaxed mb-6">
                                {link.description}
                            </p>

                            <span
                                className="inline-flex items-center text-accent font-medium group-hover:translate-x-1 transition duration-300">
                                {language === "EN" ? "Open" : "Openen"}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;