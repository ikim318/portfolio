import profileImg from '../assets/icon/profile.png'

function Home() {
    return (
        <>
            <h1>Engineer</h1>
            <h2>Hello I am Claire Kim!</h2>
            <div>
                <img
                    src={profileImg}
                    alt="Claire Kim's Profile"
                    className="profile-img"
                />
            </div>
            <div className="email">claire.inkyeong@gmail.com</div>
        </>
    );
}

export default Home;
