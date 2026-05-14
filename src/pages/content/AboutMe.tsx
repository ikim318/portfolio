import { AboutMeData } from "../../data/AboutMeData";
import "../../css/AboutMe.css";

function AboutMe() {
    return (
        <div className="about-me">
            <h2>About Me</h2>

            <div className="about-content-wrapper">
                {Object.entries(AboutMeData).map(([title, items]) => (
                    <div key={title} className="about-section">
                        <h3>{title}</h3>

                        {items.map((item) => (
                            <div key={item.name} className="skill-item">
                                <span className="skill-name">{item.name}</span>

                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{
                                            width: `${item.level}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMe;
