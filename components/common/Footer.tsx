import { AcodeLogoGray } from '@/public/images';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="pt-[25px] pb-10 bg-acodegray-50 pl-4">
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLScViRETa4DlBZZ6HQKKD0PPlEj3zfdYjPaEPS9bs3nbHTOJgQ/viewform?usp=sharing"
        className="caption1 font-medium block mb-2.5 ml-[1px]"
        target="_blank"
      >
        향수 제품 추가 요청
      </Link>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLScdUKIiEcWXK7DAn7fmf9HxAG4epWDRTfTfQg6EQu0JPf5ScA/viewform?usp=sharing"
        className="caption1 font-medium block mb-[38px] ml-[1px]"
        target="_blank"
      >
        광고 제휴 및 입점 문의
      </Link>
      <div className="flex mr-[15px] mb-[21px] text-[10px] font-medium text-acodegray-400 leading-[15px]">
        <AcodeLogoGray className="mr-auto" />
        <Link
          href="https://www.notion.so/b64e9e00aa364583ad9906080210f853?pvs=4"
          className="mt-1"
          target="_blank"
        >
          <span className="mr-5">이용약관</span>
          <span className="">개인정보 처리 방침</span>
        </Link>
      </div>
      <div className="text-[10px] font-medium text-acodegray-400 leading-[15px] grid grid-cols-[61px_188px] gap-x-[17px] mb-[25px]">
        <span className="">ACODE</span>
        <span className="">어코드</span>

        <span className="">대표</span>
        <span className="">안여진</span>

        <span className="">이메일</span>
        <span className="">sniff.a.code@gmail.com</span>

        <span className="">사업자등록번호</span>
        <span className="">551-86-02437</span>

        <span className="">주소</span>
        <span className="">서울특별시 성동구 연무장5가길 25(성수동 2가)</span>
      </div>
      <p className="text-[10px] font-medium text-acodegray-400 leading-[15px] mb-10">
        &copy; ACODE. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
