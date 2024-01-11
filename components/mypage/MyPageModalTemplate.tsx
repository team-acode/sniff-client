import BottomModal from '@/components/common/BottomModal';

interface MyPageModalTemplateProps {
  closeModal: () => void;
  handleClickOk: () => void;
  title: string;
  body: string;
  height: string;
  titleBodyMargin: string;
}
const MyPageModalTemplate = ({
  closeModal,
  handleClickOk,
  title,
  body,
  height,
  titleBodyMargin,
}: MyPageModalTemplateProps) => {
  return (
    <BottomModal closeModal={closeModal} modalStyle={height}>
      <div className="mt-6 mx-4 mb-5">
        <h3 className="h1 ml-1 text-acodeblack">{title}</h3>
        <p className={`body1 ml-1 ${titleBodyMargin} text-acodegray-600`}>
          {body}
        </p>
        <div className="mt-[18px] flex justify-between">
          <button
            type="button"
            className="h2 text-acodeblack h-14 w-[166px] rounded-[4px] bg-acodegray-50"
            onClick={closeModal}
          >
            취소
          </button>
          <button
            type="button"
            className="h2 text-acodewhite h-14 w-[166px] rounded-[4px] bg-acodeblack"
            onClick={handleClickOk}
          >
            확인
          </button>
        </div>
      </div>
    </BottomModal>
  );
};

export default MyPageModalTemplate;
