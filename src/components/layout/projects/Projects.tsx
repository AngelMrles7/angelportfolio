import React from "react";
import Slider from "../../ui/slider/Slider";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Fade direction="up" triggerOnce={true}>
        <h2 className="projects-section__title">Proyects</h2>
      </Fade>
      <Fade direction="right" triggerOnce={true}>
        <Slider />
      </Fade>
    </section>
  );
};

export default Projects;
