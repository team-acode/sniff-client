'use client';

import MyPageModalTemplate from '@/components/mypage/MyPageModalTemplate';
import { SmallCircleIcon, SmallXIcon } from '@/public/images';
import { TUserReview } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface UserReviewItemProps {
  review: TUserReview;
}

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
      <li className="h-[101px] w-full">
        <Link href={`/perfumes/${review.perfumeId}`} className="relative">
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
            <SmallCircleIcon />
            <span className="">{review.perfumeName}</span>
          </div>
          <div className="mt-2 flex pr-[9px]">
            <div className="mr-auto">
              <p className="body1 font-semibold">{review.content}</p>
            </div>
            <Image src="/" alt="perfume" width={72} height={72} />
          </div>
        </Link>
      </li>
    </>
  );
};

export default UserReviewItem;
