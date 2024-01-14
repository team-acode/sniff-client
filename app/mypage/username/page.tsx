'use client';

import SimpleNav from '@/components/mypage/SimpleNav';
import { WarningIcon } from '@/public/images';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const UsernameSettingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isInit = searchParams.get('init') === 'true';
  const [isUsernameError, setIsUsernameError] = useState<boolean>(false);
  const [isDoneAvailable, setIsDoneAvailable] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;

    if (/^([a-zA-Z가-힣]){1,8}$/.test(username)) {
      setIsUsernameError(false);
      const res = await fetch('/api/set-username', {
        method: 'PATCH',
        body: JSON.stringify({ username: event.currentTarget.username.value }),
        cache: 'no-cache',
      });
      if (res.ok) {
        router.push('/onboarding');
      } else {
        // 닉네임 설정 오류 대응 추가 예정
      }
    } else {
      setIsUsernameError(true);
      setIsDoneAvailable(false);
    }
  };

  return (
    <div className="">
      {isInit ? (
        <h2 className="text-acodeblack px-5 mt-[47px] flex-1 max-h-full overflow-y-auto h0">
          로그인에 사용할 <br />
          닉네임을 입력해주세요
        </h2>
      ) : (
        <SimpleNav title="닉네임 수정" />
      )}
      <form
        className={`${isInit ? 'mt-[45px]' : 'mt-[84px]'} flex flex-col`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={`${
            isUsernameError ? 'border-b-[1.5px] border-acodeerror' : ''
          } body2 font-medium mx-4 h-10 bg-acodegray-50 p-2.5 box-border text-acodeblack placeholder:text-acodegray-300 rounded-sm transition ease-in-out`}
          placeholder="특수문자 제외 한글 또는 영문 8글자 이내"
          name="username"
          onInput={() => {
            setIsUsernameError(false);
            setIsDoneAvailable(true);
          }}
        />
        <div className="mt-[7px] mb-[13px] mx-4 h-6">
          {isUsernameError ? (
            <span className="caption1 flex items-center text-acodeerror font-medium animate-vibration">
              <WarningIcon className="mr-[5px]" />
              닉네임을 확인해주세요
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className={`mx-4 w-auto h-14 text-white text-[16px] font-semibold justify-center items-center inline-flex rounded-[4px] transition ${
            isDoneAvailable ? 'bg-acodeblack' : 'bg-acodegray-300'
          }`}
          disabled={!isDoneAvailable}
        >
          완료
        </button>
      </form>
    </div>
  );
};

export default UsernameSettingPage;
