function AboutMe() {
    const codingSkills = [
        {name: "PhpStorm", image: "/skillset/phpstorm.png"},
        {name: "Visual Studio", image: "/skillset/VS.png"},
        {name: "JavaScript", image: "/skillset/JS.png"},
        {name: "React", image: "/skillset/react.webp"},
        {name: "React Native", image: "/skillset/react.webp"},
        {name: "Express", image: "/skillset/JS.png"},
        {name: "HTML & CSS", image: "/skillset/HTML-CSS.png"},
        {name: "Figma", image: "/skillset/figma_logo.webp"}
    ];

    const adobeSkills = [
        {name: "Photoshop", image: "/skillset/Photoshop.png"},
        {name: "Illustrator", image: "/skillset/Illustrator.png"},
        {name: "Premiere Pro", image: "/skillset/Premierepro.png"},
        {name: "After Effects", image: "/skillset/AfterEffects.png"}
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">

            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="space-y-6">
                    <h1 className="text-5xl font-bold">About Me</h1>

                    <p className="text-white/70 leading-relaxed">
                        I am a Creative Media and Game Technologies (CMGT) student who enjoys
                        combining creativity and technology to build modern and interactive
                        applications. I also graduated as a Media Design student from the
                        Grafisch Lyceum Rotterdam, where I specialized in animation. This
                        background allows me to approach projects with both a creative and
                        technical mindset, enabling me to design and develop engaging digital
                        experiences.
                    </p>

                    <div className="flex gap-4 pt-2">

                        <a
                            href="https://github.com/AngryPapayah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-5 py-2.5
                                rounded-xl
                                bg-white/5
                                border border-white/10
                                hover:bg-white/10
                                hover:scale-105
                                transition
                            "
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/airissa-vermond-1530261b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-5 py-2.5
                                rounded-xl
                                bg-accent
                                text-primary-content
                                hover:opacity-80
                                hover:scale-105
                                transition
                            "
                        >
                            LinkedIn
                        </a>

                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="/airissa-foto2.jpg"
                        alt="Airissa"
                        className="relative w-[420px] md:w-[500px] h-auto object-cover [border-radius:60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl transition duration-300 hover:scale-105"
                    />
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-semibold">Coding Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {codingSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-16 h-16 object-contain mx-auto mb-4"
                            />
                            <p className="font-medium text-base">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-semibold">Adobe Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {adobeSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-16 h-16 object-contain mx-auto mb-4"
                            />
                            <p className="font-medium text-base">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default AboutMe;