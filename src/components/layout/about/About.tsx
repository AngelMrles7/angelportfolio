import React from "react";
import CardIcon from "../../ui/CardIcon";
import Photo from "../../../assets/img.jpg";
import {
  FaFutbol,
  FaLaptopCode,
  FaHeadphonesAlt,
  FaGamepad,
  FaTv,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="about-section" id="about">
      <Fade damping={1} direction="down" triggerOnce={true}>
        <h2 className="about-section__title">About Me</h2>
      </Fade>

      <div className="about-section__content">
        <div className="about-section__content__box-text">
          <Fade damping={1} direction="left" triggerOnce={true} fraction={1}>
            <p className="about-section__content__text">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original.
            </p>
          </Fade>
        </div>

        <div className="hobbies">
          <Fade damping={1} direction="up" triggerOnce={true} fraction={0.8}>
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
