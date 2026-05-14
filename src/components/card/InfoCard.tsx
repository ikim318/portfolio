// import type { JSX } from "react";
import type { InfoType } from "../../components/types";

const InfoCard = ({ date, institution, role, description, skills }: InfoType) => {
    return (
        <div className="career-container">
            <div className="career-card">
                <div>{date}</div>
                <div>{institution}</div>
                <div>{role}</div>

                <div>
                    {description.map((item, idx) => (
                        <div key={idx}>{item}</div>
                    ))}
                </div>

                <div>
                    {skills.map((skill, idx) => (
                        <span key={idx}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
