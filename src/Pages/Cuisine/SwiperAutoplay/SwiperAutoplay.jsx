import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { dataitems } from "./data";

import "./SwiperAutoplay.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperAutoplay() {
  return (
    <div className="swiperAutoplay">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        {dataitems.map((item, key) => {
          return (
            <SwiperSlide className={`swiperSlide ${item.class}`} >
              <img src={item.imagePath} alt={item.altNameSpace} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
