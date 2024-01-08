import { ArrowRightIcon2 } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';

const BrandResult = () => {
  return (
    <div className="">
      <div className="text-acodeblack text-[16px] font-semibold leading-[24px] tracking-[-0.4px]">
        브랜드 <span className="font-medium text-gray-400">1건</span>
      </div>
      <div className="flex ml-4 mr-[14px] mt-[14px] items-center">
        <Image
          src=""
          alt="brand"
          height={38}
          width={38}
          className="mr-[10px] rounded-s-full"
        />
        <p className="eng text-[16px] font-semibold leading-[16px] tracking-[-0.16px] mr-auto">
          Aesop
        </p>
        <Link
          href="/"
          className="flex text-[12px] font-medium text-acodegray-400 leading-[18px] tracking-[-0.3px] items-center"
        >
          더 알아보기
          <ArrowRightIcon2 className="fill-acodegray-500 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default BrandResult;
