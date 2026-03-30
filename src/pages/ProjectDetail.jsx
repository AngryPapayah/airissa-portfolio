import {useState} from "react";
import {useParams, Link} from "react-router-dom";
import projects from "../data/projects.json";
import Button from "../components/Button";

function ProjectDetail() {
    const {id} = useParams();
    const project = projects.find((p) => p.id === Number(id));
    const [selectedImage, setSelectedImage] = useState(null);

    if (!project) {
        return (
            <section className="max-w-5xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold">Project not found</h1>

                <Link to="/mywork" className="text-accent mt-6 inline-block">
                    ← Back to My Work
                </Link>
            </section>
        );
    }

    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-16">
                <Link
                    to="/mywork"
                    className="text-accent hover:opacity-80 transition"
                >
                    ← Back
                </Link>

                <h1 className="text-4xl font-bold mt-4">
                    {project.title}
                </h1>

                <p className="mt-6 text-white/70 leading-relaxed max-w-3xl">
                    {project.longDescription}
                </p>

                <div className="mt-6 flex gap-3">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button>Live</Button>
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline">GitHub</Button>
                        </a>
                    )}
                </div>

                {project.technologies && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Technologies
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="
                                        px-4 py-2
                                        rounded-full
                                        bg-accent/15
                                        border border-accent/20
                                        text-accent
                                        text-sm
                                        font-medium
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {project.images && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-6">
                            Screenshots
                        </h2>

                        <div
                            className="
                                grid
                                gap-6
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-4
                            "
                        >
                            {project.images.map((img, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setSelectedImage(img)}
                                    className="
                                        bg-white/5
                                        p-4
                                        rounded-2xl
                                        border border-white/10
                                        flex
                                        justify-center
                                        items-center
                                        cursor-pointer
                                        transition
                                        duration-300
                                        hover:scale-105
                                    "
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} ${index + 1}`}
                                        className="
                                            max-h-[200px]
                                            object-contain
                                            rounded-xl
                                        "
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {selectedImage && (
                <div
                    className="
                        fixed inset-0 z-50
                        bg-black/80
                        flex items-center justify-center
                        p-6
                    "
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-6xl w-full flex justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className="
                                absolute top-4 right-4
                                bg-white/10
                                text-white
                                px-4 py-2
                                rounded-xl
                                hover:bg-white/20
                                transition
                            "
                        >
                            ✕
                        </button>

                        <img
                            src={selectedImage}
                            alt="Selected project screenshot"
                            className="
                                max-w-full
                                max-h-[90vh]
                                object-contain
                                rounded-2xl
                                shadow-2xl
                            "
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectDetail;