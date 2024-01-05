import React, { useState, useEffect } from 'react';
import {
  RedFullStar,
  RedEmptyStar,
  RedHalfStar,
  BlackEmptyStar,
  BlackFullStar,
  NoReview,
} from '@/public/images';

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
  rateSum: 11,
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

  return (
    <div>
      <div className="flex mb-9">
        {Array.from({ length: fullStars }, (_, i) => (
          <RedFullStar key={i} />
        ))}
        {halfStar > 0 && <RedHalfStar />}
        {Array.from({ length: emptyStars }, (_, i) => (
          <RedEmptyStar key={i} />
        ))}
        <div className="text-acodegray-400">{data.reviewCnt}건</div>

        <div className="리뷰더보기 text-acodegray-300 caption2">리뷰더보기</div>
      </div>

      {data.reviewList.map((review, index) => (
        <div key={index} className="flex flex-col items-start mb-5">
          <div className="font-semibold text-acodegray-500 mb-1">
            {review.comment}
          </div>

          <div className="flex items-center mb-3">
            {Array.from({ length: review.rate }, (_, i) => (
              <BlackFullStar key={`full-${i}`} />
            ))}
            {Array.from({ length: 5 - review.rate }, (_, i) => (
              <BlackEmptyStar key={`empty-${i}`} />
            ))}
          </div>

          <div className="text-acodegray-500">{review.nickname}</div>
          {index !== data.reviewList.length - 1 && (
            <div className="border-t border-acodegray-100 w-11/12 my-4 mx-auto" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewContent;
