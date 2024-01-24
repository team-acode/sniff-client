'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps {
  children: React.ReactNode;
}
const Slider = ({ children }: SliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={14}
      slidesPerView={2.5}
      className="mySwiper"
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
