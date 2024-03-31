import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './SwiperEffect.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SwiperEffect = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img src="" />

          
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg" alt="Image 1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630968.jpg" alt="Image 2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src=" " alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" " alt="Image 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" " alt="Image 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" " alt="Image 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" " alt="Image 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" " alt="Image 8" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperEffect
