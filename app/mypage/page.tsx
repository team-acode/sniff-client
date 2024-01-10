import BlurryNav from '@/components/common/BlurryNav';
import { ArrowRightIcon2, PencilIcon } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="">
      <BlurryNav />
      <div className="pt-[70px]">
        <div className="flex">
          <h1 className="">안녕하세요, 김킁킁님</h1>
          <Link href="/" className="">
            <PencilIcon />
          </Link>
        </div>
        <Link href="/" className="bg-acodeblack text-acodewhite flex">
          김킁킁님이 작성한 리뷰 3
          <ArrowRightIcon2 className="fill-acodewhite w-6 h-6" />
        </Link>
      </div>
      <div className="">
        <div className="flex">
          <h3 className="">스크랩</h3>
          <Link href="/" className="">
            모두 보기
          </Link>
        </div>
        <Link href="/" className="">
          <Image src="" className="" alt="perfume" />
        </Link>
      </div>
      <div className="">
        <Link href="/" className="">
          향수 제품 추가 요청
        </Link>
        <Link href="/" className="">
          광고 제휴 문의
        </Link>
        <button type="button" className="">
          로그아웃
        </button>
        <button type="button" className="">
          회원탈퇴
        </button>
      </div>
    </div>
  );
};

export default page;
