import React from 'react';
import {
  RedFullStar,
  RedEmptyStar,
  RedHalfStar,
  BlackEmptyStar,
  BlackFullStar,
} from '@/public/images';
import testImg from '@/public/images/test.jpg';
import Image from 'next/image';

interface PerfumeReviewProps {
  id: string;
}

interface Review {
  comment: string;
  rate: number;
  nickname: string;
  seasons: string;
  intencity: string;
  longevity: string;
  style: string[];
  textReview: string;
}

interface ApiResponse {
  fragranceId: number;
  reviewCnt: number;
  rateSum: number;
  reviewInfoList: Review[];
}

export async function getReviewList(params: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}fragrance/${params.id}/review`,
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

const mockApiResponse: ApiResponse = {
  fragranceId: 1,
  reviewCnt: 4,
  rateSum: 20,
  reviewInfoList: [
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
      seasons: '봄',
      intencity: '약함',
      longevity: '3-4시간',
      style: ['무게는ㅇㅇ', '페미닌ㅇㅇ', '우아한ㅇㅇ'],
      textReview:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
      seasons: '봄',
      intencity: '약함',
      longevity: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      textReview:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
      seasons: '봄',
      intencity: '약함',
      longevity: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      textReview:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
      seasons: '봄',
      intencity: '약함',
      longevity: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      textReview:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
      seasons: '봄',
      intencity: '약함',
      longevity: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      textReview:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
      seasons: '봄',
      intencity: '약함',
      longevity: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      textReview:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
  ],
};

const MoreReview = async ({ id }: PerfumeReviewProps) => {
  // const data = await getReviewList({ id });
  const data = mockApiResponse;
  const averageRating = data.rateSum / data.reviewCnt;

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 >= 0.5 ? 1 : 0; //반올림
  const emptyStars = 5 - fullStars - halfStar;
  const reviewsToShow = data.reviewInfoList;
  return (
    <div className="mx-4">
      <div>
        <div className="flex items-center ">
          <div className="text-acodeblack mr-4">리뷰 {data.reviewCnt}개</div>
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
        <div className="flex flex-row mb-9"></div>
        {reviewsToShow.map((review, index) => (
          <div key={index} className="body2 flex flex-col mb-5">
            <div className="flex flex-row mb-5">
              <div className="item-center">
                <Image
                  src={testImg}
                  alt={`testimg`}
                  width={115}
                  height={115}
                  objectFit="cover"
                  className="rounded-md mr-3"
                />
              </div>
              <div className="item-center">
                <Image
                  src={testImg}
                  alt={`testimg`}
                  width={115}
                  height={115}
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
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
                    {review.nickname}
                  </div>
                </div>
                <div className="text-acodeblack mb-2.5">{review.comment}</div>
                <div className="mb-5">{review.textReview}</div>
                <div className="space-y-4">
                  <div className="flex flex-row body2">
                    <div className="flex w-12 text-acodegray-500 ">계절감</div>
                    <div className="flex w-16">{review.seasons}</div>
                    <div className="flex w-16 text-acodegray-500">
                      향의 세기
                    </div>
                    <div className="flex w-16">{review.intencity}</div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex w-12 text-acodegray-500">지속성</div>
                    <div className="flex w-16">{review.longevity}</div>
                    <div className="flex w-16 text-acodegray-500">스타일</div>
                    <div className="flex flex-wrap w-32">
                      {review.style.map((style, index) => (
                        <span key={index}>
                          {style}
                          {index < review.style.length - 1 ? (
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
            {index !== reviewsToShow.length - 1 && (
              <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreReview;
