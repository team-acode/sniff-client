import BlurryNav from '@/components/common/BlurryNav';
import LeaveButton from '@/components/mypage/LeaveButton';
import LogoutButton from '@/components/mypage/LogoutButton';
import { ArrowRightIcon2, PencilIcon, BookMarkOnIcon } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="">
      <BlurryNav />
      <div className="pt-[70px] mx-4">
        <div className="flex items-center">
          <h1 className="h0 mr-1">안녕하세요, 김킁킁님</h1>
          <Link href="/mypage/username?init=false" className="">
            <PencilIcon />
          </Link>
        </div>
        <Link
          href="/mypage/reviews"
          className="bg-acodeblack text-acodewhite flex items-center mt-3 h-[42px] px-[10px]"
        >
          <span className="body1 mr-[9px]">김킁킁님이 작성한 리뷰</span>
          <span className="mr-auto">3</span>
          <ArrowRightIcon2
            className="fill-acodewhite w-6 h-6"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="mt-9 mx-4">
        <div className="flex items-center">
          <h3 className="h2 mr-auto">스크랩</h3>
          <Link href="mypage/wish" className="body2 text-acodegray-500">
            모두 보기
          </Link>
        </div>
        {/* <div className="pt-16 pb-[95px] text-center text-acodegray-300 text-[16px] font-medium tracking-[-0.4px]">
          아직 스크랩한 제품이 없어요.
        </div> */}
        <div className="flex mt-5">
          <Link
            href="/"
            className="relative h-[158px] w-[138px] border-[1.5px] border-acodegray-50 rounded-[4px] overflow-clip"
          >
            <Image src="" className="" alt="perfume" />
            <BookMarkOnIcon className="absolute top-[10px] right-[10px]" />
          </Link>
        </div>
      </div>
      <hr className="mt-9 mb-[34px] border-[3px] border-acodegray-50" />
      <div className="flex flex-col mx-4">
        <Link href="/" className="body1">
          향수 제품 추가 요청
        </Link>
        <hr className="mt-[17px] mb-[18px] border-top-[1.5px] border-acodegray-50" />
        <Link href="/" className="body1">
          광고 제휴 문의
        </Link>
        <div className="flex flex-col mt-[94px] mb-[41px]">
          <LogoutButton />
          <LeaveButton />
          {/* <button
            type="button"
            className="caption1 text-left text-acodegray-500 mt-3"
          >
            회원탈퇴
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default page;
