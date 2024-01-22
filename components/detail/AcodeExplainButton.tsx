'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EasyOffIcon, EasyOnIcon } from '@/public/images';

interface AcodeExplainProps {
  searchParams: { [key: string]: string | undefined };
  id: string;
}

const AcodeExplain = ({ searchParams, id }: AcodeExplainProps) => {
  const [selectedTab, setSelectedTab] = useState(
    searchParams.selectedTab || 'on',
  );

  const handleClick = () => {
    setSelectedTab((prevTab) => {
      const newTab = prevTab === 'on' ? 'off' : 'on';
      return newTab;
    });
  };

  const updatedSearchParams = {
    ...searchParams,
    category: 'detail',
    easy: selectedTab === 'on' ? 'off' : 'on',
  };

  return (
    <div>
      <div className="flex">
        <Link
          href={{
            pathname: `/perfumes/${id}`,
            query: updatedSearchParams,
          }}
          onClick={handleClick}
          scroll={false}
        >
          <span>{selectedTab === 'on' ? <EasyOnIcon /> : <EasyOffIcon />}</span>
        </Link>
      </div>
    </div>
  );
};

export default AcodeExplain;
