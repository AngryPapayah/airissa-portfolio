import {useOutletContext} from "react-router-dom";
import {useState} from "react";

function Contact() {
    const {language} = useOutletContext();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("idle");
    const [feedback, setFeedback] = useState("");

    const contactLinks = [
        {
            name: "GitHub",
            url: "https://github.com/AngryPapayah",
            style: "bg-white/5 border border-white/10 hover:bg-white/10"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/airissa-vermond-1530261b9/",
            style: "bg-accent text-primary-content hover:opacity-80"
        }
    ];

    const text = {
        title: "Contact",
        description:
            language === "EN"
                ? "Want to get in touch or view more of my work? Send me a message through the form below or connect with me on my socials."
                : "Wil je contact opnemen of meer van mijn werk bekijken? Stuur me een bericht via het formulier hieronder of neem contact op via mijn socials.",
        formTitle: language === "EN" ? "Send a message" : "Stuur een bericht",
        name: language === "EN" ? "Name" : "Naam",
        email: "Email",
        message: language === "EN" ? "Message" : "Bericht",
        buttonIdle: language === "EN" ? "Send message" : "Verstuur bericht",
        buttonLoading: language === "EN" ? "Sending..." : "Versturen...",
        success:
            language === "EN"
                ? "Your message has been sent successfully."
                : "Je bericht is succesvol verzonden.",
        error:
            language === "EN"
                ? "Something went wrong. Please try again later."
                : "Er ging iets mis. Probeer het later opnieuw.",
        missing:
            language === "EN"
                ? "Please fill in all fields."
                : "Vul alle velden in.",
        placeholders: {
            name: language === "EN" ? "Your name" : "Jouw naam",
            email: language === "EN" ? "Your email" : "Jouw e-mail",
            message:
                language === "EN"
                    ? "Write your message here..."
                    : "Schrijf hier je bericht..."
        }
    };

    function handleChange(e) {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setFeedback("");

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            setFeedback(text.missing);
            return;
        }

        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || text.error);
            }

            setStatus("success");
            setFeedback(text.success);
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            setStatus("error");
            setFeedback(error.message || text.error);
        }
    }

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold">{text.title}</h1>

                    <p className="text-white/70 leading-relaxed max-w-xl">
                        {text.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        {contactLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-5 py-2.5 rounded-xl transition hover:scale-105 ${link.style}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-6">{text.formTitle}</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm text-white/70 mb-2">
                                {text.name}
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={text.placeholders.name}
                                required
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-accent transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-white/70 mb-2">
                                {text.email}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={text.placeholders.email}
                                required
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-accent transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-white/70 mb-2">
                                {text.message}
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={text.placeholders.message}
                                required
                                rows="6"
                                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-accent transition resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full px-5 py-3 rounded-2xl bg-accent text-primary-content font-medium hover:opacity-80 transition disabled:opacity-60"
                        >
                            {status === "loading" ? text.buttonLoading : text.buttonIdle}
                        </button>

                        {feedback && (
                            <p
                                className={`text-sm ${
                                    status === "success" ? "text-green-400" : "text-red-400"
                                }`}
                            >
                                {feedback}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;