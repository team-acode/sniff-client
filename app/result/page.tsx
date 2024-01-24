import UserStyle from '@/components/matchingtest/UserStyle';
import SimilarPerfume from '@/components/detail/SimilarPerfume';
import BigLinkButton from '@/components/common/BigLinkButton';

const Page = () => {
  return (
    <div>
      <div>
        <UserStyle />
      </div>
      <div>
        <SimilarPerfume id="1" />
      </div>
      <div className="px-4 flex justify-center">
        <BigLinkButton to="/" buttonStyle="bg-black text-white ">
          공유하기
        </BigLinkButton>
      </div>
    </div>
  );
};
export default Page;
