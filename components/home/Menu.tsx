import { AcodeLogoMono } from '@/public/images';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="mt-9 ml-4 flex text-[14px]">
      <Link
        href="/"
        className="w-[198px] h-[95px] pt-[17px] pl-[16px] pr-[18px] font-medium text-acodeblack bg-acodegray-50 rounded-l-lg leading-[21px] flex justify-between"
      >
        <span className="">
          내 취향 향수
          <br />
          확인하기
        </span>

        <AcodeLogoMono className="pt-[5px]" />
      </Link>
      <Link
        href="/"
        className="w-[143px] h-[95px] ml-4 pt-[17px] pl-[15px] text-acodegray-700 bg-acodegray-50 rounded-lg flex flex-col"
      >
        <span className="mb-auto">큐레이션 / 광고</span>
        <span className="text-[12px] mb-[11px]">{'더보기 >'}</span>
      </Link>
    </div>
  );
};

export default Menu;
