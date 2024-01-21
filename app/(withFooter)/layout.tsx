import Footer from '@/components/common/Footer';

const WithFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default WithFooterLayout;
