import profileImg from "../assets/icon/profile.png";
import "../css/Home.css";

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Engineer</h1>
            <h2>Hello I am Claire Kim!</h2>
            <div className="profile-container">
                <img src={profileImg} alt="Claire Kim's Profile" className="profile-img" />
            </div>
            <div className="email">claire.inkyeong@gmail.com</div>
        </div>
    );
}

export default Home;
