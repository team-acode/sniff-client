'use client';

import PerfumeItem from '@/components/common/PerfumeItem';
import { TPerfume } from '@/types';

interface InfinitePerfumeListProps {
  initialPerfumes: TPerfume[];
}
const InfinitePerfumeList = ({ initialPerfumes }: InfinitePerfumeListProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-[15px] gap-y-[30px] mb-[154px]">
      {initialPerfumes.map((perfume) => (
        <PerfumeItem key={perfume.fragranceId} perfume={perfume} />
      ))}
    </div>
  );
};

export default InfinitePerfumeList;
