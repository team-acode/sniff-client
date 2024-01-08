import Image from 'next/image';
import testImg from '@/public/images/test.jpg';
const HereTobuy = () => {
  return (
    <div>
      <div className="h2">여기서 구매할 수 있어요</div>
      <div className="flex flex-row">
        <Image
          src={testImg}
          alt={`sinse`}
          width={140}
          height={140}
          objectFit="cover"
        />
        <div className="flex flex-col">
          <div className="body2">S.I Village 신세계 시마을</div>
          <div className="body2 text-acodegray-400">
            S.I Village 신세계 시마을S.I Village
          </div>
          <div className="body2 text-acodegray-400">신세계 시마을</div>
        </div>
      </div>
    </div>
  );
};

export default HereTobuy;
