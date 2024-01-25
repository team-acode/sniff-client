import UserStyle from '@/components/matchingtest/UserStyle';
import BigLinkButton from '@/components/common/BigLinkButton';
import Similar from '@/components/matchingtest/Similar';

interface ResultPageProps {
  searchParams: { [key: string]: string | undefined };
}

interface Family {
  familyKorName: string;
  familyEngName: string;
  summary: string;
  icon: string;
  keyword: string;
}

interface Fragrance {
  fragranceId: string;
  fragranceName: string;
  brandName: string;
  familyName: string;
  thumbnail: string;
}

interface ResultPageProps {
  searchParams: { [key: string]: string | undefined };
}

const Page = ({ searchParams }: ResultPageProps) => {
  const parseAndStoreData = (params: { [key: string]: string | undefined }) => {
    const Families: Family[] = [];
    const Fragrance: Fragrance[] = [];
    const familySet = new Set();
    const fragranceSet = new Set();

    const addFamilyData = (index: string) => {
      const familyKorName = params[`familyKorName[${index}]`] || '';
      const familyEngName = params[`familyEngName[${index}]`] || '';
      const summary = params[`summary[${index}]`] || '';
      const icon = params[`icon[${index}]`] || '';
      const keyword = params[`keyword[${index}]`] || '';

      if (familyKorName && !familySet.has(familyKorName)) {
        familySet.add(familyKorName);
        Families.push({ familyKorName, familyEngName, summary, icon, keyword });
      }
    };

    const addFragranceData = (index: string) => {
      const fragranceId = params[`fragranceId[${index}]`] || '';
      if (!fragranceSet.has(fragranceId)) {
        fragranceSet.add(fragranceId);
        Fragrance.push({
          fragranceId,
          fragranceName: params[`fragranceName[${index}]`] || '',
          brandName: params[`brandName[${index}]`] || '',
          familyName: params[`familyName[${index}]`] || '',
          thumbnail: params[`thumbnail[${index}]`] || '',
        });
      }
    };

    Object.keys(params).forEach((key) => {
      const match = key.match(/\[(\d+)\]/);
      if (match) {
        const index = match[1];
        if (key.startsWith('family')) {
          addFamilyData(index);
        } else if (key.startsWith('fragrance')) {
          addFragranceData(index);
        }
      }
    });

    return { Families, Fragrance };
  };

  const { Families, Fragrance } = parseAndStoreData(searchParams);

  console.log(Families);
  console.log(Fragrance);
  const style = {
    style1: searchParams.style1,
    style2: searchParams.style2,
  };
  return (
    <div>
      <div>
        <UserStyle families={Families} />
      </div>
      <div>
        <Similar fragrance={Fragrance} style={style} />
      </div>

      <div className="flex flex-row mt-20 justify-center py-3 px-4">
        <div className="flex mr-2.5">
          <BigLinkButton
            to="/"
            buttonStyle="bg-acodegray-50 text-black w-[168px]"
          >
            공유하기
          </BigLinkButton>
        </div>
        <div className="flex">
          <BigLinkButton to="/" buttonStyle="bg-black text-white w-[168px]">
            홈으로
          </BigLinkButton>
        </div>
      </div>
    </div>
  );
};

export default Page;
