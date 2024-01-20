import { getPerfumes } from '@/app/actions';
import DetailPageTemplate from '@/components/common/DetailPageTemplate';
import { redirect } from 'next/navigation';

interface CategoryPageProps {
  params: {
    spice: string;
  };
}

const page = async ({ params }: CategoryPageProps) => {
  if (!params || !params.spice) redirect('/');
  const query = params.spice;

  const searchParamString = `ingredient=${query}`;

  const { data, totalElements, totalPages } =
    await getPerfumes(searchParamString);

  if (!data) return null;

  return (
    <DetailPageTemplate
      sort="ingredient"
      query={query}
      perfumes={data}
      searchParams={searchParamString}
      totalPages={totalPages}
    >
      <div className="mb-5 flex items-center">
        <h3 className="h2 text-acodegray-500 mr-auto">
          <span className="text-acodered">{`${decodeURIComponent(
            query,
          )} `}</span>
          베이스 향수
        </h3>
        <span className="body1 text-[#9ea0a3]">
          총 <span className="text-acodeblack">{totalElements}</span>건
        </span>
      </div>
    </DetailPageTemplate>
  );
};

export default page;
