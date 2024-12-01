import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./carrusel.css";

const images = ["/images/c1.jpg", "/images/c3.jpg", "/images/c4.jpg", "/images/c5.jpg", "/images/c7.jpg"];

const Carrusel = () => {
  return (
    <Swiper
      className="carrusel-container"
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      //navigation
      //pagination={{ clickable: true }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-full h-auto object-cover "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;
