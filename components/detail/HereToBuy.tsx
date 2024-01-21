import Image from 'next/image';
import testImg from '@/public/images/test.jpg';
import Link from 'next/link';

interface BuyProps {
  id: string;
}
export async function getPurchase(params: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/purchase`,
    );

    if (!response.ok) {
      console.error('API fetch failed:', response.status);
      throw new Error(`API fetch failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch perfume data:', error);
  }
}
const mockupData = {
  link1: 'https://www.google.com',
  link2: 'https://instagram.com',
  link3: 'https://www.youtube.com',
};

const HereTobuy = async ({ id }: BuyProps) => {
  // const data = await getPurchase({ id });
  const data = mockupData;
  return (
    <div className="mx-4">
      <div className="h2 mb-5">여기서 구매할 수 있어요</div>
      <Link href={data.link1}>
        <div className="flex flex-row">
          <Image
            src={testImg}
            alt={`sinse`}
            width={140}
            height={140}
            objectFit="cover"
            className="mr-3"
          />

          <div className="flex flex-col">
            <div className="body2">S.I Village 신세계 시마을</div>
            <div className="body2 text-acodegray-400">
              S.I Village 신세계 시마을S.I Village
            </div>
            <div className="body2 text-acodegray-400">신세계 시마을</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HereTobuy;
