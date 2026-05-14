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
            <AboutMe />
            <Contents />
            <Contact />
        </div>
    );
}

export default App;
