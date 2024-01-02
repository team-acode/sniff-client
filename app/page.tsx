import Menu from '@/components/home/Menu';
import PerfumeList from '@/components/home/PerfumeList';
import SpiceRecommendation from '@/components/home/SpiceRecommendation';

export default function Home() {
  return (
    <div>
      <SpiceRecommendation />
      <Menu />
      <PerfumeList />
    </div>
  );
}
