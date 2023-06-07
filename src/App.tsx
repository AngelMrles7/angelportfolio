import { useState } from "react";
import About from "./components/layout/about/About";
import Contact from "./components/layout/contact/Contact";
import Home from "./components/layout/home/Home";
import Navbar from "./components/layout/nav/Navbar";
import Projects from "./components/layout/projects/Projects";
import Skills from "./components/layout/skills/Skills";
import PanelButton from "./components/ui/Panel_Button";
import { LanguageProvider } from "./context/language/LanguageState";

function App() {
  const [showPanel, setShowPanel] = useState(false);

  const updateState = () => {
    setShowPanel(!showPanel);
  };

  return (
    <LanguageProvider>
      <Navbar showPanel={showPanel} />
      <PanelButton updateState={updateState} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </LanguageProvider>
  );
}

export default App;
