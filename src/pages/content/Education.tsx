import { educationData } from "../../data/EducationData";
import InfoCard from "../../components/card/InfoCard";
import type { TabsPropsT } from "../../components/types";
import "../../css/App.css";

const Education = ({ id, navTabs }: TabsPropsT) => {
    return (
        <article id={id} ref={navTabs[0].targetRef}>
            <div className="education-grid">
                {educationData.map((info) => (
                    <InfoCard key={`${info.institution}-${info.date}`} info={info} />
                ))}
            </div>
        </article>
    );
};

export default Education;
