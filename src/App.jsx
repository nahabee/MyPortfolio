import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col">
      <Home />
      <About />
      <Projects />
      <Tools />
      <Contact />
    </div>
  );
}

export default App;
