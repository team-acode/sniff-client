'use client';

import { CATEGORIES } from '@/constants/categories';
import { ArrowDownIcon, ArrowUpIcon } from '@/public/images';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

interface PerfumeCategoryBarProps {
  searchParams: { [key: string]: string | undefined };
  selectedCategory: string;
}

const PerfumeCategoryBar = ({
  searchParams,
  selectedCategory,
}: PerfumeCategoryBarProps) => {
  const [isCategorySpread, setIsCategorySpread] = useState<boolean>(false);
  const categoryBarRef = useRef<HTMLUListElement>(null);
  const scrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  };

  return (
    <div className="relative">
      {isCategorySpread ? (
        <span
          key={selectedCategory}
          className="body2 font-medium text-acodeblack h-6 ml-4 pt-[2px] shrink-0 absolute w-full bg-white z-10"
        >
          {selectedCategory}
        </span>
      ) : (
        ''
      )}
      <ul
        className="relative mb-3.5 flex ml-4 pr-[48px] h-6 overflow-auto"
        ref={categoryBarRef}
      >
        {CATEGORIES.map((category) => (
          <li key={category} className="mr-4 shrink-0">
            <Link
              href={{
                pathname: '/',
                query: {
                  ...searchParams,
                  category,
                },
              }}
              scroll={false}
              className={`body2 font-medium ${
                selectedCategory === category
                  ? 'text-acodeblack'
                  : 'text-acodegray-300'
              }`}
              id={category}
              onClick={(e) => {
                e.currentTarget.scrollIntoView(scrollOptions);
              }}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="absolute right-0 bottom-[2px] z-20"
        onClick={() => setIsCategorySpread((state) => !state)}
      >
        {isCategorySpread ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
      {isCategorySpread ? (
        <div className="absolute z-10 top-[38px] px-7 pt-[22px] pb-[55px] border-t border-acodegray-100 bg-acodewhite w-full grid grid-cols-3 gap-x-[26px] gap-y-2">
          {CATEGORIES.map((category) => (
            <Link
              href={{
                pathname: '/',
                query: {
                  ...searchParams,
                  category,
                },
              }}
              key={category}
              className={`w-[89px] h-9 text-left ${
                selectedCategory === category
                  ? 'text-acodeblack'
                  : 'text-acodegray-300'
              } text-[16px] font-medium tracking-[-0.4px]`}
              onClick={() => {
                const element = document.getElementById(category);
                setTimeout(() => element?.scrollIntoView(scrollOptions), 200);
                setIsCategorySpread(false);
              }}
            >
              {category}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PerfumeCategoryBar;
