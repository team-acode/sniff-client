'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import testPerfume from '@/public/images/test-perfume.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
  return (
    <Swiper
      pagination={{ type: 'bullets' }}
      modules={[Navigation, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-96 w-full rounded-lg"
    >
      <SwiperSlide>
        <Image
          src={testPerfume}
          alt="Perfume"
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={testPerfume}
          alt="Perfume"
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={testPerfume}
          alt="Perfume"
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
