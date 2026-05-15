import type { ProjectProps } from "../components/types";
import project2 from "../assets/img/project_portfolio.png";
import project1 from "../assets/img/orac.png";

export const projects: ProjectProps[] = [
    {
        image: project1,
        name: "Orac",
        description: "Mini game platform",
        skills: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/skim411/Orac",
    },
    {
        image: project2,
        name: "Website",
        description: "Claire's portfolio website",
        skills: ["HTML", "CSS", "Typescript", "React"],
        github: "https://github.com/claire0321/portfolio",
    },
];
