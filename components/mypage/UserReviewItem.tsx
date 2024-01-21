'use client';

import MyPageModalTemplate from '@/components/mypage/MyPageModalTemplate';
import {
  EmptyStarIcon,
  FullStarIcon,
  SmallCircleIcon,
  SmallXIcon,
} from '@/public/images';
import { TUserReview } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface UserReviewItemProps {
  review: TUserReview;
}

export const rateStarHandler = (rating: number) => {
  const stars = [];

  for (let i = 0; i < 5; i += 1) {
    if (i < rating) {
      stars.push(<FullStarIcon key={i} />);
    } else {
      stars.push(<EmptyStarIcon key={i} />);
    }
  }
  return stars;
};

const UserReviewItem = ({ review }: UserReviewItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen ? (
        <MyPageModalTemplate
          closeModal={() => setIsModalOpen(false)}
          handleClickOk={() => {}}
          title="리뷰를 삭제할까요?"
          height="h-[176px]"
          titleBodyMargin="mt-1"
        >
          삭제된 리뷰는 복구되지 않습니다.
        </MyPageModalTemplate>
      ) : null}
      <li className="h-[101px] w-full relative">
        <Link href={`/perfumes/${review.perfumeId}`} className="">
          <button
            type="button"
            className="absolute top-0 right-[2px]"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            <SmallXIcon />
          </button>
          <div className="body2 text-acodegray-500 flex items-center gap-[5px]">
            <button
              type="button"
              // href={`/brands/${encodeURIComponent(review.brandName)}`}
              className=""
            >
              {review.brandName}
            </button>
            <SmallCircleIcon className=" fill-acodegray-700" />
            <span className="">{review.perfumeName}</span>
          </div>
          <div className="mt-2 flex pr-[9px]">
            <div className="mr-auto">
              <p className="body1 font-semibold text-ellipsis whitespace-nowrap overflow-hidden w-[248px]">
                {review.content}
              </p>
              <div className="flex mt-3">{rateStarHandler(review.rating)}</div>
            </div>

            <Image src="/" alt="perfume" width={72} height={72} />
          </div>
        </Link>
      </li>
    </>
  );
};

export default UserReviewItem;
