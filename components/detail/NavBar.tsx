'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookMarkOnIcon,
  BookMarkOffIcon,
  HomeIcon,
  ArrowLeftIcon,
} from '@/public/images';
import { useRouter } from 'next/navigation';
import { useWish } from '@/hooks/useWish';

interface NavBarProps {
  id: string;
  initialWishState: boolean;
}

const Navbar = ({ id, initialWishState }: NavBarProps) => {
  const { isWishOn, handleClickWish } = useWish(Number(id), initialWishState);

  const router = useRouter();

  return (
    <div className="flex fixed top-0 items-center w-full max-w-[430px] pt-[13px] pl-[10px] pr-[13px] pb-[11px] bg-acodewhite z-20">
      <button type="button" className="mr-auto" onClick={() => router.back()}>
        <ArrowLeftIcon className="fill-acodeblack" />
      </button>

      <button type="button" className="mr-[11px]" onClick={handleClickWish}>
        {isWishOn ? (
          <BookMarkOnIcon className="cursor-pointer text-black" />
        ) : (
          <BookMarkOffIcon className="cursor-pointer text-black" />
        )}
      </button>
      <Link href="/" className="">
        <HomeIcon className=" fill-acodeblack" />
      </Link>
    </div>
  );
};

export default Navbar;
