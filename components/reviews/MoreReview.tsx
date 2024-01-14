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
interface Review {
  comment: string;
  rate: number;
  nickname: string;
  seasons: string;
  intencity: string;
  persistence: string;
  style: string[];
  review: string;
}

interface ApiResponse {
  fragranceId: number;
  reviewCnt: number;
  rateSum: number;
  reviewList: Review[];
}

const mockApiResponse: ApiResponse = {
  fragranceId: 123,
  reviewCnt: 4,
  rateSum: 20,
  reviewList: [
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
      seasons: '봄',
      intencity: '약함',
      persistence: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      review:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
      seasons: '봄',
      intencity: '약함',
      persistence: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      review:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
      seasons: '봄',
      intencity: '약함',
      persistence: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      review:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
      seasons: '봄',
      intencity: '약함',
      persistence: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      review:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '이 향 덕에 소개팅 성공함',
      rate: 2,
      nickname: 'User1',
      seasons: '봄',
      intencity: '약함',
      persistence: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      review:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
    {
      comment: '성공함 소개팅',
      rate: 5,
      nickname: 'User2',
      seasons: '봄',
      intencity: '약함',
      persistence: '3-4시간',
      style: ['무게감있는', '페미닌한', '우아한'],
      review:
        '비 갠 뒤에 비애 대신 a happy end비스듬히 씩 비웃듯 칠색 무늬의 무지개철없이 철 지나 철들지 못해 (still)철부지에 철 그른지 오래',
    },
  ],
};
const MoreReview = () => {
  const averageRating = mockApiResponse.rateSum / mockApiResponse.reviewCnt;

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 >= 0.5 ? 1 : 0; //반올림
  const emptyStars = 5 - fullStars - halfStar;
  const reviewsToShow = mockApiResponse.reviewList;
  return (
    <div>
      <div>
        <div className="flex items-center ">
          <div className="text-acodeblack mr-4">
            리뷰 {mockApiResponse.reviewCnt}개
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

                  <div className="text-acodegray-400 caption2 ">
                    {review.nickname}
                  </div>
                </div>
                <div className="text-acodeblack mb-2.5">{review.comment}</div>
                <div className="mb-5">{review.review}</div>

                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row">
                    <div className="flex justify-between">
                      <div className="text-acodegray-500">계절감</div>
                      <div className="flex-1 text-right body2">
                        {review.seasons}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-acodegray-500">향의 세기</div>
                      <div className="flex-1 text-right body2">
                        {review.intencity}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex justify-between">
                      <div className="text-acodegray-500">지속성</div>
                      <div className="flex-1 text-right body2">
                        {review.persistence}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-acodegray-500">스타일</div>
                      <div className="flex-1 text-right body2">
                        {review.style}
                      </div>
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
