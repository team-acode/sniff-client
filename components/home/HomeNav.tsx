'use client';

import Category from '@/components/home/Category';
import {
  AcodeLogoSmall,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from '@/public/images';
import Link from 'next/link';
import React, { useState } from 'react';

const HomeNav = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex mt-[3px] ml-[10px] mr-[13px] mb-[11px] relative">
        <button
          type="button"
          className="mt-[6px] mr-auto"
          onClick={() => setIsCategoryOpen(true)}
        >
          <MenuIcon className="" />
        </button>
        <AcodeLogoSmall className="absolute top-[7px] left-1/2 -translate-x-2/4" />
        <SearchIcon className="mt-[3px] mr-[11px]" />
        <Link href="/mypage" className="mt-[3px]">
          <UserIcon />
        </Link>
      </div>
      {isCategoryOpen ? (
        <Category handleClickXButton={() => setIsCategoryOpen(false)} />
      ) : null}
    </>
  );
};

export default HomeNav;
