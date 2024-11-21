import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import "./carrusel.css";

const images = ["/images/c1.jpg", "/images/c2.jpg", "/images/c3.jpg"];

const Carrusel = () => {
  return (
    <Swiper
      className="carrusel-container"
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
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
