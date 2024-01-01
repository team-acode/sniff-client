import { AcodeLogoBig, KakaoLogo } from '@/public/images';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col items-center px-4 w-full h-full">
      <AcodeLogoBig className="mt-[260px] mb-[17px]" />
      <h1 className="mb-auto text-xl font-semibold">향수에 입문하기</h1>
      <Link
        href="/"
        className="w-full bg-[#FEE500] mb-2.5 rounded-lg h-[52px] inline-flex items-center justify-center relative"
      >
        <KakaoLogo className="absolute left-4" />
        <p className="">카카오 로그인</p>
      </Link>
      <Link
        href="/"
        className="mb-[29px] w-full bg-black text-white rounded-lg h-[52px] inline-flex items-center justify-center relative"
      >
        둘러볼래요?
      </Link>
    </div>
  );
};

export default page;
