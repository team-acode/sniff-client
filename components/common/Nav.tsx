import {
  AcodeLogoSmall,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from '@/public/images';
import React from 'react';

const Nav = () => {
  return (
    <div className="flex mt-[3px] ml-[10px] mr-[13px] mb-[11px] relative">
      <MenuIcon className="mt-[6px] mr-auto" />
      <AcodeLogoSmall className="absolute top-[7px] left-1/2 -translate-x-2/4" />
      <SearchIcon className="mt-[3px] mr-[11px]" />
      <UserIcon className="mt-[3px]" />
    </div>
  );
};

export default Nav;
