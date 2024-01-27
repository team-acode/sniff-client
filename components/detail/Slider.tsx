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
      style={{
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide
          style={{ width: '138px', flexShrink: 0 }}
          key={child?.toString()}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
