import {Link, useOutletContext} from "react-router-dom";
import projects from "../data/projects.json";
import Button from "../components/Button";

function MyWork() {
    const {language} = useOutletContext();

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-12">
                <p className="text-accent text-lg">
                    {language === "EN" ? "My Work" : "Mijn werk"}
                </p>
                <h1 className="text-5xl font-bold">
                    {language === "EN" ? "Projects" : "Projecten"}
                </h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6 space-y-4">
                            <h2 className="text-2xl font-semibold">
                                {project.title}
                            </h2>

                            <p className="text-white/70 text-sm leading-relaxed">
                                {project.description[language]}
                            </p>

                            <Link to={`/mywork/${project.id}`}>
                                <Button>
                                    {language === "EN" ? "View more" : "Bekijk meer"}
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MyWork;