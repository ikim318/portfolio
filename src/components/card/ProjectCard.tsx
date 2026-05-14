import type { ProjectType } from "../../components/types";

type Props = {
    project: ProjectType;
};

function ProjectCard({ project }: Props) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-info">
                <div>{project.name}</div>
                <div>{project.description}</div>
            </div>
            <div className="project-skills">
                {project.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
        </div>
    );
}

export default ProjectCard;
