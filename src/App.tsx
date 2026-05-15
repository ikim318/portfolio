import Home from "./pages/content/Home";
import AboutMe from "./pages/content/AboutMe";
import Contents from "./pages/Contents";
import Outro from "./pages/content/Outro";
import NavBar from "./components/NavBar";
import RightButtons from "./components/RightButtons";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <AboutMe />
            <Contents />
            <Outro />
            <RightButtons />
        </div>
    );
}

export default App;
