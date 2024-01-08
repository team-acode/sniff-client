import Image from 'next/image';
import Slider from './Slider';
import testPerfume1 from '@/public/images/test-perfume.jpg';
import testPerfume2 from '@/public/images/test-perfume.jpg';
import testPerfume3 from '@/public/images/test-perfume.jpg';
import testPerfume4 from '@/public/images/test-perfume.jpg';
import testPerfume5 from '@/public/images/test-perfume.jpg';

const SimilarPerfume = () => {
  const perfumes = [
    { image: testPerfume1, brand: 'brand', name: 'name1' },
    { image: testPerfume2, brand: 'brand', name: 'name2' },
    { image: testPerfume3, brand: 'brand', name: 'name3' },
    { image: testPerfume4, brand: 'brand', name: 'name4' },
    { image: testPerfume5, brand: 'brand', name: 'name5' },
  ];

  return (
    <div>
      <div className="text-acodeblack h2 mb-5">이런향수 어때요?</div>
      <Slider>
        {perfumes.map((perfume, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Image
              src={perfume.image}
              alt={`Test Perfume ${index + 1}`}
              width={140}
              height={140}
              objectFit="cover"
            />
            <div className="flex flex-row">
              <div className="text-center text-acodegray-500">
                {perfume.brand}
              </div>
              <div className="text-acodegray-200">|</div>
              <div className="text-center text-acodeblack">{perfume.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarPerfume;
