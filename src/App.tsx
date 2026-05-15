import Home from "./pages/content/Home";
import AboutMe from "./pages/content/AboutMe";
import Contents from "./pages/Contents";
import Outro from "./pages/content/Outro";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <AboutMe />
            <Contents />
            <Outro />
        </div>
    );
}

export default App;
