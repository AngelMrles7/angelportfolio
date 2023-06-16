// import Swiper core and required modules
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useLanguage } from "../../../hooks/useLanguage";
import { SliderContent } from "./SliderContent";
import { projectsData } from "../../../data/projectsImage";

const Slider = () => {
  const {
    language: {
      sections: { projects },
    },
  } = useLanguage();

  return (
    <section className="slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {/* Projects Content */}
        {/* The SliderContent component must be wrapped in a SwiperSlide
        component. */}
        <SwiperSlide>
          <SliderContent
            key={1}
            projectData={projectsData.firstProjects}
            projectsInfo={projects.projectsInfo?.[0]}
          />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Slider;
