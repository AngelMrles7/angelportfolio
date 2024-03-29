import CardIcon from "../../ui/CardIcon";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaUsers,
  FaRegComments,
  FaWrench,
  FaSitemap,
  FaRetweet,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { SiTypescript } from "react-icons/si";

import { useLanguage } from "../../../hooks/useLanguage";

const Skills = () => {
  const {
    language: { sections },
  } = useLanguage();
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-section__title">{sections.skills.title}</h2>
      <div className="skills-section__content">
        <Fade direction="left" triggerOnce={true}>
          <div className="technical-skills">
            <h3 className="technical-skills__title">
              {sections.skills.technicalTitle}
            </h3>
            <div className="technical-skills__icons">
              {/* skill icons */}
              <CardIcon icon={<FaHtml5 />} about="HTML" />
              <CardIcon icon={<FaCss3Alt />} about="CSS" />
              <CardIcon icon={<FaJs />} about="JS" />
              <CardIcon icon={<SiTypescript />} about="TS" />
              <CardIcon icon={<FaReact />} about="React Js" />
              <CardIcon icon={<FaSass />} about="Sass" />
              <CardIcon icon={<FaLaravel />} about="Laravel" />
              <CardIcon icon={<FaDatabase />} about="SQL" />
              <CardIcon icon={<FaGitAlt />} about="Git" />
              <CardIcon icon={<FaGithub />} about="Github" />
              <CardIcon icon={<FaFigma />} about="Figma" />
            </div>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce={true}>
          <div className="soft-skills">
            <h3 className="soft-skills__title">{sections.skills.softTitle}</h3>
            <div className="soft-skills__icons">
              {/* skill icons */}
              <CardIcon icon={<FaUsers />} about="Teamwork" />
              <CardIcon icon={<FaRegComments />} about="Communication" />

              <CardIcon icon={<FaWrench />} about="Problem solving" />
              <CardIcon icon={<FaSitemap />} about="Organizational" />
              <CardIcon icon={<FaRetweet />} about="Adaptability" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
