import CategoryDropdown from '@/components/common/CategoryDropdown';
import DetailPageTemplate from '@/components/common/DetailPageTemplate';
import { TPerfume } from '@/types';
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

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/display?brand=${query}${
      searchParams.category
        ? `&family=${
            typeof searchParams.category === 'string'
              ? searchParams.category
              : searchParams.category.join('%20')
          }`
        : ''
    }`,
  );

  if (!res.ok) return null;

  const info: {
    data: TPerfume[];
    totalPages: number;
    totalElements: number;
  } = await res.json();

  return (
    <DetailPageTemplate sort="brand" query={query} perfumes={info.data}>
      <div className="mb-5 h-8 flex items-center">
        <h3 className="h2 text-acodeblack mr-auto leading-[18px]">제품</h3>
        <CategoryDropdown />
      </div>
    </DetailPageTemplate>
  );
};

export default page;
