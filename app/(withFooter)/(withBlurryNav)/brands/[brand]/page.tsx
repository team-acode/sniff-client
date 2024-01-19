import CategoryDropdown from '@/components/common/CategoryDropdown';
import DetailPageTemplate from '@/components/common/DetailPageTemplate';
import { PERFUMES } from '@/constants/tempPurfumes';
import { redirect } from 'next/navigation';

interface CategoryPageProps {
  params: {
    brand: string;
  };
}

const page = ({ params }: CategoryPageProps) => {
  if (!params || !params.brand) redirect('/');
  const query = params.brand;

  return (
    <DetailPageTemplate sort="brand" query={query} perfumes={PERFUMES.data}>
      <div className="mb-5 h-8 flex items-center">
        <h3 className="h2 text-acodeblack mr-auto leading-[18px]">제품</h3>
        <CategoryDropdown />
      </div>
    </DetailPageTemplate>
  );
};

export default page;
