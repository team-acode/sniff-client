'use client';

import React, { useState } from 'react';
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
      <PreviousIcon className="cursor-pointer text-black" />
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
        <HomeIcon className="cursor-pointer text-black" />
      </div>
    </nav>
  );
};

export default Navbar;
