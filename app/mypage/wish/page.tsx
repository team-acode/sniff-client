import SimpleNav from '@/components/mypage/SimpleNav';
import WishItem from '@/components/mypage/WishItem';
import { PERFUMES } from '@/constants/tempPurfumes';

const page = () => {
  const perfumes = PERFUMES.data;

  return (
    <div>
      <SimpleNav title="스크랩" />
      <ul className="mt-[70px] mx-4">
        {perfumes.map((perfume, idx) => (
          <>
            <WishItem perfume={perfume} />
            {idx !== PERFUMES.count - 1 ? (
              <hr className="my-5 border-t-[2px] border-[#f5f5f5]" />
            ) : null}
          </>
        ))}
      </ul>
    </div>
  );
};

export default page;
