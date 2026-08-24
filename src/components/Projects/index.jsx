import ProjectCard from "./ProjectCard";
import Project1 from "assets/images/project-1.webp";
import Project2 from "assets/images/project-2.webp";
import Project3 from "assets/images/project-3.webp";
import Project4 from "assets/images/project-4.webp";
import Project5 from "assets/images/project-5.webp";

import "./Project.css";

const Projects = () => {
    const projects = [
        {
            image: Project1,
            title: "Samic Sub",
            description:
                "The SamicSub website is a virtual top-up (VTU) and utility payment platform in Nigeria used to buy cheap mobile data and airtime, pay utility and earn passive income.",
            link: "https://samicsub.com/",
        },
        {
            image: Project2,
            title: "Samic Lite App",
            description:
                "Samic lite app (available on play stores) is a virtual top-up (VTU) and utility platform used to buy cheap mobile data and airtime, pay utility and earn passive income.",
            link: "https://play.google.com/store/apps/details?id=com.samic.samic_hub",
        },
        {
            image: Project3,
            title: "Samic Tech Hub",
            description:
                "Samic Tech Hub Co-workspace website is a platform where you can book for Co-workspace. for remote workers, freelancers, startups, and students in Moniya, Ibadan. ",
            link: "https://www.samictechhub.com/coworkingSpace",
        },
        {
            image: Project4,
            title: "Occupy App",
            description:
                "The Occupy app (available on app stores) is an estate-centric e-commerce and grocery delivery service designed for residential communities.",
            link: "https://apps.apple.com/ng/app/occupy-estate-shopping/id6751633926",
        },
        {
            image: Project5,
            title: "Charis School",
            description:
                "Charis website an official website that provide admissions info, school curriculum details, and a parent portal login",
            link: "https://college.charisschools.com/",
        },
    ];

    return (
        <div
            name="project"
            className=" bg-secondary custom-radius relative top-20 mb-3 py-10">
            <div className="container">
                <div className="mb-5">
                    <h1 className="text-4xl text-center poppins font-semibold">
                        Live <span className="text-primary">Projects</span>
                    </h1>
                </div>
                <div className="space-y-6 px-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
