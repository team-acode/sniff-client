import { ArrowRightIcon } from '@/public/images';
import Link from 'next/link';

const SpiceRecommendation = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/home/recommend`,
  );
  if (!res.ok) return null;
  const spiceInfo = await res.json();

  return (
    <div className="mt-[43px] ml-4">
      <h1 className="h0 text-acodeblack">
        오늘의 추천 향료는 <br />
        <Link
          href={`spices/${encodeURIComponent(spiceInfo.ingredientName)}`}
          className="text-white h-11 mt-1.5 px-2.5 py-1 bg-gradient-to-r from-[#705d5d] to-[#a08383]/[.7] rounded-[4px] justify-center items-center gap-2.5 inline-flex"
        >
          <span className="">{spiceInfo.acode}</span>
          <ArrowRightIcon />
        </Link>
      </h1>
    </div>
  );
};

export default SpiceRecommendation;
