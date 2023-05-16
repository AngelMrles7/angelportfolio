import React from "react";
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
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-section__title">My Skills</h2>
      <div className="skills-section__content">
        <Fade
          direction="left"
          triggerOnce={true}
          fraction={0.2}
          childClassName="technical-skills"
        >
          <div>
            <h3 className="technical-skills__title">Technical skills</h3>
            <div className="technical-skills__icons">
              <CardIcon icon={<FaHtml5 />} about="HTML" />
              <CardIcon icon={<FaCss3Alt />} about="CSS" />
              <CardIcon icon={<FaJs />} about="JS" />
              <CardIcon icon={<FaReact />} about="React Js" />
              <CardIcon icon={<FaSass />} about="Sass" />
              <CardIcon icon={<FaLaravel />} about="Laravel" />
              <CardIcon icon={<FaDatabase />} about="My SQL" />
              <CardIcon icon={<FaGitAlt />} about="Git" />
              <CardIcon icon={<FaGithub />} about="Github" />
              <CardIcon icon={<FaFigma />} about="Figma" />
            </div>
          </div>
        </Fade>
        <Fade direction="top-right" triggerOnce={true} fraction={0.2}>
          <div className="soft-skills">
            <h3 className="soft-skills__title">Soft skills</h3>
            <div className="soft-skills__icons">
              <CardIcon icon={<FaUsers />} about="Teamwork" />
              <CardIcon icon={<FaRegComments />} about="Communication" />
              <CardIcon icon={<FaWrench />} about="Problem solving " />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
