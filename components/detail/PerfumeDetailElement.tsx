import Link from 'next/link';
import React from 'react';
import AcodeExplain from './AcodeExplainButton';

interface PerfumeDetailElementProps {
  searchParams: { [key: string]: string | undefined };
  selectedTab: string;
  id: number;
}

const categories = ['detail', 'review'];
const initialSearchParams = { category: 'detail' };
const PerfumeDetailElement = ({
  searchParams = initialSearchParams,
  selectedTab,
  id,
}: PerfumeDetailElementProps) => {
  return (
    <div>
      <div className="flex flex-row">
        {categories.map((category) => (
          <div key={category} className="mr-4">
            <Link
              href={{
                pathname: `/perfumes/${id}`,
                query: {
                  ...searchParams,
                  category,
                },
              }}
              key={category}
              className={`text-left ${
                selectedTab === category
                  ? 'text-acodeblack'
                  : 'text-acodegray-300'
              } text-[16px] font-medium tracking-[-0.4px]`}
              scroll={false}
              id={category}
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
      {selectedTab === 'detail' && (
        <AcodeExplain searchParams={searchParams} id={id} />
      )}
    </div>
  );
};

export default PerfumeDetailElement;
