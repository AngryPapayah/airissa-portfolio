import Button from "../components/Button.jsx";
import {Link, useOutletContext} from "react-router-dom";

function Home() {
    const {language} = useOutletContext();

    const skills = [
        {name: "PhpStorm", image: "/skillset/phpstorm.png"},
        {name: "Visual Studio", image: "/skillset/VS.png"},
        {name: "JavaScript", image: "/skillset/JS.png"},
        {name: "React", image: "/skillset/react.webp"},
        {name: "React Native", image: "/skillset/react.webp"},
        // {name: "Express", image: "/skillset/JS.png"},
        {name: "HTML & CSS", image: "/skillset/HTML-CSS.png"},
        {name: "Figma", image: "/skillset/figma_logo.webp"},
        {name: "Laravel", image: "/skillset/Laravel-Logo.png"},
        {name: "Photoshop", image: "/skillset/Photoshop.png"},
        {name: "Illustrator", image: "/skillset/Illustrator.png"},
        {name: "Premiere Pro", image: "/skillset/Premierepro.png"},
        {name: "After Effects", image: "/skillset/AfterEffects.png"}
    ];

    // Duplicate skills for seamless infinite loop
    const loopedSkills = [...skills, ...skills, ...skills];

    return (
        <>
            <section
                className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-12 md:p-16 max-w-6xl mx-auto overflow-hidden">
                <div
                    className="absolute -z-10 top-10 left-0 w-52 h-52 md:w-72 md:h-72 bg-accent/20 blur-3xl rounded-full"></div>
                <div
                    className="absolute -z-10 bottom-0 right-0 w-52 h-52 md:w-72 md:h-72 bg-secondary/20 blur-3xl rounded-full"></div>

                <div className="space-y-6 text-center md:text-left">
                    <p className="text-accent text-base md:text-lg tracking-wide">
                        Airissa Vermond
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        {language === "EN" ? "Fullstack" : "Fullstack"} <br/>
                        <span className="text-accent">
                            {language === "EN" ? "Developer" : "Developer"}
                        </span>
                        <span className="block text-lg md:text-xl text-white/60 mt-2">
                            {language === "EN" ? "Junior Level" : "Junior niveau"}
                        </span>
                    </h1>

                    <p className="max-w-md mx-auto md:mx-0 text-white/70 leading-relaxed text-base md:text-lg">
                        {language === "EN"
                            ? "I am a Creative Media and Game Technologies (CMGT) student who enjoys combining creativity and technology to build modern and interactive applications."
                            : "Ik ben een Creative Media and Game Technologies (CMGT) student die het leuk vindt om creativiteit en technologie te combineren om moderne en interactieve applicaties te bouwen."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                        <Link to="/mywork">
                            <Button variant="outline">
                                {language === "EN" ? "View my projects" : "Bekijk mijn projecten"}
                            </Button>
                        </Link>

                        <Link to="/contact">
                            <Button>{language === "EN" ? "Contact" : "Contact"}</Button>
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-center w-full md:w-auto">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl"></div>

                    <img
                        src="/airissa-foto2.jpg"
                        alt="Airissa"
                        className="relative w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto object-cover [border-radius:60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl transition duration-300 hover:scale-105"
                    />
                </div>
            </section>

            {/* Skills Carousel */}
            <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-10">
                <div className="text-center md:text-left">
                    <p className="text-accent text-lg">
                        {language === "EN" ? "Skills" : "Vaardigheden"}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {language === "EN" ? "My Skillset" : "Mijn skillset"}
                    </h2>
                </div>

                {/* Carousel wrapper with fade edges */}
                <div className="relative overflow-hidden">
                    {/* Left fade */}
                    <div
                        className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[var(--color-bg,#0f0f0f)] to-transparent z-10 pointer-events-none"></div>
                    {/* Right fade */}
                    <div
                        className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[var(--color-bg,#0f0f0f)] to-transparent z-10 pointer-events-none"></div>

                    <div className="flex gap-6 animate-scroll w-max">
                        {loopedSkills.map((skill, index) => (
                            <div
                                key={`${skill.name}-${index}`}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition backdrop-blur-sm flex-shrink-0 w-32"
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-12 h-12 object-contain mx-auto mb-3"
                                />
                                <p className="text-sm font-medium">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Keyframe animation via style tag */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 3)); }
                }
                .animate-scroll {
                    animation: scroll 18s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </>
    );
}

export default Home;