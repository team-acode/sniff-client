import { ArrowLeftIcon, SearchIcon, XCircleIcon } from '@/public/images';

const page = () => {
  return (
    <div className="flex items-center ml-[10px] mr-[16px] mt-[1px]">
      <ArrowLeftIcon className="fill-acodeblack mr-1" />
      <form
        action=""
        className="flex bg-acodegray-50 flex-1 h-[34px] pl-4 pr-[11px] items-center"
      >
        <input
          type="text"
          className="body2 text-acodeblack font-medium flex-1 bg-transparent placeholder:text-acodegray-300"
          placeholder="검색어를 입력하세요"
        />
        <button type="button" className="mr-2">
          <XCircleIcon />
        </button>
        <button type="submit" className="">
          <SearchIcon className="fill-acodeblack" />
        </button>
      </form>
    </div>
  );
};

export default page;
