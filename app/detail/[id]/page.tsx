import ImageSlider from '@/components/detail/PerfumeImageSlider';
import DetailOhters from '@/components/detail/DetailOthers';
const page = () => {
  return (
    <section className="py-12">
      <div className="container">
        <ImageSlider />
      </div>
      <div>
        <DetailOhters />
      </div>
    </section>
  );
};

export default page;
