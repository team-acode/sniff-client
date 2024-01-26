import React from 'react';
import { Onboarding3 } from '@/public/images';
import BigLinkButton from '../common/BigLinkButton';

const Slide3 = () => {
  return (
    <div>
      <div className="h0 mt-12 px-4">
        <div>어코드에서</div>
        <div>나만의 향수 코드를 찾아보세요</div>
      </div>
      <div className="fixed bottom-0">
        <Onboarding3 />
      </div>
      <div className="fixed bottom-10 right-0 left-0 px-4 z-50">
        <BigLinkButton
          to="/login"
          buttonStyle="bg-black text-white bg-gradient-to-b"
        >
          어코드 시작하기
        </BigLinkButton>
      </div>
    </div>
  );
};

export default Slide3;
