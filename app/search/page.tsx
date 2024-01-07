'use client';

import { ArrowLeftIcon, SearchIcon, XCircleIcon } from '@/public/images';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };

  useEffect(() => {}, [searchParams]);

  return (
    <div className="flex items-center ml-[10px] mr-[21px] mt-[13px]">
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
  );
};

export default SearchPage;
