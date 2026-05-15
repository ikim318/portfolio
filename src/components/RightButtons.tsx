// import contactImg from "../assets/icon/contact.png";
import UpArrow from "../assets/icon/up-arrow.png";
import "../css/RightButtons.css";

function RightButtons() {
    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="right-buttons">
            {/* <button className="contact-btn" id="contactBtn">
                <img src={contactImg} alt="Contact Me" className="right-buttons-icon" />
            </button> */}
            <button onClick={topFunction} id="toTop" className="toTop-btn">
                <img src={UpArrow} alt="Scroll to Top" className="right-buttons-icon" />
            </button>
        </div>
    );
}

export default RightButtons;
