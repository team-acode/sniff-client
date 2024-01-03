import Menu from '@/components/home/Menu';
import PerfumeList from '@/components/home/PerfumeList';
import SpiceRecommendation from '@/components/home/SpiceRecommendation';
import { ArrowRightIcon } from '@/public/images';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <SpiceRecommendation />
      <Menu />
      <PerfumeList />
      <div className="w-full mt-[31px] pl-4">
        <h3 className="ml-[10.5px] text-[16px] font-semibold tracking-[-0.4px] text-acodegray-500">
          <span className="text-acodeblack mr-[5px]">우디</span>
          계열의 향수
        </h3>
        <Link
          href=""
          className="px-3 mt-3.5 w-[125px] h-9 pt-1.5 bg-acodeblack rounded-lg text-acodewhite flex items-center"
        >
          <span className="tracking-[-0.4px] mr-1 font-semibold shrink-0">
            더 보러 가기
          </span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
