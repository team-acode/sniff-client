'use client';

import { XIcon } from '@/public/images';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex fixed top-0 items-center w-full max-w-[430px] pt-[13px] pl-[10px] pr-[13px] pb-[11px] bg-acodewhite z-20">
      <h3 className="h1 h-[30px] absolute top-[13px] left-1/2 -translate-x-2/4 text-acodeblack">
        리뷰
      </h3>
      <button type="button" className="ml-auto" onClick={() => router.back()}>
        <XIcon className=" fill-acodeblack" />
      </button>
    </div>
  );
};
export default Navbar;
