'use client';

import { useWish } from '@/hooks/useWish';
import {
  BookMarkOnIcon,
  BookMarkOffIcon,
  SmallCircleIcon,
} from '@/public/images';
import { TPerfume } from '@/types';
import { convertNum } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';

interface WishItemProps {
  perfume: TPerfume;
}

const WishItem = ({ perfume }: WishItemProps) => {
  const { isWishOn, handleClickWish } = useWish(perfume.id, perfume.scraped);

  return (
    <li className="h-24 w-full">
      <Link href={`/perfumes/${perfume.id}`} className="flex w-full h-full">
        <Image
          src={perfume.imageUrl}
          className="rounded-[4px] mr-[15px]"
          alt="perfume"
          width={96}
          height={96}
        />
        <div className="mr-auto mt-[10.5px] h-[75px]">
          <div className="text-[14px] text-acodegray-700 font-medium tracking-[-0.28px] h-[17px] leading-normal">
            {perfume.brandName}
          </div>
          <div className="flex mt-[7px] gap-[7.2px] items-center h-[19px]">
            <span className="text-[16px] text-acodeblack font-semibold tracking-[-0.32px]">
              {perfume.perfumeName}
            </span>
            <SmallCircleIcon />
            <span className="text-[14px] text-acodegray-500 font-medium tracking-[-0.28px]">
              {perfume.option}
            </span>
          </div>
          <div className="flex mt-4 gap-[7px] text-[14px] text-acodegray-500 font-medium tracking-[-0.28px] h-[17px]">
            <span className="">{convertNum(perfume.price)}원</span>
            <span className="">{perfume.capacity}</span>
          </div>
        </div>
        <button
          type="button"
          className="mt-[10.5px] h-fit"
          onClick={handleClickWish}
        >
          {isWishOn ? <BookMarkOnIcon /> : <BookMarkOffIcon />}
        </button>
      </Link>
    </li>
  );
};

export default WishItem;
