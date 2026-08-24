const ProjectCard = ({ project, reverse }) => {
    return (
        <div className="epilogue bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2 items-stretch">
                <div className={`relative ${reverse ? "md:order-1" : "md:order-2"}`}>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[4/3] object-cover md:aspect-auto md:absolute md:inset-0 md:w-full md:h-full"
                    />
                </div>
                <div
                    className={`p-6 md:px-10 md:py-28  flex flex-col justify-center ${
                        reverse ? "md:order-2" : "md:order-1"
                    }`}>
                    <h2 className="playfair font-bold text-4xl">
                        {project.title}
                    </h2>
                   
                    <p className="nunito text-base mt-4 leading-relaxed text-black">
                        {project.description}
                    </p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 self-start border border-gray-800 px-10 py-3 rounded-full font-semibold hover:text-white hover:bg-gray-950 transition-all ease-in-out duration-300">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
