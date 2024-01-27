import React, { useState } from 'react';
import { Wood, Indiv, Fruit, Flower } from '@/public/images';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';

interface MainProps {
  updateSelection: (selection: string[]) => void;
}

const Main = ({ updateSelection }: MainProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    let newSelectedOptions = [...selectedOptions];

    if (event.target.checked) {
      if (newSelectedOptions.length >= 2) {
        return;
      }
      newSelectedOptions.push(value);
    } else {
      newSelectedOptions = newSelectedOptions.filter(
        (option) => option !== value,
      );
    }

    setSelectedOptions(newSelectedOptions);
    updateSelection(newSelectedOptions);
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
    <div className="mx-4 mt-4">
      <div className="flex flex-col">
        <div className="h0 mb-12 ">
          <div>어떤 향이 주로 나면</div>
          <div>좋을 것 같나요?</div>
        </div>
        <div className="text-gray-500 body2 mb-3">*최대 2개 선택 가능</div>
        <div className="flex flex-wrap gap-x-2.5 gap-y-3 justify-center">
          {options.map((option) => (
            <div key={option.id} className="flex flex-col items-center">
              <input
                id={option.id}
                type="checkbox"
                name="main"
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <label
                htmlFor={option.id}
                className={`block w-[166px] h-[126px] text-center border ${
                  selectedOptions.includes(option.id)
                    ? 'bg-acodegray-50 border-acodegray-100'
                    : 'bg-white border-acodegray-100'
                } rounded cursor-pointer p-4 flex flex-col items-center`}
              >
                <div className="w-[88px] h-[66px] mb-2 relative flex justify-center">
                  <Image src={option.img} alt={`${option.id} main`} />
                </div>
                <div className="text-acodeblack body1">{option.label}</div>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[40px] left-0 right-0 flex justify-center">
        <button
          type="button"
          onClick={() => swiper.slideNext()}
          className={`px-4 rounded-lg h-[56px] w-[343px] inline-flex items-center justify-center ${
            selectedOptions.length > 0
              ? 'bg-black text-white'
              : 'bg-gray-300 text-white'
          }`}
          disabled={selectedOptions.length === 0}
        >
          다음
        </button>
      </div>
    </div>
  );
};
export default Main;
