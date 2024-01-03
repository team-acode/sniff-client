'use client';

import { ArrowDownIcon, ArrowUpIcon } from '@/public/images';
import React, { useState } from 'react';

const CATEGORIES_1 = [
  '우디',
  '시트러스',
  '아로마틱',
  '플로럴',
  '푸제르',
  '스파이시',
];

const CATEGORIES_2 = [
  '푸르티',
  '시프레',
  '알데히드',
  '레더',
  '그린',
  '오리엔탈',
];

const PerfumeCategoryBar = () => {
  const [isCategorySpread, setIsCategorySpread] = useState<boolean>(false);

  return (
    <div className="relative">
      <ul className="mb-3.5 flex ml-4 relative h-6">
        {CATEGORIES_1.map((category) => (
          <li key={category} className="mr-4">
            <button className={`body2 font-medium`}>{category}</button>
          </li>
        ))}
        <button
          className="absolute right-0 bottom-[2px]"
          onClick={() => setIsCategorySpread((state) => !state)}
        >
          {isCategorySpread ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </button>
      </ul>
      {isCategorySpread ? (
        <div className="absolute top-[38px] px-7 pt-[22px] border-t border-acodegray-100 bg-acodewhite w-full grid grid-cols-3 gap-x-[26px] gap-y-2">
          {CATEGORIES_1.concat(CATEGORIES_2).map((category) => (
            <button
              key={category}
              className="w-[89px] h-9 text-left text-acodeblack text-[16px] font-medium tracking-[-0.4px]"
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PerfumeCategoryBar;
