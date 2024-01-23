import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';
interface PersistenceProps {
  updateSelection: (selection: string[]) => void;
}

const Individuality = ({ updateSelection }: PersistenceProps) => {
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
      id: 'smoky',
      label: '스모키한',
    },
    {
      id: 'refreshing',
      label: '상큼한',
    },
    {
      id: 'sweet',
      label: '달콤한',
    },
    {
      id: 'fruity',
      label: '과일향 나는',
    },
    {
      id: 'brisk',
      label: '상쾌한',
    },
    {
      id: 'cooling',
      label: '청량한',
    },
    {
      id: 'moist',
      label: '촉촉한',
    },
    {
      id: 'cool',
      label: '시원한',
    },
    {
      id: 'bitter',
      label: '쌉싸름한',
    },
    {
      id: 'cozy',
      label: '포근한',
    },
    {
      id: 'spicy',
      label: '스파이시한',
    },
    {
      id: 'soft',
      label: '부드러운',
    },
    {
      id: 'floral',
      label: '플로럴한',
    },
    {
      id: 'fresh',
      label: '싱그러운',
    },
    {
      id: 'aromatic',
      label: '향긋한',
    },
    {
      id: 'rich',
      label: '풍부한',
    },
    {
      id: 'natural',
      label: '자연그대로의',
    },
  ];
  const swiper = useSwiper();
  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold mb-4">
        <div>어떤 향이 주로 나면</div>
        <div>좋을 것 같나요?</div>
      </div>
      <div className="text-gray-500 mb-4">*복수선택가능</div>
      {/* Grid container */}
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
              <div className="text-acodeblack">{option.label}</div>
            </label>
          </div>
        ))}
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
export default Individuality;
