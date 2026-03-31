import {useOutletContext} from "react-router-dom";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

function Contact() {
    const {language} = useOutletContext();

    const contactLinks = [
        {
            name: "GitHub",
            url: "https://github.com/AngryPapayah",
            icon: <FaGithub className="text-3xl"/>,
            description:
                language === "EN"
                    ? "View my projects and code on GitHub."
                    : "Bekijk mijn projecten en code op GitHub.",
            style: "bg-white/5 border border-white/10 hover:bg-white/10"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/airissa-vermond-1530261b9/",
            icon: <FaLinkedin className="text-3xl"/>,
            description:
                language === "EN"
                    ? "Connect with me professionally on LinkedIn."
                    : "Connect met mij professioneel op LinkedIn.",
            style: "bg-accent text-primary-content hover:opacity-80"
        },
        {
            name: language === "EN" ? "Email" : "E-mail",
            url: "mailto:airissavermo@hotmail.com",
            icon: <FaEnvelope className="text-3xl"/>,
            description:
                language === "EN"
                    ? "Send me an email directly."
                    : "Stuur mij direct een e-mail.",
            style: "bg-white/5 border border-white/10 hover:bg-white/10"
        }
    ];

    const text = {
        title: "Contact",
        description:
            language === "EN"
                ? "Want to get in touch or view more of my work? You can find me through the links below."
                : "Wil je contact opnemen of meer van mijn werk bekijken? Je kunt me vinden via de links hieronder."
    };

    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">{text.title}</h1>
                <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                    {text.description}
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`rounded-3xl p-6 transition duration-300 hover:scale-105 shadow-xl ${link.style}`}
                    >
                        <div className="mb-4">{link.icon}</div>
                        <h2 className="text-2xl font-semibold mb-3">{link.name}</h2>
                        <p className={`${link.name === "LinkedIn" ? "text-primary-content/80" : "text-white/70"}`}>
                            {link.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;