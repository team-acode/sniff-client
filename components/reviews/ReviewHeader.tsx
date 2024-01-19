import React from 'react';
import testImg from '@/public/images/test.jpg';
import Image from 'next/image';
import { getReviewHeader } from '@/utils/getHeader';
interface PerfumeReviewProps {
  korBrand: string;
  fragranceName: string;
  thumbnail: string;
  concentration: string;
}

const ReviewHeader = ({
  korBrand,
  fragranceName,
  thumbnail,
  concentration,
}: PerfumeReviewProps) => {
  const data = {
    korBrand: korBrand,
    fragranceName: fragranceName,
    concentration: concentration,
    thumbnail: thumbnail,
  };
  const photos = thumbnail ? thumbnail : testImg;

  return (
    <div className="mx-4 py-2 flex items-center bg-white">
      <div className="relative w-[50.54px] h-[50.54px] rounded-md overflow-hidden mr-3">
        <Image src={photos} alt="test" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-acodegray-200 caption2 mt-1">
          {data.korBrand}
        </span>
        <div className="flex flex-row items-center">
          <span className="text-acodeblack review-1">{data.fragranceName}</span>
          <span className="mx-1 text-acodegray-500">∙</span>
          <span className="text-acodegray-500 similar-1">
            {data.concentration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewHeader;
