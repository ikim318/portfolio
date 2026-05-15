import type { InfoPropsT } from "../../components/types";
import "../../css/InfoCard.css";

const InfoCard = ({ info }: InfoPropsT) => {
    return (
        <div className="info-container">
            <div className="info-card">
                <p className="info-date">{info.date}</p>
                <h3>{info.institution}</h3>
                <span className="info-role">{info.role}</span>

                <ul className="info-description">
                    {info.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="info-skills">
                {info.skills.map((skill, idx) => (
                    <span key={idx}>{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default InfoCard;
