import { ArrowRightIcon } from '@/public/images';
import Link from 'next/link';

const SpiceRecommendation = () => {
  return (
    <div className="mt-8 ml-4">
      <h1 className="h0 text-acodeblack">
        오늘의 추천 향료는 <br />
        <Link
          href="/"
          className="text-white h-11 mt-1.5 px-2.5 py-1 bg-gradient-to-r from-[#705d5d] to-[#a08383]/[.7] rounded-lg justify-center items-center gap-2.5 inline-flex"
        >
          <span className="">부드러운 가죽의 향</span>
          <ArrowRightIcon />
        </Link>
      </h1>
    </div>
  );
};

export default SpiceRecommendation;
