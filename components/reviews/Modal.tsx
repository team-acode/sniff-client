import React, { useState } from 'react';

interface ModalProps {
  onReturn: (value: any) => void;
}

function Modal({ onReturn }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const MODALOPTIONS = [
    '시크한',
    '성숙한',
    '고급스러운',
    '우아한',
    '남성적인',
    '편안한',
    '차분한',
    '중성적인',
    '친근한',
    '깨끗한',
    '포근한',
    '사랑스러운',
    '관능적인',
    '은은한',
    '활기찬',
    '밝은',
    '화사한',
    '여성스러운',
    '청순한',
    '무게감있는',
    '가벼운',
    '부드러운',
  ];

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

  return (
    <div>
      <div className="flex mx-4">
        <div className="flex w-1/5 items-center justify-start review-3">
          스타일
        </div>
        <div className="flex w-full overflow-x-auto">
          <div className="flex whitespace-nowrap">
            {selectedOptions.map((option, index) => (
              <div key={index} className="flex items-center mr-1">
                <span className="px-2.5 py-2 body2 text-white bg-black rounded-full border flex items-center justify-center">
                  {option}
                  <button className="ml-1" onClick={() => removeOption(option)}>
                    X
                  </button>
                </span>
              </div>
            ))}
          </div>
          {selectedOptions.length < 3 && (
            <button
              onClick={handleModalOpen}
              className="px-2.5 py-2 body2 text-acodegray-400 rounded-full border flex items-center justify-center"
            >
              <span className="mr-2 ml-2 text-acodeblack">+</span>
              {selectedOptions.length === 0 && '어떤 스타일과 어울릴까요?'}
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
          <div className="bg-white shadow-lg mx-auto w-full">
            <div className="flex justify-center item-center p-4">
              <div>
                <div className="h1 text-acodblack text-center">스타일</div>
                <div className="caption2 text-acodegray-500">
                  *최대 3개까지 고를 수 있습니다.
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-x-2.5 gap-y-3 p-4">
              {MODALOPTIONS.map((option, index) => (
                <button
                  key={index}
                  className={`${
                    selectedOptions.includes(option)
                      ? 'bg-acodeblack text-white border-acodeblack'
                      : 'text-acodegray-400 border-acodeblack'
                  } rounded-full p-2 border-2 border-acodegray-100 `}
                  onClick={() => toggleOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-center p-4">
              <button
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
