import Image from 'next/image';
import testImg from '@/public/images/test.jpg';
import Link from 'next/link';

interface BuyProps {
  id: string;
}

export async function getPurchase(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${id}/purchase`,
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
}

const HereTobuy = async ({ id }: BuyProps) => {
  const data: { [key: string]: string } | null = await getPurchase(id);

  if (!data) return null;
  // const data = mockupData;
  return (
    <div className="mx-4 mb-[186px]">
      <div className="h2 mb-[30px]">여기서 구매할 수 있어요</div>
      <div className="grid gap-y-3">
        {Object.values(data).map((url: string) => (
          <Link key={url} href={url}>
            <div className="flex items-center">
              <Image
                src={testImg}
                alt="sinse"
                width={80}
                height={80}
                objectFit="cover"
                className="mr-[14px] w-20 h-20 rounded-sm"
              />

              <div className="flex flex-col">
                <div className="body2 leading-[14px] font-medium mb-[14px]">
                  S.I Village 신세계 시마을
                </div>
                <div className="body2 font-medium text-acodegray-400">
                  S.I Village 신세계 시마을S.I Village <br />
                  신세계 시마을
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HereTobuy;
