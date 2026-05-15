import { projects } from "../../data/ProjectData";
import ProjectCard from "../../components/card/ProjectCard";
import type { TabsPropsT } from "../../components/types";
import "../../css/Project.css"


const Project = ({ id, navTabs }: TabsPropsT) => {
    return (
        <article id={id} ref={navTabs[2].targetRef}>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </article>
    );
};

export default Project;
