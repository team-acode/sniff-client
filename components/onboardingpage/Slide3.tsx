import React from 'react';
import { Onboarding3 } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';

const Slide3 = () => {
  return (
    <div>
      <div className="h0 mt-12 px-4">
        <div>어코드에서</div>
        <div>나만의 향수 코드를 찾아보세요</div>
      </div>
      <div className="fixed bottom-0 w-full h-[589px]">
        <Image src={Onboarding3} fill priority alt="Onboarding3" />
      </div>
      <div className="fixed bottom-[164px] right-0 left-0 px-4 z-50">
        <Link
          href="/login"
          className="bg-black text-white w-full rounded-lg h-[56px] inline-flex items-center justify-center"
        >
          어코드 시작하기
        </Link>
      </div>
    </div>
  );
};

export default Slide3;
