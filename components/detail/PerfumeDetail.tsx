import React from 'react';
import DetailOthers from './DetailOthers';
interface PerfumeDetailProps {
  selectedEasy: 'on' | 'off';
}

const PerfumeDetail = ({ selectedEasy }: PerfumeDetailProps) => {
  const getContent = (
    part: 'top' | 'middle' | 'base' | 'single',
  ): string | null => {
    const defaultContents = {
      top: '귤과 오렌지 사이|신선하고 달콤한 페퍼|상쾌한 파우더|후추·망고',
      middle: '쌀가루|꿀이스며든 붉은 장미',
      base: '가죽|은은한 살냄새|청사과·배|부드럽고 크리미한 나무|오래된 성당/교회|마른담배|당근',
      single: 'b|c|b|c|b|c|b|c|b|c|b|c|b|c',
    };
    const alternateContents = {
      top: '베르가못|안젤리카|알데히드|핑크 페퍼',
      middle: '아이리스|터키쉬 로즈',
      base: '레더|머스크|샌달우드|암브레트|엠버그리스|엠버우드|캐롯',
      single: '내가 어제|먹은 과자는|초코샌드|오레오',
    };

    const contents =
      selectedEasy === 'on' ? defaultContents : alternateContents;
    return contents[part] || null;
  };

  const renderFragranceNotes = () => {
    if (getContent('middle') === null) {
      const label = selectedEasy === 'on' ? '향' : '싱글';
      return (
        <div className="flex flex-col space-y-5">
          <div className="flex justify-start items-center space-x-2">
            <span className="body2 text-acodegray-700">{label}</span>
            <div className="body2 text-acodeblack">{getContent('single')}</div>
          </div>
        </div>
      );
    }

    const labels =
      selectedEasy === 'on'
        ? { top: '첫 향', middle: '메인향', base: '잔향' }
        : { top: '탑', middle: '미들', base: '베이스' };

    return (
      <div className="flex flex-col space-y-5">
        <div className="flex justify-start items-center space-x-2">
          <span className="body2 text-acodegray-700">{labels.top}</span>
          <div className="body2 text-acodeblack">{getContent('top')}</div>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <span className="body2 text-acodegray-700">{labels.middle}</span>
          <div className="body2 text-acodeblack">{getContent('middle')}</div>
        </div>
        <div className="flex justify-start items-center space-x-2">
          <span className="body2 text-acodegray-700">{labels.base}</span>
          <div className="body2 text-acodeblack">{getContent('base')}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderFragranceNotes()}
      <DetailOthers />
    </div>
  );
};

export default PerfumeDetail;
