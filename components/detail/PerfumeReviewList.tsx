import React from 'react';
import Link from 'next/link';

import {
  RedFullStar,
  RedEmptyStar,
  RedHalfStar,
  BlackEmptyStar,
  BlackFullStar,
  NoReview,
} from '@/public/images';
import Image from 'next/image';
interface Review {
  comment: string;
  rate: number;
  nickname: string;
  thumbnail: string;
}
interface PerfumeReviewProps {
  id: string;
}

export async function getPreReviewList(params: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/review/preview`,
      { cache: `no-cache` },
    );

    if (!response.ok) {
      console.error('API fetch failed:', response.status);
      throw new Error(`API fetch failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch perfume data:', error);
  }
}

const ReviewContent = async ({ id }: PerfumeReviewProps) => {
  const data = await getPreReviewList({ id });

  const photos: string[] = data.reviewPreviewList
    .filter((review: Review) => review.thumbnail.length > 0)
    .map((review: Review) => review.thumbnail)
    .slice(0, 3);
  if (data.reviewCnt === 0) {
    return (
      <div className="flex justify-center items-center h-full mx-4">
        <NoReview />
      </div>
    );
  }
  const averageRating = data.rateSum / data.reviewCnt;

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 >= 0.5 ? 1 : 0; //반올림
  const emptyStars = 5 - fullStars - halfStar;
  const reviewsToShow = data.reviewPreviewList.slice(0, 3);
  return (
    <div className="mx-4">
      <div>
        <div className="flex justify-between items-center mb-9">
          <div className="flex items-center">
            {Array.from({ length: fullStars }, (_, i) => (
              <RedFullStar key={i} />
            ))}
            {halfStar > 0 && <RedHalfStar />}
            {Array.from({ length: emptyStars }, (_, i) => (
              <RedEmptyStar key={i} />
            ))}
            <div className="text-acodegray-400 ml-2">{data.reviewCnt}건</div>
          </div>
          <Link
            href={`/morereviews/${data.fragranceId}`}
            className="caption2 text-acodegray-300 text-right"
          >
            {' '}
            리뷰 더보기 {'>'}
          </Link>
        </div>

        <div className="flex flex-row mb-9">
          {photos.map((photo, index: number) => (
            <div key={index} className="w-1/3 flex items-center justify-center">
              <div className="relative w-[110px] h-[110px] overflow-hidden rounded-md">
                <Image
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-md"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
        {reviewsToShow.map((review: Review, index: number) => (
          <div key={index} className="body2 flex flex-col mb-5">
            <div className="justify-between flex flex-row">
              <div className="flex flex-col">
                <div className=" text-acodeblack mb-1">{review.comment}</div>

                <div className="flex items-center mb-3">
                  {Array.from({ length: review.rate }, (_, i) => (
                    <BlackFullStar key={`full-${i}`} />
                  ))}
                  {Array.from({ length: 5 - review.rate }, (_, i) => (
                    <BlackEmptyStar key={`empty-${i}`} />
                  ))}
                </div>

                <div className="text-acodegray-400 caption2">
                  {review.nickname}
                </div>
              </div>
              {review.thumbnail.length > 0 && (
                <div className="item-center">
                  <div className="relative w-[71px] h-[71px] overflow-hidden rounded-md">
                    <Image
                      src={review.thumbnail}
                      alt={`review thumbnail`}
                      className="rounded-md"
                      fill
                    />
                  </div>
                </div>
              )}
            </div>
            {index !== reviewsToShow.length - 1 && (
              <div className="border-t border-acodegray-100 w-full my-4 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewContent;
