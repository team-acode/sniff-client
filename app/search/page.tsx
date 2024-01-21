// 'use client';

/* eslint-disable no-nested-ternary */

import { getPerfumes } from '@/app/actions';
import BrandResult from '@/components/search/BrandResult';
import NoResult from '@/components/search/NoResult';
import PerfumeResult from '@/components/search/PerfumeResult';
import SearchBar from '@/components/search/SearchBar';

interface SearchPageProps {
  searchParams: {
    q: string | undefined;
    category: string | string[] | undefined;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  if (!searchParams.q) return <SearchBar initialQuery={searchParams.q || ''} />;

  const searchParamString = `search=${searchParams.q}${
    searchParams.category
      ? `&family=${
          typeof searchParams.category === 'string'
            ? searchParams.category
            : searchParams.category.join('%20')
        }`
      : ''
  }`;

  const {
    data: perfumes,
    totalElements: perfumeTotalElements,
    totalPages,
  } = await getPerfumes(`/search/fragrance?${searchParamString}`);

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_SERVER_URL
    }/search/brand?search=${encodeURIComponent(searchParams.q)}`,
  );

  let brands = [];
  let brandsTotalElements = 0;

  if (res.ok) {
    const temp = await res.json();
    brands = temp.data;
    brandsTotalElements = temp.totalElements;
  }

  return (
    <div className="">
      <SearchBar initialQuery={searchParams.q || ''} />
      {perfumeTotalElements || brandsTotalElements ? (
        <>
          {brandsTotalElements ? (
            <BrandResult brands={brands} count={brandsTotalElements} />
          ) : null}
          {brandsTotalElements && perfumeTotalElements ? (
            <hr className="my-5 mx-4 border-2 border-acodegray-50" />
          ) : null}
          {perfumeTotalElements ? (
            <PerfumeResult
              initialPerfumes={perfumes!}
              totalElements={perfumeTotalElements}
              searchParams=""
              totalPages={totalPages}
            />
          ) : null}
        </>
      ) : searchParams.q ? (
        <NoResult />
      ) : null}
    </div>
  );
};

export default SearchPage;
