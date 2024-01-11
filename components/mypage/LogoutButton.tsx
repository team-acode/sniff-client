'use client';

import MyPageModalTemplate from '@/components/mypage/MyPageModalTemplate';
import { useState } from 'react';

const LogoutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen ? (
        <MyPageModalTemplate
          closeModal={() => setIsModalOpen(false)}
          handleClickOk={() => {}}
          title="로그아웃"
          body="로그아웃 하시겠습니까?"
          height="h-[193px]"
          titleBodyMargin="mt-1"
        />
      ) : null}
      <button
        type="button"
        className="caption1 text-left text-acodegray-500"
        onClick={() => setIsModalOpen(true)}
      >
        로그아웃
      </button>
    </>
  );
};

export default LogoutButton;
