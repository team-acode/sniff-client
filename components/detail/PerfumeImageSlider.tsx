'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import testPerfume from '@/public/images/test-perfume2.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface ImageSliderProps {
  image: string[];
}

const ImageSlider = ({ image }: ImageSliderProps) => {
  const photos = image ? image : [testPerfume, testPerfume, testPerfume];

  return (
    <Swiper
      pagination={{ type: 'bullets' }}
      modules={[Navigation, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-96 w-full"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
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
