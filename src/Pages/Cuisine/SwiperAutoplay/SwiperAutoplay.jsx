// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { dataitems } from "./data";

import "./SwiperAutoplay.scss";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function SwiperAutoplay() {
  return (
    <div className="swiperAutoplay">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
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
            <SwiperSlide className={`swiperSlide ${item.class}`} key={key}>
              <img src={item.imagePath} alt={item.altNameSpace} />
              <div className="opacity-layer"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
