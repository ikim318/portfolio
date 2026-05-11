import "../css/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="https://github.com/claire0321" target="_blank" className="nav-link">
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
    );
}

export default NavBar;
