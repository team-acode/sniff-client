import DetailCommonNav from '@/components/common/DetailCommonNav';

const WithFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DetailCommonNav />
      {children}
    </>
  );
};

export default WithFooterLayout;
