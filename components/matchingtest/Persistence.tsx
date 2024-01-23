import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
import { PreviousIcon } from '@/public/images';
import Link from 'next/link';
interface PersistenceProps {
  updateSelection: (selection: string[]) => void;
}

const Persistence = ({ updateSelection }: PersistenceProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedOption(value);
    updateSelection([value]);
  };

  const options = [
    {
      id: 'EDC',
      label: '생각날 때마다 가볍게 뿌리고 싶다',
      label2: '1-2시간',
    },
    { id: 'EDT', label: '하루 두 세 번만 뿌리고 싶다', label2: '3-4시간' },
    {
      id: 'EDP',
      label: '한 번 뿌린 향이 하루종일 짙게 남아있으면 좋겠다',
      label2: '5-6시간',
    },
  ];
  const swiper = useSwiper();
  return (
    <div className="mx-4">
      <div className="my-4">
        <div>
          <Link href="/">
            <PreviousIcon />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h0 mb-12 ">
          <div>한 번 뿌릴 때,</div>
          <div>향이 얼마나 지속되면 좋을까요?</div>
        </div>
        <div className="text-gray-500 mb-4">*복수선택가능</div>
        <div>
          {options.map((option) => (
            <div key={option.id} className="flex items-center mb-5">
              <input
                id={option.id}
                type="radio"
                name="persistence"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={handleRadioChange}
                className="sr-only"
              />
              <label
                htmlFor={option.id}
                className={`block w-full text-start py-2 px-4 border ${
                  selectedOption.includes(option.id)
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
        <div className="fixed bottom-20 left-0 right-0 flex justify-center px-4">
          <button
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
    </div>
  );
};

export default Persistence;
