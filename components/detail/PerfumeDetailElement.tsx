import Link from 'next/link';
import React from 'react';
import AcodeExplain from './AcodeExplainButton';

interface PerfumeDetailElementProps {
  searchParams: { [key: string]: string | undefined };
  selectedTab: string;
  id: number;
}

const categories = ['Detail', 'Review'];
const initialSearchParams = { category: 'Detail' };
const PerfumeDetailElement = ({
  searchParams = initialSearchParams,
  selectedTab,
  id,
}: PerfumeDetailElementProps) => {
  return (
    <div className="mx-4 mb-6">
      <div className="flex flex-row justify-between">
        <div className="">
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
                      ? 'text-acodeblack border-b-2 border-acodeblack'
                      : 'text-acodegray-200'
                  }`}
                  scroll={false}
                  id={category}
                >
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {selectedTab === 'Detail' && (
          <AcodeExplain searchParams={searchParams} id={id} />
        )}
      </div>
    </div>
  );
};

export default PerfumeDetailElement;
