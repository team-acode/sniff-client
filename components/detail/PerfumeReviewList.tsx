import React, { useState, useEffect } from 'react';
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
const ReviewContent = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  useEffect(() => {
    setTimeout(() => setData(mockApiResponse), 1);
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-full">
        <NoReview />
      </div>
    );
  }
  //   return (
  //     <div className="flex justify-center items-center h-full">
  //       <NoReview />
  //     </div>
  //   );
  const averageRating = data.rateSum / data.reviewCnt;

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 >= 0.5 ? 1 : 0; //반올림
  const emptyStars = 5 - fullStars - halfStar;
  const reviewsToShow = data.reviewList.slice(0, 3);
  return (
    <div>
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

          <div className="caption2 text-acodegray-300 text-right">
            리뷰 더보기 {'>'}
          </div>
        </div>
        <div className="flex flex-row mb-9">
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src={testImg}
              alt={`testimg`}
              width={110}
              height={110}
              objectFit="cover"
            />
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src={testImg}
              alt={`testimg`}
              width={110}
              height={110}
              objectFit="cover"
            />
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src={testImg}
              alt={`testimg`}
              width={110}
              height={110}
              objectFit="cover"
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
                />
              </div>
            </div>
            {index !== data.reviewList.length - 1 && (
              <div className="border-t border-acodegray-100 w-11/12 my-4 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewContent;
