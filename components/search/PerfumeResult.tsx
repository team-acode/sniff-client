'use client';

import React, { useEffect, useState } from 'react';
import { TPerfume } from '@/types';
import PerfumeItem from '@/components/common/PerfumeItem';
import CategoryDropdown from '@/components/common/CategoryDropdown';
import { useInView } from 'react-intersection-observer';
import { getPerfumes } from '@/app/actions';

interface PerfumeResultProps {
  initialPerfumes: TPerfume[];
  totalElements: number;
  searchParams: string;
  totalPages: number;
}

const PerfumeResult = ({
  initialPerfumes,
  totalElements,
  searchParams,
  totalPages,
}: PerfumeResultProps) => {
  const [perfumes, setPerfumes] = useState<TPerfume[]>(initialPerfumes);
  const [page, setPage] = useState<number>(1);
  const { ref, inView } = useInView();
  useEffect(() => {
    setPerfumes(initialPerfumes);
  }, [initialPerfumes]);

  useEffect(() => {
    if (inView && page < totalPages) {
      (async () => {
        const nextPage = page + 1;
        const { data } = await getPerfumes(
          `/search/fragrance?${searchParams}`,
          nextPage,
        );
        if (data) {
          setPage(nextPage);
          setPerfumes([...perfumes, ...data]);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="px-4">
      <div className="mb-5 h-8 flex items-center">
        <h3 className="text-[16px] font-semibold leading-[24px] tracking-[-0.4px] text-acodeblack mr-auto">
          상품{' '}
          <span className="text-acodegray-400 font-medium">
            {totalElements}건
          </span>
        </h3>
        <CategoryDropdown />
      </div>
      <div className="grid grid-cols-2 gap-x-[15px] gap-y-[30px]">
        {perfumes.map((perfume) => (
          <PerfumeItem key={perfume.fragranceId} perfume={perfume} />
        ))}
      </div>
      <div className="h-[154px]" ref={ref} />
    </div>
  );
};

export default PerfumeResult;
