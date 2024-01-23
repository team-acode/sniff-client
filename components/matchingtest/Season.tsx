import React, { useState } from 'react';
import { Spring, Summer, Autumn, Winter } from '@/public/images';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';
interface PersistenceProps {
  updateSelection: (selection: string[]) => void;
}

const Season = ({ updateSelection }: PersistenceProps) => {
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
      img: Spring,
      id: 'spring',
      label: '봄',
    },
    {
      img: Summer,
      id: 'summer',
      label: '여름',
    },
    {
      img: Autumn,
      id: 'autumn',
      label: '가을',
    },
    {
      img: Winter,
      id: 'winter',
      label: '겨울',
    },
  ];
  const swiper = useSwiper();
  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold mb-4">
        <div>어떤 계절에 뿌릴</div>
        <div>향수를 찾으시나요?</div>
      </div>
      <div className="text-gray-500 mb-4">*복수선택가능</div>
      <div>
        {options.map((option) => (
          <div key={option.id} className="flex items-center mb-2">
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
              } rounded cursor-pointer`}
            >
              <div className="w-20 h-20 mr-4 relative">
                <Image
                  src={option.img}
                  alt={`${option.id} season`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col body1">
                <div className="text-acodeblack">{option.label}</div>
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="px-4">
        <button
          onClick={() => swiper.slideNext()}
          className=" bg-black text-white rounded-lg h-[56px] w-[343px] inline-flex items-center justify-center"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Season;
