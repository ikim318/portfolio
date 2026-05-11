import "./css/App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Career from "./pages/Career";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <div className="main-content">
                <AboutMe />
                <Education />
                <Career />
                <Project />
                <Contact />
            </div>
        </div>
    );
}

export default App;
