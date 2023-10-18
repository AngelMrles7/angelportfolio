import { useLanguage } from "../../../hooks/useLanguage";
import { Fade } from "react-awesome-reveal";
import image from "../../../assets/image-fon.svg";
import hand from "../../../assets/hand_icon.svg";
import cv_angel_es from "../../../assets/download/cv_angel_morales_es.pdf";
import cv_angel_en from "../../../assets/download/cv_angel_morales_en.pdf";

const Home = () => {
  const {
    language: { sections },
    languageState,
  } = useLanguage();

  return (
    <section className="home-section" id="home">
      <div className="home-section__info">
        {/* Title */}
        <h1 className="home-section__info__title">
          <Fade cascade damping={1} triggerOnce={true}>
            <span>
              {sections.home.title.hello}
              <img className="hand-icon" src={hand} alt="" />
            </span>
            <span className="gradient-text-effect">
              {sections.home.title.name}
            </span>
            <span className="font-size-32">{sections.home.title.position}</span>
          </Fade>
        </h1>

        <div className="home-section__info__btns">
          <a
            href={languageState === "es" ? cv_angel_es : cv_angel_en}
            className="download-button"
            aria-label="download cv"
            download
          >
            <span>{sections.home.title.btnText} CV</span>
          </a>
        </div>
      </div>
      <div className="home-section__image">
        {/* Imagen */}

        <img src={image} alt="imagen svg relacionada a programacion" />
      </div>
    </section>
  );
};

export default Home;
