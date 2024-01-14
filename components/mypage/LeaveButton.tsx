'use client';

import MyPageModalTemplate from '@/components/mypage/MyPageModalTemplate';
import { useState } from 'react';

const LeaveButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen ? (
        <MyPageModalTemplate
          closeModal={() => setIsModalOpen(false)}
          handleClickOk={() => {}}
          title="정말 탈퇴하시겠어요?"
          height="h-[210px]"
          titleBodyMargin="mt-[6px]"
        >
          탈퇴버튼 선택 시,
          <br />
          계정은 삭제되며 복구되지 않습니다.
        </MyPageModalTemplate>
      ) : null}
      <button
        type="button"
        className="caption1 text-left text-acodegray-500 mt-3"
        onClick={() => setIsModalOpen(true)}
      >
        회원탈퇴
      </button>
    </>
  );
};

export default LeaveButton;
