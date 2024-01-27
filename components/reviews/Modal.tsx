import { STYLEOPTIONS } from '@/constants/styles';
import React, { useState, useEffect } from 'react';

interface ModalProps {
  onReturn: (value: any) => void;
}

function Modal({ onReturn }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const removeOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  const completeSelection = () => {
    onReturn(selectedOptions);
    handleModalClose();
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <div>
      <div className="flex mx-4">
        <div className="flex w-[71px] shrink-0 items-center justify-start review-3">
          스타일
        </div>
        <div className="flex w-full overflow-x-auto">
          <div className="flex whitespace-nowrap">
            {selectedOptions.map((option) => (
              <div key={option} className="flex items-center mr-1">
                <span className="px-2.5 py-2 body2 text-white bg-black rounded-full border flex items-center justify-center">
                  {option}
                  <button
                    type="button"
                    className="ml-1"
                    onClick={() => removeOption(option)}
                  >
                    X
                  </button>
                </span>
              </div>
            ))}
          </div>
          {selectedOptions.length < 3 && (
            <button
              type="button"
              onClick={handleModalOpen}
              className="px-2.5 py-1 body2 h-[30px] text-acodegray-400 rounded-full border flex items-center justify-center"
            >
              <span className="w-6 h-6 text-acodeblack mr-[2px] text-[20px]">
                +
              </span>
              {selectedOptions.length === 0 && '어떤 스타일과 어울릴까요?'}
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
          <div className="bg-white shadow-lg mx-auto w-full h-[491px]">
            <div className="flex flex-col justify-center items-center mt-[26px] w-full">
              <div className="h1 text-acodblack mb-[10px]">스타일</div>
              <div className="caption2 text-acodegray-300">
                *최대 3개까지 고를 수 있습니다
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-x-2.5 gap-y-3 mt-6 mb-5 mx-[30px]">
              {STYLEOPTIONS.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`h-8 px-[9px] py-[2px] border-[1.5px] ${
                    selectedOptions.includes(option)
                      ? 'bg-acodeblack text-white border-acodeblack'
                      : 'text-acodegray-400 border-acodegray-100'
                  } rounded-[50px]`}
                  onClick={() => toggleOption(option)}
                >
                  <span className="text-[18px] font-semibold leading-[27px] tracking-[-0.45px]">
                    {option}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-center pb-[18px]">
              <button
                type="button"
                className="bg-acodeblack w-full text-white py-3 px-4 rounded"
                onClick={completeSelection}
                disabled={selectedOptions.length === 0}
              >
                선택완료
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
