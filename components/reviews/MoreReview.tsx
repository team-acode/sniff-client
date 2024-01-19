import React from 'react';
import {
  RedFullStar,
  RedEmptyStar,
  RedHalfStar,
  BlackEmptyStar,
  BlackFullStar,
} from '@/public/images';
import Image from 'next/image';

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
function translateSeason(season: string): string {
  const seasonMap: { [key: string]: string } = {
    SPRING: '봄',
    SUMMER: '여름',
    AUTUMN: '가을',
    WINTER: '겨울',
    ALL: '사계절',
  };

  return seasonMap[season] || season;
}
function translateLongevity(longevity: string): string {
  const longevityMap: { [key: string]: string } = {
    ONEHOUR: '1시간',
    FOURHOURS: '3-4시간',
    HALFDAY: '반나절',
    FULLDAY: '하루종일',
  };

  return longevityMap[longevity] || longevity;
}
function translateIntensity(intensity: string): string {
  const intensityMap: { [key: string]: string } = {
    WEAK: '약함',
    MEDIUM: '보통',
    STRONG: '진함',
    INTENSE: '매우진함',
  };

  return intensityMap[intensity] || intensity;
}
function translateStyle(style: string): string {
  const styleMap: { [key: string]: string } = {
    CHIC: '시크한',
    MATURE: '성숙한',
    LUXURIOUS: '고급스러운',
    ELEGANT: '우아한',
    MASCULINE: '남성적인',
    COMFORTABLE: '편안한',
    SERENE: '차분한',
    LIGHT: '가벼운',
    NEUTRAL: '중성적인',
    FRIENDLY: '친근한',
    CLEAN: '깨끗한',
    SENSUAL: '관능적인',
    DELICATE: '은은한',
    LIVELY: '활기찬',
    LOVELY: '사랑스러운',
    BRIGHT: '밝은',
    RADIANT: '화사한',
    FEMININE: '여성스러운',
    INNOCENT: '청순한',
    WEIGHTY: '무게감 있는',
    SOFT: '부드러운',
    COZY: '포근한',
  };

  return styleMap[style] || style;
}

export async function getReviewList(params: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/review`,
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

const MoreReview = async ({ id }: PerfumeReviewProps) => {
  const data = await getReviewList({ id });
  const averageRating = data.rateSum / data.reviewCnt;

  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="mx-4">
      <div>
        <div className="flex items-center">
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
        {data.reviewInfoList.map((review: Review, index: number) => {
          const photos = [
            review.thumbnail,
            review.image1,
            review.image2,
          ].filter((url) => url);
          const displayNickname =
            review.nickname.slice(0, 2) +
            '*'.repeat(review.nickname.length - 2);
          return (
            <div key={index} className="body2 flex flex-col mb-5">
              <div className="flex flex-row mb-5">
                {photos.map((photo, photoIndex) => (
                  <div key={photoIndex} className="item-center mr-1">
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
                        {translateSeason(review.season)}
                      </div>
                      <div className="flex w-16 text-acodegray-500">
                        향의 세기
                      </div>
                      <div className="flex w-16">
                        {translateIntensity(review.intensity)}
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex w-12 text-acodegray-500">지속성</div>
                      <div className="flex w-16">
                        {translateLongevity(review.longevity)}
                      </div>
                      <div className="flex w-16 text-acodegray-500">스타일</div>
                      <div className="flex flex-wrap w-32">
                        {review.style
                          .split(', ')
                          .map((style, styleIndex, array) => (
                            <span key={styleIndex}>
                              {translateStyle(style)}
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
    </div>
  );
};

export default MoreReview;
