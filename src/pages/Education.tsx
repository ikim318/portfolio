import { educations } from "../data/EducationData";
import InfoCard from "../components/InfoCard";

function Education() {
    return (
        <div className="education-grid">
            {educations.map((education) => (
                <InfoCard key={education.id} info={education} />
            ))}
        </div>
    );
}

export default Education;
