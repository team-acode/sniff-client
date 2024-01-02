const page = () => {
  return (
    <div className="flex flex-col">
      <h2 className="px-5 mt-[47px] flex-1 max-h-full overflow-y-auto text-2xl font-semibold leading-9">
        로그인에 사용할 <br />
        닉네임을 입력해주세요
      </h2>
      <input
        type="text"
        className="mt-[45px] mx-[18px] h-10 bg-[#F7F7F7] p-2.5 box-border text-sm text-[#1C1818] placeholder:text-[#C0BEBB]"
        placeholder="특수문자 제외 한글 또는 영문 8글자 이내"
      />
      <button
        type="submit"
        className="mt-[45px] w-full h-14 bg-[#1C1818] text-white text-[16px] font-semibold justify-center items-center inline-flex"
      >
        완료
      </button>
    </div>
  );
};

export default page;
