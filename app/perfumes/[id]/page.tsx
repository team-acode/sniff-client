import ImageSlider from '@/components/detail/PerfumeImageSlider';
import DetailOthers from '@/components/detail/DetailOthers';
import PerfumeName from '@/components/detail/PerfumeName';
// const getImage = async (type: string) => {
//   const response = await fetch(`/api/v1/fragrance/${type}`, {
//     cache: 'no-store',
//   });
//   return response.json();
// };

// interface DetailPageProps {
//   params: { id: string };
// }

// const page = async ({ params }: DetailPageProps) => {
//   const data = getImage(params.id);
//   return (
//     <section className="py-12">
//       <div className="container">
//         <ImageSlider />
//       </div>
//       <div>
//         <PerfumeName />
//       </div>
//       <div>
//         <DetailOthers />
//       </div>
//     </section>
//   );
// };
const page = () => {
  return (
    <section className="py-12">
      <div className="container">
        <ImageSlider />
      </div>
      <div>
        <PerfumeName />
      </div>
      <div>
        <DetailOthers />
      </div>
    </section>
  );
};
export default page;
