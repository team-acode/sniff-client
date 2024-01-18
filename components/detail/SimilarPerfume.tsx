import Image from 'next/image';
import Slider from './Slider';
import testPerfume1 from '@/public/images/test-perfume.jpg';

interface SimilarProps {
  id: string;
}
interface Fragrance {
  fragranceId: number;
  thumbnail: string;
  fragranceName: string;
  korBrand: string;
}
interface Perfume {
  image: string;
  korbrand: string;
  fragranceName: string;
}
export async function getSimilar(params: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/similar`,
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

const SimilarPerfume = async ({ id }: SimilarProps) => {
  const data = await getSimilar({ id });
  const perfumes: Perfume[] = data.similarFragranceList.map(
    (fragrance: Fragrance) => ({
      image: fragrance.thumbnail || testPerfume1,
      korbrand: fragrance.korBrand,
      fragranceName: fragrance.fragranceName,
    }),
  );
  return (
    <div className="mx-4">
      <div className="text-acodeblack h2 mb-5">이런향수 어때요?</div>
      <Slider>
        {perfumes.map((perfume: Perfume, index: number) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Image
              src={perfume.image}
              alt={`Test Perfume ${index + 1}`}
              width={138}
              height={138}
              objectFit="cover"
            />
            <div className="flex flex-row similar-1 items-baseline space-x-1 overflow-hidden w-full">
              <div className="text-acodegray-500 truncate">
                {perfume.korbrand}
              </div>
              <div className="text-acodegray-200">|</div>
              <div className="text-acodeblack truncate flex-grow">
                {perfume.fragranceName}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarPerfume;
