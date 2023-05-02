import About from "./components/layout/about/About";
import Contact from "./components/layout/contact/Contact";
import Home from "./components/layout/home/Home";
import Navbar from "./components/layout/nav/Navbar";
import Projects from "./components/layout/projects/Projects";
import Skills from "./components/layout/skills/Skills";
import PanelButton from "./components/ui/Panel_Button";

function App() {
  return (
    <>
      <Navbar />
      <PanelButton />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
