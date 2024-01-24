'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookMarkOnIcon,
  BookMarkOffIcon,
  HomeIcon,
  ArrowLeftIcon,
} from '@/public/images';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const router = useRouter();
  const handleClickWishButton = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="flex fixed top-0 items-center w-full max-w-[430px] pt-[13px] pl-[10px] pr-[13px] pb-[11px] bg-acodewhite z-20">
      <button type="button" className="mr-auto" onClick={() => router.back()}>
        <ArrowLeftIcon className="fill-acodeblack" />
      </button>

      <button type="button" className="mr-[11px]">
        {isBookmarked ? (
          <BookMarkOnIcon
            className="cursor-pointer text-black"
            onClick={handleClickWishButton}
          />
        ) : (
          <BookMarkOffIcon
            className="cursor-pointer text-black"
            onClick={handleClickWishButton}
          />
        )}
      </button>
      <Link href="/" className="">
        <HomeIcon className=" fill-acodeblack" />
      </Link>
    </div>
  );
};

export default Navbar;
