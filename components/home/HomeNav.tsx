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
      <div className="fixed top-0 flex items-center w-full max-w-[430px] h-[54px] pt-[13px] pl-[10px] pr-[13px] pb-[11px] bg-acodewhite z-30">
        <button
          type="button"
          className="mr-auto"
          onClick={() => setIsCategoryOpen(true)}
        >
          <MenuIcon className="" />
        </button>
        <AcodeLogoSmall className="absolute top-[20.5px] left-1/2 -translate-x-2/4" />
        <Link href="/search" className="mt-[3px] mr-[11px]">
          <SearchIcon className="fill-acodeblack" />
        </Link>
        <Link href="/mypage" className="mt-[3px]">
          <UserIcon className="fill-acodeblack" />
        </Link>
      </div>
      {isCategoryOpen ? (
        <Category handleClickXButton={() => setIsCategoryOpen(false)} />
      ) : null}
    </>
  );
};

export default HomeNav;
