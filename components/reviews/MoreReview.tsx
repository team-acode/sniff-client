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

const keyMapping: { [key: string]: string } = {
  계절감: 'season',
  '향의 세기': 'intensity',
  지속성: 'longevity',
};

const engToKor = (key: string, value: string) => {
  if (key === 'season') {
    return seasonMapping[value];
  }
  if (key === 'intensity') {
    return intensityMapping[value];
  }
  return longevityMapping[value];
};

const MoreReview = async ({ id }: PerfumeReviewProps) => {
  const data = await getReviewList({ id });
  const averageRating = data.rateSum / data.reviewCnt;
  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="mx-4 mt-[64px] mb-[46px]">
      <div className="flex items-center mb-11">
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

      {data.reviewInfoList.map(
        (review: { [key: string]: any }, index: number) => {
          const photos = [
            review.thumbnail,
            review.image1,
            review.image2,
          ].filter((url) => url);

          const maskingNickname = (value: string) => {
            if (value.length === 2) {
              return value.replace(/(?<=.{1})./gi, '*');
            }
            if (value.length > 2) {
              return value.replace(/(?<=.{2})./gi, '*');
            }
            return '*';
          };

          return (
            <div key={review.reviewId} className="body2 flex flex-col">
              <div className="flex flex-row">
                {photos.map((photo, photoIndex) => (
                  <div key={photo} className="item-center mr-1 mb-5">
                    <div className="relative w-[115px] h-[115px] overflow-hidden rounded-[4px]">
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

                    <div className="text-acodegray-400 caption2 ml-[10px]">
                      {maskingNickname(review.nickname)}
                    </div>
                  </div>
                  <div className="text-[16px] font-semibold leading-[18px] tracking-[-0.4px] text-acodeblack mb-2.5">
                    {review.comment}
                  </div>
                  <div className="mb-5">{review.textReview}</div>
                  <div className="body2 font-medium grid grid-cols-[95px_128px] gap-x-[42px]">
                    {Object.entries(keyMapping).map(([key, value], idx) => (
                      <div className="flex">
                        <span
                          className={`${
                            idx % 2 ? 'w-[63px]' : 'w-12'
                          } mr-3 text-acodegray-500 shrink-0`}
                        >
                          {key}
                        </span>
                        <span className="shrink-0 text-acodeblack">
                          {engToKor(value, review[value])}
                        </span>
                      </div>
                    ))}
                    <div className="flex">
                      <span className="w-[63px] mr-3 text-acodegray-500 shrink-0">
                        스타일
                      </span>
                      <div className="text-acodeblack shrink-0 flex flex-wrap w-[128px]">
                        {review.style.map((style: string, idx: number) => (
                          <span key={style} className="">
                            <span className="">{styleMapping[style]}</span>
                            {idx < review.style.length - 1 && (
                              <span className="text-acodegray-200 mx-1">|</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {index !== data.reviewInfoList.length - 1 && (
                <hr className="my-11 border-t-[2px] border-acodegray-50" />
              )}
            </div>
          );
        },
      )}
    </div>
  );
};

export default MoreReview;
