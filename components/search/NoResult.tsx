import { AcodeLogoLong } from '@/public/images';
import React from 'react';

const NoResult = () => {
  return (
    <div className="mt-[172px] flex flex-col items-center">
      <AcodeLogoLong />
      <p className="mt-4 text-[16px] text-acodegray-300 font-medium tracking-[-0.4px]">
        검색 결과가 없습니다.
      </p>
    </div>
  );
};

export default NoResult;
