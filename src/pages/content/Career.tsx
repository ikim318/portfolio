import { careerData } from "../../data/CareerData";
import InfoCard from "../../components/card/InfoCard";
import type { TabsPropsT } from "../../components/types";
import "../../css/App.css";

const Career = ({ id, navTabs }: TabsPropsT) => {
    return (
        <article className="career" id={id} ref={navTabs[1].targetRef}>
            <div className="career-grid">
                {careerData.map((info) => (
                    <InfoCard key={`${info.institution}-${info.date}`} info={info} />
                ))}
            </div>
        </article>
    );
};

export default Career;
