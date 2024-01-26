import React, { useState } from 'react';
import { Spring, Summer, Autumn, Winter } from '@/public/images';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';

interface PersistenceProps {
  updateSelection: (selection: string) => void;
}

const Season = ({ updateSelection }: PersistenceProps) => {
  const [selectedSeason, setSelectedSeason] = useState<string>('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedSeason(value);
    updateSelection(value);
  };

  const options = [
    {
      img: Spring,
      id: '봄',
      label: '봄',
    },
    {
      img: Summer,
      id: '여름',
      label: '여름',
    },
    {
      img: Autumn,
      id: '가을',
      label: '가을',
    },
    {
      img: Winter,
      id: '겨울',
      label: '겨울',
    },
  ];
  const swiper = useSwiper();
  return (
    <div className="mx-4 mt-4">
      <div className="flex flex-col">
        <div className="h0 mb-12">
          <div>어떤 계절에 뿌릴</div>
          <div>향수를 찾으시나요?</div>
        </div>
        <div className="text-gray-500 mb-4">*복수선택가능</div>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <div key={option.id} className="flex flex-col items-center mb-4">
              <input
                id={option.id}
                type="radio"
                name="season"
                value={option.id}
                checked={selectedSeason === option.id}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <label
                htmlFor={option.id}
                className={`block w-full text-center border ${
                  selectedSeason === option.id
                    ? 'bg-acodegray-50 border-acodegray-100'
                    : 'bg-white border-acodegray-100'
                } rounded cursor-pointer p-4 flex flex-col items-center`}
              >
                <div className="w-20 h-20 mb-2 relative flex justify-center">
                  <Image
                    src={option.img}
                    alt={`${option.id} season`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-acodeblack body1">{option.label}</div>
              </label>
            </div>
          ))}
        </div>
        <div className="fixed bottom-20 left-0 right-0 flex justify-center px-4">
          <button
            type="button"
            onClick={() => swiper.slideNext()}
            className={`px-4 rounded-lg h-[56px] w-[343px] inline-flex items-center justify-center ${
              selectedSeason ? 'bg-black text-white' : 'bg-gray-300 text-white'
            }`}
            disabled={!selectedSeason}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Season;
