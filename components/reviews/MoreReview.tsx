import React from 'react';
import {
  RedFullStar,
  RedEmptyStar,
  RedHalfStar,
  BlackEmptyStar,
  BlackFullStar,
} from '@/public/images';
import Image from 'next/image';
import {
  intensityMapping,
  longevityMapping,
  seasonMapping,
  styleMapping,
} from '@/constants/stats';

interface PerfumeReviewProps {
  id: string;
}

interface Review {
  reviewId: number;
  thumbnail: string;
  image1: string;
  image2: string;
  comment: string;
  rate: number;
  nickname: string;
  season: string;
  intensity: string;
  longevity: string;
  style: string;
  textReview: string;
}

export async function getReviewList(params: { id: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/review`,
    { cache: `no-cache` },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
}

const MoreReview = async ({ id }: PerfumeReviewProps) => {
  const data = await getReviewList({ id });
  const averageRating = data.rateSum / data.reviewCnt;

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="mx-4 mt-[64px] mb-[46px]">
      <div className="flex items-center">
        <div className="text-[18px] font-medium leading-[18px] tracking-[-0.45px] text-acodeblack mr-4">
          리뷰 {data.reviewCnt}개
        </div>
        <div className="flex items-center">
          {Array.from({ length: fullStars }, (_, i) => (
            <RedFullStar key={i} />
          ))}
          {halfStar > 0 && <RedHalfStar />}
          {Array.from({ length: emptyStars }, (_, i) => (
            <RedEmptyStar key={i} />
          ))}
        </div>
      </div>

      {data.reviewInfoList.map((review: Review, index: number) => {
        const photos = [review.thumbnail, review.image1, review.image2].filter(
          (url) => url,
        );
        const displayNickname =
          review.nickname.slice(0, 2) + '*'.repeat(review.nickname.length - 2);
        return (
          <div key={review.reviewId} className="body2 flex flex-col mb-5">
            <div className="flex flex-row mb-5">
              {photos.map((photo, photoIndex) => (
                <div key={photo} className="item-center mr-1">
                  <div className="relative w-[115px] h-[115px] overflow-hidden rounded-md">
                    <Image
                      src={photo}
                      alt={`Review Image ${photoIndex}`}
                      className="rounded-md"
                      fill
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="justify-between flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row items-center text-center mb-5">
                  <div className="flex ">
                    {Array.from({ length: review.rate }, (_, i) => (
                      <BlackFullStar key={`full-${i}`} />
                    ))}
                    {Array.from({ length: 5 - review.rate }, (_, i) => (
                      <BlackEmptyStar key={`empty-${i}`} />
                    ))}
                  </div>

                  <div className="text-acodegray-400 caption2 ml-3">
                    {displayNickname}
                  </div>
                </div>
                <div className="text-acodeblack mb-2.5">{review.comment}</div>
                <div className="mb-5">{review.textReview}</div>
                <div className="space-y-4">
                  <div className="flex flex-row body2">
                    <div className="flex w-12 text-acodegray-500">계절감</div>
                    <div className="flex w-16">
                      {seasonMapping[review.season]}
                    </div>
                    <div className="flex w-16 text-acodegray-500">
                      향의 세기
                    </div>
                    <div className="flex w-16">
                      {intensityMapping[review.intensity]}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex w-12 text-acodegray-500">지속성</div>
                    <div className="flex w-16">
                      {longevityMapping[review.longevity]}
                    </div>
                    <div className="flex w-16 text-acodegray-500">스타일</div>
                    <div className="flex flex-wrap w-32">
                      {review.style
                        .split(', ')
                        .map((style, styleIndex, array) => (
                          <span key={style}>
                            {styleMapping[style]}
                            {styleIndex < array.length - 1 ? (
                              <span className="text-acodegray-200">|</span>
                            ) : (
                              ''
                            )}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index !== data.reviewInfoList.length - 1 && (
              <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MoreReview;
