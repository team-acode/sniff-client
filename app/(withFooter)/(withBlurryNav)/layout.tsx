import BlurryNav from '@/components/common/BlurryNav';

const WithFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BlurryNav />
      {children}
    </>
  );
};

export default WithFooterLayout;
