import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='p-4'>
            <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[100%] h-[100%] rounded-[30px]"
      >
        <SwiperSlide className="bg-red-500">Anuncio 1</SwiperSlide>
        <SwiperSlide className="bg-green-500">Anuncio 2</SwiperSlide>
        <SwiperSlide className="bg-yellow-500">Anuncio 3</SwiperSlide>
        <SwiperSlide className="bg-blue-500">Anuncio 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
