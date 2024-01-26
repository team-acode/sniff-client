import React, { useState } from 'react';
import { Wood, Indiv, Fruit, Flower } from '@/public/images';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';

interface PersistenceProps {
  updateSelection: (selection: string) => void;
}

const Main = ({ updateSelection }: PersistenceProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption(value);
    updateSelection(value);
  };

  const options = [
    {
      img: Wood,
      id: '나무/숲 향',
      label: '나무, 숲향',
    },
    {
      img: Flower,
      id: '꽃/허브 향',
      label: '꽃, 허브향',
    },
    {
      img: Fruit,
      id: '과일 향',
      label: '과일 향',
    },
    {
      img: Indiv,
      id: '개성적인 향',
      label: '개성적인 향',
    },
  ];
  const swiper = useSwiper();
  return (
    <div className="mx-4">
      <div className="flex flex-col">
        <div className="h0 mb-12 ">
          <div>어떤 향이 주로 나면</div>
          <div>좋을 것 같나요?</div>
        </div>
        <div className="text-gray-500 mb-4">*복수선택가능</div>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <div key={option.id} className="flex flex-col items-center mb-4">
              <input
                id={option.id}
                type="radio"
                name="main"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <label
                htmlFor={option.id}
                className={`block w-full text-center border ${
                  selectedOption.includes(option.id)
                    ? 'bg-acodegray-50 border-acodegray-100'
                    : 'bg-white border-acodegray-100'
                } rounded cursor-pointer p-4 flex flex-col items-center`}
              >
                <div className="w-20 h-20 mb-2 relative">
                  <Image
                    src={option.img}
                    alt={`${option.id} main`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-acodeblack body1">{option.label}</div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-20 left-0 right-0 flex justify-center px-4">
        <button
          type="button"
          onClick={() => swiper.slideNext()}
          className={`px-4 rounded-lg h-[56px] w-[343px] inline-flex items-center justify-center ${
            selectedOption ? 'bg-black text-white' : 'bg-gray-300 text-white'
          }`}
          disabled={!selectedOption}
        >
          다음
        </button>
      </div>
    </div>
  );
};
export default Main;
