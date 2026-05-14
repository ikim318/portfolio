import SideNav from "../components/SideNav";
import Project from "./content/Project";
import Career from "./content/Career";
import Education from "./content/Education";
import useScrollToTarget from "../components/useScrollToTarget";
import "../css/Contents.css";

function Contents() {
    const navTabs = [
        useScrollToTarget("Education"),
        useScrollToTarget("Career"),
        useScrollToTarget("Project"),
    ];

    return (
        <section className="container">
            <SideNav navTabs={navTabs} />
            <section className="right-wrap">
                <Education id="Education" navTabs={navTabs} />
                <Career id="Career" navTabs={navTabs} />
                <Project id="Project" navTabs={navTabs} />
            </section>
        </section>
    );
}

export default Contents;
