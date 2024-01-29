'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SliderProps {
  slides: React.ReactNode[];
  swiperRef: React.RefObject<any>;
  keys: string[];
}

const Slider = ({ slides, swiperRef, keys }: SliderProps) => {
  return (
    <div>
      <div className="slider-container mt-[54px]">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation]}
          pagination={{
            type: 'progressbar',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} matching-custom-progress"></span>`;
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          simulateTouch={false}
          allowTouchMove={false}
          className="h-screen w-full matching-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={keys[index]}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
