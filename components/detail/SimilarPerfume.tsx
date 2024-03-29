import { SmallCircleIcon } from '@/public/images';
import Image from 'next/image';
import Link from 'next/link';
// import { getPlaiceholder } from 'plaiceholder';
// import Slider from './Slider';

interface SimilarProps {
  id: string;
}
interface Fragrance {
  fragranceId: number;
  thumbnail: string;
  fragranceName: string;
  brandName: string;
  concentration: string;
}

async function getSimilar(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${id}/similar`,
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
}

const SimilarPerfume = async ({ id }: SimilarProps) => {
  const data = await getSimilar(id);

  if (!data) return null;

  const perfumes: Fragrance[] = data.similarFragranceList;
  // const blurImageUrls = await Promise.all(
  //   perfumes.map(async (perfume) => {
  //     const buffer = await fetch(perfume.thumbnail).then(async (pres) =>
  //       Buffer.from(await pres.arrayBuffer()),
  //     );

  //     const { base64 } = await getPlaiceholder(buffer);
  //     return base64;
  //   }),
  // );

  return (
    <div className="">
      <div className="text-acodeblack h2 mb-5 mx-4">이런 향수는 어때요?</div>
      <div className="flex px-4 overflow-auto gap-x-[14px]">
        {perfumes.map((perfume: Fragrance, index: number) => (
          <Link
            href={`/perfumes/${perfume.fragranceId}`}
            key={perfume.fragranceName}
            className="relative w-[138px] shrink-0"
          >
            <Image
              // placeholder="blur"
              // blurDataURL={blurImageUrls[index]}
              src={perfume.thumbnail}
              alt={`Test Perfume ${index + 1}`}
              width={138}
              height={138}
              className="w-[138px] object-cover rounded-[4px]"
            />
            <div className="w-[134px] h-[35px] flex flex-col justify-center bg-white pl-[2px] mt-[10px]">
              <div className="text-acodegray-500 caption2 mb-1 flex items-center">
                {perfume.brandName}
                <SmallCircleIcon className="fill-acodegray-500 mx-1" />
                {perfume.concentration}
              </div>
              <div className="text-acodeblack similar-1">
                {perfume.fragranceName}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <Slider>
        {perfumes.map((perfume: Perfume, index: number) => (
          <div key={perfume.fragranceName} className="w-[138px]">
            <Image
              src={perfume.image}
              alt={`Test Perfume ${index + 1}`}
              width={138}
              height={138}
              objectFit="cover"
              className="w-[138px] h-[138px] rounded-[4px]"
            />
            <div className="w-[134px] h-[35px] flex flex-col justify-center bg-white pl-[2px] mt-[10px]">
              <div className="text-acodegray-500 caption2 mb-1">
                {perfume.korbrand}
              </div>
              <div className="text-acodeblack similar-1">
                {perfume.fragranceName}
              </div>
            </div>
          </Link>
        ))}
      </Slider> */}
    </div>
  );
};

export default SimilarPerfume;
