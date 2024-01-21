'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PreviousIcon,
  BookMarkOnIcon,
  BookMarkOffIcon,
  HomeIcon,
} from '@/public/images';

const Navbar = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <nav className="flex justify-between items-center py-2 bg-white">
      <Link href={'/'}>
        <PreviousIcon className="cursor-pointer text-black" />
      </Link>
      <div className="flex space-x-4">
        {isBookmarked ? (
          <BookMarkOnIcon
            className="cursor-pointer text-black"
            onClick={toggleBookmark}
          />
        ) : (
          <BookMarkOffIcon
            className="cursor-pointer text-black"
            onClick={toggleBookmark}
          />
        )}
        <Link href={'/'}>
          <HomeIcon className="cursor-pointer text-black" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
