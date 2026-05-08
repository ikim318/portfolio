import { careers } from "../data/CareerData";
import InfoCard from "../components/InfoCard";

function Career() {
    return (
        <div className="career-grid">
            {careers.map((career) => (
                <InfoCard info={career} key={career.id} />
            ))}
        </div>
    );
}

export default Career;
