import { useLanguage } from "../../../hooks/useLanguage";
import Slider from "../../ui/slider/Slider";
import { Fade } from "react-awesome-reveal";
const Projects = () => {
  const {
    language: { sections },
  } = useLanguage();
  return (
    <section className="projects-section" id="projects">
      <Fade direction="up" triggerOnce={true}>
        <h2 className="projects-section__title">{sections.projects.title}</h2>
      </Fade>
      <Fade direction="right" triggerOnce={true}>
        {/* project slider */}
        <Slider />
      </Fade>
    </section>
  );
};

export default Projects;
