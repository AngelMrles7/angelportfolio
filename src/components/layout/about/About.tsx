import CardIcon from "../../ui/CardIcon";

import {
  FaFutbol,
  FaLaptopCode,
  FaHeadphonesAlt,
  FaGamepad,
  FaTv,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { useLanguage } from "../../../hooks/useLanguage";
const About = () => {
  const {
    language: { sections },
  } = useLanguage();

  return (
    <section className="about-section" id="about">
      <Fade direction="down" triggerOnce={true}>
        <h2 className="about-section__title">{sections.about.title}</h2>
      </Fade>

      <div className="about-section__content">
        <div className="about-section__content__card">
          {/* About me Text */}
          <Fade direction="left" triggerOnce={true}>
            <p className="about-section__content__card__text">
              {sections.about.information}
            </p>
          </Fade>
        </div>

        <div className="hobbies">
          <Fade direction="up" triggerOnce={true}>
            <h3>My hobbies</h3>

            <div className="hobbies__content">
              <CardIcon icon={<FaFutbol />} about="Soccer" />
              <CardIcon icon={<FaLaptopCode />} about="Dev" />
              <CardIcon icon={<FaHeadphonesAlt />} about="Music" />
              <CardIcon icon={<FaGamepad />} about="Play" />
              <CardIcon icon={<FaTv />} about="Series" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
