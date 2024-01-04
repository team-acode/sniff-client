import Image from 'next/image';

const page = () => {
  return (
    <div className="text-acodewhite">
      <div className="relative h-[376px] px-4">
        <Image
          src="/images/detail-temp-bg.png" // 임시로 지정해둠 변경해야됨
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
          alt="detail bg"
          quality={100}
        />
        <div className="pt-[94px] flex">
          <div className="mr-auto">
            <h1 className="text-[26px] font-bold leading-[26px] tracking-[-0.26px] mb-2">
              WOODY
            </h1>
            <span className="text-acodegray-100 text-[20px] font-semibold leading-[20px] tracking-[-0.5px] mb-[56px] block">
              우디
            </span>
          </div>
          <Image
            src="/images/badge-temp.png"
            width={50}
            height={66}
            alt="badge"
            className="w-[50px] h-[66px]"
          />
        </div>
        <div className="flex text-[14px] font-medium tracking-[-0.14px] gap-[10px] mb-[20px]">
          <span className="">#자연</span>
          <span className="">#숲향</span>
          <span className="">#나무</span>
        </div>
        <p className="w-[281px] text-[16px] font-medium leading-[24px] tracking-[-0.4px] break-keep">
          부드럽고 곡선적이다. 향이 마치 둥근 포물선을 리듯 코 끝을 맴돌아
          부드러운 인상을 준다. 부드럽고 곡선적이다. 향이 마치 둥근 포물선을
          리듯 코 끝을 맴돌아 부드러운 인상을 준다.
        </p>
      </div>
      <div className="">
        <h3 className=""></h3>
        <button type="button" className=""></button>
      </div>
      <div className="">
        <div className=""></div>
      </div>
    </div>
  );
};

export default page;
