'use client';

import { PreviousIcon } from '@/public/images';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <div className="py-2.5">
      <PreviousIcon onClick={handleClick} />
    </div>
  );
};
export default Header;
