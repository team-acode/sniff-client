'use client';
import React, { useState } from 'react';
import ArrowDownIcon2 from '@/public/images/arrow-down-icon.svg';
import ArrowUpIcon2 from '@/public/images/arrow-up-icon.svg';

type DropdownOption = {
  capacity: string;
  price: number;
};

type DropdownButtonProps = {
  options: DropdownOption[];
};

const DropdownButton = ({ options }: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options[0],
  );

  const handleOptionClick = (option: DropdownOption) => {
    setIsOpen(false);
    setSelectedOption(option);
  };

  const buttonText = `${selectedOption.capacity}ml`;

  return (
    <div className="flex items-center">
      {/* Dropdown Button */}
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between items-center text-acodegray-400 rounded border-none bg-white px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {buttonText}
          {isOpen ? <ArrowUpIcon2 /> : <ArrowDownIcon2 />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 z-10 w-full origin-top-right rounded-md bg-white focus:outline-none">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options
                .filter((opt) => opt.capacity !== selectedOption.capacity)
                .map((option, index) => (
                  <button
                    key={index}
                    className="block w-full px-2 py-1 text-left text-sm text-acodegray-400 hover:bg-acodegray-100 font-medium"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.capacity}ml
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
      {/* Price Display */}
      <div className="ml-2 body2 text-acodegray-400">
        {selectedOption.price.toLocaleString()}원
      </div>
    </div>
  );
};

export default DropdownButton;
