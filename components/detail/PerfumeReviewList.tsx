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
import testImg from '@/public/images/test.jpg';
import Image from 'next/image';
interface Review {
  comment: string;
  rate: number;
  nickname: string;
}
interface PerfumeReviewProps {
  id: string;
}
interface ApiResponse {
  fragranceId: number;
  reviewCnt: number;
  rateSum: number;
  reviewPreviewList: Review[];
}

const mockApiResponse: ApiResponse = {
  fragranceId: 1,
  reviewCnt: 4,
  rateSum: 20,
  reviewPreviewList: [
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
    },
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
    },
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
    },
  ],
};
export async function getPreReviewList(params: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/review/preview`,
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
  const data = mockApiResponse;
  // const data = await getPreReviewList({ id });
  // console.log(id);
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
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src={testImg}
              alt={`testimg`}
              width={110}
              height={110}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src={testImg}
              alt={`testimg`}
              width={110}
              height={110}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src={testImg}
              alt={`testimg`}
              width={110}
              height={110}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
        {reviewsToShow.map((review, index) => (
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
              <div className="item-center">
                <Image
                  src={testImg}
                  alt={`testimg`}
                  width={71}
                  height={71}
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
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
