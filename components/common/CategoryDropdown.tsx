'use client';

import BottomModal from '@/components/common/BottomModal';
import { GrayArrowDownIcon } from '@/public/images';
import { useState } from 'react';

const CategoryDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen ? (
        <BottomModal
          modalStyle="h-[442px]"
          closeModal={() => setIsModalOpen(false)}
        >
          안농
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
