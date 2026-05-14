import { educationData } from "../../data/EducationData";
import InfoCard from "../../components/card/InfoCard";
import type { TabsPropsT } from "../../components/types";

const Education = ({ id, navTabs }: TabsPropsT) => {
    return (
        <article id={id} ref={navTabs[0].targetRef}>
            <div className="education-grid">
                {educationData.map((item, idx) => (
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

export default Education;
