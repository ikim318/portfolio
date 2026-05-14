import { careerData } from "../../data/CareerData";
import InfoCard from "../../components/card/InfoCard";
import type { TabsPropsT } from "../../components/types";

const Career = ({ id, navTabs }: TabsPropsT) => {
    return (
        <article className="career" id={id} ref={navTabs[1].targetRef}>
            <div className="career-grid">
                {careerData.map((item, idx) => (
                    <InfoCard
                        key={idx}
                        date={item.date}
                        institution={item.institution}
                        role={item.role}
                        description={item.description}
                        skills={item.skills}
                    />
                ))}
            </div>
        </article>
    );
};

export default Career;
