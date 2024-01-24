'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <Swiper
      pagination={{ type: 'bullets' }}
      modules={[Navigation, Pagination]}
      // onSwiper={(swiper) => console.log(swiper)}
      className="h-[295px] w-full mt-[54px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image} className="">
          <Image
            src={image}
            alt={`Perfume ${index}`}
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
