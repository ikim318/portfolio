import { projects } from "../data/ProjectData";
import ProjectCard from "../components/ProjectCard";

function Project() {
    return (
        <div className="project-grid">
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    );
}

export default Project;
