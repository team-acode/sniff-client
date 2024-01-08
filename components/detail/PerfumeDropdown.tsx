'use client';
import React, { useState } from 'react';
import ArrowDownIcon2 from '@/public/images/arrow-down-icon2.svg';
import ArrowUpIcon2 from '@/public/images/arrow-up-icon2.svg';

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
          className="w-20 h-4 body2 flex justify-center items-center text-start text-acodeblack border-none bg-white"
        >
          {buttonText}
          {isOpen ? <ArrowUpIcon2 /> : <ArrowDownIcon2 />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="w-20 absolute bg-white focus:outline-none">
            <div
              className=""
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options
                .filter((opt) => opt.capacity !== selectedOption.capacity)
                .map((option, index) => (
                  <button
                    key={index}
                    className="body2 block w-full px-2 py-1 text-left text-start text-acodegray-400 hover:bg-acodegray-100 font-medium"
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
