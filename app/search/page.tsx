'use client';

/* eslint-disable no-nested-ternary */

import BrandResult from '@/components/search/BrandResult';
import NoResult from '@/components/search/NoResult';
import PerfumeResult from '@/components/search/PerfumeResult';
import { BRANDS } from '@/constants/tempBrands';
import { PERFUMES } from '@/constants/tempPurfumes';
import { ArrowLeftIcon, SearchIcon, XCircleIcon } from '@/public/images';
import { TBrand, TPerfume } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get('q') || '');
  const [brands, setBrands] = useState<TBrand[]>([]);
  const [perfumes, setPerfumes] = useState<TPerfume[]>([]);
  // const [page, setPage] = useState<number>(1);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  useEffect(() => {
    const q = searchParams.get('q');
    setQuery(q || '');

    if (q) {
      setBrands(
        BRANDS.data.filter(
          (brand) =>
            brand.brandNameEng.includes(q) || brand.brandNameKor.includes(q),
        ),
      );
      setPerfumes(
        PERFUMES.data.filter((perfume) => {
          if (
            perfume.brandName.includes(q) ||
            perfume.perfumeName.includes(q)
          ) {
            const categories = searchParams
              .getAll('category')
              .map((cateogry) => decodeURIComponent(cateogry));
            if (categories.length) return categories.includes(perfume.category);
            return true;
          }
          return false;
        }),
      );
    }
  }, [searchParams]);

  return (
    <div className="">
      <div className="flex items-center ml-[10px] mr-[21px] mt-[13px] mb-4">
        <button type="button" className="mr-1" onClick={() => router.back()}>
          <ArrowLeftIcon className="fill-acodeblack" />
        </button>
        <form
          action=""
          className="flex bg-acodegray-50 flex-1 h-[34px] px-[11px] items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="body2 text-acodeblack font-medium flex-1 bg-transparent placeholder:text-acodegray-300"
            placeholder="검색어를 입력하세요"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            value={query}
          />
          {query !== '' ? (
            <button type="button" className="mr-2" onClick={() => setQuery('')}>
              <XCircleIcon />
            </button>
          ) : null}
          <button type="submit" className="">
            <SearchIcon className="fill-acodeblack" />
          </button>
        </form>
      </div>
      {perfumes.length || brands.length ? (
        <>
          {brands.length ? (
            <BrandResult brands={brands} count={brands.length} />
          ) : null}
          <hr className="my-5 mx-4 border-2 border-acodegray-50" />
          {perfumes.length ? (
            <PerfumeResult perfumes={perfumes} count={perfumes.length} />
          ) : null}
        </>
      ) : query ? (
        <NoResult />
      ) : null}
    </div>
  );
};

export default SearchPage;
