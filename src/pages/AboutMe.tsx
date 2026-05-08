import { AboutMeData } from "../data/AboutMeData";

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>

            {Object.entries(AboutMeData).map(([title, items]) => (
                <div key={title}>
                    <h2>{title}</h2>

                    {items.map((item) => (
                        <div key={item.name}>
                            <span>{item.name}</span>

                            <div>
                                <div
                                    style={{
                                        width: `${item.level}%`,
                                        height: "10px",
                                        background: "black",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AboutMe;
