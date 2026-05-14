import SideNav from "../components/SideNav";
import Project from "./content/Project";
import Career from "./content/Career";
import Education from "./content/Education";
import useScrollToTarget from "../components/useScrollToTarget";

function Contents() {
    const navTabs = [
        useScrollToTarget("education"),
        useScrollToTarget("career"),
        useScrollToTarget("project"),
    ];

    return (
        <section>
            <SideNav navTabs={navTabs} />
            <section>
                <Education id="education" navTabs={navTabs} />
                <Career id="career" navTabs={navTabs} />
                <Project id="project" navTabs={navTabs} />
            </section>
        </section>
    );
}

export default Contents;
