'use client';

import MyPageModalTemplate from '@/components/mypage/MyPageModalTemplate';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LogoutButton = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen ? (
        <MyPageModalTemplate
          closeModal={() => setIsModalOpen(false)}
          handleClickOk={async () => {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/logout`,
              {
                method: 'POST',
                headers: {
                  AUTHORIZATION:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMjgxMzQ2NjQxIiwicm9sZSI6IlVTRVJfUk9MRSIsImlzcyI6IkFjb2RlIiwiaWF0IjoxNzA1Mzk3OTM4LCJleHAiOjE3MDU0MDE1Mzh9.OCrJbxOMtu-W6mRbPvbvi-i9iaDCdkdJreGFnfXnmQY',
                },
                cache: 'no-cache',
              },
            );
            if (res.ok) router.push('/');
          }}
          title="로그아웃"
          height="h-[176px]"
          titleBodyMargin="mt-1"
        >
          로그아웃 하시겠습니까?
        </MyPageModalTemplate>
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
