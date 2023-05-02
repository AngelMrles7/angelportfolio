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
  FaGithub,
  FaFigma,
  FaUsers,
  FaRegComments,
  FaWrench,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-section__title">My Skills</h2>
      <div className="skills-section__content">
        <div className="technical-skills">
          <h3 className="technical-skills__title">Technical skills</h3>
          <div className="technical-skills__icons">
            <CardIcon icon={<FaHtml5 />} about="HTML" />
            <CardIcon icon={<FaCss3Alt />} about="CSS" />
            <CardIcon icon={<FaJs />} about="JS" />
            <CardIcon icon={<FaReact />} about="React Js" />
            <CardIcon icon={<FaSass />} about="Sass" />
            <CardIcon icon={<FaLaravel />} about="Laravel" />
            <CardIcon icon={<FaDatabase />} about="My SQL" />
            <CardIcon icon={<FaGithub />} about="Git" />
            <CardIcon icon={<FaFigma />} about="Figma" />
          </div>
        </div>
        <div className="soft-skills">
          <h3 className="soft-skills__title">Soft skills</h3>
          <div className="soft-skills__icons">
            <CardIcon icon={<FaUsers />} about="Teamwork" />
            <CardIcon icon={<FaRegComments />} about="Communication" />
            <CardIcon icon={<FaWrench />} about="Problem solving " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
