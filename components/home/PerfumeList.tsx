import PerfumeCategoryBar from '@/components/home/PerfumeCategoryBar';
import PerfumeListElement from '@/components/home/PerfumeListElement';
import { TPerfume } from '@/types';

interface PerfumeListProps {
  searchParams: { [key: string]: string | undefined };
}

const PerfumeList = async ({ searchParams }: PerfumeListProps) => {
  const category = searchParams.category || '우디';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/home?family=${encodeURIComponent(
      category,
    )}`,
    {
      cache: 'no-cache',
    },
  );
  if (!res.ok) return null;
  const perfumes = await res.json();

  return (
    <div className="mt-[43px]">
      <div className="flex ml-4 mr-[15px] mb-3.5">
        <h3 className="h2 text-[18px] text-acodeblack">지금 인기있는 향수</h3>
      </div>
      <PerfumeCategoryBar
        searchParams={searchParams}
        selectedCategory={category}
      />
      <ul className="">
        {perfumes.map((perfume: TPerfume) => (
          <PerfumeListElement key={perfume.fragranceId} perfume={perfume} />
        ))}
      </ul>
    </div>
  );
};

export default PerfumeList;
