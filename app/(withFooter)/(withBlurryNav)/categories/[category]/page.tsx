import { getPerfumes } from '@/app/actions';
import DetailPageTemplate from '@/components/common/DetailPageTemplate';
import { TPerfume } from '@/types';
import { redirect } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const page = async ({ params }: CategoryPageProps) => {
  if (!params || !params.category) redirect('/');
  const query = params.category;

  const { data, totalElements } = await getPerfumes(`family=${query}`);

  if (!data) return null;

  return (
    <DetailPageTemplate
      sort="family"
      query={query}
      perfumes={data as TPerfume[]}
    >
      <div className="mb-5 flex items-center">
        <h3 className="h2 text-acodegray-500 mr-auto">
          <span className="text-acodered">{`${decodeURIComponent(
            query,
          )} `}</span>
          계열 제품
        </h3>
        <span className="body1 text-[#9ea0a3]">
          총 <span className="text-acodeblack">{totalElements}</span>건
        </span>
      </div>
    </DetailPageTemplate>
  );
};

export default page;
