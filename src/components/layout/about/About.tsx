import React from "react";
import CardIcon from "../../ui/CardIcon";

const About = () => {
  return (
    <section className="section-about">
      <h2 className="section-about__title">About Me</h2>
      <div className="section-about__content">
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original.
        </p>

        <div className="hobbies">
          <h3>My hobbies</h3>
          <div className="hobbies__content"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
