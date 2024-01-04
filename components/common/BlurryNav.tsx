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
    return '향료';
  };

  return (
    <div className="absolute flex items-center w-full pt-[3px] pl-[10px] pr-[13px] pb-[11px] backdrop-blur-[10px] bg-white/[0.05] z-20">
      <button type="button" className="mr-auto" onClick={() => router.back()}>
        <ArrowLeftIcon className="fill-acodewhite" />
      </button>
      <h3 className="h1 h-[30px] absolute top-[3px] left-1/2 -translate-x-2/4 text-acodewhite">
        {getTitle(pathname)}
      </h3>

      <SearchIcon className=" mr-[11px] fill-acodewhite" />
      <Link href={isSpices ? '/mypage' : '/'} className="">
        {isSpices ? (
          <UserIcon className=" fill-acodewhite" />
        ) : (
          <HomeIcon className=" fill-acodewhite" />
        )}
      </Link>
    </div>
  );
};

export default BlurryNav;
