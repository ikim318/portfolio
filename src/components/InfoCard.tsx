// import type { JSX } from "react";
import type { InfoType } from "./types";

type Props = {
    info: InfoType;
};

function InfoCard({ info }: Props) {
    return (
        <div className="career-card">
            <div>{info.date}</div>
            <div>{info.institution}</div>
            <div>{info.role}</div>

            <div>
                {info.description.map((item, i) => (
                    <div key={i}>{item}</div>
                ))}
            </div>

            <div>
                {info.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default InfoCard;
