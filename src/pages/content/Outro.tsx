import "../../css/Outro.css";

function Outro() {
    return (
        <div className="paper-background">
            <div className="outro-container">
                <h1>Thank you</h1>
                <nav className="outro-nav">
                    <div className="nav-links">
                        <a
                            href="https://github.com/claire0321"
                            target="_blank"
                            className="nav-link">
                            Github
                        </a>
                        <a
                            href="https://www.linkedin.com/in/inkyeongkim/"
                            target="_blank"
                            className="nav-link">
                            LinkedIn
                        </a>
                    </div>
                </nav>
                <p className="copyright">Copyright 2026. Inkyeong Kim all rights reserved.</p>
            </div>
        </div>
    );
}

export default Outro;
