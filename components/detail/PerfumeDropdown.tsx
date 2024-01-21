'use client';

import React, { useEffect, useRef, useState } from 'react';
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

  const dropMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      if (isOpen && !dropMenuRef?.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isOpen]);

  return (
    <div className="relative flex items-center mt-[3px] ml-[13px]">
      {/* Dropdown Button */}
      <div
        className={`absolute top-0 inline-block pt-[6px] w-16 text-left rounded-sm ${
          isOpen ? 'bg-white shadow-[0_4px_17px_0_rgba(0,0,0,0.15)]' : ''
        }`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-[21px] pl-[6px] body2 font-medium flex justify-center items-center text-start text-acodegray-900"
        >
          <span className="mr-[2px] w-[38px]">{`${selectedOption.capacity}ml`}</span>
          {isOpen ? <ArrowUpIcon2 /> : <ArrowDownIcon2 />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="w-full pt-[5px] pb-[2px] bg-white gap-y-[1px] border-t-[1px] border-acodegray-100"
            ref={dropMenuRef}
          >
            {options
              .filter((opt) => opt.capacity !== selectedOption.capacity)
              .map((option) => (
                <button
                  type="button"
                  key={option.capacity}
                  className="body2 block w-full pl-[6px] text-start text-acodegray-400 hover:bg-acodegray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.capacity}ml
                </button>
              ))}
          </div>
        )}
      </div>

      {/* Price Display */}
      <div className="ml-[73px] pt-[6px] body2 text-acodegray-400">
        {selectedOption.price.toLocaleString()}원
      </div>
    </div>
  );
};

export default DropdownButton;
