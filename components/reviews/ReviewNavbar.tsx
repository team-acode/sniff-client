'use client';

import { ArrowLeftIcon, HomeIcon } from '@/public/images';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ReviewNavbar = () => {
  const router = useRouter();

  return (
    <div className="flex fixed top-0 items-center w-full max-w-[430px] pt-[13px] pl-[10px] pr-[13px] pb-[11px] bg-acodewhite z-20">
      <button type="button" className="mr-auto" onClick={() => router.back()}>
        <ArrowLeftIcon className="fill-acodeblack" />
      </button>
      <h3 className="h1 h-[30px] absolute top-[13px] left-1/2 -translate-x-2/4 text-acodeblack">
        리뷰
      </h3>
      <Link href="/" className="">
        <HomeIcon className=" fill-acodeblack" />
      </Link>
    </div>
  );
};
export default ReviewNavbar;
