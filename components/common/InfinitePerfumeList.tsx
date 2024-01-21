'use client';

import { getPerfumes } from '@/app/actions';
import PerfumeItem from '@/components/common/PerfumeItem';
import { TPerfume } from '@/types';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfinitePerfumeListProps {
  initialPerfumes: TPerfume[];
  searchParams: string;
  totalPages: number;
}
const InfinitePerfumeList = ({
  initialPerfumes,
  searchParams,
  totalPages,
}: InfinitePerfumeListProps) => {
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
          `/display?${searchParams}`,
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
    <>
      <div className="grid grid-cols-2 gap-x-[15px] gap-y-[30px]">
        {perfumes.map((perfume) => (
          <PerfumeItem key={perfume.fragranceId} perfume={perfume} />
        ))}
      </div>
      <div className="h-[154px]" ref={ref} />
    </>
  );
};

export default InfinitePerfumeList;
