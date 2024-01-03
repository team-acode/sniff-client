'use client';

import { ArrowDownIcon } from '@/public/images';
import React from 'react';

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
  return (
    <ul className="mb-3.5 flex ml-4 relative">
      {CATEGORIES_1.map((category) => (
        <li key={category} className="mr-4">
          <button
            className={`text-[14px] font-medium leading-[21px] tracking-[-0.35px]`}
          >
            {category}
          </button>
        </li>
      ))}
      <button className="">
        <ArrowDownIcon className="absolute right-0 bottom-[2px]" />
      </button>
    </ul>
  );
};

export default PerfumeCategoryBar;
