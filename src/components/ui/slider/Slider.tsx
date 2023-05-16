import React from "react";
// import Swiper core and required modules
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Slider = () => {
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
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/15372904/pexels-photo-15372904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="swiper-slide__content">
            <h4 className="swiper-slide__content__title">Repositorio</h4>
            <p className="swiper-slide__content__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              incidunt corporis error labore ipsam distinctio ab eum similique
              dolore impedit. Recusandae nisi nulla in deleniti fugit numquam
              molestias quia iste?
            </p>

            <a
              href="https://github.com/AngelMrles7"
              className="swiper-slide__content__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              See
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-item slider-item__2"
            src="https://media.istockphoto.com/id/1415779781/es/foto/amenazas-a-la-ciberseguridad.jpg?s=612x612&w=0&k=20&c=oSLmOO0meaTN0TFzSEXC0iGRYx_-KrCM7_5GN-YkFmo="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-item slider-item__3"
            src="https://media.istockphoto.com/id/1078350546/es/vector/isom%C3%A9trica-smartphone-con-diferentes-aplicaciones-aplicaciones-servicios-en-l%C3%ADnea-software.jpg?s=612x612&w=0&k=20&c=m35ASPKJ1F4QUl7_L5K4qhXiLvF-Vi8EYugz7igy9qY="
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-item slider-item__4"
            src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-item slider-item__5"
            src="https://media.istockphoto.com/id/1213891793/es/vector/tres-cartas-de-as-ilustraci%C3%B3n-de-casino-de-p%C3%B3quer-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=-Gcxd7y-rTTQrO_fDg0X_YLQN8c61LDYSJsP5YdlG8U="
            alt=""
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
