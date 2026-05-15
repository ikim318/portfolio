import type { ProjectPropsT } from "../../components/types";
import "../../css/Project.css";

function ProjectCard({ project }: ProjectPropsT) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-info">
                <div className="project-title">{project.name}</div>
                <p className="project-description">{project.description}</p>
                <div className="project-skills">
                    {project.skills.map((skill, i) => (
                        <span key={i} className="project-skills-items">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
