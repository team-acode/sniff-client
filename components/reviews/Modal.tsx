import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onReturn: (value: any) => void;
}

function Modal({ isOpen, closeModal, onReturn }: ModalProps) {
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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const completeSelection = () => {
    onReturn(selectedOptions);
    closeModal();
  };
  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
      <div className="bg-white shadow-lg mx-auto w-full">
        {/* <div className="flex justify-center item-center p-4">
          <div>
            <div className="h1 text-acodblack text-center">스타일</div>
            <div className="caption2 text-acodegray-500">
              *최대 3개까지 고를 수 있습니다.
            </div>
          </div>
        </div> */}
        <div className="flex justify-center item-center p-4">
          <div>
            <div className="h1 text-acodblack text-center">스타일</div>
            {selectedOptions.length > 0 ? (
              <div className="caption2 text-acodegray-500">
                선택된 스타일: {selectedOptions.join(', ')}
              </div>
            ) : (
              <div className="caption2 text-acodegray-500">
                *최대 3개까지 고를 수 있습니다.
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 p-4">
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
            className="bg-acodeblack w-full text-white  py-3 px-4 rounded"
            onClick={completeSelection}
            disabled={selectedOptions.length === 0}
          >
            선택완료
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
export default Modal;
