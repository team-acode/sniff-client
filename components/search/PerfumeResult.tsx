import React from 'react';
import { TPerfume } from '@/types';
import PerfumeItem from '@/components/common/PerfumeItem';
import CategoryDropdown from '@/components/common/CategoryDropdown';

interface PerfumeResultProps {
  perfumes: TPerfume[];
  count: number;
}

const PerfumeResult = ({ perfumes, count }: PerfumeResultProps) => {
  return (
    <div className="pt-9 px-4">
      <div className="mb-5 h-8 flex items-center">
        <h3 className="text-[16px] font-semibold leading-[24px] tracking-[-0.4px] text-acodeblack mr-auto">
          상품 <span className="text-acodegray-400 font-medium">{count}건</span>
        </h3>
        <CategoryDropdown />
      </div>
      <div className="grid grid-cols-2 gap-x-[15px] gap-y-[30px] mb-[154px]">
        {perfumes.map((perfume) => (
          <PerfumeItem key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </div>
  );
};

export default PerfumeResult;
