import React from "react";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-section__info">
        <h1 className="home-section__info__title">
          <Fade cascade damping={1} triggerOnce={true}>
            <span>Hello! 👋</span>
            <span className="css-1c2fuzs--effect-text">I'm Angel Morales</span>
            <span className="css-1c2fuzs__font-size">Web developer</span>
          </Fade>
        </h1>

        <div className="home-section__info__btns">
          <button className="button download">
            <span>Download CV</span>
          </button>
        </div>
      </div>
      <div className="home-section__image">
        <img src="#" alt="" />
      </div>
    </section>
  );
};

export default Home;
