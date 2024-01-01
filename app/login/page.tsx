import { AcodeLogoBig, KakaoLogo } from '@/public/images';
import Link from 'next/link';

const page = () => {
  const kakaoLoginLink = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&\nredirect_uri=${process.env.REDIRECT_URI}&response_type=code`;

  return (
    <div className="flex flex-col items-center px-4 w-full h-full">
      <AcodeLogoBig className="mt-[260px] mb-[17px]" />
      <h1 className="mb-auto text-xl font-semibold">향수에 입문하기</h1>
      <span className="text[#404244] text-sm font-semibold mb-[19px]">
        SNS 계정으로 로그인하기
      </span>
      <Link
        href={kakaoLoginLink}
        className="w-full bg-[#FEE500] mb-2.5 rounded-lg h-[52px] inline-flex items-center justify-center relative"
      >
        <KakaoLogo className="absolute left-4" />
        <p className="text-black text-[17.5px]">카카오 로그인</p>
      </Link>
      <Link
        href="/"
        className="mb-[29px] w-full bg-black text-white font-semibold rounded-lg h-[52px] inline-flex items-center justify-center relative"
      >
        둘러볼래요?
      </Link>
    </div>
  );
};

export default page;
