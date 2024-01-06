'use client';

import BottomModal from '@/components/common/BottomModal';
import { CATEGORIES_ALL } from '@/constants/categories';
import { GrayArrowDownIcon } from '@/public/images';
import { useState } from 'react';

const CategoryDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const initialState = CATEGORIES_ALL.reduce(
    (acc, value) => ({ ...acc, [value]: false }),
    {},
  );
  const [categoryCount, setCategoryCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<{
    [key: string]: boolean;
  }>(initialState);

  return (
    <>
      {isModalOpen ? (
        <BottomModal
          modalStyle="h-[442px] text-acodeblack py-[18px] px-[27px] flex flex-col"
          closeModal={() => setIsModalOpen(false)}
        >
          <h3 className="w-full text-center text-[#191f28] text-[20px] font-semibold leading-[28px]">
            계열 선택
          </h3>
          <div className="grid grid-cols-3 mt-8 gap-x-[27px] gap-y-[10px]">
            {CATEGORIES_ALL.map((category) => (
              <button
                type="button"
                key={category}
                className={`body1 h-9 transition ${
                  selectedCategory[category]
                    ? 'text-acodewhite bg-acodeblack'
                    : 'bg-acodegray-50'
                }`}
                onClick={() => {
                  if (selectedCategory[category])
                    setCategoryCount((state) => state - 1);
                  else setCategoryCount((state) => state + 1);
                  setSelectedCategory((categories) => ({
                    ...categories,
                    [category]: !categories[category],
                  }));
                }}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 body1 text-acodegray-300 ml-auto w-[89px] h-9"
            onClick={() => {
              setSelectedCategory(initialState);
              setCategoryCount(0);
            }}
          >
            초기화
          </button>
          <button
            type="button"
            className={`mt-6 h2 text-acodewhite w-full h-14 transition ${
              categoryCount > 0 ? 'bg-acodeblack' : 'bg-acodegray-300'
            }`}
          >
            선택 완료
          </button>
        </BottomModal>
      ) : null}
      <button
        type="button"
        className="text-acodeblack font-medium leading-[16px] tracking-[-0.4px] w-[70px] pl-3 h-8 rounded-[50px] border border-gray-200 justify-start items-center inline-flex"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="">계열</span>
        <GrayArrowDownIcon className="" />
      </button>
    </>
  );
};

export default CategoryDropdown;
