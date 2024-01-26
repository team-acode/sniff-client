'use client';

import { useWish } from '@/hooks/useWish';
import { BookMarkOffIcon, BookMarkOnIcon } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';

interface WishPreviewItemProps {
  perfume: {
    fragranceId: number;
    thumbnail: string;
  };
}

const WishPreviewItem = ({ perfume }: WishPreviewItemProps) => {
  const { isWishOn, handleClickWish } = useWish(perfume.fragranceId, true);
  return (
    <li className="relative h-[158px] w-[138px] shrink-0">
      <Link
        href={`/perfumes/${perfume.fragranceId}`}
        className="h-full w-full border-[1.5px] border-acodegray-50 rounded-[4px] overflow-clip flex items-center justify-center"
      >
        <Image
          src={perfume.thumbnail}
          className="w-[158px] h-[158px]"
          alt="perfume"
          width={158}
          height={158}
        />
        <button
          type="button"
          className="absolute top-[10px] right-[10px]"
          onClick={handleClickWish}
        >
          {isWishOn ? <BookMarkOnIcon className="" /> : <BookMarkOffIcon />}
        </button>
      </Link>
    </li>
  );
};

export default WishPreviewItem;
