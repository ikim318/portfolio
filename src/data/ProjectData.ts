import type { ProjectProps } from "../components/types";
import project1 from "../assets/projectImg/project_portfolio.png";
import project2 from "../assets/projectImg/orac.png";
import project3 from "../assets/projectImg/newsflow.png";

export const projects: ProjectProps[] = [
    {
        image: project3,
        name: "NewsFlow",
        description:
            "NewsFlow is a news aggregator app built with Next.js. It provides users with the latest news from various sources in one place.",
        skills: ["HTML", "Tailwind CSS", "TypeScript", "Next.js"],
        github: "https://github.com/claire0321/NewsFlow",
        url: "https://news-flow-seven.vercel.app/",
    },
    {
        image: project2,
        name: "Orac",
        description: "Mini game platform",
        skills: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/skim411/Orac",
    },
    {
        image: project1,
        name: "Website",
        description: "Claire's portfolio website",
        skills: ["HTML", "CSS", "Typescript", "React"],
        github: "https://github.com/claire0321/portfolio",
        url: "https://portfolio-clairekim.vercel.app/",
    },
];
