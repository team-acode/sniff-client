'use client';

import { useRouter } from 'next/navigation';

const UsernameSettingPage = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-acodeblack px-5 mt-[47px] flex-1 max-h-full overflow-y-auto h0">
        로그인에 사용할 <br />
        닉네임을 입력해주세요
      </h2>
      <input
        type="text"
        className="body2 font-medium mt-[45px] mx-[18px] h-10 bg-acodegray-50 p-2.5 box-border text-acodeblack placeholder:text-acodegray-300"
        placeholder="특수문자 제외 한글 또는 영문 8글자 이내"
        name="username"
      />
      <button
        type="submit"
        className="mt-[45px] w-full h-14 bg-acodeblack text-white text-[16px] font-semibold justify-center items-center inline-flex"
      >
        완료
      </button>
    </form>
  );
};

export default UsernameSettingPage;
