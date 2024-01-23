import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';

interface PersistenceProps {
  updateSelection: (selection: string[]) => void;
}

const Persistence = ({ updateSelection }: PersistenceProps) => {
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
      id: 'short',
      label: '생각날 때마다 가볍게 뿌리고 싶다',
      label2: '1-2시간',
    },
    { id: 'medium', label: '하루 두 세 번만 뿌리고 싶다', label2: '3-4시간' },
    {
      id: 'long',
      label: '한 번 뿌린 향이 하루종일 짙게 남아있으면 좋겠다',
      label2: '5-6시간',
    },
  ];
  const swiper = useSwiper();
  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold mb-4">
        <div>한 번 뿌릴 때,</div>
        <div>향이 얼마나 지속되면 좋을까요?</div>
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
              <div className="flex flex-col body1">
                <div className="text-acodeblack">{option.label}</div>
                <div className="text-acodegray-500">{option.label2}</div>
              </div>
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

export default Persistence;
