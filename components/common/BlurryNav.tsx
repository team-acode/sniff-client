'use client';

import { ArrowLeftIcon, HomeIcon, SearchIcon, UserIcon } from '@/public/images';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const BlurryNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isSpices = pathname === 'spices';

  const getTitle = (pn: string) => {
    if (pn.includes('/brands')) return '브랜드';
    if (pn.includes('/categories')) return '계열';
    if (pn.includes('/spices')) return '향료';
    return '내 정보';
  };

  return (
    <div className="fixed flex items-center w-full pt-[13px] pl-[10px] pr-[13px] pb-[11px] bg-acodewhite z-20">
      <button type="button" className="mr-auto" onClick={() => router.back()}>
        <ArrowLeftIcon className="fill-acodeblack" />
      </button>
      <h3 className="h1 h-[30px] absolute top-[13px] left-1/2 -translate-x-2/4 text-acodeblack">
        {getTitle(pathname)}
      </h3>

      <SearchIcon className=" mr-[11px] fill-acodeblack" />
      <Link href={isSpices ? '/mypage' : '/'} className="">
        {isSpices ? (
          <UserIcon className=" fill-acodeblack" />
        ) : (
          <HomeIcon className=" fill-acodeblack" />
        )}
      </Link>
    </div>
  );
};

export default BlurryNav;
