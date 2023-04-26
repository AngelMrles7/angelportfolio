import React from "react";

const Home = () => {
  return (
    <section className="section-home">
      <div className="section-home__info">
        <h1 className="section-home__info__title">
          <span>Hello! 👋</span>
          <span>I'm Angel Morales</span>
          <span>Web developer</span>
        </h1>
        <div className="section-home__info__btns">
          <button className="button download">
            <span>Download CV</span>
          </button>
        </div>
      </div>
      <div className="section-home__image">
        <img src="#" alt="" />
      </div>
    </section>
  );
};

export default Home;
