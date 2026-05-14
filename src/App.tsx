import "./css/App.css";
import Home from "./pages/content/Home";
import AboutMe from "./pages/content/AboutMe";
import Contents from "./pages/Contents";
import Contact from "./pages/content/Contact";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <div className="main-content">
                <AboutMe />
                <Contents />
                <Contact />
            </div>
        </div>
    );
}

export default App;
