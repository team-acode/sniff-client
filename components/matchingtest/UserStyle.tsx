import { SceneIcon, Testing } from '@/public/images';

const UserStyle = () => {
  return (
    <div>
      <div className="flex flex-col mx-4">
        <div className="mb-16">
          <div className="h1 text-center mb-3.5">
            당신에게 어울리는 계절코드
          </div>
          <div className="flex flex-row justify-center gap-x-4">
            <div>
              <SceneIcon />
            </div>
            <div>
              <SceneIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-row mb-4">
          <div>
            <Testing className="mr-7" />
          </div>
          <div className="flex flex-col">
            <div className="h2 text-acodegray-500 mb-2.5">
              플로럴 <span className="text-acodeblack">Floral</span>
            </div>

            <div className="body1 mb-6">
              부드럽고 곡선적이다. 향이 마치 둥근 포물선을 리듯 코 끝을 맴돌아
              부드러운 인상을 준다.
            </div>
            <div className="body2">
              <span className="text-acodegray-400">#</span>시크한
            </div>
          </div>
        </div>
        <hr className="my-11 border-acodegray-50" />
      </div>
    </div>
  );
};

export default UserStyle;
