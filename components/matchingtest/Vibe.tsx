'use client';
import React, { useState } from 'react';
import { useSwiper } from 'swiper/react';
interface VibeProps {
  updateSelection: (selection: string[]) => void;
  handleSubmit: () => void;
}

const Vibe = ({ updateSelection, handleSubmit }: VibeProps) => {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newSelectedVibes = event.target.checked
      ? [...selectedVibes, value]
      : selectedVibes.filter((vibe) => vibe !== value);

    setSelectedVibes(newSelectedVibes);
    updateSelection(newSelectedVibes);
  };

  const vibeOptions = [
    { id: 'chic', label: '시크한' },
    { id: 'mature', label: '성숙한' },
    { id: 'luxurious', label: '고급스러운' },
    { id: 'elegant', label: '우아한' },
    { id: 'masculine', label: '남성적인' },
    { id: 'comfortable', label: '편안한' },
    { id: 'calm', label: '차분한' },
    { id: 'neutral', label: '중성적인' },
    { id: 'friendly', label: '친근한' },
    { id: 'clean', label: '깨끗한' },
    { id: 'lovely', label: '사랑스러운' },
    { id: 'sensual', label: '관능적인' },
    { id: 'subtle', label: '은은한' },
    { id: 'lively', label: '활기찬' },
    { id: 'bright', label: '밝은' },
    { id: 'vivid', label: '화사한' },
    { id: 'feminine', label: '여성스러운' },
    { id: 'innocent', label: '청순한' },
    { id: 'weighty', label: '무게감있는' },
    { id: 'soft', label: '부드러운' },
    { id: 'cozy', label: '포근한' },
    { id: 'light', label: '가벼운' },
  ];
  const swiper = useSwiper();
  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold mb-4">
        <div>어떤 분위기를 원하시나요?</div>
      </div>
      <div className="text-gray-500 mb-4">*복수선택가능</div>
      {/* Grid container */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {vibeOptions.map((option) => (
          <div key={option.id} className="mb-2">
            <input
              id={option.id}
              type="checkbox"
              value={option.id}
              checked={selectedVibes.includes(option.id)}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <label
              htmlFor={option.id}
              className={`block w-full text-center py-2 px-4 border ${
                selectedVibes.includes(option.id)
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
        onClick={handleSubmit}
        className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700" // Adjust the button styling as needed
      >
        제출
      </button>
    </div>
  );
};

export default Vibe;
