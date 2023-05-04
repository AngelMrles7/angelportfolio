import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper";
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
        loop={true}
        spaceBetween={0}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1438674720/es/foto/hombre-de-negocios-dedo-t%C3%A1ctil-pantalla-virtual-nft-token-digital-crypto-art-blockchain.jpg?s=612x612&w=0&k=20&c=ONu7dBX2DXhr4OMZb4FIJhQL0i9dotHKpGUNL1nKjDY="
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
            src="https://media.istockphoto.com/id/1427937313/es/vector/la-ia-en-los-tel%C3%A9fonos-asiste-a-las-comunicaciones-con-la-infraestructura-de-la-ciudad.jpg?s=612x612&w=0&k=20&c=U9UGTW07Fi3Y5O2Om1P-8ozCq0zhwLhUe6tt7TtWmEg="
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
