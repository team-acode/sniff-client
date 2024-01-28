import { PreviousIcon } from '@/public/images';
import { useRouter } from 'next/navigation';

interface SliderProps {
  swiperRef: React.RefObject<any>;
}
const SwiperHeader = ({ swiperRef }: SliderProps) => {
  const router = useRouter();

  const handlePrev = () => {
    if (swiperRef && swiperRef.current && swiperRef.current.swiper) {
      const swiperIndex = swiperRef.current.swiper.activeIndex;
      if (swiperIndex === 0) {
        router.push('/');
      } else {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };
  return (
    <div>
      <div className="py-2.5 px-2.5">
        <PreviousIcon onClick={handlePrev} />
      </div>
    </div>
  );
};

export default SwiperHeader;
