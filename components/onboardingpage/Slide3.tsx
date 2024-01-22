import React from 'react';
import BigLinkButton from '../common/BigLinkButton';

const Slide3 = () => {
  return (
    <div>
      <div className="py-8"></div>
      <div className="px-4 h0">
        <div>어코드에서</div>
        <div>나만의 향수 코드를 찾아보세요</div>
      </div>

      <div className="justify-center px-4">
        <BigLinkButton to="/login" buttonStyle="bg-black text-white">
          어코드 시작하기
        </BigLinkButton>
      </div>
    </div>
  );
};

export default Slide3;
