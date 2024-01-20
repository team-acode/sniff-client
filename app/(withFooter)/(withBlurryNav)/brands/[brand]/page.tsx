import { getPerfumes } from '@/app/actions';
import CategoryDropdown from '@/components/common/CategoryDropdown';
import DetailPageTemplate from '@/components/common/DetailPageTemplate';
import { redirect } from 'next/navigation';

interface CategoryPageProps {
  params: {
    brand: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ params, searchParams }: CategoryPageProps) => {
  if (!params || !params.brand) redirect('/');
  const query = params.brand;
  const searchParamString = `brand=${query}${
    searchParams.category
      ? `&family=${
          typeof searchParams.category === 'string'
            ? searchParams.category
            : searchParams.category.join('%20')
        }`
      : ''
  }`;
  const { data, totalPages } = await getPerfumes(searchParamString);

  if (!data) return null;

  return (
    <DetailPageTemplate
      sort="brand"
      query={query}
      perfumes={data}
      searchParams={searchParamString}
      totalPages={totalPages}
    >
      <div className="mb-5 h-8 flex items-center">
        <h3 className="h2 text-acodeblack mr-auto leading-[18px]">제품</h3>
        <CategoryDropdown />
      </div>
    </DetailPageTemplate>
  );
};

export default page;
