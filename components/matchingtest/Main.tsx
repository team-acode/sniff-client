import React, { useState } from 'react';
import { Wood, Indiv, Fruit, Flower } from '@/public/images';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';

interface PersistenceProps {
  updateSelection: (selection: string[]) => void;
}

const Main = ({ updateSelection }: PersistenceProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newSelectedOptions = event.target.checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((option) => option !== value);

    setSelectedOptions(newSelectedOptions);
    updateSelection(newSelectedOptions);
  };

  const options = [
    {
      img: Wood,
      id: 'wood',
      label: '나무, 숲향',
    },
    {
      img: Flower,
      id: 'flower',
      label: '꽃, 허브향',
    },
    {
      img: Fruit,
      id: 'fruit',
      label: '과일 향',
    },
    {
      img: Indiv,
      id: 'indiv',
      label: '개성적인 향',
    },
  ];
  const swiper = useSwiper();
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-xl font-semibold mb-4">
          <div>어떤 향이 주로 나면</div>
          <div>좋을 것 같나요?</div>
        </div>
        <div className="text-gray-500 mb-4">*복수선택가능</div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {options.map((option) => (
            <div key={option.id} className="mb-2">
              <input
                id={option.id}
                type="checkbox"
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <label
                htmlFor={option.id}
                className={`block w-full text-center py-2 px-4 border ${
                  selectedOptions.includes(option.id)
                    ? 'bg-acodegray-50 border-acodegray-100'
                    : 'bg-white border-acodegray-100'
                } rounded cursor-pointer flex flex-col items-center justify-center`}
              >
                <div className="w-20 h-20 mb-2 relative">
                  <Image
                    src={option.img}
                    alt={`${option.id} main`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-acodeblack">{option.label}</div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => swiper.slideNext()}
        className="px-4 bg-black text-white rounded-lg h-[56px] w-[343px] inline-flex items-center justify-center"
      >
        다음
      </button>
    </div>
  );
};
export default Main;
